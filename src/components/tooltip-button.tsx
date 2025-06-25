"use client";

import { JSX } from "react";
import { cn } from "@/lib/utils";
import Link from "next/link";

interface TooltipButtonProps {
  icon: JSX.Element;
  label: string;
  className?: string;
  link?: string;
  onClick?: () => void;
  disabled?: boolean;
}

const TooltipButton = ({
  icon,
  label,
  className,
  link,
  onClick,
  disabled,
}: TooltipButtonProps) => {
  return (
    <div className="relative group flex flex-col items-center w-fit">
      {link ? (
        <Link href={link}>
          <Button icon={icon} className={className} />
        </Link>
      ) : (
        <Button
          icon={icon}
          className={className}
          onClick={onClick}
          disabled={disabled}
        />
      )}

      <div className="opacity-0 group-hover:opacity-100 group-hover:translate-y-[-4px] transition-all duration-300 absolute -top-8 z-10 px-3 py-1 bg-white rounded shadow-md border border-gray-200 whitespace-nowrap">
        <p className="capitalize text-sm">{label}</p>
      </div>
    </div>
  );
};

interface ButtonProps {
  label?: string;
  icon: JSX.Element;
  className?: string;
  onClick?: () => void;
  disabled?: boolean;
}

const Button = ({ icon, className, onClick, disabled }: ButtonProps) => {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={cn(
        "p-2 rounded hover:bg-gray-100 transition duration-300 text-center cursor-pointer",
        className,
        disabled ? "cursor-not-allowed opacity-45" : "cursor-pointer"
      )}>
      {icon}
    </button>
  );
};

export default TooltipButton;
