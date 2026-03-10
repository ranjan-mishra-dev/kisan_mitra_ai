import React from "react";
import { Camera, Sprout, BarChart3, ArrowRight, Zap, CheckCircle2 } from "lucide-react";
import { Link } from "react-router-dom";

const Features = () => {
  const featureList = [
    {
      title: "AI Disease Detection",
      description: "Identify crop threats instantly. Our AI analyzes leaf patterns to detect diseases and provides step-by-step recovery plans.",
      icon: <Camera className="w-8 h-8 text-green-600" />,
      tag: "Most Popular",
      link: "/upload-image",
      cta: "Identify Disease",
      points: ["Instant Results", "Pesticide Guides", "Recovery Tracking"],
      color: "bg-green-50"
    },
    {
      title: "Crop Advisory",
      description: "Expert guidance from seed to harvest. Get personalized advice on soil health, fertilizer timing, and growth optimization.",
      icon: <Sprout className="w-8 h-8 text-amber-600" />,
      tag: "Expert Choice",
      link: "/crop-advisory",
      cta: "Get Advisory",
      points: ["Cost Estimation", "Yield Prediction", "Growth Timeline"],
      color: "bg-amber-50"
    },
    {
      title: "Real-Time Mandi Price",
      description: "Stay ahead of the market. Access live rates from your local and national mandis to ensure you sell for the best price.",
      icon: <BarChart3 className="w-8 h-8 text-blue-600" />,
      tag: "Coming Soon",
      link: "#",
      cta: "working...",
      points: ["Market Trends", "Govt Schemes", "Price Alerts"],
      color: "bg-blue-50"
    }
  ];

  return (
    <div className="min-h-screen bg-white pb-20 pt-28">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* HEADER */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div className="inline-flex items-center gap-2 bg-green-100 text-green-700 px-4 py-1.5 rounded-full text-sm font-bold mb-6">
            <Zap className="w-4 h-4 fill-current" />
            Cutting Edge Agri-Tech
          </div>
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6">
            Smart Solutions for <br />
            <span className="text-[#2E7D32]">Modern Farming</span>
          </h1>
          <p className="text-lg text-gray-600">
            We combine artificial intelligence with traditional farming wisdom to help you 
            maximize your yield and secure your profits.
          </p>
        </div>

        {/* FEATURE CARDS */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {featureList.map((f, i) => (
            <div 
              key={i} 
              className="relative group bg-white border border-gray-100 rounded-[2.5rem] p-8 shadow-sm transition-all duration-300 hover:shadow-xl hover:-translate-y-2 flex flex-col"
            >
              {/* Top Section */}
              <div className="flex justify-between items-start mb-8">
                <div className={`${f.color} p-4 rounded-2xl`}>
                  {f.icon}
                </div>
                <span className={`text-[10px] uppercase tracking-widest font-bold px-3 py-1 rounded-full border ${f.title === 'Real-Time Mandi Price' ? 'bg-gray-100 text-gray-500 border-gray-200' : 'bg-green-100 text-green-700 border-green-200'}`}>
                  {f.tag}
                </span>
              </div>

              <h2 className="text-2xl font-bold text-gray-900 mb-4">{f.title}</h2>
              <p className="text-gray-600 mb-8 leading-relaxed">
                {f.description}
              </p>

              {/* Bullet Points */}
              <div className="space-y-3 mb-10 flex-grow">
                {f.points.map((point, index) => (
                  <div key={index} className="flex items-center gap-3 text-sm font-medium text-gray-700">
                    <CheckCircle2 className="w-4 h-4 text-green-500" />
                    {point}
                  </div>
                ))}
              </div>

              {/* Action Button */}
              <Link 
                to={f.link}
                className={`flex items-center justify-center gap-2 w-full py-4 rounded-2xl font-bold transition-all ${
                  f.title === 'Real-Time Mandi Price' 
                  ? 'bg-gray-100 text-gray-400 cursor-not-allowed' 
                  : 'bg-[#2E7D32] text-white hover:bg-[#1B5E20] shadow-lg shadow-green-900/10 active:scale-95'
                }`}
              >
                {f.cta}
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          ))}
        </div>

        {/* TRUST INDICATOR */}
        <div className="mt-24 p-10 bg-gray-50 rounded-[3rem] text-center border border-gray-100">
          <p className="text-sm font-bold text-gray-400 uppercase tracking-[0.2em] mb-4">Trusted by Indian Farmers</p>
          <div className="flex flex-wrap justify-center gap-8 md:gap-16 opacity-50 grayscale">
            <span className="text-xl font-bold">🌾 Digital India</span>
            <span className="text-xl font-bold">🚜 AgriStack</span>
            <span className="text-xl font-bold">🤖 AI Mission</span>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Features;