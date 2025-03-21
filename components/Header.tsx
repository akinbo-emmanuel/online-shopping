"use client";

import { LucideShoppingBag, Search, Star, User2 } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useEffect, useState } from "react";

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
  const [isFixed, setIsFixed] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        // Adjust the scroll threshold as needed
        setIsFixed(true);
      } else {
        setIsFixed(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <header
        className={`max-w-[1280px] mx-auto mt-16 flex items-center justify-between transition-all duration-300 ${
          isFixed
            ? "fixed top-0 left-0 right-0 z-50 bg-white shadow-md py-4 px-6"
            : ""
        }`}
      >
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

        <div className="flex items-center gap-6 text-[#484848] text-xl">
          <Search />
          <User2 />
          <Star />
          <LucideShoppingBag />
        </div>
      </header>

      {/* Placeholder to prevent layout shift when header becomes fixed */}
      {isFixed && <div className="h-[96px]"></div>}
    </>
  );
};

export default Header;
