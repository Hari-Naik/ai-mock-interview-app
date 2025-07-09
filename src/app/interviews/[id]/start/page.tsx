import BreadCrumb from "@/components/breadcrumb";
import Container from "@/components/container";
import QuestionsSection from "@/components/questions-section";

import { getInterview } from "@/lib/data";
import { Lightbulb } from "lucide-react";
import { Metadata } from "next";
import React from "react";

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
        <div className="bg-sky-100/50 p-4 rounded-lg flex  gap-3 border border-sky-200">
          <Lightbulb className="h-10 w-10 md:w-5 md:h-5 md:mt-1 -mt-1.5" />
          <div className="flex flex-col">
            <span className="text-sky-800 font-semibold">Important Note</span>
            <span className="text-sm text-sky-700 mt-1">
              Press &quot;Record Answer&quot; to begin answering the question.
              Once you finish the interview, you&apos;ll receive feedback
              comparing your responses with the ideal answers.
              <br />
              <br />
              <span className="font-medium">Note:</span> Your video is{" "}
              <strong>never recorded</strong>. You can disable your webcam at
              any time.
            </span>
          </div>
        </div>

        <QuestionsSection interviewId={id} questions={interview.questions} />
      </Container>
    </div>
  );
};

export default MockInterviewStart;
