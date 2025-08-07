"use server";

import { auth } from "@/auth";
import User from "@/models/user";
import { connectDB } from "@/lib/db";
import { uploadFile } from "./resume-analyzer";
import bcrypt from "bcrypt";

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

    const user = await User.findOne({ email: session.user.email });

    if (!user) {
      return {
        error: "User not found.",
        message: null,
      };
    }

    let rawFormData;
    const dataType = formData.get("dataType");

    if (dataType === "education") {
      rawFormData = {
        educationDetails: {
          college: formData.get("college"),
          degree: formData.get("degree"),
        },
      };
    } else if (dataType === "social") {
      rawFormData = {
        socialLinks: {
          portfolio: formData.get("portfolio"),
          linkedin: formData.get("linkedin"),
          github: formData.get("github"),
          twitter: formData.get("twitter"),
        },
      };
    } else if (dataType === "password") {
      const currentPassword = formData.get("currentPassword") as string;
      const newPassword = formData.get("newPassword") as string;

      const isPasswordMatched = await bcrypt.compare(
        currentPassword,
        user.password
      );

      if (!isPasswordMatched) {
        return {
          error: "Wrong password.",
          message: null,
        };
      }
      const salt = await bcrypt.genSalt(10);
      const hashedPassword = await bcrypt.hash(newPassword, salt);
      rawFormData = {
        password: hashedPassword,
      };
    } else {
      const profilePic = formData.get("profilePic") as File;
      if (profilePic.size) {
        const uploaded = await uploadFile(profilePic);
        await User.findByIdAndUpdate(session.user.id, {
          profilePic: uploaded?.ufsUrl,
        });
      }

      rawFormData = {
        firstName: formData.get("firstName"),
        lastName: formData.get("lastName"),
        language: formData.get("language"),
        currentPosition: formData.get("currentPosition"),
        company: formData.get("company"),
        skills: formData.get("skills")?.toString().split(","),
        experience: formData.get("experience"),
        about: formData.get("about"),
      };
    }

    await User.findByIdAndUpdate(session.user.id, {
      ...rawFormData,
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
