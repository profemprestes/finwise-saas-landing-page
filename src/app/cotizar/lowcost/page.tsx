" use client\;

import React, { useState } from 'react';
import Link from 'next/link';
import { HiTag, HiMapPin, HiClock, HiArrowRight, HiShieldCheck } from 'react-icons/hi2';
import { FaWhatsapp } from 'react-icons/fa';
import Container from '@/components/Container';
import CTA from '@/components/CTA';

const ZONAS = [
 { id: 'zona-1', name: 'Zona 1: Centro, Chauvín, Güemes, La Perla', price: 2800 },
 { id: 'zona-2', name: 'Zona 2: Playa Grande, Puerto, San José, Pompeya', price: 3400 },
 { id: 'zona-3', name: 'Zona 3: Constitución, Caisamar, Punta Mogotes', price: 4200 },
 { id: 'zona-4', name: 'Zona 4: Camet, Batán, Acantilados, Bosque Peralta Ramos', price: 5400 },
 { id: 'zona-5', name: 'Zona 5: Chapadmalal, Sierra de los Padres', price: 7200 },
];

export default function CotizarLowCostPage() {
 const [selectedZona, setSelectedZona] = useState(ZONAS[0].id);
 const [paquetes, setPaquetes] = useState(1);

 const currentZona = ZONAS.find((z) => z.id === selectedZona) || ZONAS[0];
 const totalEstimado = currentZona.price * paquetes;

 const whatsappLink = https://wa.me/542236602699?text=Hola,%20quiero%20cotizar%20un%20Env%C3%ADo%20LowCost:%0A- Zona:%20%0A- Cantidad de Paquetes:%20%0A- Tarifa Estimada:%20{totalEstimado.toLocaleString('es-AR')};

 return (
 <div className=\bg-brand-blue text-brand-white min-h-screen pt-28 pb-16\>
 {/* Hero */}
 <section className=\relative overflow-hidden pb-12 pt-8 border-b border-brand-white/15\>
 <div className=\absolute inset-0 flex items-center justify-center pointer-events-none select-none overflow-hidden z-0\>
 <span className=\font-display uppercase text-[15vw] leading-none text-brand-white/[0.03] tracking-tighter whitespace-nowrap\>
 COTIZADOR LOWCOST
 </span>
 </div>

 <Container className=\relative z-10\>
 <div className=\grid grid-cols-1 lg:grid-cols-12 gap-10 items-center\>
 <div className=\lg:col-span-7 space-y-6 text-left\>
 <span className=\inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-subheading uppercase tracking-widest bg-brand-yellow text-brand-blue font-bold shadow-glow-yellow border border-brand-yellow\>
 <HiTag className=\text-sm\ /> Tarifa Plana por Zonas
 </span>

 <h1 className=\text-4xl sm:text-5xl lg:text-6xl font-display uppercase tracking-tight leading-none text-brand-white\>
 COTIZADOR <span className=\text-brand-yellow\>LOWCOST PyMEs</span>
 </h1>

 <p className=\text-base sm:text-lg text-brand-white/90 font-sans font-light leading-relaxed max-w-xl\>
 Seleccioná la zona de entrega en Mar del Plata y la cantidad de bultos para calcular tu costo consolidado.
 </p>
 </div>

 {/* Tarjeta de Cálculo */}
 <div className=\lg:col-span-5 relative flex justify-center\>
 <div className=\rounded-[28px] p-2 bg-brand-white/10 border border-brand-white/20 shadow-2xl w-full max-w-md\>
 <div className=\rounded-[20px] bg-brand-white p-7 text-brand-blue space-y-5 text-left shadow-lg\>
 <div className=\border-b border-brand-blue/15 pb-3\>
 <h3 className=\font-subheading text-xl uppercase font-bold text-brand-blue\>
 Tarifario por Zonas MDQ
 </h3>
 <p className=\text-[10px] text-brand-blue/70 font-subheading tracking-wider uppercase\>
 Envíos Consolidados en el Día
 </p>
 </div>

 <div className=\space-y-4 font-sans text-xs\>
 <div className=\space-y-1\>
 <label className=\font-subheading uppercase text-xs font-bold text-brand-blue\>
 Zona de Entrega
 </label>
 <select
 value={selectedZona}
 onChange={(e) => setSelectedZona(e.target.value)}
 className=\w-full h-11 px-3 bg-white border-2 border-brand-blue/20 rounded-xl text-brand-blue font-sans text-xs focus:outline-none focus:border-brand-blue\
 >
 {ZONAS.map((zona) => (
 <option key={zona.id} value={zona.id}>
 {zona.name} ()
 </option>
 ))}
 </select>
 </div>

 <div className=\space-y-1\>
 <label className=\font-subheading uppercase text-xs font-bold text-brand-blue\>
 Cantidad de Paquetes
 </label>
 <input
 type=\number\
 min=\1\
 max=\50\
 value={paquetes}
 onChange={(e) => setPaquetes(Math.max(1, parseInt(e.target.value) || 1))}
 className=\w-full h-11 px-3.5 bg-white border-2 border-brand-blue/20 rounded-xl text-brand-blue font-sans text-xs focus:outline-none focus:border-brand-blue\
 />
 </div>
 </div>

 <div className=\space-y-2.5 pt-3 border-t border-brand-blue/15 text-xs\>
 <div className=\flex justify-between items-center text-sm\>
 <span className=\font-subheading font-bold text-brand-blue\>TOTAL ESTIMADO</span>
 <span className=\font-mono font-bold text-lg text-brand-blue\>
 ARS
 </span>
 </div>

 <a
 href={whatsappLink}
 target=\_blank\
 rel=\noopener noreferrer\
 className=\w-full mt-3 flex items-center justify-center gap-2 py-3.5 rounded-full bg-brand-yellow text-brand-blue font-subheading uppercase tracking-wider font-bold text-xs shadow-glow-yellow hover:bg-brand-yellow-hover transition-all\
 >
 <FaWhatsapp className=\text-base\ />
 <span>Coordinar Despacho</span>
 </a>
 </div>
 </div>
 </div>
 </div>
 </div>
 </Container>
 </section>

 <Container className=\py-12\>
 <CTA />
 </Container>
 </div>
 );
}
