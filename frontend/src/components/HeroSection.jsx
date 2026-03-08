import React, { useState } from "react";
import { Play, X, ArrowRight, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";

const HeroSection = () => {
  const [isVideoOpen, setIsVideoOpen] = useState(false);

  // Video URL - Using the embed format for the modal
  const videoSrc = "https://www.youtube.com/embed/TDbw3CIwwqA";

  return (
    <section className="relative bg-gradient-to-b from-gray-50 to-white overflow-hidden">
      {/* Decorative background element */}
      <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/4 w-96 h-96 bg-green-100/50 rounded-full blur-3xl -z-10"></div>

      <div className="max-w-7xl mx-auto px-6 py-12 md:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* LEFT CONTENT */}
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 bg-[#FBC02D]/10 border border-[#FBC02D]/20 text-[#6D4C41] px-4 py-1.5 rounded-full text-sm font-semibold tracking-wide">
              <Sparkles className="w-4 h-4 text-[#FBC02D]" />
              AI for Indian Farmers
            </div>

            <h1 className="text-4xl md:text-6xl font-extrabold text-[#1F2933] leading-[1.1]">
              From sowing seeds <br /> to selling crops
              <span className="block mt-2 text-[#2E7D32]">
                —we walk the field with you.
              </span>
            </h1>

            <div className="space-y-4">
              <p className="text-lg text-[#6D4C41] font-medium italic border-l-4 border-[#FBC02D] pl-4">
                “हर फसल के लिए आपका भरोसेमंद Ai साथी”
              </p>
            </div>

            {/* CTA BUTTONS */}
            <div className="flex flex-wrap gap-5">
              <button
                onClick={() => setIsVideoOpen(true)}
                className="group flex items-center gap-3 bg-[#2E7D32] text-white px-8 py-4 rounded-2xl font-bold text-lg hover:bg-[#1B5E20] transition-all shadow-lg shadow-green-900/10 active:scale-95"
              >
                <div className="bg-white/20 rounded-full p-1 group-hover:scale-110 transition-transform">
                  <Play className="w-5 h-5 fill-current" />
                </div>
                Watch Demo
              </button>

              <Link to="/how-to-use">
                <button className="group flex items-center gap-2 border-2 border-[#2E7D32] text-[#2E7D32] px-8 py-4 rounded-2xl font-bold text-lg hover:bg-[#2E7D32] hover:text-white transition-all active:scale-95">
                  Get Started
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>
              </Link>
            </div>
          </div>

          {/* RIGHT IMAGE / ILLUSTRATION */}
          <div className="relative group">
            <div className="absolute -inset-4 bg-gradient-to-tr from-green-200 to-yellow-100 rounded-[2rem] blur-2xl opacity-50 group-hover:opacity-75 transition duration-500"></div>
            <div className="relative">
              <img
                src="https://n2r5uux6k5.ucarecd.net/fe10a1c2-88ef-467d-a75e-ce48c31c139a/-/preview/1000x701/"
                alt="Smart Farming AI"
                className="w-full h-auto rounded-[2rem] shadow-2xl border-8 border-white object-cover transform transition duration-500 hover:scale-[1.02]"
              />
              {/* Floating Badge */}
              <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-2xl shadow-xl border border-gray-100 hidden md:block animate-bounce-slow">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center text-green-600">
                    <Sparkles className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="text-xs text-gray-500 uppercase font-bold tracking-wider">
                      AI से पाएं बेहतर खेती सलाह
                    </p>
                    <p className="text-lg font-bold text-gray-900">94.4%</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* VIDEO MODAL (Open in same window) */}
      {isVideoOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 backdrop-blur-sm p-4 animate-in fade-in duration-300">
          <div className="relative w-full max-w-5xl aspect-video bg-black rounded-3xl overflow-hidden shadow-2xl">
            {/* CLOSE BAR */}
            <div className="absolute top-0 left-0 right-0 bg-gradient-to-b from-black/60 to-transparent p-4 flex justify-between items-center z-10">
              <h3 className="text-white font-semibold flex items-center gap-2">
                <Play className="w-4 h-4 text-[#FBC02D] fill-[#FBC02D]" />
                KisanMitra AI Disease Detection
              </h3>
              <button
                onClick={() => setIsVideoOpen(false)}
                className="bg-white/10 hover:bg-white/20 text-white p-2 rounded-full transition-colors backdrop-blur-md border border-white/20"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            {/* THE VIDEO FRAME */}
            <iframe
              className="w-full h-full"
              src={videoSrc}
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      )}
    </section>
  );
};

export default HeroSection;
