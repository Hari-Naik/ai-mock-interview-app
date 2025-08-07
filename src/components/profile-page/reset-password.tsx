import React, { startTransition, useActionState } from "react";

import UpdateButton from "./update-btn";
import { Path, SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { ResetPasswordFormData, resetPasswordFormSchema } from "@/lib/schemas";

import { FieldError, UseFormRegister } from "react-hook-form";
import { cn } from "@/lib/utils";
import { updateUser } from "@/actions/user";
import { initialState } from "./personal-information";
import ResponseAlert from "./response-alert";

interface IFormValues {
  currentPassword: string;
  newPassword: string;
  confirmPassword: string;
}

const ResetPassword = () => {
  const [state, formAction, pending] = useActionState(updateUser, initialState);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ResetPasswordFormData>({
    resolver: zodResolver(resetPasswordFormSchema),
    defaultValues: {
      currentPassword: "",
      newPassword: "",
      confirmPassword: "",
    },
  });

  const onSubmit: SubmitHandler<ResetPasswordFormData> = formData => {
    const newFormData = new FormData();
    newFormData.append("currentPassword", formData.currentPassword);
    newFormData.append("newPassword", formData.newPassword);
    newFormData.append("dataType", "password");

    startTransition(() => {
      formAction(newFormData);
    });
  };
  console.log(state);
  return (
    <div className="flex-1 h-fit bg-white rounded-md shadow-lg border border-gray-200 p-3 pb-5">
      <h2 className="text-xl sm:text-2xl font-semibold text-gray-600 mb-10">
        Reset Password
      </h2>

      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="space-y-3">
          <Input
            id="current-password"
            name="currentPassword"
            label="Current Password"
            register={register}
            error={errors?.currentPassword}
          />
          <Input
            register={register}
            id="new-password"
            name="newPassword"
            label="New Password"
            error={errors?.newPassword}
          />
          <Input
            register={register}
            id="confirm-password"
            name="confirmPassword"
            label="Confirm Password"
            error={errors?.confirmPassword}
          />
        </div>

        {state.error && <ResponseAlert type="error" message={state.error} />}
        {state.message && (
          <ResponseAlert type="success" message="Password updated." />
        )}

        <UpdateButton pending={pending} />
      </form>
    </div>
  );
};

interface InputProps {
  id: string;
  name: Path<IFormValues>;
  label: string;
  register: UseFormRegister<IFormValues>;
  error?: FieldError;
}
const Input = ({ id, name, label, register, error }: InputProps) => {
  const labelBaseClass = "text-base font-medium text-gray-600";

  const inputBaseClass =
    "px-3 py-2 rounded outline-none border border-gray-300 focus:ring focus:ring-gray-200 transition-all duration-200 text-sm  text-gray-700";

  return (
    <div className="flex flex-col gap-2">
      <label htmlFor={id} className={cn(labelBaseClass)}>
        {label}
      </label>
      <input
        {...register(name)}
        id={id}
        type="password"
        name={name}
        className={cn(inputBaseClass, error ? "border border-red-500" : "")}
      />
      {error?.message !== "Password is required." && (
        <span className="text-xs text-red-500 font-medium">
          {error?.message}
        </span>
      )}
    </div>
  );
};

export default ResetPassword;
