"use client";

import { useMemo } from "react";
import { motion } from "framer-motion";
import { ArrowDown, MapPin } from "lucide-react";
import confetti from "canvas-confetti";
import CountdownTimer from "@/components/CountdownTimer";

const weddingDate = "2026-11-28T14:00:00+06:30";

interface HeroProps {
  onOpenInvitation?: () => void;
  isOpen?: boolean;
}

export default function Hero({ onOpenInvitation, isOpen }: HeroProps) {
  const petals = useMemo(
    () =>
      Array.from({ length: 16 }, (_, index) => ({
        left: `${(index * 37 + 8) % 100}%`,
        delay: `${(index % 8) * -1.7}s`,
        duration: `${12 + (index % 5) * 2}s`,
      })),
    []
  );

  function celebrate() {
    confetti({
      particleCount: 90,
      spread: 65,
      origin: { y: 0.75 },
      colors: ["#D4AF37", "#F5EFEB", "#E6B9B2", "#FFFFFF"],
    });

    if (onOpenInvitation) {
      onOpenInvitation();
    }

    document.getElementById("story")?.scrollIntoView({ behavior: "smooth" });
  }

  return (
    <section className="relative flex min-h-[100svh] flex-col overflow-hidden bg-[#292524] text-center text-white">
      <div
        className="absolute inset-0 bg-cover bg-center opacity-55"
        style={{
          backgroundImage:
            "linear-gradient(180deg,rgba(30,25,22,.12),rgba(30,25,22,.78)),url('/hero-bg.jpg')",
        }}
      />
      {petals.map((petal, index) => (
        <span
          key={index}
          aria-hidden="true"
          className="petal"
          style={{
            left: petal.left,
            animationDelay: petal.delay,
            animationDuration: petal.duration,
          }}
        />
      ))}
      <div className="relative z-10 flex flex-1 flex-col items-center justify-center px-5 pb-12 pt-16">
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9 }}
          className="section-kicker text-[#E8D8B6]"
        >
          Together with our families
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.15 }}
          className="font-display mt-5 text-[3.8rem] font-light leading-[0.83] tracking-[-0.06em] sm:mt-7 sm:text-8xl md:text-9xl"
        >
          Phyo <span className="block py-3 text-[2rem] italic text-[#D4AF37] sm:text-4xl">&</span> Eaint
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="mt-5 max-w-xs text-[10px] leading-5 tracking-[0.14em] text-white/80 sm:mt-7 sm:text-sm sm:leading-6"
        >
          REQUEST THE PLEASURE OF YOUR COMPANY
          <br />
          AS WE BEGIN OUR FOREVER
        </motion.p>
        <div className="mt-6 flex items-center gap-2 text-sm text-white/80 sm:mt-9">
          <MapPin size={14} strokeWidth={1.5} className="text-[#D4AF37]" />
          <span>Yangon, Myanmar</span>
        </div>
        <div className="my-5 h-px w-12 bg-[#D4AF37]/70 sm:my-8" />

        <p className="mb-3 text-[10px] uppercase tracking-[0.24em] text-white/70 sm:mb-5">
          Saturday · 28 November · 2026 · 2:00 PM - 4:00 PM
        </p>

        <CountdownTimer date={weddingDate} />

        {!isOpen && (
          <button
            onClick={celebrate}
            className="mt-6 inline-flex items-center gap-3 rounded-full border border-white/55 px-7 py-3 text-[10px] font-medium uppercase tracking-[0.18em] transition hover:border-[#D4AF37] hover:bg-[#D4AF37] hover:text-[#292524] sm:mt-10"
          >
            Open Invitation <ArrowDown size={14} />
          </button>
        )}
      </div>
      <span className="relative z-10 pb-5 text-[9px] tracking-[0.25em] text-white/45">
        SCROLL TO EXPLORE
      </span>
    </section>
  );
}