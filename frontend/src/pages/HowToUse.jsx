import React, { useState } from "react";

const HowToUse = () => {
  const [showVideo, setShowVideo] = useState(false);

  return (
    <div className="min-h-screen bg-green-50 py-12 px-6">
      <div className="max-w-6xl mx-auto">

        {/* Title */}
        <h1 className="text-4xl font-bold text-green-800 text-center mb-10">
          🌾 How to Use KisanMitra AI
        </h1>

        {/* Image Section */}
        <div className="mb-10">
          <img
            src="https://n2r5uux6k5.ucarecd.net/ee451f66-03a7-44b7-94a7-949902d0011d/-/preview/1000x666/"
            alt="How to Use"
            className="rounded-2xl shadow-lg mx-auto"
          />
        </div>

        {/* Video Button */}
        <div className="text-center mb-12">
          <button
            onClick={() => setShowVideo(true)}
            className="bg-green-600 text-white px-6 py-3 rounded-xl shadow hover:bg-green-700 transition"
          >
            ▶ Watch Full Demo Video
          </button>
        </div>

        {/* Video Modal */}
        {showVideo && (
          <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50">
            <div className="bg-white rounded-xl p-4 w-[90%] md:w-[70%] relative">
              <button
                onClick={() => setShowVideo(false)}
                className="absolute top-2 right-3 text-xl font-bold"
              >
                ✕
              </button>

              <iframe
                src="https://drive.google.com/file/d/1BmjQ6eXVshzBPhTUN6HizWhK152TMl0I/preview"
                width="100%"
                height="480"
                allow="autoplay"
                className="rounded-lg"
              ></iframe>
            </div>
          </div>
        )}

        {/* Example Output Section */}
        <div className="bg-white p-8 rounded-2xl shadow-md mb-12">
          <h2 className="text-2xl font-bold text-green-700 mb-6">
            📊 Example Disease Detection Output
          </h2>

          <div className="space-y-4 text-gray-700 leading-relaxed">
            <p><strong>🌿 पौधे का नाम:</strong> चेरी</p>
            <p><strong>🦠 रोग का नाम:</strong> चूर्णी फफूंद (Powdery mildew)</p>
            <p>
              <strong>📖 रोग विवरण:</strong> पत्तियों और फलों पर सफेद पाउडर जैसा
              जमाव दिखता है; प्रभावित पत्तियां मुड़कर ऊपर की ओर मुड़ने लगती हैं
            </p>
            <p>
              <strong>💊 उपचार:</strong> 1) सल्फर 80% WP – 2 ग्राम प्रति लीटर पानी में
              मिलाकर छिड़कें, 2) माइक्लोबुटानिल 10% WP – 1 ग्राम प्रति लीटर पानी में
              घोलकर स्प्रे करें
            </p>
            <p>
              <strong>🛡 रोकथाम:</strong> पेड़ों की समय पर छंटाई करें ताकि हवा और
              धूप का संचार बेहतर बना रहे
            </p>
            <p>
              <strong>💰 लागत प्रति बिघा:</strong> ₹500 - ₹800
            </p>
          </div>
        </div>

        {/* Explore Crop Feature */}
        <div className="bg-green-100 p-8 rounded-2xl shadow-md text-center">
          <h2 className="text-2xl font-bold text-green-800 mb-4">
            🌱 Explore New Crop for Higher Profit
          </h2>
          <p className="text-gray-700 mb-6">
            Get AI-powered recommendations for new crops based on your soil,
            weather, and market demand to maximize profit.
          </p>

          <button className="bg-green-700 text-white px-6 py-3 rounded-xl hover:bg-green-800 transition">
            Explore Crop Suggestions →
          </button>
        </div>

      </div>
    </div>
  );
};

export default HowToUse;