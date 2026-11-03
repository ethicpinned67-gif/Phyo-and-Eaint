"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Hero from "@/components/Hero";
import Timeline from "@/components/Timeline";
import Venue from "@/components/Venue";
import Gallery from "@/components/Gallery";
import MusicPlayer from "@/components/MusicPlayer";
import InvitationCard from "@/components/InvitationCard"; // 👈 ဒီနေရာမှာ import ထည့်ပါ

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
            {/* ဖိတ်စာ ကတ်ပြားကို Timeline မတိုင်မီ ပြသထားပါသည် */}
            <InvitationCard />

            <Timeline />
            <Venue />
            <Gallery />

            <MusicPlayer />
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
}