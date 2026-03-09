import React, { useState } from "react";
import axios from "axios";
import { Upload, RefreshCw, AlertCircle, CheckCircle2, Leaf, FlaskConical, IndianRupee } from "lucide-react";

const PlantDiseaseDetect = () => {
  const [image, setImage] = useState(null);
  const [preview, setPreview] = useState(null);
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState(null);

  const predictPlant = async (imgFile) => {
    const formData = new FormData();
    formData.append("image", imgFile);
    // Replace with your production URL when deploying
    const res = await axios.post("http://localhost:5000/api/predict", formData);
    return res.data;
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImage(file);
      setPreview(URL.createObjectURL(file));
      setResult(null);
    }
  };

  const handleSubmit = async () => {
    if (!image) return;

    try {
      setLoading(true);
      const res = await predictPlant(image);

      if (!res?.advice || res.advice.includes("उत्तर तैयार नहीं हो पाया")) {
        throw new Error(res?.advice || "सर्वर से जवाब नहीं मिला");
      }

      const splitData = res.advice.split("|").map((item) => item.trim());
      setResult(splitData);
    } catch (err) {
      alert("पहचान विफल रही: " + err.message);
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
    <div className="min-h-screen pt-28 pb-12 bg-gray-50 px-4">
      <div className="max-w-2xl mx-auto">
        
        {/* HEADER */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-black text-gray-900 mb-2">
            AI Disease <span className="text-green-600">Detection</span>
          </h1>
          <p className="text-gray-500 font-medium">पौधों के रोगों की सटीक पहचान और उपचार</p>
        </div>

        <div className="bg-white shadow-2xl shadow-green-900/5 rounded-[2.5rem] p-8 border border-gray-100">
          
          {/* UPLOAD SECTION */}
          {!preview ? (
            <label className="group relative flex flex-col items-center justify-center w-full h-64 border-2 border-dashed border-gray-300 rounded-[2rem] bg-gray-50 hover:bg-green-50 hover:border-green-400 transition-all cursor-pointer overflow-hidden">
              <div className="flex flex-col items-center justify-center pt-5 pb-6">
                <div className="p-4 bg-white rounded-2xl shadow-sm mb-4 group-hover:scale-110 transition-transform">
                  <Upload className="w-8 h-8 text-green-600" />
                </div>
                <p className="mb-2 text-sm text-gray-700 font-bold">पत्ते की फोटो यहाँ अपलोड करें</p>
                <p className="text-xs text-gray-500">PNG, JPG or JPEG (MAX. 10MB)</p>
              </div>
              <input type="file" accept="image/*" onChange={handleImageChange} className="hidden" />
            </label>
          ) : (
            <div className="relative group">
              <img src={preview} alt="preview" className="w-full h-80 object-cover rounded-[2rem] shadow-md border-4 border-white" />
              {!result && !loading && (
                <button 
                  onClick={reset}
                  className="absolute top-4 right-4 bg-black/50 backdrop-blur-md text-white p-2 rounded-full hover:bg-red-500 transition-colors"
                >
                  <RefreshCw className="w-5 h-5" />
                </button>
              )}
            </div>
          )}

          {/* ACTION BUTTON */}
          {image && !loading && !result && (
            <button
              onClick={handleSubmit}
              className="w-full mt-8 bg-[#2E7D32] text-white py-4 rounded-2xl font-bold text-lg hover:bg-[#1B5E20] shadow-lg shadow-green-900/20 transition-all active:scale-95 flex items-center justify-center gap-2"
            >
              <FlaskConical className="w-5 h-5" />
              बीमारी का पता लगायें (Analyze Now)
            </button>
          )}

          {/* LOADING STATE */}
          {loading && (
            <div className="flex flex-col items-center justify-center mt-10 py-10">
              <div className="w-16 h-16 border-4 border-green-100 border-t-green-600 rounded-full animate-spin mb-4"></div>
              <p className="text-green-700 font-bold animate-pulse">AI विश्लेषण कर रहा है, कृपया प्रतीक्षा करें...</p>
            </div>
          )}

          {/* RESULT CARD */}
          {result && (
  <div className="mt-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
    {/* CHECK IF HEALTHY */}
    {result[1].includes("स्वस्थ") || result[1].toLowerCase().includes("healthy") ? (
      <div className="bg-green-100 rounded-3xl p-8 border-2 border-green-500 text-center">
        <div className="w-20 h-20 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg shadow-green-200">
          <CheckCircle2 className="w-10 h-10 text-white" />
        </div>
        <h3 className="text-2xl font-black text-green-900 mb-2">सब कुछ ठीक है!</h3>
        <p className="text-green-800 font-medium mb-6">"Don't worry, your plant is healthy."</p>
        
        <div className="bg-white/50 p-4 rounded-2xl text-left border border-green-200 mb-6">
          <p className="text-sm text-green-900 leading-relaxed">
            <b>{result[0]}:</b> {result[2].split(';')[0]}
          </p>
        </div>

        <button
          onClick={reset}
          className="w-full bg-green-600 text-white py-4 rounded-2xl font-bold hover:bg-green-700 transition-all flex items-center justify-center gap-2"
        >
          <RefreshCw className="w-5 h-5" />
          दूसरा फोटो जाँचें
        </button>
      </div>
    ) : (
              <div className="bg-green-50 rounded-3xl p-6 border border-green-100">
                <div className="flex items-center gap-2 text-green-800 font-bold text-lg mb-6 border-b border-green-200 pb-3">
                  <CheckCircle2 className="w-6 h-6" /> AI विश्लेषण रिपोर्ट
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <ResultItem icon={<Leaf className="w-4 h-4" />} label="पौधे का नाम" value={result[0]} />
                  <ResultItem icon={<AlertCircle className="w-4 h-4" />} label="रोग का नाम" value={result[1]} color="text-red-600" />
                </div>
                
                <div className="mt-6 space-y-4">
                  <div className="bg-white p-4 rounded-2xl">
                    <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-1">रोग विवरण</p>
                    <p className="text-gray-700 text-sm leading-relaxed">{result[2]}</p>
                  </div>
                  <div className="bg-white p-4 rounded-2xl border-l-4 border-green-500">
                    <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-1">उपचार (Treatment)</p>
                    <p className="text-gray-700 text-sm">{result[3]}</p>
                  </div>
                  <div className="bg-white p-4 rounded-2xl border-l-4 border-blue-500">
                    <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-1">रोकथाम</p>
                    <p className="text-gray-700 text-sm">{result[4]}</p>
                  </div>
                  <div className="bg-green-100 p-4 rounded-2xl flex items-center justify-between">
                    <span className="text-sm font-bold text-green-800">अनुमानित लागत (प्रति बिघा)</span>
                    <span className="flex items-center font-black text-green-900"><IndianRupee className="w-4 h-4" />{result[5]}</span>
                  </div>
                </div>

                <button
                  onClick={reset}
                  className="w-full mt-8 bg-gray-900 text-white py-4 rounded-2xl font-bold hover:bg-black transition-all flex items-center justify-center gap-2"
                >
                  <RefreshCw className="w-5 h-5" />
                  दूसरा फोटो अपलोड करें
                </button>
              </div>
          )}
        </div>
          )}
      </div>
    </div>
    </div>
  );
};

// Helper Component for Result Grid
const ResultItem = ({ icon, label, value, color = "text-gray-900" }) => (
  <div>
    <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-1 flex items-center gap-1">
      {icon} {label}
    </p>
    <p className={`font-bold text-lg ${color}`}>{value}</p>
  </div>
);

export default PlantDiseaseDetect;