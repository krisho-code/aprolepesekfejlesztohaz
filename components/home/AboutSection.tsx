import Image from "next/image";

export default function AboutSection() {
  return (
    <section
      id="rolunk"
      className="py-20 bg-linear-to-br from-blue-50 to-indigo-50"
    >
      <div className="container mx-auto px-8 xl:px-24">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-gray-900">
          Rólunk
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="space-y-6 text-gray-700 leading-relaxed text-center md:text-left">
            <p className="text-lg font-semibold text-blue-600">
              Szeretettel üdvözlünk az Apró Lépések Fejlesztőház oldalán!
            </p>

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
