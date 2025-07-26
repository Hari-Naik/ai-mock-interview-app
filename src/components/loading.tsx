import { LoaderCircle } from "lucide-react";
import React from "react";

const Loading = () => {
  return (
    <div className="w-full h-full flex items-center justify-center">
      <LoaderCircle
        size={48}
        strokeWidth={3}
        className="text-emerald-500 animate-spin"
      />
    </div>
  );
};

export default Loading;
