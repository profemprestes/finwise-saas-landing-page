import React from 'react';
import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { HiBuildingStorefront, HiCube, HiShieldCheck, HiArrowRight } from 'react-icons/hi2';
import { FaWhatsapp } from 'react-icons/fa';
import Container from '@/components/Container';
import CTA from '@/components/CTA';

export const metadata: Metadata = {
  title: 'Plan Emprendedores & Logística 3PL · Envíos DosRuedas Mar del Plata',
  description: 'Guarda de mercadería, picking, packing y despacho automatizado para marcas, tiendas online y emprendedores en Mar del Plata.',
};

export default function PlanEmprendedoresPage() {
  return (
    <div className=" bg-brand-blue text-brand-white min-h-screen pt-28 pb-16\>
 {/* Hero */}
 <section className=\relative overflow-hidden pb-16 pt-8 border-b border-brand-white/15\>
 <div className=\absolute inset-0 flex items-center justify-center pointer-events-none select-none overflow-hidden z-0\>
 <span className=\font-display uppercase text-[15vw] leading-none text-brand-white/[0.03] tracking-tighter whitespace-nowrap\>
 3PL & DEPÓSITO
 </span>
 </div>

 <Container className=\relative z-10\>
 <div className=\grid grid-cols-1 lg:grid-cols-12 gap-10 items-center\>
 <div className=\lg:col-span-7 space-y-6 text-left\>
 <span className=\inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-subheading uppercase tracking-widest bg-brand-yellow text-brand-blue font-bold shadow-glow-yellow border border-brand-yellow\>
 <HiBuildingStorefront className=\text-sm\ /> Fullfilment & 3PL
 </span>

 <h1 className=\text-4xl sm:text-5xl lg:text-6xl font-display uppercase tracking-tight leading-none text-brand-white\>
 PLAN EMPRENDEDORES <br />
 <span className=\text-brand-yellow\>LOGÍSTICA 3PL Y DEPÓSITO</span>
 </h1>

 <p className=\text-base sm:text-lg text-brand-white/90 font-sans font-light leading-relaxed max-w-xl\>
 Despreocupate de armar paquetes y guardar cajas en tu casa. Nosotros almacenamos tu stock, preparamos tus pedidos con prolijidad y los despachamos a diario.
 </p>

 <div className=\flex flex-wrap gap-4 pt-2\>
 <a
 href=\https://wa.me/542236602699?text=Hola,%20quiero%20conocer%20el%20Plan%20Emprendedores%20y%203PL\
 target=\_blank\
 rel=\noopener noreferrer\
 className=\inline-flex items-center gap-2.5 rounded-full font-subheading uppercase tracking-wider font-bold px-8 py-3.5 bg-brand-yellow text-brand-blue hover:bg-brand-yellow-hover hover:shadow-glow-yellow transition-all duration-300 text-sm\
 >
 <FaWhatsapp className=\text-lg\ />
 <span>Consultar Almacenamiento</span>
 <HiArrowRight className=\text-sm\ />
 </a>
 </div>
 </div>

 <div className=\lg:col-span-5 relative flex justify-center\>
 <div className=\rounded-[28px] p-2 bg-brand-white/10 border border-brand-white/20 shadow-2xl w-full max-w-md\>
 <div className=\rounded-[20px] bg-brand-blue-deep/90 p-6 text-brand-white space-y-4\>
 <div className=\relative h-48 w-full rounded-2xl overflow-hidden border border-brand-white/10\>
 <Image
 src=\/Emprendedoresbanner.webp\
 alt=\Plan Emprendedores y Logística 3PL\
 fill
 className=\object-cover\
 />
 </div>
 <div className=\flex items-center justify-between text-xs font-mono\>
 <span>SERVICIO</span>
 <span className=\text-brand-yellow font-bold\>PICKING, PACKING & GUARDS</span>
 </div>
 </div>
 </div>
 </div>
 </div>
 </Container>
 </section>

 {/* Pilares 3PL */}
 <Container className=\py-16 sm:py-24 space-y-12\>
 <div className=\grid grid-cols-1 md:grid-cols-3 gap-6 text-left\>
 <div className=\rounded-[28px] p-2 bg-brand-white/10 border border-brand-white/20 shadow-xl\>
 <div className=\p-6 rounded-[20px] bg-brand-blue-deep h-full space-y-3\>
 <div className=\w-12 h-12 rounded-xl bg-brand-yellow text-brand-blue flex items-center justify-center text-2xl font-bold shadow-glow-yellow\>
 <HiBuildingStorefront />
 </div>
 <h3 className=\font-subheading uppercase text-xl text-brand-white font-bold\>
 1. Guarda de Stock
 </h3>
 <p className=\text-sm text-brand-white/80 font-sans font-light leading-relaxed\>
 Almacenamos tu inventario en instalaciones seguras con control de stock digitalizado.
 </p>
 </div>
 </div>

 <div className=\rounded-[28px] p-2 bg-brand-white/10 border border-brand-white/20 shadow-xl\>
 <div className=\p-6 rounded-[20px] bg-brand-blue-deep h-full space-y-3\>
 <div className=\w-12 h-12 rounded-xl bg-brand-yellow text-brand-blue flex items-center justify-center text-2xl font-bold shadow-glow-yellow\>
 <HiCube />
 </div>
 <h3 className=\font-subheading uppercase text-xl text-brand-white font-bold\>
 2. Picking & Packing
 </h3>
 <p className=\text-sm text-brand-white/80 font-sans font-light leading-relaxed\>
 Cuando concretás una venta, armamos el paquete con papel burbuja, caja y cinta con máxima prolijidad.
 </p>
 </div>
 </div>

 <div className=\rounded-[28px] p-2 bg-brand-white/10 border border-brand-white/20 shadow-xl\>
 <div className=\p-6 rounded-[20px] bg-brand-blue-deep h-full space-y-3\>
 <div className=\w-12 h-12 rounded-xl bg-brand-yellow text-brand-blue flex items-center justify-center text-2xl font-bold shadow-glow-yellow\>
 <HiShieldCheck />
 </div>
 <h3 className=\font-subheading uppercase text-xl text-brand-white font-bold\>
 3. Despacho Diario
 </h3>
 <p className=\text-sm text-brand-white/80 font-sans font-light leading-relaxed\>
 Salida automática con la flota del día para entrega al cliente o despacho por correo/encomienda.
 </p>
 </div>
 </div>
 </div>

 <CTA />
 </Container>
 </div>
 );
}
