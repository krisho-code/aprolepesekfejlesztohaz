import Link from "next/link";

export default function ServicesSection() {
  const services = [
    {
      title: "Alapozó terápiás fejlesztés",
      description:
        "Átfogó fejlesztő foglalkozások különböző területeken a gyermekek számára.",
      icon: "🎤",
    },
    {
      title: "Játékos készségfejlesztés óvodásoknak",
      description:
        "Fejlesztő foglalkozások játékos formában az óvodás korú gyermekek számára.",
      icon: "💪",
    },
    {
      title: "Iskolára hangoló fejlesztés óvodásoknak",
      description:
        "Készségfejlesztő foglalkozások az iskolakezdés előkészítésére.",
      icon: "🚶",
    },
    {
      title: "Beszédindító – beszédpercepciós fejlesztés óvodásoknak",
      description:
        "Fizikai és mentális felkészítés az iskolakezdésre, mozgás- és koordinációfejlesztés.",
      icon: "🎓",
    },
  ];

  return (
    <section
      id="foglalkozasok"
      className="py-20 bg-linear-to-br from-green-50 to-green-100"
    >
      <div className="container mx-auto px-8 xl:px-24">
        {/* Header */}
        <div className="mb-16 text-center">
          <div className="inline-block mb-4">
            <span className="bg-green-100 text-green-700 px-4 py-2 rounded-full text-[10px] sm:text-sm font-bold">
              🎯 Foglalkozásaink
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-center text-gray-900 leading-tight mb-4">
            Fejlesztések & <span className="text-green-600">Foglalkozások</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Személyre szabott fejlesztő foglalkozásaink segítenek gyermekednek a
            képességei kibontakoztatásában és a harmonikus fejlődésben.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {services.map((service, index) => (
            <div
              key={index}
              className="p-6 bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-shadow duration-300 border-4 border-green-300"
            >
              <div className="text-4xl mb-3">{service.icon}</div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">
                {service.title}
              </h3>
              <p className="text-sm text-gray-700 leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>

        {/* CTA Button */}
        <div className="flex justify-center">
          <Link href="/foglalkozasok">
            <button className="px-8 py-3 bg-green-500 text-white font-bold rounded-lg hover:bg-green-600 transition-all duration-300 transform hover:shadow-lg hover:scale-105 cursor-pointer">
              Összes Fejlesztés Megtekintése
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
}
