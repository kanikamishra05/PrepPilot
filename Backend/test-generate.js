require("dotenv").config();
const { GoogleGenAI } = require("@google/genai");

const ai = new GoogleGenAI({
  apiKey: process.env.GOOGLE_GENAI_API_KEY,
});

async function main() {
    const response = await client.chat.completions.create({
    model: "llama-3.3-70b-versatile",
    messages: [
        {
            role: "system",
            content: "You are an expert interview preparation assistant. Always return ONLY valid JSON."
        },
        {
            role: "user",
            content: prompt
        }
    ],
    temperature: 0.4,
    response_format: {
        type: "json_object"
    }
});

   return JSON.parse(response.choices[0].message.content);

  console.log(response.text);
}

main().catch(console.error);