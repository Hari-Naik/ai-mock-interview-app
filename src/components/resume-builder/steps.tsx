import { cn } from "@/lib/utils";
import { ChevronRight } from "lucide-react";
import React from "react";

interface StepsItemProps {
  title: string;
  index: number;
  isActive?: boolean;
}

const StepsItem = ({ title, index, isActive }: StepsItemProps) => {
  return (
    <div className="flex items-center space-x-2">
      <div
        className={cn(
          "w-8 h-8 rounded-full font-medium flex items-center justify-center",
          isActive ? "bg-emerald-500 text-white" : "bg-gray-300 text-gray-400"
        )}>
        {index}
      </div>
      <p
        className={cn(
          "text-sm font-medium capitalize",
          isActive ? "text-emerald-500" : "text-gray-400"
        )}>
        {title}
      </p>
    </div>
  );
};

const Steps = () => {
  return (
    <div className="w-fit mx-auto flex items-center space-x-2 mt-10">
      <StepsItem title="upload resume" index={1} isActive />
      <ChevronRight size={18} strokeWidth={3} className="text-gray-400/70" />

      <StepsItem title="edit resume" index={2} />
      <ChevronRight size={18} strokeWidth={3} className="text-gray-400/70" />

      <StepsItem title="download resume" index={3} />
    </div>
  );
};

export default Steps;
