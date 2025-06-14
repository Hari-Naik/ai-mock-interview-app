import { cn } from "@/lib/utils";
import React, { JSX } from "react";

interface ButtonProps {
  text: string;
  className?: string;
  icon?: JSX.Element;
}
const Button = ({ text, icon, className = "" }: ButtonProps) => {
  return (
    <button
      className={cn(
        "h-10 rounded-md px-3 bg-black text-white text-sm font-medium cursor-pointer",
        className
      )}>
      {icon}
      {text}
    </button>
  );
};

export default Button;
