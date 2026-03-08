import { GoogleGenAI } from "@google/genai";
import CropSuitability from "../models/CropSuitability.js";
import calculateScore from "../config/rankCropsCalculateItsScore.js";

export const getCropAdvisory = async (req, res) => {
  try {
    const { state, district, soilType, irrigation, sowingMonth } = req.body;
    console.log(
      "Data crop advisory: ",
      state,
      district,
      soilType,
      irrigation,
      sowingMonth,
    );

    // const crops = await CropSuitability.find({});
    const crops = await CropSuitability.find({});

    console.log("crops got: ", await CropSuitability.findOne())

    const ranked = crops.map((crop) => {
      const { score, matchedParameters } = calculateScore(crop, req.body);
      return {
        ...crop.toObject(),
        score,
        matchedParameters,
      };
    });

    ranked.sort((a, b) => b.score - a.score);
    // console.log(ranked.slice(0, 6));

    res.status(200).json({
      success: true,
      crops: ranked.slice(0, 6),
    });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

export const getHindiSummary = async (req, res) => {
  try {
    const { selectedCrops, farmerInput } = req.body;

    const API_KEY = process.env.GEMINI_API_KEY;
    const ai = new GoogleGenAI({ apiKey: API_KEY });

    const prompt = `
    आप एक कृषि विशेषज्ञ हैं।
    
    किसान की जानकारी:
    राज्य: ${farmerInput.state}
    जिला: ${farmerInput.district}
    मिट्टी: ${farmerInput.soilType}
    सिंचाई: ${farmerInput.irrigation}
    बुवाई महीना: ${farmerInput.sowingMonth}
    
    चयनित फसल डेटा:
    ${JSON.stringify(selectedCrops)}
    
    किसान के लिए सरल हिंदी में 5 बिंदुओं में सलाह दें।
    सबसे लाभदायक और कम जोखिम वाली फसल भी बताएं।
    `;

    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: [{ parts: [{ text: prompt }] }],
    });

    const text = response.text();

    res.status(200).json({ success: true, summary: text });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};
