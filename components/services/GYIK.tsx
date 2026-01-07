"use client";

import React, { useState } from "react";
import Link from "next/link";

interface FAQItem {
  id: number;
  question: string;
  answer: string;
}

const faqs: FAQItem[] = [
  {
    id: 1,
    question: "Nagy a baj? Ugye nincs nagy baj?",
    answer:
      'Ez a kérdés szinte minden szülőben megfogalmazódik – és teljesen érthető. A legtöbb esetben nem „bajról", hanem eltérésről, lemaradásról vagy éretlenségről beszélünk, amely megfelelő támogatással jól korrigálható. Ugyanakkor fontos az őszinte látás: ha egy gyermek elakadása tartós, akkor nem megoldás az időre bízni. A korai felismerés és a célzott fejlesztés a legnagyobb segítség, amit egy gyermek kaphat. Mi abban segítünk, hogy reálisan, mégis megnyugtatóan lássuk a helyzetet, és együtt találjuk meg a továbblépés útját.',
  },
  {
    id: 2,
    question: "Biztos, hogy szükség van fejlesztésre? Nem nő ki belőle?",
    answer:
      "Vannak területek, ahol az érés valóban sokat segít, de vannak olyan részképességek és idegrendszeri folyamatok, amelyek nem fejlődnek maguktól. Ha egy nehézség hosszabb ideje fennáll, vagy több területen is megjelenik, akkor a fejlesztés nem siettetés, hanem biztonságos támogatás. A tapasztalat azt mutatja, hogy a gyermekek akkor tudnak felszabadultan fejlődni, ha megkapják azt a segítséget, amire szükségük van.",
  },
  {
    id: 3,
    question: "Meddig kell járnia a gyermeknek fejlesztésre?",
    answer:
      "Erre a kérdésre nincs sablonválasz. A fejlesztés nem időhöz, hanem a gyermek fejlődési folyamatához igazodik. Vannak gyermekek, akiknél néhány hónap alatt látványos változás indul el, másoknál hosszabb, hullámzóbb folyamatra van szükség. A fejlődést rendszeresen nyomon követjük, és a folytatásról, módosításról vagy lezárásról mindig közösen döntünk a szülőkkel.",
  },
  {
    id: 4,
    question: "Hogyan történik a fizetés?",
    answer:
      "A foglalkozások díja havidíj formájában kerül elszámolásra, amely az adott hónapban megtartott foglalkozások óraszámából tevődik össze. Minden csoport előre, időben megkapja a tájékoztatást az aktuális havi díjról. Az időben lemondott órák pótolhatók, legkésőbb a következő hónap végéig, előre egyeztetett időpontban. Fontos számunkra az átlátható, kiszámítható működés, ezért a fizetéssel kapcsolatos kérdésekre mindig nyitottan válaszolunk.",
  },
  {
    id: 5,
    question: "Mit tehetek én szülőként? Elég, ha elhozom a gyermekemet?",
    answer:
      'A fejlesztés akkor a legeredményesebb, ha a szülő aktív partner benne. Nem várjuk el, hogy a szülő „fejlesztővé váljon", de fontos, hogy értse, mi miért történik, és hogyan tudja a mindennapokban támogatni gyermekét. A foglalkozások során és mellett is szülői tanácsadással, iránymutatással segítünk, mert hisszük, hogy a gyermek fejlődésének legnagyobb erőforrása a támogató környezet.',
  },
  {
    id: 6,
    question: "Hogyan zajlik az első alkalom?",
    answer:
      "Az első találkozás elsősorban ismerkedés. Megismerjük a gyermeket, feltérképezzük az erősségeit és az esetleges nehézségeit, miközben a foglalkozás játékos, nyugodt légkörben zajlik. Ez nem vizsga, nincs jó vagy rossz teljesítmény – a gyermek a saját tempójában kapcsolódhat be.",
  },
  {
    id: 7,
    question: "Kell-e valamire külön készülnünk?",
    answer:
      'Nincs szükség előzetes felkészítésre vagy „gyakorlásra". A legfontosabb, hogy a gyermek kipihenten érkezzen, a szülő pedig őszintén elmondja, mi az, ami miatt segítséget kér. Ha van korábbi szakvélemény, fejlesztési javaslat vagy pedagógiai dokumentum, azt érdemes magatokkal hozni.',
  },
  {
    id: 8,
    question: "Bent maradhat a szülő a foglalkozáson?",
    answer:
      "Ez mindig a gyermek életkorától, személyiségétől és aktuális állapotától függ. Van, amikor a szülő jelenléte megnyugtató, máskor éppen az segíti a gyermeket, ha önállóan kapcsolódhat a foglalkozáshoz. Erről minden esetben közösen döntünk, a gyermek érdekeit szem előtt tartva.",
  },
  {
    id: 9,
    question: "Mit hozzunk magunkkal?",
    answer:
      "Kényelmes ruhát, kislányoknak hajgumit, szükség esetén innivalót. Minden egyéb eszközt a foglalkozáshoz mi biztosítunk.",
  },
  {
    id: 10,
    question: "Mi történik az első alkalom után?",
    answer:
      "Az első találkozást követően visszajelzést adunk a szülőknek, és közösen átbeszéljük a további lehetőségeket: szükséges-e fejlesztés, milyen formában (egyéni vagy csoportos), milyen gyakorisággal érdemes folytatni. A döntés mindig közös, a gyermek egyéni szükségleteihez igazodva.",
  },
  {
    id: 11,
    question: "Miért fontos a korai segítség?",
    answer:
      "Minél hamarabb kap egy gyermek megfelelő támogatást, annál könnyebben és örömtelibben tud fejlődni. Hiszünk abban, hogy az apró lépések adják a legnagyobb biztonságot – a gyermeknek és a családnak egyaránt.",
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
                className="w-full p-6 text-left flex items-center justify-between gap-4 hover:bg-purple-50 transition-colors cursor-pointer"
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
          <Link href="/kapcsolat">
            <button className="px-8 py-3 bg-purple-500 text-white font-bold rounded-lg hover:bg-purple-600 transition-all duration-300 transform hover:shadow-lg hover:scale-105 cursor-pointer">
              Kérdezzen tőlünk
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
}
