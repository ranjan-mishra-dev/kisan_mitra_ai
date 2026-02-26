const HeroSection = () => {
  return (
    <section className="bg-[#F9FAFB]">
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

          {/* LEFT CONTENT */}
          <div>
            <span className="inline-block bg-[#FBC02D]/20 text-[#6D4C41] px-4 py-1 rounded-full text-sm font-medium mb-4">
              🌾 AI for Indian Farmers
            </span>

            <h1 className="text-4xl md:text-5xl font-bold text-[#1F2933] leading-tight mb-6">
              From sowing seeds to selling crops <br />
              <span className="text-[#2E7D32] text-3xl">—we walk the field with you.</span>
            </h1>

            

            <p className="text-lg text-[#1F2933]/80 mb-4">
              To empower farmers with AI-driven, local-language,
              trustworthy advice.
            </p>

            <p className="text-md text-[#6D4C41] mb-8 italic">
              “Your friendly AI partner for every harvest.”
            </p>

            {/* CTA */}
            <div className="flex flex-wrap gap-4">
              <a
                href="https://www.youtube.com/watch?v=KW8r4CtllxQ"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-[#2E7D32] text-white px-6 py-3 rounded-lg font-medium hover:bg-[#256628] transition"
              >
                ▶ Watch Demo
              </a>

              <button className="border-2 border-[#2E7D32] text-[#2E7D32] px-6 py-3 rounded-lg font-medium hover:bg-[#2E7D32] hover:text-white transition">
                Get Started
              </button>
            </div>
          </div>

          {/* RIGHT IMAGE */}
          <div className="flex justify-center">
            <img
              src="https://n2r5uux6k5.ucarecd.net/fe10a1c2-88ef-467d-a75e-ce48c31c139a/-/preview/1000x701/"
              alt="Smart Farming AI"
              className="w-full max-w-lg rounded-2xl shadow-lg"
            />
          </div>

        </div>
      </div>
    </section>
  );
};

export default HeroSection;
