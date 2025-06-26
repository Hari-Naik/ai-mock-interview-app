import React from "react";

interface HeadingProps {
  heading: string;
  subHeading?: string;
}

const Heading = ({ heading, subHeading }: HeadingProps) => {
  return (
    <div>
      <h1 className="text-2xl md:text-3xl text-gray-800 font-semibold font-sans">
        {heading}
      </h1>
      {subHeading && <p className="text-sm text-[#737373]">{subHeading}</p>}
    </div>
  );
};

export default Heading;
