// import mongoose, { Model, Schema } from "mongoose";

// interface InterviewType extends Document {
//   userId: string;
//   jobRole: string;
//   jobDescription: string;
//   experience: number;
//   techStack: string[];
//   questions: { question: string; answer: string }[];
//   createdAt: Date;
//   updatedAt: Date;
// }

// const interviewSchema = new Schema<InterviewType>(
//   {
//     userId: {
//       type: String,
//       required: true,
//     },
//     jobRole: {
//       type: String,
//       required: true,
//     },
//     jobDescription: {
//       type: String,
//       required: true,
//     },
//     experience: {
//       type: Number,
//       required: true,
//     },
//     techStack: {
//       type: [String],
//       required: true,
//     },
//     questions: {
//       type: [
//         {
//           question: String,
//           answer: String,
//         },
//       ],
//       required: true,
//     },
//   },
//   { timestamps: true }
// );

// const Interview: Model<InterviewType> =
//   mongoose.models.Interview ||
//   mongoose.model<InterviewType>("Interview", interviewSchema);

// export default Interview;

import mongoose, { Schema, Document, Types } from "mongoose";

export interface QuestionSchemaType {
  _id?: Types.ObjectId; // optional for creation
  question: string;
  answer: string;
}

export interface InterviewType extends Document {
  userId: Types.ObjectId;
  jobRole: string;
  jobDescription: string;
  experience: number;
  techStack: string[];
  questions: QuestionSchemaType[];
  createdAt: Date;
  updatedAt: Date;
}

const questionSchema = new Schema<QuestionSchemaType>(
  {
    question: { type: String, required: true, trim: true },
    answer: { type: String, required: true, trim: true },
  },
  {
    _id: true, // allow _id for each question
  }
);

const interviewSchema = new Schema<InterviewType>(
  {
    userId: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    jobRole: {
      type: String,
      required: true,
      trim: true,
    },
    jobDescription: {
      type: String,
      required: true,
      trim: true,
    },
    experience: {
      type: Number,
      required: true,
      min: 0,
    },
    techStack: {
      type: [String],
      required: true,
    },
    questions: {
      type: [questionSchema],
      required: true,
    },
  },
  { timestamps: true }
);

const Interview =
  mongoose.models.Interview ||
  mongoose.model<InterviewType>("Interview", interviewSchema);

export default Interview;
