const features = [
  {
    title: "Crop Recommendation Engine",
    desc: "AI-powered crop suggestions based on soil, season, and location.",
    icon: "🌱",
  },
  {
    title: "Disease Detection",
    desc: "Detect crop diseases instantly using leaf image analysis.",
    icon: "🧪",
  },
  {
    title: "Upcoming Weather Report",
    desc: "Accurate weather forecasts to plan irrigation and harvesting.",
    icon: "🌦️",
  },
  {
    title: "Mandi Price Insights",
    desc: "Live mandi prices to help farmers sell at the best rates.",
    icon: "💰",
  },
  {
    title: "Multilingual AI Agent",
    desc: "Talk to AI in your local language for farming guidance.",
    icon: "🗣️",
  },
  {
    title: "Bank Loan & Govt Schemes",
    desc: "Discover eligible loans and government farming schemes easily.",
    icon: "🏦",
  },
  {
    title: "Farm Analysis Dashboard",
    desc: "Visual insights on crop health, yield, and expenses.",
    icon: "📊",
  },
];

const FeaturesSection = () => {
  return (
    <section className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-4">

        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="inline-block bg-[#FBC02D]/20 text-[#6D4C41] px-4 py-1 rounded-full text-sm font-medium mb-4">
            🚀 What We Offer
          </span>

          <h2 className="text-3xl md:text-4xl font-bold text-[#1F2933] mb-4">
            Next-Gen Intelligent Features
          </h2>

          <p className="text-[#1F2933]/80 text-lg">
            Smart, reliable, and farmer-friendly AI tools designed to
            improve productivity and reduce risk.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group bg-[#F9FAFB] border border-gray-200 rounded-2xl p-6 hover:shadow-xl hover:-translate-y-1 transition-all"
            >
              <div className="w-14 h-14 flex items-center justify-center rounded-xl bg-[#2E7D32]/10 text-2xl mb-4">
                {feature.icon}
              </div>

              <h3 className="text-xl font-semibold text-[#1F2933] mb-2 group-hover:text-[#2E7D32] transition">
                {feature.title}
              </h3>

              <p className="text-[#1F2933]/70">
                {feature.desc}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default FeaturesSection;
