//const { GoogleGenerativeAI } = require("@google/generative-ai");
//importando o GEMINI
import { GoogleGenerativeAI } from "@google/generative-ai";

//Acessando a API do GEMINI via sua API key
const genAI = new GoogleGenerativeAI("AIzaSyAnXqHj5aXAGHtF1xBxTsbU1gD14Jq59uI");
const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
// colocando o prompt 
const prompt = "quem é bill gades";
//enviando o pronpt e esperando 
const result = await model.generateContent(prompt);
console.log(result.response.text());