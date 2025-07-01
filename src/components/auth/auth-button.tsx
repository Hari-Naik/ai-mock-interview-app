import { cn } from "@/lib/utils";
import { LoaderCircle } from "lucide-react";
import React from "react";

interface SubmitButtonProps {
  text: string;
  isPending?: boolean;
}

const AuthButton = ({ text, isPending }: SubmitButtonProps) => {
  return (
    <button
      type="submit"
      disabled={isPending}
      className={cn(
        "px-6 py-[6px] rounded-[6px] bg-[#2F3037] hover:bg-[#3b3c45] transition duration-200 text-white text-sm",
        isPending ? "cursor-not-allowed" : "cursor-pointer"
      )}>
      {isPending ? (
        <LoaderCircle size={20} className="animate-spin mx-auto" />
      ) : (
        text
      )}
    </button>
  );
};

export default AuthButton;
