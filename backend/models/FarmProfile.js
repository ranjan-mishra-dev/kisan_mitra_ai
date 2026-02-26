import mongoose from "mongoose";

const farmProfileSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
    unique: true
  },
  state: String,
  district: String,
  village: String,
  lat: String,
  lng: String,
  landSize: String,
  preferredLanguage: String
}, { timestamps: true });

export default mongoose.model("FarmProfile", farmProfileSchema);