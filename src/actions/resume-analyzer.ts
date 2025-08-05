"use server";

import { auth } from "@/auth";
import { connectDB } from "@/lib/db";
import { generateAIResults } from "@/lib/gemini-ai";
import {
  ResumeAnalyzerFormdata,
  resumeAnalyzerFormSchema,
} from "@/lib/schemas";
import { formatAIResponse, resumAnalyzerPrompt } from "@/lib/utils";
import ResumeAnalysis from "@/models/resume-analysis";
import { PDFLoader } from "@langchain/community/document_loaders/fs/pdf";
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

export async function uploadFile(file: File) {
  const utapi = new UTApi();
  const response = await utapi.uploadFiles([file]);
  const [result, error] = response;
  if (error) throw error;
  return result.data;
}

async function pdfParse(file: File): Promise<string> {
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
        error: "Invalid form inputs.",
      };
    }

    const { file, jobRole, jobDescription } = validatedFields.data;

    const uploadedFile = await uploadFile(file);

    const resumeText = await pdfParse(file);

    const prompt = resumAnalyzerPrompt({ resumeText, jobRole, jobDescription });

    const rawAIResponse = await generateAIResults(prompt);
    const analysisResult = formatAIResponse(rawAIResponse!);

    await ResumeAnalysis.create({
      userId: session.user.id,
      pdfUrl: uploadedFile?.ufsUrl,
      jobRole,
      jobDescription,
      analysisResult,
    });

    return {
      success: true,
      data: {
        pdfUrl: uploadedFile?.ufsUrl as string,
        jobRole,
        analysisResult,
      },
      error: null,
    };
  } catch (error) {
    console.error("Resume Analyzer Error:", error);
    return {
      success: false,
      error: "Unable to analyze resume. Please try again later.",
    };
  }
}
