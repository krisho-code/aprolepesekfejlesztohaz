import React from "react";
import MobileMenu from "./MobileMenu";

export default function Header() {
  const navItems = [
    { label: "Főoldal", href: "#" },
    { label: "Rólunk", href: "#rolunk" },
    { label: "Fejlesztések", href: "#" },
    { label: "Kapcsolat", href: "#", isButton: true },
  ];

  return (
    <header className="bg-white border-b-2 border-orange-400 shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-8 py-4 flex items-center justify-between">
        {/* Logo/Title */}
        <div className="flex items-center gap-2 cursor-pointer group">
          <div className="w-10 h-10 md:w-12 md:h-12 bg-orange-400 rounded-lg flex items-center justify-center font-bold text-xl md:text-2xl group-hover:rotate-12 transition-transform duration-300">
            <img src="/logo.png" />
          </div>
          <a href="#" className="flex flex-col">
            <h1 className="text-base md:text-xl font-black text-gray-800">
              Apró Lépések
            </h1>
            <p className="text-xs text-orange-500 font-bold hidden md:block">
              fejlesztőház
            </p>
          </a>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:block">
          <ul className="flex gap-1">
            {navItems.map((item, index) => (
              <li key={index}>
                <a
                  href={item.href}
                  className={`px-4 py-2 font-semibold transition-all duration-300 ${
                    item.isButton
                      ? "ml-2 bg-orange-400 text-white rounded-lg hover:bg-orange-500 transform hover:shadow-lg"
                      : "text-gray-700 hover:text-orange-500 border-b-2 border-transparent hover:border-orange-500"
                  }`}
                >
                  {item.label}
                </a>
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
