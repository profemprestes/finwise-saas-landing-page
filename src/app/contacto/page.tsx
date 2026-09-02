'use client';

import React, { useState } from 'react';
import { HiEnvelope, HiPhone, HiMapPin, HiCheckCircle } from 'react-icons/hi2';
import { FaWhatsapp } from 'react-icons/fa';
import Container from '@/components/Container';
import { siteDetails } from '@/data/siteDetails';

export default function ContactoPage() {
  const [nombre, setNombre] = useState('');
  const [comercio, setComercio] = useState('');
  const [mensaje, setMensaje] = useState('');
  const [enviado, setEnviado] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const texto = 'Hola, mi nombre es ' + nombre + (comercio ? ' de ' + comercio : '') + '. Consulta: ' + mensaje;
    window.open('https://wa.me/542236602699?text=' + encodeURIComponent(texto), '_blank');
    setEnviado(true);
  };

  return (
    <div className="bg-brand-blue text-brand-white min-h-screen pt-28 pb-16">
      <Container className="py-12 max-w-6xl">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          <div className="lg:col-span-5 space-y-6 text-left">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-subheading uppercase tracking-widest bg-brand-yellow text-brand-blue font-bold border border-brand-yellow">
              <HiEnvelope className="text-sm" /> Contacto Base MDQ
            </span>
            <h1 className="text-4xl sm:text-5xl font-display uppercase tracking-tight leading-none text-brand-white">
              HABLANOS <span className="text-brand-yellow">DIRECTO</span>
            </h1>
            <p className="text-base text-brand-white/90 font-sans font-light leading-relaxed">
              Coordina retiros diarios para tu negocio o consulta tarifas de mensajeria express en Mar del Plata.
            </p>
            <div className="space-y-4 pt-4 font-sans text-sm">
              <a href={siteDetails.phoneCall} className="flex items-center gap-3 p-4 rounded-2xl bg-brand-white/10 border border-brand-white/20 hover:border-brand-yellow transition-colors">
                <HiPhone className="text-2xl text-brand-yellow" />
                <div>
                  <p className="text-xs text-brand-white/70 uppercase font-subheading">Telefono</p>
                  <p className="font-mono font-bold text-base">{siteDetails.phoneFormatted}</p>
                </div>
              </a>
              <a href={siteDetails.whatsappUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 p-4 rounded-2xl bg-brand-white/10 border border-brand-white/20 hover:border-brand-yellow transition-colors">
                <FaWhatsapp className="text-2xl text-brand-yellow" />
                <div>
                  <p className="text-xs text-brand-white/70 uppercase font-subheading">WhatsApp Directo</p>
                  <p className="font-mono font-bold text-base">{siteDetails.phoneFormatted}</p>
                </div>
              </a>
              <div className="flex items-center gap-3 p-4 rounded-2xl bg-brand-white/10 border border-brand-white/20">
                <HiMapPin className="text-2xl text-brand-yellow" />
                <div>
                  <p className="text-xs text-brand-white/70 uppercase font-subheading">Ubicacion</p>
                  <p className="font-medium text-sm">{siteDetails.address}</p>
                </div>
              </div>
            </div>
          </div>
          <div className="lg:col-span-7">
            <div className="rounded-[28px] p-2 bg-brand-white/10 border border-brand-white/20 shadow-2xl">
              <div className="rounded-[20px] bg-brand-white p-7 sm:p-10 text-brand-blue text-left space-y-5 shadow-xl">
                <h2 className="font-display uppercase text-2xl sm:text-3xl tracking-tight text-brand-blue">Envianos un Mensaje</h2>
                <p className="text-xs text-brand-blue/75 font-sans leading-relaxed">Completa el formulario para iniciar la conversacion por WhatsApp con nuestro equipo.</p>
                <form onSubmit={handleSubmit} className="space-y-4 font-sans text-xs">
                  <div className="space-y-1">
                    <label className="font-subheading uppercase text-xs font-bold text-brand-blue">Tu Nombre y Apellido</label>
                    <input type="text" required value={nombre} onChange={(e) => setNombre(e.target.value)} placeholder="Ej: Laura Martinez" className="w-full h-11 px-3.5 bg-white border-2 border-brand-blue/20 rounded-xl text-brand-blue font-sans text-xs focus:outline-none focus:border-brand-blue" />
                  </div>
                  <div className="space-y-1">
                    <label className="font-subheading uppercase text-xs font-bold text-brand-blue">Nombre de tu Comercio (Opcional)</label>
                    <input type="text" value={comercio} onChange={(e) => setComercio(e.target.value)} placeholder="Ej: Tienda MDQ Shoes" className="w-full h-11 px-3.5 bg-white border-2 border-brand-blue/20 rounded-xl text-brand-blue font-sans text-xs focus:outline-none focus:border-brand-blue" />
                  </div>
                  <div className="space-y-1">
                    <label className="font-subheading uppercase text-xs font-bold text-brand-blue">Mensaje o Consulta</label>
                    <textarea rows={4} required value={mensaje} onChange={(e) => setMensaje(e.target.value)} placeholder="Escribe tu consulta sobre envios express, MercadoLibre Flex o logistica para tu negocio..." className="w-full p-3.5 bg-white border-2 border-brand-blue/20 rounded-xl text-brand-blue font-sans text-xs focus:outline-none focus:border-brand-blue resize-none" />
                  </div>
                  <button type="submit" className="w-full py-4 rounded-full bg-brand-yellow text-brand-blue font-subheading uppercase tracking-wider font-bold text-xs shadow-glow-yellow hover:bg-brand-yellow-hover transition-all flex items-center justify-center gap-2">
                    <FaWhatsapp className="text-lg" />
                    <span>Enviar Mensaje a WhatsApp</span>
                  </button>
                  {enviado && (
                    <div className="p-3 rounded-xl bg-green-100 text-green-800 text-xs font-medium flex items-center gap-2">
                      <HiCheckCircle className="text-base text-green-600" />
                      <span>Mensaje preparado en WhatsApp. Te responderemos en breve!</span>
                    </div>
                  )}
                </form>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}