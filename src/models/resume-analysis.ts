import mongoose, { model, models, Schema, Types } from "mongoose";

interface IResumeAnalysis extends Document {
  userId: Types.ObjectId;
  pdfUrl: string;
  jobRole: string;
  jobDescription: string;
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
  createdAt?: Date;
  updatedAt?: Date;
}

const resumeAnalysisSchema = new Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    pdfUrl: {
      type: String,
      required: true,
      trim: true,
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
    analysisResult: {
      matchScore: { type: Number, required: true, min: 0, max: 100 },
      summary: { type: String, required: true, trim: true },
      strengths: {
        type: [String],
        default: [],
      },
      weaknesses: {
        type: [String],
        default: [],
      },
      missingSkills: {
        type: [String],
        default: [],
      },
      recommendedImprovements: {
        type: [String],
        default: [],
      },
      atsFriendliness: {
        type: [String],
        default: [],
      },
      isRoleSuitable: { type: Boolean, required: true },
      roleSuitabilityReason: { type: String, required: true, trim: true },
    },
  },
  { timestamps: true }
);

const ResumeAnalysis =
  models.ResumeAnalysis ||
  model<IResumeAnalysis>("ResumeAnalysis", resumeAnalysisSchema);

export default ResumeAnalysis;
