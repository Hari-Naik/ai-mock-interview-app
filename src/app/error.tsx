"use client"; // Error boundaries must be Client Components
import { useEffect } from "react";

import Image from "next/image";
import Button from "@/components/button";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error);
  }, [error]);

  return (
    <div className="h-[calc(100vh-80px)] flex flex-col items-center justify-center gap-3">
      <Image
        src={"/assets/svg/not-found.svg"}
        width={200}
        height={200}
        alt="no data found"
      />

      <h2 className="text-lg font-semibold text-[#767676]">{error.message}</h2>

      <Button text="Try again" onClick={reset} />
    </div>
  );
}
