"use client";

import { cn } from "@/lib/utils";
import { Question } from "@/types";
import React, { useState } from "react";
import TooltipButton from "../tooltip-button";
import { Volume2, VolumeX } from "lucide-react";
import Webcam from "../web-cam";
import RecordAnswer from "./record-answer";

interface QuestionsSectionProps {
  interviewId: string;
  questions: Question[];
}
const QuestionsSection = ({
  questions,
  interviewId,
}: QuestionsSectionProps) => {
  const [activeTab, setActiveTab] = useState<string>(questions[0].id);
  const [isSpeaking, setIsSpeaking] = useState<boolean>(false);

  const question = questions.find(q => q.id === activeTab);

  let synth: SpeechSynthesis;
  if (window !== undefined) {
    synth = window.speechSynthesis;
  }

  const handleClickTab = (id: string) => {
    return () => {
      setActiveTab(id);
    };
  };

  const startSpeech = () => {
    const utterThis = new SpeechSynthesisUtterance(question?.question);
    synth.speak(utterThis);
    setIsSpeaking(synth.speaking);
    utterThis.onend = () => {
      setIsSpeaking(false);
    };
  };

  const stopSpeech = () => {
    synth.cancel();
    setIsSpeaking(synth.speaking);
  };

  return (
    <div className="p-4 border border-gray-100 rounded flex flex-col gap-4">
      <div className="flex flex-col gap-10">
        <div className="flex items-center flex-wrap gap-6">
          {questions.map((question: Question, index) => (
            <button
              key={question.id}
              onClick={handleClickTab(question.id)}
              className={cn(
                "text-sm text-[#767676] font-medium cursor-pointer",
                activeTab === question.id &&
                  "bg-emerald-300 px-2 py-1 rounded text-[#212121] shadow-md"
              )}>
              Question #{index + 1}
            </button>
          ))}
        </div>
        <div className="w-fit text-base text-[#737373]">
          <p>{question?.question}</p>
          <div className="w-full flex items-center justify-end mt-4">
            <TooltipButton
              label={isSpeaking ? "Stop" : "Start"}
              icon={isSpeaking ? <VolumeX size={20} /> : <Volume2 size={20} />}
              onClick={isSpeaking ? stopSpeech : startSpeech}
            />
          </div>
        </div>
      </div>
      <Webcam />
      <RecordAnswer
        interviewId={interviewId}
        question={question?.question || ""}
        idealAnswer={question?.answer || ""}
      />
    </div>
  );
};

export default QuestionsSection;
