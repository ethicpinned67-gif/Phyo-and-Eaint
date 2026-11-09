"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowUpRight, MapPin, Heart, Gift } from "lucide-react";

const venueName = "Inya Lake Hotel";
const venueAddress = "No. 37, Kaba Aye Pagoda Road, Mayangone Township, Yangon, Myanmar";
const mapQuery = encodeURIComponent(`${venueName}, ${venueAddress}`);
const directionsUrl = `https://www.google.com/maps/search/?api=1&query=${mapQuery}`;
const embedUrl = `https://maps.google.com/maps?q=${mapQuery}&t=&z=15&ie=UTF8&iwloc=&output=embed`;

export default function Venue() {
  return (
    <section id="venue" className="bg-[#F1EAE3] px-5 py-20 sm:px-8 sm:py-28">
      {/* Location Details & Map */}
      <div className="mx-auto grid max-w-6xl items-center gap-10 md:grid-cols-[0.8fr_1.2fr] md:gap-16">
        <motion.div
          initial={{ opacity: 0, x: -18 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <p className="text-[11px] font-semibold uppercase tracking-[0.25em] text-[#B08C4A]">
            Find your way
          </p>
          <h2 className="font-display mt-3 text-4xl font-light leading-tight sm:text-5xl md:text-6xl text-stone-900">
            Meet us in<br />Yangon
          </h2>
          <div className="mt-7 flex items-start gap-3 text-stone-700">
            <MapPin size={18} className="mt-1 shrink-0 text-[#B08C4A]" />
            <div>
              <p className="font-medium text-stone-900">{venueName}</p>
              <p className="mt-1 text-sm text-stone-600">{venueAddress}</p>
            </div>
          </div>
          <p className="mt-5 max-w-sm text-sm leading-relaxed text-stone-600">
            We look forward to welcoming you. Please allow a little extra time for your journey and arrive 15 minutes before the ceremony.
          </p>
          <a
            href={directionsUrl}
            target="_blank"
            rel="noreferrer"
            className="mt-6 inline-flex items-center gap-2 border-b border-[#B08C4A] pb-1.5 text-[11px] font-semibold uppercase tracking-[0.18em] text-stone-800 transition hover:text-[#B08C4A]"
          >
            Open in Google Maps <ArrowUpRight size={14} />
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="h-[320px] overflow-hidden rounded-2xl bg-white shadow-md sm:h-[400px] border border-stone-200"
        >
          <iframe
            title="Map showing the wedding venue"
            src={embedUrl}
            width="100%"
            height="100%"
            style={{ border: 0, filter: "grayscale(0.2) contrast(1.05)" }}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </motion.div>
      </div>

      {/* RSVP and KPay QR Section */}
      <motion.div
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.15 }}
        className="mx-auto mt-16 max-w-4xl border-t border-[#d8ccbe] pt-14 sm:mt-20 sm:pt-16"
      >
        <div className="text-center mb-10">
          <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-[#B08C4A]">
            RSVP & Wedding Gift
          </p>
          <h3 className="font-display text-2xl sm:text-3xl font-normal text-stone-800 mt-1">
            တက်ရောက်မှုနှင့် မင်္ဂလာလက်ဖွဲ့
          </h3>
          <div className="w-12 h-[1px] bg-[#B08C4A]/60 mx-auto mt-3"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch max-w-3xl mx-auto">
          
          {/* RSVP Card */}
          <div className="flex flex-col items-center justify-between rounded-2xl bg-[#FCFAF6] p-7 text-center shadow-md border border-[#E3D9CD] transition-all hover:shadow-lg hover:-translate-y-1">
            <div className="w-full">
              <div className="flex items-center justify-center gap-2 text-[#B08C4A] mb-2">
                <Heart size={16} className="fill-[#B08C4A]/20" />
                <span className="text-[11px] font-bold tracking-[0.18em] uppercase">RSVP</span>
              </div>
              <h4 className="font-semibold text-lg text-stone-800">
                တက်ရောက်မှု အတည်ပြုရန်
              </h4>
              <p className="text-xs text-stone-500 mt-1">
                Scan QR to fill attendance form
              </p>
            </div>

            <div className="my-6 p-3 bg-white rounded-xl shadow-sm border border-stone-200">
              <Image
                src="/qr-rsvp.png"
                alt="RSVP QR Code"
                width={200}
                height={200}
                className="w-44 h-44 object-contain rounded-lg"
              />
            </div>

            <span className="text-xs text-stone-500 bg-[#F1EAE3] px-4 py-1.5 rounded-full font-medium">
              Phone camera ဖြင့် Scan ဖတ်ပေးပါရန်
            </span>
          </div>

          {/* KPay Card */}
          <div className="flex flex-col items-center justify-between rounded-2xl bg-[#FCFAF6] p-7 text-center shadow-md border border-[#E3D9CD] transition-all hover:shadow-lg hover:-translate-y-1">
            <div className="w-full">
              <div className="flex items-center justify-center gap-2 text-[#005BAC] mb-2">
                <Gift size={16} />
                <span className="text-[11px] font-bold tracking-[0.18em] uppercase">KBZPay</span>
              </div>
              <h4 className="font-semibold text-lg text-stone-800">
                မင်္ဂလာလက်ဖွဲ့ ရန်
              </h4>
              <p className="text-xs text-stone-500 mt-1">
                MA EAINT SHWE PHYU (KBZPay)
              </p>
            </div>

            <div className="my-6 p-2 bg-white rounded-xl shadow-sm border border-stone-200 overflow-hidden">
              <Image
                src="/kpay-qr.png"
                alt="KBZPay QR Code"
                width={220}
                height={330}
                className="w-48 h-auto max-h-64 object-contain rounded-lg"
              />
            </div>

            <span className="text-xs text-[#005BAC] bg-blue-50 px-4 py-1.5 rounded-full font-medium">
              မင်္ဂလာလက်ဖွဲ့ မေတ္တာလက်ဆောင် ပေးပို့ရန်
            </span>
          </div>

        </div>
      </motion.div>
    </section>
  );
}