export default function Rules() {
  const rules = [
    {
      emoji: "⏰",
      title: "Érkezés és távozás",
      points: [
        "Kérjük, érkezzenek pontos időben a foglalkozásra.",
        "A gyermekért a foglalkozás végén időben szükséges érkezni.",
        "A gyermeket minden esetben kísérő felnőtt adja át és veszi át.",
      ],
    },
    {
      emoji: "🤒",
      title: "Betegség és hiányzás",
      points: [
        "Beteg, lázas, köhögő vagy fertőző tüneteket mutató gyermeket nem tudunk fogadni.",
        "A gyermek csak teljesen tünetmentesen hozható vissza.",
        "Lemondás: legalább 3 órával előre.",
        "Aznapi lemondás (nem betegség miatt) a foglalkozás díjával terhelhető.",
      ],
    },
    {
      emoji: "🎈",
      title: "A foglalkozás menete",
      points: [
        "A foglalkozás alatt a gyermekkel csak a fejlesztést végző szakember tartózkodik.",
        "A szülők a foglalkozás ideje alatt az épület előtt vagy az udvaron várakozhatnak.",
        "Részletes megbeszélés külön egyeztetett időpontban lehetséges.",
      ],
    },
    {
      emoji: "👟",
      title: "Ruházat és felszerelés",
      points: [
        "A gyermek érkezzen kényelmes, mozgásra alkalmas ruhában.",
        "A hosszú hajat kérjük összefogni.",
        "A fejlesztő termekbe cipő nélkül lépünk be.",
      ],
    },
    {
      emoji: "🛡️",
      title: "Biztonság és felelősség",
      points: [
        "A foglalkozás idején a gyermekért a fejlesztő felel.",
        "A fejlesztőház területén okozott károk megtérítése a szülő felelőssége.",
        "A személyes tárgyakért nem tudunk felelősséget vállalni.",
      ],
    },
    {
      emoji: "💳",
      title: "Fizetési feltételek",
      points: [
        "A díjak rendezése a megbeszélt módon és ütemben történik.",
        "A lemondott vagy elmaradt alkalmak díjazása a fejlesztőház szabályzata szerint alakul.",
      ],
    },
    {
      emoji: "📷",
      title: "Képek, videók készítése",
      points: [
        "Felvétel készítése csak előzetes egyeztetéssel lehetséges.",
        "A gyermekről készült felvételek csak szülői beleegyezéssel használhatók bármilyen felületen.",
      ],
    },
    {
      emoji: "🤝",
      title: "Együttműködés és kommunikáció",
      points: [
        "Közös munkánk alapja a bizalom és nyitottság.",
        "Kérjük, jelezzenek minden fontos változást (alvás, gyógyszer, viselkedés stb.).",
        "Szakmai javaslatainkat mindig a gyermek érdekeit szem előtt tartva adjuk.",
      ],
    },
    {
      emoji: "📵",
      title: "Tér és idő tisztelete",
      points: [
        "A foglalkozás alatt kérjük, ne zavarják a szakmai munkát.",
        "Telefonhasználat csak az épület fejlesztőtértől távol, diszkréten javasolt.",
      ],
    },
  ];

  return (
    <section
      id="hazirend"
      className="py-20 bg-linear-to-br from-blue-50 to-indigo-50"
    >
      <div className="container mx-auto px-8 xl:px-24">
        {/* Header */}
        <div className="mb-16 text-center">
          <div className="inline-block mb-4">
            <span className="bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-[10px] sm:text-sm font-bold">
              🏡 Házirend
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-center text-gray-900 leading-tight mb-4">
            Apró Lépések Fejlesztőház{" "}
            <span className="text-blue-600">Házirendje</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Kérjük, olvasd el házirendi szabályainkat a zökkenőmentes és
            hatékony együttműködés érdekében.
          </p>
        </div>

        {/* Rules Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {rules.map((rule, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-shadow duration-300 p-6 border-4 border-blue-300"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="text-3xl">{rule.emoji}</span>
                <h3 className="text-lg font-bold text-gray-900">
                  {index + 1}. {rule.title}
                </h3>
              </div>
              <ul className="space-y-2">
                {rule.points.map((point, pointIndex) => (
                  <li
                    key={pointIndex}
                    className="text-sm text-gray-700 leading-relaxed flex items-start gap-2"
                  >
                    <span className="text-blue-500 mt-1 shrink-0">•</span>
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Closing Message */}
        <div className="text-center mt-12">
          <span className="text-4xl mb-4 block">🌱</span>
          <h3 className="text-2xl font-bold mb-3 text-gray-900">
            Záró gondolat
          </h3>
          <p className="text-lg leading-relaxed max-w-3xl mx-auto mb-2 text-gray-700">
            Köszönjük, hogy együttműködnek velünk!
          </p>
          <p className="text-base leading-relaxed max-w-3xl mx-auto text-gray-700">
            Célunk, hogy minden gyermek biztonságban, szeretetteljes közegben
            élhesse át a fejlődés örömét — mert az apró lépésekből lesznek a
            nagy előrelépések. 💛
          </p>
        </div>
      </div>
    </section>
  );
}
