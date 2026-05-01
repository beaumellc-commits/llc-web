"use client";

import { motion, useInView, AnimatePresence } from "framer-motion";
import { useRef, useState } from "react";

const videoTestimonials = [
  {
    name: "Thomas Leroy",
    role: "Fondateur e-commerce",
    location: "🇫🇷 Paris",
    avatar: "TL",
    avatarColor: "from-blue-500 to-indigo-600",
    quote: "LLC créée en 5 jours, Stripe US activé derrière. Je n'aurais jamais cru que c'était aussi simple.",
    duration: "1:24",
    thumbnail: "blue",
    videoUrl: null,
  },
  {
    name: "Camille Dubois",
    role: "Fondatrice SaaS",
    location: "🇫🇷 Lyon",
    avatar: "CD",
    avatarColor: "from-purple-500 to-pink-600",
    quote: "Zéro paperasse, zéro stress. L'équipe a tout géré. Je recommande les yeux fermés.",
    duration: "2:07",
    thumbnail: "purple",
    videoUrl: null,
  },
  {
    name: "Antoine Rousseau",
    role: "Vendeur Amazon FBA",
    location: "🇫🇷 Nantes",
    avatar: "AR",
    avatarColor: "from-cyan-500 to-blue-600",
    quote: "Mon compte Amazon US validé en moins d'une semaine grâce à ma LLC Delaware. Incroyable.",
    duration: "1:52",
    thumbnail: "cyan",
    videoUrl: null,
  },
  {
    name: "Julie Martin",
    role: "Dropshippeuse",
    location: "🇫🇷 Marseille",
    avatar: "JM",
    avatarColor: "from-emerald-500 to-teal-600",
    quote: "Payoneer, Stripe, compte bancaire US — tout ouvert grâce à ma LLC Wyoming. Game changer.",
    duration: "1:38",
    thumbnail: "emerald",
    videoUrl: null,
  },
];

const thumbnailGradients: Record<string, string> = {
  blue: "from-blue-900/80 via-indigo-900/50 to-[#000000]",
  purple: "from-purple-900/80 via-pink-900/50 to-[#000000]",
  cyan: "from-cyan-900/80 via-blue-900/50 to-[#000000]",
  emerald: "from-emerald-900/80 via-teal-900/50 to-[#000000]",
};

const glowColors: Record<string, string> = {
  blue: "shadow-blue-500/20",
  purple: "shadow-purple-500/20",
  cyan: "shadow-cyan-500/20",
  emerald: "shadow-emerald-500/20",
};

const borderColors: Record<string, string> = {
  blue: "hover:border-blue-500/30",
  purple: "hover:border-purple-500/30",
  cyan: "hover:border-cyan-500/30",
  emerald: "hover:border-emerald-500/30",
};

const Stars = () => (
  <div className="flex gap-0.5">
    {[1,2,3,4,5].map((i) => (
      <svg key={i} width="12" height="12" viewBox="0 0 24 24" fill="currentColor" className="text-amber-400">
        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
      </svg>
    ))}
  </div>
);

