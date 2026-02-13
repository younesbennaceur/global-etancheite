import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

// --- CONFIGURATION DE LA GRILLE BENTO ---
// 1. md:col-span-2 md:row-span-2 -> Grand carré (Focus)
// 2. md:col-span-1 md:row-span-1 -> Petit carré (Détail)
// 3. md:col-span-1 md:row-span-2 -> Rectangle vertical
// 4. md:col-span-2 md:row-span-1 -> Rectangle horizontal

const projectsData = [
  {
    id: 1,
    title: "Rénovation Terrasse",
    category: "Toit Terrasse",
    image: "/ToitTerrasse.jpeg",
    className: "md:col-span-2 md:row-span-2", // Grand bloc principal
    year: "2024"
  },
  {
    id: 2,
    title: "Application Résine",
    category: "Sols Résine",
    image: "/Resine.jpeg",
    className: "md:col-span-1 md:row-span-1", // Petit bloc haut droit
    year: "2024"
  },
  {
    id: 5,
    title: "Toiture Végétalisée",
    category: "Écologie",
    image: "/Végétalisées.jpeg",
    className: "md:col-span-1 md:row-span-1", // Petit bloc milieu droit
    year: "2023"
  },
  {
    id: 4,
    title: "Réfection Balcon",
    category: "Balcon",
    image: "/Balcon.jpeg",
    className: "md:col-span-1 md:row-span-2", // Bloc vertical
    year: "2024"
  },
  {
    id: 3,
    title: "Étanchéité Chantier Neuf",
    category: "Gros Œuvre",
    image: "/Étanchéité_Neuf.jpeg",
    className: "md:col-span-2 md:row-span-1", // Bloc horizontal large
    year: "2023"
  },
  {
    id: 6,
    title: "Terrasse Finition Dalles",
    category: "Esthétique",
    image: "/ter.jpeg",
    className: "md:col-span-1 md:row-span-1", // Petit bloc final
    year: "2024"
  }
];

const categories = ["Tous", "Toit Terrasse", "Sols Résine", "Écologie", "Balcon"];

export default function Realizations() {
  const [activeFilter, setActiveFilter] = useState("Tous");

  const filteredProjects = activeFilter === "Tous" 
    ? projectsData 
    : projectsData.filter(project => project.category === activeFilter);

  return (
    <section className="w-full py-24 px-4 md:px-8 lg:px-16 bg-white font-sans" id="realisations">
      <div className="max-w-7xl mx-auto">
        
        {/* --- EN-TÊTE --- */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
               <span className="w-8 h-[2px] bg-[#0EA5E9]"></span>
               <span className="text-[#0EA5E9] font-bold text-xs tracking-[0.3em] uppercase">
                 Portfolio
               </span>
            </div>
            <h2 className="text-4xl md:text-6xl font-black text-[#0F172A] uppercase leading-[0.9]">
              Nos dernières <br />
              <span className="text-[#0EA5E9]">Réalisations</span>
            </h2>
          </div>

          <div className="flex flex-col items-end gap-6 w-full md:w-auto">
            <span className="text-slate-300 font-mono text-[10px] tracking-[0.4em] hidden md:block uppercase">
              // Projets certifiés DTU //
            </span>
            
            <div className="flex flex-wrap justify-start md:justify-end gap-2">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveFilter(cat)}
                  className={`px-5 py-2.5 text-[10px] font-black uppercase tracking-widest transition-all duration-300 ${
                    activeFilter === cat
                      ? "bg-[#0F172A] text-white"
                      : "bg-slate-50 text-slate-400 hover:bg-[#0EA5E9] hover:text-white"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* --- GRILLE BENTO OPTIMISÉE --- */}
        <motion.div 
          layout
          className="grid grid-cols-1 md:grid-cols-3 auto-rows-[280px] gap-4 md:grid-flow-row-dense"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <motion.div
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.5, ease: "circOut" }}
                key={project.id}
                className={`relative group overflow-hidden bg-[#0F172A] ${project.className}`}
              >
                {/* Image */}
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110 opacity-80 group-hover:opacity-100"
                />

                {/* Overlay Gradient Progressif */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0F172A] via-transparent to-transparent opacity-90 group-hover:opacity-70 transition-opacity"></div>

                {/* Badge Année */}
                <div className="absolute top-5 left-5 bg-white/10 backdrop-blur-md border border-white/20 px-3 py-1 text-[9px] text-white font-black tracking-widest">
                  {project.year}
                </div>

                {/* Contenu Texte */}
                <div className="absolute bottom-0 left-0 w-full p-8 translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                  <p className="text-[#0EA5E9] text-[10px] font-black uppercase tracking-[0.2em] mb-2">
                    {project.category}
                  </p>
                  <h3 className="text-white text-2xl font-black uppercase leading-tight group-hover:tracking-wider transition-all">
                    {project.title}
                  </h3>
                  
                  <div className="mt-4 flex items-center gap-2 text-white/0 group-hover:text-white/100 transition-all duration-500 delay-100">
                    <span className="text-[10px] font-bold uppercase tracking-widest">Voir le projet</span>
                    <ArrowUpRight size={14} className="text-[#0EA5E9]" />
                  </div>
                </div>

                {/* Déco : Ligne de bordure intérieure au hover */}
                <div className="absolute inset-4 border border-white/0 group-hover:border-white/10 transition-all duration-700 pointer-events-none"></div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* --- FOOTER SECTION --- */}
        <div className="mt-20 flex flex-col md:flex-row items-center justify-between border-t border-slate-100 pt-10 gap-8">
           <p className="text-slate-400 text-sm max-w-sm text-center md:text-left">
             Chaque projet est accompagné d'une étude technique préalable et d'un suivi de chantier rigoureux.
           </p>
           
           <button className="group relative px-10 py-5 bg-[#0F172A] overflow-hidden">
              <div className="absolute inset-0 w-0 bg-[#0EA5E9] transition-all duration-[500ms] group-hover:w-full"></div>
              <div className="relative flex items-center gap-4">
                <span className="text-white font-black uppercase tracking-[0.2em] text-xs">
                  Explorer toutes nos archives
                </span>
                <ArrowUpRight size={18} className="text-[#0EA5E9] group-hover:text-white transition-colors" />
              </div>
           </button>
        </div>

      </div>
    </section>
  );
}