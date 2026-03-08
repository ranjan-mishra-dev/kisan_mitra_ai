import { useState } from "react";
import api from "../api/axios.js";
import ReactMarkdown from "react-markdown";

const GeminiSummary = ({ selectedCrops, farmerInput }) => {
  const [summary, setSummary] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSummarize = async () => {
    try {
      setLoading(true);

      const res = await api.post("/api/cropadvisory/hindi-summary", {
        selectedCrops,
        farmerInput,
      });

      if (res.data.success) {
        setSummary(res.data.summary);
      }

      setLoading(false);
    } catch (err) {
      console.error(err);
      setLoading(false);
    }
  };

  return (
    <div className="mt-10">
      <button
        onClick={handleSummarize}
        className="flex items-center gap-3 px-6 py-3 
  text-black bg-white 
  border border-emerald-500 
  rounded-xl 
  shadow-lg shadow-emerald-300/20
  hover:bg-emerald-300 hover:text-black
  hover:shadow-emerald-500/40
  transition-all duration-300 ease-in-out"
      >
        <img
          src="https://n2r5uux6k5.ucarecd.net/ac32fa8a-1507-4149-853f-4d81afc28459/-/preview/512x512/"
          alt="Gemini"
          className="w-6 h-6"
        />

        {loading ? "Generating..." : "Summarize (Powered by Gemini)"}
      </button>

      {summary && (
        <div className="mt-6 p-6 bg-gray-50 border rounded-xl shadow-sm">
          <h3 className="text-lg font-semibold mb-3 text-gray-700">
            AI Crop Advisory
          </h3>

          <p className="text-gray-600 whitespace-pre-line">
            <ReactMarkdown>{summary}</ReactMarkdown>
          </p>
        </div>
      )}
    </div>
  );
};

export default GeminiSummary;
