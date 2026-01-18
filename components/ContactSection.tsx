import Link from "next/link";

interface ContactSectionProps {
  showFacebook?: boolean;
}

export default function ContactSection({
  showFacebook = true,
}: ContactSectionProps) {
  return (
    <section
      id="kapcsolat"
      className="py-24 bg-linear-to-br from-purple-50 to-purple-100"
    >
      <div className="container mx-auto px-8 xl:px-24">
        <div className="text-center mb-16">
          <div className="inline-block mb-4">
            <span className="bg-purple-100 text-purple-700 px-4 py-2 rounded-full text-[10px] sm:text-sm font-bold">
              ✉️ Lépjünk Kapcsolatba!
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-gray-900 leading-tight mb-4">
            Várjuk a Te <span className="text-purple-600">üzeneteidet</span>
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Keress minket - szívesen segítünk! Vedd fel velünk a kapcsolatot
            további információkért vagy foglalj időpontot felméréshez.
          </p>
        </div>

        {/* Contact Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {/* Phone Card */}
          <div className="p-6 bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-shadow duration-300 border-4 border-purple-300 flex flex-col items-center text-center">
            <div className="text-4xl mb-3">📞</div>
            <h3 className="text-lg font-bold text-gray-900 mb-2">Telefon</h3>
            <a
              href="tel:+36 20 558 6148"
              className="text-purple-600 hover:text-purple-700 font-semibold transition-colors"
            >
              +36 20 558 6148
            </a>
          </div>

          {/* Email Card */}
          <div className="p-6 bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-shadow duration-300 border-4 border-purple-300 flex flex-col items-center text-center md:col-span-2 lg:col-span-1 md:order-3 lg:order-2">
            <div className="text-4xl mb-3">✉️</div>
            <h3 className="text-lg font-bold text-gray-900 mb-2">Email</h3>
            <a
              href="mailto:aprolepesekfejlesztohaz@gmail.com"
              className="text-purple-600 hover:text-purple-700 font-semibold transition-colors"
            >
              aprolepesekfejlesztohaz@gmail.com
            </a>
          </div>

          {/* Location Card */}
          <div className="p-6 bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-shadow duration-300 border-4 border-purple-300 flex flex-col items-center text-center">
            <div className="text-4xl mb-3">📍</div>
            <h3 className="text-lg font-bold text-gray-900 mb-2">Cím</h3>
            <a
              href="https://www.google.com/maps/place/Apr%C3%B3+L%C3%A9p%C3%A9sek+Fejleszt%C5%91h%C3%A1z/@47.6499997,19.025381,19.58z/data=!4m6!3m5!1s0x4741d6324987bba7:0xd7f77d9dc075475c!8m2!3d47.6502994!4d19.0255918!16s%2Fg%2F11hyt0s8nf?hl=hu&entry=ttu&g_ep=EgoyMDI1MTIwOS4wIKXMDSoKLDEwMDc5MjA3M0gBUAM%3D"
              target="_blank"
              className="text-purple-600 font-semibold text-sm"
            >
              2013 Pomáz, Sicambria utca 2.
            </a>
          </div>
        </div>

        {/* CTA Button Section */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-center md:space-x-3 gap-4 md:gap-0">
          <div className="flex justify-center">
            <a href="mailto:aprolepesekfejlesztohaz@gmail.com">
              <button className="px-8 py-3 bg-purple-400 text-white font-bold rounded-lg hover:bg-purple-500 transition-all duration-300 transform hover:shadow-lg hover:scale-105 cursor-pointer text-lg">
                Írj nekünk
              </button>
            </a>
          </div>
          <div className="flex justify-center">
            <Link
              href="https://calendar.app.google/28d7xLLmKt9VPnci8"
              target="_blank"
            >
              <button className="px-8 py-3 bg-transparent text-purple-400 border-2 border-purple-400 font-bold rounded-lg hover:bg-white transition-all duration-300 transform hover:shadow-lg hover:scale-105 cursor-pointer text-lg">
                Foglalj Időpontot
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
