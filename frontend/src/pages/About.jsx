import React from "react";
import { Target, Lightbulb, ShieldCheck, Globe, Users } from "lucide-react";

const About = () => {
  return (
    <div className="min-h-screen bg-white pb-20 pt-28">
      <div className="max-w-5xl mx-auto px-6">
        
        {/* HERO SECTION */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6">
            Empowering the <span className="text-[#2E7D32]">Hands that Feed Us</span>
          </h1>
          <div className="h-1.5 w-24 bg-[#FBC02D] mx-auto rounded-full"></div>
        </div>

        {/* BILINGUAL INTRO */}
        <div className="bg-gradient-to-br from-green-50 to-white p-8 md:p-12 rounded-[2.5rem] border border-green-100 shadow-sm mb-12">
          <div className="flex flex-col md:flex-row gap-8 items-center">
            <div className="flex-1">
              <h2 className="text-2xl font-bold text-[#2E7D32] mb-4 flex items-center gap-2">
                <Lightbulb className="w-6 h-6" />
                The KisanMitra AI Mission
              </h2>
              <p className="text-gray-700 text-lg leading-relaxed italic mb-6">
                "KisanMitra AI एक आधुनिक खेती का प्लेटफॉर्म है, जो आर्टिफिशियल इंटेलिजेंस की मदद से किसानों को सही फैसले लेने में मदद करता है। हम तकनीक और अनुभव को जोड़कर आपकी समस्याओं का समाधान करते हैं।"
              </p>
              <p className="text-gray-600 leading-relaxed">
                We bridge the gap between traditional farming wisdom and modern data science. 
                Our goal is to ensure that no farmer is left behind in the digital revolution.
              </p>
            </div>
            <div className="w-full md:w-1/3 bg-white p-6 rounded-3xl shadow-inner border border-green-50">
              <div className="text-center">
                <p className="text-4xl font-bold text-[#2E7D32]">100%</p>
                <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mt-1">Free for Farmers</p>
              </div>
              <div className="mt-6 space-y-3">
                <div className="flex items-center gap-2 text-sm text-gray-600">
                  <ShieldCheck className="w-4 h-4 text-green-500" /> Local Languages
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-600">
                  <ShieldCheck className="w-4 h-4 text-green-500" /> Real-time Data
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* SOLUTIONS GRID */}
        <div className="mb-20">
          <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center uppercase tracking-widest text-sm">Our Focus Areas</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { 
                hi: "फसल सलाहकार", 
                en: "Crop Advisory", 
                desc: "Get scientific insights for higher yields.",
                icon: "🌱" 
              },
              { 
                hi: "बीमारी पहचान", 
                en: "AI Detection", 
                desc: "Identify pests and diseases via photos.",
                icon: "🧪" 
              },
              { 
                hi: "मंडी भाव", 
                en: "Mandi Tracking", 
                desc: "Find the best market prices instantly.",
                icon: "📈" 
              }
            ].map((item, idx) => (
              <div key={idx} className="p-6 rounded-3xl border border-gray-100 bg-white hover:border-green-200 hover:shadow-lg transition-all text-center">
                <div className="text-3xl mb-4">{item.icon}</div>
                <h3 className="font-bold text-gray-900">{item.hi}</h3>
                <p className="text-[#2E7D32] text-xs font-bold mb-3">{item.en}</p>
                <p className="text-gray-500 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* VISION SECTION */}
        <div className="relative overflow-hidden bg-[#1F2933] text-white p-10 md:p-16 rounded-[3rem]">
          <div className="absolute top-0 right-0 p-8 opacity-10">
            <Globe className="w-40 h-40" />
          </div>
          <div className="relative z-10 max-w-2xl">
            <div className="flex items-center gap-2 text-[#FBC02D] mb-4 font-bold uppercase tracking-[0.2em] text-xs">
              <Target className="w-4 h-4" />
              Our Vision
            </div>
            <h2 className="text-3xl font-bold mb-6">Building a Sustainable Future</h2>
            <p className="text-gray-300 text-lg leading-relaxed">
              We believe every farmer deserves access to the same advanced tech as the rest of the world. 
              By bridging the gap between the field and the digital age, we’re making agriculture smarter, 
              more sustainable, and more rewarding for those who feed us.
            </p>
            <div className="mt-8 flex items-center gap-4">
               <div className="flex -space-x-2">
                  {[1,2,3,4].map(i => (
                    <div key={i} className="w-10 h-10 rounded-full border-2 border-[#1F2933] bg-gray-600 flex items-center justify-center text-[10px]">
                       <Users className="w-4 h-4" />
                    </div>
                  ))}
               </div>
               <p className="text-sm text-gray-400">Join our growing community of smart farmers</p>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default About;