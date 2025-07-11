"use client";

import { useTransition } from "react";

import { toast } from "react-toastify";
import { zodResolver } from "@hookform/resolvers/zod";
import { SubmitHandler, useForm } from "react-hook-form";

import { login } from "@/actions/auth";
import { AuthFormData, authSchema } from "@/lib/schemas";

import AuthInput from "./auth-input";
import AuthButton from "./auth-button";

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
        toast.error(errorMessage);
      } else {
        window.location.href = "/";
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

      <AuthButton text="Signin" isPending={isPending} />
    </form>
  );
};

export default SignInForm;
