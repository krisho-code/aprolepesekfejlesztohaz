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

        {/* Services Overview - Simplified */}
        <div className="max-w-3xl mx-auto text-center space-y-6 text-gray-700 leading-relaxed">
          <p className="text-lg font-medium text-orange-900">
            Az Apró Lépések Fejlesztőházban a gyermekek holistic fejlesztésén
            dolgozunk.
          </p>

          <p className="text-base">
            Foglalkozásaink az utolsó néhány évtized szakértelmének és a
            legújabb fejlesztési módszerek kombinációjából születtek. Csecsemő
            kortól 16 éves korig támogatjuk gyermekek fizikai, kognitív, érzelmi
            és szociális fejlődését.
          </p>

          <p className="text-base">
            Minden foglalkozás személyre szabott – az egyes gyermek egyedi
            szükségleteihez és képességeihez igazított. Munkánk során figyelmet
            fordítunk a prevencióra, a felmérésen alapuló korrekciót, valamint a
            tehetséggondozásra.
          </p>
        </div>
      </div>
    </section>
  );
}
