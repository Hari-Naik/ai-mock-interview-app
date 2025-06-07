import Logo from "./logo";
import Navigation from "./navigation";
import Profile from "./profile";
import MenuContainer from "./menu";

const Header = () => {
  return (
    <header className="w-full h-[80px] flex items-center shadow-sm px-4 py-4 md:px-8">
      <div className="container mx-auto flex items-center justify-between">
        <div className="flex items-center gap-6 md:gap-8">
          <Logo />
          <nav className="hidden md:flex">
            <Navigation />
          </nav>
        </div>
        <div className="flex items-center gap-6">
          <Profile />
          <MenuContainer />
        </div>
      </div>
    </header>
  );
};

export default Header;
