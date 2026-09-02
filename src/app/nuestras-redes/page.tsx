import React from 'react';
import type { Metadata } from 'next';
import { FaFacebookF, FaInstagram, FaWhatsapp } from 'react-icons/fa';
import { HiShare, HiArrowRight } from 'react-icons/hi2';
import Container from '@/components/Container';
import CTA from '@/components/CTA';
import { siteDetails } from '@/data/siteDetails';

export const metadata: Metadata = {
  title: 'Nuestras Redes y Canales Oficiales - Envios DosRuedas',
  description: 'Conectate con Envios DosRuedas en Mar del Plata a traves de nuestras redes sociales y canales de atencion directa.',
};

export default function RedesPage() {
  return (
    <div className="bg-brand-blue text-brand-white min-h-screen pt-28 pb-16">
      <Container className="py-12 space-y-12 max-w-4xl text-center">
        <div className="space-y-4">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-subheading uppercase tracking-widest bg-brand-yellow text-brand-blue font-bold border border-brand-yellow">
            <HiShare className="text-sm" /> Canales Oficiales
          </span>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-display uppercase tracking-tight">
            NUESTRAS <span className="text-brand-yellow">REDES Y CONTACTO</span>
          </h1>
          <p className="text-base text-brand-white/90 font-sans max-w-xl mx-auto font-light leading-relaxed">
            Seguinos en nuestras plataformas para novedades, promos para comercios y atencion personalizada.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-left">
          <a href={siteDetails.whatsappUrl} target="_blank" rel="noopener noreferrer" className="rounded-[28px] p-2 bg-brand-white/10 border border-brand-white/20 shadow-xl hover:-translate-y-1 transition-transform group block">
            <div className="p-6 rounded-[20px] bg-brand-blue-deep h-full flex flex-col justify-between space-y-4">
              <div className="w-12 h-12 rounded-xl bg-green-500 text-white flex items-center justify-center text-2xl">
                <FaWhatsapp />
              </div>
              <div>
                <h3 className="font-subheading uppercase text-xl text-brand-white group-hover:text-brand-yellow transition-colors font-bold">WhatsApp Oficial</h3>
                <p className="text-xs text-brand-white/80 font-sans mt-1">Atencion instantanea de lunes a sabados.</p>
              </div>
              <span className="text-xs font-mono text-brand-yellow font-bold flex items-center gap-1">Chatear <HiArrowRight /></span>
            </div>
          </a>

          <a href="https://instagram.com/enviosdosruedas" target="_blank" rel="noopener noreferrer" className="rounded-[28px] p-2 bg-brand-white/10 border border-brand-white/20 shadow-xl hover:-translate-y-1 transition-transform group block">
            <div className="p-6 rounded-[20px] bg-brand-blue-deep h-full flex flex-col justify-between space-y-4">
              <div className="w-12 h-12 rounded-xl bg-pink-600 text-white flex items-center justify-center text-2xl">
                <FaInstagram />
              </div>
              <div>
                <h3 className="font-subheading uppercase text-xl text-brand-white group-hover:text-brand-yellow transition-colors font-bold">Instagram</h3>
                <p className="text-xs text-brand-white/80 font-sans mt-1">Consejos logisticos y novedades diarias.</p>
              </div>
              <span className="text-xs font-mono text-brand-yellow font-bold flex items-center gap-1">Seguir <HiArrowRight /></span>
            </div>
          </a>

          <a href="https://facebook.com/enviosdosruedas" target="_blank" rel="noopener noreferrer" className="rounded-[28px] p-2 bg-brand-white/10 border border-brand-white/20 shadow-xl hover:-translate-y-1 transition-transform group block">
            <div className="p-6 rounded-[20px] bg-brand-blue-deep h-full flex flex-col justify-between space-y-4">
              <div className="w-12 h-12 rounded-xl bg-blue-700 text-white flex items-center justify-center text-2xl">
                <FaFacebookF />
              </div>
              <div>
                <h3 className="font-subheading uppercase text-xl text-brand-white group-hover:text-brand-yellow transition-colors font-bold">Facebook</h3>
                <p className="text-xs text-brand-white/80 font-sans mt-1">Comunidad de comercio marplatense.</p>
              </div>
              <span className="text-xs font-mono text-brand-yellow font-bold flex items-center gap-1">Visitar <HiArrowRight /></span>
            </div>
          </a>
        </div>

        <CTA />
      </Container>
    </div>
  );
}