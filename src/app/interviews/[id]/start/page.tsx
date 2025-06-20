import BreadCrumb from "@/components/breadcrumb/BreadCrumb";
import Container from "@/components/Container";
import { Lightbulb } from "lucide-react";
import React from "react";

const MockInterviewStart = () => {
  return (
    <main className="pb-10">
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
      </Container>
    </main>
  );
};

export default MockInterviewStart;
