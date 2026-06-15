"use client";

import { Menu } from "lucide-react";
import Link from "next/link";
import React from "react";
import { Sheet, SheetContent, SheetTitle, SheetTrigger } from "./ui/sheet";

const links = [
  {
    name: "Home",
    route: "/",
  },
  {
    name: "Deals",
    route: "#deals",
  },
  {
    name: "New Arrivals",
    route: "#new-arrivals",
  },
  {
    name: "Packages",
    route: "#packages",
  },
];

const Header = () => {
  return (
    <header className="mx-auto flex h-14 w-full max-w-[95vw] 2xl:max-w-[1280px] items-center justify-between bg-white mt-8 md:mt-[70px]">
      <Link href="/" className="text-[#484848] text-5xl font-volkhov">
        FASCO
      </Link>

      <Sheet>
        <SheetTrigger className="lg:hidden cursor-pointer text-[#484848]">
          <Menu size={32} />
        </SheetTrigger>
        <SheetContent className="flex flex-col items-center justify-center gap-10">
          <SheetTitle className="hidden">Homepage navigation</SheetTitle>
          <nav>
            <ul className="flex flex-col items-center gap-8">
              {links.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.route}
                    className="font-poppins text-[#484848] text-2xl"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className="flex flex-col items-center gap-5 font-poppins">
            <Link href="/sign-in" className="text-[#484848] text-2xl">
              Sign in
            </Link>
            <Link
              href="/sign-up"
              className="bg-black text-white rounded-[10px] px-10 py-4 shadow-[0px_20px_35px_0px_#00000026]"
            >
              Sign Up
            </Link>
          </div>
        </SheetContent>
      </Sheet>

      <nav className="hidden lg:flex items-center gap-14 font-poppins text-[#484848]">
        {links.map((link) => (
          <Link key={link.name} href={link.route}>
            {link.name}
          </Link>
        ))}
        <Link href="/sign-in">Sign in</Link>
        <Link
          href="/sign-up"
          className="bg-black text-white rounded-[10px] px-11 py-5 shadow-[0px_20px_35px_0px_#00000026]"
        >
          Sign Up
        </Link>
      </nav>
    </header>
  );
};

export default Header;
