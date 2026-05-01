"use client";

import { motion } from "framer-motion";

const features = [
  "Création LLC Delaware ou Wyoming",
  "Agent enregistré (1 an inclus)",
  "Accord d'exploitation rédigé",
  "Statuts constitutifs déposés",
  "Obtention de l'EIN (numéro fiscal US)",
  "Ouverture de compte bancaire américain",
  "Déclaration BOI (obligatoire depuis 2024)",
  "Accès Stripe, Shopify Payments, Payoneer, Wise",
  "Support dédié jusqu'à l'activation complète",
  "Livraison en moins de 7 jours",
];

const Check = () => (
  <svg width="17" height="17" viewBox="0 0 24 24" fill="none" className="text-emerald-400 shrink-0 mt-0.5">
    <path d="M20 6L9 17l-5-5" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

export default function Pricing() {
  return (
    <section id="pricing" className="relative py-14 md:py-20 px-4 sm:px-6">
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[700px] bg-indigo-600/8 rounded-full blur-[130px]" />
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] border border-blue-500/5 rounded-full"
        />
      </div>

      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40, filter: "blur(8px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mb-8"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass border border-indigo-500/20 text-sm text-indigo-300 font-medium mb-5">
            Une seule offre. Tout inclus.
          </div>
          {/* Urgency badge */}
          <div className="flex items-center justify-center gap-2 mb-4">
            <motion.div
              animate={{ scale: [1, 1.05, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/25 text-sm text-amber-300 font-semibold"
            >
              <span className="w-2 h-2 rounded-full bg-amber-400 animate-pulse" />
              ⚠️ Il reste 3 accompagnements disponibles ce mois-ci
            </motion.div>
          </div>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight mb-5">
            Votre LLC américaine{" "}
            <span className="gradient-text">en moins de 7 jours.</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-xl mx-auto leading-relaxed">
            Pas de formules compliquées. Pas de surprises. Un seul pack complet pour lancer votre société américaine de A à Z.
          </p>
        </motion.div>

        {/* Single plan card */}
        <motion.div
          initial={{ opacity: 0, y: 60, filter: "blur(12px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          whileHover={{ scale: 1.01 }}
          className="relative glass rounded-3xl border border-blue-500/25 overflow-hidden shadow-2xl shadow-blue-900/30"
        >
          {/* Animated glow border */}
          <motion.div
            animate={{ opacity: [0.4, 0.7, 0.4] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -inset-px rounded-3xl bg-gradient-to-r from-blue-600/30 via-purple-600/30 to-cyan-600/30 blur-sm -z-10"
          />

          {/* Top gradient fill */}
          <div className="absolute inset-0 bg-gradient-to-br from-blue-600/10 via-indigo-600/5 to-purple-600/8" />

          {/* Shine effect */}
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-transparent via-white/3 to-transparent -translate-x-full"
            animate={{ x: ["calc(-100%)", "calc(200%)"] }}
            transition={{ duration: 3, repeat: Infinity, repeatDelay: 4, ease: "easeInOut" }}
          />

          <div className="relative z-10 p-8 md:p-12">
            <div className="flex flex-col lg:flex-row lg:items-start gap-10">

              {/* Left — info */}
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-5">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gradient-to-r from-pink-600 to-purple-600 text-white text-xs font-bold shadow-lg shadow-pink-900/30">
                    ⚡ Pack Complet Liberty Scale
                  </div>
                  <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full border border-white/15 bg-white/5 text-xs font-semibold text-white/70">
                    🇺🇸 Société US officielle
                  </div>
                </div>

                <h3 className="text-3xl md:text-4xl font-bold text-white mb-3 leading-tight">
                  Tout ce qu'il vous faut pour opérer aux États-Unis
                </h3>
                <p className="text-gray-400 leading-relaxed mb-8">
                  De la création de votre LLC à l'ouverture de votre compte bancaire américain — on s'occupe de tout, sans que vous ayez à lever le petit doigt.
                </p>

                {/* Features list */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {features.map((f) => (
                    <motion.div
                      key={f}
                      whileHover={{ x: 4 }}
                      transition={{ type: "spring", stiffness: 400, damping: 25 }}
                      className="flex items-start gap-2.5"
                    >
                      <Check />
                      <span className="text-sm text-gray-300">{f}</span>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Right — CTA box */}
              <div className="lg:w-72 shrink-0">
                <div className="glass rounded-2xl border border-white/10 p-6 flex flex-col gap-5">

                  {/* Price teaser */}
                  <div className="text-center">
                    <div className="text-gray-400 text-sm mb-2">Tarif communiqué lors de votre appel</div>
                    <div className="flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-white/5 border border-white/8">
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" className="text-blue-400">
                        <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.9 9.81 19.79 19.79 0 01.85 1.18 2 2 0 012.83 0h3a2 2 0 012 1.72c.13 1 .37 1.98.72 2.91a2 2 0 01-.45 2.11L7.09 7.75a16 16 0 006.16 6.16l1.01-1.01a2 2 0 012.11-.45c.93.35 1.91.6 2.91.72A2 2 0 0121.28 15l-.36 1.92z" stroke="currentColor" strokeWidth="2"/>
                      </svg>
                      <span className="gradient-text font-bold text-base">Appel gratuit & sans engagement</span>
                    </div>
                  </div>

                  {/* Guarantee badges */}
                  <div className="space-y-2.5">
                    {[
                      { icon: "🚀", text: "Livraison en < 7 jours" },
                      { icon: "🌍", text: "100% à distance" },
                      { icon: "🔒", text: "Processus 100% légal" },
                      { icon: "💬", text: "Support dédié inclus" },
                    ].map((b) => (
                      <div key={b.text} className="flex items-center gap-2.5 text-sm text-gray-300">
                        <span>{b.icon}</span>
                        <span>{b.text}</span>
                      </div>
                    ))}
                  </div>

                  {/* Main CTA */}
                  <motion.a
                    href="/rdv"
                    whileHover={{ scale: 1.04, boxShadow: "0 0 40px rgba(99,102,241,0.5)" }}
                    whileTap={{ scale: 0.97 }}
                    className="relative overflow-hidden w-full block text-center font-bold py-4 rounded-xl text-white shadow-lg transition-all duration-300"
                    style={{ background: "linear-gradient(135deg, #ec4899, #a855f7, #6366f1)", boxShadow: "0 0 30px rgba(236,72,153,0.4)" }}
                  >
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full"
                      animate={{ x: ["calc(-100%)", "calc(100%)"] }}
                      transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
                    />
                    <span className="relative">Réserver mon appel gratuit →</span>
                  </motion.a>

                  <p className="text-gray-600 text-xs text-center">
                    Sans carte bancaire · Appel de 20 minutes
                  </p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Footer note */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="text-center text-gray-600 text-sm mt-8"
        >
          Appel de découverte 100% gratuit et sans engagement. Nous vous accompagnons du premier contact jusqu'à l'activation complète.
        </motion.p>
      </div>
    </section>
  );
}
