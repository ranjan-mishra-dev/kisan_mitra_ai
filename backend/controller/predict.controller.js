import { callMLService } from "../services/ml_service.js";
import { callGemini } from "../services/gemini_service.js";

export const predictDisease = async (req, res) => {
  try {
    console.log("predictDisease", req.file.buffer)
    const mlResult = await callMLService(req.file.buffer);

    const plant = mlResult.plant
    const disease = mlResult.disease
    const confidence = mlResult.confidence

    // console.log("predict.controller.js3: ", plant, disease, confidence)

    const geminiText = await callGemini({plant, disease, confidence});
    console.log("predict controller.js")
    console.log("predict", geminiText)

    res.json({
      prediction: mlResult,
      advice: geminiText
    });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
