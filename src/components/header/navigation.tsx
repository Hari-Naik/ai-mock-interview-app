import { ChevronDown } from "lucide-react";
import NavLink from "./nav-link";

const Navigation = () => {
  return (
    <div className="flex flex-col md:flex-row md:items-center gap-6 md:gap-8">
      <NavLink href="/interviews" label="Interviews" />

      <div className="hidden md:block group px-3 py-2 md:hover:bg-[#e0d1ff] rounded-md transition duration-200">
        <div className="flex items-center gap-1 cursor-pointer">
          <span className="text-base text-neutral-600">Resume</span>
          <ChevronDown
            size={18}
            className="group-hover:rotate-180  text-neutral-600 transition-transform"
          />
        </div>
        <div className="flex flex-col gap-1 md:hidden md:group-hover:block md:absolute md:top-16 md:px-6 py-3 md:bg-white md:ring md:ring-gray-300 md:shadow-md rounded-xl max-w-[220px] w-full">
          <span>Resume</span>
          <hr className="border border-gray-300 my-1" />
          <div className="flex flex-col gap-2">
            <NavLink href="/resume-analyzer" label="Resume Analyzer" />

            <NavLink href="/resume-builder" label="Resume Builder" />
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-6 md:hidden">
        <NavLink href="/resume-analyzer" label="Resume Analyzer" />

        <NavLink href="/resume-building" label="Resume Builder" />
      </div>
      <NavLink href="/pricing" label="Pricing" />
      <NavLink href="/contact" label="Contact Us" />
    </div>
  );
};

export default Navigation;
