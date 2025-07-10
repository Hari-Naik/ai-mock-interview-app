import Link from "next/link";
import { Metadata } from "next";

import Alert from "@/components/alert";
import Button from "@/components/button";
import Webcam from "@/components/web-cam";
import Container from "@/components/container";
import BreadCrumb from "@/components/breadcrumb";
import MockInterviewItem from "@/components/mock-interviews/mock-interview-item";

import { Sparkles } from "lucide-react";

import { getInterview, getInterviews } from "@/lib/data";

type Props = {
  params: Promise<{ id: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id } = await params;
  const interview = await getInterview(id);

  return {
    title: `Practice ${interview.jobRole} Mock Interview`,
  };
}
export async function generateStaticParams() {
  const interviews = await getInterviews();

  return interviews.map(interview => ({
    id: interview.id,
  }));
}

const MockInterview = async ({ params }: Props) => {
  const { id } = await params;
  const interview = await getInterview(id);

  return (
    <div className="pb-24">
      <Container className="flex flex-col gap-8">
        <div className="flex items-center justify-between">
          <BreadCrumb />
          <Link href={`/interviews/${interview.id}/start`}>
            <Button
              text="Start"
              icon={<Sparkles size={15} className="order-2" />}
              className="flex items-center gap-1"
            />
          </Link>
        </div>

        <MockInterviewItem interview={interview} onMockPage />

        <Alert
          heading="Important Information"
          description="Please enable your webcam and microphone to start the AI-generated
              mock interview. The interview consists of five questions. You’ll
              receive a personalized report based on your responses at the end.
			  "
        />

        <Webcam />
      </Container>
    </div>
  );
};

export default MockInterview;
