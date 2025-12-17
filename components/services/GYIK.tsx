"use client";

import React, { useState } from "react";

interface FAQItem {
  id: number;
  question: string;
  answer: string;
}

const faqs: FAQItem[] = [
  {
    id: 1,
    question: "Milyen korú gyermekeket fogadtok?",
    answer:
      "Foglalkozásainkat 0-18 éves korig terjedő gyermekek számára kínáljuk. Különböző korosztályoknak és fejlesztési igényeknek megfelelően alakítjuk ki a programokat, hogy minden gyermek a számára legmegfelelőbb támogatást kapja.",
  },
  {
    id: 2,
    question: "Mennyi ideig tart egy foglalkozás?",
    answer:
      "Egy foglalkozás általában 45-60 percet vesz igénybe, attól függően, hogy milyen típusú fejlesztésről van szó és a gyermek életkorától. Az első alkalommal közösen megbeszéljük a részleteket és az optimális időtartamot.",
  },
  {
    id: 3,
    question: "Szükséges-e előzetes bejelentkezés?",
    answer:
      "Igen, a foglalkozásokra előzetes egyeztetés és időpontfoglalás szükséges. Ez biztosítja, hogy minden gyermek számára megfelelő időt és figyelmet tudjunk szentelni. Foglaláshoz hívj minket telefonon vagy írj e-mailt!",
  },
  {
    id: 4,
    question: "Milyen szakemberek dolgoznak nálatok?",
    answer:
      "Csapatunk tapasztalt gyógypedagógusokból, fejlesztőpedagógusokból és logopédusokból áll, akik folyamatosan képzik magukat a legújabb módszerekkel. Minden szakemberünk rendelkezik a szükséges végzettséggel és évek óta dolgozik gyermekekkel.",
  },
  {
    id: 5,
    question: "Mennyi a foglalkozások díja?",
    answer:
      "A foglalkozások díja a fejlesztés típusától és időtartamától függ. Az első konzultáció során részletes tájékoztatást adunk az árakról és a lehetséges fizetési módokról. Egyéni helyzetekhez rugalmasan tudunk alkalmazkodni.",
  },
];

export default function GYIK() {
  const [openId, setOpenId] = useState<number | null>(null);

  const toggleFAQ = (id: number) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section className="py-16 md:py-24 bg-linear-to-br from-purple-50 to-purple-100 overflow-hidden relative">
      {/* Decorative elements */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-purple-200 rounded-full blur-2xl opacity-20"></div>
      <div className="absolute bottom-20 right-10 w-40 h-40 bg-purple-300 rounded-full blur-2xl opacity-20"></div>

      <div className="container mx-auto px-8 xl:px-24">
        {/* Header */}
        <div className="mb-16 text-center">
          <div className="inline-block mb-4">
            <span className="bg-purple-100 text-purple-700 px-4 py-2 rounded-full text-[10px] sm:text-sm font-bold">
              ❓ Gyakori Kérdések
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-gray-900 leading-tight mb-4">
            GYIK - <span className="text-purple-600">Válaszok</span> kérdéseidre
          </h2>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto">
            Az alábbiakban megtalálod a leggyakrabban feltett kérdéseket és a
            hozzájuk tartozó válaszokat
          </p>
        </div>

        {/* FAQ List */}
        <div className="max-w-4xl mx-auto space-y-4">
          {faqs.map((faq) => (
            <div
              key={faq.id}
              className="bg-white rounded-2xl shadow-lg border-4 border-purple-300 overflow-hidden transition-all duration-300 hover:shadow-2xl"
            >
              <button
                onClick={() => toggleFAQ(faq.id)}
                className="w-full p-6 text-left flex items-center justify-between gap-4 hover:bg-purple-50 transition-colors"
              >
                <div className="flex items-start gap-4 flex-1">
                  <span className="text-2xl shrink-0">
                    {openId === faq.id ? "❓" : "💭"}
                  </span>
                  <h3 className="text-lg md:text-xl font-bold text-gray-900">
                    {faq.question}
                  </h3>
                </div>
                <svg
                  className={`w-6 h-6 text-purple-600 shrink-0 transition-transform duration-300 ${
                    openId === faq.id ? "rotate-180" : ""
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>

              {/* Answer - Expandable */}
              <div
                className={`overflow-hidden transition-all duration-300 ${
                  openId === faq.id ? "max-h-96" : "max-h-0"
                }`}
              >
                <div className="px-6 pb-6 pt-2">
                  <div className="pl-12 pr-10">
                    <p className="text-gray-700 leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <p className="text-gray-600 text-lg font-semibold mb-6">
            További kérdésed van? 💜
          </p>
          <a href="/kapcsolat">
            <button className="px-8 py-3 bg-purple-500 text-white font-bold rounded-lg hover:bg-purple-600 transition-all duration-300 transform hover:shadow-lg hover:scale-105 cursor-pointer">
              Kérdezzen tőlünk
            </button>
          </a>
        </div>
      </div>
    </section>
  );
}
