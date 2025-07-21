import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import { MockInteviewFormData } from "./schemas";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// export function formatAiResponse(response: string) {
//   const startIndex = response.indexOf("[");
//   const endIndex = response.lastIndexOf("]");

//   const text = response.slice(startIndex, endIndex + 1);

//   return JSON.parse(text);
// }

export const formatAIResponse = (response: string) => {
  let cleanText = response.trim();
  cleanText = cleanText.replace("```json", "");
  cleanText = cleanText.replace("```", "");

  const controlCharsRegex = new RegExp(`[\\u0000-\\u001F]+`, "g");
  cleanText = cleanText.replace(controlCharsRegex, " ");

  try {
    return JSON.parse(cleanText);
  } catch (error) {
    throw new Error("Invalid JSON format:" + (error as Error)?.message);
  }
};

export function getPrompt(data: MockInteviewFormData) {
  const prompt = `Generate a list of 5 technical interview questions and answers as an array of objects in the following format:
[{question: string, answer: string}]

Consider the following inputs:

Job Role: ${data.jobRole}

Job Description: ${data.jobDescription}

Years of Experience: ${data.experience}

Tech Stack: ${data.techStack}

Tailor the questions to be relevant to the role, tech stack, and experience level.The answers should be concise, professional, and informative. Return only the array of objects with no explanation or extra text.`;

  return prompt;
}

export function getPromptForFeedback(
  question: string,
  idealAnswer: string,
  userAnswer: string
): string {
  const prompt = `			
Question:"${question}"
User Answer: "${userAnswer}
Correct Answer:"${idealAnswer}"
Please compare the user's answer to the correct answer, and provide a rating (from 1 to 10) based on answer quality, and other feedback for improvement.
Return the result in JSON format with the fields "rating" (number) and "feedback" (string).`;

  return prompt;
}
