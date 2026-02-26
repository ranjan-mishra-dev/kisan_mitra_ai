import React, { useEffect, useState, useContext } from "react";
import { AuthContext } from "../context/AuthProvider.jsx";
import axios from "axios";
import api from "../api/axios.js";
import toast from "react-hot-toast";

const Profile = () => {
  const { user } = useContext(AuthContext);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    avatar: "",
    state: "",
    district: "",
    village: "",
    lat: "",
    lng: "",
    landSize: "",
    preferredLanguage: "",
  });

  const [previewImage, setPreviewImage] = useState("");

  const handleGetLocation = () => {
    if (!navigator.geolocation) {
      alert("Geolocation is not supported by your browser");
      return;
    }

    navigator.geolocation.getCurrentPosition(
      (position) => {
        const { latitude, longitude } = position.coords;

        setFormData((prev) => ({
          ...prev,
          lat: latitude.toFixed(6),
          lng: longitude.toFixed(6),
        }));
      },
      (error) => {
        alert("Unable to retrieve location. Please allow location access.");
      },
    );
  };

  // Prefill name & email from context
  useEffect(() => {
    if (user) {
      setFormData((prev) => ({
        ...prev,
        name: user.name,
        email: user.email,
        avatar: user.avatar,
      }));
      setPreviewImage(user.avatar);
    }
  }, [user]);

  // Fetch farm profile
  useEffect(() => {
    const fetchFarmProfile = async () => {
      try {
        const res = await api.get("/api/farmprofile/me");
        console.log("res profile.jsx ",  res)

        const profile = res.data.data;
        console.log("profile.jsx", profile)

        // if (!profile) {
        //   toast("No farm profile found. Please create one.");
        // }

        if (profile) {
          const {
            landSize,
            preferredLanguage,
            district,
            village,
            lat,
            lng,
            state,
          } = profile;

          setFormData((prev) => ({
            ...prev,
            state: state || "",
            district: district || "",
            village: village || "",
            lat: lat || "",
            lng: lng || "",
            landSize: landSize || "",
            preferredLanguage: preferredLanguage || "",
          }));
        }
      } catch (error) {
        console.log("No farm profile found");
        toast.error(
          error.response?.data?.message || "Failed to load farm profile",
        );
      }
    };

    fetchFarmProfile();
  }, []);

  // Handle Input Change
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle Image Upload Preview
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setFormData({ ...formData, avatar: file });
      setPreviewImage(URL.createObjectURL(file));
    }
  };

  // Update Profile
  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = new FormData();
    data.append("name", formData.name);
    data.append("avatar", formData.avatar);
    data.append("state", formData.state);
    data.append("district", formData.district);
    data.append("village", formData.village);
    data.append("lat", formData.lat);
    data.append("lng", formData.lng);
    data.append("landSize", formData.landSize);
    data.append("preferredLanguage", formData.preferredLanguage);

    console.log("profile data from profile.jsx", data.name);

    await axios.put("http://localhost:5000/api/farmprofile/update", data, {
      headers: { "Content-Type": "multipart/form-data" },
      withCredentials: true,
    });

  
    toast("Profile Updated Successfully");
  };

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-6">
      <div className="w-full max-w-3xl bg-white shadow-xl rounded-2xl p-8">
        <h2 className="text-2xl font-semibold text-gray-800 mb-6">
          Edit Profile
        </h2>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Avatar Section */}
          <div className="flex items-center gap-6">
            <img
              src={previewImage}
              alt="avatar"
              className="w-24 h-24 rounded-full object-cover border-4 border-green-600"
            />

            <label className="cursor-pointer bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition">
              Change Photo
              <input
                type="file"
                onChange={handleImageChange}
                className="hidden"
              />
            </label>
          </div>

          {/* Basic Info */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-600 mb-1">
                Name
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-green-500 focus:outline-none"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-600 mb-1">
                Email
              </label>
              <input
                type="email"
                value={formData.email}
                disabled
                className="w-full bg-gray-100 border border-gray-300 rounded-lg px-3 py-2 text-gray-500 cursor-not-allowed"
              />
            </div>
          </div>

          {/* Location Section */}
          <div>
            <h3 className="text-lg font-semibold text-gray-700 mb-3">
              Location Details
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input
                name="state"
                placeholder="e.g. Uttar Pradesh"
                value={formData.state}
                onChange={handleChange}
                className="input-style"
              />
              <input
                name="district"
                placeholder="e.g. lucknow"
                value={formData.district}
                onChange={handleChange}
                className="input-style"
              />
              <input
                name="village"
                placeholder="e.g. Tulsipur"
                value={formData.village}
                onChange={handleChange}
                className="input-style"
              />
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input
                  name="lat"
                  placeholder="Latitude (Click to auto-fill)"
                  value={formData.lat}
                  onClick={handleGetLocation}
                  readOnly
                  className="input-style cursor-pointer bg-gray-50"
                />

                <input
                  name="lng"
                  placeholder="Longitude (Auto-filled)"
                  value={formData.lng}
                  readOnly
                  className="input-style bg-gray-50"
                />
              </div>
            </div>
          </div>

          {/* Other Details */}
          <div>
            <h3 className="text-lg font-semibold text-gray-700 mb-3">
              Farming Details
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input
                name="landSize"
                placeholder="e.g. 12 Bigha(only number)"
                value={formData.landSize}
                onChange={handleChange}
                className="input-style"
              />
              <input
                name="preferredLanguage"
                placeholder="e.g. Gujrati"
                value={formData.preferredLanguage}
                onChange={handleChange}
                className="input-style"
              />
            </div>
          </div>

          {/* Submit Button */}
          <div className="flex justify-end">
            <button
              type="submit"
              className="bg-green-600 text-white px-6 py-2 rounded-lg font-medium hover:bg-green-700 transition shadow-md"
            >
              Update Profile
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Profile;
