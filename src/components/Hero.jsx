import React from 'react';
import { ShieldCheck, ArrowRight, Droplets, Umbrella, CheckCircle2 } from 'lucide-react';
import { motion } from 'framer-motion';

// Composant pour le Ruban Animé (Marquee) - CORRIGÉ
const MarqueeRibbon = () => {
  return (
    // Ce container gère l'espace pour le ruban
    <div className="absolute top-0 right-0 w-96 h-96 overflow-hidden pointer-events-none z-20">
      {/* Container rotatif : position ajustée pour déborder sur la droite */}
      <div className="absolute top-10 transform rotate-45 bg-[#0F172A] shadow-2xl border-b-2 border-[#0EA5E9] py-3 w-[150%] flex justify-center items-center">
        {/* Bande défilante */}
        <motion.div 
          className="flex whitespace-nowrap gap-8"
          animate={{ x: [0, -1000] }}
          transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
        >
          {[...Array(10)].map((_, i) => (
            <span key={i} className="text-[#0EA5E9] font-bold text-xs tracking-[0.2em] uppercase flex items-center gap-4">
              /// Recherche de fuite /// Étanchéité /// Bitume
            </span>
          ))}
        </motion.div>
        {/* Ombre portée pour effet 3D */}
        <div className="absolute inset-0 shadow-[inset_0_0_20px_rgba(0,0,0,0.5)] pointer-events-none"></div>
      </div>
    </div>
  );
};

