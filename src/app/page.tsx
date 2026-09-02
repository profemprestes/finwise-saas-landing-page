import React from "react";
import Hero from "@/components/Hero";
import Testimonials from "@/components/Testimonials";
import Pricing from "@/components/Pricing/Pricing";
import FAQ from "@/components/FAQ";
import Logos from "@/components/Logos";
import Benefits from "@/components/Benefits/Benefits";
import Container from "@/components/Container";
import Section from "@/components/Section";
import Stats from "@/components/Stats";
import CTA from "@/components/CTA";

const HomePage: React.FC = () => {
  return (
    <div className="relative w-full overflow-hidden bg-brand-blue text-brand-white">
      {/* Hero Section */}
      <Hero />

      {/* Logos Marquee / Grid */}
      <Logos />

      {/* Contenedor Principal de Secciones */}
      <Container className="space-y-16 sm:space-y-24 lg:space-y-28 py-12 sm:py-16 lg:py-20 relative z-10">
        <Benefits />

        <Section
          id="servicios-planes"
          title="Nuestros Planes y Tarifas"
          description="Servicios transparentes diseñados para particulares, comercios y tiendas online de Mar del Plata."
        >
          <Pricing />
        </Section>

        <Section
          id="testimonios"
          title="Lo Que Dicen Nuestros Clientes"
          description="Comercios y marcas marplatenses que confían su logística diaria en nosotros."
        >
          <Testimonials />
        </Section>

        <FAQ />

        <Stats />
        
        <CTA />
      </Container>
    </div>
  );
};

export default HomePage;

