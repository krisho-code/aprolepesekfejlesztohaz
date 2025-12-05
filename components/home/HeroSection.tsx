import React from "react";
import ImageGallery from "./ImageGallery";

export default function HeroSection() {
  return (
    <section className="relative py-16 md:py-32 bg-white overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-orange-200 rounded-full blur-3xl opacity-20 -z-10"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-200 rounded-full blur-3xl opacity-20 -z-10"></div>

      <div className="container mx-auto px-8 xl:px-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center lg:items-start">
          {/* Content */}
          <div className="space-y-6 z-10 text-center lg:text-left flex flex-col items-center lg:items-start justify-center lg:justify-start">
            <div className="inline-block">
              <span className="bg-orange-100 text-orange-700 px-4 py-2 rounded-full text-[10px] sm:text-sm font-bold">
                🌟 Üdvözöljük az Apró Lépések Fejlesztőházban!
              </span>
            </div>

            <h2 className="text-4xl md:text-5xl font-black text-gray-900 leading-tight">
              Az apró lépésekből születnek a nagy{" "}
              <span className="text-orange-500">sikerek!</span>
            </h2>

            <p className="text-lg text-gray-700 leading-relaxed">
              Gyermekeiket személyre szabott fejlesztésben szeretnék
              részesíteni? Csecsemőkortól 16 éves korig segítünk a
              mozgásfejlesztésben, beszédfejlesztésben és tanulási nehézségek
              legyőzésében.
            </p>

            <div className="flex flex-wrap justify-center lg:justify-start gap-3 pt-4">
              <a
                href="#rolunk"
                className="px-8 py-3 bg-orange-400 text-white font-bold rounded-lg hover:bg-orange-500 transition-all duration-300 transform hover:shadow-lg hover:scale-105 cursor-pointer"
              >
                Tudjon meg többet
              </a>
              <a
                href="#kapcsolat"
                className="px-8 py-3 border-2 border-gray-300 text-gray-800 font-bold rounded-lg hover:border-orange-400 hover:text-orange-400 transition-all duration-300 cursor-pointer"
              >
                Kapcsolat
              </a>
            </div>
          </div>

          {/* Images */}
          <ImageGallery />
        </div>
      </div>
    </section>
  );
}
