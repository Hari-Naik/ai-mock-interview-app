import React from "react";

import ResumeScore from "./resume-score";
import ResumeAnalysisContent from "./resume-analysis-content";

import { AnalysisResultType } from "@/types";
import { cn } from "@/lib/utils";

interface ResumeAnalysisProps {
  data: AnalysisResultType;
  samplePage?: boolean;
}

const ResumeAnalysis = ({ data, samplePage }: ResumeAnalysisProps) => {
  return (
    <div
      className={cn(
        "flex flex-col gap-3",
        samplePage
          ? "p-6 md:w-[90%] mx-auto mt-20 border border-[#a4f4cf] rounded-md"
          : ""
      )}>
      <h2 className="text-2xl md:text-3xl text-[#1e2939] font-semibold font-sans">
        {samplePage ? "Sample Resume Analysis" : "Resume Analysis"}
      </h2>

      <ResumeScore
        role={data.jobRole}
        score={data.analysisResult.matchScore}
        isRoleSuitable={data.analysisResult.isRoleSuitable ? "Yes" : "No"}
      />

      <div className="grid gap-6 rounded-lg shadow-md border border-[#e5e7eb]">
        <ResumeAnalysisContent
          data={data.analysisResult.strengths}
          heading="1. Strengths"
          className="text-[#008236]"
        />
        <ResumeAnalysisContent
          data={data.analysisResult.weaknesses}
          heading="2. Weeknesses"
          className="text-[#c10007]"
        />
        <ResumeAnalysisContent
          data={data.analysisResult.missingSkills}
          heading="3. Missing Skills"
          className="text-[#c10007]"
        />
        <ResumeAnalysisContent
          data={data.analysisResult.recommendedImprovements}
          heading="4. Recommended Improvements"
          className="text-[#008236]"
        />

        <ResumeAnalysisContent
          data={data.analysisResult.atsFriendliness}
          heading="4. ATS Friendliness"
          className="text-[#008236]"
        />
      </div>
    </div>
  );
};

export default ResumeAnalysis;
