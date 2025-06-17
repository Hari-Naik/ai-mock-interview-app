import { InterviewType } from "@/types";
import { connectDB } from "./db";
import Interview from "@/models/interview";
import { cache } from "react";

export const fetchInterviews = cache(async (): Promise<InterviewType[]> => {
  try {
    await connectDB();
    const response = await Interview.find();
    const formatted = response.map(doc => ({
      userId: doc.userId,
      id: doc._id.toString(),
      jobRole: doc.jobRole,
      jobDescription: doc.jobDescription,
      experience: doc.experience,
      techStack: doc.techStack,
      questions: doc.questions,
      createdAt: doc.createdAt.toISOString(),
      updatedAt: doc.updatedAt.toISOString(),
    }));

    return formatted;
  } catch (error) {
    throw error;
  }
});
