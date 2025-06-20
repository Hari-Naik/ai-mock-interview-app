import { InterviewType } from "@/types";
import { Eye, Newspaper, Sparkles } from "lucide-react";
import TooltipButton from "../tooltip-button";
import { cn } from "@/lib/utils";

interface MockInterviewItemProps {
  interview: InterviewType;
  onMockPage?: boolean;
}

const MockInterviewItem = ({
  interview,
  onMockPage,
}: MockInterviewItemProps) => {
  return (
    <li className="p-4 rounded-md hover:shadow-md shadow-gray-100 border border-gray-200 flex flex-col gap-3 cursor-pointer">
      <h1 className="text-lg  font-medium">{interview.jobRole}</h1>
      <p style={{ whiteSpace: "pre-line" }} className="text-sm text-[#737373]">
        {interview.jobDescription.slice(0, 350)}...
      </p>
      <div className="flex items-center gap-3">
        {interview.techStack.map(skill => (
          <div
            key={skill}
            className="px-3 py-0.5 rounded-full border border-gray-200 text-xs text-[#737373] font-medium hover:border-emerald-400 hover:bg-emerald-50 hover:text-emerald-900 transition duration-250">
            <span>{skill}</span>
          </div>
        ))}
      </div>

      <div
        className={cn(
          "flex items-center",
          onMockPage ? "justify-end" : "justify-between"
        )}>
        <p className="text-[12px] text-muted-foreground truncate whitespace-nowrap">
          {`${new Date(interview?.updatedAt).toLocaleDateString("en-US", {
            dateStyle: "long",
          })} - ${new Date(interview?.updatedAt).toLocaleTimeString("en-US", {
            timeStyle: "short",
          })}`}
        </p>

        <div
          className={cn("items-center gap-2", onMockPage ? "hidden" : "flex")}>
          <TooltipButton
            link={`/interviews/edit/${interview.id}`}
            icon={<Eye size={20} />}
            label="view"
            className="hover:text-sky-500"
          />
          <TooltipButton
            link={`/interviews/feedback/${interview.id}`}
            icon={<Newspaper size={20} />}
            label="feedback"
            className="hover:text-yellow-500"
          />
          <TooltipButton
            link={`/interviews/${interview.id}`}
            icon={<Sparkles size={20} />}
            label="start"
            className="hover:text-sky-500"
          />
        </div>
      </div>
    </li>
  );
};

export default MockInterviewItem;
