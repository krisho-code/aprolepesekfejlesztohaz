import Image from "next/image";

export default function AboutSection() {
  return (
    <section
      id="rolunk"
      className="py-20 bg-linear-to-br from-blue-50 to-indigo-50"
    >
      <div className="container mx-auto px-8 xl:px-24">
        {/* Header */}
        <div className="mb-16 text-center">
          <div className="inline-block mb-4">
            <span className="bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-[10px] sm:text-sm font-bold">
              💙 Ismerd Meg Minket!
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-center text-gray-900 leading-tight mb-4">
            Kik vagyunk az Apró Lépések{" "}
            <span className="text-blue-600">Fejlesztőházban?</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Szeretettel üdvözlünk az Apró Lépések Fejlesztőház oldalán!
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="space-y-6 text-gray-700 leading-relaxed text-center md:text-left">
            <p className="text-base">
              Gyermekek célzott fejlesztésével foglalkozunk, amely sokrétű
              munkából áll. Felméréssel kezdődik a közös munkánk, ezt követően
              megkezdődik a személyre szabott fejlesztés. Fontos, hogy a
              szülőkkel és a gyermekekkel közösen oldjuk meg a problémákat.
            </p>

            <p className="text-base">
              Fejlesztői munkánkat csecsemő kortól egészen 16 éves korig látjuk
              el. Tevékenységünk kiterjed például beszédészlelési nehézségek
              felmérésére és ezek fejlesztésére, alapozó terápiás fejlesztésre,
              sérülés specifikus mozgásfejlesztésre, óvodásoknak iskola
              előkészítő, ovistorna, ovis jóga, iskolás jóga, diszlexia,
              diszgráfia prevenció, tanulási technikák tanítása.
            </p>

            <p className="text-base font-medium text-gray-800">
              Logopédiai ellátást biztosítunk a rászoruló gyermekeknek.
            </p>
          </div>

          {/* Image */}
          <div className="flex justify-center">
            <div className="relative w-full max-w-md mx-auto">
              <div className="bg-white rounded-2xl shadow-xl p-3 border-4 border-blue-300">
                <div className="relative w-full h-96 rounded-lg overflow-hidden">
                  <Image
                    src="/image4.png"
                    alt="Apró Lépések Fejlesztőház"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
              <div className="absolute -top-3 -right-3 bg-orange-300 text-2xl rounded-full p-2 shadow-md">
                ❤️
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
