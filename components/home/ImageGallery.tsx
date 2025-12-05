import React from "react";

interface ImageCard {
  id: number;
  src: string;
  alt: string;
  borderColor: string;
  emoji: string;
  emojiBackground: string;
  position: "top" | "bottom-left" | "bottom-right";
  emojiPosition?: "top-left" | "top-right";
}

const images: ImageCard[] = [
  {
    id: 1,
    src: "/image1.png",
    alt: "Fejlesztés 1",
    borderColor: "border-orange-300",
    emoji: "😊",
    emojiBackground: "bg-yellow-300",
    position: "top",
    emojiPosition: "top-right",
  },
  {
    id: 2,
    src: "/image2.png",
    alt: "Fejlesztés 2",
    borderColor: "border-blue-300",
    emoji: "🎉",
    emojiBackground: "bg-pink-300",
    position: "bottom-left",
    emojiPosition: "top-left",
  },
  {
    id: 3,
    src: "/image3.png",
    alt: "Fejlesztés 3",
    borderColor: "border-green-300",
    emoji: "⭐",
    emojiBackground: "bg-purple-300",
    position: "bottom-right",
    emojiPosition: "top-right",
  },
];

export default function ImageGallery() {
  const getPositionClasses = (position: string) => {
    switch (position) {
      case "top":
        return "top-0 left-1/2 transform -translate-x-1/2 z-30";
      case "bottom-left":
        return "bottom-0 left-0 top-32";
      case "bottom-right":
        return "bottom-0 right-0";
      default:
        return "";
    }
  };

  const getEmojiClasses = (emojiPosition?: string) => {
    switch (emojiPosition) {
      case "top-left":
        return "-top-3 -left-3";
      case "top-right":
        return "-top-3 -right-3";
      default:
        return "-top-3 -right-3";
    }
  };

  return (
    <div className="relative h-full min-h-96 lg:min-h-full flex items-center justify-center">
      <div className="relative w-full h-64">
        {images.map((image) => (
          <div
            key={image.id}
            className={`absolute ${getPositionClasses(
              image.position
            )} hover:scale-110 transition-transform duration-300`}
          >
            <div
              className={`bg-white rounded-2xl shadow-xl p-3 border-4 ${image.borderColor}`}
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-36 h-36 sm:w-40 sm:h-40 object-cover rounded-lg"
              />
            </div>
            <div
              className={`absolute ${getEmojiClasses(image.emojiPosition)} ${
                image.emojiBackground
              } text-2xl rounded-full p-2 shadow-md`}
            >
              {image.emoji}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
