"use client";

import AuthFooter from "@/components/auth/auth-footer";
import AuthHeading from "@/components/auth/auth-heading";
import AuthInput from "@/components/auth/auth-input";
import SubmitButton from "@/components/auth/submit-button";
import { AuthFormData, authSchema } from "@/lib/utils";
import { zodResolver } from "@hookform/resolvers/zod";
import { SubmitHandler, useForm } from "react-hook-form";

const SignUp = () => {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<AuthFormData>({
    resolver: zodResolver(authSchema),
  });

  const onSubmit: SubmitHandler<AuthFormData> = async formData => {
    console.log("formdata", formData);
  };

  return (
    <main className="w-full h-[calc(100vh-80px)] flex items-center justify-center px-4">
      <div className="w-full h-fit max-w-sm bg-whiteshadow-[0px_0px_10px_rgba(0,0,0,0.1)] ring ring-[rgba(0,0,0,0.1)] p-10 rounded flex flex-col gap-8">
        <AuthHeading
          heading="Create your account"
          subHeading="Welcome! Please fill in the details to get started."
        />

        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-6">
          <AuthInput
            register={register}
            type="email"
            name="email"
            label="Email address"
            placeholder="Enter your email address"
            error={errors.email}
          />
          <AuthInput
            register={register}
            type="password"
            name="password"
            label="Password"
            placeholder="Enter your password"
            error={errors.password}
          />

          <SubmitButton text="Signup" />
        </form>

        <AuthFooter />
      </div>
    </main>
  );
};

export default SignUp;
