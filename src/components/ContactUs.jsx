import React from 'react';
import { Phone, Mail, MapPin, Send } from 'lucide-react';
import { motion } from 'framer-motion';

export default function ContactUs() {
  return (
    <section className="bg-[#0B1120] py-16 lg:py-24 overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">

          {/* --- COLONNE GAUCHE : INFOS --- */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col justify-center h-full"
          >
            {/* Badge */}
            <div className="mb-6">
              <span className="bg-[#0EA5E9] text-white text-xs font-bold px-3 py-1.5 uppercase tracking-wider inline-block">
                Contact Pro
              </span>
            </div>

            {/* Titre */}
            <h2 className="text-white font-black text-5xl lg:text-6xl uppercase leading-tight mb-6">
              Démarrez <br />
              votre <br />
              <span className="text-[#0EA5E9]">projet.</span>
            </h2>

            {/* Paragraphe */}
            <p className="text-slate-400 text-lg leading-relaxed mb-12 max-w-md">
              Remplissez le formulaire ci-contre pour recevoir votre devis gratuit sous 24h. 
              Nos experts étudieront votre demande avec attention.
            </p>

            {/* Liste Coordonnées */}
            <div className="space-y-8">
              
              {/* Item Téléphone */}
              <div className="flex items-center gap-6 group">
                <div className="w-14 h-14 bg-[#1E293B] flex items-center justify-center rounded-sm border border-slate-700 group-hover:border-[#0EA5E9] transition-colors">
                  <Phone className="text-[#0EA5E9] w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-white text-xs font-bold uppercase tracking-widest mb-1">Téléphone</h4>
                  <p className="text-white font-mono text-lg">01 23 45 67 89</p>
                </div>
              </div>

              {/* Item Email */}
              <div className="flex items-center gap-6 group">
                <div className="w-14 h-14 bg-[#1E293B] flex items-center justify-center rounded-sm border border-slate-700 group-hover:border-[#0EA5E9] transition-colors">
                  <Mail className="text-[#0EA5E9] w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-white text-xs font-bold uppercase tracking-widest mb-1">Email</h4>
                  <p className="text-white font-mono text-lg break-all">contact@global-etancheite.fr</p>
                </div>
              </div>

              {/* Item Siège */}
              <div className="flex items-center gap-6 group">
                <div className="w-14 h-14 bg-[#1E293B] flex items-center justify-center rounded-sm border border-slate-700 group-hover:border-[#0EA5E9] transition-colors">
                  <MapPin className="text-[#0EA5E9] w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-white text-xs font-bold uppercase tracking-widest mb-1">Siège</h4>
                  <p className="text-white font-mono text-lg">75000 Paris, Ile-de-France</p>
                </div>
              </div>

            </div>
          </motion.div>

          {/* --- COLONNE DROITE : FORMULAIRE --- */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-white p-8 md:p-10 rounded-sm shadow-2xl"
          >
            {/* Header Form */}
            <div className="mb-8 border-b border-gray-100 pb-6">
              <h3 className="text-[#0F172A] font-black text-3xl uppercase mb-2">
                Demande de Devis
              </h3>
              <p className="text-gray-400 font-mono text-sm">
                /// Gratuit et sans engagement ///
              </p>
            </div>

            {/* Inputs */}
            <form className="space-y-6">
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Nom */}
                <div className="flex flex-col gap-2">
                  <label htmlFor="nom" className="text-[#0F172A] text-xs font-bold uppercase tracking-wider">Nom</label>
                  <input 
                    type="text" 
                    id="nom" 
                    placeholder="Votre nom" 
                    className="bg-gray-50 border border-gray-100 text-gray-900 text-sm rounded-sm focus:ring-[#0EA5E9] focus:border-[#0EA5E9] block w-full p-4 placeholder-gray-400 transition-all outline-none"
                  />
                </div>
                
                {/* Téléphone */}
                <div className="flex flex-col gap-2">
                  <label htmlFor="tel" className="text-[#0F172A] text-xs font-bold uppercase tracking-wider">Téléphone</label>
                  <input 
                    type="tel" 
                    id="tel" 
                    placeholder="06..." 
                    className="bg-gray-50 border border-gray-100 text-gray-900 text-sm rounded-sm focus:ring-[#0EA5E9] focus:border-[#0EA5E9] block w-full p-4 placeholder-gray-400 transition-all outline-none"
                  />
                </div>
              </div>

              {/* Email */}
              <div className="flex flex-col gap-2">
                <label htmlFor="email" className="text-[#0F172A] text-xs font-bold uppercase tracking-wider">Email</label>
                <input 
                  type="email" 
                  id="email" 
                  placeholder="votre@email.com" 
                  className="bg-gray-50 border border-gray-100 text-gray-900 text-sm rounded-sm focus:ring-[#0EA5E9] focus:border-[#0EA5E9] block w-full p-4 placeholder-gray-400 transition-all outline-none"
                />
              </div>

              {/* Type de projet */}
              <div className="flex flex-col gap-2">
                <label htmlFor="project" className="text-[#0F172A] text-xs font-bold uppercase tracking-wider">Type de projet</label>
                <select 
                  id="project" 
                  className="bg-gray-50 border border-gray-100 text-gray-500 text-sm rounded-sm focus:ring-[#0EA5E9] focus:border-[#0EA5E9] block w-full p-4 outline-none appearance-none"
                >
                  <option>Sélectionnez une option</option>
                  <option>Étanchéité Toiture</option>
                  <option>Rénovation Terrasse</option>
                  <option>Recherche de Fuite</option>
                  <option>Autre</option>
                </select>
              </div>

              {/* Message */}
              <div className="flex flex-col gap-2">
                <label htmlFor="message" className="text-[#0F172A] text-xs font-bold uppercase tracking-wider">Message</label>
                <textarea 
                  id="message" 
                  rows="4" 
                  placeholder="Détails de votre projet..." 
                  className="bg-gray-50 border border-gray-100 text-gray-900 text-sm rounded-sm focus:ring-[#0EA5E9] focus:border-[#0EA5E9] block w-full p-4 placeholder-gray-400 transition-all outline-none resize-none"
                ></textarea>
              </div>

              {/* Submit Button */}
              <button 
                type="button" 
                className="w-full text-white bg-[#60A5FA] hover:bg-[#0EA5E9] font-bold uppercase tracking-wider text-sm px-5 py-5 text-center shadow-lg transition-colors duration-300 mt-4"
              >
                Envoyer ma demande
              </button>

            </form>
          </motion.div>

        </div>
      </div>
    </section>
  );
}