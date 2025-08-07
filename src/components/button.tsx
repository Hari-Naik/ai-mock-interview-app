import { JSX } from "react";

import { cn } from "@/lib/utils";

interface ButtonProps {
  text: string;
  className?: string;
  icon?: JSX.Element;
  onClick?: () => void;
}
const Button = ({ text, icon, onClick, className = "" }: ButtonProps) => {
  return (
    <button
      onClick={onClick}
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
