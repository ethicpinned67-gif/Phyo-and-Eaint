"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Hero from "@/components/Hero";
import Venue from "@/components/Venue";
import Gallery from "@/components/Gallery";
import MusicPlayer from "@/components/MusicPlayer";
import InvitationCard from "@/components/InvitationCard";
import LoveNote from "@/components/LoveNote";
import { Phone } from "lucide-react";

export default function WeddingPage() {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpenInvitation = () => {
    setIsOpen(true);
    setTimeout(() => {
      document.getElementById("main-content")?.scrollIntoView({ behavior: "smooth" });
    }, 100);
  };

  return (
    <main className="min-h-screen bg-[#FAF7F2] text-stone-800 selection:bg-amber-100">
      <Hero onOpenInvitation={handleOpenInvitation} isOpen={isOpen} />

      <AnimatePresence>
        {isOpen && (
          <motion.div
            id="main-content"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <InvitationCard />
            <Venue />
            <Gallery />
            <LoveNote />

            {/* အောက်ဆုံး Footer - Design By Suprise & Phone */}
            <footer className="mt-12 py-10 text-center border-t border-stone-200/60">
              <p className="font-serif italic text-sm tracking-widest text-stone-500">
                Design By <span className="font-semibold text-stone-800 not-italic">Suprise</span>
              </p>

              {/* Design By Suprise အောက်ရှိ ဖုန်းနံပါတ် */}
              <div className="mt-2.5">
                <a
                  href="tel:09970360380"
                  className="inline-flex items-center gap-1.5 text-xs font-medium text-stone-500 hover:text-amber-800 transition-colors duration-200"
                >
                  <Phone className="h-3.5 w-3.5 text-amber-700/80" />
                  <span>09-970360380</span>
                </a>
              </div>

              <div className="mx-auto mt-4 h-0.5 w-6 bg-amber-600/25 rounded-full" />
            </footer>
          </motion.div>
        )}
      </AnimatePresence>

      <MusicPlayer />
    </main>
  );
}