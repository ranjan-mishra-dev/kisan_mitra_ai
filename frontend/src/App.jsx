import React from "react";
import Home from "./pages/Home.jsx";
import Login from "./pages/Login.jsx";
import { Routes, Route } from "react-router-dom";
import ProtectedRoute from "./components/ProtectedRoute.jsx";
import Profile from "./pages/Profile.jsx";
import Navbar from "./components/NewNavbar.jsx";
import UploadPlantImage from "./pages/UploadPlantImage.jsx";
import { Toaster } from "react-hot-toast";
import Features from "./pages/Features.jsx";
import About from "./pages/About.jsx"
import Contact from "./pages/Contact.jsx"
import HowToUse from "./pages/HowToUse.jsx"
import AddressAutocomplete from "./pages/AddressAutocomplete.jsx";

const App = () => {
  return (
    <div>
      <Navbar />
      <Toaster position="top-right" reverseOrder={false} />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/address" element={<AddressAutocomplete />} />
        <Route path="/sign-in" element={<Login />} />

        <Route
          path="/upload-image"
          element={
            <ProtectedRoute>
              <UploadPlantImage />
            </ProtectedRoute>
          }
        />

        <Route
          path="/profile"
          element={
            <ProtectedRoute>
              <Profile />
            </ProtectedRoute>
          }
        />

        <Route path="/features" element={<Features />} />
        <Route path="/how-to-use" element={<HowToUse />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </div>
  );
};

export default App;
