import React from "react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const navItems = [
    { label: "Főoldal", href: "#" },
    { label: "Rólunk", href: "#rolunk" },
    { label: "Foglalkozások", href: "#foglalkozasok" },
    { label: "Kapcsolat", href: "#kapcsolat" },
  ];

  const documents = [
    { label: "Szerződés", filename: "szerzodes.pdf", type: "PDF" },
    { label: "Szerződés DOCX", filename: "szerzodes.docx", type: "DOCX" },
    {
      label: "Adatvédelmi szabályzat",
      filename: "adatvedelem.pdf",
      type: "PDF",
    },
    { label: "Használati feltételek", filename: "feltetelek.pdf", type: "PDF" },
  ];

  return (
    <footer className="bg-white border-t-2 border-gray-400 text-gray-800">
      {/* Main Footer Content */}
      <div className="container mx-auto px-8 xl:px-24 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Logo and Company Info */}
          <div className="flex flex-col gap-4 text-center md:text-left">
            <div className="flex items-center gap-2 cursor-pointer group justify-center md:justify-start">
              <div className="w-10 h-10 bg-orange-400 rounded-lg flex items-center justify-center font-bold text-xl group-hover:rotate-12 transition-transform duration-300">
                <img src="/logo.png" alt="Apró Lépések Logo" />
              </div>
              <div className="flex flex-col">
                <h3 className="text-base font-black text-gray-800">
                  Apró Lépések
                </h3>
                <p className="text-xs text-orange-500 font-bold">
                  fejlesztőház
                </p>
              </div>
            </div>
            <p className="text-sm text-gray-600">
              Személyre szabott fejlesztés csecsemőkortól 16 éves korig.
            </p>

            {/* Navigation */}
            <nav className="mt-2">
              <ul className="flex flex-row gap-4 items-center justify-center md:justify-start md:items-start">
                {navItems.map((item, index) => (
                  <li key={index}>
                    <a
                      href={item.href}
                      className="text-gray-900 hover:text-orange-500 transition-colors duration-300 font-medium text-sm"
                    >
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          {/* Documents */}
          <div className="text-center md:text-right">
            <h4 className="font-bold text-lg text-gray-800 mb-4">
              Dokumentumok
            </h4>
            <ul className="flex flex-col gap-3 items-center md:items-end">
              {documents.map((doc, index) => (
                <li key={index}>
                  <a
                    href={`/documents/${doc.filename}`}
                    download
                    className="text-gray-700 hover:text-orange-500 transition-colors duration-300 font-medium text-sm flex items-center gap-2"
                  >
                    <span>{doc.label}</span>
                    <span className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded">
                      {doc.type}
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-gray-200 bg-gray-50">
        <div className="container mx-auto px-8 xl:px-24 py-6 flex flex-col md:flex-row items-center justify-between text-sm text-gray-600">
          <p>
            &copy; {currentYear} Apró Lépések Fejlesztőház. Minden jog
            fenntartva.
          </p>
          {/* <div className="flex gap-4 mt-4 md:mt-0">
            <a
              href="#"
              className="hover:text-orange-500 transition-colors duration-300"
            >
              Adatvédelmi szabályzat
            </a>
            <a
              href="#"
              className="hover:text-orange-500 transition-colors duration-300"
            >
              Használati feltételek
            </a>
          </div> */}
        </div>
      </div>
    </footer>
  );
}
