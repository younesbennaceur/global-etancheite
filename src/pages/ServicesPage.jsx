import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, LayoutGrid } from 'lucide-react';
import Services from '../components/Services'; // Import de votre composant grille existant


export default function ServicesPage() {
  // Remonter en haut de page au chargement
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-[#F8FAFC] min-h-screen pt-24 font-sans text-[#0F172A]">
      
      {/* --- SECTION HERO (En-tête identique à Réalisations) --- */}
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
                 <LayoutGrid size={14}/> Nos Expertises
              </span>
              <h1 className="text-[#0F172A] text-5xl md:text-7xl font-black uppercase leading-[0.9] mb-6">
                Solutions <br />
                <span className="text-[#0EA5E9]">Techniques</span>
              </h1>
              <p className="text-slate-500 text-lg font-medium leading-relaxed max-w-xl">
                De la construction neuve à la rénovation, nous maîtrisons l'ensemble des techniques d'étanchéité aux normes DTU pour protéger durablement vos ouvrages.
              </p>
            </div>

            {/* Badge Certifié (Adapté pour Services : Garantie Décennale) */}
            <div className="hidden md:block text-right">
                <div className="border border-slate-200 p-4 rounded-sm bg-slate-50">
                    <div className="flex items-center gap-2 mb-1 justify-end">
                        <ShieldCheck size={16} className="text-[#0EA5E9]"/>
                        <p className="font-mono text-xs text-slate-400 uppercase tracking-widest">Couverture</p>
                    </div>
                    <p className="font-black text-[#0F172A] text-xl">DÉCENNALE</p>
                </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* --- INCLUSION DE VOTRE GRILLE DE SERVICES --- */}
      <div className="bg-[#FAFAFA]">
        <Services />
      </div>

    </div>
  );
}