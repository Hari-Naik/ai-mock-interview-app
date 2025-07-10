"use client";
import { useEffect, useRef, useState } from "react";

import SaveModal from "./save-modal";
import { toast } from "react-toastify";
import TooltipButton from "../tooltip-button";
import { CircleStop, Loader, Mic, RefreshCw, Save } from "lucide-react";

import { getPromptForFeedback } from "@/lib/utils";
import { generateAIResults } from "@/lib/gemini-ai";
import { createFeedback } from "@/actions/feedback";

interface AiResult {
  rating: number;
  feedback: string;
}

interface RecordAnswerProps {
  interviewId: string;
  question: string;
  idealAnswer: string;
}

const RecordAnswer = ({
  interviewId,
  question,
  idealAnswer,
}: RecordAnswerProps) => {
  const [isRecording, setIsRecording] = useState(false);
  const [userAnswer, setUserAnswer] = useState<string>("");
  const [aiResult, setAiResult] = useState<AiResult | undefined>();
  const [isAiGenerating, setIsAiGenerating] = useState<boolean>(false);
  const [showSaveModal, setShowSaveModal] = useState<boolean>(false);

  const [isLoading, setIsLoading] = useState<boolean>(false);

  const recognitionRef = useRef<SpeechRecognition | null>(null);

  useEffect(() => {
    const SpeechRecognition = window.webkitSpeechRecognition;

    if (!SpeechRecognition) {
      toast.error("Web Speech API is not available in this browser.");
      return;
    }

    const recognition = new SpeechRecognition();
    recognition.continuous = true;
    recognition.interimResults = true;
    recognition.lang = "en-US";

    recognitionRef.current = recognition;
  }, []);

  const toggleSaveModal = () => {
    setShowSaveModal(prev => !prev);
  };

  const formatResponse = (response: string): AiResult => {
    let cleanText = response.trim();
    cleanText = cleanText.replace("```json", "");
    cleanText = cleanText.replace("```", "");

    const controlCharsRegex = new RegExp(`[\\u0000-\\u001F]+`, "g");
    cleanText = cleanText.replace(controlCharsRegex, " ");

    try {
      return JSON.parse(cleanText);
    } catch (error) {
      throw new Error("Invalid JSON format:" + (error as Error)?.message);
    }
  };

  const recordNewAnswer = () => {
    setUserAnswer("");
    stopSpeechToText();
    startSpeechToText();
  };

  const recordUserAnswer = async () => {
    if (isRecording) {
      stopSpeechToText();

      if (userAnswer.length < 30) {
        toast.error("Your answer should be more than 30 characters.");
        return;
      }
      setIsAiGenerating(true);

      const prompt = getPromptForFeedback(question, idealAnswer, userAnswer);
      try {
        const aiResponse = await generateAIResults(prompt);
        const aiResult = formatResponse(aiResponse!);
        setAiResult(aiResult);
      } catch (error) {
        console.log(error);
        toast.error("Unable to generate feedback. Please try again.");
      } finally {
        setIsAiGenerating(false);
      }
    } else {
      startSpeechToText();
    }
  };

  const saveUserAnswer = async () => {
    setIsLoading(true);

    if (!aiResult) return;

    const response = await createFeedback({
      interviewId: interviewId,
      question: question,
      correctAnswer: idealAnswer,
      userAnswer: userAnswer,
      feedback: aiResult.feedback,
      rating: aiResult.rating,
    });

    if (response.success) {
      toast.success(response.message);
    } else {
      toast.error(response.message);
    }

    setUserAnswer("");
    setIsLoading(false);
    setShowSaveModal(false);
  };

  const startSpeechToText = () => {
    setIsRecording(true);
    if (recognitionRef.current) {
      recognitionRef.current.start();

      recognitionRef.current.onresult = (event: SpeechRecognitionEvent) => {
        let transcript = "";
        for (const result of event?.results) {
          transcript += result[0].transcript;
        }

        setUserAnswer(transcript);
      };
      recognitionRef.current.onend = () => {
        setIsRecording(false);
      };
    }
  };

  const stopSpeechToText = () => {
    if (recognitionRef.current) {
      recognitionRef.current.stop();
      setIsRecording(false);
    }
  };

  return (
    <>
      <div className="flex items-center gap-6 w-fit mx-auto">
        <TooltipButton
          onClick={recordUserAnswer}
          label={isRecording ? "Stop Recording" : "Start Recording"}
          icon={isRecording ? <CircleStop size={20} /> : <Mic size={20} />}
        />
        <TooltipButton
          onClick={recordNewAnswer}
          label="Record Again"
          icon={<RefreshCw size={20} />}
        />
        <TooltipButton
          label="Save Result"
          icon={
            isAiGenerating ? (
              <Loader size={20} className="animate-spin" />
            ) : (
              <Save size={20} />
            )
          }
          onClick={toggleSaveModal}
          disabled={!aiResult}
        />
      </div>
      <div className="w-full mt-4 p-4 border rounded-md bg-gray-50">
        <h2 className="text-lg font-semibold">Your Answer:</h2>
        <p className="text-sm mt-2 text-gray-700 whitespace-normal">
          {"Start recording to see your answer here"}
        </p>

        {userAnswer && (
          <p className="text-sm text-gray-500 mt-2">
            <strong>Current Speech:</strong>
            {userAnswer}
          </p>
        )}
      </div>
      {showSaveModal && (
        <SaveModal
          isLoading={isLoading}
          onClose={toggleSaveModal}
          onConfirm={saveUserAnswer}
        />
      )}
    </>
  );
};

export default RecordAnswer;
