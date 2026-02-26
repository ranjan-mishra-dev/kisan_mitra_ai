const Footer = () => {
  return (
    <footer className="bg-[#1F2933] text-white">
      <div className="max-w-7xl mx-auto px-4 py-14">

        {/* TOP GRID */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">

          {/* BRAND */}
          <div>
            <h3 className="text-2xl font-bold text-[#FBC02D] mb-3">
              KisanMitra AI
            </h3>
            <p className="text-white/80 text-sm mb-4">
              Your friendly AI partner for every harvest.
            </p>
            <p className="text-white/60 text-sm">
              Empowering Indian farmers with AI-driven, local-language,
              trustworthy advice.
            </p>
          </div>

          {/* ADDRESS */}
          <div>
            <h4 className="text-lg font-semibold mb-4">📍 Address</h4>
            <p className="text-white/80 text-sm leading-relaxed">
              Digital Agriculture Innovation Hub<br />
              Andheri East, Mumbai, 400069
            </p>
          </div>

          {/* CONTACT */}
          <div>
            <h4 className="text-lg font-semibold mb-4">📞 Contact</h4>
            <p className="text-white/80 text-sm mb-2">
              📧 Email:{" "}
              <a
                href="mailto:support@kisanmitraai.com"
                className="text-[#FBC02D] hover:underline"
              >
                support@kisanmitraai.com
              </a>
            </p>
            <p className="text-white/80 text-sm">
              📱 Phone:{" "}
              <a
                href="tel:7565874939"
                className="text-[#FBC02D] hover:underline"
              >
                +91 7565874939
              </a>
            </p>
          </div>

          {/* SOCIAL */}
        {/* SOCIAL */}
<div>
  <h4 className="text-lg font-semibold mb-4">🌐 Follow Us</h4>

  <div className="flex items-center gap-4">
    <a
      href="#"
      aria-label="YouTube"
      className="hover:scale-110 transition"
    >
      <img
        src="https://n2r5uux6k5.ucarecd.net/9c743956-cfaf-4b5b-b13e-16b0e527eb1f/-/preview/512x512/"
        alt="YouTube"
        className="w-8 h-8"
      />
    </a>

    <a
      href="#"
      aria-label="Instagram"
      className="hover:scale-110 transition"
    >
      <img
        src="https://n2r5uux6k5.ucarecd.net/8ef1287c-8b70-4d5c-bf51-fb9d1b645d63/-/preview/512x512/"
        alt="Instagram"
        className="w-8 h-8"
      />
    </a>

    <a
      href="#"
      aria-label="LinkedIn"
      className="hover:scale-110 transition"
    >
      <img
        src="https://n2r5uux6k5.ucarecd.net/3732028a-80b5-4ec0-b480-187d1c0a732b/-/preview/512x512/"
        alt="LinkedIn"
        className="w-8 h-8"
      />
    </a>

    <a
      href="#"
      aria-label="Facebook"
      className="hover:scale-110 transition"
    >
      <img
        src="https://n2r5uux6k5.ucarecd.net/eae64a2a-2910-4fe0-a8bb-c1751457bb02/-/preview/512x512/"
        alt="Facebook"
        className="w-8 h-8"
      />
    </a>
  </div>
</div>


        </div>

        {/* DIVIDER */}
        <div className="border-t border-white/20 mt-10 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4">

          {/* COPYRIGHT */}
          <p className="text-white/60 text-sm text-center sm:text-left">
            © {new Date().getFullYear()} <span className="font-medium text-white">
              KisanMitra AI
            </span>. All rights reserved.
          </p>

          {/* INDIA TRUST */}
          <div className="flex items-center gap-2 text-white/70 text-sm">
            <span className="text-lg">🇮🇳</span>
            Built for Indian Farmers
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
