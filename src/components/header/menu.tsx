"use client";
import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import Navigation from "./navigation";

const MenuContainer = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <button className="md:hidden cursor-pointer" onClick={handleToggleMenu}>
        <Menu />
      </button>

      <div
        className={cn(
          "md:hidden fixed inset-0 bg-black/50 transition-opacity",
          isOpen ? "opacity-100 visible" : "opacity-0 invisible"
        )}
      />

      <div
        // className={`md:hidden fixed top-0 right-0 h-full w-full max-w-[270px] bg-white shadow-lg transform transition-transform duration-300 ease-in-out p-4 ${
        //   isOpen ? "translate-x-0" : "translate-x-full"
        // 		  }`}

        className={cn(
          "md:hidden fixed top-0 right-0 h-full w-full max-w-[270px] bg-white p-4 shadow-lg transform transition-transform duration-300 ease-in-out",
          isOpen ? "translate-x-0" : "translate-x-full"
        )}>
        <div className="flex flex-col h-full">
          <button
            className="text-gray-500 hover:text-gray-700 transition-colors ml-auto cursor-pointer"
            onClick={handleToggleMenu}>
            <X />
          </button>
          <Navigation />
        </div>
      </div>
    </div>
  );
};

export default MenuContainer;
