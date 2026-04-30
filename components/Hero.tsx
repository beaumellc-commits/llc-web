"use client";

import { motion } from "framer-motion";

const trustBadges = [
  { icon: "⚡", label: "Création en 48h" },
  { icon: "🌍", label: "500+ fondateurs" },
  { icon: "🔒", label: "100% conforme" },
  { icon: "⭐", label: "Note 5 étoiles" },
];

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden px-4 sm:px-6">
      {/* Animated gradient background */}
      <div className="absolute inset-0 bg-[#050510]">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-950/60 via-[#050510] to-purple-950/40 animate-gradient" />
      </div>

      {/* Glow orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{ scale: [1, 1.1, 1], opacity: [0.3, 0.5, 0.3] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -top-40 -left-40 w-[600px] h-[600px] bg-blue-600/20 rounded-full blur-[120px]"
        />
        <motion.div
          animate={{ scale: [1, 1.15, 1], opacity: [0.2, 0.4, 0.2] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 2 }}
          className="absolute -bottom-60 -right-40 w-[700px] h-[700px] bg-purple-600/20 rounded-full blur-[140px]"
        />
        <motion.div
          animate={{ scale: [1, 1.08, 1], opacity: [0.15, 0.3, 0.15] }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut", delay: 4 }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-cyan-600/10 rounded-full blur-[100px]"
        />
      </div>

      {/* Floating decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="animate-float absolute top-[15%] right-[8%] w-24 h-24 rounded-2xl glass border border-blue-500/20 shadow-lg shadow-blue-500/10"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 1.2 }}
        >
          <div className="w-full h-full flex items-center justify-center text-3xl">🇺🇸</div>
        </motion.div>
        <motion.div
          className="animate-float-delay absolute bottom-[20%] left-[6%] w-20 h-20 rounded-2xl glass border border-purple-500/20 shadow-lg shadow-purple-500/10"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 1.5 }}
        >
          <div className="w-full h-full flex items-center justify-center text-2xl">🏛️</div>
        </motion.div>
        <motion.div
          className="animate-float absolute top-[35%] left-[4%] w-16 h-16 rounded-xl glass border border-cyan-500/20"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 1.8 }}
        >
          <div className="w-full h-full flex items-center justify-center text-xl">⚡</div>
        </motion.div>
      </div>

      {/* Grid pattern overlay */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)`,
          backgroundSize: "60px 60px",
        }}
      />

      {/* Content */}
      <div className="relative z-10 text-center max-w-5xl mx-auto pt-24 md:pt-0">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass border border-blue-500/20 text-sm text-blue-300 font-medium mb-8 shadow-lg shadow-blue-900/20"
        >
          <span className="w-2 h-2 rounded-full bg-blue-400 animate-pulse" />
          Approuvé par des entrepreneurs dans 40+ pays
        </motion.div>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight leading-[1.05] mb-6"
        >
          Lancez votre société américaine.{" "}
          <span className="gradient-text block mt-1">Scalez sans limites.</span>
        </motion.h1>

        {/* Subheadline */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="text-lg sm:text-xl text-gray-400 max-w-2xl mx-auto mb-10 leading-relaxed"
        >
          Liberty Scale vous aide à créer et gérer votre LLC américaine depuis n'importe où dans le monde.
          Delaware ou Wyoming — on s'occupe de tout, vous vous concentrez sur votre croissance.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-14"
        >
          <motion.a
            href="#pricing"
            whileHover={{ scale: 1.04, boxShadow: "0 0 40px rgba(99,102,241,0.4)" }}
            whileTap={{ scale: 0.97 }}
            className="group relative inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 text-white font-semibold text-base px-8 py-4 rounded-2xl shadow-xl shadow-blue-900/40 transition-all duration-300"
          >
            Créer ma LLC
            <motion.span
              animate={{ x: [0, 4, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              →
            </motion.span>
          </motion.a>
          <motion.a
            href="#how-it-works"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            className="inline-flex items-center gap-2 glass border border-white/10 hover:border-white/20 text-white font-semibold text-base px-8 py-4 rounded-2xl transition-all duration-300 hover:bg-white/5"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" className="text-blue-400">
              <path d="M22 16.74V4a2 2 0 00-2-2h-8a2 2 0 00-2 2v2.75" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
              <path d="M14 8H2v12a2 2 0 002 2h8a2 2 0 002-2V8z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M6 12h4M6 16h4" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
            </svg>
            Prendre un appel
          </motion.a>
        </motion.div>

        {/* Trust badges */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.45 }}
          className="flex flex-wrap items-center justify-center gap-3 sm:gap-6"
        >
          {trustBadges.map((badge, i) => (
            <motion.div
              key={badge.label}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.5 + i * 0.08 }}
              className="flex items-center gap-2 px-4 py-2 glass rounded-full border border-white/8 text-sm text-gray-400"
            >
              <span>{badge.icon}</span>
              <span>{badge.label}</span>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-xs text-gray-600 uppercase tracking-widest">Défiler</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="w-0.5 h-8 bg-gradient-to-b from-gray-600 to-transparent rounded-full"
        />
      </motion.div>
    </section>
  );
}
