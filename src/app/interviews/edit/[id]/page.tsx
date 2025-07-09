import BreadCrumb from "@/components/breadcrumb";
import Container from "@/components/container";
import DeleteButton from "@/components/delete-button";
import MockInterviewForm from "@/components/mock-interview-form";
import { getInterview } from "@/lib/data";
import { Metadata } from "next";

type Props = {
  params: Promise<{ id: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id } = await params;
  const interview = await getInterview(id);

  return {
    title: `Edit Mock Interview | ${interview.jobRole}`,
  };
}

const EditMockInterview = async ({ params }: Props) => {
  const { id } = await params;
  const interview = await getInterview(id);
  return (
    <div className="pb-24">
      <Container className="flex flex-col gap-6">
        <BreadCrumb />
        <div className="flex items-center justify-between">
          <h1 className="text-2xl md:text-3xl text-gray-800 font-semibold font-sans">
            {interview.jobRole}
          </h1>
          <DeleteButton id={interview.id} />
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
    </div>
  );
};

export default EditMockInterview;
