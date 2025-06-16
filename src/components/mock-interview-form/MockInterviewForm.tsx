"use client";

import { MockInteviewFormData, mockInteviewFormSchema } from "@/lib/schemas";
import { zodResolver } from "@hookform/resolvers/zod";
import React, { useTransition } from "react";
import { useForm } from "react-hook-form";
import Input from "./Input";

import TextArea from "./TextArea";
import Button from "./Button";
import { generateQuestions } from "@/lib/geminiai";
import { formatAiResponse, getPrompt } from "@/lib/utils";
import { createMockInterview } from "@/actions/interview";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";

const MockInterviewForm = () => {
  const [isPending, startTransition] = useTransition();
  const router = useRouter();

  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(mockInteviewFormSchema),
    defaultValues: {
      jobRole: "",
      jobDescription: "",
      experience: 0,
      techStack: "",
    },
  });

  const onSubmit = async (formData: MockInteviewFormData) => {
    startTransition(async () => {
      const prompt = getPrompt(formData);
      const aiResponse = await generateQuestions(prompt);
      const questions = formatAiResponse(aiResponse!);
      const response = await createMockInterview({
        ...formData,
        questions,
      });

      if (response.success) {
        toast.success(response.message);
      } else {
        toast.error(response.message);
      }
    });

    router.push("/interviews");
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="w-full h-fit px-4 py-8 shadow-md rounded flex flex-col gap-4">
      <div className="flex flex-col gap-1">
        <Input
          register={register}
          type="text"
          name="jobRole"
          label="Job Role / Job Position"
          placeholderText="eg:- Full stack developer"
        />
        {errors && errors.jobRole && (
          <span className="text-xs text-red-500 font-medium">
            {errors?.jobRole.message}
          </span>
        )}
      </div>

      <div className="flex flex-col gap-1">
        <TextArea
          name="jobDescription"
          placeholderText="eg:- Describe your job role or position"
          label="Job Description"
          register={register}
        />
        {errors && errors.jobDescription && (
          <span className="text-xs text-red-500 font-medium">
            {errors?.jobDescription.message}
          </span>
        )}
      </div>

      <div className="flex flex-col gap-1">
        <Input
          register={register}
          type="number"
          name="experience"
          label="Years of experience"
          placeholderText="eg:- 5"
        />
        {errors && errors.experience && (
          <span className="text-xs text-red-500 font-medium">
            {errors?.experience.message}
          </span>
        )}
      </div>

      <div className="flex flex-col gap-1">
        <TextArea
          name="techStack"
          placeholderText="eg:- Next.js, React.js, TypeScript..."
          label="Tech Stack"
          register={register}
        />
        {errors && errors.techStack && (
          <span className="text-xs text-red-500 font-medium">
            {errors?.techStack.message}
          </span>
        )}
      </div>

      <div className="flex gap-3 items-center justify-end">
        <Button text="Reset" type="reset" className="text-[#212121]" />
        <Button
          text="Create"
          isPending={isPending}
          type="submit"
          className="bg-[#212121] text-white"
        />
      </div>
    </form>
  );
};

export default MockInterviewForm;
