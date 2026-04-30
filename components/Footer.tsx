"use client";

import { motion } from "framer-motion";

const links = {
  Produit: ["Fonctionnalités", "Tarifs", "Comment ça marche", "FAQ"],
  Légal: ["Politique de confidentialité", "Conditions d'utilisation", "Cookies", "Mentions légales"],
  Société: ["À propos", "Contact", "Blog", "Affiliés"],
};

export default function Footer() {
  return (
    <footer className="relative border-t border-white/5 px-4 sm:px-6">
      {/* Subtle glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-px bg-gradient-to-r from-transparent via-blue-500/30 to-transparent" />

      <div className="max-w-7xl mx-auto py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 mb-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <a href="#" className="flex items-center gap-2.5 mb-4 group w-fit">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center shadow-lg shadow-blue-500/20 group-hover:shadow-blue-500/40 transition-shadow">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" className="text-white">
                  <path d="M12 2L2 7l10 5 10-5-10-5z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round"/>
                  <path d="M2 17l10 5 10-5" stroke="currentColor" strokeWidth="2" strokeLinejoin="round"/>
                  <path d="M2 12l10 5 10-5" stroke="currentColor" strokeWidth="2" strokeLinejoin="round"/>
                </svg>
              </div>
              <span className="text-lg font-semibold tracking-tight">
                Liberty<span className="gradient-text">Scale</span>
              </span>
            </a>
            <p className="text-gray-500 text-sm leading-relaxed max-w-xs mb-6">
              Le moyen le plus rapide pour les entrepreneurs du monde entier de créer et gérer une LLC américaine — sans complexité.
            </p>
            {/* Social */}
            <div className="flex gap-3">
              {["𝕏", "in", "📧"].map((s, i) => (
                <motion.a
                  key={i}
                  href="#"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-8 h-8 glass border border-white/8 hover:border-white/20 rounded-lg flex items-center justify-center text-xs text-gray-400 hover:text-white transition-colors"
                >
                  {s}
                </motion.a>
              ))}
            </div>
          </div>

          {/* Links */}
          {Object.entries(links).map(([category, items]) => (
            <div key={category}>
              <h4 className="text-white text-sm font-semibold mb-4">{category}</h4>
              <ul className="space-y-2.5">
                {items.map((item) => (
                  <li key={item}>
                    <a
                      href="#"
                      className="text-gray-500 text-sm hover:text-gray-300 transition-colors duration-200"
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/5 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-gray-600 text-xs">
            © {new Date().getFullYear()} Liberty Scale. Tous droits réservés.
          </p>
          <p className="text-gray-700 text-xs text-center">
            Liberty Scale n'est pas un cabinet juridique et ne fournit pas de conseils légaux.
          </p>
          <div className="flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            <span className="text-gray-600 text-xs">Tous les systèmes opérationnels</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
