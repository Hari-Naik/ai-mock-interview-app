import type { FeedbackType, InterviewType } from "@/types";
import Interview, { QuestionSchemaType } from "@/models/interview";
import { cache } from "react";
import Feedback from "@/models/feedback";

export const getInterviews = cache(async (): Promise<InterviewType[]> => {
  try {
    const response = await Interview.find();
    const formatted = response.map(doc => ({
      userId: doc.userId,
      id: doc._id.toString(),
      jobRole: doc.jobRole,
      jobDescription: doc.jobDescription,
      experience: doc.experience,
      techStack: doc.techStack,
      questions: doc.questions.map((doc: QuestionSchemaType) => ({
        id: doc._id && doc?._id.toString(),
        question: doc.question,
        answer: doc.answer,
      })),
      createdAt: doc.createdAt.toISOString(),
      updatedAt: doc.updatedAt.toISOString(),
    }));

    return formatted;
  } catch (error) {
    throw error;
  }
});

export const getInterview = async (id: string): Promise<InterviewType> => {
  try {
    const response = await Interview.findById(id);
    const formattedResponse = {
      userId: response.userId,
      id: response._id.toString(),
      jobRole: response.jobRole,
      jobDescription: response.jobDescription,
      experience: response.experience,
      techStack: response.techStack,
      questions: response.questions.map((doc: QuestionSchemaType) => ({
        id: doc._id && doc._id.toString(),
        question: doc.question,
        answer: doc.answer,
      })),
      createdAt: response?.createdAt.toISOString(),
      updatedAt: response?.updatedAt.toISOString(),
    };

    return formattedResponse as InterviewType;
  } catch (error) {
    throw error;
  }
};

export const getFeedback = async (
  interviewId: string
): Promise<FeedbackType[]> => {
  try {
    const response = await Feedback.find({ interviewId });
    return response.map(doc => {
      return {
        id: doc._id.toString(),
        interviewId: doc.interviewId.toString(),
        question: doc.question,
        correctAnswer: doc.correctAnswer,
        userAnswer: doc.userAnswer,
        feedback: doc.feedback,
        rating: doc.rating,
      };
    });
  } catch (error) {
    throw error;
  }
};
