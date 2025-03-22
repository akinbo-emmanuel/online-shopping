import Link from "next/link";
import React from "react";

const links = [
  {
    name: "support center",
    route: "/",
  },
  {
    name: "invoicing",
    route: "/",
  },
  {
    name: "contract",
    route: "/",
  },
  {
    name: "careers",
    route: "/",
  },
  {
    name: "blog",
    route: "/",
  },
  {
    name: "faqs",
    route: "/",
  },
];

const Footer = () => {
  let currentYear = new Date().getFullYear();

  return (
    <footer className="pt-8 pb-6 border-t border-[#DEDFE1] text-[#484848]">
      <div className="max-w-[95vw] 2xl:max-w-[1280px] mx-auto space-y-12">
        <div className="flex flex-wrap gap-4 items-center justify-between">
          <p className="text-3xl font-volkhov">FASCO</p>

          <ul className="flex flex-wrap items-center gap-x-6 gap-y-3">
            {links.map((link, index) => (
              <li key={index}>
                <Link href={link.route}>
                  <p className="capitalize font-poppins text-sm md:text-base">
                    {link.name}
                  </p>
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <p className="text-xs font-poppins text-center">
          Copyright © {currentYear} Xpro . All Rights Reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
