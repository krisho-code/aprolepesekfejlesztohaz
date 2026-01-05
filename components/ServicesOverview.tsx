import Link from "next/link";

export default function ServicesOverview() {
  return (
    <section
      id="foglalkozasok-overview"
      className="py-16 bg-linear-to-br from-orange-50 to-orange-100"
    >
      <div className="absolute top-1/2 left-1/2 w-48 h-48 bg-orange-200 rounded-full blur-3xl opacity-5 -z-10"></div>

      <div className="container mx-auto px-8 xl:px-24">
        {/* Header */}
        <div className="mb-12 text-center">
          <div className="inline-block mb-4">
            <span className="bg-orange-100 text-orange-700 px-4 py-2 rounded-full text-[10px] sm:text-sm font-bold">
              🎯 Foglalkozások
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-center text-gray-900 leading-tight">
            Milyen <span className="text-orange-500">foglalkozásokat</span>{" "}
            kínálunk?
          </h2>
        </div>

        {/* Services Overview */}
        <div className="max-w-3xl mx-auto space-y-6 text-gray-700 leading-relaxed text-center">
          <p className="text-base">
            Az Apró Lépések Fejlesztőházban alapozó mozgásfejlesztésben,
            gyerekjóga foglalkozásokban, egyéni fejlesztésben óvodás és iskolás
            gyermekeknek, kognitív és részképesség-fejlesztésben, valamint
            szülőtanácsadásban segítünk.
          </p>

          <p className="text-base">
            Minden foglalkozás a gyermek egyéni szükségleteihez és tempójához
            igazított. Hiszünk abban, hogy a biztonságos kapcsolat, az elfogadó
            légkör és a játékosság az alapja a valódi fejlődésnek. Ezért olyan
            környezetet teremtünk, ahol a gyermekek örömmel vesznek részt a
            foglalkozásokon, és szüleiket is támogatjuk a fejlesztési
            folyamatban.
          </p>

          <p className="text-base">
            A legkisebb 3 hónapos babáktól egészen 10–12 éves korig várjuk a
            gyerekeket. Szükség esetén idősebb, értelmileg érintett fiatalokat
            is szeretettel fogadunk. Ha kérdéseid vannak arról, hogy gyermeked
            ide illene-e, fordulj hozzánk bizalommal!
          </p>

          <div className="pt-4">
            <Link
              href="/foglalkozasok#services"
              className="inline-block px-8 py-3 bg-orange-400 text-white font-bold rounded-lg hover:bg-orange-500 transition-all duration-300 transform hover:shadow-lg hover:scale-105 cursor-pointer"
            >
              Ismerd meg foglalkozásainkat részletesen
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
