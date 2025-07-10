import NavLink from "./nav-link";
import { MainRoutes } from "@/lib/helpers";

const Navigation = () => {
  return (
    <ul className="flex flex-col md:flex-row md:items-center gap-6 md:gap-8">
      {MainRoutes.map(route => (
        <NavLink key={route.href} href={route.href} label={route.label} />
      ))}
    </ul>
  );
};

export default Navigation;
