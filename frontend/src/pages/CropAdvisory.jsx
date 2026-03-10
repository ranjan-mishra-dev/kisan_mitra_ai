import { useState } from "react";
import axios from "axios";
import CropCard from "./CropCard";
import api from "../api/axios";
import CompareBar from "./CompareBar";
import { soilTypes, irrigationTypes, months } from "../constants/cropOptions.js"
import  CropGeminiSummary from './CropGeminiSummary.jsx'
import GeminiSummary from "./CropGeminiSummary.jsx";


const CropAdvisory = () => {
  const [formData, setFormData] = useState({
    state: "",
    district: "",
    soilType: "",
    irrigation: "",
    sowingMonth: "",
  });

  
  const [showSoilModal, setShowSoilModal] = useState(false);
  const [crops, setCrops] = useState([]);
  const [compareList, setCompareList] = useState([]);

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await api.post("/api/cropadvisory/advisory", formData);
    setCrops(res.data.crops);
  };

  return (
    <div className="min-h-screen bg-slate-50 py-12 px-6">
      <div className="max-w-5xl mx-auto">
        {" "}
        <form
          onSubmit={handleSubmit}
          className="bg-white shadow-lg rounded-2xl p-6 space-y-5 border border-slate-200 max-w-lg mx-auto"
        >
          <h2 className="text-xl font-bold text-slate-800">
            Get Crop Advisory
          </h2>
          <div className="space-y-4">
            {Object.keys(formData).map((key) => (
              <div key={key} className="flex flex-col space-y-1">
                <label className="text-sm font-semibold text-slate-600 capitalize">
                  {key.replace(/([A-Z])/g, " $1")}
                </label>

                {/* STATE & DISTRICT → TEXT INPUT */}
                {key === "state" || key === "district" ? (
                  <input
                    type="text"
                    name={key}
                    value={formData[key]}
                    onChange={handleChange}
                    placeholder={`Enter ${key}`}
                    className="w-full rounded-lg border border-slate-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition"
                  />
                ) : /* MONTH DROPDOWN */
                key.toLowerCase().includes("month") ? (
                  <select
                    name={key}
                    value={formData[key]}
                    onChange={handleChange}
                    className="w-full rounded-lg border border-slate-300 px-3 py-2 text-sm bg-white focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition"
                  >
                    <option value="">Select Month</option>
                    {months.map((month) => (
                      <option key={month} value={month}>
                        {month}
                      </option>
                    ))}
                  </select>
                ) : /* SOIL DROPDOWN */
                key.toLowerCase().includes("soil") ? (
                  <>
                    <select
                      name={key}
                      value={formData[key]}
                      onChange={handleChange}
                      className="w-full rounded-lg border border-slate-300 px-3 py-2 text-sm bg-white focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition"
                    >
                      <option value="">Select Soil Type</option>
                      {soilTypes.map((soil) => (
                        <option key={soil} value={soil}>
                          {soil}
                        </option>
                      ))}
                    </select>

                    <button
                      type="button"
                      onClick={() => setShowSoilModal(true)}
                      className="text-xs text-emerald-600 hover:underline mt-1 w-fit"
                    >
                      Get your soil name
                    </button>
                  </>
                ) : /* IRRIGATION DROPDOWN */
                key.toLowerCase().includes("irrigation") ? (
                  <select
                    name={key}
                    value={formData[key]}
                    onChange={handleChange}
                    className="w-full rounded-lg border border-slate-300 px-3 py-2 text-sm bg-white focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition"
                  >
                    <option value="">Select Irrigation Type</option>
                    {irrigationTypes.map((type) => (
                      <option key={type} value={type}>
                        {type}
                      </option>
                    ))}
                  </select>
                ) : (
                  /* DEFAULT → NUMBER INPUT */
                  <input
                    type="number"
                    name={key}
                    value={formData[key]}
                    onChange={handleChange}
                    placeholder={`Enter ${key}`}
                    className="w-full rounded-lg border border-slate-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition"
                  />
                )}
              </div>
            ))}
          </div>
          
          {" "}
         
          {showSoilModal && (
            <div className="fixed inset-0 bg-black/40 backdrop-blur-sm flex items-center justify-center z-50">
              <div className="bg-white rounded-2xl shadow-xl max-w-3xl w-full p-6 relative">
                <h2 className="text-lg font-bold text-slate-800 mb-4">
                  Identify Your Soil Type
                </h2>

                <img
                  src="https://n2r5uux6k5.ucarecd.net/5d06ecd7-b3dd-4fe6-a96b-b8cffafa4044/-/preview/1000x562/"
                  alt="Soil Types Reference"
                  className="rounded-lg w-full"
                />

                <div className="flex justify-end mt-6">
                  <button
                    onClick={() => setShowSoilModal(false)}
                    className="px-4 py-2 bg-slate-200 rounded-lg hover:bg-slate-300 transition"
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
          )}
          <button
            type="submit"
            className="w-full bg-emerald-600 hover:bg-emerald-700 text-white font-semibold py-2.5 rounded-lg transition duration-200 shadow-md hover:shadow-lg"
          >
            Get Advisory
          </button>
        </form>
      </div>

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
        <CompareBar compareList={compareList} setCompareList={setCompareList} />
      )}


      <GeminiSummary selectedCrops={compareList} farmerInput={formData} />

      
    </div>
  );
};

export default CropAdvisory;
