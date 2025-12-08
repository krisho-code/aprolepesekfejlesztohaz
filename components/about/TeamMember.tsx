import Image from "next/image";

export default function TeamMember({
  name,
  specialization,
  description,
  emoji,
  image,
}: {
  name: string;
  specialization: string;
  description: string;
  emoji: string;
  image: string;
}) {
  return (
    <div className="bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow border-2 border-yellow-300 overflow-hidden">
      {/* Profile Picture */}
      <div className="relative w-full h-48 bg-yellow-50 overflow-hidden">
        <Image src={image} alt={name} fill className="object-cover" />
      </div>

      {/* Header with emoji */}
      <div className="bg-yellow-50 p-4 text-center">
        <div className="text-3xl mb-2">{emoji}</div>
        <h3 className="text-lg font-bold text-gray-900">{name}</h3>
        <p className="text-yellow-600 font-semibold text-sm mt-1">
          {specialization}
        </p>
      </div>

      {/* Description */}
      <div className="p-4">
        <p className="text-gray-600 text-xs leading-relaxed">{description}</p>
      </div>
    </div>
  );
}
