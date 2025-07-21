import React, { Dispatch, SetStateAction } from "react";

import ResumePreview from "./resume-preview";
import ResumeAnalysis from "./resume-analysis";

import { AnalysisResultType } from "@/types";

interface Props {
  data: AnalysisResultType;
  setAnalysisResults: Dispatch<SetStateAction<AnalysisResultType | undefined>>;
}

const ResumeAnalysisResults = ({ data, setAnalysisResults }: Props) => {
  const handleClick = () => {
    setAnalysisResults(undefined);
  };

  return (
    <div className="flex flex-col gap-6">
      <button
        onClick={handleClick}
        className="border border-emerald-500 ml-auto px-6 py-2 rounded-md text-emerald-500 uppercase text-sm font-medium cursor-pointer">
        Back
      </button>
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 md:gap-3">
        <ResumePreview pdfUrl={data.pdfUrl} />

        <ResumeAnalysis data={data} />
      </div>
    </div>
  );
};

export default ResumeAnalysisResults;
