"use client";

import { useEffect, useRef, useState } from "react";

import Logo from "./logo";
import Menu from "../menu";
import Navigation from "./navigation";
import UserAvatar from "./user-avatar";
import ProfileDropDown from "./profile-drop-down";

const Header = () => {
  const [toggleProfile, setToggleProfile] = useState<boolean>(false);

  const profileRef = useRef<HTMLDivElement>(null);

  const handleToggleProfile = () => {
    setToggleProfile(prev => !prev);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        profileRef.current &&
        !profileRef.current.contains(event.target as Node)
      ) {
        setToggleProfile(false);
      }
    };

    if (toggleProfile) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [toggleProfile]);

  return (
    <header className="w-full h-[80px] flex items-center justify-between shadow-sm px-4 py-4 md:px-8">
      <div className="flex items-center gap-6 md:gap-8">
        <Logo />
        <div className="hidden md:flex">
          <Navigation />
        </div>
      </div>
      <div className="flex items-center gap-6">
        <UserAvatar handleToggleProfile={handleToggleProfile} />
        <Menu />
      </div>

      <ProfileDropDown
        isOpen={toggleProfile}
        onClose={handleToggleProfile}
        ref={profileRef}
      />
    </header>
  );
};

export default Header;
