import { GoogleGenerativeAI } from "@google/generative-ai";

const apiKey = import.meta.env.VITE_GOOGLE_GEMINI_AI_API_KEY;
const genAI = new GoogleGenerativeAI(apiKey);

const model = genAI.getGenerativeModel({
  model: "gemini-1.5-flash-002",
});

const generationConfig = {
  temperature: 1,
  topP: 0.95,
  topK: 40,
  maxOutputTokens: 8192,
  responseMimeType: "application/json",
};

export const chatSession = model.startChat({
  generationConfig,
});

export const AIPrompt = `Create minimum five authentic Indian-style recipes using the following ingredients: {ingredients}. The recipes should include a description, step-by-step cooking instructions, traditional Indian cooking techniques, and a serving suggestion. Highlight optional spices or additions to enhance flavor. The focus should be on creating visually appealing and flavorful Indian dishes while effectively using the listed ingredients. generate the results in following JSON format {
  "recipes":[
  "name":,
  "description": ,
  "ingredients":[
  {"item":,
  "quantity"},],
  "instructions":[
  {"step":,"description":,}.],"optionalAdditions":,"servingSuggestion":,
  ]}`;
