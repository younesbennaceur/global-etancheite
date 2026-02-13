import React from 'react';
import { motion } from 'framer-motion';

// Liste fictive de partenaires (Remplacez les logos par les vôtres)
// Si vous n'avez pas encore les images, laissez ces placeholders, ça marchera.
const partners = [
  { name: "Nexity", logo: "./logo1.png" },
  { name: "Bouygues", logo: "./logo2.png" },
  { name: "Vinci", logo: "./logo3.png" },
  { name: "Foncia", logo: "./logo4.png" },
  { name: "Eiffage", logo: "./logo5.png" },
  { name: "SyndicPro", logo: "./logo6.png" },
];

export default function Partners() {
  return (
    <section className="py-16 bg-white border-b border-slate-100 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 mb-10 text-center">
        <h3 className="text-[#0EA5E9] font-bold tracking-[0.2em] uppercase text-xs mb-2">
          Réseau Professionnel
        </h3>
        <p className="text-[#0F172A] font-black text-xl uppercase">
          Ils nous font confiance
        </p>
      </div>

      {/* --- CONTENEUR DU SCROLL --- */}
      <div className="relative w-full flex overflow-hidden mask-gradient">
        
        {/* Ombres dégradées sur les côtés pour l'effet de fondu (Optionnel mais classe) */}
        <div className="absolute top-0 left-0 w-20 h-full bg-gradient-to-r from-white to-transparent z-10"></div>
        <div className="absolute top-0 right-0 w-20 h-full bg-gradient-to-l from-white to-transparent z-10"></div>

        {/* --- BANDE DÉFILANTE (DUPLIQUÉE POUR L'EFFET INFINI) --- */}
        <motion.div 
          className="flex items-center gap-12 md:gap-24 pr-12 md:pr-24"
          // Animation : On déplace de 0 à -50% (car on a dupliqué la liste une fois)
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            repeat: Infinity,
            ease: "linear",
            duration: 20, // Vitesse : plus le chiffre est grand, plus c'est lent
          }}
          style={{ width: "fit-content" }}
        >
          {/* On répète la liste 2 fois pour créer une boucle parfaite sans coupure */}
          {[...partners, ...partners].map((partner, index) => (
            <div key={index} className="flex-shrink-0 group cursor-pointer">
              {/* Image en noir et blanc par défaut, couleur au survol */}
              <img 
                src={partner.logo} 
                alt={partner.name} 
                className="h-10 md:h-20 w-auto object-contain opacity-40 grayscale group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-500"
              />
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}