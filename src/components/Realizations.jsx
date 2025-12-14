import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUpRight, Filter } from 'lucide-react';

// --- DONNÉES DES PROJETS (Basées sur votre image) ---
// La propriété "className" gère la taille de la carte dans la grille
const projectsData = [
  {
    id: 1,
    title: "Rénovation Terrasse Paris 16",
    category: "Toit Terrasse",
    image: "https://images.unsplash.com/photo-1632759868194-6d9b04f3780d?q=80&w=2070", // Image style tuyaux/toit
    className: "md:col-span-2 md:row-span-2", // GRANDE CARTE (Haut Gauche)
    year: "2024"
  },
  {
    id: 2,
    title: "Application Résine Parking",
    category: "Sols Résine",
    image: "https://images.unsplash.com/photo-1621905252507-b35492cc74b4?q=80&w=2069",
    className: "md:col-span-1 md:row-span-1", // Petite carte
    year: "2024"
  },
  {
    id: 3,
    title: "Étanchéité Chantier Neuf",
    category: "Gros Œuvre",
    image: "https://images.unsplash.com/photo-1590082725907-70e173e6344d?q=80&w=2070",
    className: "md:col-span-1 md:row-span-1", // Petite carte
    year: "2023"
  },
  {
    id: 4,
    title: "Réfection Balcon",
    category: "Balcon",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070",
    className: "md:col-span-1 md:row-span-2", // CARTE HAUTE (Bas Gauche)
    year: "2024"
  },
  {
    id: 5,
    title: "Toiture Végétalisée",
    category: "Écologie",
    image: "https://images.unsplash.com/photo-1596238640393-2715568f188e?q=80&w=2070",
    className: "md:col-span-1 md:row-span-1",
    year: "2023"
  },
  {
    id: 6,
    title: "Terrasse Finition Dalles",
    category: "Esthétique",
    image: "https://images.unsplash.com/photo-1621251347676-e10eb5375c32?q=80&w=2070",
    className: "md:col-span-1 md:row-span-1",
    year: "2024"
  },
  {
    id: 7,
    title: "Toiture Végétalisée 77",
    category: "Écologie",
    image: "https://images.unsplash.com/photo-1520697830682-bbb6e85e2b0b?q=80&w=2070",
    className: "md:col-span-1 md:row-span-1",
    year: "2024"
  }
];

// Catégories pour le filtre
const categories = ["Tous", "Toit Terrasse", "Sols Résine", "Écologie", "Balcon"];

export default function Realizations() {
  const [activeFilter, setActiveFilter] = useState("Tous");

  // Filtrage des projets
  const filteredProjects = activeFilter === "Tous" 
    ? projectsData 
    : projectsData.filter(project => project.category === activeFilter);

  return (
    <section className="w-full py-20 px-4 md:px-8 lg:px-16 bg-white font-sans" id="realisations">
      <div className="max-w-7xl mx-auto">
        
        {/* --- HEADER (Conforme à l'image) --- */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
          
          {/* Titre et Sous-titre */}
          <div>
            <div className="flex items-center gap-2 mb-3">
               <span className="w-2 h-2 rounded-full bg-[#0EA5E9]"></span>
               <span className="text-[#0EA5E9] font-bold text-xs tracking-[0.2em] uppercase">
                 Portfolio
               </span>
            </div>
            <h2 className="text-4xl md:text-5xl font-black text-[#0F172A] uppercase leading-none">
              Réalisations <span className="text-[#0EA5E9]">Récentes</span>
            </h2>
          </div>

          {/* Filtres & Archives (Côté Droit) */}
          <div className="flex flex-col items-end gap-4">
            <span className="text-gray-400 font-mono text-xs tracking-widest hidden md:block">
              /// ARCHIVES 2024-2025
            </span>
            
            {/* Boutons de filtres */}
            <div className="flex flex-wrap justify-end gap-2">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveFilter(cat)}
                  className={`px-4 py-2 text-xs font-bold uppercase tracking-wider transition-all border ${
                    activeFilter === cat
                      ? "bg-[#0F172A] text-white border-[#0F172A]"
                      : "bg-white text-gray-500 border-gray-200 hover:border-[#0EA5E9] hover:text-[#0EA5E9]"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* --- GRILLE BENTO / MASONRY --- */}
        <motion.div 
          layout
          className="grid grid-cols-1 md:grid-cols-3 auto-rows-[250px] gap-4"
        >
          <AnimatePresence>
            {filteredProjects.map((project) => (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                key={project.id}
                className={`relative group overflow-hidden bg-gray-900 cursor-pointer ${project.className}`}
              >
                {/* Image avec Zoom au Hover */}
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-90 group-hover:opacity-100"
                />

                {/* Overlay Gradient (Noir vers Transparent) */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0F172A]/90 via-[#0F172A]/20 to-transparent opacity-80 group-hover:opacity-60 transition-opacity duration-300"></div>

                {/* Contenu Texte (Bas Gauche) */}
                <div className="absolute bottom-0 left-0 w-full p-6 translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                  <span className="text-[#0EA5E9] text-[10px] font-bold uppercase tracking-widest mb-1 block">
                    {project.category}
                  </span>
                  <h3 className="text-white text-xl font-bold leading-tight group-hover:text-[#0EA5E9] transition-colors">
                    {project.title}
                  </h3>
                </div>

                {/* Icône Flèche (Haut Droite - Apparition au Hover) */}
                <div className="absolute top-4 right-4 bg-white/10 backdrop-blur-md p-2 rounded-full opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
                  <ArrowUpRight size={20} className="text-white" />
                </div>

                {/* Badge Année (Caché par défaut, visible si besoin) */}
                <div className="absolute top-4 left-4 border border-white/20 px-2 py-0.5 text-[10px] text-white/70 font-mono">
                  {project.year}
                </div>

              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Bouton "Voir Plus" Centré */}
        <div className="flex justify-center mt-12">
            <button className="group flex items-center gap-3 px-8 py-4 border-2 border-[#0F172A] hover:bg-[#0F172A] transition-all duration-300">
                <span className="text-[#0F172A] font-bold uppercase tracking-widest text-xs group-hover:text-white">
                    Voir tous les projets
                </span>
                <ArrowUpRight size={16} className="text-[#0F172A] group-hover:text-white group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </button>
        </div>

      </div>
    </section>
  );
}