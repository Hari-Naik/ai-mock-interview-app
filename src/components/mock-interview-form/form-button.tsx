import { cn } from "@/lib/utils";

interface ButtonProps {
  type: "submit" | "reset" | "button";
  children: React.ReactNode;
  className?: string;
  isPending?: boolean;
}

const FormButton = ({ type, children, className, isPending }: ButtonProps) => {
  return (
    <button
      type={type}
      disabled={isPending}
      className={cn(
        "px-3 py-1.5 rounded ring ring-gray-200 text-sm font-medium ",
        className,
        isPending ? "cursor-default" : "cursor-pointer"
      )}>
      {children}
    </button>
  );
};

export default FormButton;
