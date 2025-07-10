import { Metadata } from "next";

import Heading from "@/components/heading";
import Feedback from "@/components/feedback";
import Container from "@/components/container";
import BreadCrumb from "@/components/breadcrumb";
import MockInterviewItem from "@/components/mock-interviews/mock-interview-item";

import { getFeedback, getInterview } from "@/lib/data";

type Props = {
  params: Promise<{ id: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id } = await params;
  const interview = await getInterview(id);

  return {
    title: `Feedback | ${interview.jobRole}`,
  };
}

const FeedbackPage = async ({ params }: Props) => {
  const { id } = await params;

  const interview = await getInterview(id);
  const feedbacks = await getFeedback(id);

  const rating = feedbacks.reduce((acc, cur) => acc + cur.rating, 0);
  const overAllRating = (rating / feedbacks.length).toFixed(1);

  return (
    <div className="pb-24">
      <Container className="flex flex-col gap-8">
        <BreadCrumb />
        <Heading
          heading="Congratulations!"
          subHeading=" Your personalized feedback is now available. Dive in to see your
            strengths, areas for improvement, and tips to help you ace your next
            interview."
        />
        <p className="text-base text-[#767676]">
          Your overall interview ratings :{" "}
          <span className="text-emerald-500 font-semibold text-xl">
            {overAllRating} / 10
          </span>
        </p>
        <MockInterviewItem interview={interview} onMockPage />
        <Feedback feedbacks={feedbacks} />
      </Container>
    </div>
  );
};

export default FeedbackPage;
