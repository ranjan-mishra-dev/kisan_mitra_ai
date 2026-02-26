import React from "react";
import Home from "./pages/Home.jsx";
import Login from "./pages/Login.jsx";
import { Routes, Route } from "react-router-dom";
import ProtectedRoute from "./components/ProtectedRoute.jsx";
import Profile from "./pages/Profile.jsx";
import Navbar from "./components/NewNavbar.jsx";
import UploadPlantImage from "./pages/UploadPlantImage.jsx";
import { Toaster } from "react-hot-toast";

const App = () => {
  return (
    <div>
      <Navbar />
      <Toaster position="top-right" reverseOrder={false} />

      <Routes>
        <Route path="/" element={<Home />} />
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
      </Routes>
    </div>
  );
};

export default App;
