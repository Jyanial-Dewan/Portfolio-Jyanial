"use client";

import Logo from "@/components/Helper/Logo";
import ThemeToggler from "@/components/Helper/ThemeToggler";
import { navLinks } from "@/Constant/Constant";
import { Download, MenuIcon } from "lucide-react";
import Link from "next/link";
import React, { useEffect, useState } from "react";

interface Props {
  handleOpenMobileNav: () => void;
}

const Nav = ({ handleOpenMobileNav }: Props) => {
  const [navBg, setNavBg] = useState(false);

  useEffect(() => {
    const handler = () => {
      if (window.scrollY >= 90) {
        setNavBg(true);
      } else if (window.scrollY < 90) {
        setNavBg(false);
      }
    };

    window.addEventListener("scroll", handler);

    return () => window.removeEventListener("scroll", handler);
  }, []);
  return (
    <div
      className={`transition-all ${navBg ? "dark:bg-gray-800 bg-white shadow-md" : "fixed"} duration-200 h-[12vh] w-full fixed z-100`}
    >
      <div className="flex items-center h-full justify-between w-[90%] mx-auto">
        {/* Logo */}
        <Logo />
        {/* Navlinks */}
        <div className="hidden xl:flex items-center space-x-10">
          {navLinks.map((link, index) => (
            <Link
              key={index}
              href={link.href}
              className="text-black dark:text-white hover:text-yellow-400 dark:hover:text-yellow-200 transition-all duration-200"
            >
              <p>{link.name}</p>
            </Link>
          ))}
        </div>
        {/* Buttons */}
        <div className="flex items-center space-x-4">
          {/* Download */}
          <a
            href="#_"
            className="box-border relative z-20 inline-flex items-center justify-center w-auto px-6 sm:px-8 py-3 overflow-hidden font-bold transition-all text-white duration-300 bg-indigo-600 rounded-md cursor-pointer group ring-offset-2 ring-1 ring-indigo-300 ring-offset-indigo-100 hover:ring-offset-indigo-500 ease focus:outline-none"
          >
            <span className="relative z-20 flex items-center space-x-2 text-sm">
              <Download className="w-4 h-4" />
              <span>Download CV</span>
            </span>
          </a>
          {/* Theme Toggler */}
          <ThemeToggler />
          {/* Burger Meny */}
          <MenuIcon
            onClick={handleOpenMobileNav}
            className="h-8 w-8 cursor-pointer text-black dark:text-white lg:hidden"
          />
        </div>
      </div>
    </div>
  );
};

export default Nav;
