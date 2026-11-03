"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronLeft, ChevronRight, X } from "lucide-react";

const photos = [
  { src: "/gallery-1.jpg", alt: "Wedding Memory 1" },
  { src: "/gallery-2.jpg", alt: "Wedding Memory 2" },
  { src: "/gallery-3.jpg", alt: "Wedding Memory 3" },

];

export default function Gallery() {
  const [active, setActive] = useState<number | null>(null);

  function move(direction: number) {
    setActive((current) =>
      current === null ? null : (current + direction + photos.length) % photos.length
    );
  }

  useEffect(() => {
    if (active === null) return;
    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") setActive(null);
      if (event.key === "ArrowRight") move(1);
      if (event.key === "ArrowLeft") move(-1);
    }
    window.addEventListener("keydown", onKeyDown);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = "";
    };
  }, [active]);

  return (
    <section id="gallery" className="bg-[#FAF7F2] px-5 py-24 sm:px-8 sm:py-28">
      <div className="mx-auto max-w-6xl">
        <div className="mb-10 text-center">
          <p className="section-kicker">A few favorite moments</p>
          <h2 className="font-display mt-4 text-5xl font-light sm:text-6xl">Our memories</h2>
        </div>
        <div className="grid auto-rows-[180px] grid-cols-2 gap-3 sm:auto-rows-[230px] sm:gap-4 md:grid-cols-4">
          {photos.map((photo, index) => (
            <button
              type="button"
              onClick={() => setActive(index)}
              key={photo.src}
              aria-label={`View photo: ${photo.alt}`}
              className="group relative overflow-hidden rounded-xl bg-stone-200"
            >
              {/* Local image ကို တိုက်ရိုက်ခေါ်ယူရန် photo.src ဟုသာ ထားပါ */}
              <img
                src={photo.src}
                alt={photo.alt}
                className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                loading="lazy"
              />
            </button>
          ))}
        </div>
      </div>
      <AnimatePresence>
        {active !== null && (
          <motion.div
            role="dialog"
            aria-modal="true"
            aria-label="Photo viewer"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setActive(null)}
            className="fixed inset-0 z-[60] flex items-center justify-center bg-black/90 p-4 sm:p-10"
          >
            <button
              onClick={() => setActive(null)}
              aria-label="Close gallery"
              className="absolute right-5 top-5 text-white"
            >
              <X size={24} />
            </button>
            <button
              onClick={(event) => {
                event.stopPropagation();
                move(-1);
              }}
              aria-label="Previous photo"
              className="absolute left-3 z-10 rounded-full bg-white/10 p-3 text-white hover:bg-white/20 sm:left-8"
            >
              <ChevronLeft />
            </button>
            {/* Modal ထဲတွင်လည်း photo.src ကို တိုက်ရိုက်ပြသခြင်း */}
            <img
              onClick={(event) => event.stopPropagation()}
              src={photos[active].src}
              alt={photos[active].alt}
              className="max-h-[85vh] max-w-full rounded-lg object-contain shadow-2xl"
            />
            <button
              onClick={(event) => {
                event.stopPropagation();
                move(1);
              }}
              aria-label="Next photo"
              className="absolute right-3 z-10 rounded-full bg-white/10 p-3 text-white hover:bg-white/20 sm:right-8"
            >
              <ChevronRight />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}