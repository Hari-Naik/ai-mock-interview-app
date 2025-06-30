"use client";
import React, { useState } from "react";
import MenuButton from "./menu-buttoon";
import MenuModal from "./menu-modal";

const Menu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <MenuButton onClick={handleToggleMenu} />
      <MenuModal isOpen={isOpen} handleToggleMenu={handleToggleMenu} />
    </div>
  );
};

export default Menu;
