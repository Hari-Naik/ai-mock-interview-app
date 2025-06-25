import mongoose, { Schema, Types } from "mongoose";

interface FeedbackType extends Document {
  id: string;
  userId: Types.ObjectId;
  interviewId: Types.ObjectId;
  question: string;
  correctAnswer: string;
  userAnswer: string;
  feedback: string;
  rating: number;
  createdAt: Date;
  updatedAt: Date;
}

const feedbackSchema = new Schema(
  {
    userId: {
      type: Types.ObjectId,
      ref: "User",
      required: true,
    },
    interviewId: {
      type: Types.ObjectId,
      ref: "Interview",
      required: true,
    },
    question: {
      type: String,
      required: true,
    },
    correctAnswer: {
      type: String,
      required: true,
    },
    userAnswer: {
      type: String,
      required: true,
    },
    feedback: {
      type: String,
      required: true,
    },
    rating: {
      type: Number,
      required: true,
    },
  },
  { timestamps: true }
);

const Feedback =
  mongoose.models.Feedback ||
  mongoose.model<FeedbackType>("Feedback", feedbackSchema);

export default Feedback;
