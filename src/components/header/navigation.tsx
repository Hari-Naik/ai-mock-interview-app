// import { ChevronDown } from "lucide-react";
// import NavLink from "./nav-link";

// const Navigation = () => {
//   return (
//     <div className="flex flex-col md:flex-row md:items-center gap-6 md:gap-8">
//       <NavLink href="/interviews" label="Interviews" />

//       <div className="hidden md:block group px-3 py-2 md:hover:bg-[#e0d1ff] rounded-md transition duration-200">
//         <div className="flex items-center gap-1 cursor-pointer">
//           <span className="text-base text-neutral-600">Resume</span>
//           <ChevronDown
//             size={18}
//             className="group-hover:rotate-180  text-neutral-600 transition-transform"
//           />
//         </div>
//         <div className="flex flex-col gap-1 md:hidden md:group-hover:block md:absolute md:top-16 md:px-6 py-3 md:bg-white md:ring md:ring-gray-300 md:shadow-md rounded-xl max-w-[220px] w-full">
//           <span>Resume</span>
//           <hr className="border border-gray-300 my-1" />
//           <div className="flex flex-col gap-2">
//             <NavLink href="/resume-analyzer" label="Resume Analyzer" />

//             <NavLink href="/resume-builder" label="Resume Builder" />
//           </div>
//         </div>
//       </div>

//       <div className="flex flex-col gap-6 md:hidden">
//         <NavLink href="/resume-analyzer" label="Resume Analyzer" />

//         <NavLink href="/resume-building" label="Resume Builder" />
//       </div>
//       <NavLink href="/pricing" label="Pricing" />
//       <NavLink href="/contact" label="Contact Us" />
//     </div>
//   );
// };

// export default Navigation;

import { useState } from "react";
import NavLink from "./nav-link";
import { ChevronDown } from "lucide-react";

const Navigation = () => {
  const [isResumeMenuOpen, setIsResumeMenuOpen] = useState(false);

  const toggleResumeMenu = () => setIsResumeMenuOpen(prev => !prev);

  return (
    <nav className="flex flex-col md:flex-row md:items-center gap-6 md:gap-8">
      <NavLink href="/interviews" label="Interviews" />

      {/* Resume Dropdown - Desktop & Tablet */}
      <div
        className="relative hidden md:block"
        onMouseEnter={() => setIsResumeMenuOpen(true)}
        onMouseLeave={() => setIsResumeMenuOpen(false)}>
        <button
          onClick={toggleResumeMenu}
          className="flex items-center gap-1 px-3 py-2 hover:bg-[#e0d1ff] rounded-md transition duration-200">
          <span className="text-base text-neutral-600">Resume</span>
          <ChevronDown
            size={18}
            className={`text-neutral-600 transition-transform ${
              isResumeMenuOpen ? "rotate-180" : ""
            }`}
          />
        </button>

        {isResumeMenuOpen && (
          <div className="absolute top-12 left-0 px-6 py-3 bg-white ring-1 ring-gray-300 shadow-md rounded-xl w-[220px]">
            <span className="font-medium">Resume</span>
            <hr className="border border-gray-300 my-2" />
            <div className="flex flex-col gap-2">
              <NavLink href="/resume-analyzer" label="Resume Analyzer" />
              <NavLink href="/resume-builder" label="Resume Builder" />
            </div>
          </div>
        )}
      </div>

      {/* Resume Links - Mobile (no dropdown) */}
      <div className="flex flex-col gap-6 md:hidden">
        <NavLink href="/resume-analyzer" label="Resume Analyzer" />
        <NavLink href="/resume-builder" label="Resume Builder" />
      </div>

      <NavLink href="/pricing" label="Pricing" />
      <NavLink href="/contact" label="Contact Us" />
    </nav>
  );
};

export default Navigation;
