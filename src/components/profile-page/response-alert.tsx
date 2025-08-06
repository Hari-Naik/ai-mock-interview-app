import { cn } from "@/lib/utils";
import { CircleAlert, CircleCheck } from "lucide-react";
import React from "react";

interface ResponseAlertProps {
  type: "success" | "error";
  message: string;
}

const ResponseAlert = ({ type, message }: ResponseAlertProps) => {
  const color = type === "error" ? "text-red-700" : "text-green-700";
  const bgColor = type === "error" ? "bg-red-100" : "bg-blue-100";
  return (
    <div
      className={cn(
        "flex items-center gap-2 text-xs font-medium rounded-md px-3 py-2.5",
        color,
        bgColor
      )}>
      {type === "error" ? <CircleCheck /> : <CircleAlert />}
      <span className="capitalize">{message}</span>
    </div>
  );
};

export default ResponseAlert;
