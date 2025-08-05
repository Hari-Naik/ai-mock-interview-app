export interface IUser {
  email: string;
  password: string;
}

export interface Question {
  id: string;
  question: string;
  answer: string;
}

export interface InterviewType {
  id: string;
  userId: string;
  jobRole: string;
  jobDescription: string;
  experience: number;
  techStack: string[];
  questions: Question[];
  createdAt: string;
  updatedAt: string;
}

export interface FeedbackType {
  id: string;
  interviewId: string;
  question: string;
  correctAnswer: string;
  userAnswer: string;
  feedback: string;
  rating: number;
}

export interface AnalysisResultType {
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
}

export interface ResumeAnalysisType extends AnalysisResultType {
  id: string;
  userId: string;
  jobDescription: string;
  createdAt: string;
  updatedAt: string;
}

export interface UserType {
  id: string;
  email: string;
  profilePic?: string;
  firstName?: string;
  lastName?: string;
  language?: string;
  currentPosition?: string;
  company?: string;
  skills: string[];
  experience?: number;
  about?: string;
  createdAt: string;
  updatedAt: string;
}
