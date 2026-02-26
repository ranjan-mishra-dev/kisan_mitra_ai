const BottomCTA = () => {
  return (
    <section className="bg-[#2E7D32]">
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">

          {/* LEFT CONTENT */}
          <div className="text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start gap-3 mb-4">
              
              {/* India Logo */}
              <img
                src="https://n2r5uux6k5.ucarecd.net/2d3dd132-efda-4303-ae13-7fa615556e33/-/preview/512x512/"
                alt="India"
                className="w-10 h-10 rounded-full bg-white p-1"
              />

              <span className="bg-white/20 text-white px-4 py-1 rounded-full text-sm font-medium">
                Made for Indian Farmers
              </span>
            </div>

            <h2 className="text-3xl md:text-4xl font-bold text-white mb-3 leading-tight">
              Becoming India’s Most Trusted <br className="hidden sm:block" />
              Digital Farm Assistant
            </h2>

            <p className="text-white/90 text-lg max-w-xl">
              Empowering every farmer with AI-driven, local-language,
              and trustworthy farming guidance.
            </p>
          </div>

          {/* RIGHT CTA */}
          <div className="flex flex-wrap gap-4">
            <button className="bg-[#FBC02D] text-[#1F2933] px-7 py-3 rounded-xl font-semibold hover:bg-[#e6ad28] transition shadow-lg">
              Get Started Free
            </button>

            <button className="border-2 border-white text-white px-7 py-3 rounded-xl font-semibold hover:bg-white hover:text-[#2E7D32] transition">
              Talk to AI Agent
            </button>
          </div>

        </div>
      </div>
    </section>
  );
};

export default BottomCTA;
