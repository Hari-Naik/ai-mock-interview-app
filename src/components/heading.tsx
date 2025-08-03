import React from "react";

interface HeadingProps {
  heading: string;
  subHeading?: string;
  className?: string;
}

const Heading = ({ heading, subHeading, className }: HeadingProps) => {
  return (
    <div className={className}>
      <h1 className="text-2xl md:text-3xl text-gray-800 font-semibold font-sans">
        {heading}
      </h1>
      {subHeading && <p className="text-sm text-[#737373]">{subHeading}</p>}
    </div>
  );
};

export default Heading;
