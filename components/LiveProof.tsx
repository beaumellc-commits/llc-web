"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const notifications = [
  { name: "Thomas L.", city: "Paris 🇫🇷", action: "vient de créer sa LLC New Mexico", time: "il y a 2 min" },
  { name: "Camille D.", city: "Lyon 🇫🇷", action: "a obtenu son EIN en 48h", time: "il y a 5 min" },
  { name: "Maxime B.", city: "Bordeaux 🇫🇷", action: "a ouvert son compte Mercury", time: "il y a 8 min" },
  { name: "Julie M.", city: "Marseille 🇫🇷", action: "vient de créer sa LLC New Mexico", time: "il y a 12 min" },
  { name: "Antoine R.", city: "Nantes 🇫🇷", action: "a activé Stripe US", time: "il y a 15 min" },
  { name: "Sophie G.", city: "Toulouse 🇫🇷", action: "vient de créer sa LLC New Mexico", time: "il y a 19 min" },
  { name: "Lucas P.", city: "Montpellier 🇫🇷", action: "a obtenu son EIN aujourd'hui", time: "il y a 22 min" },
  { name: "Emma V.", city: "Rennes 🇫🇷", action: "a ouvert son compte Wise US", time: "il y a 27 min" },
];

export default function LiveProof() {
  const [current, setCurrent] = useState<number | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    // Show first notification after 4 seconds
    const initial = setTimeout(() => {
      setCurrent(0);
      setVisible(true);
    }, 4000);
    return () => clearTimeout(initial);
  }, []);

  useEffect(() => {
    if (current === null) return;

    // Hide after 4.5s, then show next after 6s
    const hideTimer = setTimeout(() => setVisible(false), 4500);
    const nextTimer = setTimeout(() => {
      setCurrent((prev) =>
        prev !== null ? (prev + 1) % notifications.length : 0
      );
      setVisible(true);
    }, 6000);

    return () => {
      clearTimeout(hideTimer);
      clearTimeout(nextTimer);
    };
  }, [current]);

  const notif = current !== null ? notifications[current] : null;

  return (
    <div className="fixed bottom-24 left-4 z-40 pointer-events-none">
      <AnimatePresence>
        {visible && notif && (
          <motion.div
            key={current}
            initial={{ opacity: 0, x: -60, y: 10 }}
            animate={{ opacity: 1, x: 0, y: 0 }}
            exit={{ opacity: 0, x: -60, y: 10 }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="flex items-center gap-3 bg-black/90 backdrop-blur-xl border border-white/10 rounded-2xl px-4 py-3 shadow-2xl shadow-black/50 max-w-[280px]"
          >
            {/* Avatar */}
            <div className="w-9 h-9 rounded-full bg-gradient-to-br from-pink-500 to-purple-600 flex items-center justify-center text-xs font-bold text-white shrink-0 shadow-lg shadow-pink-500/30">
              {notif.name.charAt(0)}
            </div>

            {/* Text */}
            <div className="min-w-0">
              <p className="text-white text-xs font-semibold leading-tight truncate">
                {notif.name} · {notif.city}
              </p>
              <p className="text-white/55 text-xs leading-snug mt-0.5">
                {notif.action}
              </p>
              <p className="text-white/30 text-[10px] mt-0.5">{notif.time}</p>
            </div>

            {/* Green dot */}
            <div className="w-2 h-2 rounded-full bg-emerald-400 shrink-0 shadow-sm shadow-emerald-400/60" />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
