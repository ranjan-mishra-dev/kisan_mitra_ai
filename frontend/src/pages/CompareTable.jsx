import axios from "axios";
import { useState } from "react";

const CompareTable = ({ compareList }) => {
  const [summary, setSummary] = useState("");

  const handleSummarize = async () => {
    const res = await axios.post("/api/gemini/summarize", {
      crops: compareList,
    });
    setSummary(res.data.summary);
  };

  return (
    <div className="mt-10">
      <table className="w-full border">
        <thead>
          <tr>
            <th>Name</th>
            <th>Profit</th>
            <th>Cost</th>
            <th>Risk</th>
          </tr>
        </thead>
        <tbody>
          {compareList.map((crop) => (
            <tr key={crop._id}>
              <td>{crop.name}</td>
              <td>{crop.estimatedProfit}</td>
              <td>{crop.estimatedCostPerAcre}</td>
              <td>{crop.riskLevel}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <button
        onClick={handleSummarize}
        className="bg-purple-600 text-white px-6 py-2 mt-4"
      >
        Summarize Advice
      </button>

      {summary && (
        <div className="mt-4 p-4 bg-gray-100 rounded">
          {summary}
        </div>
      )}
    </div>
  );
};

export default CompareTable;