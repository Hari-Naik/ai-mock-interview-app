import Image from "next/image";
import React from "react";

const MarqueeImg = ({ img }: { img: string }) => {
  return (
    <div className="relative w-44 h-44 xl:h-52 xl:w-52 mx-12">
      <Image src={img} fill alt="" className="object-contain" />
    </div>
  );
};

export default MarqueeImg;
