import React from 'react';
import type { Metadata } from 'next';
import Container from '@/components/Container';

export const metadata: Metadata = {
  title: 'Politica de Privacidad - Envios DosRuedas',
  description: 'Politica de privacidad y proteccion de datos personales de Envios DosRuedas.',
};

export default function PrivacidadPage() {
  return (
    <div className="bg-brand-blue text-brand-white min-h-screen pt-28 pb-16">
      <Container className="py-12 max-w-4xl text-left">
        <div className="rounded-[28px] p-2 bg-brand-white/10 border border-brand-white/20 shadow-2xl">
          <div className="rounded-[20px] bg-brand-white p-8 sm:p-12 text-brand-blue space-y-6">
            <h1 className="font-display uppercase text-3xl sm:text-4xl tracking-tight text-brand-blue">
              Politica de Privacidad
            </h1>
            <p className="text-xs text-brand-blue/70 font-mono">
              Ultima actualizacion: Septiembre 2026 - Mar del Plata, Argentina
            </p>

            <div className="space-y-4 font-sans text-sm text-brand-blue/85 leading-relaxed">
              <h2 className="font-subheading uppercase text-xl text-brand-blue font-bold pt-2">
                1. Recoleccion de Informacion
              </h2>
              <p>
                Recopilamos unicamente los datos necesarios (nombre, telefono y direcciones de entrega) para coordinar y ejecutar con exito los servicios de mensajeria solicitados.
              </p>

              <h2 className="font-subheading uppercase text-xl text-brand-blue font-bold pt-2">
                2. Uso y Proteccion de Datos
              </h2>
              <p>
                La informacion provista se utiliza exclusivamente para fines operativos y de contacto directo, sin ser compartida ni comercializada a terceros.
              </p>

              <h2 className="font-subheading uppercase text-xl text-brand-blue font-bold pt-2">
                3. Contacto
              </h2>
              <p>
                Para consultas sobre tus datos personales, podes comunicarte con nosotros a traves de WhatsApp o email.
              </p>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}