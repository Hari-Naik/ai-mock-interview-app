import Link from "next/link";
import React, { JSX } from "react";

const getPathName = (path: string): string => {
  switch (path) {
    case "interviews":
      return "Mock Interviews";
    case "resume-analyzer":
      return "Resume Analyzer";

    default:
      return path;
  }
};

interface BreadCrumbItemProps {
  text: string;
  link: string;
  icon?: JSX.Element;
}

const BreadCrumbItem = ({ text, link, icon }: BreadCrumbItemProps) => {
  if (!link) {
    return (
      <button className="flex items-center gap-1 text-sm text-[#212121] capitalize">
        {icon}
        {text}
      </button>
    );
  }

  return (
    <Link href={link}>
      <button className="flex items-center gap-1 text-sm text-[#737373] hover:text-emerald-500 capitalize cursor-pointer">
        {icon}
        {getPathName(text)}
      </button>
    </Link>
  );
};

export default BreadCrumbItem;
