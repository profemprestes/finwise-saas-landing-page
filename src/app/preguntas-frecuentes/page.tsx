import React from 'react';
import type { Metadata } from 'next';
import FAQ from '@/components/FAQ';
import Container from '@/components/Container';
import CTA from '@/components/CTA';

export const metadata: Metadata = {
  title: 'Preguntas Frecuentes - Envios DosRuedas Mar del Plata',
  description: 'Respuestas a todas las dudas sobre cadeteria, envios express, Flex y logistica en Mar del Plata.',
};

export default function FAQPage() {
  return (
    <div className="bg-brand-blue text-brand-white min-h-screen pt-28 pb-16">
      <Container className="py-10">
        <FAQ />
        <CTA />
      </Container>
    </div>
  );
}