import Link from "next/link";
import FacebookSection from "./FacebookSection";

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
              ✉️ Lépj Kapcsolatba!
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-gray-900 leading-tight mb-4">
            Várjuk a Te <span className="text-purple-600">üzeneteidet</span>
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Keress minket - szívesen segítünk! Vedd fel velünk a kapcsolatot
            vagy foglalj időpontot.
          </p>
        </div>

        {/* Contact Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {/* Phone Card */}
          <div className="p-6 bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-shadow duration-300 border-4 border-purple-300 flex flex-col items-center text-center">
            <div className="text-4xl mb-3">📞</div>
            <h3 className="text-lg font-bold text-gray-900 mb-2">Telefon</h3>
            <a
              href="tel:+36301234567"
              className="text-purple-600 hover:text-purple-700 font-semibold transition-colors"
            >
              +36 (30) 123-4567
            </a>
          </div>

          {/* Email Card */}
          <div className="p-6 bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-shadow duration-300 border-4 border-purple-300 flex flex-col items-center text-center">
            <div className="text-4xl mb-3">✉️</div>
            <h3 className="text-lg font-bold text-gray-900 mb-2">Email</h3>
            <a
              href="mailto:info@example.com"
              className="text-purple-600 hover:text-purple-700 font-semibold transition-colors"
            >
              info@example.com
            </a>
          </div>

          {/* Location Card */}
          <div className="p-6 bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-shadow duration-300 border-4 border-purple-300 flex flex-col items-center text-center">
            <div className="text-4xl mb-3">📍</div>
            <h3 className="text-lg font-bold text-gray-900 mb-2">Cím</h3>
            <p className="text-purple-600 font-semibold text-sm">
              1234 Budapest
              <br />
              Magyarország
            </p>
          </div>
        </div>

        {/* CTA Button Section */}
        <div className={`flex justify-center ${showFacebook ? "mb-16" : ""}`}>
          <Link href="/kapcsolat">
            <button className="px-8 py-3 bg-purple-400 text-white font-bold rounded-lg hover:bg-purple-500 transition-all duration-300 transform hover:shadow-lg hover:scale-105 cursor-pointer text-lg">
              Foglalj Időpontot
            </button>
          </Link>
        </div>

        {/* Facebook Section */}
        {showFacebook && <FacebookSection />}
      </div>
    </section>
  );
}
