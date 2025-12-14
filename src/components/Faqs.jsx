import React, { useState } from 'react';
import { 
  Clock, 
  AlertTriangle, 
  HelpCircle, 
  Calendar, 
  FileText, 
  ChevronDown, 
  MessageCircle,
  ArrowRight
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const faqData = [
  {
    id: 1,
    question: "Quelle est la durée de la garantie décennale ?",
    answer: "Comme son nom l'indique, la garantie décennale couvre vos travaux d'étanchéité pendant une durée de 10 ans à compter de la réception du chantier. Elle vous protège contre les vices et malfaçons compromettant la solidité de l'ouvrage.",
    icon: Clock
  },
  {
    id: 2,
    question: "Comment détecter une fuite sur ma terrasse ?",
    answer: "Les signes courants incluent : des traces d'humidité au plafond de l'étage inférieur, des peintures qui cloquent, ou des joints de carrelage qui noircissent. En cas de doute, notre équipe peut réaliser une recherche de fuite non destructive.",
    icon: AlertTriangle
  },
  {
    id: 3,
    question: "Intervenez-vous en urgence ?",
    answer: "Oui, nous disposons d'une équipe dédiée aux interventions rapides en Île-de-France. Nous nous engageons à intervenir sous 48h pour sécuriser votre bâtiment et limiter les dégâts des eaux.",
    icon: HelpCircle
  },
  {
    id: 4,
    question: "Quand réaliser les travaux d'étanchéité ?",
    answer: "L'idéal est de réaliser ces travaux par temps sec et températures modérées (printemps ou automne). Cependant, nos résines techniques permettent des interventions sur une plus large plage de conditions météorologiques.",
    icon: Calendar
  },
  {
    id: 5,
    question: "Proposez-vous des contrats d'entretien ?",
    answer: "Tout à fait. L'entretien régulier est la clé de la longévité. Nous proposons des contrats annuels comprenant le nettoyage, la vérification des évacuations et le contrôle des points singuliers.",
    icon: FileText
  }
];

export default function FAQ() {
  const [openId, setOpenId] = useState(null);

  const toggleFAQ = (id) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section className="bg-white py-16 lg:py-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          
          {/* --- COLONNE GAUCHE : VISUELS & CONTACT --- */}
          <div className="lg:col-span-5 flex flex-col">
            
            {/* Petit Header */}
            <div className="flex items-center gap-3 mb-4">
              <div className="h-[2px] w-8 bg-[#0EA5E9]"></div>
              <span className="text-[#0EA5E9] font-bold uppercase tracking-widest text-xs">
                Centre d'aide
              </span>
            </div>

            {/* Gros Titre */}
            <h2 className="text-[#0F172A] font-black text-4xl lg:text-5xl uppercase leading-none mb-8">
              Questions <br />
              <span className="text-[#0EA5E9]">Fréquentes</span>
            </h2>

            {/* Image Illustration */}
            <div className="relative mb-6 group">
               {/* Cadre décoratif arrière */}
               <div className="absolute top-2 left-2 w-full h-full border-2 border-slate-100 -z-10 rounded-sm" />
               
               <img 
                src="https://images.unsplash.com/photo-1621905251189-08b45d6a269e?q=80&w=800&auto=format&fit=crop" 
                alt="Technicien étanchéité en action" 
                className="w-full h-64 object-cover rounded-sm border border-slate-200 shadow-sm"
               />
            </div>

            {/* Bloc Contact Support */}
            <div className="bg-[#0F172A] p-8 rounded-sm shadow-xl text-white mt-auto">
              <h3 className="text-xl font-bold mb-2 flex items-center gap-2">
                Une autre question ?
              </h3>
              <p className="text-slate-400 text-sm mb-6 leading-relaxed">
                Notre équipe technique est disponible pour répondre à toutes vos interrogations spécifiques.
              </p>
              <button className="w-full bg-[#0EA5E9] hover:bg-cyan-500 text-white font-bold text-sm uppercase py-4 px-6 rounded-sm transition-all flex items-center justify-between group">
                Contacter le support
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </button>
            </div>

          </div>

          {/* --- COLONNE DROITE : ACCORDÉONS --- */}
          <div className="lg:col-span-7 flex flex-col justify-center space-y-4">
            {faqData.map((item) => (
              <div 
                key={item.id} 
                className={`bg-white rounded-sm transition-all duration-300 ${openId === item.id ? 'shadow-lg border-l-4 border-[#0EA5E9]' : 'shadow-sm border border-slate-100 hover:shadow-md'}`}
              >
                <button
                  onClick={() => toggleFAQ(item.id)}
                  className="w-full flex items-center justify-between p-6 text-left"
                >
                  <div className="flex items-center gap-4">
                    {/* Icône Cercle */}
                    <div className={`w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 transition-colors ${openId === item.id ? 'bg-[#0EA5E9] text-white' : 'bg-cyan-50 text-[#0EA5E9]'}`}>
                      <item.icon size={20} strokeWidth={2} />
                    </div>
                    
                    {/* Question */}
                    <span className={`font-bold text-base md:text-lg ${openId === item.id ? 'text-[#0F172A]' : 'text-slate-700'}`}>
                      {item.question}
                    </span>
                  </div>

                  {/* Chevron */}
                  <ChevronDown 
                    className={`text-slate-400 transition-transform duration-300 ${openId === item.id ? 'rotate-180 text-[#0EA5E9]' : ''}`} 
                  />
                </button>

                {/* Réponse (Accordéon) */}
                <AnimatePresence>
                  {openId === item.id && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="p-6 pt-0 pl-[4.5rem]">
                        <p className="text-slate-500 leading-relaxed text-sm md:text-base border-t border-slate-100 pt-4">
                          {item.answer}
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}