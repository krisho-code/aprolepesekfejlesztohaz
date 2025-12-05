import React from "react";

interface GalleryImage {
  id: number;
  src: string;
  alt: string;
  borderColor: string;
  emoji: string;
  emojiBackground: string;
  rotation: string;
  scale: string;
}

const galleryImages: GalleryImage[] = [
  {
    id: 5,
    src: "/image5.png",
    alt: "Галерея 5",
    borderColor: "border-purple-300",
    emoji: "🎨",
    emojiBackground: "bg-purple-400",
    rotation: "-rotate-3",
    scale: "hover:scale-110",
  },
  {
    id: 6,
    src: "/image6.png",
    alt: "Галерея 6",
    borderColor: "border-green-300",
    emoji: "🌟",
    emojiBackground: "bg-green-400",
    rotation: "rotate-2",
    scale: "hover:scale-110",
  },
  {
    id: 7,
    src: "/image7.png",
    alt: "Галерея 7",
    borderColor: "border-pink-300",
    emoji: "💫",
    emojiBackground: "bg-pink-400",
    rotation: "-rotate-6",
    scale: "hover:scale-110",
  },
  {
    id: 8,
    src: "/image8.png",
    alt: "Галерея 8",
    borderColor: "border-yellow-300",
    emoji: "🎯",
    emojiBackground: "bg-yellow-400",
    rotation: "rotate-4",
    scale: "hover:scale-110",
  },
  {
    id: 9,
    src: "/image9.png",
    alt: "Галерея 9",
    borderColor: "border-blue-300",
    emoji: "🎪",
    emojiBackground: "bg-blue-400",
    rotation: "-rotate-2",
    scale: "hover:scale-110",
  },
  {
    id: 10,
    src: "/image10.png",
    alt: "Галерея 10",
    borderColor: "border-orange-300",
    emoji: "✨",
    emojiBackground: "bg-orange-400",
    rotation: "rotate-3",
    scale: "hover:scale-110",
  },
];

export default function GallerySection() {
  return (
    <section className="py-16 md:py-24 bg-white overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-purple-200 rounded-full blur-2xl opacity-10"></div>
      <div className="absolute bottom-20 right-10 w-40 h-40 bg-green-200 rounded-full blur-2xl opacity-10"></div>
      <div className="absolute top-1/2 left-1/2 w-48 h-48 bg-pink-200 rounded-full blur-3xl opacity-5 -z-10"></div>

      <div className="container mx-auto px-8 xl:px-24">
        {/* Header */}
        <div className="mb-16 text-center">
          <div className="inline-block mb-4">
            <span className="bg-pink-100 text-pink-700 px-4 py-2 rounded-full text-[10px] sm:text-sm font-bold">
              🖼️ Apró Lépések Galériája
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-gray-900 leading-tight mb-4">
            Az apró sikerek{" "}
            <span className="text-pink-500">nagy pillanatai</span>
          </h2>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto">
            Közös útjainkat fényképekben felmutatva – ahol kreatívitás, játék és
            fejlesztés találkozik
          </p>
        </div>

        {/* Gallery Grid - Playful Layout */}
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
          {galleryImages.map((image, index) => (
            <div
              key={image.id}
              className={`flex justify-center items-start ${
                index % 3 === 1 ? "lg:mt-12" : ""
              }`}
            >
              <div
                className={`relative ${image.rotation} transition-all duration-300 ${image.scale} group`}
              >
                {/* Main image card */}
                <div
                  className={`bg-white rounded-3xl shadow-lg p-3 sm:p-4 border-4 ${image.borderColor} transform transition-all duration-300 group-hover:shadow-2xl`}
                >
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="w-32 h-32 sm:w-40 sm:h-40 lg:w-56 lg:h-56 object-cover rounded-2xl"
                  />
                </div>

                {/* Floating emoji badge */}
                <div
                  className={`absolute -top-4 -right-4 ${image.emojiBackground} text-2xl rounded-full p-2 shadow-lg transform transition-transform duration-300 group-hover:rotate-12 group-hover:scale-125`}
                >
                  {image.emoji}
                </div>

                {/* Decorative dots */}
                <div className="absolute -bottom-2 -left-2 w-3 h-3 bg-purple-300 rounded-full opacity-60"></div>
                <div className="absolute -top-3 right-8 w-2 h-2 bg-green-300 rounded-full opacity-60"></div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom decorative text */}
        <div className="text-center mt-16">
          <p className="text-gray-600 text-lg font-semibold">
            Minden képben egy történet, minden pillanatban egy fejlődés 💗
          </p>
        </div>
      </div>
    </section>
  );
}
