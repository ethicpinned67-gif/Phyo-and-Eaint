"use client";

import { useEffect, useRef } from "react";
import { Volume2, VolumeX } from "lucide-react";

interface MusicPlayerProps {
  isPlaying: boolean;
  setIsPlaying: (playing: boolean) => void;
}

export default function MusicPlayer({ isPlaying, setIsPlaying }: MusicPlayerProps) {
  const audioRef = useRef<HTMLAudioElement | null>(null);

  // ဖိတ်စာဖွင့်လိုက်သည့်အခါ သို့မဟုတ် isPlaying ပြောင်းလဲသည့်အခါ auto ဖွင့်/ပိတ်ပေးခြင်း
  useEffect(() => {
    if (!audioRef.current) return;

    if (isPlaying) {
      audioRef.current
        .play()
        .catch((error) => {
          console.log("Audio play error:", error);
          setIsPlaying(false);
        });
    } else {
      audioRef.current.pause();
    }
  }, [isPlaying, setIsPlaying]);

  const toggleMusic = () => {
    if (!audioRef.current) return;

    if (isPlaying) {
      audioRef.current.pause();
      setIsPlaying(false);
    } else {
      audioRef.current
        .play()
        .then(() => setIsPlaying(true))
        .catch((error) => console.log("Audio play error:", error));
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex items-center gap-3 rounded-full bg-white/90 px-4 py-2 shadow-lg backdrop-blur-md border border-stone-200">
      <audio ref={audioRef} src="/music.mp3" loop preload="auto" />
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