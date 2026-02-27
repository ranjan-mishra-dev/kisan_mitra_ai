import React from "react";

const Features = () => {
  return (
    <div className="min-h-screen bg-green-50 py-12 px-6">
      <div className="max-w-6xl mx-auto">

        <h1 className="text-4xl font-bold text-green-800 mb-10 text-center">
          🌾 Smart Agriculture AI Features
        </h1>

        {/* Feature Card */}
        <div className="grid md:grid-cols-2 gap-8">

          {/* Crop Management */}
          <div className="bg-white p-6 rounded-2xl shadow-md">
            <h2 className="text-xl font-semibold text-green-700 mb-3">
              🌱 Smart Crop Management
            </h2>
            <p className="text-gray-600">
              Get daily crop updates, fertilizer schedule, harvest timeline,
              and growth stage prediction powered by AI.
            </p>
          </div>

          {/* Disease Detection */}
          <div className="bg-white p-6 rounded-2xl shadow-md">
            <h2 className="text-xl font-semibold text-green-700 mb-3">
              🧪 AI Disease Detection
            </h2>
            <p className="text-gray-600">
              Upload crop leaf images and detect diseases instantly with
              recovery steps and pesticide recommendations.
            </p>
          </div>

          {/* Irrigation */}
          <div className="bg-white p-6 rounded-2xl shadow-md">
            <h2 className="text-xl font-semibold text-green-700 mb-3">
              🌦 AI Irrigation Advisor
            </h2>
            <p className="text-gray-600">
              Predict daily water needs and get a 7-day irrigation plan based
              on weather and soil conditions.
            </p>
          </div>

          {/* AI Agent */}
          <div className="bg-white p-6 rounded-2xl shadow-md">
            <h2 className="text-xl font-semibold text-green-700 mb-3">
              🧠 Multilingual AI Agent
            </h2>
            <p className="text-gray-600">
              Ask farming questions in your local language using voice or chat
              and receive intelligent answers.
            </p>
          </div>

          {/* Market */}
          <div className="bg-white p-6 rounded-2xl shadow-md">
            <h2 className="text-xl font-semibold text-green-700 mb-3">
              📊 Market Price Tracker
            </h2>
            <p className="text-gray-600">
              Get real-time mandi prices and government scheme updates.
            </p>
          </div>

          {/* Reports */}
          <div className="bg-white p-6 rounded-2xl shadow-md">
            <h2 className="text-xl font-semibold text-green-700 mb-3">
              📈 Farm Reports & Yield Prediction
            </h2>
            <p className="text-gray-600">
              Weekly health reports, expense tracking, and AI-based yield
              prediction for smarter planning.
            </p>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Features;