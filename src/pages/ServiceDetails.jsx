import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  CheckCircle2, ArrowLeft, Phone, FileText, Layers, Droplets, 
  Home, Sprout, Search, ClipboardCheck, ChevronDown, ShieldCheck 
} from 'lucide-react';

// --- DONNÉES ÉTANCHÉITÉ (Adaptées au BTP) ---
// --- DONNÉES ÉTANCHÉITÉ COMPLÈTES (9 Services) ---
const servicesData = {
  // 1. Toit Terrasse
  "toit-terrasse": {
    title: "Toit Terrasse",
    subtitle: "Rénovation & Isolation Thermique",
    description: "Les toits-terrasses sont les zones les plus exposées aux intempéries. Notre expertise en bitume élastomère assure une étanchéité parfaite de votre bâtiment tout en améliorant son isolation thermique, conformément aux normes DTU 43.1.",
    image: "https://images.unsplash.com/photo-1621905252507-b35492cc74b4?q=80&w=2069",
    icon: Home,
    benefits: [
      { title: "Garantie Décennale", text: "Travaux couverts sur 10 ans." },
      { title: "Normes DTU 43.1", text: "Respect strict des règles de l'art." },
      { title: "Économie d'énergie", text: "Isolation performante incluse." }
    ],
    process: [
      { step: "1", text: "Sondage & Nettoyage du support" },
      { step: "2", text: "Pose pare-vapeur & Isolant thermique" },
      { step: "3", text: "Application bicouche bitume élastomère" }
    ],
    features: [
      "Étanchéité auto-protégée ou sous gravillons",
      "Isolation thermique (Polyuréthane / Laine de roche)",
      "Traitement des relevés d'étanchéité",
      "Pose de dalles sur plots possible"
    ],
    faqs: [
      { q: "Quelle est la durée de vie d'une étanchéité ?", a: "Une étanchéité bitumineuse bien entretenue dure entre 20 et 25 ans." },
      { q: "Puis-je rendre ma terrasse accessible ?", a: "Oui, nous pouvons poser des dalles sur plots ou un platelage bois après étanchéité." }
    ]
  },

  // 2. Étanchéité Neuf
  "etancheite-neuf": {
    title: "Étanchéité Neuf",
    subtitle: "Protection des Ouvrages & Fondations",
    description: "Pour les constructions neuves, l'étanchéité est cruciale dès le départ. Nous protégeons les fondations, les radiers et les toitures contre l'humidité ascensionnelle et les infiltrations, garantissant la longévité de la structure.",
    image: "https://images.unsplash.com/photo-1590082725907-70e173e6344d?q=80&w=2070",
    icon: Layers,
    benefits: [
      { title: "Pérennité", text: "Protection durable du béton." },
      { title: "Conformité", text: "Respect des études techniques." },
      { title: "Polyvalence", text: "Fondations, Murs enterrés, Toits." }
    ],
    process: [
      { step: "1", text: "Préparation des surfaces béton" },
      { step: "2", text: "Application primaire d'accrochage" },
      { step: "3", text: "Pose membrane ou résine selon CCTP" }
    ],
    features: [
      "Cuvelage des sous-sols",
      "Étanchéité sous dallage",
      "Traitement des joints de dilatation",
      "Protection mécanique des relevés"
    ],
    faqs: [
      { q: "Quand intervenez-vous sur le chantier ?", a: "Nous intervenons généralement après le gros œuvre, une fois les supports secs (28 jours pour le béton)." },
      { q: "Quelle garantie pour le neuf ?", a: "L'étanchéité dans le neuf est couverte par la garantie décennale constructeur." }
    ]
  },

  // 3. Sols en Résine
  "sols-resine": {
    title: "Sols en Résine",
    subtitle: "Systèmes d'Étanchéité Liquide (SEL)",
    description: "Idéal pour les garages, les locaux techniques ou les intérieurs modernes. La résine forme une surface continue, sans joint, facile à nettoyer et extrêmement résistante aux chocs et aux produits chimiques.",
    image: "https://images.unsplash.com/photo-1632759868194-6d9b04f3780d?q=80&w=2070",
    icon: Droplets,
    benefits: [
      { title: "Esthétique", text: "Large choix de couleurs et finitions." },
      { title: "Hygiénique", text: "Surface lisse et sans joint." },
      { title: "Résistant", text: "Supporte le trafic véhicule." }
    ],
    process: [
      { step: "1", text: "Ponçage diamant & Aspiration" },
      { step: "2", text: "Application couche de masse époxy" },
      { step: "3", text: "Couche de finition (Antidérapant/Lisse)" }
    ],
    features: [
      "Résine Époxy ou Polyuréthane",
      "Classement UPEC élevé",
      "Finition quartz coloré ou pailleté",
      "Marquage au sol possible (Parking)"
    ],
    faqs: [
      { q: "Peut-on appliquer la résine sur du carrelage ?", a: "Oui, après une préparation spécifique pour assurer l'adhérence et le ragréage des joints." },
      { q: "Quel est le temps de séchage ?", a: "La circulation piétonne est possible après 24h, et le trafic véhicule après 72h." }
    ]
  },

  // 4. Toitures Végétalisées
  "toitures-vegetalisees": {
    title: "Toitures Végétalisées",
    subtitle: "Écologie & Isolation Naturelle",
    description: "Transformez votre toit en jardin. Nous installons le complexe d'étanchéité anti-racine spécifique et le système de drainage nécessaire pour accueillir la végétation (sedum ou intensive).",
    image: "https://images.unsplash.com/photo-1596238640393-2715568f188e?q=80&w=2070",
    icon: Sprout,
    benefits: [
      { title: "Isolation", text: "Meilleure inertie thermique été/hiver." },
      { title: "Écologie", text: "Favorise la biodiversité en ville." },
      { title: "Retenue d'eau", text: "Limite les rejets aux égouts." }
    ],
    process: [
      { step: "1", text: "Étanchéité anti-racines (Jardin)" },
      { step: "2", text: "Pose couche drainante & filtrante" },
      { step: "3", text: "Mise en place du substrat & végétaux" }
    ],
    features: [
      "Membrane bitumineuse anti-racine",
      "Végétalisation extensive (Sedum) ou intensive",
      "Système d'arrosage automatique si besoin",
      "Entretien simplifié"
    ],
    faqs: [
      { q: "Mon toit peut-il supporter le poids ?", a: "Une étude de charge est nécessaire. Le sedum pèse environ 80kg/m² saturé en eau." },
      { q: "Faut-il tondre la toiture ?", a: "Non, le sedum est une plante couvre-sol autonome. Un désherbage annuel suffit." }
    ]
  },

  // 5. Recherche de Fuite
  "recherche-fuite": {
    title: "Recherche de Fuite",
    subtitle: "Diagnostic Expert Non Destructif",
    description: "Une infiltration ne doit pas attendre. Nous utilisons des technologies de pointe (fumigène, gaz traceur, fluorescéine, humidimètre) pour localiser l'origine exacte de la fuite sans casser votre toiture.",
    image: "https://images.unsplash.com/photo-1584622050111-993a426fbf0a?q=80&w=2070",
    icon: Search,
    benefits: [
      { title: "Intervention 48h", text: "Urgence traitée en priorité." },
      { title: "Rapport Complet", text: "Pour votre assurance habitation." },
      { title: "Sans Destruction", text: "Technologies non invasives." }
    ],
    process: [
      { step: "1", text: "Inspection visuelle & Sondage humidité" },
      { step: "2", text: "Test Fumigène ou Mise en eau colorée" },
      { step: "3", text: "Rapport photo & Devis réparation" }
    ],
    features: [
      "Injection de fumigène sous étanchéité",
      "Gaz traceur (Azote/Hydrogène)",
      "Colorant Fluorescéine (Toiture terrasse)",
      "Sondage humidité par impédance"
    ],
    faqs: [
      { q: "Le diagnostic est-il remboursé ?", a: "La plupart des assurances multirisques habitation prennent en charge la recherche de fuite." },
      { q: "Intervenez-vous sur toiture végétalisée ?", a: "Oui, le gaz traceur est particulièrement efficace pour traverser la terre et localiser la fuite." }
    ]
  },

  // 6. Contrat d'Entretien
  "contrat-entretien": {
    title: "Contrat d'Entretien",
    subtitle: "Maintenance & Prévention",
    description: "La longévité de votre toiture dépend de son entretien. Notre contrat annuel inclut le nettoyage des évacuations, l'enlèvement des mousses et la vérification des relevés pour éviter tout sinistre.",
    image: "https://images.unsplash.com/photo-1581094794329-cd8119608f84?q=80&w=2070",
    icon: ClipboardCheck,
    benefits: [
      { title: "Sérénité", text: "Visite annuelle programmée." },
      { title: "Économie", text: "Évite les grosses réparations." },
      { title: "Conformité", text: "Obligatoire pour la garantie décennale." }
    ],
    process: [
      { step: "1", text: "Nettoyage des entrées d'eaux pluviales" },
      { step: "2", text: "Enlèvement des détritus et végétaux" },
      { step: "3", text: "Inspection visuelle des points singuliers" }
    ],
    features: [
      "Rapport de visite avec photos",
      "Nettoyage chéneaux et gouttières",
      "Recharge de gravillons si nécessaire",
      "Petites réparations incluses (reprises de joint)"
    ],
    faqs: [
      { q: "Est-ce obligatoire ?", a: "L'entretien est fortement recommandé et souvent exigé par les assureurs pour maintenir la garantie décennale." },
      { q: "Quel est le coût ?", a: "Le coût dépend de la surface et de l'accessibilité. Devis gratuit sur demande." }
    ]
  },

  // 7. Balcons & Loggias
  "balcons-loggias": {
    title: "Balcons & Loggias",
    subtitle: "Étanchéité Liquide & Finitions Déco",
    description: "Les balcons fissurés sont source d'infiltration en façade. Nous appliquons des Systèmes d'Étanchéité Liquide (SEL) performants, circulables et esthétiques, sans surépaisseur importante.",
    image: "https://images.unsplash.com/photo-1621251347676-e10eb5375c32?q=80&w=2070",
    icon: Droplets,
    benefits: [
      { title: "Faible Épaisseur", text: "Pas de problème de seuil de porte." },
      { title: "Esthétique", text: "Finitions décoratives variées." },
      { title: "Rapidité", text: "Intervention rapide et propre." }
    ],
    process: [
      { step: "1", text: "Ponçage et traitement des fissures" },
      { step: "2", text: "Pose de la résine armée (entoilage)" },
      { step: "3", text: "Couche de finition circulable" }
    ],
    features: [
      "Résine polyuréthane souple",
      "Traitement antidérapant",
      "Remontées en plinthes étanches",
      "Large choix de coloris RAL"
    ],
    faqs: [
      { q: "Faut-il casser le carrelage existant ?", a: "Pas toujours. Si le carrelage est sain, nous pouvons appliquer la résine directement dessus après préparation." },
      { q: "Est-ce glissant ?", a: "Non, nous incorporons de la silice ou des puces pour rendre la surface antidérapante, même mouillée." }
    ]
  },

  // 8. Bardage & Façade
  "bardage-facade": {
    title: "Bardage & Façade",
    subtitle: "Isolation par l'Extérieur (ITE) & Habillage",
    description: "Protégez et embellissez vos murs. Nous posons des bardages métalliques, bois ou composites qui assurent l'étanchéité de la façade tout en permettant une isolation par l'extérieur performante.",
    image: "https://images.unsplash.com/photo-1520697830682-bbb6e85e2b0b?q=80&w=2070",
    icon: Layers,
    benefits: [
      { title: "Isolation", text: "Suppression des ponts thermiques." },
      { title: "Esthétique", text: "Modernisation du bâtiment." },
      { title: "Protection", text: "Barrière contre la pluie battante." }
    ],
    process: [
      { step: "1", text: "Pose de l'ossature et de l'isolant" },
      { step: "2", text: "Pose du pare-pluie" },
      { step: "3", text: "Fixation du bardage de finition" }
    ],
    features: [
      "Bardage métallique double peau",
      "Bois ou Composite",
      "Isolation Laine de roche / Verre",
      "Traitement des contours de fenêtres"
    ],
    faqs: [
      { q: "Quel gain énergétique ?", a: "L'ITE permet de réduire jusqu'à 25% les déperditions thermiques d'un bâtiment." },
      { q: "Avez-vous la qualification RGE ?", a: "Oui, nos travaux sont éligibles aux aides à la rénovation énergétique (selon législation)." }
    ]
  },

  // 9. Parking & Cuvelage
  "parking-cuvelage": {
    title: "Parking & Cuvelage",
    subtitle: "Étanchéité des Infrastructures Enterrées",
    description: "Les parkings souterrains subissent des contraintes fortes (trafic, sel, eau). Nous réalisons l'étanchéité des dalles intermédiaires et le cuvelage des niveaux inférieurs contre les remontées de nappe.",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070",
    icon: CheckCircle2,
    benefits: [
      { title: "Résistance", text: "Trafic intense et hydrocarbures." },
      { title: "Sécurité", text: "Sols antidérapants et lumineux." },
      { title: "Garantie", text: "Solutions techniques durables." }
    ],
    process: [
      { step: "1", text: "Grenaillage du support béton" },
      { step: "2", text: "Traitement des fissures et joints" },
      { step: "3", text: "Application résine parking système lourd" }
    ],
    features: [
      "Système de résine souple pontant les fissures",
      "Cuvelage intrados (par l'intérieur)",
      "Traitement des rampes d'accès",
      "Marquage des places de stationnement"
    ],
    faqs: [
      { q: "Comment traiter les infiltrations d'eau au sol ?", a: "Nous réalisons un cuvelage étanche ou des injections de résine expansive pour bloquer l'eau." },
      { q: "La résine résiste-t-elle aux pneus chauds ?", a: "Oui, nos systèmes époxy/PU sont spécifiquement formulés pour ne pas marquer sous les pneus chauds." }
    ]
  },

  // Fallback
  "default": {
    title: "Solution Technique",
    subtitle: "Expertise Étanchéité Global",
    description: "Nos équipes certifiées interviennent pour garantir la pérennité de vos ouvrages avec des matériaux professionnels.",
    image: "https://images.unsplash.com/photo-1590082725907-70e173e6344d?q=80",
    icon: Layers,
    benefits: [
        { title: "Qualité Pro", text: "Matériaux certifiés." },
        { title: "Sécurité", text: "Personnel formé." },
        { title: "Durabilité", text: "Solutions pérennes." }
    ],
    process: [
        { step: "1", text: "Analyse du besoin" },
        { step: "2", text: "Mise en œuvre technique" },
        { step: "3", text: "Contrôle qualité" }
    ],
    features: ["Devis détaillé gratuit", "Garantie décennale", "Suivi de chantier", "Nettoyage fin de chantier"],
    faqs: [{ q: "Avez-vous la décennale ?", a: "Oui, attestation fournie avec le devis." }]
  }
};

