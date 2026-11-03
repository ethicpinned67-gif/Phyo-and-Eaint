"use client";

import { motion } from "framer-motion";
import { Clock3, Heart, Sparkles } from "lucide-react";

const milestones = [
  { date: "A happy coincidence", title: "The first hello", description: "One ordinary day became the beginning of our favorite story.", icon: Heart },
  { date: "A promise for always", title: "The proposal", description: "A heartfelt question, an unforgettable yes, and a lifetime ahead.", icon: Sparkles },
  { date: "28 November 2026", title: "The wedding day", description: "The moment our two stories become one, shared with the people we love.", icon: Clock3 },
];

const events = [
  { time: "2:00 PM", title: "The ceremony", detail: "Join us as we exchange our vows" },
  { time: "3:00 PM", title: "Reception", detail: "A toast to love, laughter, and new beginnings" },
  { time: "4:00 PM", title: "Celebration", detail: "Sharing blessings and memorable moments" },
];

const reveal = { hidden: { opacity: 0, y: 24 }, visible: { opacity: 1, y: 0 } };

export default function Timeline() {
  return (
    <section id="story" className="overflow-hidden bg-[#FAF7F2] px-5 py-24 sm:px-8 sm:py-32">
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={reveal}
          transition={{ duration: 0.7 }}
          className="mx-auto max-w-xl text-center"
        >
          <p className="section-kicker">The beginning of forever</p>
          <h2 className="font-display mt-4 text-5xl font-light sm:text-6xl">Our little story</h2>
          <p className="mt-4 text-sm leading-7 text-stone-500">
            A thousand little moments brought us here. We can’t wait to make the next one with you.
          </p>
        </motion.div>

        {/* ဓာတ်ပုံများ မပါတော့ဘဲ Our Journey နှင့် The Celebration ကို တိုက်ရိုက် ပြသထားသည့်အပိုင်း */}
        <div className="mt-16 grid gap-16 md:grid-cols-2 md:gap-20">
          <div>
            <p className="section-kicker">The way we found each other</p>
            <h3 className="font-display mt-3 text-4xl">Our journey</h3>
            <div className="mt-8 border-l border-[#D8C8A5] pl-6">
              {milestones.map(({ date, title, description, icon: Icon }) => (
                <div key={title} className="relative pb-8 last:pb-0">
                  <span className="absolute -left-[2.1rem] top-0 flex h-7 w-7 items-center justify-center rounded-full border border-[#D8C8A5] bg-[#FAF7F2] text-[#C5A059]">
                    <Icon size={13} />
                  </span>
                  <p className="text-[9px] uppercase tracking-[0.16em] text-[#A6874C]">{date}</p>
                  <h4 className="mt-1 font-display text-2xl">{title}</h4>
                  <p className="mt-1 max-w-md text-sm leading-6 text-stone-500">{description}</p>
                </div>
              ))}
            </div>
          </div>

          <div>
            <p className="section-kicker">Save the date</p>
            <h3 className="font-display mt-3 text-4xl">The celebration</h3>
            <p className="mt-2 text-sm text-stone-500">Saturday, 28 November 2026 · Yangon, Myanmar</p>
            <div className="mt-8 divide-y divide-[#E7E0D6] border-y border-[#E7E0D6]">
              {events.map((event) => (
                <div key={event.title} className="flex gap-5 py-5">
                  <span className="min-w-[5.4rem] pt-1 text-[10px] font-semibold tracking-[0.12em] text-[#A6874C]">{event.time}</span>
                  <div>
                    <h4 className="font-display text-2xl">{event.title}</h4>
                    <p className="mt-1 text-xs leading-5 text-stone-500">{event.detail}</p>
                  </div>
                </div>
              ))}
            </div>
            <p className="mt-5 text-xs text-stone-500">Dress code: garden formal · Warm neutrals and soft pastels</p>
            <div className="mt-3 flex gap-2" aria-label="Suggested dress-code colors">
              {["#E8D9C6", "#D8B7AA", "#A9A888", "#C5A059", "#F5EFEB"].map((color) => (
                <span key={color} className="h-5 w-5 rounded-full border border-black/5" style={{ backgroundColor: color }} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}