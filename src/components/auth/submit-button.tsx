import React from "react";

interface SubmitButtonProps {
  text: string;
}

const SubmitButton = ({ text }: SubmitButtonProps) => {
  return (
    <button
      type="submit"
      className="py-[6px] rounded-[6px] bg-[#2F3037] hover:bg-[#3b3c45] transition duration-200 text-white text-sm cursor-pointer">
      {text}
    </button>
  );
};

export default SubmitButton;
