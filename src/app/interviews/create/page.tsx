import BreadCrumb from "@/components/breadcrumb";
import Container from "@/components/container";
import MockInterviewForm from "@/components/mock-interview-form";

const CreateMockInterview = () => {
  return (
    <div>
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
