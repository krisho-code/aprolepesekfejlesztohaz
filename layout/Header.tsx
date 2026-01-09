import React from "react";
import Link from "next/link";

import MobileMenu from "./MobileMenu";

export default function Header() {
  const navItems = [
    { label: "Főoldal", href: "/" },
    { label: "Rólunk", href: "/rolunk" },
    { label: "Foglalkozások", href: "/foglalkozasok" },
    { label: "Kapcsolat", href: "/kapcsolat", isButton: true },
  ];

  return (
    <header className="bg-white border-b-2 md:py-2 border-gray-400 shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-8 xl:px-24 py-4 flex items-center justify-between">
        {/* Logo/Title */}
        <Link href="/" className="flex items-center gap-2 cursor-pointer group">
          <img
            src="/logo.png"
            alt="Apró Lépések Logo"
            className="w-10 h-10 flex items-center justify-center"
          />
          <div className="flex flex-col">
            <h1 className="text-base md:text-xl font-black text-gray-800">
              Apró Lépések
            </h1>
            <p className="text-xs font-bold hidden md:block">fejlesztőház</p>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:block">
          <ul className="flex gap-1">
            {navItems.map((item, index) => (
              <li key={index}>
                <Link
                  href={item.href}
                  className={`px-4 py-2 font-semibold transition-all duration-300 ${
                    item.isButton
                      ? "ml-2 bg-[#fe6f62] text-white rounded-lg hover:bg-[#f4513f] transform hover:shadow-lg"
                      : "text-gray-700 hover:text-[#fe6f62] border-b-2 border-transparent hover:border-[#fe6f62]"
                  }`}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* Mobile Menu */}
        <MobileMenu />
      </div>
    </header>
  );
}
