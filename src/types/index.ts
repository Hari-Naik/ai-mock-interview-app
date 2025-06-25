export interface IUser {
  email: string;
  password: string;
}

export interface Question {
  id: string;
  question: string;
  answer: string;
}

// export interface InterviewType {
//   userId: string;
//   id: string;
//   jobRole: string;
//   jobDescription: string;
//   experience: number;
//   techStack: string[];
//   questions: { id: string; question: string; answer: string }[];
//   createdAt: string;
//   updatedAt: string;
// }

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
