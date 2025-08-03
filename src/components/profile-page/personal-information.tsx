import { cn } from "@/lib/utils";
import React from "react";

const PersonalInformation = () => {
  const labelBaseClass = "text-base font-medium text-gray-600";

  const inputBaseClass =
    "px-3 py-2 rounded outline-none border border-gray-300 focus:ring focus:ring-gray-200 transition-all duration-200 text-sm  text-gray-700";

  return (
    <div className="flex-1 p-3 bg-white rounded-md shadow-lg border border-gray-200 pb-10">
      <h2 className="text-xl sm:text-2xl font-semibold text-gray-600 mb-10">
        Personal Information
      </h2>

      <form action="" className="flex flex-col gap-4">
        {/* profile pic */}
        <div className="h-48 w-48">
          <p className="h-full bg-fuchsia-700 flex items-center justify-center text-6xl text-white">
            H
          </p>
        </div>
        <input
          type="file"
          className="w-full sm:w-1/2 text-black text-sm bg-gray-100 file:cursor-pointer cursor-pointer file:px-4 file:py-2 file:mr-2
		  file:bg-gray-800 file:hover:bg-gray-700 file:text-white rounded border border-gray-100"
          accept="image/png, image/jpeg"
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-5">
          <div className="flex flex-col gap-2">
            <label htmlFor="firstName" className={cn(labelBaseClass)}>
              First Name
            </label>
            <input type="text" className={cn(inputBaseClass)} />
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="lastName" className={cn(labelBaseClass)}>
              Last Name
            </label>
            <input type="text" className={cn(inputBaseClass)} />
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="email" className={cn(labelBaseClass)}>
              Email
            </label>
            <input type="email" className={cn(inputBaseClass)} />
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="language" className={cn(labelBaseClass)}>
              Language
            </label>
            <input type="text" className={cn(inputBaseClass)} />
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="currentPosition" className={cn(labelBaseClass)}>
              Current Position
            </label>
            <input type="text" className={cn(inputBaseClass)} />
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="company" className={cn(labelBaseClass)}>
              Company
            </label>
            <input type="text" className={cn(inputBaseClass)} />
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="skills" className={cn(labelBaseClass)}>
              Skills
            </label>
            <input type="text" id="skills" className={cn(inputBaseClass)} />
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="experience" className={cn(labelBaseClass)}>
              Experience
            </label>
            <input
              type="number"
              id="experience"
              min={0}
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
              placeholder="Description"
              className={cn(inputBaseClass, "resize-none h-40")}></textarea>
          </div>
        </div>
        <button className="w-30 px-3 py-2 rounded bg-emerald-500 text-white text-sm font-medium uppercase mt-5 cursor-pointer">
          update
        </button>
      </form>
    </div>
  );
};

export default PersonalInformation;
