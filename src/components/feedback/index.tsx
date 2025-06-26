"use client";

import { FeedbackType } from "@/types";
import FeedbackItem from "./feedback-item";
import { useState } from "react";

interface FeedbackProps {
  feedbacks: FeedbackType[];
}

const Feedback = ({ feedbacks }: FeedbackProps) => {
  const [activeFeedback, setActiveFeedback] = useState<string>("");

  return (
    <div className="flex flex-col gap-8">
      <h1 className="text-2xl md:text-3xl text-gray-800 font-semibold font-sans">
        Interview Feedback
      </h1>

      <ul className="flex flex-col gap-4">
        {feedbacks.map(feedback => (
          <FeedbackItem
            key={feedback.id}
            feedback={feedback}
            isActive={activeFeedback === feedback.id}
            setActiveFeedback={setActiveFeedback}
          />
        ))}
      </ul>
    </div>
  );
};

export default Feedback;
