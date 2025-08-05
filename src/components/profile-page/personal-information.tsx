import React, { useActionState, useEffect } from "react";
import Image from "next/image";

import { cn } from "@/lib/utils";
import { CircleAlert, CircleCheck, LoaderCircle } from "lucide-react";

import { useUser } from "@/hooks/useUser";
import { updateUser, UserActionState } from "@/actions/user";

const initialState: UserActionState = {
  message: "",
  error: "",
};

const PersonalInformation = () => {
  const [state, formAction, isPending] = useActionState(
    updateUser,
    initialState
  );

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
          <div className="flex flex-col gap-2">
            <label htmlFor="firstName" className={cn(labelBaseClass)}>
              First Name
            </label>
            <input
              type="text"
              name="firstName"
              id="firstName"
              defaultValue={user?.firstName}
              className={cn(inputBaseClass)}
            />
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="lastName" className={cn(labelBaseClass)}>
              Last Name
            </label>
            <input
              type="text"
              name="lastName"
              id="lastName"
              defaultValue={user?.lastName}
              className={cn(inputBaseClass)}
            />
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="email" className={cn(labelBaseClass)}>
              Email
            </label>
            <input
              type="email"
              disabled
              className={cn(inputBaseClass, "cursor-not-allowed")}
              defaultValue={user?.email}
            />
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="language" className={cn(labelBaseClass)}>
              Language
            </label>
            <input
              type="text"
              name="language"
              id="language"
              defaultValue={user?.language}
              className={cn(inputBaseClass)}
            />
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="currentPosition" className={cn(labelBaseClass)}>
              Current Position
            </label>
            <input
              type="text"
              name="currentPosition"
              id="currentPosition"
              defaultValue={user?.currentPosition}
              className={cn(inputBaseClass)}
            />
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="company" className={cn(labelBaseClass)}>
              Company
            </label>
            <input
              type="text"
              name="company"
              id="company"
              defaultValue={user?.company}
              className={cn(inputBaseClass)}
            />
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="skills" className={cn(labelBaseClass)}>
              Skills
            </label>
            <input
              type="text"
              name="skills"
              id="skills"
              defaultValue={user?.skills?.join(",")}
              className={cn(inputBaseClass)}
            />
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="experience" className={cn(labelBaseClass)}>
              Experience
            </label>
            <input
              type="number"
              name="experience"
              id="experience"
              min={0}
              defaultValue={user?.experience}
              className={cn(inputBaseClass)}
            />
          </div>
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

        {state.message && (
          <div className="flex items-center gap-2 text-xs text-green-700 font-medium bg-blue-100 rounded-md px-3 py-2">
            <CircleCheck />
            <span className="capitalize">Profile details updated.</span>
          </div>
        )}
        {state.error && (
          <div className="flex items-center gap-2 text-xs text-red-700 font-medium bg-red-100 rounded-md px-3 py-2">
            <CircleAlert />
            <span className="capitaliz">
              Failed to update personal details.
            </span>
          </div>
        )}

        <button
          disabled={isPending}
          className={cn(
            "w-30 px-3 py-2 rounded bg-emerald-500 text-white text-sm font-medium uppercase mt-5 cursor-pointer disabled:cursor-default disabled:opacity-80 flex items-center justify-center gap-2"
          )}>
          {isPending && <LoaderCircle size={20} className="animate-spin" />}{" "}
          update
        </button>
      </form>
    </div>
  );
};

export default PersonalInformation;
