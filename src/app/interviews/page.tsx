import Container from "@/components/Container";
import Button from "@/components/Button";
import { Plus } from "lucide-react";
import Link from "next/link";

const MockInterviews = () => {
  return (
    <main className="w-full pb-24">
      <Container>
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl md:text-3xl text-gray-800 font-semibold font-sans">
              Dashboard
            </h1>
            <p className="text-sm text-[#737373]">
              Create and start your AI mock interview
            </p>
          </div>
          <Link href={"/interviews/create"}>
            <Button
              text="Add New"
              icon={<Plus />}
              className="flex items-center gap-1"
            />
          </Link>
        </div>
      </Container>
    </main>
  );
};

export default MockInterviews;
