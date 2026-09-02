import React from 'react';
import type { Metadata } from 'next';
import Container from '@/components/Container';

export const metadata: Metadata = {
  title: 'Términos y Condiciones · Envíos DosRuedas',
  description: 'Términos y condiciones de prestación de servicios de mensajería y logística urbana en Mar del Plata.',
};

export default function TerminosPage() {
  return (
    <div className=" bg-brand-blue text-brand-white min-h-screen pt-28 pb-16\>
 <Container className=\py-12 max-w-4xl text-left\>
 <div className=\rounded-[28px] p-2 bg-brand-white/10 border border-brand-white/20 shadow-2xl\>
 <div className=\rounded-[20px] bg-brand-white p-8 sm:p-12 text-brand-blue space-y-6\>
 <h1 className=\font-display uppercase text-3xl sm:text-4xl tracking-tight text-brand-blue\>
 Términos y Condiciones del Servicio
 </h1>
 <p className=\text-xs text-brand-blue/70 font-mono\>
 Última actualización: Septiembre 2026 · Mar del Plata, Argentina
 </p>

 <div className=\space-y-4 font-sans text-sm text-brand-blue/85 leading-relaxed\>
 <h2 className=\font-subheading uppercase text-xl text-brand-blue font-bold pt-2\>
 1. Objeto del Servicio
 </h2>
 <p>
 Envíos DosRuedas brinda servicios de mensajería, cadetería urbana en moto, distribución e-commerce (Mercado Envíos Flex) y logística 3PL en la ciudad de Mar del Plata y zonas aledañas.
 </p>

 <h2 className=\font-subheading uppercase text-xl text-brand-blue font-bold pt-2\>
 2. Tarifas y Pagos
 </h2>
 <p>
 Las tarifas del servicio Express se estiman por distancia o zonas operativas. Los cobros contra entrega y rendiciones se efectivizan de manera acordada con cada cliente o comercio.
 </p>

 <h2 className=\font-subheading uppercase text-xl text-brand-blue font-bold pt-2\>
 3. Custodia y Responsabilidad
 </h2>
 <p>
 Envíos DosRuedas garantiza la custodia y el cuidado de los paquetes desde su retiro hasta la entrega efectiva al destinatario, asumiendo la trazabilidad del envío.
 </p>
 </div>
 </div>
 </div>
 </Container>
 </div>
 );
}
