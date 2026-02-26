import jwt from "jsonwebtoken";
import User from "../models/User.js";
import admin from "../config/firebaseAuth.js";
import auth from "../middlewares/auth.middleware.js";

export const googleAuth = async (req, res) => {
  try {
    const { token } = req.body;

    if (!token) return res.status(400).json({ message: "Token missing" });
    const decoded = await admin.auth().verifyIdToken(token);

    const { email, uid, name, picture } = decoded;

    let user = await User.findOne({ email });
    if (!user) {
      user = await User.create({
        googleId: uid,
        email,
        name,
        avatar: picture,
      });
    }

    const appToken = jwt.sign(
      {
        userId: user._id,
        role: user.role,
      },
      process.env.JWT_SECRET,
      { expiresIn: "7d" },
    );

    res.cookie("token", appToken, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "strict",
    });

    res.json({
      success: true,
      user: {
        id: user._id,
        name: user.name,
        email: user.email,
        role: user.role,
        avatar: user.avatar,
      },
    });
  } catch (error) {
    console.error(error);
    res.status(401).json({ message: "Invalid Firebase token" });
  }
};

export const authMe = async (req, res) => {
  try {
    const id = req.user.userId;

    const user = await User.findById(id).select("name avatar email");

    if (!user) {
      return res.status(404).json({
        loggedIn: false,
        message: "User not found",
      });
    }

    res.json({
      loggedIn: true,
      user,
    });
  } catch (error) {
    return res.status(500).json({
      loggedIn: false,
      message: "Server error",
    });
  }
};

export const logout = (req, res) => {
  res.clearCookie("token", {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "Strict",
  });
  res.json({ success: true, message: "Logged out successfully" });
};
