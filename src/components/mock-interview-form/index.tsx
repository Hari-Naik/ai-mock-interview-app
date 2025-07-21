"use client";

import React, { useTransition } from "react";
import { useRouter } from "next/navigation";

import Input from "./input";
import TextArea from "./text-area";
import FormButton from "./form-button";

import { LoaderCircle } from "lucide-react";

import { toast } from "react-toastify";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { generateAIResults } from "@/lib/gemini-ai";
import { formatAIResponse, getPrompt } from "@/lib/utils";
import { MockInteviewFormData, mockInteviewFormSchema } from "@/lib/schemas";
import { createMockInterview, updateMockInterview } from "@/actions/interview";

interface MockInterviewFormProps {
  initialData?: {
    id: string;
    jobRole: string;
    jobDescription: string;
    experience: number;
    techStack: string;
  };
}

const MockInterviewForm = ({ initialData }: MockInterviewFormProps) => {
  const [isPending, startTransition] = useTransition();
  const router = useRouter();

  const actions = initialData ? "Save Changes" : "Create";

  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(mockInteviewFormSchema),
    defaultValues: {
      jobRole: initialData?.jobRole || "",
      jobDescription: initialData?.jobDescription || "",
      experience: initialData?.experience || 0,
      techStack: initialData?.techStack || "",
    },
  });

  const onSubmit = async (formData: MockInteviewFormData) => {
    startTransition(async () => {
      const prompt = getPrompt(formData);
      const aiResponse = await generateAIResults(prompt);
      const questions = formatAIResponse(aiResponse!);

      let response;
      if (initialData) {
        
        response = await updateMockInterview(initialData.id, {
          ...formData,
          questions,
        });
      } else {
        response = await createMockInterview({
          ...formData,
          questions,
        });
      }

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
          <p className="text-xs text-red-500 font-medium">
            {errors?.jobDescription.message}
          </p>
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
        <FormButton
          type="reset"
          isPending={isPending}
          className="text-[#212121]">
          Reset
        </FormButton>
        <FormButton
          type="submit"
          isPending={isPending}
          className="bg-[#212121] text-white">
          {isPending ? (
            <LoaderCircle size={20} className="animate-spin mx-auto" />
          ) : (
            actions
          )}
        </FormButton>
      </div>
    </form>
  );
};

export default MockInterviewForm;
