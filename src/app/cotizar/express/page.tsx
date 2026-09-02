'use client';

import React, { useState } from 'react';
import { HiCalculator, HiMapPin, HiBolt, HiShieldCheck, HiClock } from 'react-icons/hi2';
import { FaWhatsapp } from 'react-icons/fa';
import Container from '@/components/Container';
import CTA from '@/components/CTA';

export default function CotizarExpressPage() {
  const [origen, setOrigen] = useState('');
  const [destino, setDestino] = useState('');
  const [distanciaKm, setDistanciaKm] = useState<number>(4.2);
  const [isCalculated, setIsCalculated] = useState(true);

  const tarifaCalculada = Math.round(2500 + distanciaKm * 500);

  const handleCalcular = (e: React.FormEvent) => {
    e.preventDefault();
    if (!origen || !destino) return;
    const simulatedDist = Math.max(1.5, Math.min(18, Number((Math.random() * 8 + 2).toFixed(1))));
    setDistanciaKm(simulatedDist);
    setIsCalculated(true);
  };

  const whatsappLink = https://wa.me/542236602699?text= + encodeURIComponent(Hola, quiero pedir un Envio Express.\n- Origen: \n- Destino: \n- Tarifa Estimada: ARS );

  return (
    <div className="bg-brand-blue text-brand-white min-h-screen pt-28 pb-16">
      <section className="relative overflow-hidden pb-12 pt-8 border-b border-brand-white/15">
        <Container className="relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-7 space-y-6 text-left">
              <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-subheading uppercase tracking-widest bg-brand-yellow text-brand-blue font-bold border border-brand-yellow">
                <HiBolt className="text-sm" /> Tarifa Inmediata
              </span>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-display uppercase tracking-tight leading-none text-brand-white">
                COTIZA TU <span className="text-brand-yellow">ENVIO EXPRESS</span>
              </h1>
              <p className="text-base sm:text-lg text-brand-white/90 font-sans font-light leading-relaxed max-w-xl">
                Ingresa las direcciones de retiro y entrega en Mar del Plata para estimar costo y tiempo al instante.
              </p>
              <div className="grid grid-cols-3 gap-3 pt-2 max-w-lg text-xs font-sans">
                <div className="bg-brand-white/10 border border-brand-white/20 p-2.5 rounded-xl flex items-center gap-2">
                  <HiClock className="text-brand-yellow text-base shrink-0" />
                  <span>menos 90 min</span>
                </div>
                <div className="bg-brand-white/10 border border-brand-white/20 p-2.5 rounded-xl flex items-center gap-2">
                  <HiMapPin className="text-brand-yellow text-base shrink-0" />
                  <span>Ruta Directa</span>
                </div>
                <div className="bg-brand-white/10 border border-brand-white/20 p-2.5 rounded-xl flex items-center gap-2">
                  <HiShieldCheck className="text-brand-yellow text-base shrink-0" />
                  <span>Seguro</span>
                </div>
              </div>
            </div>
            <div className="lg:col-span-5 relative flex justify-center">
              <div className="rounded-[28px] p-2 bg-brand-white/10 border border-brand-white/20 shadow-2xl w-full max-w-md">
                <div className="rounded-[20px] bg-brand-white p-7 text-brand-blue space-y-5 text-left shadow-lg">
                  <div className="flex items-center justify-between border-b border-brand-blue/15 pb-3">
                    <div>
                      <h3 className="font-subheading text-xl uppercase font-bold text-brand-blue">Calculo Automatico</h3>
                      <p className="text-[10px] text-brand-blue/70 font-subheading tracking-wider uppercase">Sistema Express MDQ</p>
                    </div>
                    <HiCalculator className="text-3xl text-brand-blue" />
                  </div>
                  <form onSubmit={handleCalcular} className="space-y-4 font-sans text-xs">
                    <div className="space-y-1">
                      <label className="font-subheading uppercase text-xs font-bold text-brand-blue flex items-center gap-1">
                        <HiMapPin className="text-sm text-brand-blue" /> Origen (Retiro)
                      </label>
                      <input type="text" value={origen} onChange={(e) => setOrigen(e.target.value)} placeholder="Ej: Av. Colon 1234 MDQ" className="w-full h-11 px-3.5 bg-white border-2 border-brand-blue/20 rounded-xl text-brand-blue font-sans text-xs focus:outline-none focus:border-brand-blue" />
                    </div>
                    <div className="space-y-1">
                      <label className="font-subheading uppercase text-xs font-bold text-brand-blue flex items-center gap-1">
                        <HiMapPin className="text-sm text-brand-blue" /> Destino (Entrega)
                      </label>
                      <input type="text" value={destino} onChange={(e) => setDestino(e.target.value)} placeholder="Ej: Guemes 2840 MDQ" className="w-full h-11 px-3.5 bg-white border-2 border-brand-blue/20 rounded-xl text-brand-blue font-sans text-xs focus:outline-none focus:border-brand-blue" />
                    </div>
                    <button type="submit" className="w-full py-3 rounded-xl bg-brand-blue text-brand-yellow font-subheading uppercase tracking-wider font-bold text-xs hover:bg-brand-blue-deep transition-colors shadow-md">
                      Calcular Tarifa
                    </button>
                  </form>
                  {isCalculated && (
                    <div className="space-y-2.5 pt-3 border-t border-brand-blue/15 text-xs">
                      <div className="flex justify-between items-center">
                        <span className="font-subheading uppercase text-[10px] text-brand-blue/70 font-bold">DISTANCIA ESTIMADA</span>
                        <span className="font-mono font-bold text-brand-blue">{distanciaKm} km</span>
                      </div>
                      <div className="flex justify-between items-center text-sm pt-1 border-t border-brand-blue/10">
                        <span className="font-subheading font-bold text-brand-blue">TARIFA FINAL</span>
                        <span className="font-mono font-bold text-lg text-brand-blue">ARS {tarifaCalculada.toLocaleString('es-AR')}</span>
                      </div>
                      <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="w-full mt-3 flex items-center justify-center gap-2 py-3.5 rounded-full bg-brand-yellow text-brand-blue font-subheading uppercase tracking-wider font-bold text-xs shadow-glow-yellow hover:bg-brand-yellow-hover transition-all">
                        <FaWhatsapp className="text-base" />
                        <span>Confirmar Envio por WhatsApp</span>
                      </a>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>
      <Container className="py-12">
        <CTA />
      </Container>
    </div>
  );
}