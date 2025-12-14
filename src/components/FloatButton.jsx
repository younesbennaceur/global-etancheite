import React, { useState } from 'react';
import { Phone, MessageCircle, X, MessageSquare } from 'lucide-react'; // Assurez-vous d'avoir lucide-react
import { motion, AnimatePresence } from 'framer-motion';

export default function FloatingContact() {
  const [isOpen, setIsOpen] = useState(false);

  // Remplacez par vos vrais numéros
  const phoneNumber = "0123456789"; 
  const whatsappNumber = "33612345678"; // Format international sans le +

  const toggleOpen = () => setIsOpen(!isOpen);

  // Animation des sous-boutons
  const buttonVariants = {
    hidden: { opacity: 0, y: 20, scale: 0.8 },
    visible: (custom) => ({
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { delay: custom * 0.1, duration: 0.2 }
    }),
    exit: { opacity: 0, y: 10, scale: 0.8, transition: { duration: 0.2 } }
  };

  return (
    <div className="fixed bottom-6 right-6 z-[100] flex flex-col items-end gap-3 font-sans">
      
      <AnimatePresence>
        {isOpen && (
          <>
            {/* BOUTON WHATSAPP */}
            <motion.a
              href={`https://wa.me/${whatsappNumber}`}
              target="_blank"
              rel="noopener noreferrer"
              custom={2}
              variants={buttonVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="flex items-center gap-3 group text-decoration-none"
            >
              <span className="bg-white text-[#0F172A] px-3 py-1 rounded-sm shadow-md text-sm font-bold opacity-0 group-hover:opacity-100 transition-opacity duration-200 hidden md:block">
                WhatsApp
              </span>
              <div className="w-12 h-12 rounded-full bg-[#25D366] text-white flex items-center justify-center shadow-lg hover:scale-110 transition-transform cursor-pointer border-2 border-white">
                <MessageCircle size={24} fill="white" className="text-[#25D366]" />
              </div>
            </motion.a>

            {/* BOUTON TÉLÉPHONE */}
            <motion.a
              href={`tel:${phoneNumber}`}
              custom={1}
              variants={buttonVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="flex items-center gap-3 group text-decoration-none"
            >
              <span className="bg-white text-[#0F172A] px-3 py-1 rounded-sm shadow-md text-sm font-bold opacity-0 group-hover:opacity-100 transition-opacity duration-200 hidden md:block">
                Appeler
              </span>
              <div className="w-12 h-12 rounded-full bg-[#0F172A] text-white flex items-center justify-center shadow-lg hover:scale-110 transition-transform cursor-pointer border-2 border-[#0EA5E9]">
                <Phone size={22} />
              </div>
            </motion.a>
          </>
        )}
      </AnimatePresence>

      {/* BOUTON PRINCIPAL (TRIGGER) */}
      <motion.button
        onClick={toggleOpen}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="relative w-14 h-14 rounded-full bg-[#0EA5E9] text-white flex items-center justify-center shadow-[0_0_15px_rgba(14,165,233,0.5)] border-2 border-white focus:outline-none"
      >
        {/* Cercle d'animation "Ripple" (Pulsation) */}
        {!isOpen && (
          <span className="absolute inline-flex h-full w-full rounded-full bg-[#0EA5E9] opacity-75 animate-ping"></span>
        )}
        
        {/* Icône changeante */}
        <div className="relative z-10 transition-transform duration-300">
          {isOpen ? <X size={28} /> : <MessageSquare size={26} fill="white" />}
        </div>
      </motion.button>
    </div>
  );
}