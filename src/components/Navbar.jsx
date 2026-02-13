import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone, ChevronDown, ArrowRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const servicesList = [
  { id: 1, ref: "TOIT-01", title: "Toit Terrasse", slug: "toit-terrasse", description: "Rénovation complète d'étanchéité." },
  { id: 2, ref: "NEUF-02", title: "Étanchéité Neuf", slug: "etancheite-neuf", description: "Solutions pour constructions neuves." },
  { id: 3, ref: "SOL-03", title: "Sols en Résine", slug: "sols-resine", description: "Revêtements époxy ou polyuréthane." },
  { id: 4, ref: "VEG-04", title: "Toitures Végétalisées", slug: "toitures-vegetalisees", description: "Systèmes anti-racine écologiques." },
  { id: 5, ref: "FUITE-05", title: "Recherche de Fuite", slug: "recherche-fuite", description: "Diagnostic précis non destructif." },
  { id: 6, ref: "CTRL-06", title: "Contrat d'Entretien", slug: "contrat-entretien", description: "Maintenance et nettoyage régulier." },
  { id: 7, ref: "BAL-07", title: "Balcons & Loggias", slug: "balcons-loggias", description: "Systèmes d'Étanchéité Liquide (SEL)." },
  { id: 8, ref: "DALL-08", title: "Dalles sur Plots", slug: "dalles-sur-plots-retirees", description: "Dépose et réfection d'étanchéité." }
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isMobileServicesOpen, setIsMobileServicesOpen] = useState(false);

  const location = useLocation();

  // Fonction pour fermer les menus après un clic
  const closeMenus = () => {
    setIsOpen(false);
    setIsServicesOpen(false);
    setIsMobileServicesOpen(false);
  };

  // Helper pour savoir si un lien est actif (pour le style bleu)
  const isActive = (path) => location.pathname === path;

  return (
    <header className="fixed w-full top-0 z-[100] bg-white font-sans shadow-sm">
      <div className="h-1.5 w-full bg-[#0EA5E9]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-24">
          
          {/* LOGO */}
          <Link to="/" onClick={closeMenus} className="flex-shrink-0 flex items-center gap-2 cursor-pointer z-[101]">
              <img src="/logo.svg" alt="Global Étanchéité" />
          </Link>

          {/* --- DESKTOP NAVIGATION --- */}
          <nav className="hidden md:flex space-x-8 items-center h-full relative">
            
            <Link 
              to="/" 
              onClick={closeMenus}
              className={`font-medium transition-colors text-sm uppercase tracking-wide ${isActive('/') ? 'text-[#0EA5E9]' : 'text-gray-600 hover:text-[#0EA5E9]'}`}
            >
              Accueil
            </Link>

            {/* Menu Déroulant "SERVICES" */}
            <div 
              className="relative h-full flex items-center"
              onMouseEnter={() => setIsServicesOpen(true)}
              onMouseLeave={() => setIsServicesOpen(false)}
            >
              <Link 
                to="/services"
                className={`flex items-center gap-1 font-medium transition-colors text-sm uppercase tracking-wide ${isActive('/services') ? 'text-[#0EA5E9]' : 'text-gray-600 hover:text-[#0EA5E9]'}`}
                onClick={() => setIsServicesOpen(false)}
              >
                Services
                <ChevronDown size={16} className={`transition-transform duration-200 ${isServicesOpen ? 'rotate-180' : ''}`} />
              </Link>

              <AnimatePresence>
                {isServicesOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 15 }}
                    transition={{ duration: 0.2 }}
                    className="absolute top-full -left-20 w-[650px] bg-white border-t-4 border-[#0EA5E9] shadow-2xl rounded-b-sm p-6 grid grid-cols-2 gap-4 z-[110]"
                  >
                    {servicesList.map((service) => (
                      <Link 
                        key={service.id} 
                        to={`/service/${service.slug}`}
                        className="group flex items-start gap-4 p-3 hover:bg-slate-50 rounded-md transition-colors duration-200"
                        onClick={closeMenus}
                      >
                        <div className="mt-1 w-10 h-10 flex-shrink-0 bg-[#0F172A] text-white text-[10px] font-bold flex items-center justify-center rounded-sm group-hover:bg-[#0EA5E9] transition-colors">
                           {service.ref.split('-')[0]}
                        </div>
                        <div>
                          <h4 className="font-bold text-[#0F172A] text-sm uppercase group-hover:text-[#0EA5E9] transition-colors flex items-center gap-2">
                            {service.title}
                            <ArrowRight size={12} className="opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all" />
                          </h4>
                          <p className="text-xs text-gray-500 mt-1 line-clamp-1">
                            {service.description}
                          </p>
                        </div>
                      </Link>
                    ))}
                    <div className="col-span-2 border-t border-gray-100 pt-4 mt-2 text-center">
                        <Link to="/services" onClick={closeMenus} className="text-xs font-bold uppercase text-[#0EA5E9] hover:underline tracking-widest flex items-center justify-center gap-2 w-full">
                            Voir tous nos services <ArrowRight size={12}/>
                        </Link>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <Link 
              to="/realisations" 
              onClick={closeMenus}
              className={`font-medium transition-colors text-sm uppercase tracking-wide ${isActive('/realisations') ? 'text-[#0EA5E9]' : 'text-gray-600 hover:text-[#0EA5E9]'}`}
            >
              Réalisations
            </Link>
            
            <Link 
              to="/devis" 
              onClick={closeMenus}
              className={`font-medium transition-colors text-sm uppercase tracking-wide ${isActive('/devis') ? 'text-[#0EA5E9]' : 'text-gray-600 hover:text-[#0EA5E9]'}`}
            >
              Contact
            </Link>
          </nav>

          {/* --- CTA (Desktop) --- */}
          <div className="hidden md:flex items-center space-x-6 z-[101]">
            <a href="tel:0123456789" className="flex items-center gap-2 text-[#1E293B] font-bold group cursor-pointer">
              <div className="p-2 bg-slate-100 rounded-full group-hover:bg-blue-50 transition-colors">
                 <Phone size={18} className="text-[#0EA5E9]" />
              </div>
              <span className="group-hover:text-[#0EA5E9] transition-colors">01 23 45 67 89</span>
            </a>
            
            <Link to="/devis" onClick={closeMenus}>
              <button className="bg-[#0EA5E9] hover:bg-[#0284c7] text-white px-6 py-3 rounded-sm font-bold shadow-lg shadow-blue-500/30 transition-all uppercase text-xs tracking-widest">
                Demander un devis
              </button>
            </Link>
          </div>

          {/* --- MOBILE MENU BUTTON --- */}
          <div className="md:hidden flex items-center z-[101]">
            <button onClick={() => setIsOpen(!isOpen)} className="text-[#0F172A] hover:text-[#0EA5E9] focus:outline-none p-2">
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* --- MOBILE MENU --- */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-t border-gray-100 overflow-y-auto max-h-[calc(100vh-100px)] shadow-xl relative z-[90]"
          >
            <div className="px-4 pt-2 pb-6 space-y-1">
              
              <Link to="/" onClick={closeMenus} className="block w-full text-left px-3 py-4 text-base font-bold text-[#0F172A] border-b border-gray-50">
                ACCUEIL
              </Link>

              <div className="border-b border-gray-50">
                <button 
                  onClick={() => setIsMobileServicesOpen(!isMobileServicesOpen)}
                  className="w-full flex justify-between items-center px-3 py-4 text-base font-bold text-[#0F172A]"
                >
                  SERVICES
                  <ChevronDown size={20} className={`transition-transform ${isMobileServicesOpen ? 'rotate-180 text-[#0EA5E9]' : 'text-gray-400'}`} />
                </button>
                <AnimatePresence>
                  {isMobileServicesOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      className="overflow-hidden bg-slate-50"
                    >
                      <div className="py-2 space-y-1">
                        {servicesList.map((service) => (
                          <Link
                            key={service.id}
                            to={`/service/${service.slug}`}
                            onClick={closeMenus}
                            className="block pl-8 pr-4 py-3 text-sm text-gray-600 hover:text-[#0EA5E9] hover:bg-slate-100 border-l-2 border-transparent hover:border-[#0EA5E9] transition-all"
                          >
                            {service.title}
                          </Link>
                        ))}
                         <Link to="/services" onClick={closeMenus} className="block w-full text-left pl-8 pr-4 py-3 text-sm font-bold text-[#0EA5E9] hover:bg-slate-100">
                           VOIR TOUS LES SERVICES
                         </Link>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              <Link to="/realisations" onClick={closeMenus} className="block w-full text-left px-3 py-4 text-base font-bold text-[#0F172A] border-b border-gray-50">
                RÉALISATIONS
              </Link>
              
              <Link to="/contact" onClick={closeMenus} className="block w-full text-left px-3 py-4 text-base font-bold text-[#0F172A] border-b border-gray-50">
                CONTACT
              </Link>

              <div className="pt-6 px-3">
                <p className="text-center font-bold text-[#0F172A] mb-4 flex justify-center items-center gap-2">
                    <Phone size={18} className="text-[#0EA5E9]" />
                    01 23 45 67 89
                </p>
                <Link to="/devis" onClick={closeMenus}>
                  <button className="w-full bg-[#0F172A] text-white py-4 rounded-sm font-bold uppercase tracking-widest text-sm border-b-4 border-[#0EA5E9]">
                    Demander un devis
                  </button>
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;