import React from "react";

const About = () => {
  return (
    <div className="min-h-screen bg-green-50 py-12 px-6">
      <div className="max-w-6xl mx-auto">

        {/* Page Title */}
        <h1 className="text-4xl font-bold text-green-800 text-center mb-10">
          🌾 About KisanMitra AI
        </h1>

        {/* Introduction Section */}
        <div className="bg-white p-8 rounded-2xl shadow-md mb-10">
          <h2 className="text-2xl font-semibold text-green-700 mb-4">
            Empowering Farmers with Intelligent Agriculture
          </h2>
          <p className="text-gray-700 leading-relaxed">
            KisanMitra AI is a next-generation Smart Agriculture platform
            designed to help farmers make better decisions using Artificial
            Intelligence. We combine modern AI/ML technology with practical
            farming knowledge to solve real challenges faced by farmers —
            including crop diseases, irrigation planning, fertilizer
            management, and market awareness.
          </p>
        </div>

        {/* Problem Section */}
        <div className="bg-white p-8 rounded-2xl shadow-md mb-10">
          <h2 className="text-2xl font-semibold text-green-700 mb-4">
            🚜 The Problem We Solve
          </h2>
          <ul className="list-disc pl-6 text-gray-700 space-y-2">
            <li>Unpredictable weather conditions</li>
            <li>Crop diseases and pest attacks</li>
            <li>Improper fertilizer usage</li>
            <li>Water mismanagement</li>
            <li>Lack of real-time market information</li>
            <li>Limited access to expert guidance</li>
          </ul>
        </div>

        {/* Solution Section */}
        <div className="bg-white p-8 rounded-2xl shadow-md mb-10">
          <h2 className="text-2xl font-semibold text-green-700 mb-6">
            🤖 Our AI-Powered Solution
          </h2>

          <div className="grid md:grid-cols-2 gap-6">

            <div>
              <h3 className="font-semibold text-lg text-green-600">
                🌱 Smart Crop Management
              </h3>
              <p className="text-gray-700">
                Personalized crop insights, growth tracking, and fertilizer schedules.
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-lg text-green-600">
                🧪 AI Disease Detection
              </h3>
              <p className="text-gray-700">
                Upload a leaf image and detect diseases instantly with treatment guidance.
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-lg text-green-600">
                🌦 Irrigation & Fertilizer Advisor
              </h3>
              <p className="text-gray-700">
                7-day irrigation planning and soil-based nutrient recommendations.
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-lg text-green-600">
                🧠 Multilingual AI Agent
              </h3>
              <p className="text-gray-700">
                Farmers can ask questions in their local language using voice or chat.
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
            We envision a future where every farmer has access to intelligent
            digital tools. Our mission is to bridge the gap between traditional
            farming and advanced technology, making agriculture more
            sustainable, profitable, and data-driven.
          </p>
        </div>

        {/* Technology Section */}
        <div className="bg-white p-8 rounded-2xl shadow-md">
          <h2 className="text-2xl font-semibold text-green-700 mb-4">
            🏗 Built With Modern Technology
          </h2>
          <ul className="list-disc pl-6 text-gray-700 space-y-2">
            <li>MERN Stack (MongoDB, Express, React, Node.js)</li>
            <li>Machine Learning for disease & yield prediction</li>
            <li>AI Agent with multilingual support</li>
            <li>Cloud-based scalable architecture</li>
          </ul>
        </div>

      </div>
    </div>
  );
};

export default About;