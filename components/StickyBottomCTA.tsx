"use client";

import { motion, AnimatePresence, useScroll } from "framer-motion";
import { useEffect, useState } from "react";

export default function StickyBottomCTA() {
  const [visible, setVisible] = useState(false);
  const { scrollY } = useScroll();

  useEffect(() => {
    return scrollY.on("change", (v) => {
      setVisible(v > 400);
    });
  }, [scrollY]);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ type: "spring", stiffness: 300, damping: 30 }}
          className="fixed bottom-0 left-0 right-0 z-50 px-4 pb-4 pt-3"
        >
          {/* Blur backdrop */}
          <div className="absolute inset-0 bg-[#050510]/80 backdrop-blur-xl border-t border-white/8" />

          <div className="relative max-w-4xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3">
            {/* Left message */}
            <div className="flex items-center gap-3 text-center sm:text-left">
              <motion.div
                animate={{ rotate: [0, 10, -10, 0] }}
                transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
                className="text-2xl hidden sm:block"
              >
                🚀
              </motion.div>
              <div>
                <div className="text-white font-semibold text-sm leading-snug">
                  Prêt à lancer votre société américaine ?
                </div>
                <div className="text-gray-400 text-xs">LLC créée en moins de 7 jours · 100% à distance</div>
              </div>
            </div>

            {/* Right CTAs */}
            <div className="flex items-center gap-3 shrink-0">
              <motion.a
                href="/rdv"
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.96 }}
                className="text-sm font-medium text-gray-300 hover:text-white transition-colors hidden sm:block"
              >
                Prendre un appel →
              </motion.a>
              <motion.a
                href="/rdv"
                whileHover={{ scale: 1.04, boxShadow: "0 0 30px rgba(99,102,241,0.5)" }}
                whileTap={{ scale: 0.97 }}
                className="relative overflow-hidden inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 text-white font-bold text-sm px-6 py-3 rounded-xl shadow-lg shadow-blue-900/40 transition-all duration-300 whitespace-nowrap"
              >
                {/* Shine */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/15 to-transparent -translate-x-full"
                  animate={{ x: ["calc(-100%)", "calc(100%)"] }}
                  transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
                />
                <span className="relative">Je veux ma LLC →</span>
              </motion.a>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
