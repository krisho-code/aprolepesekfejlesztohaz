import Image from "next/image";

export default function TeamMember({
  name,
  specialization,
  description1,
  description2,
  description3,
  description4,
  emoji,
  image,
}: {
  name: string;
  specialization: string;
  description1?: string;
  description2?: string;
  description3?: string;
  description4?: string;
  emoji: string;
  image: string;
}) {
  return (
    <div className="bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-shadow duration-300 border-4 border-yellow-300 overflow-hidden">
      {/* Profile Picture */}
      <div className="relative w-full h-48 bg-yellow-50 overflow-hidden">
        <Image src={image} alt={name} fill className="object-cover" />
      </div>

      {/* Header with emoji */}
      <div className="bg-yellow-50 p-6 text-center">
        <div className="text-3xl mb-2">{emoji}</div>
        <h3 className="text-lg font-bold text-gray-900">{name}</h3>
        {/* <p className="text-yellow-600 font-semibold text-sm mt-1">
          {specialization}
        </p> */}
      </div>

      {/* Description */}
      <div className="p-6">
        <p className="text-sm text-center mb-4 text-gray-700 leading-relaxed">
          {description1}
        </p>
        <p className="text-sm text-center mb-4 text-gray-700 leading-relaxed">
          {description2}
        </p>
        <p className="text-sm text-center mb-4 text-gray-700 leading-relaxed">
          {description3}
        </p>
        <p className="text-sm text-center text-gray-700 leading-relaxed">
          {description4}
        </p>
      </div>
    </div>
  );
}
