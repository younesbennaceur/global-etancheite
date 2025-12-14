import React from 'react';
import { Phone, Mail, MapPin, Facebook, Instagram, Linkedin } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Footer() {

  // Liens de navigation
  const navLinks = [
    { title: "Accueil", href: "#accueil" },
    { title: "Services", href: "#services" },
    { title: "Réalisations", href: "#realisations" },
    { title: "Contact", href: "#contact" }
  ];

  // Liens légaux et bas de page
  const legalLinks = [
    { title: "Mentions Légales", href: "#mentions" },
    { title: "Politique de Confidentialité", href: "#confidentialite" },
    { title: "Plan du Site", href: "#plan" }
  ];

  return (
    <footer className="bg-[#0B1120] border-t-2 border-[#0EA5E9] text-white pt-16 lg:pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* --- GRILLE PRINCIPALE (3 colonnes) --- */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-12 gap-12 pb-12">
          
          {/* COLONNE 1 : Logo & Description & Réseaux Sociaux */}
          <div className="md:col-span-1 lg:col-span-5 pr-8">
            
            {/* Logo avec icône de travailleur */}
            <div className="flex items-center gap-3 mb-6">
              {/* Le "Logo" stylisé */}
             <img src="/logo.svg" alt="" />
            </div>

            {/* Description */}
            <p className="text-slate-400 text-sm leading-relaxed mb-8">
              Le spécialiste de l'étanchéité et des sols en résine en Île-de-France. 
              Intervention rapide, garantie décennale et respect des normes DTU.
            </p>

            {/* Icônes Réseaux Sociaux */}
            <div className="flex space-x-4">
              <a href="#" aria-label="Lien Facebook" className="w-10 h-10 bg-[#151E2E] border border-slate-700 flex items-center justify-center rounded-sm hover:bg-[#0EA5E9] transition-colors">
                <Facebook size={20} className="text-white" />
              </a>
              <a href="#" aria-label="Lien Instagram" className="w-10 h-10 bg-[#151E2E] border border-slate-700 flex items-center justify-center rounded-sm hover:bg-[#0EA5E9] transition-colors">
                <Instagram size={20} className="text-white" />
              </a>
              <a href="#" aria-label="Lien LinkedIn" className="w-10 h-10 bg-[#151E2E] border border-slate-700 flex items-center justify-center rounded-sm hover:bg-[#0EA5E9] transition-colors">
                <Linkedin size={20} className="text-white" />
              </a>
            </div>
          </div>

          {/* COLONNE 2 : Navigation */}
          <div className="md:col-span-1 lg:col-span-3">
            <h4 className="text-white font-bold uppercase tracking-widest text-base mb-6 border-b-2 border-slate-800 pb-2">
              Navigation
            </h4>
            <ul className="space-y-3">
              {navLinks.map((link) => (
                <li key={link.title}>
                  <a href={link.href} className="text-slate-400 text-sm hover:text-[#0EA5E9] transition-colors">
                    {link.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* COLONNE 3 : Infos Contact */}
          <div className="md:col-span-1 lg:col-span-4">
            <h4 className="text-white font-bold uppercase tracking-widest text-base mb-6 border-b-2 border-slate-800 pb-2">
              Infos Contact
            </h4>
            
            {/* Siège */}
            <div className="flex items-start gap-4 mb-4">
              <MapPin size={20} className="text-[#0EA5E9] mt-1 flex-shrink-0" />
              <p className="text-slate-200 text-sm">
                75000 Paris, <br />
                Île-de-France
              </p>
            </div>

            {/* Téléphone */}
            <div className="flex items-center gap-4 mb-4">
              <Phone size={20} className="text-[#0EA5E9] flex-shrink-0" />
              <a href="tel:0123456789" className="text-slate-200 text-lg font-bold hover:text-[#0EA5E9] transition-colors">
                01 23 45 67 89
              </a>
            </div>

            {/* Email */}
            <div className="flex items-center gap-4">
              <Mail size={20} className="text-[#0EA5E9] flex-shrink-0" />
              <a href="mailto:contact@global-etancheite.fr" className="text-slate-200 text-sm hover:text-[#0EA5E9] transition-colors">
                contact@global-etancheite.fr
              </a>
            </div>
          </div>
        </div>

        {/* --- BANDEAU LÉGAL ET COPYRIGHT --- */}
        <div className="border-t border-slate-800 mt-6 pt-6 pb-8">
          <div className="flex flex-col md:flex-row justify-between items-center text-center md:text-left text-xs space-y-4 md:space-y-0">
            
            {/* Copyright à gauche */}
            <p className="text-slate-500 uppercase tracking-wider font-bold">
              © 2025 Global Étanchéité. Tous droits réservés.
            </p>

            {/* Liens légaux à droite */}
            <div className="flex flex-wrap justify-center md:justify-end gap-x-6 gap-y-2">
              {legalLinks.map((link, index) => (
                <a 
                  key={index} 
                  href={link.href} 
                  className="text-slate-400 hover:text-[#0EA5E9] transition-colors uppercase text-xs"
                >
                  {link.title}
                </a>
              ))}
            </div>
          </div>
        </div>

      </div>
    </footer>
  );
}