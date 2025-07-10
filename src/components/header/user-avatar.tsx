import Link from "next/link";

import { useSession } from "next-auth/react";
import Button from "../button";

interface UserAvatarProps {
  handleToggleProfile: () => void;
}

const UserAvatar = ({ handleToggleProfile }: UserAvatarProps) => {
  const { data: session } = useSession();

  if (!session?.user) {
    return (
      <Link href={"/sign-in"}>
        <Button text="Get Started" className="hover:rounded-full" />
      </Link>
    );
  }

  return (
    <button
      onClick={handleToggleProfile}
      className="h-8 w-8 rounded-full bg-emerald-500 text-white uppercase text-sm font-medium cursor-pointer">
      {session?.user.email?.charAt(0)}
    </button>
  );
};

export default UserAvatar;
