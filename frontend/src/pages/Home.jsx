import React, { useContext } from "react"
import { AuthContext } from '../context/AuthProvider'
import HeroSection from '../components/HeroSection.jsx'
import FeaturesSection from "../components/FeaturesSection.jsx"
import BottomCTA from "../components/BottomCTA.jsx"
import Footer from "../components/Footer.jsx"

const Home = () => {

  const { user } = useContext(AuthContext);

  return (
    <div className="bg-white text-gray-800">


      <HeroSection />

      <FeaturesSection />

      <BottomCTA />

      <Footer />

    </div>
  );
};

export default Home;
