import { useState } from "react";
import axios from "axios";
import CropCard from "./CropCard";
import CompareTable from "./CompareTable";
import api from "../api/axios";

const CropAdvisory = () => {
  const [formData, setFormData] = useState({
    state: "",
    district: "",
    soilType: "",
    irrigation: "",
    sowingMonth: "",
  });

  const [crops, setCrops] = useState([]);
  const [compareList, setCompareList] = useState([]);

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await api.post(
      "/api/cropadvisory/advisory",
      formData
    );
    setCrops(res.data.crops);
    // console.log("crop advisory.jsx", crops);
  };

  return (
    <div className="p-10">
      <form onSubmit={handleSubmit} className="space-y-4">
        {Object.keys(formData).map((key) => (
          <input
            key={key}
            name={key}
            placeholder={key}
            onChange={handleChange}
            className="border p-2 w-full"
          />
        ))}
        <button className="bg-green-600 text-white px-6 py-2">
          Get Advisory
        </button>
      </form>

      <div className="grid grid-cols-3 gap-6 mt-10">
        {crops.map((crop, index) => (
          <CropCard
            key={crop._id}
            crop={crop}
            rank={index + 1}
            compareList={compareList}
            setCompareList={setCompareList}
          />
        ))}
      </div>

      {compareList.length > 1 && (
        <CompareTable compareList={compareList} />
      )}
    </div>
  );
};

export default CropAdvisory;