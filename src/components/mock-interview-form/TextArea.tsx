import { MockInteviewFormData } from "@/lib/schemas";
import { Path, UseFormRegister } from "react-hook-form";

interface TextAreaProps {
  label: string;
  placeholderText: string;
  name: Path<MockInteviewFormData>;
  register: UseFormRegister<MockInteviewFormData>;
}
const TextArea = ({
  label,
  name,
  placeholderText,
  register,
}: TextAreaProps) => {
  return (
    <div className="flex flex-col gap-3">
      <label htmlFor={name} className="text-sm text-[#212121] font-medium">
        {label}
      </label>
      <textarea
        {...register(name)}
        name={name}
        id={name}
        placeholder={placeholderText}
        className="ring ring-gray-200 px-3 py-2 rounded-md outline-none focus:ring-2 text-sm text-"
      />
    </div>
  );
};

export default TextArea;
