"use client";

import AuthInput from "@/components/auth/auth-input";
import SubmitButton from "@/components/auth/submit-button";

import { SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "react-toastify";

import { login } from "@/actions/auth";
import { AuthFormData, authSchema } from "@/lib/utils";
import { useTransition } from "react";

const SignInForm = () => {
  const [isPending, startTransition] = useTransition();
  const {
    handleSubmit,
    register,
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
      const errorMessage = await login(formData);
      if (errorMessage) {
        console.log("signin error");
        toast.error(errorMessage);
        return;
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

      <SubmitButton text="Signin" isLoading={isPending} />
    </form>
  );
};

export default SignInForm;
