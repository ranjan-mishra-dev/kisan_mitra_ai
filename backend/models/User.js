import mongoose from "mongoose";

const User = new mongoose.Schema(
    {
        googleId: {
            type: String,
            required: true,
            unique: true,
        },
        name: {
            type: String,
            required: true,
        },
        email: {
            type: String,
            required: true,
            unique: true
        },
        role: {
            type: String,
            enum: ["farmer", "admin"],
            default: "farmer"
        },
        avatar: {
            type: String,
            default: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRGSTjIhvj41pr8Zt5baO8BgXpm5P0I81BgbQ&s"
        }
    },
    {timestamps: true},
)

export default mongoose.model("User", User);