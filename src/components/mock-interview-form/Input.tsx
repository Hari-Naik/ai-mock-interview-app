import React from "react";
import { MockInteviewFormData } from "@/lib/schemas";

import { Path, UseFormRegister } from "react-hook-form";

interface InputProps {
  type: string;
  label: string;
  placeholderText: string;
  name: Path<MockInteviewFormData>;
  register: UseFormRegister<MockInteviewFormData>;
}

const Input = ({
  type,
  name,
  label,
  placeholderText,
  register,
}: InputProps) => {
  return (
    <div className="flex flex-col gap-3">
      <label htmlFor={name} className="text-sm text-[#212121] font-medium">
        {label}
      </label>
      <input
        {...register(name)}
        type={type}
        name={name}
        id={name}
        placeholder={placeholderText}
        className="ring ring-gray-200 px-3 py-2 rounded-md outline-none focus:ring-2 text-sm text-"
      />
    </div>
  );
};

export default Input;
