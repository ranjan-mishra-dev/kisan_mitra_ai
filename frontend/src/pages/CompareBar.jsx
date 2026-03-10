import { X } from "lucide-react";

const CompareBar = ({ compareList, setCompareList }) => {
  if (compareList.length === 0) return null;

  const removeCrop = (id) => {
    setCompareList(compareList.filter((c) => c._id !== id));
  };

  const clearAll = () => {
    setCompareList([]);
  };

  return (
    <div className="fixed top-0 left-0 w-full bg-white shadow-xl border-b z-50 animate-in slide-in-from-top duration-300">
      
      <div className="max-w-7xl mx-auto p-6">
        
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-lg font-bold text-slate-800">
            Crop Comparison ({compareList.length})
          </h2>

          <button
            onClick={clearAll}
            className="text-sm text-red-500 hover:text-red-600 font-medium"
          >
            Clear All
          </button>
        </div>

        {/* Comparison Table */}
        <div className="overflow-x-auto">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="text-left bg-slate-100 text-slate-600 uppercase text-xs">
                <th className="p-3">Feature</th>
                {compareList.map((crop) => (
                  <th key={crop._id} className="p-3 relative">
                    {crop.cropName}
                    <button
                      onClick={() => removeCrop(crop._id)}
                      className="absolute top-2 right-2 text-red-400 hover:text-red-600"
                    >
                      <X size={14} />
                    </button>
                  </th>
                ))}
              </tr>
            </thead>

            <tbody className="divide-y">
              
              {/* Profit */}
              <tr>
                <td className="p-3 font-medium text-slate-600">Est. Profit</td>
                {compareList.map((crop) => (
                  <td key={crop._id} className="p-3 text-emerald-600 font-semibold">
                    ₹{crop.economics.estimatedProfitPerAcre.min} -
                    ₹{crop.economics.estimatedProfitPerAcre.max}
                  </td>
                ))}
              </tr>

              {/* Cost */}
              <tr>
                <td className="p-3 font-medium text-slate-600">Total Cost</td>
                {compareList.map((crop) => (
                  <td key={crop._id} className="p-3">
                    ₹{crop.economics.totalCostPerAcre.min} -
                    ₹{crop.economics.totalCostPerAcre.max}
                  </td>
                ))}
              </tr>

              {/* Duration */}
              <tr>
                <td className="p-3 font-medium text-slate-600">Duration</td>
                {compareList.map((crop) => (
                  <td key={crop._id} className="p-3">
                    {crop.duration.minMonths}-{crop.duration.maxMonths} months
                  </td>
                ))}
              </tr>

              {/* Risk */}
              <tr>
                <td className="p-3 font-medium text-slate-600">Risk Level</td>
                {compareList.map((crop) => (
                  <td key={crop._id} className="p-3">
                    {crop.riskLevel}
                  </td>
                ))}
              </tr>

            </tbody>
          </table>
        </div>

      </div>
    </div>
  );
};

export default CompareBar;