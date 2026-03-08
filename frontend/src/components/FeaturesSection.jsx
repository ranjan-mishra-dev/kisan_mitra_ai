import React from "react";
import { Camera, Leaf, LineChart, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const features = [
  {
    title: "Disease Detection AI",
    description:
      "Instant diagnosis for your crops. Upload a photo and let our AI identify pests and diseases in seconds.",
    icon: <Camera className="w-6 h-6" />,
    link: "/upload-image",
    cta: "Scan Now",
    status: "active",
  },
  {
    title: "Crop Advisory",
    description:
      "Personalized expert advice on what to grow based on your soil, weather, and region for maximum yield.",
    icon: <Leaf className="w-6 h-6" />,
    link: "/crop-advisory",
    cta: "Get Advice",
    status: "active",
  },
  {
    title: "Mandi Price",
    description:
      "Real-time market rates from across the country to help you sell at the right time for the best profit.",
    icon: <LineChart className="w-6 h-6" />,
    link: "#",
    cta: "Coming Soon",
    status: "upcoming",
  },
];

const FeaturesSection = () => {
  return (
    
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
          Empowering Your Farming Journey
        </h2>
        <p className="mt-4 text-xl text-gray-600">
          Smart tools designed to increase productivity and reduce crop loss.
        </p>

        <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-3">
          {features.map((feature, index) => (
            <div
              key={index}
              className={`relative p-8 bg-white border border-gray-100 rounded-2xl shadow-sm transition-all duration-300 hover:shadow-xl ${feature.status === "upcoming" ? "opacity-75" : "hover:-translate-y-2"}`}
            >
              <div className="inline-flex items-center justify-center p-3 bg-green-100 text-green-600 rounded-lg mb-6">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                {feature.title}
              </h3>
              <p className="text-gray-600 mb-8 leading-relaxed">
                {feature.description}
              </p>

              {feature.status === "active" ? (
                <Link
                  to={feature.link}
                  className="inline-flex items-center font-semibold text-green-600 hover:text-green-700 group"
                >
                  {feature.cta}
                  <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
                </Link>
              ) : (
                <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                  {feature.cta}
                </span>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
