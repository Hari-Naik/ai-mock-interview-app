import { cn } from "@/lib/utils";
import { LoaderCircle } from "lucide-react";
import React from "react";

interface ButtonProps {
  type: "submit" | "reset" | "button";
  text: string;
  className?: string;
  isPending?: boolean;
}

const Button = ({ type, text, className, isPending }: ButtonProps) => {
  return (
    <button
      type={type}
      aria-disabled={isPending}
      className={cn(
        "px-3 py-1.5 rounded ring ring-gray-200 text-sm font-medium ",
        className,
        isPending ? "cursor-default" : "cursor-pointer"
      )}>
      {isPending ? (
        <LoaderCircle size={20} className="animate-spin mx-auto" />
      ) : (
        text
      )}
    </button>
  );
};

export default Button;
