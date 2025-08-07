import React, { useActionState, useEffect } from "react";

import Image from "next/image";
import { cn } from "@/lib/utils";

import UpdateButton from "./update-btn";
import ProfileInput from "./profile-input";
import ResponseAlert from "./response-alert";

import { useUser } from "@/hooks/useUser";
import { updateUser, UserActionState } from "@/actions/user";

export const initialState: UserActionState = {
  message: "",
  error: "",
};

const PersonalInformation = () => {
  const [state, formAction] = useActionState(updateUser, initialState);

  const { data: user, refetch } = useUser();

  useEffect(() => {
    refetch();
  }, [state]);

  const labelBaseClass = "text-base font-medium text-gray-600";

  const inputBaseClass =
    "px-3 py-2 rounded outline-none border border-gray-300 focus:ring focus:ring-gray-200 transition-all duration-200 text-sm  text-gray-700";

  return (
    <div className="flex-1 p-3 bg-white rounded-md shadow-lg border border-gray-200 pb-10">
      <h2 className="text-xl sm:text-2xl font-semibold text-gray-600 mb-10">
        Personal Information
      </h2>

      <form action={formAction} className="flex flex-col gap-4">
        {/* profile pic */}
        <div className="relative h-48 w-48">
          {user?.profilePic ? (
            <Image
              src={user?.profilePic}
              fill
              alt="profile pic"
              className="object-center"
            />
          ) : (
            <p className="h-full bg-fuchsia-700 flex items-center justify-center text-6xl text-white">
              {user?.email.charAt(0)}
            </p>
          )}
        </div>
        <input
          type="file"
          name="profilePic"
          className="w-full sm:w-1/2 text-black text-sm bg-gray-100 file:cursor-pointer cursor-pointer file:px-4 file:py-2 file:mr-2
		  file:bg-gray-800 file:hover:bg-gray-700 file:text-white rounded border border-gray-100"
          accept="image/png, image/jpeg"
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-5">
          <ProfileInput
            type="text"
            id="firstname"
            name="firstName"
            defaultValue={user?.firstName || ""}
            label="First Name"
          />
          <ProfileInput
            type="text"
            id="lastname"
            name="lastName"
            defaultValue={user?.lastName || ""}
            label="Last Name"
          />

          <ProfileInput
            type="email"
            id="email"
            name="email"
            defaultValue={user?.email || ""}
            label="Email"
          />
          <ProfileInput
            type="text"
            id="language"
            name="language"
            defaultValue={user?.language || ""}
            label="Language"
          />
          <ProfileInput
            type="text"
            id="position"
            name="currentPosition"
            defaultValue={user?.currentPosition || ""}
            label="Current Position"
          />
          <ProfileInput
            type="text"
            id="company"
            name="company"
            defaultValue={user?.company || ""}
            label="Company"
          />

          <ProfileInput
            type="text"
            id="skills"
            name="skills"
            defaultValue={user?.skills?.join(",") || ""}
            label="Skills"
          />
          <ProfileInput
            type="number"
            id="experience"
            name="experience"
            defaultValue={
              user?.experience !== undefined ? String(user.experience) : "0"
            }
            label="Experience"
          />

          <div className="flex flex-col gap-2">
            <label htmlFor="about" className={cn(labelBaseClass)}>
              Write about you
            </label>
            <textarea
              name="about"
              id="about"
              defaultValue={user?.about}
              placeholder="Description"
              className={cn(inputBaseClass, "resize-none h-40")}></textarea>
          </div>
        </div>

        {state.error && (
          <ResponseAlert
            type="error"
            message="Failed to update peronal details."
          />
        )}
        {state.message && (
          <ResponseAlert type="success" message="Personal Details Updated." />
        )}

        <UpdateButton />
      </form>
    </div>
  );
};

export default PersonalInformation;
