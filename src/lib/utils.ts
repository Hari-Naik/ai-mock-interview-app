import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import { MockInteviewFormData } from "./schemas";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatAiResponse(response: string) {
  const startIndex = response.indexOf("[");
  const endIndex = response.lastIndexOf("]");

  const text = response.slice(startIndex, endIndex + 1);

  return JSON.parse(text);
}

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
