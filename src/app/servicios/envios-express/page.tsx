import React from 'react';
import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { HiBolt, HiClock, HiShieldCheck, HiMapPin, HiArrowRight } from 'react-icons/hi2';
import { FaWhatsapp } from 'react-icons/fa';
import Container from '@/components/Container';
import CTA from '@/components/CTA';

export const metadata: Metadata = {
  title: 'Envios Express en Moto (30-90 min) - Envios DosRuedas Mar del Plata',
  description: 'Servicio de cadeteria y mensajeria express inmediata en Mar del Plata. Repartidor exclusivo punto a punto, custodia digital y seguimiento en vivo.',
};

export default function EnviosExpressPage() {
  return (
    <div className="bg-brand-blue text-brand-white min-h-screen pt-28 pb-16">
      <section className="relative overflow-hidden pb-16 pt-8 border-b border-brand-white/15">
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none overflow-hidden z-0">
          <span className="font-display uppercase text-[15vw] leading-none text-brand-white/[0.03] tracking-tighter whitespace-nowrap">EXPRESS MDQ</span>
        </div>
        <Container className="relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-7 space-y-6 text-left">
              <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-subheading uppercase tracking-widest bg-brand-yellow text-brand-blue font-bold border border-brand-yellow">
                <HiBolt className="text-sm" /> Prioritario Inmediato
              </span>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-display uppercase tracking-tight leading-none text-brand-white">
                ENVIOS EXPRESS <br />
                <span className="text-brand-yellow">30 A 90 MINUTOS</span>
              </h1>
              <p className="text-base sm:text-lg text-brand-white/90 font-sans font-light leading-relaxed max-w-xl">
                Asignacion de cadete en moto exclusivo punto a punto para tramites, sobres, documentacion y paqueteria urgente en todo Mar del Plata.
              </p>
              <div className="flex flex-wrap gap-4 pt-2">
                <Link href="/cotizar/express" className="inline-flex items-center gap-2.5 rounded-full font-subheading uppercase tracking-wider font-bold px-8 py-3.5 bg-brand-yellow text-brand-blue hover:bg-brand-yellow-hover hover:shadow-glow-yellow transition-all duration-300 text-sm">
                  <span>Calcular Tarifa</span>
                  <HiArrowRight className="text-sm" />
                </Link>
                <a href="https://wa.me/542236602699?text=Hola,%20necesito%20un%20Envio%20Express" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-full font-subheading uppercase tracking-wider font-bold px-8 py-3.5 bg-brand-white/10 hover:bg-brand-white/20 text-brand-white border border-brand-white/30 transition-all text-sm">
                  <FaWhatsapp className="text-lg text-brand-yellow" />
                  <span>Pedir Mensajero</span>
                </a>
              </div>
            </div>
            <div className="lg:col-span-5 relative flex justify-center">
              <div className="rounded-[28px] p-2 bg-brand-white/10 border border-brand-white/20 shadow-2xl w-full max-w-md">
                <div className="rounded-[20px] bg-brand-blue-deep/90 p-6 text-brand-white space-y-4">
                  <div className="relative h-48 w-full rounded-2xl overflow-hidden border border-brand-white/10">
                    <Image src="/card_mapa.webp" alt="Mapa de Cobertura Mar del Plata" fill className="object-cover" />
                    <div className="absolute top-3 right-3 bg-brand-blue text-brand-yellow border border-brand-yellow px-2.5 py-1 rounded text-[9px] font-bold font-mono uppercase">MAPA EN VIVO</div>
                  </div>
                  <div className="flex items-center justify-between text-xs font-mono">
                    <span>VELOCIDAD ESTIMADA</span>
                    <span className="text-brand-yellow font-bold">30 - 90 Min</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <Container className="py-16 sm:py-24 space-y-12">
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <span className="px-4 py-1.5 rounded-full text-xs font-subheading uppercase tracking-widest bg-brand-blue-deep border border-brand-white/20 text-brand-yellow font-bold">Como Funciona el Express?</span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display uppercase tracking-tight">Maxima Rapidez y Seguridad Urbana</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
          <div className="rounded-[28px] p-2 bg-brand-white/10 border border-brand-white/20 shadow-xl">
            <div className="p-6 rounded-[20px] bg-brand-blue-deep h-full space-y-3">
              <div className="w-12 h-12 rounded-xl bg-brand-yellow text-brand-blue flex items-center justify-center text-2xl font-bold shadow-glow-yellow"><HiClock /></div>
              <h3 className="font-subheading uppercase text-xl text-brand-white font-bold">1. Retiro Inmediato</h3>
              <p className="text-sm text-brand-white/80 font-sans font-light leading-relaxed">Asignamos al mensajero mas cercano a tu ubicacion en Mar del Plata para buscar el paquete en minutos.</p>
            </div>
          </div>
          <div className="rounded-[28px] p-2 bg-brand-white/10 border border-brand-white/20 shadow-xl">
            <div className="p-6 rounded-[20px] bg-brand-blue-deep h-full space-y-3">
              <div className="w-12 h-12 rounded-xl bg-brand-yellow text-brand-blue flex items-center justify-center text-2xl font-bold shadow-glow-yellow"><HiShieldCheck /></div>
              <h3 className="font-subheading uppercase text-xl text-brand-white font-bold">2. Custodia Digital</h3>
              <p className="text-sm text-brand-white/80 font-sans font-light leading-relaxed">Trazabilidad y aviso de entrega en tiempo real con confirmacion al remitente via WhatsApp.</p>
            </div>
          </div>
          <div className="rounded-[28px] p-2 bg-brand-white/10 border border-brand-white/20 shadow-xl">
            <div className="p-6 rounded-[20px] bg-brand-blue-deep h-full space-y-3">
              <div className="w-12 h-12 rounded-xl bg-brand-yellow text-brand-blue flex items-center justify-center text-2xl font-bold shadow-glow-yellow"><HiMapPin /></div>
              <h3 className="font-subheading uppercase text-xl text-brand-white font-bold">3. Entrega en Mano</h3>
              <p className="text-sm text-brand-white/80 font-sans font-light leading-relaxed">Llegada directa al destinatario, cobro contra entrega si aplica y rendicion inmediata del dinero.</p>
            </div>
          </div>
        </div>
        <CTA />
      </Container>
    </div>
  );
}