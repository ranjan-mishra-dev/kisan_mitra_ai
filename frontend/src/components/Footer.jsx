import React from 'react';
import { Mail, Phone, MapPin, ExternalLink } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#0F172A] text-white">
      <div className="max-w-7xl mx-auto px-6 pt-16 pb-8">
        
        {/* TOP GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">

          {/* BRAND COLUMN */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold bg-gradient-to-r from-[#FBC02D] to-yellow-500 bg-clip-text text-transparent">
              KisanMitra AI
            </h3>
            <p className="text-slate-400 text-sm leading-relaxed">
              Empowering Indian farmers with AI-driven, local-language, and trustworthy guidance. Your friendly AI partner for every harvest.
            </p>
            <div className="flex items-center gap-2 pt-2">
               <span className="flex h-2 w-2 rounded-full bg-green-500 animate-pulse"></span>
               <span className="text-xs font-medium text-slate-300 uppercase tracking-wider">AI Systems Active</span>
            </div>
          </div>

          {/* QUICK LINKS */}
          <div>
            <h4 className="text-lg font-semibold mb-6 border-b border-white/10 pb-2 inline-block">Quick Links</h4>
            <ul className="space-y-3 text-sm text-slate-400">
              <li className="hover:text-[#FBC02D] transition-colors flex items-center gap-2 group"> Features </li>
              <li><a href="/crop-advisory" className="hover:text-[#FBC02D] transition-colors flex items-center gap-2 group"><ExternalLink className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" /> Crop Advisory</a></li>
              <li><a href="/upload-image" className="hover:text-[#FBC02D] transition-colors flex items-center gap-2 group"><ExternalLink className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" /> Disease Detection</a></li>
              <li><a href="/" className="hover:text-[#FBC02D] transition-colors flex items-center gap-2 group"><ExternalLink className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" /> Real Time Mandi Price (SOON...)</a></li>
              {/* <li><span className="opacity-50 italic">Mandi Prices (Soon)</span></li> */}
            </ul>
          </div>

          {/* CONTACT INFO */}
          <div>
            <h4 className="text-lg font-semibold mb-6 border-b border-white/10 pb-2 inline-block">Contact</h4>
            <div className="space-y-4">
              <div className="flex items-start gap-3 text-sm text-slate-400">
                <MapPin className="w-5 h-5 text-[#FBC02D] shrink-0" />
                <span>Digital Agriculture Innovation Hub,<br />Andheri East, Mumbai, 400069</span>
              </div>
              <a href="mailto:support@kisanmitraai.com" className="flex items-center gap-3 text-sm text-slate-400 hover:text-[#FBC02D] transition-colors">
                <Mail className="w-5 h-5 text-[#FBC02D] shrink-0" />
                <span>support@kisanmitraai.com</span>
              </a>
              <a href="tel:7565874939" className="flex items-center gap-3 text-sm text-slate-400 hover:text-[#FBC02D] transition-colors">
                <Phone className="w-5 h-5 text-[#FBC02D] shrink-0" />
                <span>+91 7565874939</span>
              </a>
            </div>
          </div>

          {/* SOCIALS */}
          <div>
            <h4 className="text-lg font-semibold mb-6 border-b border-white/10 pb-2 inline-block">Follow Us</h4>
            <p className="text-xs text-slate-500 mb-4 uppercase tracking-widest">Connect with our community</p>
            <div className="flex flex-wrap gap-4">
              {[
                { name: 'YouTube', icon: 'https://n2r5uux6k5.ucarecd.net/9c743956-cfaf-4b5b-b13e-16b0e527eb1f/-/preview/512x512/' },
                { name: 'Instagram', icon: 'https://n2r5uux6k5.ucarecd.net/8ef1287c-8b70-4d5c-bf51-fb9d1b645d63/-/preview/512x512/' },
                { name: 'LinkedIn', icon: 'https://n2r5uux6k5.ucarecd.net/3732028a-80b5-4ec0-b480-187d1c0a732b/-/preview/512x512/' },
                { name: 'Facebook', icon: 'https://n2r5uux6k5.ucarecd.net/eae64a2a-2910-4fe0-a8bb-c1751457bb02/-/preview/512x512/' }
              ].map((social) => (
                <a 
                  key={social.name}
                  href="#" 
                  className="bg-white/5 p-2 rounded-lg hover:bg-white/10 hover:shadow-[0_0_15px_rgba(251,192,45,0.2)] transition-all duration-300"
                  aria-label={social.name}
                >
                  <img src={social.icon} alt={social.name} className="w-6 h-6 grayscale hover:grayscale-0 transition-all" />
                </a>
              ))}
            </div>
          </div>

        </div>

        {/* BOTTOM BAR */}
        <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <p className="text-slate-500 text-sm">
            © {currentYear} <span className="text-slate-300 font-medium">KisanMitra AI</span>. Made with ❤️ in India.
          </p>
          
          <div className="flex items-center gap-6 text-sm text-slate-500">
             <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
             <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
             <div className="flex items-center gap-2 pl-4 border-l border-white/10">
                <span className="text-base">🇮🇳</span>
                <span className="font-medium text-slate-300">Farmer-First Tech</span>
             </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;