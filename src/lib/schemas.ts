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

export const resumeAnalyzerFormSchema = z.object({
  file: z
    .instanceof(File, { message: "File is required." })
    .refine(
      file => file.size <= 20 * 1024 * 1024,
      "File size must be less than 20MB."
    )
    .refine(
      file => file.type.startsWith("application/pdf"),
      "File must be a pdf."
    ),
  jobRole: z.string().min(1, "Role is required."),
  jobDescription: z
    .string()
    .min(1, "Job description required.")
    .min(50, "Job description must be at least 50 characters."),
});

export type ResumeAnalyzerFormdata = z.infer<typeof resumeAnalyzerFormSchema>;

export const resetPasswordFormSchema = z
  .object({
    currentPassword: z
      .string()
      .min(1, "Password is required.")
      .min(8, "Your password must contain 8 or more characters.")
      .max(72, "Your password must contain less than 72 characters.")
      .trim(),
    newPassword: z
      .string()
      .min(1, "Password is required.")
      .min(8, "Your password must contain 8 or more characters.")
      .max(72, "Your password must contain less than 72 characters.")
      .trim(),
    confirmPassword: z
      .string()
      .min(1, "Password is required.")
      .min(8, "Your password must contain 8 or more characters.")
      .max(72, "Your password must contain less than 72 characters.")
      .trim(),
  })
  .refine(data => data.newPassword === data.confirmPassword, {
    message: "The passwords do not match.",
    path: ["confirmPassword"],
  });

export type ResetPasswordFormData = z.infer<typeof resetPasswordFormSchema>;
