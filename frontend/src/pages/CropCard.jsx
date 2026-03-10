import { useState } from "react";
import { ChevronDown, ChevronUp, BarChart3, TrendingUp, DollarSign } from "lucide-react"; // Optional: Use Lucide icons for a pro feel

const CropCard = ({ crop, rank, compareList, setCompareList }) => {
  const [showDetails, setShowDetails] = useState(false);
  const isCompared = compareList.some((c) => c._id === crop._id);

  const handleCompare = (e) => {
    if (e.target.checked) {
      setCompareList([...compareList, crop]);
    } else {
      setCompareList(compareList.filter((c) => c._id !== crop._id));
    }
  };

  return (
    <div className="group bg-white border border-slate-200 rounded-2xl overflow-hidden hover:shadow-lg transition-all duration-300 flex flex-col h-fit">
      {/* Image Header */}
      <div className="relative">
        <img 
          src={crop.cropImage} 
          className="h-48 w-full object-cover group-hover:scale-105 transition-transform duration-500" 
          alt={crop.name}
        />
        <div className="absolute top-3 left-3 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full shadow-sm">
          <span className="text-xs font-bold text-emerald-700 uppercase tracking-wider">Rank #{rank}</span>
        </div>
      </div>

      {/* Main Content */}
      <div className="p-5">
        <div className="flex justify-between items-start mb-3">
          <h3 className="text-xl font-extrabold text-slate-800 tracking-tight">{crop.name}</h3>
          <span className={`text-[10px] font-bold px-2 py-0.5 rounded uppercase ${crop.riskLevel === 'Low' ? 'bg-emerald-100 text-emerald-700' : 'bg-amber-100 text-amber-700'}`}>
            {crop.riskLevel} Risk
          </span>
        </div>

        {/* Financial Summary Grid */}
        <div className="grid grid-cols-2 gap-4 mb-5">
          <div className="bg-emerald-50 p-3 rounded-xl border border-emerald-100">
            <p className="text-[10px] uppercase font-bold text-emerald-600 mb-1">Est. Profit / Acre</p>
            <p className="text-sm font-bold text-emerald-900 leading-none">
              ₹{crop.economics.estimatedProfitPerAcre.min.toLocaleString()} - ₹{crop.economics.estimatedProfitPerAcre.max.toLocaleString()}
            </p>
          </div>
          <div className="bg-slate-50 p-3 rounded-xl border border-slate-100">
            <p className="text-[10px] uppercase font-bold text-slate-500 mb-1">Total Cost / Acre</p>
            <p className="text-sm font-bold text-slate-800 leading-none">
              ₹{crop.economics.totalCostPerAcre.min.toLocaleString()} - ₹{crop.economics.totalCostPerAcre.max.toLocaleString()}
            </p>
          </div>
        </div>

        {/* Actions */}
        <div className="flex items-center justify-between pt-2 border-t border-slate-100">
          <label className="flex items-center space-x-2 cursor-pointer group/label">
            <input 
              type="checkbox" 
              checked={isCompared}
              onChange={handleCompare} 
              className="w-4 h-4 rounded border-gray-300 text-emerald-600 focus:ring-emerald-500 cursor-pointer" 
            />
            <span className="text-sm font-medium text-slate-600 group-hover/label:text-slate-900 transition-colors">Compare</span>
          </label>

          <button
            onClick={() => setShowDetails(!showDetails)}
            className="flex items-center text-sm font-semibold text-emerald-600 hover:text-emerald-700 transition-colors"
          >
            {showDetails ? 'Show Less' : 'Details'}
            {showDetails ? <ChevronUp size={16} className="ml-1" /> : <ChevronDown size={16} className="ml-1" />}
          </button>
        </div>

        

        {/* Expandable Details Section */}
        {showDetails && (
          <div className="mt-4 pt-4 border-t border-slate-100 animate-in fade-in slide-in-from-top-2 duration-300">
            <div className="space-y-4 text-sm">
              
              {/* Agricultural Info */}
              <div className="grid grid-cols-2 gap-y-3 gap-x-2 text-slate-600">
                <div>
                  <p className="text-[10px] font-bold text-slate-400 uppercase">Sowing</p>
                  <p className="font-medium text-slate-800 truncate">{crop?.sowing?.sowingMonths?.join(", ")}</p>
                </div>
                <div>
                  <p className="text-[10px] font-bold text-slate-400 uppercase">Harvesting</p>
                  <p className="font-medium text-slate-800">{crop?.harvesting?.harvestingStartMonth} - {crop?.harvesting?.harvestingEndMonth}</p>
                </div>
                <div>
                  <p className="text-[10px] font-bold text-slate-400 uppercase">Irrigation</p>
                  <p className="font-medium text-slate-800">{crop?.irrigation?.irrigationMin}-{crop?.irrigation?.irrigationMax} times</p>
                </div>
                <div>
                  <p className="text-[10px] font-bold text-slate-400 uppercase">Duration</p>
                  <p className="font-medium text-slate-800">{crop?.duration?.minMonths}-{crop?.duration?.maxMonths} months</p>
                </div>
              </div>

              {/* Fertilizer Tag Cloud */}
              <div>
                <p className="text-[10px] font-bold text-slate-400 uppercase mb-2">Fertilizers</p>
                <div className="flex flex-wrap gap-1">
                  {crop.fertilizer.recommendedTypes.map((f, i) => (
                    <span key={i} className="bg-slate-100 text-slate-700 px-2 py-0.5 rounded text-[11px] font-medium border border-slate-200">
                      {f}
                    </span>
                  ))}
                </div>
              </div>

              {/* Detailed Economics */}
              <div className="bg-slate-900 rounded-xl p-4 text-slate-100">
                <h4 className="text-xs font-bold uppercase tracking-widest text-emerald-400 mb-3 flex items-center">
                   Market Economics
                </h4>
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-slate-400 text-xs">Mandi Price (q)</span>
                    <span className="font-bold text-white">₹{crop?.economics?.mandiPricePerQuintal?.min} - ₹{crop?.economics?.mandiPricePerQuintal?.max}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-slate-400 text-xs">Price Fluctuation</span>
                    <span className={`font-bold ${crop?.economics?.mandiPricePerQuintal?.maxFluctuation > 15 ? 'text-amber-400' : 'text-emerald-400'}`}>
                      {crop?.economics?.mandiPricePerQuintal?.maxFluctuation}%
                    </span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-slate-400 text-xs">Seed Cost / Acre</span>
                    <span className="font-bold text-white text-xs">₹{crop?.economics?.seedCostPerAcre?.min} - ₹{crop?.economics?.seedCostPerAcre?.max}</span>
                  </div>
                </div>
              </div>

            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default CropCard;