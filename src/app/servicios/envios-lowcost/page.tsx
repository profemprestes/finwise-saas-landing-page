import React from 'react';
import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { HiTag, HiClock, HiMapPin, HiArrowRight, HiShieldCheck } from 'react-icons/hi2';
import { FaWhatsapp } from 'react-icons/fa';
import Container from '@/components/Container';
import CTA from '@/components/CTA';

export const metadata: Metadata = {
  title: 'Envíos LowCost en el Día para PyMEs · Envíos DosRuedas MDQ',
  description: 'Tarifas económicas planas por zonas en Mar del Plata. Ideal para comercios y emprendimientos con volumen de ventas diario.',
};

export default function EnviosLowCostPage() {
  return (
    <div className=" bg-brand-blue text-brand-white min-h-screen pt-28 pb-16\>
 {/* Hero */}
 <section className=\relative overflow-hidden pb-16 pt-8 border-b border-brand-white/15\>
 <div className=\absolute inset-0 flex items-center justify-center pointer-events-none select-none overflow-hidden z-0\>
 <span className=\font-display uppercase text-[15vw] leading-none text-brand-white/[0.03] tracking-tighter whitespace-nowrap\>
 LOWCOST MDQ
 </span>
 </div>

 <Container className=\relative z-10\>
 <div className=\grid grid-cols-1 lg:grid-cols-12 gap-10 items-center\>
 <div className=\lg:col-span-7 space-y-6 text-left\>
 <span className=\inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-subheading uppercase tracking-widest bg-brand-yellow text-brand-blue font-bold shadow-glow-yellow border border-brand-yellow\>
 <HiTag className=\text-sm\ /> Economía y Eficiencia
 </span>

 <h1 className=\text-4xl sm:text-5xl lg:text-6xl font-display uppercase tracking-tight leading-none text-brand-white\>
 ENVÍOS LOWCOST <br />
 <span className=\text-brand-yellow\>EN EL DÍA PARA PyMEs</span>
 </h1>

 <p className=\text-base sm:text-lg text-brand-white/90 font-sans font-light leading-relaxed max-w-xl\>
 La tarifa más accesible de Mar del Plata con retiro programado en tu comercio y entrega en franjas horarias optimizadas durante el día.
 </p>

 <div className=\flex flex-wrap gap-4 pt-2\>
 <Link
 href=\/cotizar/lowcost\
 className=\inline-flex items-center gap-2.5 rounded-full font-subheading uppercase tracking-wider font-bold px-8 py-3.5 bg-brand-yellow text-brand-blue hover:bg-brand-yellow-hover hover:shadow-glow-yellow transition-all duration-300 text-sm\
 >
 <span>Ver Zonas y Tarifas</span>
 <HiArrowRight className=\text-sm\ />
 </Link>

 <a
 href=\https://wa.me/542236602699?text=Hola,%20quisiera%20informaci%C3%B3n%20sobre%20Envíos%20LowCost\
 target=\_blank\
 rel=\noopener noreferrer\
 className=\inline-flex items-center gap-2 rounded-full font-subheading uppercase tracking-wider font-bold px-8 py-3.5 bg-brand-white/10 hover:bg-brand-white/20 text-brand-white border border-brand-white/30 transition-all text-sm\
 >
 <FaWhatsapp className=\text-lg text-brand-yellow\ />
 <span>Consultar Plan PyMEs</span>
 </a>
 </div>
 </div>

 <div className=\lg:col-span-5 relative flex justify-center\>
 <div className=\rounded-[28px] p-2 bg-brand-white/10 border border-brand-white/20 shadow-2xl w-full max-w-md\>
 <div className=\rounded-[20px] bg-brand-blue-deep/90 p-6 text-brand-white space-y-4\>
 <div className=\relative h-48 w-full rounded-2xl overflow-hidden border border-brand-white/10\>
 <Image
 src=\/Emprendedoresbannerrapidas2.webp\
 alt=\Envíos LowCost para Comercios\
 fill
 className=\object-cover\
 />
 </div>
 <div className=\flex items-center justify-between text-xs font-mono\>
 <span>MODALIDAD</span>
 <span className=\text-brand-yellow font-bold\>SAME-DAY CONSOLIDADO</span>
 </div>
 </div>
 </div>
 </div>
 </div>
 </Container>
 </section>

 {/* Zonas y Beneficios */}
 <Container className=\py-16 sm:py-24 space-y-12\>
 <div className=\grid grid-cols-1 md:grid-cols-3 gap-6 text-left\>
 <div className=\rounded-[28px] p-2 bg-brand-white/10 border border-brand-white/20 shadow-xl\>
 <div className=\p-6 rounded-[20px] bg-brand-blue-deep h-full space-y-3\>
 <div className=\w-12 h-12 rounded-xl bg-brand-yellow text-brand-blue flex items-center justify-center text-2xl font-bold shadow-glow-yellow\>
 <HiTag />
 </div>
 <h3 className=\font-subheading uppercase text-xl text-brand-white font-bold\>
 Tarifas Planas por Zona
 </h3>
 <p className=\text-sm text-brand-white/80 font-sans font-light leading-relaxed\>
 Valores fijos por anillo o barrio para que siempre sepas con precisión cuánto pagarás por cada despacho.
 </p>
 </div>
 </div>

 <div className=\rounded-[28px] p-2 bg-brand-white/10 border border-brand-white/20 shadow-xl\>
 <div className=\p-6 rounded-[20px] bg-brand-blue-deep h-full space-y-3\>
 <div className=\w-12 h-12 rounded-xl bg-brand-yellow text-brand-blue flex items-center justify-center text-2xl font-bold shadow-glow-yellow\>
 <HiClock />
 </div>
 <h3 className=\font-subheading uppercase text-xl text-brand-white font-bold\>
 Retiro Consolidado
 </h3>
 <p className=\text-sm text-brand-white/80 font-sans font-light leading-relaxed\>
 Buscamos todos los paquetes en una sola visita a tu tienda para ahorrarte tiempo y logística interna.
 </p>
 </div>
 </div>

 <div className=\rounded-[28px] p-2 bg-brand-white/10 border border-brand-white/20 shadow-xl\>
 <div className=\p-6 rounded-[20px] bg-brand-blue-deep h-full space-y-3\>
 <div className=\w-12 h-12 rounded-xl bg-brand-yellow text-brand-blue flex items-center justify-center text-2xl font-bold shadow-glow-yellow\>
 <HiShieldCheck />
 </div>
 <h3 className=\font-subheading uppercase text-xl text-brand-white font-bold\>
 Reporte y Liquidación
 </h3>
 <p className=\text-sm text-brand-white/80 font-sans font-light leading-relaxed\>
 Avisos automáticos de entregas completadas y rendición clara de dinero recaudado al final del día.
 </p>
 </div>
 </div>
 </div>

 <CTA />
 </Container>
 </div>
 );
}
