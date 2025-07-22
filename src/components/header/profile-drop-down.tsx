import { forwardRef } from "react";
import Link from "next/link";

import { LayoutDashboard, Power, User } from "lucide-react";

import { cn } from "@/lib/utils";
import { signOut } from "next-auth/react";

interface ProfileDropDownProps {
  isOpen: boolean;
  onClose: () => void;
}
const ProfileDropDown = forwardRef<HTMLDivElement, ProfileDropDownProps>(
  ({ isOpen }, ref) => {
    const handleLogout = () => {
      signOut();
    };

    const baseClass =
      "flex items-center gap-2 capitalize text-sm font-medium hover:bg-gray-200 rounded-md px-3 py-2 cursor-pointer transition duration-200";

    return (
      <div
        ref={ref}
        className={cn(
          "absolute top-15 right-15 w-[180px] bg-white shadow-lg border border-gray-200 rounded transition-all duration-300 ease-in-out p-3",
          isOpen
            ? "opacity-100 translate-y-0 visible"
            : "opacity-0 -translate-y-2 invisible"
        )}>
        <div className="flex flex-col gap-1">
          <Link
            href={"/dashboard"}
            className={cn(baseClass, "text-emerald-500")}>
            <LayoutDashboard size={15} />
            <span>dashboard</span>
          </Link>
          <hr className="text-gray-300" />
          <Link href={"/profile"} className={cn(baseClass, "text-emerald-500")}>
            <User size={15} />
            <span>profile</span>
          </Link>
          <hr className="text-gray-300" />
          <button
            onClick={handleLogout}
            className={cn(baseClass, "text-gray-500 hover:text-gray-700")}>
            <Power size={15} />
            <span>sign out</span>
          </button>
        </div>
      </div>
    );
  }
);

ProfileDropDown.displayName = "ProfileDropDown";

export default ProfileDropDown;
