"use client";

import Logo from "./logo";
import Navigation from "./navigation";
import Profile from "./profile";
import MenuContainer from "./menu";
import UserProfile from "./user-profile";
import { useState } from "react";

const Header = () => {
  const [toggleProfile, setToggleProfile] = useState<boolean>(false);

  const handleToggleProfile = () => {
    setToggleProfile(prev => !prev);
  };

  return (
    <header className="w-full h-[80px] flex items-center justify-between shadow-sm px-4 py-4 md:px-8">
      <div className="flex items-center gap-6 md:gap-8">
        <Logo />
        <nav className="hidden md:flex">
          <Navigation />
        </nav>
      </div>
      <div className="flex items-center gap-6">
        <Profile handleToggleProfile={handleToggleProfile} />
        <MenuContainer />
      </div>

      {toggleProfile && <UserProfile />}
    </header>
  );
};

export default Header;
