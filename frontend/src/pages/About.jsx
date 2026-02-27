import React from "react";

const About = () => {
  return (
    <div className="min-h-screen bg-green-50 py-12 px-6">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold text-green-800 text-center mb-10">
          🌾 About KisanMitra AI
        </h1>

        <div className="bg-white p-8 rounded-2xl shadow-md mb-10">
          <h2 className="text-2xl font-semibold text-green-700 mb-4">
            The tool for Indian Farmers
          </h2>
          <p className="text-gray-700 leading-relaxed">
            KisanMitra AI एक आधुनिक खेती का प्लेटफॉर्म है, जो आर्टिफिशियल
            इंटेलिजेंस (AI) की मदद से किसानों को सही फैसले लेने में मदद करता है।
            हम नई तकनीक और खेती के पुराने अनुभव को एक साथ जोड़ते हैं ताकि
            किसानों की असली समस्याओं का समाधान हो सके—जैसे फसलों की बीमारियाँ
            पहचानना, मंडी के भाव बताना और खेती से जुड़ी सलाह देना। इसके अलावा,
            कई और नए फीचर्स भी जल्द आ रहे हैं।
          </p>
        </div>

        <div className="bg-white p-8 rounded-2xl shadow-md mb-10">
          <h2 className="text-2xl font-semibold text-green-700 mb-6">
            🤖 Our Current available Solution
          </h2>

          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-semibold text-lg text-green-600">
                🌱 फसल सलाहकार (Crop Advisory)
              </h3>
              <p className="text-gray-700">
                अपनी आमदनी बढ़ाने के लिए अलग-अलग प्रकार की फसलों के बारे में
                जानें और सही जानकारी पाएँ।
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-lg text-green-600">
                🧪 समय से पहले बीमारी पहचान (AI Disease Detection)
              </h3>
              <p className="text-gray-700">
                पत्ते की फोटो अपलोड करें और तुरंत बीमारियों का पता लगाकर उनके
                बचाव के उपाय जानें।
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-lg text-green-600">
                🌦 मंडी भाव ट्रैकिंग (Mandi Price Tracking)
              </h3>
              <p className="text-gray-700">
                ज़्यादा मुनाफ़ा कमाने के लिए अपनी फसल बेचने के लिए सबसे सही मंडी
                और ताज़ा भाव खोजें।
              </p>
            </div>
          </div>
        </div>

        {/* Vision Section */}
        <div className="bg-green-100 p-8 rounded-2xl shadow-md mb-10">
          <h2 className="text-2xl font-semibold text-green-800 mb-4">
            🌍 Our Vision
          </h2>
          <p className="text-gray-800 leading-relaxed">
            We believe every farmer deserves access to the same advanced tech as
            the rest of the world. By bridging the gap between the field and the
            digital age, we’re making agriculture smarter, more sustainable,
            and—most importantly—more rewarding for those who feed us.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
