import React from "react";

import { cn } from "@/lib/utils";
import { ResumeAnalysisType } from "@/types";
import { ArrowDownToLine } from "lucide-react";
import { generatePDF } from "@/lib/generate-pdf";

type Props = {
  data: ResumeAnalysisType[];
};

const thClass = "text-start text-sm text-gray-500 font-normal p-3";
const tdClass =
  "p-3 border-x border-gray-200 text-base text-[#263238] flex items-center justify-center sm:justify-start";

const ResumeAnalyzerHistoryTable = ({ data }: Props) => {
  const handleDownload = (item: ResumeAnalysisType) => {
    generatePDF(item);
  };
  return (
    <table className="w-full mt-3 border border-gray-300">
      <thead>
        <tr className="grid grid-cols-[1fr_1fr_1fr_2fr] sm:grid-cols-4 bg-gray-200">
          <th className={cn(thClass)}>Date</th>
          <th className={cn(thClass)}>Role</th>
          <th className={cn(thClass)}>Score</th>
          <th className={cn(thClass)}>Download</th>
        </tr>
      </thead>
      <tbody>
        {data.map(item => (
          <tr
            key={item.id}
            className="grid grid-cols-[1fr_1fr_1fr_2fr] sm:grid-cols-4 border-b border-gray-200">
            <td className={cn(tdClass)}>{item.updatedAt.slice(0, 10)}</td>
            <td className={cn(tdClass)}>{item.jobRole}</td>
            <td className={cn(tdClass)}>{item.analysisResult.matchScore}</td>
            <td className={cn(tdClass)}>
              <button
                onClick={() => handleDownload(item)}
                className="flex items-center gap-1 text-emerald-500 border border-emerald-500 px-2 py-1 rounded-md cursor-pointer">
                <ArrowDownToLine strokeWidth={3} size={15} />
                <span className="uppercase text-sm font-semibold">
                  download
                </span>
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default ResumeAnalyzerHistoryTable;
