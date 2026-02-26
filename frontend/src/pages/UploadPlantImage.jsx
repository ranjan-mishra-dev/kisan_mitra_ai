import React, { useState } from "react";
import axios from "axios";

const PlantDiseaseDetect = () => {
  const [image, setImage] = useState(null);
  const [preview, setPreview] = useState(null);
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState(null);

  const predictPlant = async (image) => {
    const formData = new FormData();
    formData.append("image", image);
    // console.log("predictPlant", formData.get("image"));

    const res = await axios.post("http://localhost:5000/api/predict", formData);
    return res.data;
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setImage(file);
    setPreview(URL.createObjectURL(file));
    setResult(null);
  };

  const handleSubmit = async () => {
    if (!image) return alert("कृपया फोटो अपलोड करें");

    const formData = new FormData();
    formData.append("image", image);

    try {
      setLoading(true);

      const res = await predictPlant(image);
      console.log("upload...", res.advice)
      const splitData = res.advice.split("|").map((item) => item.trim());

      setResult(splitData);
    } catch (err) {
      alert("Prediction failed");
    } finally {
      setLoading(false);
    }
  };

  const reset = () => {
    setImage(null);
    setPreview(null);
    setResult(null);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-green-50 px-4">
      <div className="bg-white shadow-xl rounded-2xl p-6 w-full max-w-md">
        <h2 className="text-xl font-bold text-center text-green-700 mb-4">
          🌱 पौधा रोग पहचान प्रणाली
        </h2>

        {!image && (
          <input
            type="file"
            accept="image/*"
            onChange={handleImageChange}
            className="w-full border border-gray-300 rounded-lg p-2"
          />
        )}

        {preview && (
          <img
            src={preview}
            alt="preview"
            className="w-full h-56 object-cover rounded-xl mt-4"
          />
        )}

        {image && !loading && !result && (
          <button
            onClick={handleSubmit}
            className="w-full mt-4 bg-green-600 text-white py-2 rounded-lg hover:bg-green-700 transition"
          >
            Submit
          </button>
        )}

        {loading && (
          <div className="flex justify-center mt-6">
            <div className="w-12 h-12 border-4 border-green-200 border-t-green-600 rounded-full animate-spin"></div>
          </div>
        )}

        {result && (
          <div className="mt-6 bg-green-50 p-4 rounded-xl space-y-2 text-sm">
            <p>
              <b>🌿 पौधे का नाम:</b> {result[0]}
            </p>
            <p>
              <b>🦠 रोग का नाम:</b> {result[1]}
            </p>
            <p>
              <b>📖 रोग विवरण:</b> {result[2]}
            </p>
            <p>
              <b>💊 उपचार:</b> {result[3]}
            </p>
            <p>
              <b>🛡 रोकथाम:</b> {result[4]}
            </p>
            <p>
              <b>💰 लागत प्रति बिघा:</b> {result[5]}
            </p>

            <button
              onClick={reset}
              className="w-full mt-4 bg-gray-700 text-white py-2 rounded-lg hover:bg-gray-800 transition"
            >
              🔄 दूसरा फोटो अपलोड करें
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default PlantDiseaseDetect;
