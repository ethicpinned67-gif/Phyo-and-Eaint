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
  const [isPlaying, setIsPlaying] = useState(false); // 👈 သီချင်း အခြေအနေ

  const handleOpenInvitation = () => {
    setIsOpen(true);
    setIsPlaying(true); // 👈 ဖိတ်စာဖွင့်သည်နှင့် သီချင်း auto စတင်ဖွင့်မည်

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

            {/* Music Player ထံသို့ state များ ပေးပို့ပါ */}
            <MusicPlayer isPlaying={isPlaying} setIsPlaying={setIsPlaying} />
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
}