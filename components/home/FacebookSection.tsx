export default function FacebookSection() {
  return (
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
            Maradj naprakész az összes legfrissebb híremmel, tippel és inspiráló
            tartalmakkal a gyermekfejlesztésről.
          </p>
          <p className="text-gray-700 text-lg text-center sm:text-left mb-4 leading-relaxed">
            Kövess minket a Facebookon, hogy részese legyél a közösségünknek és
            ne maradj le az aktualitásokról!
          </p>
        </div>

        {/* Facebook CTA */}
        <div className="flex justify-center lg:justify-end">
          <a
            href="https://facebook.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-3 bg-blue-600 text-white font-bold text-center rounded-lg hover:bg-blue-700 transition-all duration-300 transform hover:shadow-lg hover:scale-105 cursor-pointer"
          >
            Kövess a Facebookon
          </a>
        </div>
      </div>
    </div>
  );
}
