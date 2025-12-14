import React from 'react'
import Hero from '../components/Hero'
import AboutUs from '../components/Aboutus'
import Services9Grid from '../components/Services'
import Realizations from '../components/Realizations' // Assumant que c'est le composant Transparence
import ContactUs from '../components/ContactUs'
import Testimonials from '../components/Avis'
import FAQ from '../components/Faqs'
import CTASection from '../components/CTASection'

// Note: J'ai ajouté les IDs correspondants aux liens de ta navbar
export default function Home() {
  return (
    <div className="bg-gray-50">
      
        {/* Section Accueil (Haut de page) */}
        <section id="home">
            <Hero/>
        </section>

        {/* Section À Propos */}
        <section id="about">
            <AboutUs/>
        </section>

        {/* Section Services */}
        <section id="services">
            <Services9Grid/>
        </section>

        {/* Section Engagement / Transparence */}
        <section id="realizations">
            <Realizations/>
        </section>
    {/* Section CTA */}
        <section id="cta">
            <CTASection/>
        </section>
        
        {/* Section FAQ */}
       
     
        {/* Section Avis */}
        <section id="avis">
            <Testimonials/>
        </section>
         <section id="faq">
            <FAQ/>
        </section>
        
        {/* Section Contact */}
        <section id="contact">
            <ContactUs/>
        </section>

    </div>
  )
}