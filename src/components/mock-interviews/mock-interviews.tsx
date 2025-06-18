import { InterviewType } from "@/types";
import MockInterviewItem from "./mock-interview-item";

interface MockInterviewsProps {
  interviews: InterviewType[];
}

const MockInterViews = ({ interviews }: MockInterviewsProps) => {
  return (
    <ul className="grid grid-cols-1 md:grid-cols-3 gap-3">
      {interviews.map(interview => (
        <MockInterviewItem key={interview.id} interview={interview} />
      ))}
    </ul>
  );
};

export default MockInterViews;
