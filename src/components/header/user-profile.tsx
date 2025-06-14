import { logout } from "@/actions/auth";
import { LogOut } from "lucide-react";
import { useSession } from "next-auth/react";
import Image from "next/image";
const UserProfile = () => {
  const { data: session } = useSession();

  const handleLogout = () => {
    logout();
  };

  return (
    <div className="absolute top-15 right-15 w-full max-w-[270px] sm:max-w-xs bg-white shadow-sm rounded">
      <div className="flex items-center gap-3 p-4 border-b border-gray-200">
        {session?.user?.image ? (
          <Image
            src={session?.user?.image as string}
            width={40}
            height={40}
            alt="user profile"
            className="rounded-full"
          />
        ) : (
          <div className="w-10 h-10 bg-emerald-500 rounded-full flex items-center justify-center text-base text-white font-semibold">
            {session?.user?.email?.charAt(0)}
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
};

export default UserProfile;
