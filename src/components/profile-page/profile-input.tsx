import { cn } from "@/lib/utils";
import React from "react";

interface ProfileInputProps {
  type: string;
  id: string;
  name: string;
  defaultValue?: string;
  label: string;
}

const ProfileInput = ({
  type = "text",
  id,
  name,
  defaultValue = "",
  label,
}: ProfileInputProps) => {
  const labelBaseClass = "text-base font-medium text-gray-600";

  const inputBaseClass =
    "px-3 py-2 rounded outline-none border border-gray-300 focus:ring focus:ring-gray-200 transition-all duration-200 text-sm  text-gray-700";

  return (
    <div className="flex flex-col gap-2">
      <label htmlFor={id} className={cn(labelBaseClass)}>
        {label}
      </label>
      <input
        type={type}
        name={name}
        id={id}
        defaultValue={defaultValue}
        className={cn(inputBaseClass)}
      />
    </div>
  );
};

export default ProfileInput;
