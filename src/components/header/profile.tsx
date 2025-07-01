import { useSession } from "next-auth/react";
import Link from "next/link";
import Button from "../button";

interface ProfileProps {
  handleToggleProfile: () => void;
}

const Profile = ({ handleToggleProfile }: ProfileProps) => {
  const { data: session } = useSession();

  return (
    <div className="relative">
      {session?.user ? (
        <>
          <button
            onClick={handleToggleProfile}
            className="h-8 w-8 rounded-full bg-emerald-500 text-white uppercase text-sm font-medium cursor-pointer">
            {session?.user.email?.charAt(0)}
          </button>
        </>
      ) : (
        <Link href={"/sign-in"}>
          <Button text="Get Started" className="hover:rounded-full" />
        </Link>
      )}
    </div>
  );
};

export default Profile;
