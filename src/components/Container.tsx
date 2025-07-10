import { cn } from "@/lib/utils";

interface ContainerProps {
  className?: string;
  children: React.ReactNode;
}

const Container = ({ className = "", children }: ContainerProps) => {
  return (
    <div className={cn("container mx-auto px-4 md:p-8 py-4", className)}>
      {children}
    </div>
  );
};

export default Container;
