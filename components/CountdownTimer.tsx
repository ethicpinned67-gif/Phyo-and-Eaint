"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

type CountdownParts = { days: number; hours: number; minutes: number; seconds: number };

function getTimeLeft(target: string): CountdownParts {
  const difference = Math.max(0, new Date(target).getTime() - Date.now());
  return {
    days: Math.floor(difference / 86_400_000),
    hours: Math.floor((difference / 3_600_000) % 24),
    minutes: Math.floor((difference / 60_000) % 60),
    seconds: Math.floor((difference / 1_000) % 60),
  };
}

export default function CountdownTimer({ date }: { date: string }) {
  const [timeLeft, setTimeLeft] = useState<CountdownParts | null>(null);

  useEffect(() => {
    const update = () => setTimeLeft(getTimeLeft(date));
    update();
    const interval = window.setInterval(update, 1000);
    return () => window.clearInterval(interval);
  }, [date]);

  const units: { label: string; value: number }[] = [
    { label: "Days", value: timeLeft?.days ?? 0 },
    { label: "Hours", value: timeLeft?.hours ?? 0 },
    { label: "Minutes", value: timeLeft?.minutes ?? 0 },
    { label: "Seconds", value: timeLeft?.seconds ?? 0 },
  ];

  return (
    <div aria-label="Countdown to the wedding" className="flex items-center justify-center gap-3 sm:gap-7">
      {units.map(({ label, value }) => (
        <div className="min-w-[3.6rem] text-center sm:min-w-[4.5rem]" key={label}>
          <motion.div
            key={value}
            initial={{ y: 7, opacity: 0.5 }}
            animate={{ y: 0, opacity: 1 }}
            className="font-display text-3xl tabular-nums text-white sm:text-4xl"
          >
            {String(value).padStart(2, "0")}
          </motion.div>
          <div className="mt-1 text-[8px] uppercase tracking-[0.2em] text-white/65 sm:text-[9px]">{label}</div>
        </div>
      ))}
    </div>
  );
}
