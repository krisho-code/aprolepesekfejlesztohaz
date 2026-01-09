import React from "react";

interface Document {
  id: number;
  title: string;
  filename: string;
  icon: string;
  description: string;
}

const documents: Document[] = [
  {
    id: 1,
    title: "Általános Szerződési Feltételek",
    filename: "altalanos_szerzodesi_feltetel_aprolepesekfejlesztohaz.docx",
    icon: "📄",
    description: "Szolgáltatásaink feltételei és szabályai",
  },
  {
    id: 2,
    title: "Szülői hozzájáruló nyilatkozat",
    filename:
      "szuloi_hozzajarulo_nyilatkozat_adatkezeleshez_aprolepesekfejlesztohaz.docx",
    icon: "✍️",
    description: "Adatkezelési hozzájárulás dokumentum",
  },
];

export default function Documents() {
  return (
    <section className="py-16 md:py-24 bg-white overflow-hidden relative">
      {/* Decorative elements */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-[#ffc9c3] rounded-full blur-2xl opacity-10"></div>
      <div className="absolute bottom-20 right-10 w-40 h-40 bg-[#ffc9c3] rounded-full blur-2xl opacity-10"></div>
      <div className="absolute top-1/2 left-1/2 w-48 h-48 bg-[#ffc9c3] rounded-full blur-3xl opacity-5 -z-10"></div>

      <div className="container mx-auto px-8 xl:px-24">
        {/* Header */}
        <div className="mb-16 text-center">
          <div className="inline-block mb-4">
            <span className="bg-[#ffe3dd] text-[#f4513f] px-4 py-2 rounded-full text-[10px] sm:text-sm font-bold">
              📋 Fontos dokumentumok
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-gray-900 leading-tight mb-4">
            Letölthető <span className="text-[#fe6f62]">dokumentumaink</span>
          </h2>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto">
            Az alábbiakban megtalálhatók a legfontosabb dokumentumaink, melyeket
            letölthetsz és elolvashatsz.
          </p>
        </div>

        {/* Documents Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 max-w-4xl mx-auto">
          {documents.map((doc) => (
            <a
              key={doc.id}
              href={`/docs/${doc.filename}`}
              download
              className="group bg-white rounded-2xl shadow-lg p-6 border-4 border-[#ffc9c3] transition-all duration-300 hover:shadow-2xl hover:border-[#fe6f62]"
            >
              {/* Content */}
              <div className="flex items-start gap-4">
                <div className="text-4xl">{doc.icon}</div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-[#fe6f62] transition-colors">
                    {doc.title}
                  </h3>
                  <p className="text-gray-600 text-sm mb-4">
                    {doc.description}
                  </p>

                  {/* Download button */}
                  <div className="flex items-center gap-2 text-[#fe6f62] font-semibold">
                    <svg
                      className="w-5 h-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                      />
                    </svg>
                    <span>Letöltés</span>
                  </div>
                </div>
              </div>
            </a>
          ))}
        </div>

        {/* Bottom decorative text */}
        <div className="text-center mt-16">
          <p className="text-gray-600 text-lg font-semibold">
            Kérdés esetén fordulj hozzánk bizalommal! 🧡
          </p>
        </div>
      </div>
    </section>
  );
}
