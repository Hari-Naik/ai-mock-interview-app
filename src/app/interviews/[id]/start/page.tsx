import { Metadata } from "next";

import Alert from "@/components/alert";
import Container from "@/components/container";
import BreadCrumb from "@/components/breadcrumb";
import QuestionsSection from "@/components/questions-section";

import { getInterview } from "@/lib/data";

type Props = {
  params: Promise<{ id: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id } = await params;
  const interview = await getInterview(id);

  return {
    title: `Start ${interview.jobRole} Mock Interview`,
  };
}

const MockInterviewStart = async ({ params }: Props) => {
  const { id } = await params;

  const interview = await getInterview(id);

  return (
    <div className="pb-10">
      <Container className="flex flex-col gap-8">
        <BreadCrumb />

        <Alert
          heading="Important Note"
          description='Press "Record Answer" to begin answering the question.
              Once you finish the interview, you&apos;ll receive feedback
              comparing your responses with the ideal answers.
              '
          variant="primary"
        />

        <QuestionsSection interviewId={id} questions={interview.questions} />
      </Container>
    </div>
  );
};

export default MockInterviewStart;
