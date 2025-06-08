"use server";

import { AuthFormData, authSchema } from "@/lib/utils";
import { connectDB } from "@/lib/db";
import User from "@/models/user";
import { MongooseError } from "mongoose";

export async function signUp(
  formData: AuthFormData
): Promise<{ success: boolean; message: string }> {
  try {
    await connectDB();
    const validatedFields = authSchema.safeParse(formData);

    if (!validatedFields.success) {
      return {
        success: false,
        message: "Invalid Credentials.",
      };
    }

    const { email, password } = validatedFields.data;

    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return {
        success: false,
        message: "A user with this email already exists.",
      };
    }
    const user = new User({
      email,
      password,
    });
    await user.save();
    return {
      success: true,
      message: "user registered successfully.please login",
    };
  } catch (error) {
    if (error instanceof MongooseError) {
      return {
        success: false,
        message: error.message,
      };
    }
    return {
      success: false,
      message: "Something went wrong.",
    };
  }
}
