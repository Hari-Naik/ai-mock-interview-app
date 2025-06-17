"use client";

import { JSX } from "react";
import { cn } from "@/lib/utils";
import Link from "next/link";

interface TooltipButtonProps {
  icon: JSX.Element;
  label: string;
  className?: string;
  link?: string;
}

const TooltipButton = ({
  icon,
  label,
  className,
  link,
}: TooltipButtonProps) => {
  return (
    <div className="relative group flex flex-col items-center">
      {link ? (
        <Link href={link}>
          <Button icon={icon} className={className} />
        </Link>
      ) : (
        <Button icon={icon} className={className} />
      )}

      <div className="hidden group-hover:block absolute -top-10 px-3 py-1 bg-white rounded shadow-md border border-gray-200">
        <span className="capitalize text-sm">{label}</span>
      </div>
    </div>
  );
};

interface ButtonProps {
  label?: string;
  icon: JSX.Element;
  className?: string;
  onClick?: () => void;
}

const Button = ({ icon, className }: ButtonProps) => {
  return (
    <button
      className={cn(
        "p-2 rounded hover:bg-gray-200 transition duration-300 cursor-pointer",
        className
      )}>
      {icon}
    </button>
  );
};

export default TooltipButton;
