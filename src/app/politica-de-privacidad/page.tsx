import React from 'react';
import type { Metadata } from 'next';
import Container from '@/components/Container';

export const metadata: Metadata = {
 title: 'Política de Privacidad · Envíos DosRuedas',
 description: 'Política de privacidad y protección de datos personales de Envíos DosRuedas.',
};

export default function PrivacidadPage() {
 return (
 <div className=\bg-brand-blue text-brand-white min-h-screen pt-28 pb-16\>
 <Container className=\py-12 max-w-4xl text-left\>
 <div className=\rounded-[28px] p-2 bg-brand-white/10 border border-brand-white/20 shadow-2xl\>
 <div className=\rounded-[20px] bg-brand-white p-8 sm:p-12 text-brand-blue space-y-6\>
 <h1 className=\font-display uppercase text-3xl sm:text-4xl tracking-tight text-brand-blue\>
 Política de Privacidad
 </h1>
 <p className=\text-xs text-brand-blue/70 font-mono\>
 Última actualización: Septiembre 2026 · Mar del Plata, Argentina
 </p>

 <div className=\space-y-4 font-sans text-sm text-brand-blue/85 leading-relaxed\>
 <h2 className=\font-subheading uppercase text-xl text-brand-blue font-bold pt-2\>
 1. Recolección de Información
 </h2>
 <p>
 Recopilamos únicamente los datos necesarios (nombre, teléfono y direcciones de entrega) para coordinar y ejecutar con éxito los servicios de mensajería solicitados.
 </p>

 <h2 className=\font-subheading uppercase text-xl text-brand-blue font-bold pt-2\>
 2. Uso y Protección de Datos
 </h2>
 <p>
 La información provista se utiliza exclusivamente para fines operativos y de contacto directo, sin ser compartida ni comercializada a terceros.
 </p>
 </div>
 </div>
 </div>
 </Container>
 </div>
 );
}
