import { GoogleGenAI } from "@google/genai";

export const callGemini = async ({ plant, disease, confidence }) => {
  try {
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
- Output must be EXACTLY ONE LINE.
- Use | to separate the 6 main sections ONLY.
- In the "Upachar" (Treatment) section:
  - Do NOT write the heading word "उपचार:".
  - Start directly with the medicines.
  - Give exactly 2 medicines.
  - Format strictly as: 1) दवा नाम – उपयोग विवरण, 2) दवा नाम – उपयोग विवरण
- In रोग विवरण: Exactly 2 short lines separated by ; (semicolon).
- In रोकथाम: Provide 1 clear, actionable step only.
- Cost: Provide only the numeric value and "रुपये" (approximate INR per bigha).

Output format (6 sections separated by |):
पौधे का नाम | रोग का नाम | रोग विवरण | 1) दवा 1 – विवरण, 2) दवा 2 – विवरण | रोकथाम कदम | लागत राशि
`;

    const API_KEY = process.env.GEMINI_API_KEY;

    if (!API_KEY) {
      throw new Error("Gemini API key missing");
    }

    const ai = new GoogleGenAI({ apiKey: API_KEY });

    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: [{ parts: [{ text: prompt }] }],
    });

    console.log("after response in gemini");

    const text = response?.text?.trim();

    if (!text) {
      throw new Error("Empty response from Gemini");
    }

    console.log("Gemini response:", text);

    return text;

  } catch (error) {
    console.error("Gemini Error:", error.message);

    return "उत्तर तैयार नहीं हो पाया | कृपया दोबारा प्रयास करें";
  }
};