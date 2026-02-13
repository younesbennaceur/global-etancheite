import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

// Données des 9 Services
const servicesList = [
  {
    id: 1,
    ref: "TOIT-01",
    title: "Toit Terrasse",
    slug: "toit-terrasse",
    description: "Rénovation complète d'étanchéité pour toits plats accessibles et non accessibles. Isolation thermique performante incluse selon normes DTU.",
    image: "./ToitTerrasse.jpeg"
  },
  {
    id: 2,
    ref: "NEUF-02",
    title: "Étanchéité Neuf",
    slug: "etancheite-neuf",
    description: "Solutions d'imperméabilisation pour constructions neuves. Protection durable des fondations, des structures béton et des ouvrages d'art.",
    image: "./Étanchéité_Neuf.jpeg"
  },
  {
    id: 3,
    ref: "SOL-03",
    title: "Sols en Résine",
    slug: "sols-resine",
    description: "Revêtements de sol en résine époxy ou polyuréthane. Esthétique, résistant et facile d'entretien pour garages, industries et intérieurs.",
    image: "./Resine.jpeg"
  },
  {
    id: 4,
    ref: "VEG-04",
    title: "Toitures Végétalisées",
    slug: "toitures-vegetalisees",
    description: "Installation de systèmes d'étanchéité anti-racine pour toitures vertes. Alliez écologie, esthétique et isolation thermique naturelle.",
    image: "/Végétalisées.jpeg"
  },
  {
    id: 5,
    ref: "FUITE-05",
    title: "Recherche de Fuite",
    slug: "recherche-fuite",
    description: "Diagnostic précis par fumigène, gaz traceur ou mise en eau colorée pour localiser et réparer vos infiltrations rapidement sans destruction.",
    image: "/ty.jpeg"
  },
  {
    id: 6,
    ref: "CTRL-06",
    title: "Contrat d'Entretien",
    slug: "contrat-entretien",
    description: "Maintenance régulière de vos toitures : nettoyage, vérification des évacuations pluviales et reprise des points singuliers pour éviter les sinistres.",
    image: "/Entretien.jpeg"
  },
  {
    id: 7,
    ref: "BAL-07",
    title: "Balcons & Loggias",
    slug: "balcons-loggias",
    description: "Systèmes d'Étanchéité Liquide (SEL) spécialement conçus pour les petites surfaces extérieures, balcons et coursives piétonnes.",
    image: "./Balcon.jpeg"
  },
 {
    id: 8,
    ref: "DALL-08",
    title: "Dalles sur plots retirées",
    slug: "dalles-sur-plots-retirees",
    description: "Dépose soigneuse et retrait de dalles sur plots pour inspection du support, nettoyage ou réfection de l'étanchéité, garantissant une intervention propre et organisée.",
    image: "./ty.jpeg"
 }
];

// Animation Variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  }
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 0.5, ease: "easeOut" } 
  }
};

export default function Services9Grid() {
  return (
    <section className="w-full py-20 px-4 md:px-8 lg:px-16 bg-[#FAFAFA] font-sans">
      <div className="max-w-7xl mx-auto">
        
        {/* --- Header Centré --- */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h4 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-[#0EA5E9] font-bold text-sm tracking-[0.2em] uppercase mb-4"
          >
            Nos Expertises
          </motion.h4>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-black text-[#0F172A] mb-6 uppercase"
          >
            Solutions Techniques <br/> 
            <span className="text-[#0EA5E9]">Certifiées</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-gray-500 text-sm md:text-base max-w-xl mx-auto"
          >
            De la construction neuve à la rénovation, nous maîtrisons l'ensemble des techniques d'étanchéité aux normes DTU.
          </motion.p>
        </div>

        {/* --- Grille 3x3 --- */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {servicesList.map((service) => (
            <motion.div 
              key={service.id}
              variants={cardVariants}
              whileHover={{ y: -8 }}
              className="bg-white group cursor-pointer shadow-sm hover:shadow-2xl hover:shadow-blue-900/10 transition-all duration-500"
            >
              <Link to={`/service/${service.slug}`} className="flex flex-col h-full">
                
                {/* Image avec Badge REF */}
                <div className="relative h-60 overflow-hidden">
                  {/* Badge Blanc en haut à gauche */}
                  <div className="absolute top-4 left-4 z-10 bg-white px-3 py-1.5 text-[10px] font-bold text-[#0F172A] tracking-wider border border-gray-100 shadow-sm">
                    REF : {service.ref}
                  </div>
                  
                  <img 
                    src={service.image} 
                    alt={service.title} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  
                  {/* Overlay subtil au survol */}
                  <div className="absolute inset-0 bg-[#0F172A]/0 group-hover:bg-[#0F172A]/10 transition-colors duration-500"></div>
                </div>

                {/* Contenu de la Carte */}
                <div className="p-8 flex flex-col flex-grow">
                  <h3 className="text-xl font-bold text-[#0F172A] mb-4 group-hover:text-[#0EA5E9] transition-colors">
                    {service.title}
                  </h3>
                  
                  <p className="text-gray-500 text-sm leading-relaxed mb-8 flex-grow">
                    {service.description}
                  </p>

                  {/* Footer Carte: FICHE TECHNIQUE + FLÈCHE */}
                  <div className="mt-auto flex items-center justify-between border-t border-gray-100 pt-6">
                    <span className="text-xs font-bold text-[#0F172A] uppercase tracking-wider group-hover:text-[#0EA5E9] transition-colors">
                      Fiche Technique
                    </span>
                    <span className="text-[#0EA5E9] transform group-hover:translate-x-2 transition-transform duration-300">
                      <ArrowRight size={16} />
                    </span>
                  </div>
                </div>

              </Link>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}