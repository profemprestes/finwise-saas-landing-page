import React from 'react';
import type { Metadata } from 'next';
import Image from 'next/image';
import { HiCube, HiShieldCheck, HiSparkles, HiCheckCircle, HiArrowRight } from 'react-icons/hi2';
import { FaWhatsapp } from 'react-icons/fa';
import Container from '@/components/Container';
import CTA from '@/components/CTA';

export const metadata: Metadata = {
  title: 'Mercado Envios Flex en Mar del Plata - Envios DosRuedas',
  description: 'Logistica oficial para vendedores de MercadoLibre en Mar del Plata. Retiros diarios y entregas garantizadas en el dia para mantener tu reputacion en verde.',
};

export default function EnviosFlexPage() {
  return (
    <div className="bg-brand-blue text-brand-white min-h-screen pt-28 pb-16">
      <section className="relative overflow-hidden pb-16 pt-8 border-b border-brand-white/15">
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none overflow-hidden z-0">
          <span className="font-display uppercase text-[15vw] leading-none text-brand-white/[0.03] tracking-tighter whitespace-nowrap">MERCADOLIBRE FLEX</span>
        </div>
        <Container className="relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-7 space-y-6 text-left">
              <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-subheading uppercase tracking-widest bg-brand-yellow text-brand-blue font-bold border border-brand-yellow">
                <HiCube className="text-sm" /> Logistica Oficial E-Commerce
              </span>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-display uppercase tracking-tight leading-none text-brand-white">
                MERCADO ENVIOS FLEX <br />
                <span className="text-brand-yellow">MAR DEL PLATA</span>
              </h1>
              <p className="text-base sm:text-lg text-brand-white/90 font-sans font-light leading-relaxed max-w-xl">
                Aumenta tus ventas ofreciendo entregas en el dia en MercadoLibre. Cumplimos con los estandares mas exigentes de la plataforma para cuidar tu reputacion.
              </p>
              <div className="flex flex-wrap gap-4 pt-2">
                <a href="https://wa.me/542236602699?text=Hola,%20quiero%20integrar%20Mercado%20Envios%20Flex%20con%20ustedes" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2.5 rounded-full font-subheading uppercase tracking-wider font-bold px-8 py-3.5 bg-brand-yellow text-brand-blue hover:bg-brand-yellow-hover hover:shadow-glow-yellow transition-all duration-300 text-sm">
                  <FaWhatsapp className="text-lg" />
                  <span>Integrar Flex Ahora</span>
                  <HiArrowRight className="text-sm" />
                </a>
              </div>
            </div>
            <div className="lg:col-span-5 relative flex justify-center">
              <div className="rounded-[28px] p-2 bg-brand-white/10 border border-brand-white/20 shadow-2xl w-full max-w-md">
                <div className="rounded-[20px] bg-brand-blue-deep/90 p-6 text-brand-white space-y-4">
                  <div className="relative h-48 w-full rounded-2xl overflow-hidden border border-brand-white/10">
                    <Image src="/banner-servicio-flex.jpg" alt="Mercado Envios Flex Mar del Plata" fill className="object-cover" />
                  </div>
                  <div className="flex items-center justify-between text-xs font-mono">
                    <span>REPUTACION GARANTIZADA</span>
                    <span className="text-brand-yellow font-bold">+99.5% A TIEMPO</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <Container className="py-16 sm:py-24 space-y-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
          <div className="rounded-[28px] p-2 bg-brand-white/10 border border-brand-white/20 shadow-xl">
            <div className="p-6 rounded-[20px] bg-brand-blue-deep h-full space-y-3">
              <div className="w-12 h-12 rounded-xl bg-brand-yellow text-brand-blue flex items-center justify-center text-2xl font-bold shadow-glow-yellow"><HiCheckCircle /></div>
              <h3 className="font-subheading uppercase text-xl text-brand-white font-bold">Escaneo y Trazabilidad</h3>
              <p className="text-sm text-brand-white/80 font-sans font-light leading-relaxed">Lectura de etiquetas QR oficiales de MercadoLibre en el retiro y entrega con confirmacion geolocalizada.</p>
            </div>
          </div>
          <div className="rounded-[28px] p-2 bg-brand-white/10 border border-brand-white/20 shadow-xl">
            <div className="p-6 rounded-[20px] bg-brand-blue-deep h-full space-y-3">
              <div className="w-12 h-12 rounded-xl bg-brand-yellow text-brand-blue flex items-center justify-center text-2xl font-bold shadow-glow-yellow"><HiSparkles /></div>
              <h3 className="font-subheading uppercase text-xl text-brand-white font-bold">Franjas Horarias Claras</h3>
              <p className="text-sm text-brand-white/80 font-sans font-light leading-relaxed">Entregas durante la tarde del mismo dia con aviso previo al comprador para evitar segundas visitas.</p>
            </div>
          </div>
          <div className="rounded-[28px] p-2 bg-brand-white/10 border border-brand-white/20 shadow-xl">
            <div className="p-6 rounded-[20px] bg-brand-blue-deep h-full space-y-3">
              <div className="w-12 h-12 rounded-xl bg-brand-yellow text-brand-blue flex items-center justify-center text-2xl font-bold shadow-glow-yellow"><HiShieldCheck /></div>
              <h3 className="font-subheading uppercase text-xl text-brand-white font-bold">Soporte y Reclamos</h3>
              <p className="text-sm text-brand-white/80 font-sans font-light leading-relaxed">Equipo dedicado para resolver dudas de compradores y evitar cancelaciones o demoras en la app.</p>
            </div>
          </div>
        </div>
        <CTA />
      </Container>
    </div>
  );
}