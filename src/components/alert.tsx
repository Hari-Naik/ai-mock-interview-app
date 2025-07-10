import React from "react";
import { Lightbulb } from "lucide-react";
import { cn } from "@/lib/utils";

interface AlertProps {
  heading: string;
  description: string;
  variant?: "default" | "primary";
}

const Alert = ({ heading, description, variant }: AlertProps) => {
  return (
    <div
      className={cn(
        "p-4 rounded-lg flex  gap-3",
        variant === "primary"
          ? "bg-sky-100/50 border border-sky-200"
          : "bg-yellow-100/50 border-y-1 border-y-red-200"
      )}>
      <Lightbulb className="h-10 w-10 md:w-5 md:h-5 md:mt-1 -mt-1.5" />
      <div className="flex flex-col">
        <h1
          className={cn(
            "font-semibold",
            variant === "primary" ? "text-sky-800" : "text-yellow-800"
          )}>
          {heading}
        </h1>
        <p
          className={cn(
            "text-sm mt-1",
            variant === "primary" ? "text-sky-700" : "text-yellow-700"
          )}>
          {description}
        </p>
        <p
          className={cn(
            "text-sm mt-4",
            variant === "primary" ? "text-sky-700" : "text-yellow-700"
          )}>
          <span className="font-medium">Note:</span> Your video is{" "}
          <strong>never recorded</strong>. You can disable your webcam at any
          time.
        </p>
      </div>
    </div>
  );
};

export default Alert;
