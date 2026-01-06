import TeamMember from "./TeamMember";

const teamMembers = [
  {
    name: "Szabó-Bodnár Fanni Kinga",
    specialization: "Gyógypedagógus",
    description1:
      "Négy éve dolgozom az Apró Lépések Fejlesztőházban édesanyámmal és nővéremmel közösen. A gyermekek világa mindig is közel állt hozzám – már kora gyermekkoromban természetes volt számomra, hogy gyerekek vesznek körül, és könnyen megtalálom velük a hangot.",
    description2:
      "Különösen az óvodás és kisiskolás korosztály áll közel a szívemhez: velük gyorsan kialakul a bizalom, és jól érzem az egyensúlyt a játékosság és a fejlesztési célok között. Fontos számomra, hogy a gyerekek biztonságban, elfogadva és örömmel vegyenek részt a foglalkozásokon.",
    description3:
      "Sokat tanultam és tanulok ma is édesanyámtól és nővéremtől, ugyanakkor nagy hangsúlyt fektetek a folyamatos szakmai fejlődésre és önképzésre, hogy a mindennapi munkámban naprakész, a gyermekek egyéni szükségleteihez igazodó megoldásokat tudjak alkalmazni.",
    description4:
      "Hároméves kislányom édesanyjaként a szülői nézőpont is szerves része lett a szemléletemnek, ami tovább erősíti bennem az empátiát és a megértést a családok felé.",
    emoji: "👩‍🏫",
    image: "/team1.png",
  },
  {
    name: "Bodnár Katalin",
    specialization: "Gyógypedagógus",
    description1:
      "Gyógypedagógus, tanító, alapozó terapeuta, gyerekjóga oktató és beszédpercepciós fejlesztő vagyok – de ami a legfontosabb: négy gyermek édesanyja. Hiszek benne, hogy minden gyermek különleges, egyedi értékekkel születik, és minden apró lépés egy hatalmas fejlődés része.",
    description2:
      "2007 óta foglalkozom gyermekek és családok támogatásával. Számomra ez nem munka, hanem hivatás – feltölt, inspirál, és folyamatosan arra ösztönöz, hogy még több tudást adjak tovább. A gyermekekkel való közös munka során mindig arra törekszem, hogy a fejlesztés játékos, mégis célzott legyen, és a gyermekek örömmel vegyenek részt a foglalkozásokon.",
    description3:
      "Jelenleg a Bárczi Gusztáv EGYMI munkatársaként is dolgozom, ahol szakmai elhivatottságom minden nap megélhetem. Fontos számomra, hogy a családokkal való együttműködés során támogató, elfogadó légkört teremtsek, ahol a szülők is aktív részesei lehetnek a gyermekek fejlődési folyamatának.",
    description4:
      "Négy gyermek édesanyjaként a szülői tapasztalatok mélyen beépültek a szakmai szemléletembe. Hiszem, hogy a gyermekek fejlődéséhez nemcsak szakmai tudásra, hanem empátiára, türelemre és a családokkal való szoros együttműködésre is szükség van. Ez a komplex szemlélet az, ami minden nap motivál és előre visz a munkámban.",
    emoji: "👩‍🏫",
    image: "/team2.png",
  },
  {
    name: "Bodnár Eszter",
    specialization: "Gyógypedagógus",
    description1:
      "Gyógypedagógusként – értelmileg akadályozottak pedagógiája és szomatopedagógia szakirányon – valamint alapozó terápiás fejlesztőként és TSMT terapeutaként hosszú évek óta foglalkozom sajátos nevelési igényű gyermekek fejlesztésével. Három gyermek édesanyjaként a szakmai tudás mellett a szülői tapasztalat is meghatározó része a szemléletemnek.",
    description2:
      "Édesanyámmal közösen álmodtuk meg az Apró Lépések Fejlesztőházat, azzal a céllal, hogy egy olyan biztonságos, támogató közeget hozzunk létre, ahol a gyermekek fejlődése valóban a középpontban áll, és a családok is segítséget, megértést kapnak. A kezdetektől fontos számunkra, hogy széles körű, egymásra épülő ellátást tudjunk biztosítani a hozzánk forduló gyermekek és szüleik számára.",
    description3:
      "Jelenleg a Bárczi Gusztáv EGYMI Tagintézményének vezetőjeként dolgozom, így az Apró Lépések Fejlesztőházban elsősorban szakmai háttértámogatással, szemléletformálással és teammunkával segítem a közös munkát. Hiszem, hogy a fejlődéshez nemcsak módszerekre, hanem elfogadó kapcsolatokra, bizalomra és együtt gondolkodó szakemberekre van szükség.",
    description4: "",
    emoji: "👩‍🏫",
    image: "/team4.png",
  },
];

export default function TeamSection() {
  return (
    <section id="csapat" className="py-16 bg-white">
      <div className="container mx-auto px-8 xl:px-24">
        {/* Header */}
        <div className="mb-12 text-center">
          <div className="inline-block mb-4">
            <span className="bg-yellow-100 text-yellow-700 px-4 py-2 rounded-full text-[10px] sm:text-sm font-bold">
              👥 Csapatunk
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-center text-gray-900 leading-tight">
            Ismerd meg a <span className="text-yellow-500">csapatunkat</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto mt-4">
            Tapasztalt és lelkes szakemberek, akik a gyermekek fejlődéséért
            dolgoznak
          </p>
        </div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {teamMembers.map((member, index) => (
            <TeamMember
              key={index}
              name={member.name}
              specialization={member.specialization}
              description1={member.description1}
              description2={member.description2}
              description3={member.description3}
              description4={member.description4}
              emoji={member.emoji}
              image={member.image}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
