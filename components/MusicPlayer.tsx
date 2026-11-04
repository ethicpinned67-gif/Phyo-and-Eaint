"use client";

import { useEffect, useState } from "react";
import { Volume2, VolumeX } from "lucide-react";

export default function MusicPlayer() {
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    const audio = document.getElementById("bg-audio") as HTMLAudioElement | null;
    if (!audio) return;

    const handlePlay = () => setIsPlaying(true);
    const handlePause = () => setIsPlaying(false);

    audio.addEventListener("play", handlePlay);
    audio.addEventListener("pause", handlePause);

    return () => {
      audio.removeEventListener("play", handlePlay);
      audio.removeEventListener("pause", handlePause);
    };
  }, []);

  const toggleMusic = () => {
    const audio = document.getElementById("bg-audio") as HTMLAudioElement | null;
    if (!audio) return;

    if (audio.paused) {
      audio.play().catch((err) => console.log(err));
    } else {
      audio.pause();
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex items-center gap-3 rounded-full bg-white/90 px-4 py-2 shadow-lg backdrop-blur-md border border-stone-200">
      {/* တစ်ခုတည်းသော audio element */}
      
      <audio id="bg-audio" src="/music.mp3?v=2" loop preload="auto" playsInline  />

      <span className="text-xs font-medium text-stone-700">
        {isPlaying ? "Playing our song" : "Tap to play our song"}
      </span>
      <button
        type="button"
        onClick={toggleMusic}
        className="flex h-10 w-10 items-center justify-center rounded-full bg-[#D4AF37] text-white shadow-md transition hover:scale-105 active:scale-95"
        aria-label="Toggle music"
      >
        {isPlaying ? <Volume2 size={18} /> : <VolumeX size={18} />}
      </button>
    </div>
  );
}