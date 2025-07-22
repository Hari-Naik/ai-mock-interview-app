import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import { MockInteviewFormData } from "./schemas";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

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

export const resumAnalyzerPrompt = ({
  resumeText,
  jobRole,
  jobDescription,
}: {
  resumeText: string;
  jobRole: string;
  jobDescription: string;
}) => {
  const prompt = `
    	You are a professional resume reviewer and career coach.

    Analyze the provided resume based on the given job role and job description. Compare the candidate's qualifications, skills, and experiences with the expectations outlined in the job description.

    Return the response strictly in the following JSON format:

    {
      "matchScore": number (0-100),
      "summary": string,
      "strengths": [string],
      "weaknesses": [string],
      "missingSkills": [string],
      "recommendedImprovements": [string],
      "atsFriendliness": [string],
      "isRoleSuitable": boolean,
	  "roleSuitabilityReason":string
    }

    Resume Text:${resumeText}.

    Job Role:${jobRole}.

    Job Description: ${jobDescription}

    Analyze the resume only with respect to this job role and description. Do not guess or hallucinate any information that is not present in the resume. If some key details are missing in the resume, clearly mention that in weaknesses or missingSkills.

    Be objective, concise, and accurate.`;

  return prompt;
};
