"use client";

import { motion } from "framer-motion";

const benefits = [
  { icon: "⚡", text: "LLC livrée en moins de 7 jours" },
  { icon: "🏦", text: "Compte bancaire US inclus" },
  { icon: "💳", text: "Accès Stripe, Payoneer, Wise" },
  { icon: "🔒", text: "Processus 100% légal & conforme" },
  { icon: "🌍", text: "100% à distance depuis la France" },
  { icon: "📞", text: "Support dédié jusqu'à l'activation" },
];

const steps = [
  { num: "01", title: "Vous réservez", desc: "Choisissez un créneau de 20 min qui vous convient." },
  { num: "02", title: "On vous appelle", desc: "Notre équipe vous contacte et répond à toutes vos questions." },
  { num: "03", title: "On lance votre LLC", desc: "Vous donnez le feu vert, on s'occupe de tout en moins de 7 jours." },
];

export default function BookingPage() {
  return (
    <section className="relative pt-32 pb-24 px-4 sm:px-6 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-950/50 via-[#000000] to-purple-950/30" />
        <motion.div
          animate={{ scale: [1, 1.15, 1], opacity: [0.2, 0.35, 0.2] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-0 left-1/3 w-[600px] h-[600px] bg-blue-600/15 rounded-full blur-[120px]"
        />
        <motion.div
          animate={{ scale: [1.1, 1, 1.1], opacity: [0.15, 0.3, 0.15] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 3 }}
          className="absolute bottom-0 right-1/3 w-[500px] h-[500px] bg-purple-600/15 rounded-full blur-[100px]"
        />
        <div
          className="absolute inset-0 opacity-[0.025]"
          style={{
            backgroundImage: `linear-gradient(rgba(255,255,255,0.4) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.4) 1px, transparent 1px)`,
            backgroundSize: "60px 60px",
          }}
        />
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40, filter: "blur(8px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass border border-blue-500/20 text-sm text-blue-300 font-medium mb-5">
            <span className="w-2 h-2 rounded-full bg-blue-400 animate-pulse" />
            Appel gratuit · 20 minutes · Sans engagement
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight leading-[1.08] mb-5">
            Réservez votre appel{" "}
            <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
              de démarrage gratuit
            </span>
          </h1>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto leading-relaxed">
            En 20 minutes, notre équipe analyse votre situation, répond à vos questions et vous explique comment lancer votre LLC américaine en moins de 7 jours.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
          {/* Left — info */}
          <div className="space-y-8">
            {/* Benefits */}
            <motion.div
              initial={{ opacity: 0, x: -40, filter: "blur(8px)" }}
              animate={{ opacity: 1, x: 0, filter: "blur(0px)" }}
              transition={{ duration: 0.7, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
              className="glass rounded-2xl border border-white/8 p-6"
            >
              <h3 className="text-white font-semibold text-lg mb-5">Ce que vous obtenez</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {benefits.map((b) => (
                  <div key={b.text} className="flex items-center gap-3 group">
                    <div className="w-9 h-9 rounded-xl glass border border-white/8 flex items-center justify-center text-lg shrink-0 group-hover:border-blue-500/30 transition-colors">
                      {b.icon}
                    </div>
                    <span className="text-gray-300 text-sm">{b.text}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Steps */}
            <motion.div
              initial={{ opacity: 0, x: -40, filter: "blur(8px)" }}
              animate={{ opacity: 1, x: 0, filter: "blur(0px)" }}
              transition={{ duration: 0.7, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
              className="glass rounded-2xl border border-white/8 p-6"
            >
              <h3 className="text-white font-semibold text-lg mb-5">Comment ça se passe</h3>
              <div className="space-y-4">
                {steps.map((s, i) => (
                  <div key={s.num} className="flex gap-4 group">
                    <div className="flex flex-col items-center">
                      <div className="w-8 h-8 rounded-full bg-gradient-to-br from-blue-600 to-purple-600 flex items-center justify-center text-xs font-bold text-white shrink-0">
                        {s.num}
                      </div>
                      {i < steps.length - 1 && (
                        <div className="w-px h-8 bg-gradient-to-b from-blue-500/30 to-transparent mt-1" />
                      )}
                    </div>
                    <div className="pb-2">
                      <div className="text-white font-semibold text-sm mb-1">{s.title}</div>
                      <div className="text-gray-400 text-sm">{s.desc}</div>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Social proof mini */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.35, ease: [0.22, 1, 0.36, 1] }}
              className="flex items-center gap-4 px-5 py-4 glass rounded-2xl border border-white/8"
            >
              <div className="flex -space-x-2">
                {["TL","CD","AR","JM"].map((a, i) => (
                  <div key={i} className={`w-9 h-9 rounded-full border-2 border-[#000000] flex items-center justify-center text-xs font-bold text-white ${["bg-blue-600","bg-purple-600","bg-cyan-600","bg-emerald-600"][i]}`}>
                    {a}
                  </div>
                ))}
              </div>
              <div>
                <div className="text-white text-sm font-semibold">+500 entrepreneurs français</div>
                <div className="flex items-center gap-1 text-amber-400 text-xs">
                  {"★★★★★"} <span className="text-gray-400 ml-1">4.9/5 de satisfaction</span>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Right — Calendar embed */}
          <motion.div
            initial={{ opacity: 0, x: 40, filter: "blur(12px)" }}
            animate={{ opacity: 1, x: 0, filter: "blur(0px)" }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="relative"
          >
            {/* Glow */}
            <motion.div
              animate={{ opacity: [0.3, 0.6, 0.3] }}
              transition={{ duration: 4, repeat: Infinity }}
              className="absolute -inset-2 bg-gradient-to-r from-blue-600/15 via-purple-600/15 to-cyan-600/15 rounded-3xl blur-xl"
            />

            <div className="relative glass rounded-2xl border border-white/10 overflow-hidden shadow-2xl shadow-blue-900/30">
              {/* Calendly embed — replace the URL with your actual Calendly link */}
              <iframe
                src="https://calendly.com/libertyscale/appel-decouverte"
                width="100%"
                height="700"
                frameBorder="0"
                title="Réserver un appel Liberty Scale"
                className="bg-transparent"
              />

              {/* Fallback if Calendly not configured */}
              <div className="absolute inset-0 flex flex-col items-center justify-center bg-[#070718] p-8 text-center"
                style={{ display: 'none' }} /* Remove this style once Calendly is configured */
              >
                <div className="text-5xl mb-4">📅</div>
                <h3 className="text-white text-xl font-bold mb-2">Calendrier de réservation</h3>
                <p className="text-gray-400 text-sm mb-6 max-w-xs">
                  Remplacez l'URL Calendly dans <code className="text-blue-400">BookingPage.tsx</code> par votre lien de réservation.
                </p>
                <a
                  href="https://calendly.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold px-6 py-3 rounded-xl text-sm"
                >
                  Configurer Calendly →
                </a>
              </div>
            </div>

            {/* Below embed — trust signals */}
            <div className="flex flex-wrap items-center justify-center gap-4 mt-4">
              {["🔒 Appel sécurisé", "📞 Sans frais", "✅ Sans engagement"].map((t) => (
                <span key={t} className="text-gray-500 text-xs">{t}</span>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
