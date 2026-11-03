"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Hero from "@/components/Hero";
import Venue from "@/components/Venue";
import Gallery from "@/components/Gallery";
import MusicPlayer from "@/components/MusicPlayer";
import InvitationCard from "@/components/InvitationCard";

export default function WeddingPage() {
  const [isOpen, setIsOpen] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);

  const handleOpenInvitation = () => {
    setIsOpen(true);
    setIsPlaying(true);

    // Browser က direct user click အဖြစ် ချက်ချင်းသိစေရန် တိုက်ရိုက် play ခိုင်းခြင်း
    const audio = document.getElementById("bg-audio") as HTMLAudioElement | null;
    if (audio) {
      audio.play().catch((e) => console.log("Direct play error:", e));
    }

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
          </motion.div>
        )}
      </AnimatePresence>

      {/* MusicPlayer ကို AnimatePresence အပြင်တွင် အမြဲ mount ထားပါ */}
      <MusicPlayer isPlaying={isPlaying} setIsPlaying={setIsPlaying} />
    </main>
  );
}