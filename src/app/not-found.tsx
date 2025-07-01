import Button from "@/components/button";
import Image from "next/image";
import Link from "next/link";

const NotFound = () => {
  return (
    <div className="w-full h-[calc(100vh-80px)] flex items-center justify-center">
      <div className="flex flex-col items-center gap-3">
        <Image
          src={"/assets/svg/not-found.svg"}
          width={300}
          height={300}
          alt="not found page image"
        />
        <h2 className="text-lg font-semibold text-[#767676]">Page Not Found</h2>

        <Link href="/">
          <Button
            text="Back to Home Page"
            className="bg-transparent text-emerald-500 hover:underline"
          />
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
