import React, { useState } from "react";
import Image from "next/image";

export default function Gallery() {
  const galleryImages = [
    {
      id: 0,
      src: "/pexels-cottonbro-9245155.jpg",
      alt: "Cleaning staff with supplies",
      desc: "Teams that get the job done."
    },
    {
      id: 1,
      src: "/pexels-tima-miroshnichenko-6195888.jpg",
      alt: "Professional cleaning in progress",
      desc: "Professionalism is our expertise."
    },
    {
      id: 2,
      src: "/pexels-tima-miroshnichenko-6196231.jpg",
      alt: "Cleaner with vacuum in modern home",
      desc: "Prestine cleaning for all areas."
    },
    {
      id: 3,
      src: "/pexels-tima-miroshnichenko-6872581.jpg",
      alt: "Cleaning equipment closeup",
      desc: "High class equipment."
    },
    {
      id: 4,
      src: "/pexels-tima-miroshnichenko-6873023.jpg",
      alt: "Cleaning service at work",
      desc: "High standards. Emphasis on quality."
    },
  ];

  const [current, setCurrent] = useState(0);
  const total = galleryImages.length;

  const goToPrev = () => setCurrent((prev) => (prev - 1 + total) % total);
  const goToNext = () => setCurrent((prev) => (prev + 1) % total);

  return (
    <div className="flex flex-col items-center justify-center w-full py-8 my-14 ">
      <div className="relative w-full bg-transparent h-screen min-h-[300px] max-h-[80vh] md:bg-gray-900/75 flex items-center justify-center overflow-hidden md:border-t-4 md:border-b-4 md:border-b-blue-500 md:border-t-blue-200 shadow-2xl">
        <button
          onClick={goToPrev}
          className="absolute left-4 invisible md:visible z-10 text-2xl bg-white/80 hover:bg-white/90 text-gray-900 rounded-full px-4  py-2 shadow-md focus:outline-none top-1/2 -translate-y-1/2"
          aria-label="Previous image"
        >
          &#8592;
        </button>
        <div className="relative w-full h-full">
          <Image
            src={galleryImages[current].src}
            alt={galleryImages[current].alt}
            fill
            className="object-contain md:object-cover"
            priority
          />
          <p className="z-50 text-2xl md:text-3xl absolute bottom-0 left-1/2 -translate-x-1/2 w-full text-center bg-black/50 text-white py-4 m-0 flex flex-row items-center justify-center" style={{ fontFamily: 'Eagle Lake, Edu NSW ACT Cursive, cursive' }}>
            <span className="inline text-4xl text-white/70 select-none align-top">&ldquo;</span>
            <span className="inline-block px-2 align-middle">{galleryImages[current].desc}</span>
            <span className="inline text-4xl text-white/70 select-none align-bottom">&rdquo;</span>
          </p>
        </div>
        <button
          onClick={goToNext}
          className="absolute invisible md:visible right-4 z-10 bg-white/80 hover:bg-white/90 text-gray-900 rounded-full text-2xl px-4 py-2 shadow-md focus:outline-none top-1/2 -translate-y-1/2"
          aria-label="Next image"
        >
          &#8594;
        </button>
      </div>
      <div className="flex justify-center mt-4 gap-2 visible md:invisible">
        {galleryImages.map((img, idx) => (
          <button
            key={img.id}
            onClick={() => setCurrent(idx)}
            className={`h-4 w-4 rounded-full ${idx === current ? 'bg-blue-500' : 'bg-white'} transition-colors`}
            aria-label={`Go to image ${idx + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
