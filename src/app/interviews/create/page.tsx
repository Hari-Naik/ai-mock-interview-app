import BreadCrumb from "@/components/breadcrumb";
import Container from "@/components/container";
import MockInterviewForm from "@/components/mock-interview-form";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Create Mock Interview",
  description:
    "Create AI mock interview based on job role, job description, experience and tech stack.",
};
const CreateMockInterview = () => {
  return (
    <div className="pb-24">
      <Container className="flex flex-col gap-4">
        <BreadCrumb />
        <h1 className="text-2xl md:text-3xl text-gray-800 font-semibold font-sans">
          Create a new Mock Interview
        </h1>
        <MockInterviewForm />
      </Container>
    </div>
  );
};

export default CreateMockInterview;
