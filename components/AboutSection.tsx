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
          <div className="space-y-8 text-gray-700 leading-relaxed text-center md:text-left">
            {/* Az Apró Lépések Fejlesztőház története */}
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Az Apró Lépések Fejlesztőház története
              </h3>
              <p className="text-base mb-3">
                Az Apró Lépések Fejlesztőházat a felnőtt lányaimmal közösen
                álmodtuk meg és hoztuk létre. Mindannyian elkötelezett segítő
                szakemberek vagyunk, és 2016 óta együtt, egy csapatként
                dolgozunk azért, hogy szeretetteljes, biztonságos és elfogadó
                környezetet teremtsünk minden hozzánk érkező gyermek számára.
              </p>
              <p className="text-base italic text-blue-700 font-medium">
                Ez számomra különleges büszkeség: a hivatásom a gyermekeimre is
                átragadt, így együtt segíthetjük a családokat.
              </p>
            </div>

            {/* Családi szakmai műhely */}
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Családi szakmai műhely
              </h3>
              <p className="text-base">
                Az Apró Lépések Fejlesztőház egy családi szakmai műhely, ahol
                több generáció tapasztalata, tudása és elhivatottsága
                találkozik. Számunkra a fejlesztés nem elszigetelt tevékenység,
                hanem közös gondolkodás: gyermekekkel, szülőkkel és egymással.
                Hiszünk abban, hogy a biztonságos kapcsolat, az elfogadó légkör
                és a játékosság teremti meg azt az alapot, amelyen valódi
                fejlődés indulhat el.
              </p>
            </div>

            {/* Küldetésünk */}
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Küldetésünk
              </h3>
              <p className="text-base font-semibold text-blue-700">
                Szeretnénk, hogy minden gyermek megélhesse a siker örömét a
                saját tempójában – mert hisszük, hogy az apró lépésekből
                születnek a legnagyobb előrelépések. 🌱
              </p>
            </div>

            {/* Szlogenek */}
            <div className="bg-blue-50 rounded-lg p-6 border-l-4 border-blue-500">
              <h4 className="text-lg font-bold text-gray-900 mb-3">
                Szlogenink
              </h4>
              <ul className="space-y-3 text-sm md:text-base">
                <li className="flex items-start">
                  <span className="text-blue-500 mr-3 font-bold">✦</span>
                  <span>
                    „Apró lépésekben haladunk – mert minden kis előrelépés
                    számít."
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-500 mr-3 font-bold">✦</span>
                  <span>
                    „Szakértelemmel, játékkal és elfogadással kísérjük a
                    gyermekeket a fejlődés útján."
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-500 mr-3 font-bold">✦</span>
                  <span>
                    „Hiszünk a fejlődésben, az apró sikerekben és a közösen
                    megélt örömökben."
                  </span>
                </li>
              </ul>
            </div>
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
