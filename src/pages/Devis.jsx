import React, { useEffect, useState } from 'react';
import { Phone, Mail, MapPin, Send, ShieldCheck, Loader2 } from 'lucide-react';
import { motion } from 'framer-motion';

export default function DevisPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // 1. États pour gérer les données du formulaire
  const [formData, setFormData] = useState({
    nom: '',
    tel: '',
    email: '',
    service: 'Toit Terrasse', // Valeur par défaut
    ville: '',
    description: ''
  });

  const [status, setStatus] = useState('idle'); // 'idle', 'loading', 'success', 'error'

  // 2. Fonction pour mettre à jour les données quand on tape
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // 3. Fonction d'envoi au Backend
  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('loading');

    try {
      // On appelle notre backend
      const response = await fetch('http://localhost:5000/api/devis', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus('success');
        setFormData({ nom: '', tel: '', email: '', service: 'Toit Terrasse', ville: '', description: '' });
      } else {
        setStatus('error');
      }
    } catch (error) {
      console.error(error);
      setStatus('error');
    }
  };

  return (
    <div className="bg-[#F8FAFC] min-h-screen pt-24 font-sans text-[#0F172A]">
      {/* ... SECTION EN-TÊTE ... */}
      <section className="relative py-20 bg-white border-b border-slate-200">
         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto">
                <span className="text-[#0EA5E9] font-bold tracking-[0.3em] uppercase text-xs mb-4 block">
                  Étude personnalisée
                </span>
                <h1 className="text-[#0F172A] text-4xl md:text-6xl font-black uppercase mb-4">Demander un Devis</h1>
                <p className="text-slate-500 text-lg font-medium leading-relaxed">
                  Réponse rapide sous 24h/48h. Expertise technique pour particuliers et syndics.
                </p>
            </div>
         </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            
            {/* --- GAUCHE : INFOS & CONTACT --- */}
            <div className="lg:col-span-4 space-y-6">
               
               <motion.div 
                 initial={{ opacity: 0, x: -20 }}
                 whileInView={{ opacity: 1, x: 0 }}
                 className="bg-white p-8 border border-slate-200 shadow-sm"
               >
                  <h3 className="text-sm font-black uppercase tracking-widest mb-6 flex items-center gap-2">
                    <div className="w-2 h-2 bg-[#0EA5E9]"></div> Contact Pro
                  </h3>
                  
                  <p className="text-slate-500 text-sm leading-relaxed mb-10 border-b border-slate-100 pb-8">
                    Remplissez le formulaire ci-contre pour recevoir votre devis gratuit sous 24h. Nos experts étudieront votre demande avec attention.
                  </p>
                  
                  <div className="space-y-8">
                    {/* Téléphone */}
                    <a href="tel:0123456789" className="flex items-center gap-4 group cursor-pointer">
                       <div className="w-12 h-12 bg-slate-50 flex items-center justify-center text-[#0EA5E9] group-hover:bg-[#0EA5E9] group-hover:text-white transition-all rounded-sm">
                         <Phone size={20} />
                       </div>
                       <div>
                         <p className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Téléphone</p>
                         <p className="font-bold text-lg text-[#0F172A] group-hover:text-[#0EA5E9] transition-colors">01 23 45 67 89</p>
                       </div>
                    </a>

                    {/* Email */}
                    <a href="mailto:contact@global-etancheite.fr" className="flex items-center gap-4 group cursor-pointer">
                       <div className="w-12 h-12 bg-slate-50 flex items-center justify-center text-[#0EA5E9] group-hover:bg-[#0EA5E9] group-hover:text-white transition-all rounded-sm">
                         <Mail size={20} />
                       </div>
                       <div>
                         <p className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Email</p>
                         <p className="font-bold text-sm text-[#0F172A] break-all group-hover:text-[#0EA5E9] transition-colors">contact@global-etancheite.fr</p>
                       </div>
                    </a>

                    {/* Siège */}
                    <div className="flex items-center gap-4 group">
                       <div className="w-12 h-12 bg-slate-50 flex items-center justify-center text-[#0EA5E9] group-hover:bg-[#0EA5E9] group-hover:text-white transition-all rounded-sm">
                         <MapPin size={20} />
                       </div>
                       <div>
                         <p className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Siège</p>
                         <p className="font-bold text-sm text-[#0F172A]">75000 Paris, Ile-de-France</p>
                       </div>
                    </div>
                  </div>
               </motion.div>

               {/* Box Réassurance */}
               <div className="bg-[#0F172A] p-8 text-white">
                  <ShieldCheck className="text-[#0EA5E9] mb-4" size={32} />
                  <h4 className="font-bold uppercase text-sm mb-2">Garantie Décennale</h4>
                  <p className="text-slate-400 text-xs leading-relaxed">
                    Tous nos travaux d'étanchéité sont couverts par une assurance responsabilité civile et décennale.
                  </p>
               </div>
            </div>

            {/* --- DROITE : LE FORMULAIRE ACTIF --- */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="lg:col-span-8 bg-white p-8 md:p-12 border border-slate-200 shadow-xl shadow-slate-200/50"
            >
              {status === 'success' ? (
                <div className="text-center py-12">
                   <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                     <Send size={32} />
                   </div>
                   <h3 className="text-2xl font-black text-[#0F172A] mb-2">Demande Envoyée !</h3>
                   <p className="text-slate-500">Nous avons bien reçu votre demande. Un technicien vous recontactera sous 24h.</p>
                   <button onClick={() => setStatus('idle')} className="mt-6 text-[#0EA5E9] font-bold underline">Nouvelle demande</button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-10">
                  {/* Etape 1 */}
                  <div className="space-y-6">
                    <div className="flex items-center gap-3">
                      <span className="bg-[#0EA5E9] text-white text-xs font-black w-6 h-6 flex items-center justify-center">1</span>
                      <h2 className="font-black uppercase tracking-tighter text-xl text-[#0F172A]">Informations Personnelles</h2>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <input 
                        required
                        type="text" 
                        name="nom"
                        value={formData.nom}
                        onChange={handleChange}
                        placeholder="Nom complet *" 
                        className="w-full bg-slate-50 border-l-4 border-transparent focus:border-[#0EA5E9] p-4 outline-none transition-all text-sm font-medium" 
                      />
                      <input 
                        required
                        type="tel" 
                        name="tel"
                        value={formData.tel}
                        onChange={handleChange}
                        placeholder="Téléphone *" 
                        className="w-full bg-slate-50 border-l-4 border-transparent focus:border-[#0EA5E9] p-4 outline-none transition-all text-sm font-medium" 
                      />
                    </div>
                    <input 
                      required
                      type="email" 
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="Email professionnel ou personnel *" 
                      className="w-full bg-slate-50 border-l-4 border-transparent focus:border-[#0EA5E9] p-4 outline-none transition-all text-sm font-medium" 
                    />
                  </div>

                  {/* Etape 2 */}
                  <div className="space-y-6">
                    <div className="flex items-center gap-3">
                      <span className="bg-[#0EA5E9] text-white text-xs font-black w-6 h-6 flex items-center justify-center">2</span>
                      <h2 className="font-black uppercase tracking-tighter text-xl text-[#0F172A]">Détails du Chantier</h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <select 
                        name="service"
                        value={formData.service}
                        onChange={handleChange}
                        className="w-full bg-slate-50 border-l-4 border-transparent focus:border-[#0EA5E9] p-4 outline-none transition-all text-sm font-medium text-slate-500"
                      >
                        <option value="Toit Terrasse">Toit Terrasse</option>
                        <option value="Dalles sur Plots">Dalles sur Plots</option>
                        <option value="Recherche de Fuite">Recherche de Fuite</option>
                        <option value="Autre">Autre</option>
                      </select>
                      <input 
                        required
                        type="text" 
                        name="ville"
                        value={formData.ville}
                        onChange={handleChange}
                        placeholder="Ville ou Code Postal *" 
                        className="w-full bg-slate-50 border-l-4 border-transparent focus:border-[#0EA5E9] p-4 outline-none transition-all text-sm font-medium" 
                      />
                    </div>
                    
                    <textarea 
                      name="description"
                      value={formData.description}
                      onChange={handleChange}
                      rows="4" 
                      placeholder="Décrivez votre projet (surface, accès, urgence...)" 
                      className="w-full bg-slate-50 border-l-4 border-transparent focus:border-[#0EA5E9] p-4 outline-none transition-all text-sm font-medium resize-none"
                    ></textarea>
                  </div>

                  {status === 'error' && (
                    <p className="text-red-500 text-sm font-bold text-center">Une erreur est survenue. Veuillez réessayer.</p>
                  )}

                  <button 
                    type="submit" 
                    disabled={status === 'loading'}
                    className="w-full bg-[#0EA5E9] hover:bg-[#0F172A] text-white font-black uppercase tracking-[0.2em] py-6 transition-all duration-500 flex items-center justify-center gap-3 group shadow-lg shadow-blue-500/20 disabled:opacity-70 disabled:cursor-not-allowed"
                  >
                    {status === 'loading' ? (
                      <>
                        <Loader2 className="animate-spin" size={18} /> Envoi en cours...
                      </>
                    ) : (
                      <>
                        <Send size={18} className="group-hover:translate-x-1 transition-transform" />
                        Envoyer ma demande de devis
                      </>
                    )}
                  </button>
                </form>
              )}
            </motion.div>

          </div>
        </div>
      </section>
    </div>
  );
}