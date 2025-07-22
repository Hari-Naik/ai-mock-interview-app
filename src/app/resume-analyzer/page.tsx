"use client";

import { useState } from "react";

import Container from "@/components/container";
import ResumeAnalyzerForm from "@/components/resume-analyzer-form";
import ResumeAnalysisResults from "@/components/resume-analysis-results";
import ResumeAnalysis from "@/components/resume-analysis-results/resume-analysis";

import { AnalysisResultType } from "@/types";
import { dummyData } from "@/assets/dummy-data";

const ResumeAnalyzer = () => {
  const [analysisResults, setAnalysisResults] = useState<
    AnalysisResultType | undefined
  >();
  return (
    <div className="pb-24 md:px-10 pt-10 ">
      <Container className="bg-white rounded-lg shadow-[0_8px_24px_rgba(0,0,0,0.1)]">
        {analysisResults ? (
          <ResumeAnalysisResults
            data={analysisResults}
            setAnalysisResults={setAnalysisResults}
          />
        ) : (
          <>
            <ResumeAnalyzerForm setAnalysisResults={setAnalysisResults} />
            <ResumeAnalysis data={dummyData} samplePage={true} />
          </>
        )}
      </Container>
    </div>
  );
};

export default ResumeAnalyzer;
