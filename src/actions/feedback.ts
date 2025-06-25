"use server";

import { auth } from "@/auth";
import { connectDB } from "@/lib/db";
import Feedback from "@/models/feedback";
import { MongooseError } from "mongoose";

interface DataType {
  interviewId: string;
  question: string;
  correctAnswer: string;
  userAnswer: string;
  feedback: string;
  rating: number;
}

export async function createFeedback(data: DataType) {
  try {
    console.log(data);
    await connectDB();
    const session = await auth();
    if (!session?.user) {
      return {
        success: false,
        message: "Unauthroized. Please Login.",
      };
    }

    const existingFeedback = await Feedback.findOne({
      userId: session?.user.id,
      question: data.question,
    });

    if (existingFeedback) {
      return {
        success: false,
        message: "You have already answered this question.",
      };
    }

    await Feedback.create({
      userId: session.user.id,
      interviewId: data.interviewId,
      question: data.question,
      correctAnswer: data.correctAnswer,
      userAnswer: data.userAnswer,
      feedback: data.feedback,
      rating: data.rating,
    });

    return {
      success: true,
      message: "Your answer has been saved successfully.",
    };
  } catch (error) {
    if (error instanceof MongooseError) {
      return {
        success: false,
        message: error.message,
      };
    }
    return {
      success: false,
      message: "Something went wrong. Try again later.",
    };
  }
}
