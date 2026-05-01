"use client";

import { motion } from "framer-motion";

const items = [
  "🏛️ 500+ LLC créées",
  "⚡ Délai moyen : 48h",
  "🌍 40+ pays représentés",
  "⭐ Note 4.9 / 5",
  "✅ 100% légal & conforme",
  "🛍️ Shopify Payments débloqué",
  "💳 Stripe US activé en 5 jours",
  "🏦 Compte Mercury ouvert",
  "🔒 Zéro frais caché",
  "📞 Support inclus 7j/7",
  "🇺🇸 New Mexico (NM)",
  "🗽 Société américaine officielle",
  "🏦 Compte bancaire US en ligne",
];

// Double the list for seamless loop
const tickerItems = [...items, ...items];

export default function StatsTicker() {
  return (
    <div className="relative overflow-hidden py-3 border-y border-white/6 bg-white/[0.02]">
      {/* Fade masks */}
      <div className="absolute left-0 top-0 bottom-0 w-16 z-10 bg-gradient-to-r from-black to-transparent pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-16 z-10 bg-gradient-to-l from-black to-transparent pointer-events-none" />

      <motion.div
        animate={{ x: ["0%", "-50%"] }}
        transition={{
          duration: 28,
          repeat: Infinity,
          ease: "linear",
        }}
        className="flex items-center gap-0 whitespace-nowrap"
      >
        {tickerItems.map((item, i) => (
          <span
            key={i}
            className="inline-flex items-center gap-1.5 text-white/40 text-sm font-medium px-8"
          >
            {item}
            <span className="text-white/15 ml-4">·</span>
          </span>
        ))}
      </motion.div>
    </div>
  );
}
