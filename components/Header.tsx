"use client";

import { LucideShoppingBag, Search, Star, User2, Menu } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useEffect, useState } from "react";
import { Sheet, SheetContent, SheetTitle, SheetTrigger } from "./ui/sheet";

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
        className={`mx-auto flex items-center justify-between transition-all duration-300 ${
          isFixed
            ? "fixed top-0 left-0 right-0 z-50 bg-white shadow-md py-4 px-6 max-w-[90vw] 2xl:max-w-[1250px] rounded-full mt-4 md:mt-8"
            : "max-w-[95vw] 2xl:max-w-[1280px] mt-8 md:mt-16"
        }`}
      >
        {/* Logo */}
        <p className="text-[#484848] text-5xl font-volkhov">FASCO</p>

        {/* Hamburger Menu Icon (Mobile) */}
        <Sheet>
          <SheetTrigger className="lg:hidden cursor-pointer">
            <Menu size={32} />
          </SheetTrigger>
          <SheetContent className="flex flex-col items-center justify-center">
            <SheetTitle className="hidden">Mobile</SheetTitle>
            <ul className="flex flex-col gap-8">
              {links.map((link, index) => (
                <li
                  key={index}
                  className={`${
                    pathname === link.route &&
                    "pb-1.5 border-b border-[#484848]"
                  }`}
                >
                  <Link href={link.route}>
                    <p className="capitalize font-poppins text-[#484848] text-2xl">
                      {link.name}
                    </p>
                  </Link>
                </li>
              ))}

              <li>
                <p className="capitalize font-poppins text-[#484848] text-2xl">
                  Pages
                </p>
              </li>
            </ul>

            {/* Icons (Mobile) */}
            <div className="flex items-center gap-6 text-[#484848] text-2xl mt-8">
              <Search />
              <User2 />
              <Star />
              <LucideShoppingBag />
            </div>
          </SheetContent>
        </Sheet>

        {/* Navigation Links (Desktop) */}
        <ul className="hidden lg:flex gap-16">
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

        {/* Icons (Desktop) */}
        <div className="hidden lg:flex items-center gap-6 text-[#484848] text-xl">
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
