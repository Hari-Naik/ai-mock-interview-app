import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import { z } from "zod";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const authSchema = z.object({
  email: z.string().email({ message: "Please enter a valid email." }).trim(),
  password: z
    .string()
    .min(8, "Your password must contain 8 or more characters.")
    .max(72, "Your password must contain less than 72 characters.")
    .trim(),
});

export type AuthFormData = z.infer<typeof authSchema>;
