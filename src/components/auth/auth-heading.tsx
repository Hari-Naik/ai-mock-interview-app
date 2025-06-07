import React from "react";

interface AuthHeadingProps {
  heading: string;
  subHeading: string;
}

const AuthHeading = ({ heading, subHeading }: AuthHeadingProps) => {
  return (
    <div className="flex flex-col items-center justify-center gap-1">
      <h1 className="text-base font-bold">{heading}</h1>
      <p className="text-[13px] text-[#747686] text-center">{subHeading}</p>
    </div>
  );
};

export default AuthHeading;
