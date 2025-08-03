import Container from "@/components/container";
import Heading from "@/components/heading";
import Steps from "@/components/resume-builder/steps";
import UploadResumeForm from "@/components/resume-builder/upload-resume-form";
import React from "react";

const Page = () => {
  return (
    <div className="min-h-screen py-10">
      <Container className="bg-white shadow-lg rounded-md">
        <Heading
          heading="Resume Builder"
          subHeading="Create an ATS-friendly resume instantly with our AI-powered resume builder. Tailor your resume to the role with a single click."
          className="text-center"
        />

        <Steps />
        <UploadResumeForm />
      </Container>
    </div>
  );
};

export default Page;
