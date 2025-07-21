import { cn } from "@/lib/utils";

interface ContainerProps {
  className?: string;
  children: React.ReactNode;
}

const Container = ({ className = "", children }: ContainerProps) => {
  return (
    <div className={cn("container mx-auto px-4 py-8", className)}>
      {children}
    </div>
  );
};

export default Container;
