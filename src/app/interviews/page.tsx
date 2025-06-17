import Container from "@/components/Container";
import Button from "@/components/Button";
import { Plus } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
// import Interview from "@/models/interview";
import { fetchInterviews } from "@/lib/data";
import MockInterViews from "@/components/mock-interviews/mock-interviews";

const MockInterviewsPage = async () => {
  const interviews = await fetchInterviews();

  return (
    <main className="h-screen pb-24">
      <Container className="flex flex-col gap-6 h-full">
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
        {interviews.length > 0 ? (
          <MockInterViews interviews={interviews} />
        ) : (
          <NoDataView />
        )}
      </Container>
    </main>
  );
};

const NoDataView = () => {
  return (
    <div className="h-full flex flex-col items-center justify-center gap-3">
      <Image
        src={"/assets/svg/not-found.svg"}
        width={200}
        height={200}
        alt="no data found"
      />

      <h2 className="text-lg font-semibold text-[#767676]">No Data Found</h2>

      <p className="w-full md:w-96 text-center text-sm text-neutral-400">
        There is no available data to show. Please add some new mock interviews
      </p>

      <Link href={"/interviews/create"}>
        <Button
          text="Add New"
          icon={<Plus />}
          className="flex items-center gap-1"
        />
      </Link>
    </div>
  );
};

export default MockInterviewsPage;
