"use client";

import { motion } from "framer-motion";

export default function LoveNote() {
  return (
    <section className="py-20 px-6 bg-[#FAF7F2] text-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="max-w-xl mx-auto rounded-2xl border border-amber-200/60 bg-white/60 p-8 sm:p-12 shadow-sm backdrop-blur-sm"
      >
        <span className="text-2xl mb-4 block">🤍</span>
        <h3 className="font-serif text-2xl sm:text-3xl text-stone-800 tracking-wide font-light">
          With Love & Appreciation
        </h3>

        <div className="w-12 h-px bg-[#D4AF37] mx-auto my-6" />

        <p className="text-stone-600 text-sm sm:text-base leading-relaxed tracking-wide font-light">
          Our hearts are filled with gratitude for your love and blessings. It would mean so much to us to have you join us as we celebrate the beginning of our forever.
        </p>

        <p className="mt-8 text-xs sm:text-sm tracking-[0.2em] uppercase text-[#B8860B] font-medium">
          With warmest love, <br className="sm:hidden" />
          <span className="font-serif italic capitalize text-stone-700 tracking-normal text-base sm:text-lg">
            The Bride & Groom
          </span>
        </p>
      </motion.div>
    </section>
  );
}