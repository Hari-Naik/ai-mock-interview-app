// "use client";
// import { useRouter } from "next/navigation";
import { InterviewType } from "@/types";
import { Eye, Newspaper, Sparkles } from "lucide-react";
import TooltipButton from "../tooltip-button";

interface MockInterviewItemProps {
  interview: InterviewType;
}

const MockInterviewItem = ({ interview }: MockInterviewItemProps) => {
  return (
    <li className="p-4 rounded-md hover:shadow-md shadow-gray-100 border border-gray-100 flex flex-col gap-3 cursor-pointer">
      <h1 className="text-lg  font-medium">{interview.jobRole}</h1>
      <p className="text-md text-[#737373]">
        {interview.jobDescription.slice(0, 350)}...
      </p>
      <div className="flex items-center gap-3">
        {interview.techStack.map(skill => (
          <div
            key={skill}
            className="px-3 py-0.5 rounded-full border border-gray-200 text-xs text-[#737373] hover:border-emerald-400 hover:bg-emerald-50 hover:text-emerald-900 transition duration-250">
            <span>{skill}</span>
          </div>
        ))}
      </div>

      <div className="flex items-center justify-between">
        <p className="text-[12px] text-muted-foreground truncate whitespace-nowrap">
          {`${new Date(interview?.createdAt).toLocaleDateString("en-US", {
            dateStyle: "long",
          })} - ${new Date(interview?.createdAt).toLocaleTimeString("en-US", {
            timeStyle: "short",
          })}`}
        </p>

        <div className="flex items-center gap-2">
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
