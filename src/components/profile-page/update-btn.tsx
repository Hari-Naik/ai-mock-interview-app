import { cn } from "@/lib/utils";
import { LoaderCircle } from "lucide-react";
import React from "react";

interface UpdateButtonProps {
  pending: boolean;
}

const UpdateButton = ({ pending }: UpdateButtonProps) => {
  return (
    <button
      disabled={pending}
      className={cn(
        "w-30 px-3 py-2 rounded bg-emerald-500 text-white text-sm font-medium uppercase mt-5 cursor-pointer disabled:cursor-default disabled:opacity-80 flex items-center justify-center gap-2"
      )}>
      {pending && <LoaderCircle size={20} className="animate-spin" />} update
    </button>
  );
};

export default UpdateButton;