function VideoCard({ t, index }: { t: typeof videoTestimonials[0]; index: number }) {
  const [playing, setPlaying] = useState(false);
  const [hovered, setHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 50, filter: "blur(8px)" }}
      whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.7, delay: index * 0.12, ease: [0.22, 1, 0.36, 1] }}
      onHoverStart={() => setHovered(true)}
      onHoverEnd={() => setHovered(false)}
      className={`group relative glass rounded-2xl border border-white/8 ${borderColors[t.thumbnail]} overflow-hidden shadow-xl ${glowColors[t.thumbnail]} hover:shadow-2xl transition-all duration-300`}
    >
      {/* Video thumbnail */}
      <div className="relative aspect-video overflow-hidden cursor-pointer" onClick={() => setPlaying(true)}>

        {!playing ? (
          <>
            {/* Thumbnail background */}
            <div className={`absolute inset-0 bg-gradient-to-br ${thumbnailGradients[t.thumbnail]}`} />

            {/* Animated grid */}
            <div
              className="absolute inset-0 opacity-[0.05]"
              style={{
                backgroundImage: `linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)`,
                backgroundSize: "30px 30px",
              }}
            />

            {/* Glow orb in thumbnail */}
            <motion.div
              animate={{ scale: [1, 1.15, 1], opacity: [0.2, 0.4, 0.2] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 rounded-full blur-3xl bg-white/10"
            />

            {/* Avatar large in thumbnail */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center gap-3">
              <div className={`w-16 h-16 rounded-full bg-gradient-to-br ${t.avatarColor} flex items-center justify-center text-xl font-bold text-white shadow-xl`}>
                {t.avatar}
              </div>
              <div className="text-center">
                <div className="text-white font-semibold text-sm">{t.name}</div>
                <div className="text-white/60 text-xs">{t.role}</div>
              </div>
            </div>

            {/* Duration badge */}
            <div className="absolute top-3 right-3 glass border border-white/10 px-2 py-1 rounded-lg">
              <span className="text-white/70 text-xs font-medium">{t.duration}</span>
            </div>

            {/* Play overlay on hover */}
            <motion.div
              animate={{ opacity: hovered ? 1 : 0 }}
              transition={{ duration: 0.2 }}
              className="absolute inset-0 bg-black/30 flex items-center justify-center"
            >
              <motion.div
                animate={{ scale: hovered ? 1 : 0.8 }}
                transition={{ duration: 0.2 }}
                className="w-14 h-14 rounded-full bg-white/20 backdrop-blur-md border border-white/30 flex items-center justify-center"
              >
                <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor" className="text-white ml-1">
                  <path d="M8 5v14l11-7z"/>
                </svg>
              </motion.div>
            </motion.div>

            {/* Bottom gradient */}
            <div className="absolute bottom-0 left-0 right-0 h-12 bg-gradient-to-t from-[#0a0a20]/80 to-transparent" />

            {/* Waveform */}
            <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex items-end gap-0.5">
              {Array.from({ length: 20 }).map((_, i) => (
                <motion.div
                  key={i}
                  animate={hovered
                    ? { height: [3, Math.random() * 14 + 4, 3] }
                    : { height: 3 }
                  }
                  transition={{ duration: 0.8 + Math.random() * 0.6, repeat: Infinity, ease: "easeInOut", delay: i * 0.05 }}
                  className="w-0.5 bg-white/40 rounded-full"
                />
              ))}
            </div>
          </>
        ) : (
          <iframe
            className="w-full h-full"
            src={t.videoUrl ?? "https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1"}
            title={`Témoignage de ${t.name}`}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        )}
      </div>

      {/* Card content */}
      <div className="p-5">
        <Stars />
        <p className="text-gray-300 text-sm leading-relaxed mt-3 mb-4 italic group-hover:text-white transition-colors duration-300">
          &ldquo;{t.quote}&rdquo;
        </p>
        <div className="flex items-center gap-2.5 pt-3 border-t border-white/8">
          <div className={`w-8 h-8 rounded-full bg-gradient-to-br ${t.avatarColor} flex items-center justify-center text-xs font-bold text-white shrink-0`}>
            {t.avatar}
          </div>
          <div>
            <div className="text-white text-sm font-semibold">{t.name}</div>
            <div className="text-gray-500 text-xs">{t.role} · {t.location}</div>
          </div>
          <motion.button
            onClick={() => setPlaying(true)}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="ml-auto flex items-center gap-1.5 text-xs font-semibold text-blue-400 hover:text-blue-300 transition-colors"
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
              <path d="M8 5v14l11-7z"/>
            </svg>
            Voir
          </motion.button>
        </div>
      </div>
    </motion.div>
  );
}

export default function VideoTestimonials() {
  return (
    <section className="relative py-14 md:py-20 px-4 sm:px-6 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-950/8 to-transparent" />
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 80, repeat: Infinity, ease: "linear" }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] border border-purple-500/5 rounded-full"
        />
      </div>

      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40, filter: "blur(8px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mb-10"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass border border-red-500/20 text-sm text-red-300 font-medium mb-5">
            <motion.span
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              ▶
            </motion.span>
            Témoignages vidéo
          </div>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight mb-5">
            Ils ont osé.{" "}
            <span className="gradient-text">Regardez leur histoire.</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-xl mx-auto leading-relaxed">
            Nos clients parlent mieux que nous. Découvrez en vidéo comment Liberty Scale a transformé leur activité.
          </p>
        </motion.div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {videoTestimonials.map((t, i) => (
            <VideoCard key={t.name} t={t} index={i} />
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-14"
        >
          <p className="text-gray-500 text-sm mb-5">
            Prêt à écrire votre propre success story ?
          </p>
          <motion.a
            href="#pricing"
            whileHover={{ scale: 1.04, boxShadow: "0 0 40px rgba(99,102,241,0.4)" }}
            whileTap={{ scale: 0.97 }}
            className="inline-flex items-center gap-2.5 bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 text-white font-semibold text-base px-8 py-4 rounded-2xl shadow-xl shadow-blue-900/30 transition-all duration-300"
          >
            Rejoindre la communauté →
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
