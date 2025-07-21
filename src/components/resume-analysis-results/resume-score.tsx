import { cn } from "@/lib/utils";
import React from "react";

interface ResumeScoreProps {
  role: string;
  score: number;
  isRoleSuitable: "Yes" | "No";
}
const ResumeScore = ({ role, score, isRoleSuitable }: ResumeScoreProps) => {
  return (
    <div className="px-6 py-3 bg-linear-to-l from-blue-100 to-blue-200 border-l-3 border-blue-500 rounded-md">
      <h3 className="text-xl font-bold text-blue-700">Overall Resume Score</h3>
      <p>Role: {role}</p>

      <div className="w-full h-5 bg-white rounded-full my-5">
        <div
          style={{ width: `${score}%` }}
          className="bg-[#1a181d] h-5 text-xs font-medium text-white text-center p-0.5 leading-normal rounded-full">
          {score}%
        </div>
      </div>

      <p className="text-gray-800  font-semibold text-center">
        Role Suitable:{" "}
        <span
          className={cn(
            "text-base font-semibold",
            isRoleSuitable === "Yes" ? "text-green-700" : " text-red-700"
          )}>
          {isRoleSuitable}
        </span>
      </p>
    </div>
  );
};

export default ResumeScore;
