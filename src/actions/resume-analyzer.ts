"use server";

import { auth } from "@/auth";
import { connectDB } from "@/lib/db";
import { generateAIResults } from "@/lib/gemini-ai";
import {
  ResumeAnalyzerFormdata,
  resumeAnalyzerFormSchema,
} from "@/lib/schemas";
import { formatAIResponse } from "@/lib/utils";
import ResumeAnalysis from "@/models/resume-analysis";
import { PDFLoader } from "@langchain/community/document_loaders/fs/pdf";
import { MongooseError } from "mongoose";
import { UTApi } from "uploadthing/server";

interface ResponseType {
  success: boolean;
  data?: {
    pdfUrl: string;
    jobRole: string;
    analysisResult: {
      matchScore: number;
      summary: string;
      strengths: string[];
      weaknesses: string[];
      missingSkills: string[];
      recommendedImprovements: string[];
      atsFriendliness: string[];
      isRoleSuitable: boolean;
      roleSuitabilityReason: string;
    };
  };
  error: string | null;
}

async function uploadFile(file: File) {
  const utapi = new UTApi();
  const response = await utapi.uploadFiles([file]);
  const [result, error] = response;
  if (error) throw error;
  return result.data;
}

export async function pdfParse(file: File): Promise<string> {
  //   const filePath = await uploadFile("/resume.pdf");

  //   const response = await fetch(pdfUrl);
  //   const blob = await response.blob();

  //   const arrayBuffer = await blob.arrayBuffer();

  //   const loader = new PDFLoader(new Blob([arrayBuffer]));
  const arrayBuffer = await file.arrayBuffer();
  const loader = new PDFLoader(new Blob([arrayBuffer]));
  const docs = await loader.load();

  const pdfText = docs.map(doc => doc.pageContent).join("\n");

  return pdfText;
}

export async function analyzeResume(
  formData: ResumeAnalyzerFormdata
): Promise<ResponseType> {
  try {
    await connectDB();

    const session = await auth();
    if (!session?.user) {
      return {
        success: false,
        error: "Please Login.",
      };
    }

    const validatedFields = resumeAnalyzerFormSchema.safeParse(formData);

    if (!validatedFields.success) {
      return {
        success: false,
        error: "Invalid inputs.",
      };
    }

    const { file, jobRole, jobDescription } = validatedFields.data;

    const data = await uploadFile(file);

    const resumeText = await pdfParse(file);

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

    const response = await generateAIResults(prompt);
    const analysisResult = formatAIResponse(response!);

    await ResumeAnalysis.create({
      userId: session.user.id,
      pdfUrl: data?.ufsUrl,
      jobRole,
      jobDescription,
      analysisResult,
    });

    return {
      success: true,
      data: {
        pdfUrl: data?.ufsUrl as string,
        jobRole,
        analysisResult,
      },
      error: null,
    };
  } catch (error) {
    if (error instanceof MongooseError) {
      return {
        success: false,
        error: "Something went wrong.",
      };
    }
    return {
      success: false,
      error: "Unable to analyze resume. Please try again!",
    };
  }
}
