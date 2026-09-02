import React from 'react';
import type { Metadata } from 'next';
import Image from 'next/image';
import { HiUserGroup, HiShieldCheck, HiMapPin, HiBolt } from 'react-icons/hi2';
import Container from '@/components/Container';
import CTA from '@/components/CTA';

export const metadata: Metadata = {
  title: 'Sobre Nosotros · Envíos DosRuedas Mar del Plata',
  description: 'Conocé la historia y el equipo detrás de Envíos DosRuedas. Mensajería y logística urbana pensada por y para marplatenses.',
};

export default function SobreNosotrosPage() {
  return (
    <div className="bg-brand-blue text-brand-white min-h-screen pt-28 pb-16">
      <section className="relative overflow-hidden pb-16 pt-8 border-b border-brand-white/15">
        <Container className="relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-7 space-y-6 text-left">
              <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-subheading uppercase tracking-widest bg-brand-yellow text-brand-blue font-bold shadow-glow-yellow border border-brand-yellow">
                <HiUserGroup className="text-sm" /> Quiénes Somos
              </span>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-display uppercase tracking-tight leading-none text-brand-white">
                LOGÍSTICA URBANA <br />
                <span className="text-brand-yellow">CON IDENTIDAD MARPLATENSE</span>
              </h1>

              <p className="text-base sm:text-lg text-brand-white/90 font-sans font-light leading-relaxed max-w-xl">
                Nacimos en Mar del Plata para resolver de raíz los dolores de cabeza de los comercios con las entregas: demoras, falta de respuesta y tarifas abusivas.
              </p>
            </div>

            <div className="lg:col-span-5 relative flex justify-center">
              <div className="rounded-[28px] p-2 bg-brand-white/10 border border-brand-white/20 shadow-2xl w-full max-w-md">
                <div className="rounded-[20px] bg-brand-blue-deep/90 p-6 text-brand-white space-y-4">
                  <div className="relative h-48 w-full rounded-2xl overflow-hidden border border-brand-white/10">
                    <Image
                      src="/delivery-background.jpg"
                      alt="Equipo de Mensajería Envíos DosRuedas"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="flex items-center justify-between text-xs font-mono">
                    <span>BASE OPERATIVA</span>
                    <span className="text-brand-yellow font-bold">MAR DEL PLATA</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Valores */}
      <Container className="py-16 sm:py-24 space-y-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
          <div className="rounded-[28px] p-2 bg-brand-white/10 border border-brand-white/20 shadow-xl">
            <div className="p-6 rounded-[20px] bg-brand-blue-deep h-full space-y-3">
              <div className="w-12 h-12 rounded-xl bg-brand-yellow text-brand-blue flex items-center justify-center text-2xl font-bold shadow-glow-yellow">
                <HiBolt />
              </div>
              <h3 className="font-subheading uppercase text-xl text-brand-white font-bold">
                Compromiso de Velocidad
              </h3>
              <p className="text-sm text-brand-white/80 font-sans font-light leading-relaxed">
                Entendemos que un cliente satisfecho compra de nuevo. Cumplimos cada promesa horaria con responsabilidad.
              </p>
            </div>
          </div>

          <div className="rounded-[28px] p-2 bg-brand-white/10 border border-brand-white/20 shadow-xl">
            <div className="p-6 rounded-[20px] bg-brand-blue-deep h-full space-y-3">
              <div className="w-12 h-12 rounded-xl bg-brand-yellow text-brand-blue flex items-center justify-center text-2xl font-bold shadow-glow-yellow">
                <HiShieldCheck />
              </div>
              <h3 className="font-subheading uppercase text-xl text-brand-white font-bold">
                Custodia y Rendición
              </h3>
              <p className="text-sm text-brand-white/80 font-sans font-light leading-relaxed">
                Cuidamos cada paquete como si fuera nuestro. Rendición inmediata y transparencia en cada cobranza.
              </p>
            </div>
          </div>

          <div className="rounded-[28px] p-2 bg-brand-white/10 border border-brand-white/20 shadow-xl">
            <div className="p-6 rounded-[20px] bg-brand-blue-deep h-full space-y-3">
              <div className="w-12 h-12 rounded-xl bg-brand-yellow text-brand-blue flex items-center justify-center text-2xl font-bold shadow-glow-yellow">
                <HiMapPin />
              </div>
              <h3 className="font-subheading uppercase text-xl text-brand-white font-bold">
                Conocimiento de la Ciudad
              </h3>
              <p className="text-sm text-brand-white/80 font-sans font-light leading-relaxed">
                Conocemos cada rincón, diagonal y barrio de Mar del Plata para elegir siempre la ruta más eficiente.
              </p>
            </div>
          </div>
        </div>

        <CTA />
      </Container>
    </div>
  );
}
