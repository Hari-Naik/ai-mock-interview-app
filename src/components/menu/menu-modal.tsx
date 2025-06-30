import React from "react";
import Navigation from "../header/navigation";
import { X } from "lucide-react";
import { cn } from "@/lib/utils";

interface MenuModalProps {
  isOpen: boolean;
  handleToggleMenu: () => void;
}

const MenuModal = ({ isOpen, handleToggleMenu }: MenuModalProps) => {
  return (
    <>
      <div
        onClick={handleToggleMenu}
        className={cn(
          "md:hidden fixed inset-0 bg-black/50 transition-opacity",
          isOpen ? "opacity-100 visible" : "opacity-0 invisible"
        )}
      />

      <div
        className={cn(
          "md:hidden fixed top-0 right-0 z-50 h-full w-full max-w-[270px] bg-white p-4 shadow-lg transform transition-transform duration-300 ease-in-out",
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
    </>
  );
};

export default MenuModal;
