import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Layers } from 'lucide-react';
import Realizations from '../components/Realizations';

export default function RealizationsPage() {
  // Remonter en haut de page au chargement
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-[#F8FAFC] min-h-screen pt-24 font-sans text-[#0F172A]">
      
      {/* --- SECTION HERO (En-tête de la page) --- */}
      <section className="relative py-20 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex flex-col md:flex-row justify-between items-end gap-8"
          >
            {/* Titre et Intro */}
            <div className="max-w-2xl">
              <span className="text-[#0EA5E9] font-bold tracking-[0.3em] uppercase text-xs mb-4 block flex items-center gap-2">
                 <Layers size={14}/> Portfolio
              </span>
              <h1 className="text-[#0F172A] text-5xl md:text-7xl font-black uppercase leading-[0.9] mb-6">
                Nos Projets <br />
                <span className="text-[#0EA5E9]">Réalisés</span>
              </h1>
              <p className="text-slate-500 text-lg font-medium leading-relaxed max-w-xl">
                Découvrez notre savoir-faire à travers une sélection de chantiers récents en Île-de-France. Du génie civil aux terrasses privées.
              </p>
            </div>

          
          </motion.div>
        </div>
      </section>

      {/* --- INCLUSION DU COMPOSANT EXISTANT --- */}
      {/* On passe une className ou style si besoin, sinon il s'affiche tel quel */}
      <div className="bg-[#F8FAFC]">
        <Realizations />
      </div>

    </div>
  );
}