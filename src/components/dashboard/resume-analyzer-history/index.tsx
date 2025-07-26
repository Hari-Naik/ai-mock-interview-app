import Link from "next/link";

import Button from "@/components/button";
import Loading from "@/components/loading";
import ErrorView from "@/components/error";
import ResumeAnalyzerHistoryTable from "./table";

import { ResumeAnalysisType } from "@/types";
import { useQuery } from "@tanstack/react-query";

const fetchResumeAnalysis = async (): Promise<ResumeAnalysisType[]> => {
  const res = await fetch("/api/resume-analysis");
  const result = await res.json();
  if (!res.ok || result.success === false) {
    throw new Error("Failed to fetch resume analysis data.");
  }
  return result.data;
};

const ResumeAnalyzerHistory = () => {
  const { data, isLoading, isError, error, refetch } = useQuery<
    ResumeAnalysisType[]
  >({
    queryKey: ["resume-analysis"],
    queryFn: fetchResumeAnalysis,
  });

  if (isLoading) {
    return (
      <div className="h-[calc(100vh-80px)]">
        <Loading />
      </div>
    );
  }

  if (isError) {
    return <ErrorView error={error} refetch={refetch} />;
  }

  return (
    <>
      <div className="flex items-center justify-between">
        <h1 className="text-2xl text-[#616161] font-semibold">
          Resume Analyzer History
        </h1>
        <Link href="/resume-analyzer">
          <Button
            text="Analyze Your Resume"
            className="bg-emerald-500 uppercase"
          />
        </Link>
      </div>

      {data?.length ? (
        <ResumeAnalyzerHistoryTable data={data} />
      ) : (
        <div className="mt-2">
          <p className="text-base text-center text-[#616161] font-semibold">
            No History Found
          </p>
        </div>
      )}
    </>
  );
};

export default ResumeAnalyzerHistory;
