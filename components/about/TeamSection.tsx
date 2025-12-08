import TeamMember from "./TeamMember";

const teamMembers = [
  {
    name: "Dr. Nagy Éva",
    specialization: "Fejlesztőpedagógus",
    description:
      "20+ év tapasztalattal a gyermekfejlesztés területén. Személyre szabott fejlesztési programok tervezésében szakértő, valamint logopédiai ellátásban jártas.",
    emoji: "👩‍🏫",
    image: "/team1.png",
  },
  {
    name: "Kiss Márta",
    specialization: "Logopédus",
    description:
      "Beszédészlelési nehézségek diagnosztizálásában és fejlesztésében szaktekintéllyé vált. Gyermekközpontú megközelítésben hisz, amely játékon alapul.",
    emoji: "🎤",
    image: "/team2.png",
  },
  {
    name: "Szabó Péter",
    specialization: "Fizioterápia Szakember",
    description:
      "Mozgásfejlesztésben és terápiás mozgásban specializálódott. Sérülésspecifikus rehabilitáció és sensomotoros fejlesztésben jártas.",
    emoji: "🏃",
    image: "/team3.png",
  },
  {
    name: "Tóth Judit",
    specialization: "Óvodapedagógus & Jóga Instruktor",
    description:
      "Ovisoknak iskola-előkészítő és jóga foglalkozások vezetésében szakértő. A holisztikus gyermeknevelésnek és a mindfulness-nek a szószólója.",
    emoji: "🧘‍♀️",
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
            Ismerje meg a <span className="text-yellow-500">tanárainkat</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto mt-4">
            Tapasztalt és lelkes szakemberek, akik a gyermekek fejlődéséért
            dolgoznak
          </p>
        </div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {teamMembers.map((member, index) => (
            <TeamMember
              key={index}
              name={member.name}
              specialization={member.specialization}
              description={member.description}
              emoji={member.emoji}
              image={member.image}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
