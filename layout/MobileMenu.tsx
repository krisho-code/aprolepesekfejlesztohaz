"use client";

import React, { useState } from "react";
import Link from "next/link";

export default function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const menuItems = [
    { label: "Főoldal", href: "/" },
    { label: "Rólunk", href: "/rolunk" },
    { label: "Foglalkozások", href: "/foglalkozasok" },
    { label: "Kapcsolat", href: "/kapcsolat" },
  ];

  return (
    <>
      {/* Modern Hamburger Button */}
      <button
        onClick={toggleMenu}
        className="md:hidden relative h-10 w-10 flex items-center justify-center cursor-pointer focus:outline-none p-2"
        aria-label="Toggle menu"
        aria-expanded={isOpen}
      >
        <span
          className={`absolute block h-0.5 w-6 bg-gray-800 transition-transform duration-300 ease-in-out origin-center ${
            isOpen ? "translate-y-0 rotate-45" : "-translate-y-2"
          }`}
        ></span>
        <span
          className={`absolute block h-0.5 w-6 bg-gray-800 transition-opacity duration-200 ease-in-out origin-center ${
            isOpen ? "opacity-0" : "opacity-100"
          }`}
        ></span>
        <span
          className={`absolute block h-0.5 w-6 bg-gray-800 transition-transform duration-300 ease-in-out origin-center ${
            isOpen ? "translate-y-0 -rotate-45" : "translate-y-2"
          }`}
        ></span>
      </button>

      {/* Modern Sliding Mobile Menu */}
      {isOpen && (
        <nav className="md:hidden absolute top-full left-0 right-0 bg-white border-b-2 border-[#fe6f62] shadow-xl animate-in slide-in-from-top-2 duration-300">
          <ul className="flex flex-col py-2">
            {menuItems.map((item, index) => (
              <li key={index}>
                <Link
                  href={item.href}
                  className="flex items-center gap-3 px-6 py-3 text-gray-800 font-semibold hover:bg-[#ffe3dd] hover:text-[#fe6f62] transition-all duration-200 border-l-4 border-transparent hover:border-[#fe6f62]"
                  onClick={() => setIsOpen(false)}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </>
  );
}
