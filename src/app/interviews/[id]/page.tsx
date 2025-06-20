import BreadCrumb from "@/components/breadcrumb/BreadCrumb";
import Button from "@/components/Button";
import Container from "@/components/Container";
import MockInterviewItem from "@/components/mock-interviews/mock-interview-item";
import Webcam from "@/components/web-cam";
import { getInterview } from "@/lib/data";
import { Lightbulb, Sparkles } from "lucide-react";
import Link from "next/link";

const MockInterview = async ({ params }: { params: { id: string } }) => {
  const { id } = await params;
  const interview = await getInterview(id);

  return (
    <main className="pb-24">
      <Container className="flex flex-col gap-8">
        <div className="flex items-center justify-between">
          <BreadCrumb />
          <Link href={`/interviews/${interview.id}/start`}>
            <Button
              text="Start"
              icon={<Sparkles size={20} />}
              className="flex items-center gap-1"
            />
          </Link>
        </div>
        <MockInterviewItem interview={interview} onMockPage />

        <div className="bg-yellow-100/50 border-y-1 border-y-red-200 p-4 rounded-lg flex  gap-3">
          <Lightbulb className="h-10 w-10 md:w-5 md:h-5 md:mt-1 -mt-1.5" />
          <div className="flex flex-col">
            <span className="text-yellow-800 font-semibold">
              Important Information
            </span>
            <span className="text-sm text-yellow-700 mt-1">
              Please enable your webcam and microphone to start the AI-generated
              mock interview. The interview consists of five questions. You’ll
              receive a personalized report based on your responses at the end.{" "}
              <br />
              <br />
              <span className="font-medium">Note:</span> Your video is{" "}
              <strong>never recorded</strong>. You can disable your webcam at
              any time.
            </span>
          </div>
        </div>

        <Webcam />
      </Container>
    </main>
  );
};

export default MockInterview;
