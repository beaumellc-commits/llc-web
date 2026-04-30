"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const testimonials = [
  {
    name: "Thomas Leroy",
    role: "Fondateur e-commerce",
    location: "🇫🇷 Paris",
    avatar: "TL",
    avatarColor: "from-blue-500 to-indigo-600",
    text: "J'avais essayé de créer ma LLC seul pendant des mois sans y arriver. Liberty Scale a tout réglé en 5 jours. Mon compte Stripe US était actif dès la semaine suivante.",
    rating: 5,
  },
  {
    name: "Camille Dubois",
    role: "Fondatrice SaaS",
    location: "🇫🇷 Lyon",
    avatar: "CD",
    avatarColor: "from-purple-500 to-pink-600",
    text: "Processus ultra fluide, équipe réactive et vraiment pro. Ils m'ont guidée étape par étape pour l'EIN et l'ouverture du compte bancaire. Je recommande à 100%.",
    rating: 5,
  },
  {
    name: "Maxime Bernard",
    role: "Consultant digital",
    location: "🇫🇷 Bordeaux",
    avatar: "MB",
    avatarColor: "from-cyan-500 to-blue-600",
    text: "Je pensais que créer une société aux USA depuis la France serait compliqué. Liberty Scale a rendu ça simple comme un coup de fil. Résultat en moins d'une semaine.",
    rating: 5,
  },
  {
    name: "Julie Martin",
    role: "Dropshippeuse",
    location: "🇫🇷 Marseille",
    avatar: "JM",
    avatarColor: "from-emerald-500 to-teal-600",
    text: "Grâce à ma LLC Wyoming, j'ai pu ouvrir mon compte Stripe et Payoneer sans aucun problème. L'équipe m'a accompagnée jusqu'au bout. Un service vraiment sérieux.",
    rating: 5,
  },
  {
    name: "Antoine Rousseau",
    role: "Vendeur Amazon FBA",
    location: "🇫🇷 Nantes",
    avatar: "AR",
    avatarColor: "from-orange-500 to-red-600",
    text: "LLC Delaware créée, EIN obtenu, compte bancaire US ouvert — tout en 6 jours. Mon compte vendeur Amazon US validé derrière. Liberty Scale, c'est du concret.",
    rating: 5,
  },
  {
    name: "Sophie Girard",
    role: "Coach en ligne",
    location: "🇫🇷 Toulouse",
    avatar: "SG",
    avatarColor: "from-violet-500 to-purple-600",
    text: "J'avais peur de la partie juridique, mais ils ont tout simplifié. Aujourd'hui je vends mes formations en dollars via ma LLC et je suis payée partout dans le monde.",
    rating: 5,
  },
];

const Stars = ({ count }: { count: number }) => (
  <div className="flex gap-0.5">
    {Array.from({ length: count }).map((_, i) => (
      <svg key={i} width="14" height="14" viewBox="0 0 24 24" fill="currentColor" className="text-amber-400">
        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
      </svg>
    ))}
  </div>
);

const stats = [
  { value: "500+", label: "Fondateurs accompagnés" },
  { value: "40+", label: "Pays" },
  { value: "48h", label: "Délai moyen" },
  { value: "4.9★", label: "Note moyenne" },
];

export default function Testimonials() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section className="relative py-14 md:py-20 px-4 sm:px-6">
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-purple-600/8 rounded-full blur-[120px]" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-blue-600/8 rounded-full blur-[100px]" />
      </div>

      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass border border-amber-500/20 text-sm text-amber-300 font-medium mb-5">
            ★ Adoré par les fondateurs du monde entier
          </div>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight mb-5">
            Vrais fondateurs.{" "}
            <span className="gradient-text">Vrais résultats.</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-xl mx-auto leading-relaxed">
            Des centaines d&apos;entrepreneurs ont utilisé Liberty Scale pour lancer leur société américaine. Voici ce qu&apos;ils en disent.
          </p>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-10"
        >
          {stats.map((stat) => (
            <div key={stat.label} className="glass rounded-2xl border border-white/8 p-5 text-center">
              <div className="text-3xl font-bold gradient-text mb-1">{stat.value}</div>
              <div className="text-gray-400 text-sm">{stat.label}</div>
            </div>
          ))}
        </motion.div>

        {/* Testimonials grid */}
        <div ref={ref} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 + i * 0.1, ease: "easeOut" }}
              whileHover={{ y: -4, scale: 1.01 }}
              className="gradient-border glass rounded-2xl border border-white/8 hover:border-white/15 p-6 transition-all duration-300 flex flex-col gap-4 group"
            >
              {/* Stars */}
              <Stars count={t.rating} />

              {/* Quote */}
              <p className="text-gray-300 text-sm leading-relaxed flex-1 group-hover:text-white transition-colors duration-300">
                &ldquo;{t.text}&rdquo;
              </p>

              {/* Author */}
              <div className="flex items-center gap-3 pt-2 border-t border-white/8">
                <div className={`w-9 h-9 rounded-full bg-gradient-to-br ${t.avatarColor} flex items-center justify-center text-xs font-bold text-white shrink-0`}>
                  {t.avatar}
                </div>
                <div>
                  <div className="text-white text-sm font-semibold">{t.name}</div>
                  <div className="text-gray-500 text-xs">{t.role} · {t.location}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
