import User from "../models/User.js";
import FarmProfile from "../models/FarmProfile.js";


export const getFarmProfile = async (req, res) => {
  try {
    const id = req.user.userId;  

    const profile = await FarmProfile.findOne({ user: id });

    if (!profile) {
      return res.status(200).json({
        success: true,
        data: null
      });
    }

    return res.status(200).json({
      success: true,
      data: profile
    });

  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Server error"
    });
  }
};



export const updateProfile = async (req, res) => {
  try {
    const userId = req.user.userId;

    const {
      name,
      state,
      district,
      village,
      lat,
      lng,
      landSize,
      preferredLanguage,
    } = req.body;


    const userUpdateData = {};

    if (name !== undefined) {
      userUpdateData.name = name;
    }

    if (req.file) {
      userUpdateData.avatar = req.file.path;
      // console.log("cloudinary url: ", req.file.path)
    }

    if (Object.keys(userUpdateData).length > 0) {
      await User.findByIdAndUpdate(
        userId,
        { $set: userUpdateData },
        { new: true }
      );
    }

    const farmUpdateData = {};
    const fields = [
      "state",
      "district",
      "village",
      "lat",
      "lng",
      "landSize",
      "preferredLanguage",
    ];

    fields.forEach((field) => {
      if (req.body[field] !== undefined) {
        farmUpdateData[field] = req.body[field];
      }
    });

    const farmProfile = await FarmProfile.findOneAndUpdate(
      { user: userId },
      { $set: farmUpdateData },
      { new: true, upsert: true, runValidators: true }
    );

    return res.status(200).json({
      success: true,
      message: "Profile updated successfully",
      farmProfile,
    });

  } catch (error) {
    console.error(error);
    return res.status(500).json({
      success: false,
      message: "Server error",
    });
  }
};