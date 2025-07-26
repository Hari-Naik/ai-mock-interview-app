import Button from "@/components/button";
import Image from "next/image";
import Link from "next/link";

const NotFound = () => {
  return (
    <div className="w-full h-[calc(100vh-80px)] flex items-center justify-center">
      <div className="flex flex-col items-center justify-center">
        <Image
          src={"/assets/svg/not-found.svg"}
          width={300}
          height={300}
          alt="not found page image"
        />
        <h3 className="text-2xl font-bold mb-4 mt-4">404 - Page Not Found</h3>
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
