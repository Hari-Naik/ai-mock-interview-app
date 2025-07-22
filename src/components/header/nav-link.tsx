import { cn } from "@/lib/utils";

import Link from "next/link";
import { usePathname } from "next/navigation";

interface NavLinkProps {
  label: string;
  href: string;
}

const NavLink = ({ label, href }: NavLinkProps) => {
  const pathname = usePathname();
  const isActive = pathname === href;

  return (
    <Link
      href={href}
      key={href}
      className={cn(
        "text-base text-neutral-600 transition duration-300 hover:text-emerald-400 rounded-md",
        isActive && "text-neutral-900 font-semibold"
      )}>
      {label}
    </Link>
  );
};

export default NavLink;
