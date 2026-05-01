"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

const faqs = [
  {
    q: "Puis-je activer Shopify Payments avec ma LLC américaine ?",
    a: "Oui, c'est l'un des avantages les plus recherchés. Shopify Payments n'est disponible qu'aux États-Unis, et votre LLC vous donne accès à ce système de paiement. Vous pouvez également ouvrir un compte Amazon Seller US, Stripe US, et Payoneer — tout ça grâce à votre entité légale américaine. Nous guidons chaque client dans ces démarches jusqu'à l'activation complète.",
  },
  {
    q: "Combien de temps faut-il pour créer une LLC ?",
    a: "En moyenne, nous livrons une LLC complète (statuts déposés + EIN + compte bancaire) en moins de 7 jours ouvrés. Dans certains cas, le Delaware peut être prêt en 48h. Vous recevez un rapport de progression à chaque étape.",
  },
  {
    q: "Dois-je me déplacer aux États-Unis ?",
    a: "Non, absolument pas. Tout le processus se fait à distance. Vous signez les documents électroniquement, et nous gérons toutes les démarches administratives avec les autorités américaines en votre nom.",
  },
  {
    q: "Quelle est la différence entre Delaware et Wyoming ?",
    a: "Le Delaware est le choix classique pour lever des fonds (90% des startups US y sont domiciliées) et pour les activités digitales. Le Wyoming offre une meilleure confidentialité (pas de publication des noms des membres), aucune taxe d'État sur les revenus, et des frais annuels plus bas. On vous guide pour choisir le bon État selon votre situation.",
  },
  {
    q: "C'est légal depuis la France / mon pays ?",
    a: "Oui, 100% légal. Un non-résident peut créer et posséder une LLC américaine sans restriction. Il existe des obligations déclaratives côté français (formulaire 3916 pour compte bancaire étranger, etc.) que nous vous expliquons en détail lors de l'appel.",
  },
  {
    q: "Puis-je ouvrir un compte bancaire US sans me déplacer ?",
    a: "Oui. Nous travaillons avec des banques et néo-banques américaines (Mercury, Relay, Wise Business) qui permettent l'ouverture de compte 100% en ligne pour les non-résidents, avec votre LLC comme support légal.",
  },
  {
    q: "Qu'est-ce que l'EIN et en ai-je besoin ?",
    a: "L'EIN (Employer Identification Number) est le numéro fiscal de votre LLC, l'équivalent du SIRET en France. Il est indispensable pour ouvrir un compte bancaire US, activer Stripe, Amazon, Payoneer, etc. Il est inclus dans notre pack et obtenu sous 3-5 jours ouvrés.",
  },
  {
    q: "Y a-t-il des frais annuels après la création ?",
    a: "Oui, chaque LLC a des frais de maintenance annuels. Au Delaware, c'est environ 300$/an (franchise tax + agent enregistré). Au Wyoming, environ 130-150$/an. Ces frais sont directement payés à l'État, en dehors de nos honoraires, et nous vous prévenons avant chaque échéance.",
  },
  {
    q: "Que se passe-t-il si j'ai des questions après la création ?",
    a: "Votre support ne s'arrête pas à la livraison. Vous avez accès à notre équipe pour toutes vos questions (compte bancaire, Stripe, déclarations, renouvellement) via WhatsApp ou email. Nous restons présents jusqu'à ce que votre LLC soit pleinement opérationnelle.",
  },
];

function FAQItem({ faq, index }: { faq: typeof faqs[0]; index: number }) {
  const [open, setOpen] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.5, delay: index * 0.06 }}
      className="border-b border-white/8 last:border-0"
    >
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between py-5 text-left gap-4 group cursor-pointer"
        aria-expanded={open}
      >
        <span className={`text-base font-semibold transition-colors duration-200 ${open ? "text-white" : "text-white/75 group-hover:text-white"}`}>
          {faq.q}
        </span>
        <motion.div
          animate={{ rotate: open ? 45 : 0 }}
          transition={{ duration: 0.25 }}
          className="shrink-0 w-6 h-6 rounded-full border border-white/15 flex items-center justify-center"
          style={open ? { background: "linear-gradient(135deg, #ec4899, #a855f7)", border: "none" } : {}}
        >
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" className="text-white">
            <path d="M12 5v14M5 12h14" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"/>
          </svg>
        </motion.div>
      </button>

      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden"
          >
            <p className="text-gray-400 text-sm leading-relaxed pb-5 pr-10">
              {faq.a}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export default function FAQ() {
  return (
    <section className="relative py-14 md:py-20 px-4 sm:px-6">
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute bottom-0 left-0 w-[500px] h-[400px] bg-indigo-600/5 rounded-full blur-[120px]" />
      </div>

      <div className="max-w-3xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.7 }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass border border-indigo-500/20 text-sm text-indigo-300 font-medium mb-5">
            Questions fréquentes
          </div>
          <h2 className="text-4xl sm:text-5xl font-black tracking-tight mb-4">
            Tout ce que vous{" "}
            <span className="gradient-text">voulez savoir.</span>
          </h2>
          <p className="text-gray-400 text-lg leading-relaxed">
            Des réponses claires aux questions que tout fondateur se pose avant de se lancer.
          </p>
        </motion.div>

        {/* FAQ list */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.5 }}
          className="glass rounded-3xl border border-white/8 px-6 md:px-10"
        >
          {faqs.map((faq, i) => (
            <FAQItem key={i} faq={faq} index={i} />
          ))}
        </motion.div>

        {/* CTA under FAQ */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center mt-10"
        >
          <p className="text-gray-500 text-sm mb-4">
            Vous ne trouvez pas la réponse à votre question ?
          </p>
          <motion.a
            href="/rdv"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            className="inline-flex items-center gap-2 text-white font-semibold text-sm px-6 py-3 rounded-full glass border border-white/15 hover:border-white/30 transition-all duration-300 cursor-pointer"
          >
            Posez-la lors d&apos;un appel gratuit →
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
