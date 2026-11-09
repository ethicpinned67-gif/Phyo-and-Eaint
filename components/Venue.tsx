"use client";

import Image from "next/image";
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
      {/* Location Details & Map */}
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

      {/* RSVP and KPay QR Section */}
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, delay: 0.2 }}
        className="mx-auto mt-16 max-w-4xl border-t border-[#dfd4c8] pt-12 sm:mt-20 sm:pt-16"
      >
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 sm:gap-10">
          
          {/* RSVP Card */}
          <div className="flex flex-col items-center rounded-2xl bg-[#faf7f2] p-8 text-center shadow-sm border border-[#e8dfd5] transition-transform hover:-translate-y-1 duration-300">
            <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-[#B08C4A]">
              Attendance Confirmation
            </span>
            <h3 className="font-display mt-2 text-2xl font-light text-stone-800">
              RSVP
            </h3>
            <div className="mt-5 rounded-xl bg-white p-3 shadow-inner border border-stone-100">
              <Image
                src="/qr-rsvp.png"
                alt="RSVP QR Code"
                width={170}
                height={170}
                className="h-40 w-40 object-contain sm:h-44 sm:w-44"
              />
            </div>
            <p className="mt-4 text-xs tracking-wide text-stone-500">
              Scan to confirm attendance
            </p>
          </div>

          {/* KPay Card */}
          <div className="flex flex-col items-center rounded-2xl bg-[#faf7f2] p-8 text-center shadow-sm border border-[#e8dfd5] transition-transform hover:-translate-y-1 duration-300">
            <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-[#B08C4A]">
              Wedding Gift
            </span>
            <h3 className="font-display mt-2 text-2xl font-light text-stone-800">
              KPay / WavePay
            </h3>
            <div className="mt-5 rounded-xl bg-white p-3 shadow-inner border border-stone-100">
              <Image
                src="/qr-gift.png"
                alt="KPay Gift QR Code"
                width={170}
                height={170}
                className="h-40 w-40 object-contain sm:h-44 sm:w-44"
              />
            </div>
            <p className="mt-4 text-xs tracking-wide text-stone-500">
              Scan to send wedding gift
            </p>
          </div>

        </div>
      </motion.div>
    </section>
  );
}