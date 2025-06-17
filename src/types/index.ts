export interface IUser {
  email: string;
  password: string;
}

export interface InterviewType {
  userId: string;
  id: string;
  jobRole: string;
  jobDescription: string;
  experience: number;
  techStack: string[];
  questions: { question: string; answer: string }[];
  createdAt: string;
  updatedAt: string;
}
