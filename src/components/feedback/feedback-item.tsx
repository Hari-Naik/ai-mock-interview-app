"use client";

import { JSX } from "react";
import { cn } from "@/lib/utils";

import { FeedbackType } from "@/types";

import { CircleCheck, Star } from "lucide-react";

interface FeedbackItemProps {
  feedback: FeedbackType;

  isActive: boolean;
  setActiveFeedback: (id: string) => void;
}

const FeedbackItem = ({
  feedback,
  isActive,
  setActiveFeedback,
}: FeedbackItemProps) => {
  const handleClickFeedback = () => {
    if (isActive) {
      setActiveFeedback("");
    } else {
      setActiveFeedback(feedback.id);
    }
  };

  return (
    <li className="bg-white border border-gray-200 shadow-md rounded-lg">
      <button
        onClick={handleClickFeedback}
        className={cn(
          "w-full p-5 text-center text-base rounded-t-lg transition-colors hover:no-underline cursor-pointer",
          isActive
            ? "bg-gradient-to-r from-purple-50 to-blue-50"
            : "hover:bg-gray-50"
        )}>
        <span>{feedback.question}</span>
      </button>

      <div
        className={cn(
          "transition-all duration-300 ease-in-out overflow-hidden",
          isActive ? "max-h-200 opacity-100" : " max-h-0 opacity-0"
        )}>
        <div className="px-5 pt-3 pb-5 flex flex-col gap-3">
          <div className="text-lg font-semibold to-gray-700">
            <Star className="inline mr-2 text-yellow-400" />
            Rating: {feedback.rating}
          </div>
          <FeedbackContent
            className="bg-green-50"
            icon={<CircleCheck className="text-green-600" />}
            title="Expected Answer"
            content={feedback.correctAnswer}
          />
          <FeedbackContent
            className="bg-yellow-50"
            icon={<CircleCheck className="text-yellow-600" />}
            title="Your Answer"
            content={feedback.userAnswer}
          />
          <FeedbackContent
            className="bg-red-50"
            icon={<CircleCheck className="text-red-600" />}
            title="Feedback"
            content={feedback.feedback}
          />
        </div>
      </div>
    </li>
  );
};

const FeedbackContent = ({
  icon,
  title,
  content,
  className,
}: {
  icon: JSX.Element;
  title: string;
  content: string;
  className?: string;
}) => {
  return (
    <div className={cn("p-4 rounded-lg shadow-md", className)}>
      <div className="flex items-center gap-2">
        {icon}
        <span className="text-lg font-semibold">{title}</span>
      </div>
      <span className="text-sm font-medium">{content}</span>
    </div>
  );
};

export default FeedbackItem;
