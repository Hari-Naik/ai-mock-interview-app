import { useSession } from "next-auth/react";
import Link from "next/link";
import Button from "../Button";

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
          {/* <button className="h-8 md:h-10 rounded-md hover:rounded-full px-3 bg-black text-white text-sm font-medium cursor-pointer">
            Get Started
          </button> */}
          <Button text="Get Started" />
        </Link>
      )}
    </div>
  );
};

export default Profile;
