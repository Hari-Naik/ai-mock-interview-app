import BreadCrumb from "@/components/breadcrumb/BreadCrumb";
import Container from "@/components/Container";
import MockInterviewForm from "@/components/MockInterviewForm";

const CreateMockInterview = () => {
  return (
    <main>
      <Container className="flex flex-col gap-4">
        <BreadCrumb />
        <h1 className="text-2xl md:text-3xl text-gray-800 font-semibold font-sans">
          Create a new Mock Interview
        </h1>
        <MockInterviewForm />
      </Container>
    </main>
  );
};

export default CreateMockInterview;
