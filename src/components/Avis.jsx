import React from 'react';
import { Star, Quote, CheckCircle2 } from 'lucide-react';
import { motion } from 'framer-motion';

const reviews = [
  {
    id: 1,
    name: "SOPHIE MARTIN",
    role: "Syndic de Copropriété",
    location: "Paris 15ème",
    avatar: "S",
    text: "Global Etanchéité a su gérer la rénovation de notre toiture terrasse de 500m² avec un professionnalisme exemplaire. Délais respectés et communication fluide.",
    ref: "REF: PRO-2023-045",
    stars: 5
  },
  {
    id: 2,
    name: "MARC DUBREUIL",
    role: "Particulier",
    location: "Boulogne-Billancourt",
    avatar: "M",
    text: "Intervention rapide pour une fuite sur mon balcon. Le diagnostic était précis et la réparation invisible. Je suis très satisfait du résultat.",
    ref: "REF: PAR-2023-112",
    stars: 5
  },
  {
    id: 3,
    name: "ARCHITECTE L. ROUSSEAU",
    role: "Maître d'œuvre",
    location: "Versailles",
    avatar: "A",
    text: "Un partenaire fiable pour nos chantiers. La qualité des finitions en résine est toujours au rendez-vous. Une équipe technique qui connait son métier.",
    ref: "REF: PRO-2024-002",
    stars: 5
  }
];

export default function Testimonials() {
  return (
    <section className="bg-[#0B1120] py-16 lg:py-24 overflow-hidden text-white relative">
      {/* Léger gradient de fond pour la profondeur */}
      <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-slate-800/30 to-[#0B1120] z-0 pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* --- HEADER DE LA SECTION --- */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end mb-16 gap-8">
          
          {/* Titre et Badge */}
          <div className="max-w-2xl">
            <motion.div 
              initial={{ opacity: 0, y: -10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-slate-700 bg-slate-800/50 mb-6"
            >
              <div className="w-2 h-2 rounded-full bg-[#0EA5E9]"></div>
              <span className="text-[#0EA5E9] text-xs font-bold uppercase tracking-widest">
                Retours Clients Vérifiés
              </span>
            </motion.div>

            <motion.h2 
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-5xl lg:text-6xl font-black uppercase leading-tight"
            >
              Satisfaction <br />
              <span className="text-[#0EA5E9]">Garantie 100%</span>
            </motion.h2>
          </div>

          {/* Résumé de la note (Coin droit) */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex items-center gap-6 border-l-4 border-[#0EA5E9] pl-6 py-2 bg-slate-800/30 rounded-r-lg backdrop-blur-sm"
          >
            <div>
              <div className="flex items-baseline gap-1">
                <span className="text-5xl font-bold text-white">4.9</span>
                <span className="text-xl text-slate-400 font-medium">/5</span>
              </div>
              <p className="text-[#0EA5E9] text-xs uppercase tracking-widest mt-1">
                Excellence Certifiée
              </p>
            </div>
            <div className="flex gap-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={24} fill="#EAB308" className="text-[#EAB308]" />
              ))}
            </div>
          </motion.div>
        </div>

        {/* --- GRILLE DES AVIS --- */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reviews.map((review, index) => (
            <motion.div
              key={review.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15, duration: 0.5 }}
              className="bg-[#151E2E] border border-slate-800 p-8 rounded-sm hover:border-[#0EA5E9]/50 transition-colors duration-300 flex flex-col justify-between group"
            >
              {/* Haut de carte : Icone Quote + Badge Vérifié */}
              <div>
                <div className="flex justify-between items-start mb-6">
                  <div className="w-10 h-10 bg-[#0F172A] border border-slate-700 flex items-center justify-center rounded-sm group-hover:border-[#0EA5E9] transition-colors">
                    <Quote size={20} className="text-[#0EA5E9]" />
                  </div>
                  <div className="flex items-center gap-1.5 px-3 py-1 rounded-sm bg-[#064E3B]/30 border border-[#059669]/30 text-[#10B981] text-[10px] font-bold uppercase tracking-wider">
                    <CheckCircle2 size={12} />
                    Vérifié
                  </div>
                </div>

                {/* Étoiles */}
                <div className="flex gap-1 mb-4">
                  {[...Array(review.stars)].map((_, i) => (
                    <Star key={i} size={16} fill="#0EA5E9" className="text-[#0EA5E9]" />
                  ))}
                </div>

                {/* Texte de l'avis */}
                <p className="text-slate-300 leading-relaxed mb-6 font-light">
                  "{review.text}"
                </p>
                
                {/* Référence */}
                <p className="text-slate-600 text-[10px] uppercase font-mono mb-8 tracking-wide">
                  {review.ref}
                </p>
              </div>

              {/* Bas de carte : Auteur */}
              <div className="pt-6 border-t border-slate-800 flex items-center gap-4">
                {/* Avatar Lettre */}
                <div className="w-12 h-12 bg-[#0EA5E9] text-white font-bold text-xl flex items-center justify-center rounded-sm shadow-lg shadow-cyan-500/20">
                  {review.avatar}
                </div>
                
                {/* Infos Auteur */}
                <div>
                  <h4 className="text-white font-bold text-sm uppercase tracking-wide">
                    {review.name}
                  </h4>
                  <p className="text-slate-400 text-xs mt-0.5">
                    {review.role}
                  </p>
                  <p className="text-slate-500 text-[10px]">
                    {review.location}
                  </p>
                </div>
              </div>

            </motion.div>
          ))}
        </div>
        
      </div>
    </section>
  );
}