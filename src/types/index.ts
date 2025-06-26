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
