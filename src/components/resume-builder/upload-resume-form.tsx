import { cn } from "@/lib/utils";
import React from "react";

const UploadResumeForm = () => {
  return (
    <div className="mt-5">
      <form action="" className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        <div className="flex flex-col gap-2">
          <label htmlFor="fileInput" className="text-sm font-semibold">
            Upload Resume <span className="text-red-500 text-xl">*</span>
          </label>
          <input
            type="file"
            accept="application/pdf"
            id="fileInput"
            name="file"
            className="hidden"
          />
          <div className="flex items-center gap-2">
            <label
              htmlFor="fileInput"
              className={cn(
                "flex-1 border border-gray-300 rounded-md px-3 py-3",
                false ? "text-emerald-500" : "text-gray-500"
              )}>
              pdf file
            </label>
            <label
              htmlFor="fileInput"
              className="uppercase text-purple-600 font-semibold text-sm text-nowrap shadow-md shadow-gray-900/10 hover:shadow-lg hover:shadow-gray-900/20 p-3 border rounded-md cursor-pointer">
              {false ? "change resume" : "upload"}
            </label>
          </div>
        </div>

        <div className="flex flex-col gap-2 h-fit">
          <label htmlFor="jobRole" className="text-sm font-semibold">
            Enter Desired Role <span className="text-red-500 text-xl">*</span>
          </label>
          <input
            type="text"
            id="jobRole"
            name="jobRole"
            placeholder="Enter Your Desired Role"
            className="flex-1 border border-gray-300 rounded-md px-3 py-3 placeholder:text-gray-500 outline-none"
          />
        </div>
      </form>
    </div>
  );
};

export default UploadResumeForm;
