import React from "react";

const MockInterviewForm = () => {
  return (
    <form className="w-full h-fit px-4 py-8 shadow-md rounded flex flex-col gap-4">
      <div className="flex flex-col gap-3">
        <label htmlFor="jobRole" className="text-sm text-[#212121] font-medium">
          Job Role / Job Position
        </label>
        <input
          type="text"
          name="jobRole"
          id="jobRole"
          placeholder="eg:- Full stack developer"
          className="ring ring-gray-200 px-3 py-2 rounded-md outline-none focus:ring-2 text-sm text-"
        />
      </div>

      <div className="flex flex-col gap-3">
        <label
          htmlFor="jobDescription"
          className="text-sm text-[#212121] font-medium">
          Job Description
        </label>
        <textarea
          name="jobDescription"
          id="jobDescription"
          placeholder="eg:- Describe your job role or position"
          className="ring ring-gray-200 px-3 py-2 rounded-md outline-none focus:ring-2 text-sm text-"
        />
      </div>

      <div className="flex flex-col gap-3">
        <label
          htmlFor="experinence"
          className="text-sm text-[#212121] font-medium">
          Years of experinence
        </label>
        <input
          type="number"
          name="experinence"
          id="experinence"
          placeholder="eg:- 3"
          className="ring ring-gray-200 px-3 py-2 rounded-md outline-none focus:ring-2 text-sm text-"
        />
      </div>

      <div className="flex flex-col gap-3">
        <label
          htmlFor="techStacks"
          className="text-sm text-[#212121] font-medium">
          Tech Stacks
        </label>
        <textarea
          name="techStacks"
          id="techStacks"
          placeholder="eg:- Next.js, React.js, TypeScript"
          className="ring ring-gray-200 px-3 py-2 rounded-md outline-none focus:ring-2 text-sm text-"
        />
      </div>

      <div className="flex gap-3 items-center justify-end">
        <button
          type="reset"
          className="px-3 py-1.5 rounded ring ring-gray-200 text-sm text-[#212121] font-medium cursor-pointer">
          Reset
        </button>
        <button
          type="submit"
          className="px-3 py-1.5 rounded bg-[#212121] ring ring-gray-200 text-sm text-white font-medium cursor-pointer">
          Create
        </button>
      </div>
    </form>
  );
};

export default MockInterviewForm;
