"use client";

import { Menu } from "lucide-react";
import Link from "next/link";
import React, { useEffect, useState } from "react";
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
  const [isFixed, setIsFixed] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsFixed(window.scrollY > 100);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <header
        className={`mx-auto flex w-full items-center justify-between bg-white transition-[top,width,max-width,height,padding,border-radius,box-shadow,transform] duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] will-change-transform ${
          isFixed
            ? "fixed left-1/2 top-4 md:top-6 z-50 h-16 max-w-[92vw] 2xl:max-w-[1180px] -translate-x-1/2 rounded-full px-5 md:px-8 shadow-[0px_20px_52px_0px_#4444441A]"
            : "h-14 max-w-[95vw] 2xl:max-w-[1280px] mt-8 md:mt-[70px]"
        }`}
      >
        <Link
          href="/"
          className={`text-[#484848] font-volkhov transition-[font-size,line-height] duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] ${
            isFixed ? "text-3xl md:text-4xl" : "text-5xl"
          }`}
        >
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
              <Link href="/?auth=sign-in" className="text-[#484848] text-2xl">
                Sign in
              </Link>
              <Link
                href="/?auth=sign-up"
                className="bg-black text-white rounded-[10px] px-11 py-5 shadow-[0px_20px_35px_0px_#00000026]"
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
          <Link href="/?auth=sign-in">Sign in</Link>
          <Link
            href="/?auth=sign-up"
            className={`bg-black text-white rounded-[10px] shadow-[0px_20px_35px_0px_#00000026] transition-[padding,box-shadow,transform] duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] ${
              isFixed ? "px-8 py-3" : "px-11 py-5"
            }`}
          >
            Sign Up
          </Link>
        </nav>
      </header>

      <div
        aria-hidden="true"
        className={`transition-[height] duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] ${
          isFixed ? "h-[88px] md:h-[126px]" : "h-0"
        }`}
      />
    </>
  );
};

export default Header;
