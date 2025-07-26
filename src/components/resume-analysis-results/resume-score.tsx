import { cn } from "@/lib/utils";
import React from "react";

interface ResumeScoreProps {
  role: string;
  score: number;
  isRoleSuitable: "Yes" | "No";
}
const ResumeScore = ({ role, score, isRoleSuitable }: ResumeScoreProps) => {
  return (
    <div className="px-6 py-3 bg-linear-to-l from-[#dbeafe] to-[#bedbff] border-l-3 border-[#2b7fff] rounded-md">
      <h3 className="text-xl font-bold text-[#1447e6]">Overall Resume Score</h3>
      <p>Role: {role}</p>

      <div className="w-full h-5 bg-[#fff] rounded-full my-5">
        <div
          style={{ width: `${score}%` }}
          className="bg-[#1a181d] h-5 text-xs font-medium text-[#fff] text-center p-0.5 leading-normal rounded-full">
          {score}%
        </div>
      </div>

      <p className="text-[#1e2939] font-semibold text-center">
        Role Suitable:{" "}
        <span
          className={cn(
            "text-base font-semibold",
            isRoleSuitable === "Yes" ? "text-[#008236]" : " text-[#c10007]"
          )}>
          {isRoleSuitable}
        </span>
      </p>
    </div>
  );
};

export default ResumeScore;
