"use server";

import { auth } from "@/auth";
import { connectDB } from "@/lib/db";
import { MockInteviewFormData, mockInteviewFormSchema } from "@/lib/schemas";
import Interview from "@/models/interview";
import { MongooseError } from "mongoose";
import { revalidatePath } from "next/cache";

interface ResponseType {
  success: boolean;
  message: string;
}

interface DataType extends MockInteviewFormData {
  questions: { question: string; answer: string }[];
}

export async function createMockInterview(
  data: DataType
): Promise<ResponseType> {
  try {
    await connectDB();
    const session = await auth();
    if (!session?.user) {
      return {
        success: false,
        message: "Please Signin.",
      };
    }

    const validatedFields = mockInteviewFormSchema.safeParse({
      jobRole: data.jobRole,
      jobDescription: data.jobDescription,
      experience: data.experience,
      techStack: data.techStack,
    });

    if (!validatedFields.success) {
      return {
        success: false,
        message: "Invalid inputs.",
      };
    }

    await Interview.create({
      userId: session.user.id,
      ...data,
      techStack: data.techStack.split(","),
    });

    revalidatePath("/interviews");

    return {
      success: true,
      message: "Mock interview created successfully.",
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

export async function updateMockInterview(
  id: string,
  data: DataType
): Promise<ResponseType> {
  try {
    await connectDB();

    const validatedFields = mockInteviewFormSchema.safeParse({
      jobRole: data.jobRole,
      jobDescription: data.jobDescription,
      experience: data.experience,
      techStack: data.techStack,
    });

    if (!validatedFields.success) {
      return {
        success: false,
        message: "Invalid inputs.",
      };
    }

    await Interview.findByIdAndUpdate(id, {
      ...data,
      techStack: data.techStack.split(","),
    });

    revalidatePath("/interviews");

    return {
      success: true,
      message: "Changes saved successfully.",
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

export async function deleteMockInterview(id: string) {
  try {
    await connectDB();
    await Interview.findByIdAndDelete(id);
    revalidatePath("/interviews");
    return { success: true, message: "Deleted successfully." };
  } catch (error) {
    console.log(error);
    return {
      success: false,
      message: "Failed to delete. Please try again.",
    };
  }
}
