import mongoose, { Model, Schema } from "mongoose";

interface InterviewType extends Document {
  userId: string;
  jobRole: string;
  jobDescription: string;
  experience: number;
  techStack: string[];
  questions: { question: string; answer: string }[];
  createdAt: Date;
  updatedAt: Date;
}

const interviewSchema = new Schema<InterviewType>(
  {
    userId: {
      type: String,
      required: true,
    },
    jobRole: {
      type: String,
      required: true,
    },
    jobDescription: {
      type: String,
      required: true,
    },
    experience: {
      type: Number,
      required: true,
    },
    techStack: {
      type: [String],
      required: true,
    },
    questions: {
      type: [
        {
          question: String,
          answer: String,
        },
      ],
      required: true,
    },
  },
  { timestamps: true }
);

const Interview: Model<InterviewType> =
  mongoose.models.Interview ||
  mongoose.model<InterviewType>("Interview", interviewSchema);

export default Interview;
