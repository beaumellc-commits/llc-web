"use client";

import { motion, useScroll, useTransform, useInView } from "framer-motion";
import { useRef, useState } from "react";

export default function VideoPresentation() {
  const [playing, setPlaying] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [60, -60]);
  const scale = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0.92, 1, 1, 0.96]);
  const opacity = useTransform(scrollYProgress, [0, 0.15, 0.85, 1], [0, 1, 1, 0]);

  return (
    <section className="relative py-24 md:py-36 px-4 sm:px-6 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-indigo-950/10 to-transparent" />
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[900px] border border-blue-500/5 rounded-full"
        />
        <motion.div
          animate={{ rotate: -360 }}
          transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] border border-purple-500/5 rounded-full"
        />
      </div>

      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.7 }}
          className="text-center mb-14"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass border border-blue-500/20 text-sm text-blue-300 font-medium mb-5">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" className="text-blue-400">
              <path d="M8 5v14l11-7z"/>
            </svg>
            Découvrez Liberty Scale en 2 minutes
          </div>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight mb-5">
            Avant de réserver un appel,{" "}
            <span className="gradient-text">regardez ça.</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-xl mx-auto leading-relaxed">
            Comprenez exactement comment nous créons votre LLC américaine en moins de 48h — de A à Z, sans jargon.
          </p>
        </motion.div>

        {/* Video container */}
        <motion.div
          ref={ref}
          style={{ scale, opacity }}
          className="relative"
        >
          {/* Outer glow */}
          <motion.div
            animate={inView ? { opacity: [0.3, 0.6, 0.3] } : { opacity: 0 }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -inset-4 bg-gradient-to-r from-blue-600/20 via-purple-600/20 to-cyan-600/20 rounded-3xl blur-2xl"
          />

          {/* Video frame */}
          <div className="relative rounded-2xl overflow-hidden glass border border-white/10 shadow-2xl shadow-blue-900/30 aspect-video">

            {/* Fake video thumbnail / placeholder */}
            {!playing ? (
              <div className="relative w-full h-full bg-gradient-to-br from-[#0a0a1f] via-[#0d0d2b] to-[#050510] flex items-center justify-center">

                {/* Grid lines */}
                <div
                  className="absolute inset-0 opacity-[0.04]"
                  style={{
                    backgroundImage: `linear-gradient(rgba(99,102,241,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(99,102,241,0.5) 1px, transparent 1px)`,
                    backgroundSize: "50px 50px",
                  }}
                />

                {/* Glow orbs in thumbnail */}
                <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-600/15 rounded-full blur-3xl" />
                <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-purple-600/15 rounded-full blur-3xl" />

                {/* Fake waveform bars */}
                <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex items-end gap-1">
                  {Array.from({ length: 32 }).map((_, i) => (
                    <motion.div
                      key={i}
                      animate={{ height: [6, Math.random() * 28 + 8, 6] }}
                      transition={{
                        duration: 1.2 + Math.random() * 0.8,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: i * 0.06,
                      }}
                      className="w-1 bg-gradient-to-t from-blue-600/40 to-cyan-400/60 rounded-full"
                    />
                  ))}
                </div>

                {/* Thumbnail text */}
                <motion.div
                  style={{ y }}
                  className="absolute top-8 left-8 right-8 flex items-start justify-between"
                >
                  <div className="glass border border-white/10 px-4 py-2 rounded-xl">
                    <span className="text-xs text-gray-400 font-medium">Liberty Scale — Présentation officielle</span>
                  </div>
                  <div className="glass border border-white/10 px-3 py-2 rounded-xl">
                    <span className="text-xs text-blue-300 font-semibold">2:18</span>
                  </div>
                </motion.div>

                {/* Play button */}
                <motion.button
                  onClick={() => setPlaying(true)}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  className="relative group"
                  aria-label="Lire la vidéo"
                >
                  {/* Ring pulse */}
                  <motion.div
                    animate={{ scale: [1, 1.5, 1], opacity: [0.5, 0, 0.5] }}
                    transition={{ duration: 2.5, repeat: Infinity }}
                    className="absolute inset-0 rounded-full bg-blue-500/30"
                  />
                  <motion.div
                    animate={{ scale: [1, 1.3, 1], opacity: [0.3, 0, 0.3] }}
                    transition={{ duration: 2.5, repeat: Infinity, delay: 0.4 }}
                    className="absolute inset-0 rounded-full bg-purple-500/20"
                  />

                  {/* Button */}
                  <div className="relative w-20 h-20 rounded-full bg-gradient-to-br from-blue-600 to-purple-600 flex items-center justify-center shadow-2xl shadow-blue-900/60 group-hover:shadow-blue-900/80 transition-shadow">
                    <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor" className="text-white ml-1.5">
                      <path d="M8 5v14l11-7z"/>
                    </svg>
                  </div>
                </motion.button>

                {/* Bottom overlay */}
                <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-[#050510]/80 to-transparent" />
              </div>
            ) : (
              /* Embedded video — replace src with your actual video URL */
              <iframe
                className="w-full h-full"
                src="https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1"
                title="Liberty Scale — Présentation"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            )}
          </div>

          {/* Below-video stats strip */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="grid grid-cols-3 gap-4 mt-5"
          >
            {[
              { icon: "🎯", label: "Processus clair", desc: "Étape par étape" },
              { icon: "⏱️", label: "Moins de 48h", desc: "Délai garanti" },
              { icon: "🌍", label: "100% à distance", desc: "Depuis chez vous" },
            ].map((item) => (
              <div
                key={item.label}
                className="glass border border-white/8 rounded-xl px-4 py-3 flex items-center gap-3"
              >
                <span className="text-xl">{item.icon}</span>
                <div>
                  <div className="text-white text-sm font-semibold">{item.label}</div>
                  <div className="text-gray-500 text-xs">{item.desc}</div>
                </div>
              </div>
            ))}
          </motion.div>
        </motion.div>

        {/* CTA below video */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-center mt-12"
        >
          <p className="text-gray-500 text-sm mb-5">Convaincu ? Réservez votre appel de démarrage gratuit.</p>
          <motion.a
            href="#pricing"
            whileHover={{ scale: 1.04, boxShadow: "0 0 40px rgba(99,102,241,0.45)" }}
            whileTap={{ scale: 0.97 }}
            className="inline-flex items-center gap-2.5 bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 text-white font-semibold text-base px-8 py-4 rounded-2xl shadow-xl shadow-blue-900/30 transition-all duration-300"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" className="text-white/80">
              <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.9 9.81 19.79 19.79 0 01.85 1.18 2 2 0 012.83 0h3a2 2 0 012 1.72c.13 1 .37 1.98.72 2.91a2 2 0 01-.45 2.11L7.09 7.75a16 16 0 006.16 6.16l1.01-1.01a2 2 0 012.11-.45c.93.35 1.91.6 2.91.72A2 2 0 0121.28 15l-.36 1.92z" stroke="currentColor" strokeWidth="2"/>
            </svg>
            Réserver un appel gratuit →
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