const Hero = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center pt-32 pb-20 overflow-hidden bg-slate-50 font-sans selection:bg-[#0EA5E9] selection:text-white">
      
      {/* --- FOND D'AMBIANCE (Vibe Eau/Propre) --- */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-[-20%] left-[-10%] w-[500px] h-[500px] bg-blue-100 rounded-full blur-[100px] opacity-60 mix-blend-multiply animate-pulse" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[600px] h-[600px] bg-cyan-50 rounded-full blur-[120px] opacity-70 mix-blend-multiply" />
        {/* Grille subtile pour le côté technique */}
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20"></div>
      </div>

      {/* --- LE RUBAN ANIMÉ --- */}
      <MarqueeRibbon />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-8 items-center">
          
          {/* --- GAUCHE : CONTENU TEXTE --- */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="space-y-8"
          >
            {/* Badge Premium */}
            <motion.div 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-blue-200 bg-white/50 backdrop-blur-sm shadow-sm text-[#0284C7] text-xs font-bold tracking-widest uppercase"
            >
              <ShieldCheck size={14} className="animate-pulse" />
              Protection & Durabilité
            </motion.div>

            {/* Titre Impactant */}
            <div className="relative">
              <h1 className="text-5xl lg:text-6xl font-black text-[#0F172A] leading-[1.1] tracking-tight">
                STOP AUX <br />
                <span className="relative inline-block text-[#0EA5E9] z-10">
                  INFILTRATIONS.
                  {/* Soulignement liquide animé */}
                  <svg className="absolute w-[110%] -bottom-2 -left-2 h-4 text-[#5DBAE8] -z-10" viewBox="0 0 200 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <motion.path 
                      d="M2.00025 7.00005C29.6232 2.76865 99.0309 -2.87329 198.001 3.50005" 
                      stroke="currentColor" 
                      strokeWidth="5" 
                      strokeLinecap="round"
                      initial={{ pathLength: 0 }}
                      animate={{ pathLength: 1 }}
                      transition={{ duration: 1, delay: 0.5, ease: "easeInOut" }}
                    />
                  </svg>
                </span>
                <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#334155] to-[#64748b]">
                  TOITURE PROTÉGÉE.
                </span>
              </h1>
            </div>

            {/* Paragraphe descriptif */}
            <p className="text-lg text-gray-500 max-w-lg leading-relaxed border-l-2 border-[#0EA5E9] pl-6">
              Expertise certifiée en étanchéité bitumeuse et résine liquide. 
              <span className="block mt-2 text-gray-700 font-medium">
                Nous transformons vos problèmes d'humidité en solutions pérennes.
              </span>
            </p>

            {/* Boutons d'action */}
            <div className="flex flex-col sm:flex-row gap-4 pt-2">
              <motion.button 
                whileHover={{ scale: 1.02, boxShadow: "0 20px 25px -5px rgb(14 165 233 / 0.3)" }}
                whileTap={{ scale: 0.98 }}
                className="group bg-[#0EA5E9] text-white px-8 py-4 rounded-lg font-bold shadow-lg shadow-blue-400/30 flex items-center justify-center gap-3 transition-all"
              >
                Demander un devis
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </motion.button>
              
              <motion.button 
                whileHover={{ scale: 1.02, backgroundColor: "#F8FAFC" }}
                whileTap={{ scale: 0.98 }}
                className="bg-white border border-gray-200 text-gray-700 px-8 py-4 rounded-lg font-bold shadow-sm hover:border-blue-300 transition-all flex items-center justify-center gap-2"
              >
                Nos Réalisations
              </motion.button>
            </div>

            {/* Preuve Sociale / Technique */}
            <div className="flex items-center gap-6 pt-4 text-xs font-semibold text-gray-400 uppercase tracking-wide">
              <div className="flex items-center gap-2">
                <CheckCircle2 size={16} className="text-[#0EA5E9]" />
                <span>Garantie Décennale</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 size={16} className="text-[#0EA5E9]" />
                <span>Normes DTU</span>
              </div>
            </div>
          </motion.div>

          {/* --- DROITE : VISUEL ANIMÉ --- */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="relative mt-12 lg:mt-0 perspective-1000"
          >
            {/* Effet de flottement global */}
            <motion.div
              animate={{ y: [0, -15, 0] }}
              transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
              className="relative z-10"
            >
              {/* Cadre principal de l'image */}
              <div className="relative rounded-2xl overflow-hidden shadow-2xl shadow-blue-900/20 border-[6px] border-white bg-white group">
                <img 
                  src="https://images.unsplash.com/photo-1621905251189-08b45d6a269e?q=80&w=2069&auto=format&fit=crop" 
                  alt="Application étanchéité" 
                  className="w-full h-[500px] object-cover scale-105 group-hover:scale-110 transition-transform duration-1000"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0f172a]/80 via-transparent to-transparent"></div>

                {/* Annotation "Membrane" avec ligne animée */}
                <div className="absolute top-[40%] left-8">
                   <motion.div 
                     initial={{ width: 0 }}
                     animate={{ width: 60 }}
                     transition={{ delay: 1, duration: 0.8 }}
                     className="h-[2px] bg-white shadow-sm"
                   />
                   <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 1.8 }}
                      className="absolute -top-6 left-0 bg-[#0EA5E9] text-white text-[10px] font-bold px-2 py-1 rounded-sm"
                   >
                     MEMBRANE 4MM
                   </motion.div>
                </div>

                {/* Badge Parapluie (Verre) */}
                <motion.div 
                  className="absolute top-6 right-6 p-3 rounded-full bg-white/20 backdrop-blur-md border border-white/30 text-white shadow-lg"
                  whileHover={{ rotate: 10, scale: 1.1 }}
                >
                  <Umbrella size={28} />
                </motion.div>

                {/* Carte "100% Étanche" (Bas Droite - Style Glassmorphism) */}
                <div className="absolute bottom-6 right-6">
                  <motion.div 
                    whileHover={{ y: -5 }}
                    className="bg-[#06b6d4]/90 backdrop-blur-md border border-white/20 p-5 rounded-xl shadow-xl flex items-center gap-4 text-white"
                  >
                     <div className="bg-white/20 p-2 rounded-lg">
                        <Droplets size={24} className="fill-current text-white animate-bounce" />
                     </div>
                     <div>
                        <p className="text-2xl font-black leading-none">100%</p>
                        <p className="text-[10px] font-bold tracking-widest uppercase opacity-90">Étanche</p>
                     </div>
                  </motion.div>
                </div>
              </div>
            </motion.div>

            {/* Éléments décoratifs arrière-plan (profondeur) */}
            <div className="absolute -z-10 top-10 -right-10 w-full h-full border-2 border-[#0EA5E9]/30 rounded-2xl rounded-tr-[4rem]"></div>
            <div className="absolute -z-10 -bottom-10 -left-10 w-40 h-40 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-20"></div>

          </motion.div>
        </div>
      </div>
      
      {/* Ruban texte défilant en bas (Footer Hero) */}
      <div className="absolute bottom-0 w-full bg-[#0F172A] py-3 overflow-hidden">
        <div className="flex whitespace-nowrap">
            {[...Array(5)].map((_, i) => (
                <span key={i} className="text-[#334155] font-bold text-xs tracking-[0.2em] mx-4 uppercase">
                    /// Recherche de fuite /// Étanchéité liquide /// Bitume
                </span>
            ))}
        </div>
      </div>

    </section>
  );
};

export default Hero;