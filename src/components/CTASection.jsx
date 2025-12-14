import React from 'react';
import { CheckCircle2 } from 'lucide-react';

export default function CTASection() {
  const points = [
    "Matériaux de haute qualité certifiés ISO",
    "Intervention rapide en Ile-de-France sous 48h",
    "Devis détaillé et transparent sans surprise",
    "Suivi de chantier personnalisé"
  ];

  return (
    <section className="bg-white py-16 lg:py-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20 items-center">
          
          {/* --- PARTIE GAUCHE : IMAGE ET CADRES --- */}
          <div className="relative mx-auto lg:mx-0 max-w-lg lg:max-w-full mt-8 lg:mt-0">
            
            {/* Cadre Gris (arrière-plan haut gauche) */}
            <div className="absolute -top-6 -left-6 w-full h-full border-[3px] border-gray-200 z-0" />
            
            {/* Carré Bleu Ciel (arrière-plan bas droite) */}
            <div className="absolute -bottom-6 -right-6 w-40 h-40 bg-[#D4F3F6] z-0" />

            {/* Image Principale */}
            <div className="relative z-10">
              <img 
                src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1000&auto=format&fit=crop" 
                alt="Terrasse moderne et jardin" 
                className="w-full h-auto shadow-sm object-cover"
              />
              
              {/* Badge "ÉQUIPE AGRÉÉE" */}
              <div className="absolute bottom-8 -left-4 bg-[#0F172A] text-white py-3 px-6 shadow-xl border-l-[6px] border-[#0EA5E9]">
                <span className="text-sm font-bold uppercase tracking-wider">
                  Équipe Agréée
                </span>
              </div>
            </div>
          </div>

          {/* --- PARTIE DROITE : CONTENU TEXTE --- */}
          <div className="flex flex-col">
            
            {/* Surtitre avec point */}
            <div className="flex items-center gap-2 mb-3">
              <span className="text-[#0EA5E9] font-bold text-xs">•</span>
              <span className="text-[#0EA5E9] font-bold uppercase tracking-widest text-xs">
                Pourquoi nous choisir ?
              </span>
            </div>

            {/* Grand Titre */}
            <h2 className="text-[#0F172A] font-black text-4xl lg:text-5xl uppercase leading-tight mb-6">
              L'excellence <br />
              au service de <br />
              <span className="text-[#05849a]">votre bâtiment</span>
            </h2>

            {/* Paragraphe */}
            <p className="text-gray-500 text-base lg:text-lg leading-relaxed mb-8">
              Chez Global Etanchéité, nous ne faisons aucun compromis sur la qualité. 
              Nos équipes d'experts sont formées aux dernières techniques d'étanchéité 
              et de pose de résine pour garantir la pérennité de vos ouvrages.
            </p>

            {/* Liste à puces */}
            <ul className="space-y-5 mb-10">
              {points.map((text, index) => (
                <li key={index} className="flex items-start gap-4">
                  <div className="mt-1">
                    {/* Icône cercle avec check */}
                    <CheckCircle2 strokeWidth={1.5} className="w-6 h-6 text-[#0F172A]" />
                  </div>
                  <span className="text-[#1e293b] font-bold text-base md:text-[17px]">
                    {text}
                  </span>
                </li>
              ))}
            </ul>

            {/* Bouton */}
            <div>
              <button className="bg-[#0F172A] text-white text-sm font-bold uppercase tracking-widest px-8 py-4 border-b-[5px] border-[#0EA5E9] hover:bg-slate-800 transition-colors">
                Demander un devis
              </button>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}