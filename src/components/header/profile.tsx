import Link from "next/link";
import React from "react";

const Profile = () => {
  const user = false;

  if (user) {
    return (
      <button className="h-8 w-8 rounded-full bg-emerald-500 text-white text-sm font-medium">
        H
      </button>
    );
  }

  return (
    <Link href={"/sign-in"}>
      <button className="h-8 md:h-10 rounded-md hover:rounded-full px-3 bg-black text-white text-sm font-medium cursor-pointer">
        Get Started
      </button>
    </Link>
  );
};

export default Profile;
