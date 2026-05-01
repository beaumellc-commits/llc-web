"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const steps = [
  {
    number: "01",
    title: "Choisissez votre État",
    description:
      "Delaware ou Wyoming ? Nous vous aidons à choisir l'État adapté à vos objectifs, vos besoins fiscaux et vos plans à long terme. Ça prend 5 minutes.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="text-blue-400">
        <path d="M12 22s-8-4.5-8-11.8A8 8 0 0112 2a8 8 0 018 8.2c0 7.3-8 11.8-8 11.8z" stroke="currentColor" strokeWidth="2"/>
        <circle cx="12" cy="10" r="3" stroke="currentColor" strokeWidth="2"/>
      </svg>
    ),
    color: "blue",
    detail: "🇺🇸 Delaware · Wyoming",
  },
  {
    number: "02",
    title: "On s'occupe de tout",
    description:
      "Notre équipe dépose votre LLC, obtient votre EIN, configure votre agent enregistré et vous aide pour le compte bancaire. Zéro paperasse de votre côté.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="text-purple-400">
        <path d="M12 2L2 7l10 5 10-5-10-5z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round"/>
        <path d="M2 17l10 5 10-5" stroke="currentColor" strokeWidth="2" strokeLinejoin="round"/>
        <path d="M2 12l10 5 10-5" stroke="currentColor" strokeWidth="2" strokeLinejoin="round"/>
      </svg>
    ),
    color: "purple",
    detail: "Formation · EIN · Banque",
  },
  {
    number: "03",
    title: "Vous êtes prêt à opérer",
    description:
      "Recevez vos documents LLC, ouvrez vos processeurs de paiement, signez des contrats et commencez à faire des affaires avec une légitimité américaine. Partout dans le monde.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="text-cyan-400">
        <path d="M22 11.08V12a10 10 0 11-5.93-9.14" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
        <path d="M22 4L12 14.01l-3-3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    color: "cyan",
    detail: "🛍️ Shopify · Stripe · Wise",
  },
];

const colorMap: Record<string, { bg: string; border: string; glow: string; text: string; line: string }> = {
  blue: {
    bg: "bg-blue-500/10",
    border: "border-blue-500/30",
    glow: "shadow-blue-500/20",
    text: "text-blue-400",
    line: "from-blue-500/40",
  },
  purple: {
    bg: "bg-purple-500/10",
    border: "border-purple-500/30",
    glow: "shadow-purple-500/20",
    text: "text-purple-400",
    line: "from-purple-500/40",
  },
  cyan: {
    bg: "bg-cyan-500/10",
    border: "border-cyan-500/30",
    glow: "shadow-cyan-500/20",
    text: "text-cyan-400",
    line: "from-cyan-500/40",
  },
};

export default function HowItWorks() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="how-it-works" className="relative py-14 md:py-20 px-4 sm:px-6">
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-950/8 to-transparent" />
      </div>

      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass border border-cyan-500/20 text-sm text-cyan-300 font-medium mb-5">
            Processus simplifié
          </div>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight mb-5">
            Opérationnel{" "}
            <span className="gradient-text">en 3 étapes</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-xl mx-auto leading-relaxed">
            Aucune connaissance juridique requise. Nous avons simplifié l&apos;ensemble du processus pour que n&apos;importe quel fondateur puisse créer une entité américaine en toute confiance.
          </p>
        </motion.div>

        {/* Steps */}
        <div ref={ref} className="relative">
          {/* Connector line — desktop */}
          <div className="hidden lg:block absolute top-16 left-[calc(16.6%+2rem)] right-[calc(16.6%+2rem)] h-px">
            <motion.div
              initial={{ scaleX: 0 }}
              animate={inView ? { scaleX: 1 } : { scaleX: 0 }}
              transition={{ duration: 1.2, delay: 0.4, ease: "easeInOut" }}
              className="origin-left h-full bg-gradient-to-r from-blue-500/40 via-purple-500/40 to-cyan-500/40"
            />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-6">
            {steps.map((step, i) => {
              const c = colorMap[step.color];
              return (
                <motion.div
                  key={step.number}
                  initial={{ opacity: 0, y: 50 }}
                  animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                  transition={{ duration: 0.7, delay: 0.2 + i * 0.15, ease: "easeOut" }}
                  className="relative flex flex-col items-center text-center lg:items-center"
                >
                  {/* Step number circle */}
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    transition={{ type: "spring", stiffness: 300 }}
                    className={`relative w-16 h-16 rounded-2xl ${c.bg} border ${c.border} flex items-center justify-center mb-6 shadow-xl ${c.glow} z-10`}
                  >
                    {step.icon}
                    <div className={`absolute -top-3 -right-3 w-7 h-7 rounded-full glass border ${c.border} flex items-center justify-center`}>
                      <span className={`text-xs font-bold ${c.text}`}>{step.number}</span>
                    </div>
                  </motion.div>

                  {/* Content */}
                  <div className="glass rounded-2xl border border-white/8 p-6 w-full hover:border-white/15 transition-colors duration-300 group">
                    <h3 className="text-xl font-bold text-white mb-3">{step.title}</h3>
                    <p className="text-gray-400 text-sm leading-relaxed mb-4 group-hover:text-gray-300 transition-colors">
                      {step.description}
                    </p>
                    <div className={`inline-flex items-center gap-1.5 text-xs font-semibold ${c.text} ${c.bg} px-3 py-1.5 rounded-full border ${c.border}`}>
                      {step.detail}
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center mt-14"
        >
          <p className="text-gray-500 text-sm mb-4">Délai moyen de finalisation : <span className="text-white font-semibold">48 heures</span></p>
          <motion.a
            href="#pricing"
            whileHover={{ scale: 1.04, boxShadow: "0 0 30px rgba(99,102,241,0.35)" }}
            whileTap={{ scale: 0.97 }}
            className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold px-8 py-3.5 rounded-xl shadow-lg shadow-blue-900/30 transition-all"
          >
            Commencer maintenant →
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
