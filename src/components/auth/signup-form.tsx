"use client";

import { useTransition } from "react";

import { toast } from "react-toastify";
import { zodResolver } from "@hookform/resolvers/zod";
import { SubmitHandler, useForm } from "react-hook-form";

import { signUp } from "@/actions/auth";
import { AuthFormData, authSchema } from "@/lib/schemas";

import AuthInput from "./auth-input";
import AuthButton from "./auth-button";

const SignUpForm = () => {
  const [isPending, startTransition] = useTransition();

  const {
    handleSubmit,
    register,
    reset,
    formState: { errors },
  } = useForm<AuthFormData>({
    resolver: zodResolver(authSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit: SubmitHandler<AuthFormData> = async formData => {
    startTransition(async () => {
      try {
        //   setIsPending(true);
        const response = await signUp(formData);
        if (!response.success) {
          toast.error(response.message);
          return;
        }

        reset();
        toast.success(response.message);
      } catch (error) {
        if (error instanceof Error) {
          toast.error(error?.message);
        }
      }
    });
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-6">
      <AuthInput
        register={register}
        error={errors.email}
        type="email"
        name="email"
        label="Email address"
        placeholder="Enter your email address"
      />
      <AuthInput
        register={register}
        error={errors.password}
        type="password"
        name="password"
        label="Password"
        placeholder="Enter your password"
      />

      <AuthButton text="Signup" isPending={isPending} />
    </form>
  );
};

export default SignUpForm;
