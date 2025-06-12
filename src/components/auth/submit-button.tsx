import { cn } from "@/lib/utils";
import { LoaderCircle } from "lucide-react";
import React from "react";

interface SubmitButtonProps {
  text: string;
  isLoading?: boolean;
}

const SubmitButton = ({ text, isLoading }: SubmitButtonProps) => {
  return (
    <button
      type="submit"
      aria-disabled={isLoading}
      className={cn(
        "py-[6px] rounded-[6px] bg-[#2F3037] hover:bg-[#3b3c45] transition duration-200 text-white text-sm",
        isLoading ? "cursor-default" : "cursor-pointer"
      )}>
      {isLoading ? (
        <LoaderCircle size={20} className="animate-spin mx-auto" />
      ) : (
        text
      )}
    </button>
  );
};

export default SubmitButton;
