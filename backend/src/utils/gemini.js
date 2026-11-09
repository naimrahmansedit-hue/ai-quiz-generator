const { GoogleGenerativeAI } = require('@google/generative-ai');

// Calls Google Gemini to make a summary and MCQs from study text.
// TODO (Week 7-8): parse the JSON reply into { summary, questions: [...] }
async function generateQuizFromText(text, questionCount = 5) {
  const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);
  const model = genAI.getGenerativeModel({ model: 'gemini-1.5-flash' });
  const prompt = `From the study material below, write a short summary and ${questionCount} multiple-choice questions with 4 options each. Return JSON only.

${text.slice(0, 8000)}`;
  const result = await model.generateContent(prompt);
  return result.response.text();
}

module.exports = { generateQuizFromText };
