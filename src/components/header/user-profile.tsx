import { cn } from "@/lib/utils";
import { LogOut } from "lucide-react";
import { signOut, useSession } from "next-auth/react";
import Image from "next/image";

import { forwardRef } from "react";

interface UserProfileProps {
  isOpen: boolean;
  onClose: () => void;
}
const UserProfile = forwardRef<HTMLDivElement, UserProfileProps>(
  ({ isOpen }, ref) => {
    const { data: session } = useSession();

    const handleLogout = () => {
      signOut();
    };

    return (
      <div
        ref={ref}
        className={cn(
          "absolute top-15 right-15 w-full max-w-[270px] sm:max-w-xs bg-white shadow-sm rounded transition-all duration-300 ease-in-out",
          isOpen
            ? "opacity-100 translate-y-0 visible"
            : "opacity-0 -translate-y-2 invisible"
        )}>
        <div className="flex items-center gap-3 p-4 border-b border-gray-200 dark:border-gray-100">
          {session?.user?.image ? (
            <Image
              src={session?.user?.image as string}
              width={40}
              height={40}
              alt={
                session?.user?.name
                  ? `${session.user.name}'s profile image`
                  : "User profile image"
              }
              className="rounded-full"
            />
          ) : (
            <div className="w-10 h-10 bg-emerald-500 rounded-full flex items-center justify-center text-base text-white font-semibold">
              {session?.user?.email?.charAt(0) || "u"}
            </div>
          )}

          <div className="flex flex-col">
            <span className="text-[13px] font-medium">
              {session?.user.name || "user name"}
            </span>
            <span className="text-[13px]">{session?.user?.email}</span>
          </div>
        </div>

        <button
          onClick={handleLogout}
          className="w-full flex items-center gap-3 p-5 text-gray-400 cursor-pointer hover:bg-gray-100 hover:text-[#212121] transition duration-200">
          <LogOut size={16} />
          <span className="text-[13px] font-semibold">Sign out</span>
        </button>
      </div>
    );
  }
);

UserProfile.displayName = "UserProfile";

export default UserProfile;
