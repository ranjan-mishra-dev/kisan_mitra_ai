import express from "express";
import multer from "multer";
import { predictDisease } from "../controller/predict.controller.js";

const router = express.Router();
const upload = multer();

router.post("/", upload.single("image"), predictDisease);

export default router;
