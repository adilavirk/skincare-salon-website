"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  {
    href: "/",
    name: "Home",
  },
  {
    href: "/about",
    name: "About",
  },
  {
    href: "/treatments",
    name: "Treatments",
  },
  {
    href: "/contact",
    name: "Contact",
  },
];

const DesktopNav = () => {
  const pathname = usePathname();
  return (
    <nav>
      <div className="container mx-auto flex gap-8">
        {links.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className={` ${
              pathname === link.href && "border-b-2 border-accent"
            } uppercase`}
          >
            {link.name}
          </Link>
        ))}
      </div>
    </nav>
  );
};

export default DesktopNav;
