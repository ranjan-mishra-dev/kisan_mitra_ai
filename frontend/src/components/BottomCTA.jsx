import React from "react";
import { Link } from "react-router-dom";
import { Bot, Sparkles, ArrowRight } from "lucide-react";

const BottomCTA = () => {
  return (
    <section className="relative overflow-hidden bg-[#1B5E20] py-20">
      {/* Subtle Background Decoration */}
      <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/4 w-96 h-96 bg-green-400/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/4 w-72 h-72 bg-yellow-400/10 rounded-full blur-3xl"></div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          {/* LEFT CONTENT */}
          <div className="text-center lg:text-left flex-1">
            <div className="flex items-center justify-center lg:justify-start gap-4 mb-6">
              <div className="relative">
                <img
                  src="https://n2r5uux6k5.ucarecd.net/2d3dd132-efda-4303-ae13-7fa615556e33/-/preview/512x512/"
                  alt="India"
                  className="w-12 h-12 rounded-full border-2 border-white/20 p-1 bg-white/10 backdrop-blur-sm"
                />
                <div className="absolute -top-1 -right-1 w-4 h-4 bg-green-500 border-2 border-[#1B5E20] rounded-full animate-pulse"></div>
              </div>
              <span className="flex items-center gap-2 bg-white/10 backdrop-blur-md text-green-50 px-4 py-1.5 rounded-full text-sm font-semibold tracking-wide border border-white/10">
                <Sparkles className="w-4 h-4 text-yellow-400" />
                Made for Indian Farmers
              </span>
            </div>

            <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-6 leading-[1.15]">
              India’s Most Trusted <br className="hidden md:block" />
              Digital Farm Assistant
            </h2>

            <p className="text-green-50/80 text-lg md:text-xl max-w-2xl leading-relaxed">
              Join thousands of farmers using AI-driven insights to increase
              yield, reduce costs, and secure their family's future.
            </p>
          </div>

          {/* RIGHT CTA ACTIONS */}
          <div className="flex flex-col sm:flex-row gap-5 w-full lg:w-auto">
            <Link to="/how-to-use">
              <button className="group flex items-center justify-center gap-2 bg-[#FBC02D] text-[#1B5E20] px-8 py-4 rounded-2xl font-bold text-lg hover:bg-yellow-400 transition-all duration-300 shadow-[0_10px_20px_-10px_rgba(251,192,45,0.4)] active:scale-95">
                Get Started Free
                <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
              </button>
            </Link>
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default BottomCTA;
