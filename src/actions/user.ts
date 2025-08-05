"use server";

import { auth } from "@/auth";
import User from "@/models/user";
import { connectDB } from "@/lib/db";
import { uploadFile } from "./resume-analyzer";

export interface UserActionState {
  message: string | null;
  error: string | null;
}
export async function updateUser(
  prevState: UserActionState,
  formData: FormData
): Promise<UserActionState> {
  try {
    await connectDB();

    const session = await auth();

    if (!session?.user) {
      return {
        error: "Unauthorized. Please signin.",
        message: null,
      };
    }

    const profilePic = formData.get("profilePic") as File;

    if (profilePic.size) {
      const uploaded = await uploadFile(profilePic);
      await User.findByIdAndUpdate(session.user.id, {
        profilePic: uploaded?.ufsUrl,
      });
    }

    const rawFormData = {
      firstName: formData.get("firstName"),
      lastName: formData.get("lastName"),
      language: formData.get("language"),
      currentPosition: formData.get("currentPosition"),
      company: formData.get("company"),
      skills: formData.get("skills")?.toString(),
      experience: formData.get("experience"),
      about: formData.get("about"),
    };

    await User.findByIdAndUpdate(session.user.id, {
      ...rawFormData,
      skills: rawFormData.skills?.split(","),
    });

    return {
      message: "User details updated.",
      error: null,
    };
  } catch (error) {
    console.error("Error updating user: ", error);
    return {
      message: null,
      error: "Failed to update user.",
    };
  }
}
