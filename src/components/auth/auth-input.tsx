"use client";
import { Eye, EyeOff } from "lucide-react";
import React, { useState } from "react";
import { FieldError, Path, UseFormRegister } from "react-hook-form";

interface IFormValues {
  email: string;
  password: string;
}

interface AuthInputProps {
  type: string;
  label: string;
  placeholder: string;
  name: Path<IFormValues>;
  register: UseFormRegister<IFormValues>;
  error?: FieldError;
}

function getInputType(type: string, showPassword: boolean): string {
  if (type === "password") {
    return showPassword ? "text" : "password";
  }
  return type;
}

const AuthInput = ({
  type,
  label,
  name,
  placeholder,
  register,
  error,
}: AuthInputProps) => {
  const [showPassword, setShowPassword] = useState<boolean>(false);

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const inputType = getInputType(type, showPassword);

  return (
    <div className="flex flex-col gap-2">
      <label htmlFor={type} className="text-[13px] text-[#212126] font-medium">
        {label}
      </label>
      <div className="relative">
        <input
          {...register(name)}
          type={inputType}
          name={name}
          placeholder={placeholder}
          className="w-full px-4 py-1 ring ring-gray-300 rounded focus:shadow-[0px_0px_10px_rgba(0,0,0,0.1)] outline-none text-[13px] text-[#131316]"
        />
        {type === "password" && (
          <button
            type="button"
            aria-label={showPassword ? "Hide password" : "Show password"}
            onClick={toggleShowPassword}
            className="absolute bottom-2 right-2 cursor-pointer">
            {showPassword ? <EyeOff size={13} /> : <Eye size={13} />}
          </button>
        )}
      </div>
      {error && (
        <span className="text-xs text-red-500 font-medium">
          {error.message}
        </span>
      )}
    </div>
  );
};

export default AuthInput;
