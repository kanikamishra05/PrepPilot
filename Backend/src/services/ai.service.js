const OpenAI = require("openai");
const { z } = require("zod")
const { zodToJsonSchema } = require("zod-to-json-schema")
const puppeteer = require("puppeteer")

const client = new OpenAI({
    apiKey: process.env.GROQ_API_KEY,
    baseURL: "https://api.groq.com/openai/v1"
});


const interviewReportSchema = z.object({
    matchScore: z.number().describe("A score between 0 and 100 indicating how well the candidate's profile matches the job describe"),
    technicalQuestions: z.array(z.object({
        question: z.string().describe("The technical question can be asked in the interview"),
        intention: z.string().describe("The intention of interviewer behind asking this question"),
        answer: z.string().describe("How to answer this question, what points to cover, what approach to take etc.")
    })).describe("Technical questions that can be asked in the interview along with their intention and how to answer them"),
    behavioralQuestions: z.array(z.object({
        question: z.string().describe("The technical question can be asked in the interview"),
        intention: z.string().describe("The intention of interviewer behind asking this question"),
        answer: z.string().describe("How to answer this question, what points to cover, what approach to take etc.")
    })).describe("Behavioral questions that can be asked in the interview along with their intention and how to answer them"),
    skillGaps: z.array(z.object({
        skill: z.string().describe("The skill which the candidate is lacking"),
        severity: z.enum([ "low", "medium", "high" ]).describe("The severity of this skill gap, i.e. how important is this skill for the job and how much it can impact the candidate's chances")
    })).describe("List of skill gaps in the candidate's profile along with their severity"),
    preparationPlan: z.array(z.object({
        day: z.number().describe("The day number in the preparation plan, starting from 1"),
        focus: z.string().describe("The main focus of this day in the preparation plan, e.g. data structures, system design, mock interviews etc."),
        tasks: z.array(z.string()).describe("List of tasks to be done on this day to follow the preparation plan, e.g. read a specific book or article, solve a set of problems, watch a video etc.")
    })).describe("A day-wise preparation plan for the candidate to follow in order to prepare for the interview effectively"),
    title: z.string().describe("The title of the job for which the interview report is generated"),
})

async function generateInterviewReport({
    resume,
    selfDescription,
    jobDescription
}) {

const prompt = `
You are an expert interview preparation assistant.

Return ONLY valid JSON.

The JSON must follow this structure exactly:

{
  "matchScore": number,
  "technicalQuestions":[
      {
        "question":"",
        "intention":"",
        "answer":""
      }
  ],
  "behavioralQuestions":[
      {
        "question":"",
        "intention":"",
        "answer":""
      }
  ],
  "skillGaps":[
      {
        "skill":"",
        "severity":"low | medium | high"
      }
  ],
  "preparationPlan":[
      {
        "day":1,
        "focus":"",
        "tasks":["",""]
      }
  ],
  "title":""
}

Candidate Resume:
${resume}

Self Description:
${selfDescription}

Job Description:
${jobDescription}
`;

const response = await client.chat.completions.create({
    model: "llama-3.3-70b-versatile",
    temperature: 0.4,
    response_format: {
        type: "json_object"
    },
    messages: [
        {
            role: "system",
            content:
                "Return only valid JSON. No markdown. No explanation."
        },
        {
            role: "user",
            content: prompt
        }
    ]
});

return JSON.parse(response.choices[0].message.content);

}



async function generatePdfFromHtml(htmlContent) {
    const browser = await puppeteer.launch({
        headless: true,
        args: [
            "--no-sandbox",
            "--disable-setuid-sandbox"
        ]
    });
    const page = await browser.newPage();
    await page.setContent(htmlContent, { waitUntil: "networkidle0" })

    const pdfBuffer = await page.pdf({
        format: "A4", margin: {
            top: "20mm",
            bottom: "20mm",
            left: "15mm",
            right: "15mm"
        }
    })

    await browser.close()

    return pdfBuffer
}

async function generateResumePdf({
    resume,
    selfDescription,
    jobDescription
}) {

const prompt = `
Generate a professional ATS-friendly resume.

Return ONLY JSON.

Format:

{
    "html":"complete html here"
}

Candidate Resume:
${resume}

Self Description:
${selfDescription}

Job Description:
${jobDescription}

The HTML should:

- be professional
- ATS friendly
- one page
- modern styling
- inline CSS
`;

const response = await client.chat.completions.create({
    model: "llama-3.3-70b-versatile",
    temperature: 0.4,
    response_format: {
        type: "json_object"
    },
    messages: [
        {
            role: "system",
            content:
                "Return only JSON."
        },
        {
            role: "user",
            content: prompt
        }
    ]
});

const jsonContent = JSON.parse(
    response.choices[0].message.content
);

const pdfBuffer = await generatePdfFromHtml(
    jsonContent.html
);

return pdfBuffer;

}

module.exports = { generateInterviewReport, generateResumePdf }