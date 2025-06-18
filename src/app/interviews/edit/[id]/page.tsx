import BreadCrumb from "@/components/breadcrumb/BreadCrumb";
import Container from "@/components/Container";
import MockInterviewForm from "@/components/mock-interview-form/MockInterviewForm";
import { getInterview } from "@/lib/data";
import { Trash2 } from "lucide-react";
import React from "react";

const EditMockInterview = async ({ params }: { params: { id: string } }) => {
  const { id } = await params;
  const interview = await getInterview(id);
  return (
    <main>
      <Container className="flex flex-col gap-6">
        <BreadCrumb />
        <div className="flex items-center justify-between">
          <h1 className="text-2xl md:text-3xl text-gray-800 font-semibold font-sans">
            {interview.jobRole}
          </h1>
          <button className="p-2 rounded hover:bg-gray-100 transition duration-300 cursor-pointer">
            <Trash2 size={16} className="text-red-500" />
          </button>
        </div>
        <MockInterviewForm
          initialData={{
            id: interview.id,
            jobRole: interview.jobRole,
            jobDescription: interview.jobDescription,
            experience: interview.experience,
            techStack: interview.techStack.join(", "),
          }}
        />
      </Container>
    </main>
  );
};

export default EditMockInterview;
