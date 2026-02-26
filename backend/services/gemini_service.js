import { GoogleGenAI } from "@google/genai";

export const callGemini = async ({ plant, disease, confidence }) => {
const prompt = `
You are an experienced Indian agriculture advisor.
Write in clear, structured, farmer-friendly Hindi.
Do NOT repeat plant or disease name unnecessarily.
Keep information helpful, not overwhelming.
Do NOT merge multiple medicines into one sentence.

Plant Name: ${plant}
Disease Name: ${disease}
Prediction Confidence: ${confidence}

STRICT RULES:
- Output must be EXACTLY ONE LINE
- Use | to separate main sections ONLY
- In उपचार:
  - Write heading word "उपचार:"
  - Give exactly 2 medicines
  - Format strictly as:
    उपचार: 1) दवा नाम – उपयोग विवरण, 2) दवा नाम – उपयोग विवरण
- In रोग विवरण: exactly 2 short lines separated by ;
- In रोकथाम: 1 clear step only
- Cost: approximate INR per bigha

Output format (do not change separators):
पौधे का नाम | रोग का नाम | रोग विवरण | उपचार | रोकथाम | अनुमानित लागत प्रति बिघा
`;

// console.log("from gemini 1")


const API_KEY = process.env.GEMINI_API_KEY;
const ai = new GoogleGenAI({ apiKey: API_KEY });

const response = await ai.models.generateContent({
  model: "gemini-3-flash-preview",
  contents: [{ parts: [{ text: prompt }] }],
});
console.log("from gemini 100")

  console.log("AI response:", response.text);
  return response.text;
};
