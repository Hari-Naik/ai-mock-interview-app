import React from "react";

interface ResumePreviewProps {
  pdfUrl: string;
}

const ResumePreview = ({ pdfUrl }: ResumePreviewProps) => {
  return (
    <div className="flex flex-col gap-3">
      <h1 className="text-2xl md:text-3xl text-gray-800 font-semibold font-sans">
        Resume Preview
      </h1>
      <iframe
        src={pdfUrl}
        width="100%"
        height="800px"
        loading="lazy"
        className="rounded-lg shadow-md border border-gray-200"></iframe>
    </div>
  );
};

export default ResumePreview;
