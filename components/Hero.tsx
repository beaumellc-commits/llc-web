"use client";

import { motion } from "framer-motion";
import { useMemo } from "react";

const platforms = ["Stripe", "Shopify", "Mercury", "Wise", "Amazon", "Payoneer"];

/* ─── Star field ──────────────────────────────────────────── */
function StarField() {
  const stars = useMemo(
    () =>
      Array.from({ length: 120 }, (_, i) => ({
        id: i,
        x: parseFloat((Math.random() * 100).toFixed(2)),
        y: parseFloat((Math.random() * 70).toFixed(2)),
        size: Math.random() < 0.12 ? 2 : 1,
        baseOpacity: parseFloat((Math.random() * 0.55 + 0.3).toFixed(2)),
        duration: parseFloat((Math.random() * 5 + 2).toFixed(1)),
        delay: parseFloat((Math.random() * 8).toFixed(1)),
      })),
    []
  );

  return (
    <div
      className="absolute inset-0 overflow-hidden pointer-events-none"
      aria-hidden="true"
    >
      {stars.map((star) => (
        <div
          key={star.id}
          className="absolute rounded-full bg-white star-twinkle"
          style={
            {
              left: `${star.x}%`,
              top: `${star.y}%`,
              width: `${star.size}px`,
              height: `${star.size}px`,
              "--base-opacity": star.baseOpacity,
              "--twinkle-duration": `${star.duration}s`,
              "--twinkle-delay": `${star.delay}s`,
            } as React.CSSProperties
          }
        />
      ))}
    </div>
  );
}

/* ─── Planet arc ──────────────────────────────────────────── */
function PlanetArc() {
  return (
    <>
      {/* Gradient border circle */}
      <div
        aria-hidden="true"
        className="absolute pointer-events-none"
        style={{
          bottom: "-56%",
          left: "50%",
          transform: "translateX(-50%)",
          width: "145vw",
          aspectRatio: "1 / 1",
          borderRadius: "50%",
          border: "1.5px solid transparent",
          background:
            "linear-gradient(#000000, #000000) padding-box, " +
            "linear-gradient(to right, #60a5fa 0%, #818cf8 22%, #a855f7 44%, #ec4899 68%, #f97316 88%, #ef4444 100%) border-box",
          boxShadow:
            "0 0 80px 18px rgba(168,85,247,0.38), " +
            "0 0 160px 40px rgba(236,72,153,0.22), " +
            "0 0 50px 10px rgba(96,165,250,0.28)",
        }}
      />
      {/* Soft inner atmosphere glow */}
      <div
        aria-hidden="true"
        className="absolute pointer-events-none"
        style={{
          bottom: "-56%",
          left: "50%",
          transform: "translateX(-50%)",
          width: "143vw",
          aspectRatio: "1 / 1",
          borderRadius: "50%",
          background:
            "radial-gradient(ellipse at 50% 1%, rgba(168,85,247,0.14) 0%, rgba(236,72,153,0.07) 28%, transparent 55%)",
        }}
      />
    </>
  );
}

/* ─── Hero ────────────────────────────────────────────────── */
export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-black">
      {/* Stars */}
      <StarField />

      {/* Planet arc at bottom */}
      <PlanetArc />

      {/* Content */}
      <div className="relative z-10 text-center max-w-5xl mx-auto px-6 pt-28 pb-16">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/15 bg-white/5 backdrop-blur-sm text-sm text-white/70 font-medium mb-8"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-pink-400 animate-pulse" />
          ✦ Service LLC américaine n°1 pour les Français
        </motion.div>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 35 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.85, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          className="text-6xl sm:text-7xl md:text-[88px] font-black tracking-tight leading-[1.0] mb-6"
        >
          Lancez votre{" "}
          <span className="gradient-text-hero block mt-1">
            société américaine.
          </span>
          Scalez sans limites.
        </motion.h1>

        {/* Subheadline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
          className="text-lg sm:text-xl text-white/45 max-w-2xl mx-auto mb-12 leading-relaxed"
        >
          Liberty Scale crée votre LLC américaine depuis n&apos;importe où dans
          le monde. Delaware ou Wyoming — résultat garanti en moins de 7 jours.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.35 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-20"
        >
          {/* Primary — pink/magenta glow */}
          <motion.a
            href="#pricing"
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.97 }}
            className="relative inline-flex items-center gap-3 font-bold text-lg px-10 py-4 rounded-full text-white cursor-pointer overflow-hidden"
            style={{
              background:
                "linear-gradient(135deg, #ec4899 0%, #a855f7 52%, #6366f1 100%)",
              boxShadow:
                "0 0 45px rgba(236,72,153,0.58), 0 0 90px rgba(168,85,247,0.32)",
            }}
          >
            {/* Shine sweep */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-transparent via-white/25 to-transparent"
              animate={{ x: ["-100%", "200%"] }}
              transition={{
                duration: 2.5,
                repeat: Infinity,
                repeatDelay: 2.5,
                ease: "linear",
              }}
            />
            <span className="relative">Créer ma LLC maintenant</span>
            <motion.span
              className="relative"
              animate={{ x: [0, 4, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              →
            </motion.span>
          </motion.a>

          {/* Secondary */}
          <motion.a
            href="/rdv"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.97 }}
            className="inline-flex items-center gap-2.5 border border-white/15 hover:border-white/30 bg-white/5 hover:bg-white/8 backdrop-blur-sm text-white/75 hover:text-white font-semibold text-base px-8 py-4 rounded-full transition-all duration-300 cursor-pointer"
          >
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              className="text-white/50"
            >
              <path
                d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.9 9.81 19.79 19.79 0 01.85 1.18 2 2 0 012.83 0h3a2 2 0 012 1.72c.13 1 .37 1.98.72 2.91a2 2 0 01-.45 2.11L7.09 7.75a16 16 0 006.16 6.16l1.01-1.01a2 2 0 012.11-.45c.93.35 1.91.6 2.91.72A2 2 0 0121.28 15l-.36 1.92z"
                stroke="currentColor"
                strokeWidth="2"
              />
            </svg>
            Prendre un appel
          </motion.a>
        </motion.div>

        {/* Trust bar */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.55, duration: 0.8 }}
        >
          <p className="text-white/22 text-xs uppercase tracking-[0.22em] font-semibold mb-5">
            Compatible avec les meilleures plateformes
          </p>
          <div className="flex flex-wrap items-center justify-center gap-8 sm:gap-12">
            {platforms.map((name, i) => (
              <motion.span
                key={name}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.65 + i * 0.09 }}
                className="text-white/30 hover:text-white/60 font-bold text-lg tracking-tight transition-colors duration-300 cursor-default select-none"
              >
                {name}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
