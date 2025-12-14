import React from 'react';
import { Clock, ShieldCheck, Award, PenTool } from 'lucide-react';
import { motion } from 'framer-motion';

const statsData = [
  {
    id: 1,
    icon: Clock,
    title: "15 ANS",
    subtitle: "D'EXPÉRIENCE",
    description: "Expertise Reconnue"
  },
  {
    id: 2,
    icon: ShieldCheck,
    title: "GARANTIE",
    subtitle: "DÉCENNALE",
    description: "Assurance Complète"
  },
  {
    id: 3,
    icon: Award,
    title: "QUALITÉ",
    subtitle: "CERTIFIÉE",
    description: "Normes Françaises"
  },
  {
    id: 4,
    icon: PenTool, // Icône proche de la plume/technique
    title: "TECHNICIENS",
    subtitle: "QUALIFIÉS",
    description: "Formation Continue"
  }
];

export default function AboutUs() {
  return (
    <section className="relative w-full bg-[#0F172A] py-16 lg:py-24 overflow-hidden border-b-4 border-[#0EA5E9]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Grille responsive : 1 col mobile, 2 cols tablette, 4 cols desktop */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          
          {statsData.map((stat, index) => (
            <motion.div
              key={stat.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              className="flex flex-col items-center text-center group cursor-default"
            >
              {/* Carré de l'icône */}
              <div className="w-20 h-20 mb-6 bg-[#1E293B] border border-slate-700 flex items-center justify-center rounded-sm transition-colors duration-300 group-hover:border-[#0EA5E9] group-hover:shadow-[0_0_15px_rgba(14,165,233,0.3)]">
                <stat.icon 
                  size={36} 
                  strokeWidth={1.5}
                  className="text-[#0EA5E9] transition-transform duration-300 group-hover:scale-110" 
                />
              </div>

              {/* Titres en Majuscules */}
              <h3 className="text-white font-black text-xl tracking-wide uppercase leading-tight">
                {stat.title} <br />
                {stat.subtitle}
              </h3>

              {/* Description fine en bas */}
              <p className="mt-3 text-slate-400 font-mono text-sm tracking-wide opacity-80 group-hover:text-[#0EA5E9] transition-colors">
                {stat.description}
              </p>
            </motion.div>
          ))}

        </div>
      </div>
    </section>
  );
}