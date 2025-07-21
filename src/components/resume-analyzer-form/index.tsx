"use client";

import { analyzeResume } from "@/actions/resume-analyzer";
import {
  ResumeAnalyzerFormdata,
  resumeAnalyzerFormSchema,
} from "@/lib/schemas";
import { cn } from "@/lib/utils";
import { zodResolver } from "@hookform/resolvers/zod";
import { LoaderCircle } from "lucide-react";
import { Dispatch, SetStateAction, useState, useTransition } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { toast } from "react-toastify";
import Heading from "../heading";
import { AnalysisResultType } from "@/types";

interface ResumeAnalyzerFormProps {
  setAnalysisResults: Dispatch<SetStateAction<AnalysisResultType | undefined>>;
}

const ResumeAnalyzerForm = ({
  setAnalysisResults,
}: ResumeAnalyzerFormProps) => {
  const [file, setFile] = useState<File | undefined>();
  const [isPending, startTransition] = useTransition();

  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm({
    resolver: zodResolver(resumeAnalyzerFormSchema),
  });

  const onSubmit: SubmitHandler<ResumeAnalyzerFormdata> = async formData => {
    startTransition(async () => {
      const response = await analyzeResume(formData);
      if (response.error) {
        toast.error(response.error);
      } else {
        // set results
        setAnalysisResults(response.data);
      }
    });
  };

  const handleChangeFile = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files?.[0];
    setFile(selectedFile);
    if (selectedFile) {
      setValue("file", selectedFile);
    }
  };

  return (
    <>
      <Heading
        heading="Resume Analyzer"
        subHeading="Analyze your resume based on your role, company, and the job description."
      />

      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-5 my-6">
          <div className="flex flex-col gap-2">
            <label htmlFor="fileInput" className="text-base font-semibold">
              Resume <span className="text-red-500 text-xl">*</span>
            </label>
            <input
              {...register("file")}
              type="file"
              accept="application/pdf"
              id="fileInput"
              name="file"
              onChange={handleChangeFile}
              className="hidden"
            />
            <div className="flex items-center gap-2">
              <label
                htmlFor="fileInput"
                className={cn(
                  "flex-1 border border-gray-300 rounded-md px-3 py-3",
                  file ? "text-emerald-500" : "text-gray-500"
                )}>
                {file?.name || "Upload pdf"}
              </label>
              <label
                htmlFor="fileInput"
                className="uppercase text-purple-600 font-semibold text-sm shadow-md shadow-gray-900/10 hover:shadow-lg hover:shadow-gray-900/20 p-3 border rounded-md cursor-pointer">
                {file !== undefined ? "change resume" : "upload"}
              </label>
            </div>
            {errors.file && (
              <span className="text-xs text-red-500 font-medium">
                {errors.file.message as string}
              </span>
            )}
          </div>

          <div className="flex flex-col gap-2 h-fit">
            <label htmlFor="jobRole" className="text-base font-semibold">
              Enter Your Desired Role{" "}
              <span className="text-red-500 text-xl">*</span>
            </label>
            <input
              {...register("jobRole")}
              type="text"
              id="jobRole"
              name="jobRole"
              placeholder="Enter Your Desired Role"
              className="flex-1 border border-gray-300 rounded-md px-3 py-3 placeholder:text-gray-500 outline-none"
            />
            {errors.jobRole && (
              <span className="text-xs text-red-500 font-medium">
                {errors.jobRole.message}
              </span>
            )}
          </div>

          <div className="flex flex-col gap-2">
            <label htmlFor="jobDescription" className="text-base font-semibold">
              Job Description
              <span className="text-red-500 text-xl">*</span>
            </label>
            <textarea
              {...register("jobDescription")}
              id="jobDescription"
              name="jobDescription"
              placeholder="Enter Job Description."
              className="flex-1 border border-gray-300 rounded-md px-3 py-3 placeholder:text-gray-500 outline-none"
            />
            {errors.jobDescription && (
              <span className="text-xs text-red-500 font-medium">
                {errors.jobDescription.message}
              </span>
            )}
          </div>
        </div>
        <button
          type="submit"
          disabled={isPending}
          className="ml-auto uppercase px-6 py-2 rounded-md bg-emerald-500 text-base text-white cursor-pointer disabled:cursor-default flex items-center disabled:opacity-50">
          {isPending ? (
            <>
              <LoaderCircle size={15} className="animate-spin mx-auto" />
              Analyzing...
            </>
          ) : (
            "Analyze"
          )}
        </button>
      </form>
    </>
  );
};

export default ResumeAnalyzerForm;
