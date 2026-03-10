"use client";

import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { useCallback, useEffect, useState } from "react";
import Image from "next/image";

const screenshots = [
  { src: "/images/screenshots/screenshot-1.jpg", alt: "Screenshot 1" },
  { src: "/images/screenshots/screenshot-2.png", alt: "Screenshot 2" },
  { src: "/images/screenshots/screenshot-3.png", alt: "Screenshot 3" },
  { src: "/images/screenshots/screenshot-4.png", alt: "Screenshot 4" },
  { src: "/images/screenshots/screenshot-5.png", alt: "Screenshot 5" },
  { src: "/images/screenshots/screenshot-6.png", alt: "Screenshot 6" },
  { src: "/images/screenshots/screenshot-7.png", alt: "Screenshot 7" },
];

export default function AppCarousel() {
  const [emblaRef, emblaApi] = useEmblaCarousel(
    {
      loop: true,
      align: "center",
      slidesToScroll: 1,
    },
    [Autoplay({ delay: 3000, stopOnInteraction: false })]
  );

  const [selectedIndex, setSelectedIndex] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState<number[]>([]);

  const onDotClick = useCallback(
    (index: number) => {
      if (!emblaApi) return;
      emblaApi.scrollTo(index);
    },
    [emblaApi]
  );

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    setScrollSnaps(emblaApi.scrollSnapList());
    emblaApi.on("select", onSelect);
    onSelect();
    return () => {
      emblaApi.off("select", onSelect);
    };
  }, [emblaApi, onSelect]);

  return (
    <div className="mx-auto max-w-md px-4">
      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex">
          {screenshots.map((shot, index) => (
            <div
              key={index}
              className="min-w-0 flex-shrink-0 flex-grow-0 basis-full"
            >
              <div className="flex items-center justify-center">
                {/* Phone frame */}
                <div
                  className="relative mx-auto"
                  style={{
                    width: "280px",
                    padding: "12px",
                    backgroundColor: "#1a1a1a",
                    borderRadius: "36px",
                    boxShadow:
                      "0 25px 50px -12px rgba(0,0,0,0.25), inset 0 0 0 2px #333",
                  }}
                >
                  {/* Notch */}
                  <div
                    className="absolute left-1/2 top-0 -translate-x-1/2"
                    style={{
                      width: "120px",
                      height: "24px",
                      backgroundColor: "#1a1a1a",
                      borderRadius: "0 0 16px 16px",
                      zIndex: 10,
                    }}
                  />
                  {/* Screen */}
                  <div
                    className="overflow-hidden"
                    style={{ borderRadius: "24px" }}
                  >
                    <Image
                      src={shot.src}
                      alt={shot.alt}
                      width={256}
                      height={512}
                      className="h-auto w-full"
                    />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Dots */}
      <div className="mt-6 flex items-center justify-center gap-2">
        {scrollSnaps.map((_, index) => (
          <button
            key={index}
            type="button"
            onClick={() => onDotClick(index)}
            className={`h-3 w-3 rounded-full transition-colors ${
              index === selectedIndex
                ? "bg-primary"
                : "bg-gray-300 hover:bg-gray-400"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
