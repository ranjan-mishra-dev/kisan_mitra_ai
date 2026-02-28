import { useState } from "react";

const CropCard = ({ crop, rank, compareList, setCompareList }) => {
  const [showDetails, setShowDetails] = useState(false);

  const handleCompare = (e) => {
    if (e.target.checked) {
      setCompareList([...compareList, crop]);
    } else {
      setCompareList(compareList.filter((c) => c._id !== crop._id));
    }
  };

  console.log("crop card.jsx", crop);

  return (
    <div className="bg-white shadow-xl p-4 rounded-2xl">
      <span className="text-sm text-green-600 font-bold">Rank #{rank}</span>

      <img src={crop.cropImage} className="h-40 w-full object-cover rounded" />

      <h3 className="text-lg font-bold mt-2">{crop.name}</h3>

      <p>
        Profit: ₹{crop.economics.estimatedProfitPerAcre.min.toLocaleString()}
        {" - "}₹{crop.economics.estimatedProfitPerAcre.max.toLocaleString()}
      </p>

      <p>
        Cost: ₹{crop.economics.totalCostPerAcre.min.toLocaleString()}
        {" - "}₹{crop.economics.totalCostPerAcre.max.toLocaleString()}
      </p>

      <div className="flex justify-between items-center mt-2">
        <label>
          <input type="checkbox" onChange={handleCompare} /> Compare
        </label>

        <button
          onClick={() => setShowDetails(!showDetails)}
          className="text-blue-600"
        >
          View More
        </button>
      </div>

      {showDetails && (
        <div className="mt-3 text-sm space-y-1">
          <p>Fertilizer: {crop.fertilizer}</p>
          <p>Irrigation: {crop.irrigationCount}</p>
          <p>Sowing Months: {crop.bestSowingMonths.join(", ")}</p>
          <p>Harvesting: {crop.harvestingMonth}</p>
          <p>Risk: {crop.riskLevel}</p>
          <p>Duration: {crop.durationMonths} months</p>
        </div>
      )}
    </div>
  );
};

export default CropCard;
