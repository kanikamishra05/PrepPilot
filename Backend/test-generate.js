require("dotenv").config();
const { GoogleGenAI } = require("@google/genai");

const ai = new GoogleGenAI({
  apiKey: process.env.GOOGLE_GENAI_API_KEY,
});

async function main() {
  const response = await ai.models.generateContent({
    model: "models/gemini-3.5-flash",
    contents: "Reply with only the word Hello",
  });

  console.log(response.text);
}

main().catch(console.error);