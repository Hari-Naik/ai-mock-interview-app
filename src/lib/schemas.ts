import { z } from "zod";

export const authSchema = z.object({
  email: z
    .string()
    .min(1, "Email is required.")
    .email({ message: "Please enter a valid email." })
    .trim(),
  password: z
    .string()
    .min(1, "Password is required.")
    .min(8, "Your password must contain 8 or more characters.")
    .max(72, "Your password must contain less than 72 characters.")
    .trim(),
});

export type AuthFormData = z.infer<typeof authSchema>;

export const mockInteviewFormSchema = z.object({
  jobRole: z.string().min(1, "Job role is required."),
  jobDescription: z
    .string()
    .min(1, "Job description required.")
    .min(50, "Job description must be at least 50 characters."),
  experience: z.coerce
    .number()
    .min(0, "Experience cannot be empty or negative."),
  techStack: z.string().min(1, "Tech stack is required."),
});

export type MockInteviewFormData = z.infer<typeof mockInteviewFormSchema>;