const SimpleAccordion = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="border-b border-gray-100 last:border-0">
      <button onClick={() => setIsOpen(!isOpen)} className="flex justify-between items-center w-full py-4 text-left group">
        <span className="font-bold text-[#0F172A] group-hover:text-[#0EA5E9] transition-colors">{question}</span>
        <ChevronDown size={20} className={`text-gray-400 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }}>
            <p className="text-slate-500 pb-4 text-sm">{answer}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default function ServiceDetails() {
  const { slug } = useParams();
  const service = servicesData[slug] || servicesData["default"];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  return (
    <div className="bg-slate-50 min-h-screen font-sans pb-20">
      
      {/* --- HERO SECTION --- */}
      <div className="relative h-[50vh] min-h-[400px]">
        <img 
          src={service.image} 
          alt={service.title} 
          className="w-full h-full object-cover"
        />
        {/* Overlay Dégradé Bleu Nuit */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0F172A] via-[#0F172A]/60 to-transparent"></div>
        
        <div className="absolute inset-0 flex flex-col justify-end pb-12 px-4 md:px-8 lg:px-16 max-w-7xl mx-auto">
          <Link to="/services" className="text-white/70 hover:text-[#0EA5E9] flex items-center gap-2 mb-6 w-fit transition-colors group">
            <div className="bg-white/5 p-2 rounded-full group-hover:bg-white/10 transition-colors border border-white/10">
                 <ArrowLeft size={18} />
            </div>
            <span className="font-medium text-sm tracking-wide uppercase">Retour aux solutions</span>
          </Link>
          
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="flex items-center gap-4 mb-4">
            <div className="p-3 bg-[#0EA5E9] rounded-sm text-white shadow-lg shadow-blue-500/20">
              <service.icon size={32} strokeWidth={1.5} />
            </div>
            <span className="text-[#0EA5E9] font-bold tracking-widest uppercase text-xs md:text-sm bg-[#0F172A]/80 px-3 py-1 rounded-full border border-[#0EA5E9]/30 backdrop-blur-md">
              Expertise Technique
            </span>
          </motion.div>
          
          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="text-4xl md:text-6xl font-black text-white mb-2 leading-tight">
            {service.title}
          </motion.h1>
          <p className="text-lg md:text-xl text-slate-300 max-w-2xl font-light">{service.subtitle}</p>
        </div>
      </div>

      {/* --- CONTENU PRINCIPAL --- */}
      <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-16 mt-12">
        <div className="flex flex-col lg:flex-row gap-12">
          
          {/* GAUCHE : Détails Techniques */}
          <div className="w-full lg:w-2/3 space-y-8">
            
            {/* Description */}
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="bg-white p-8 md:p-10 rounded-sm shadow-xl shadow-slate-200/50 border-l-4 border-[#0EA5E9]">
              <h3 className="text-2xl font-bold text-[#0F172A] mb-4 flex items-center gap-2">Présentation</h3>
              <p className="text-slate-600 leading-relaxed text-lg">{service.description}</p>
            </motion.div>

            {/* Pourquoi Nous Choisir */}
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {service.benefits.map((benefit, i) => (
                <div key={i} className="bg-white p-6 rounded-sm border border-slate-100 shadow-sm hover:border-[#0EA5E9]/30 transition-colors">
                   <div className="bg-blue-50 w-10 h-10 rounded-full flex items-center justify-center text-[#0EA5E9] mb-3">
                      <ShieldCheck size={20} />
                   </div>
                   <h4 className="font-bold text-[#0F172A] text-sm mb-1 uppercase">{benefit.title}</h4>
                   <p className="text-xs text-slate-500 leading-snug">{benefit.text}</p>
                </div>
              ))}
            </motion.div>

            {/* Processus Technique */}
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="bg-white p-8 md:p-10 rounded-sm shadow-lg shadow-slate-200/40">
               <h3 className="text-2xl font-bold text-[#0F172A] mb-6 flex items-center gap-2">Méthodologie d'intervention</h3>
               <div className="space-y-6 relative before:absolute before:left-4 before:top-2 before:h-full before:w-0.5 before:bg-slate-100">
                 {service.process.map((step, i) => (
                   <div key={i} className="flex items-center gap-6 relative z-10">
                      <div className="w-9 h-9 rounded-full bg-[#0F172A] text-white flex items-center justify-center font-bold text-sm shrink-0 ring-4 ring-white shadow-md">
                        {step.step}
                      </div>
                      <span className="font-medium text-slate-700 text-lg">{step.text}</span>
                   </div>
                 ))}
               </div>
            </motion.div>

            {/* Inclus dans la prestation */}
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
              <h3 className="text-xl font-bold text-[#0F172A] mb-6">Caractéristiques Techniques</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {service.features.map((feature, index) => (
                  <div key={index} className="flex items-center gap-3 bg-white p-4 rounded-sm border border-slate-100">
                    <CheckCircle2 size={18} className="text-[#0EA5E9]" />
                    <span className="text-slate-600 font-medium text-sm">{feature}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* FAQ */}
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
               <h3 className="text-xl font-bold text-[#0F172A] mb-4">Questions Fréquentes</h3>
               <div className="bg-white rounded-sm p-6 shadow-sm border border-slate-100">
                  {service.faqs.map((faq, i) => (
                    <SimpleAccordion key={i} question={faq.q} answer={faq.a} />
                  ))}
               </div>
            </motion.div>

          </div>

          {/* DROITE : Offre Sticky (Devis BTP) */}
          <div className="w-full lg:w-1/3">
            <div className="sticky top-28">
              <motion.div initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} className="bg-[#0F172A] text-white rounded-sm p-8 shadow-2xl relative overflow-hidden border-t-4 border-[#0EA5E9]">
                
                {/* Effets de fond */}
                <div className="absolute top-0 right-0 w-40 h-40 bg-[#0EA5E9]/10 rounded-full blur-[50px] translate-x-10 -translate-y-10"></div>
                
                <div className="relative z-10">
                  <div className="inline-block bg-[#0EA5E9] text-white text-[10px] font-bold px-3 py-1 rounded-full mb-6 uppercase tracking-widest">
                    Devis Gratuit sous 24h
                  </div>
                  
                  <h3 className="text-2xl font-black text-white mb-2 uppercase italic leading-none">
                    VOTRE PROJET <br/>ÉTANCHÉITÉ
                  </h3>
                  
                  <p className="text-slate-400 text-sm mb-8 leading-relaxed border-t border-slate-700 pt-4 mt-4">
                    Obtenez une estimation précise et détaillée pour vos travaux. Sans engagement.
                  </p>

                  <div className="space-y-3 mb-8">
                     <div className="flex items-center gap-3 text-sm">
                        <CheckCircle2 size={16} className="text-[#0EA5E9]" />
                        <span>Déplacement IDF inclus</span>
                     </div>
                     <div className="flex items-center gap-3 text-sm">
                        <CheckCircle2 size={16} className="text-[#0EA5E9]" />
                        <span>Attestation Décennale fournie</span>
                     </div>
                  </div>

                  <a href="tel:0123456789" className="group w-full bg-white hover:bg-[#0EA5E9] hover:text-white text-[#0F172A] font-bold py-4 px-6 rounded-sm flex items-center justify-center gap-3 transition-all">
                    <Phone size={20} className="text-[#0EA5E9] group-hover:text-white transition-colors" />
                    <span>01 23 45 67 89</span>
                  </a>
                  
                  <button className="w-full mt-4 border border-slate-600 hover:border-[#0EA5E9] text-slate-300 hover:text-white py-3 rounded-sm text-sm font-medium transition-colors uppercase tracking-wide">
                    Demander en ligne
                  </button>
                </div>
              </motion.div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}