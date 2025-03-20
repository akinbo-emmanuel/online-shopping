"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const links = [
  {
    name: "home",
    route: "/",
  },
  {
    name: "shop",
    route: "/shop",
  },
  {
    name: "products",
    route: "/products",
  },
];

const Header = () => {
  const pathname = usePathname();

  return (
    <header className="max-w-[1280px] mx-auto mt-16 flex items-center justify-between">
      <p className="text-[#484848] text-5xl font-volkhov">FASCO</p>

      <ul className="flex gap-16">
        {links.map((link, index) => (
          <li
            key={index}
            className={`${
              pathname === link.route &&
              "px-2.5 pb-1.5 border-b border-[#484848]"
            }`}
          >
            <Link href={link.route}>
              <p className="capitalize font-poppins text-[#484848]">
                {link.name}
              </p>
            </Link>
          </li>
        ))}

        <li>
          <p className="capitalize font-poppins text-[#484848]">Pages</p>
        </li>
      </ul>

      <div></div>
    </header>
  );
};

export default Header;
