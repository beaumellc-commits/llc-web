"use client";

import { motion } from "framer-motion";
import { useRef } from "react";
import { useInView } from "framer-motion";

const features = [
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" className="text-blue-400">
        <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" strokeLinecap="round"/>
      </svg>
    ),
    title: "LLC créée en 48h",
    description:
      "Nous déposons votre LLC Delaware ou Wyoming en moins de 48 heures. Sans délais, sans confusion — juste une entité légale prête à opérer.",
    gradient: "from-blue-500/10 to-blue-600/5",
    glow: "shadow-blue-500/10",
    border: "hover:border-blue-500/30",
    accent: "text-blue-400",
    tag: "Le plus populaire",
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" className="text-purple-400">
        <rect x="2" y="5" width="20" height="14" rx="2" stroke="currentColor" strokeWidth="2"/>
        <path d="M2 10h20" stroke="currentColor" strokeWidth="2"/>
        <path d="M6 15h4" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
      </svg>
    ),
    title: "EIN & Compte bancaire",
    description:
      "Obtenez votre numéro EIN et ouvrez un compte bancaire professionnel américain — à distance, sans jamais mettre les pieds aux États-Unis.",
    gradient: "from-purple-500/10 to-purple-600/5",
    glow: "shadow-purple-500/10",
    border: "hover:border-purple-500/30",
    accent: "text-purple-400",
    tag: null,
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" className="text-cyan-400">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round"/>
        <path d="M9 12l2 2 4-4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    title: "Conformité & Support complet",
    description:
      "Rapports annuels, agent enregistré, déclarations BOI — nous maintenons votre LLC en règle toute l'année pour ne jamais rater une échéance.",
    gradient: "from-cyan-500/10 to-cyan-600/5",
    glow: "shadow-cyan-500/10",
    border: "hover:border-cyan-500/30",
    accent: "text-cyan-400",
    tag: null,
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" className="text-emerald-400">
        <path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <line x1="3" y1="6" x2="21" y2="6" stroke="currentColor" strokeWidth="2"/>
        <path d="M16 10a4 4 0 01-8 0" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    title: "Shopify Payments & E-commerce",
    description:
      "Débloquez Shopify Payments US, Amazon Seller, Stripe et Payoneer grâce à votre LLC. Acceptez les paiements du monde entier sans restrictions.",
    gradient: "from-emerald-500/10 to-emerald-600/5",
    glow: "shadow-emerald-500/10",
    border: "hover:border-emerald-500/30",
    accent: "text-emerald-400",
    tag: null,
  },
];

const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.12 },
  },
};

const item = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.0, 0.0, 0.2, 1] as const } },
};

export default function Features() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="features" className="relative py-14 md:py-20 px-4 sm:px-6">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-950/5 to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass border border-purple-500/20 text-sm text-purple-300 font-medium mb-5">
            Tout ce dont vous avez besoin
          </div>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight mb-5">
            Votre société américaine{" "}
            <span className="gradient-text">créée et gérée pour vous</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto leading-relaxed">
            De la création au compte bancaire — nous gérons chaque étape pour que vous puissiez vous concentrer sur ce qui compte vraiment : développer votre activité.
          </p>
        </motion.div>

        {/* Cards */}
        <motion.div
          ref={ref}
          variants={container}
          initial="hidden"
          animate={inView ? "show" : "hidden"}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5"
        >
          {features.map((feature) => (
            <motion.div
              key={feature.title}
              variants={item}
              whileHover={{ y: -6, scale: 1.01 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              className={`gradient-border relative group glass rounded-2xl p-6 border border-white/8 ${feature.border} shadow-xl ${feature.glow} hover:shadow-2xl transition-all duration-300 cursor-default`}
            >
              {/* Background gradient */}
              <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${feature.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />

              {/* Tag */}
              {feature.tag && (
                <div className="absolute -top-3 left-5 px-3 py-1 bg-gradient-to-r from-blue-600 to-indigo-600 text-white text-xs font-semibold rounded-full shadow-lg">
                  {feature.tag}
                </div>
              )}

              <div className="relative z-10">
                {/* Icon */}
                <motion.div
                  whileHover={{ rotate: [0, -10, 10, 0] }}
                  transition={{ duration: 0.4 }}
                  className="w-12 h-12 rounded-xl glass border border-white/10 flex items-center justify-center mb-5 group-hover:border-white/20 transition-colors"
                >
                  {feature.icon}
                </motion.div>

                <h3 className="text-lg font-semibold text-white mb-2.5 leading-snug">
                  {feature.title}
                </h3>
                <p className="text-sm text-gray-400 leading-relaxed group-hover:text-gray-300 transition-colors">
                  {feature.description}
                </p>

                {/* Arrow */}
                <motion.div
                  initial={{ opacity: 0, x: -6 }}
                  whileHover={{ opacity: 1, x: 0 }}
                  className={`flex items-center gap-1.5 mt-5 text-sm font-medium ${feature.accent}`}
                >
                  En savoir plus
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
                    <path d="M5 12h14M12 5l7 7-7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
