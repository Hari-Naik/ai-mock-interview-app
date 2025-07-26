import React from "react";

interface ErrorProps {
  error: Error;
  refetch: () => void;
}

const ErrorView = ({ error, refetch }: ErrorProps) => {
  console.error("Error fetching data:", error.message);
  return (
    <div className="h-screen flex flex-col items-center justify-center gap-4">
      <p className="text-2xl font-bold">{"Something went wrong."}</p>
      <button
        onClick={() => refetch()}
        className="mt-4 px-4 py-2 bg-emerald-500 text-white rounded hover:bg-emerald-600 transition cursor-pointer">
        Retry
      </button>
    </div>
  );
};

export default ErrorView;
