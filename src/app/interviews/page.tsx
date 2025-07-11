import Link from "next/link";
import Image from "next/image";

import Heading from "@/components/heading";
import Button from "@/components/button";
import Container from "@/components/container";
import MockInterViews from "@/components/mock-interviews/mock-interviews";

import { Plus } from "lucide-react";

import { getInterviews } from "@/lib/data";

const MockInterviewsPage = async () => {
  const interviews = await getInterviews();

  return (
    <div className="pb-24">
      <Container className="flex flex-col gap-10 h-full">
        <div className="flex items-center justify-between">
          <Heading
            heading="Dashboard"
            subHeading="Create and start your AI mock interview"
          />
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
    </div>
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
