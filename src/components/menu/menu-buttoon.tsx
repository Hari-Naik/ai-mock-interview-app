import { Menu } from "lucide-react";

interface MenuButtonProps {
  onClick: () => void;
}

const MenuButton = ({ onClick }: MenuButtonProps) => {
  return (
    <button className="md:hidden cursor-pointer" onClick={onClick}>
      <Menu />
    </button>
  );
};

export default MenuButton;
