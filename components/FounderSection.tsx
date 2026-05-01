"use client";

import { motion } from "framer-motion";

const stats = [
  { value: "500+", label: "LLC créées" },
  { value: "40+", label: "Pays" },
  { value: "< 7j", label: "Délai moyen" },
  { value: "4.9★", label: "Satisfaction" },
];

const credibility = [
  "Expert en création de sociétés américaines pour non-résidents",
  "Accompagnement de fondateurs dans 40+ pays",
  "Partenaire agréé avec des agents enregistrés au New Mexico (NM)",
  "Processus 100% conforme aux régulations FINCEN (BOI 2024)",
];

export default function FounderSection() {
  return (
    <section className="relative py-14 md:py-20 px-4 sm:px-6 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[400px] bg-pink-600/6 rounded-full blur-[120px]" />
        <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-purple-600/6 rounded-full blur-[100px]" />
      </div>

      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass border border-pink-500/20 text-sm text-pink-300 font-medium mb-5">
            <span className="w-1.5 h-1.5 rounded-full bg-pink-400 animate-pulse" />
            Qui est derrière Liberty Scale ?
          </div>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tight">
            Une expertise.{" "}
            <span className="gradient-text-hero">Un seul objectif.</span>
          </h2>
        </motion.div>

        {/* Main card */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">

          {/* Left — founder visual */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-col items-center lg:items-start gap-6"
          >
            {/* Photo placeholder */}
            <div className="relative">
              <div
                className="w-48 h-48 rounded-3xl flex items-center justify-center text-5xl font-black text-white shadow-2xl"
                style={{
                  background: "linear-gradient(135deg, #ec4899 0%, #a855f7 52%, #6366f1 100%)",
                  boxShadow: "0 0 60px rgba(236,72,153,0.35), 0 0 120px rgba(168,85,247,0.2)",
                }}
              >
                LS
              </div>
              {/* Online badge */}
              <div className="absolute -bottom-2 -right-2 flex items-center gap-1.5 bg-black border border-white/10 px-3 py-1.5 rounded-full text-xs font-semibold text-white shadow-lg">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                Disponible
              </div>
            </div>

            {/* Name & title */}
            <div className="text-center lg:text-left">
              <h3 className="text-2xl font-black text-white mb-1">
                L&apos;équipe Liberty Scale
              </h3>
              <p className="text-pink-400 font-semibold text-sm">
                Experts en création de LLC américaines · Depuis 2020
              </p>
            </div>

            {/* Stats grid */}
            <div className="grid grid-cols-2 gap-3 w-full max-w-xs">
              {stats.map((s) => (
                <motion.div
                  key={s.label}
                  whileHover={{ scale: 1.03 }}
                  className="glass rounded-2xl border border-white/8 p-4 text-center"
                >
                  <div className="text-2xl font-black gradient-text-hero">{s.value}</div>
                  <div className="text-xs text-gray-500 mt-0.5">{s.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right — story */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-col gap-6"
          >
            {/* Quote */}
            <div className="glass rounded-2xl border border-white/8 p-6 relative overflow-hidden">
              <div
                className="absolute top-0 left-0 w-1 h-full rounded-l-2xl"
                style={{
                  background: "linear-gradient(to bottom, #ec4899, #a855f7)",
                }}
              />
              <p className="text-lg text-white/80 leading-relaxed italic pl-4">
                &ldquo;J&apos;ai créé Liberty Scale après avoir moi-même été bloqué pendant des mois face à la complexité administrative américaine. Aujourd&apos;hui, notre mission est simple : vous éviter cette galère. On s&apos;occupe de tout — vous vous concentrez sur ce qui compte vraiment : faire croître votre business.&rdquo;
              </p>
            </div>

            {/* Mission */}
            <div>
              <h4 className="text-white font-bold text-lg mb-4">Notre engagement :</h4>
              <div className="space-y-3">
                {credibility.map((item, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 + i * 0.08 }}
                    className="flex items-start gap-3"
                  >
                    <div
                      className="w-5 h-5 rounded-full flex items-center justify-center shrink-0 mt-0.5"
                      style={{
                        background: "linear-gradient(135deg, #ec4899, #a855f7)",
                        boxShadow: "0 0 12px rgba(236,72,153,0.4)",
                      }}
                    >
                      <svg width="10" height="10" viewBox="0 0 24 24" fill="none" className="text-white">
                        <path d="M20 6L9 17l-5-5" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </div>
                    <span className="text-gray-300 text-sm leading-relaxed">{item}</span>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* CTA */}
            <motion.a
              href="/rdv"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="inline-flex items-center gap-2.5 self-start glass border border-white/15 hover:border-pink-500/40 text-white font-semibold px-6 py-3 rounded-full transition-all duration-300 text-sm cursor-pointer"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" className="text-pink-400">
                <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.9 9.81 19.79 19.79 0 01.85 1.18 2 2 0 012.83 0h3a2 2 0 012 1.72c.13 1 .37 1.98.72 2.91a2 2 0 01-.45 2.11L7.09 7.75a16 16 0 006.16 6.16l1.01-1.01a2 2 0 012.11-.45c.93.35 1.91.6 2.91.72A2 2 0 0121.28 15l-.36 1.92z" stroke="currentColor" strokeWidth="2"/>
              </svg>
              Parler à l&apos;équipe directement
            </motion.a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
