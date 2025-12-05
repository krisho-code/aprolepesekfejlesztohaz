import Link from "next/link";

export default function ContactSection() {
  return (
    <section
      id="kapcsolat"
      className="py-24 bg-linear-to-br from-purple-50 to-purple-100"
    >
      <div className="container mx-auto px-8 xl:px-24">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Kapcsolatok
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Keress minket - szívesen segítünk! Vedd fel velünk a kapcsolatot
            vagy foglalj időpontot.
          </p>
        </div>

        {/* Contact Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {/* Phone Card */}
          <div className="p-6 bg-orange-100 rounded-lg border-2 border-orange-200 hover:shadow-lg transition-shadow duration-300 flex flex-col items-center text-center">
            <div className="text-4xl mb-3">📞</div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">
              Telefon
            </h3>
            <a
              href="tel:+36301234567"
              className="text-orange-600 hover:text-orange-700 font-semibold transition-colors"
            >
              +36 (30) 123-4567
            </a>
          </div>

          {/* Email Card */}
          <div className="p-6 bg-orange-100 rounded-lg border-2 border-orange-200 hover:shadow-lg transition-shadow duration-300 flex flex-col items-center text-center">
            <div className="text-4xl mb-3">✉️</div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Email</h3>
            <a
              href="mailto:info@example.com"
              className="text-orange-600 hover:text-orange-700 font-semibold transition-colors"
            >
              info@example.com
            </a>
          </div>

          {/* Location Card */}
          <div className="p-6 bg-orange-100 rounded-lg border-2 border-orange-200 hover:shadow-lg transition-shadow duration-300 flex flex-col items-center text-center">
            <div className="text-4xl mb-3">📍</div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Cím</h3>
            <p className="text-orange-600 font-semibold text-sm">
              1234 Budapest
              <br />
              Magyarország
            </p>
          </div>
        </div>

        {/* CTA Button Section */}
        <div className="flex justify-center mb-16">
          <Link href="#">
            <button className="px-8 py-3 bg-orange-400 text-white font-bold rounded-lg hover:bg-orange-500 transition-all duration-300 transform hover:shadow-lg hover:scale-105 cursor-pointer text-lg">
              Foglalj Időpontot
            </button>
          </Link>
        </div>

        {/* Facebook Section */}
        <div className="bg-indigo-50 border-2 border-blue-200 rounded-2xl p-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Facebook Content */}
            <div>
              <div className="flex flex-col sm:flex-row items-center gap-3 mb-6">
                <div className="w-12 h-12 shrink-0 bg-blue-600 rounded-lg flex items-center justify-center text-4xl font-bold text-white">
                  f
                </div>
                <h3 className="text-3xl text-center sm:text-left md:text-4xl font-bold text-gray-900">
                  Csatlakozz a Közösségünkhöz!
                </h3>
              </div>
              <p className="text-gray-700 text-lg text-center sm:text-left mb-4 leading-relaxed">
                Maradj naprakész az összes legfrissebb híremmel, tippel és
                inspiráló tartalmakkal a gyermekfejlesztésről.
              </p>
              <p className="text-gray-700 text-lg text-center sm:text-left mb-4 leading-relaxed">
                Kövess minket a Facebookon, hogy részese legyél a közösségünknek
                és ne maradj le az aktualitásokról!
              </p>
            </div>

            {/* Facebook CTA */}
            <div className="flex justify-center lg:justify-end">
              <a
                href="https://facebook.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-3 bg-blue-600 text-white font-bold rounded-lg hover:bg-blue-700 transition-all duration-300 transform hover:shadow-lg hover:scale-105 cursor-pointer"
              >
                Kövess a Facebookon
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
