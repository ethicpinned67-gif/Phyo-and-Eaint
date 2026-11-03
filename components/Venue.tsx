"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, MapPin } from "lucide-react";

const venueName = "Inya Lake Hotel";
const venueAddress = "No. 37, Kaba Aye Pagoda Road, Mayangone Township, Yangon, Myanmar";
const mapQuery = encodeURIComponent(`${venueName}, ${venueAddress}`);
const directionsUrl = `https://www.google.com/maps/search/?api=1&query=${mapQuery}`;
const embedUrl = `https://maps.google.com/maps?q=${mapQuery}&t=&z=15&ie=UTF8&iwloc=&output=embed`;

export default function Venue() {
  return (
    <section id="venue" className="bg-[#F1EAE3] px-5 py-24 sm:px-8 sm:py-28">
      <div className="mx-auto grid max-w-6xl items-center gap-10 md:grid-cols-[0.8fr_1.2fr] md:gap-16">
        <motion.div
          initial={{ opacity: 0, x: -18 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <p className="section-kicker">Find your way</p>
          <h2 className="font-display mt-4 text-5xl font-light leading-tight sm:text-6xl">
            Meet us in<br />Yangon
          </h2>
          <div className="mt-7 flex items-start gap-3 text-stone-600">
            <MapPin size={17} className="mt-1 shrink-0 text-[#B08C4A]" />
            <div>
              <p className="font-medium text-stone-800">{venueName}</p>
              <p className="mt-1 text-sm">{venueAddress}</p>
            </div>
          </div>
          <p className="mt-5 max-w-sm text-sm leading-7 text-stone-500">
            We look forward to welcoming you. Please allow a little extra time for your journey and arrive 15 minutes before the ceremony.
          </p>
          <a
            href={directionsUrl}
            target="_blank"
            rel="noreferrer"
            className="mt-7 inline-flex items-center gap-2 border-b border-[#B08C4A] pb-2 text-[10px] font-semibold uppercase tracking-[0.16em] text-stone-700 transition hover:text-[#A6874C]"
          >
            Open in Google Maps <ArrowUpRight size={14} />
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="h-[320px] overflow-hidden bg-white shadow-sm sm:h-[420px]"
        >
          <iframe
            title="Map showing the wedding venue"
            src={embedUrl}
            width="100%"
            height="100%"
            style={{ border: 0, filter: "grayscale(0.35) sepia(0.12)" }}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </motion.div>
      </div>
    </section>
  );
}