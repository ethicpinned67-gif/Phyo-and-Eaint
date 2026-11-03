"use client";

import { FormEvent, useEffect, useState } from "react";
import { motion } from "framer-motion";
import confetti from "canvas-confetti";
import { Heart, Send } from "lucide-react";

type Wish = { name: string; message: string; createdAt: number };
const WISHES_KEY = "phyo-eaint-wedding-wishes";
const RSVP_KEY = "phyo-eaint-wedding-rsvps";
const initialWishes: Wish[] = [
  { name: "May & family", message: "Wishing you a lifetime filled with laughter, kindness, and a love that grows every day.", createdAt: 3 },
  { name: "A friend", message: "So happy to celebrate this beautiful beginning with you both. Here’s to forever!", createdAt: 2 },
];

export default function RSVP() {
  const [wishes, setWishes] = useState<Wish[]>(initialWishes);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    try {
      const saved = window.localStorage.getItem(WISHES_KEY);
      if (saved) setWishes(JSON.parse(saved) as Wish[]);
    } catch (storageError) {
      console.error("Unable to load saved wedding wishes.", storageError);
      setError("Saved wishes could not be loaded in this browser.");
    }
  }, []);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setError("");
    const form = event.currentTarget;
    const formData = new FormData(form);
    const name = String(formData.get("name") ?? "").trim();
    const attendance = String(formData.get("attendance") ?? "");
    const wish = String(formData.get("wish") ?? "").trim();
    const newWish = wish ? { name, message: wish, createdAt: Date.now() } : null;

    try {
      const priorRsvps = JSON.parse(window.localStorage.getItem(RSVP_KEY) ?? "[]") as Record<string, string>[];
      priorRsvps.push({
        name,
        attendance,
        guests: String(formData.get("guests") ?? "1"),
        food: String(formData.get("food") ?? "No preference"),
        phone: String(formData.get("phone") ?? ""),
        submittedAt: new Date().toISOString(),
      });
      window.localStorage.setItem(RSVP_KEY, JSON.stringify(priorRsvps));
      if (newWish) {
        const updated = [newWish, ...wishes];
        window.localStorage.setItem(WISHES_KEY, JSON.stringify(updated));
        setWishes(updated);
      }
      form.reset();
      setSubmitted(true);
      confetti({ particleCount: 110, spread: 75, origin: { y: 0.72 }, colors: ["#D4AF37", "#F5EFEB", "#E6B9B2"] });
    } catch (storageError) {
      console.error("Unable to save wedding RSVP.", storageError);
      setError("Your response could not be saved in this browser. Please try again.");
    }
  }

  return (
    <section id="rsvp" className="bg-[#F1EAE3] px-5 py-24 sm:px-8 sm:py-28">
      <div className="mx-auto max-w-6xl">
        <div className="mx-auto max-w-xl text-center">
          <p className="section-kicker">We saved you a seat</p>
          <h2 className="font-display mt-4 text-5xl font-light sm:text-6xl">Will you join us?</h2>
          <p className="mt-4 text-sm leading-7 text-stone-500">Kindly reply by 1 May 2027. Having you with us would mean the world.</p>
        </div>
        <div className="mt-12 grid gap-12 md:grid-cols-[1.05fr_0.95fr] md:gap-16">
          <form onSubmit={handleSubmit} className="space-y-5 bg-[#FAF7F2] p-6 sm:p-9">
            <label className="block text-xs text-stone-600">Your full name *
              <input required name="name" autoComplete="name" maxLength={100} className="mt-2 w-full border-b border-stone-300 bg-transparent px-0 py-3 text-sm text-stone-800 outline-none transition focus:border-[#B08C4A]" placeholder="Name(s)" />
            </label>
            <fieldset>
              <legend className="mb-3 text-xs text-stone-600">Will you be joining us? *</legend>
              <div className="flex flex-wrap gap-3">
                <label className="flex cursor-pointer items-center gap-2 rounded-full border border-stone-200 px-4 py-2.5 text-xs has-[:checked]:border-[#B08C4A] has-[:checked]:bg-[#F1EAE3]">
                  <input required type="radio" name="attendance" value="Joyfully accepts" className="accent-[#B08C4A]" /> Joyfully accepts
                </label>
                <label className="flex cursor-pointer items-center gap-2 rounded-full border border-stone-200 px-4 py-2.5 text-xs has-[:checked]:border-[#B08C4A] has-[:checked]:bg-[#F1EAE3]">
                  <input required type="radio" name="attendance" value="Regretfully declines" className="accent-[#B08C4A]" /> Regretfully declines
                </label>
              </div>
            </fieldset>
            <div className="grid grid-cols-2 gap-4">
              <label className="text-xs text-stone-600">Guests
                <select name="guests" defaultValue="1" className="mt-2 w-full border-b border-stone-300 bg-transparent py-3 text-sm outline-none focus:border-[#B08C4A]">
                  {[1, 2, 3, 4, 5, 6].map((number) => <option key={number} value={number}>{number}</option>)}
                </select>
              </label>
              <label className="text-xs text-stone-600">Food preference
                <select name="food" defaultValue="No preference" className="mt-2 w-full border-b border-stone-300 bg-transparent py-3 text-sm outline-none focus:border-[#B08C4A]">
                  <option>No preference</option><option>Vegetarian</option><option>Vegan</option><option>Other dietary needs</option>
                </select>
              </label>
            </div>
            <label className="block text-xs text-stone-600">Phone number
              <input name="phone" type="tel" autoComplete="tel" maxLength={30} className="mt-2 w-full border-b border-stone-300 bg-transparent px-0 py-3 text-sm outline-none focus:border-[#B08C4A]" placeholder="For any updates" />
            </label>
            <label className="block text-xs text-stone-600">Leave a note for the couple <span className="text-stone-400">(optional)</span>
              <textarea name="wish" rows={3} maxLength={500} className="mt-2 w-full resize-y border-b border-stone-300 bg-transparent px-0 py-3 text-sm outline-none focus:border-[#B08C4A]" placeholder="A little love goes a long way..." />
            </label>
            {error && <p role="alert" className="text-sm text-red-700">{error}</p>}
            {submitted && <p role="status" className="text-sm text-[#80652F]">Thank you! Your response has been saved on this device.</p>}
            <button type="submit" className="inline-flex items-center gap-2 rounded-full bg-[#292524] px-6 py-3 text-[10px] font-medium uppercase tracking-[0.16em] text-white transition hover:bg-[#80652F]">
              Send your reply <Send size={13} />
            </button>
            <p className="text-[10px] leading-5 text-stone-400">This demo stores responses only in this browser. Connect a secure RSVP service to receive them across devices.</p>
          </form>

          <div>
            <div className="flex items-center gap-2">
              <Heart size={15} className="text-[#B08C4A]" />
              <p className="section-kicker">Notes from our loved ones</p>
            </div>
            <h3 className="font-display mt-3 text-4xl">Guest wishes</h3>
            <div className="mt-6 space-y-3">
              {wishes.length === 0 && <p className="text-sm text-stone-500">Your first kind words will mean so much to us.</p>}
              {wishes.slice(0, 5).map((wish, index) => (
                <motion.article key={`${wish.createdAt}-${index}`} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="border-l border-[#D8C8A5] bg-[#FAF7F2]/70 px-5 py-4">
                  <p className="font-display text-xl leading-7 text-stone-700">“{wish.message}”</p>
                  <p className="mt-2 text-[9px] uppercase tracking-[0.16em] text-[#A6874C]">With love, {wish.name}</p>
                </motion.article>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
