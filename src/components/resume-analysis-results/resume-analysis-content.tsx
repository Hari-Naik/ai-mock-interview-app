import { cn } from "@/lib/utils";
import { Check, X } from "lucide-react";

interface ResumeAnalysisContentProps {
  data: string[];
  heading: string;
  className: string;
}
const ResumeAnalysisContent = ({
  data,
  heading,
  className,
}: ResumeAnalysisContentProps) => {
  return (
    <div className="p-4">
      <h4 className="text-lg font-semibold">{heading}</h4>
      {data.map((text, index) => (
        <p
          key={index}
          className={cn("flex items-center gap-2 text-base mt-2", className)}>
          {className === "text-[#008236]" ? (
            <Check size={20} />
          ) : (
            <X size={20} />
          )}
          {text}
        </p>
      ))}
    </div>
  );
};

export default ResumeAnalysisContent;
