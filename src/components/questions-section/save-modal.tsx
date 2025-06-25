import { cn } from "@/lib/utils";
import { X } from "lucide-react";
import React from "react";

interface SaveModalProps {
  isLoading: boolean;
  onClose: () => void;
  onConfirm: () => void;
}

const SaveModal = ({ isLoading, onClose, onConfirm }: SaveModalProps) => {
  const handleSubmit = (e: React.FocusEvent<HTMLFormElement>) => {
    e.preventDefault();
    onConfirm();
  };

  return (
    <div
      onClick={onClose}
      className={cn(
        "fixed inset-0 z-50 bg-black/80 flex items-center justify-center"
      )}>
      <div
        onClick={e => e.stopPropagation()}
        className="bg-white p-4 rounded-md flex flex-col gap-8">
        <div className="flex items-start justify-between">
          <div>
            <h1 className="text-lg font-semibold">Are you sure?</h1>
            <p className="text-sm text-[#767676]">
              This action cannot be undone you can&apos;t edit or re-answer this
              question again?
            </p>
          </div>
          <button
            type="button"
            disabled={isLoading}
            onClick={onClose}
            className="text-[#212121] opacity-30 hover:opacity-90 transition duration-300 cursor-pointer">
            <X size={20} />
          </button>
        </div>
        <div className="flex items-center justify-end gap-3">
          <button
            onClick={onClose}
            disabled={isLoading}
            type="button"
            className="py-2 px-4 border border-gray-200 rounded-md capitalize text-sm font-medium whitespace-nowrap cursor-pointer">
            cancel
          </button>

          <form onSubmit={handleSubmit}>
            <button
              type="submit"
              className="py-2 px-4 border border-gray-200 bg-emerald-600 hover:bg-emerald-800 rounded-md capitalize text-white text-sm font-medium whitespace-nowrap cursor-pointer transition duration-300">
              Continue
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SaveModal;
