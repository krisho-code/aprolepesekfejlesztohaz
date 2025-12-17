"use client";

import { useState } from "react";

interface AccordionItemProps {
  title: string;
  subtitle: string;
  duration: string;
  price: string;
  whatWeDevelop: string[];
  howItWorks: string;
  forWhom: string[];
  icon: string;
  isOpen: boolean;
  onClick: () => void;
}

function AccordionItem({
  title,
  subtitle,
  duration,
  price,
  whatWeDevelop,
  howItWorks,
  forWhom,
  icon,
  isOpen,
  onClick,
}: AccordionItemProps) {
  return (
    <div className="bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-shadow duration-300 overflow-hidden border-4 border-green-300">
      {/* Accordion Header */}
      <button
        onClick={onClick}
        className="w-full p-6 flex items-start justify-between hover:bg-green-50 transition-colors duration-200"
      >
        <div className="flex items-start gap-4 text-left flex-1">
          <div className="text-3xl">{icon}</div>
          <div className="flex-1">
            <h3 className="text-lg font-bold text-gray-900 mb-1">{title}</h3>
            <p className="text-sm text-gray-700 leading-relaxed">{subtitle}</p>
          </div>
        </div>
        <div className="ml-4 shrink-0">
          <svg
            className={`w-6 h-6 text-green-600 transform transition-transform duration-300 ${
              isOpen ? "rotate-180" : ""
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
        </div>
      </button>

      {/* Accordion Content */}
      <div
        className={`overflow-hidden transition-all duration-300 ${
          isOpen ? "max-h-[3000px]" : "max-h-0"
        }`}
      >
        <div className="p-12 pt-6 space-y-4 border-t border-green-100">
          {/* Duration and Price */}
          <div className="flex flex-wrap gap-4 mb-4">
            <div className="bg-green-50 px-4 py-2 rounded-lg">
              <span className="text-sm font-semibold text-green-700">
                ⏱️ {duration}
              </span>
            </div>
            <div className="bg-green-50 px-4 py-2 rounded-lg">
              <span className="text-sm font-semibold text-green-700">
                💰 {price}
              </span>
            </div>
          </div>

          {/* What We Develop */}
          <div>
            <h4 className="text-md font-bold text-gray-900 mb-3">
              Mit fejlesztünk a foglalkozásokon?
            </h4>
            <ul className="space-y-2">
              {whatWeDevelop.map((item, idx) => (
                <li
                  key={idx}
                  className="flex items-start gap-2 text-sm text-gray-700"
                >
                  <span className="text-green-600 mt-1">✓</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* How It Works */}
          <div>
            <h4 className="text-md font-bold text-gray-900 mb-2">
              Hogyan zajlik?
            </h4>
            <p className="text-sm text-gray-700 leading-relaxed">
              {howItWorks}
            </p>
          </div>

          {/* For Whom */}
          <div>
            <h4 className="text-md font-bold text-gray-900 mb-3">
              Kinek ajánljuk?
            </h4>
            <ul className="space-y-2">
              {forWhom.map((item, idx) => (
                <li
                  key={idx}
                  className="flex items-start gap-2 text-sm text-gray-700"
                >
                  <span className="text-green-600 mt-1">→</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Services() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const services = [
    {
      title: "1. Alapozó Terápiás Fejlesztés",
      subtitle:
        "Az Alapozó Terápia egy komplex, mozgásfejlesztésen alapuló idegrendszer-érlelő módszer. Célja, hogy a gyermek fejlődésében esetlegesen kimaradt, vagy nem megfelelően rögzült csecsemő- és kisgyermekkori mozgásmintákat (pl. kúszás, mászás, megfelelő reflexek megléte) újraépítse. Ezzel stabil, teherbíró alapot teremtünk az agy további fejlődéséhez, ami elengedhetetlen a későbbi sikeres tanuláshoz, a tartós figyelemhez és a harmonikus mozgáshoz.",
      duration: "Heti 2 x 60 perc (a hatékonyság érdekében)",
      price: "3.800 Ft / óra",
      whatWeDevelop: [
        "Az idegrendszer érettségét és a szenzoros integrációt (az érzékszervekből érkező információk feldolgozását).",
        "Egyensúlyérzéket, testtudatot és a térbeli tájékozódást.",
        "A nagy- és finommozgások koordinációját, a mozgás ügyességét.",
        "A két agyfélteke közötti harmonikus együttműködést (ami kulcsfontosságú az írás-olvasás tanulásánál).",
        "A figyelmet, koncentrációt és a feladattartást.",
        "A még aktív csecsemőkori reflexek gátlását, amelyek akadályozhatják a tanulást.",
      ],
      howItWorks:
        'A foglalkozások intenzív, aktív mozgással telnek, speciális, változatos fejlesztőeszközök (pl. hinták, nagylabdák, egyensúlyozó elemek, gördeszkák) segítségével. A terapeuta irányításával a gyerekek meghatározott sorrendben végeznek játékos, de strukturált gyakorlatokat, amelyek mintegy "újrahuzalozzák" az idegrendszert. Bár ez komoly munka a gyerekek számára, az élménydús feladatok miatt élvezettel vesznek részt benne.',
      forWhom: [
        "Jellemzően 5 éves kortól (bizonyos esetekben hamarabb is) ajánlott azoknak a gyerekeknek, akiknél:",
        "csecsemőkorban kimaradt vagy nagyon rövid ideig tartott a kúszás, mászás szakasza.",
        'a mozgásuk ügyetlen, "szeleburdiak", sokat esnek-kelnek, kerülik a játszótéri eszközöket.',
        "nehézséget okoz a figyelem megtartása, könnyen elterelhetők, túlmozgásosak.",
        "fennáll a tanulási nehézségek (diszlexia, diszgráfia, diszkalkulia) gyanúja, vagy prevencióra van szükség.",
        "beilleszkedési, magatartási problémák vagy túlzott érzékenység (pl. hangokra, érintésre) tapasztalható.",
        "megkésett beszédfejlődés esetén, kiegészítő terápiaként.",
      ],
      icon: "🎤",
    },
    {
      title: "2. Játékos Készségfejlesztés Óvodásoknak",
      subtitle:
        "Célunk, hogy a gyerekek természetes kíváncsiságára és játékosságára építve erősítsük azokat az alapkészségeket (figyelem, gondolkodás, emlékezet, feladattartás), amelyekre később az iskolában is nagy szükségük lesz – mindezt élményalapú, örömteli formában.",
      duration: "Heti 1 x 45 perc",
      price: "4.000 Ft / óra",
      whatWeDevelop: [
        "Figyelem és koncentráció",
        "Emlékezet (vizuális és auditív)",
        "Problémamegoldás és gondolkodási műveletek",
        "Feladattartás és feladatértés",
        "Szabálytudat, együttműködés",
        "Vizuális észlelés, térbeli tájékozódás",
        "Logika, kategorizálás, összefüggések felismerése",
      ],
      howItWorks:
        "Elsődleges eszközünk a játék. Meséken, mozgásos feladatokon, társasjátékokon, kirakókon és kreatív feladatokon keresztül gyakorolunk. Fontos számunkra, hogy a gyermek sikerélménnyel távozzon.",
      forWhom: [
        "3–7 éves óvodásoknak, akik:",
        "szétszórtabbak, nehezebben fókuszálnak.",
        "lassabban dolgoznak vagy bizonytalanok a feladatokban.",
        "akiknek az óvoda vagy a szülő fejlesztő segítséget javasol.",
        'szeretnének játékosan "okosodni" és önbizalmat építeni.',
      ],
      icon: "💪",
    },
    {
      title: "3. Iskolára Hangoló Fejlesztés",
      subtitle:
        "Az iskolakezdés nagy mérföldkő. Foglalkozásaink célja, hogy játékos formában teremtsük meg azokat a fontos alapokat (megfelelő figyelem, feladattartás, finommotorika, szociális készségek), amelyekre szükség van ahhoz, hogy a gyermek biztonsággal, sikerélménnyel és örömmel vegye az első akadályokat.",
      duration: "Heti 1 x 45 perc",
      price: "4.000 Ft / óra",
      whatWeDevelop: [
        "Figyelem, feladattartás, feladatértés és feladatra váltás",
        "Emlékezet és gondolkodás",
        "Finommotorika és grafomotorika (ceruzafogás, vonalvezetés)",
        "Szabálytudat, szociális készségek",
        "Beszédértés és szókincs",
        "Feladatsorok követése, munkalapok értelmezése",
      ],
      howItWorks:
        "A fejlesztés játékos, élményalapú, sok mozgásos és vizuális feladattal, mely során a gyermekek észrevétlenül gyakorolják az iskolához szükséges készségeket, miközben fejlődik önbizalmuk is.",
      forWhom: [
        "Főként nagycsoportos óvodásoknak, akik:",
        "bizonytalanok, lassabban dolgoznak, vagy nehezen értik a feladatokat.",
        "szükségük van több gyakorlásra a figyelem, feladattartás vagy finommotorika terén.",
        "akiknek szakember vagy a szülő javasolja az iskola előtti megerősítést.",
      ],
      icon: "🚶",
    },
    {
      title: "4. Beszédindító – Beszédpercepciós Fejlesztés",
      subtitle:
        "Ez a foglalkozás azoknak a gyermekeknek szól, akiknél a beszéd még nem indult el, késve indult, vagy nehezebben fejlődik. A beszéd megjelenéséhez nemcsak a hangképzés, hanem a hangok meghallása, megkülönböztetése és megértése (beszédpercepció) is szükséges. Ezeket az alapokat erősítjük meg játékos formában.",
      duration: "Heti 1 x 45 perc",
      price: "4.000 Ft / óra",
      whatWeDevelop: [
        "Hangok felismerése és megkülönböztetése",
        "Beszédértés, szókincs és utánzókészség",
        "Figyelem és hangokra irányuló koncentráció",
        "Ritmusérzék, hallási emlékezet",
        "Kommunikációs kezdeményezés, szemkontaktus",
        "A beszéd megindulását előkészítő alapfunkciók",
      ],
      howItWorks:
        "A beszédfejlesztés játékba ágyazva történik: mondókázunk, éneklünk, ritmizálunk, hangutánzó játékokat játszunk, közös mozgásos feladatokat végzünk (labdákkal, buborékokkal). A gyermek fesztelenül, örömmel kapcsolódik a hangokhoz, így a fejlődés természetes módon indulhat el.",
      forWhom: [
        "Különösen a 2–5 éves korosztály számára (de egyénileg nagyobb gyermekekkel is foglalkozunk), akik:",
        "későn beszélnek vagy még nem beszélnek.",
        "értenek, de nem szívesen szólalnak meg.",
        "nehézséget okoz számukra a hangok megkülönböztetése.",
        "akiknek a védőnő, logopédus vagy a szülő beszédindítást javasol.",
      ],
      icon: "🎓",
    },
  ];

  return (
    <section
      id="szolgaltatasok"
      className="py-20 bg-linear-to-br from-green-50 to-green-100"
    >
      <div className="container mx-auto px-8 xl:px-24">
        {/* Header */}
        <div className="mb-16 text-center">
          <div className="inline-block mb-4">
            <span className="bg-green-100 text-green-700 px-4 py-2 rounded-full text-[10px] sm:text-sm font-bold">
              🎯 Részletek
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-center text-gray-900 leading-tight mb-4">
            Szolgáltatásaink és{" "}
            <span className="text-green-600">Foglalkozásaink</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Központunkban célunk, hogy a gyermekek képességeit játékos,
            élményalapú formában, egyéni igényeikhez igazodva fejlesszük, biztos
            alapokat nyújtva az óvodai és iskolai helytálláshoz.
          </p>
        </div>

        {/* Assessment Section */}
        <div className="mb-12 text-center">
          <h3 className="text-2xl font-bold text-gray-900 mb-3">
            Felmérések és Konzultáció
          </h3>
          <p className="text-gray-700 mb-6 max-w-2xl mx-auto">
            A megfelelő fejlesztési irány meghatározásához elengedhetetlen a
            gyermek aktuális állapotának pontos megismerése.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center max-w-2xl mx-auto">
            <div className="text-gray-800">
              <span className="font-semibold">Felmérés díja:</span> 15.000 Ft
            </div>
            <span className="hidden sm:inline text-gray-400">|</span>
            <div className="text-gray-800">
              <span className="font-semibold">
                Írásos vélemény (opcionális):
              </span>{" "}
              +8.000 Ft
            </div>
          </div>
        </div>

        {/* Services Accordion - Single Column Layout */}
        <div className="grid grid-cols-1 gap-6 mb-12">
          {services.map((service, index) => (
            <AccordionItem
              key={index}
              {...service}
              isOpen={openIndex === index}
              onClick={() => setOpenIndex(openIndex === index ? null : index)}
            />
          ))}
        </div>

        {/* Important Information */}
        <div className="text-center">
          <h3 className="text-2xl font-bold text-gray-900 mb-6">
            Fontos információk a díjazással kapcsolatban
          </h3>
          <div className="max-w-3xl mx-auto space-y-4">
            <p className="text-gray-800">
              <strong>Havidíjas rendszer:</strong> A foglalkozásoknak havidíja
              van, mely az aktuális hónap óráinak számából tevődik össze.
            </p>
            <p className="text-gray-800">
              <strong>Hiányzás:</strong> A lemondott órát a következő hónap
              végéig lehet pótolni.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
