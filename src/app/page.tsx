'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { 
  HiClock, 
  HiShieldCheck, 
  HiCube, 
  HiUsers, 
  HiBolt, 
  HiTag, 
  HiBuildingStorefront, 
  HiArrowRight, 
  HiXMark, 
  HiCheckCircle, 
  HiChevronLeft, 
  HiChevronRight,
  HiShoppingBag,
  HiWrench,
  HiDocumentText,
  HiSparkles
} from 'react-icons/hi2';
import { FaFacebookF, FaInstagram, FaWhatsapp, FaTshirt, FaFirstAid, FaWarehouse, FaCheckCircle } from 'react-icons/fa';
import { RiMotorbikeFill, RiBuilding4Fill } from 'react-icons/ri';

import Hero from '@/components/Hero';
import { siteDetails } from '@/data/siteDetails';

// --- DATA: SERVICES & MODAL ---
interface ServiceDetail {
  id: string;
  title: string;
  badge: string;
  summary: string;
  features: string[];
  time: string;
  price: string;
  weight: string;
  route: string;
  iconType: 'lightning' | 'tag' | 'package' | 'warehouse';
}

const SERVICES_DATA: Record<string, ServiceDetail> = {
  express: {
    id: 'express',
    title: 'Envíos Express Inmediatos',
    badge: 'URGENTE · COBERTURA TOTAL MDQ',
    summary: 'Servicio de mensajería urbana punto a punto en moto. Asignación inmediata de un repartidor exclusivo para documentos, trámites bancarios y encomiendas que no pueden esperar.',
    features: [
      'Tarifa base transparente calculada por distancia.',
      'Entrega garantizada puerta a puerta en tiempo récord (30-90 min).',
      'Notificación automática y rendición por WhatsApp.'
    ],
    time: '30-90 min',
    price: '$3.700 Base',
    weight: 'Hasta 10 kg',
    route: '/servicios/envios-express',
    iconType: 'lightning'
  },
  lowcost: {
    id: 'lowcost',
    title: 'Envíos LowCost para PyMEs',
    badge: 'ECONÓMICO · TODO GRAL. PUEYRREDÓN',
    summary: 'La alternativa más rentable para comercios y e-commerce locales. Agrupamos los despachos en franjas horarias diarias fijas para reducir costos sin perder velocidad.',
    features: [
      'Tarifa plana reducida para envíos diarios.',
      'Retiro a domicilio en tu local o taller comercial.',
      'Dos franjas de entrega coordinadas durante el día.'
    ],
    time: 'En el día',
    price: '$3.000 Base',
    weight: 'Hasta 15 kg',
    route: '/servicios/envios-lowcost',
    iconType: 'tag'
  },
  flex: {
    id: 'flex',
    title: 'Mercado Envíos Flex Oficial',
    badge: 'OFICIAL MELI · CORTE 15HS',
    summary: 'Socio logístico habilitado para Mercado Libre Flex en Mar del Plata y Batán. Cumplimiento estricto del SLA para mantener tu medalla de MercadoLíder.',
    features: [
      'Retiros bonificados según volumen diario.',
      'Entregas en el día antes de las 20:00 hs.',
      'Escaneo de etiquetas y sincronización de entregas.'
    ],
    time: 'Mismo día',
    price: 'Tarifa Flex',
    weight: 'Apto Moto/Auto',
    route: '/servicios/enviosflex',
    iconType: 'package'
  },
  '3pl': {
    id: '3pl',
    title: 'Logística 3PL & Centro de Distribución',
    badge: 'LOGÍSTICA INTEGRAL · FRIULI 1972',
    summary: 'Guardamos tu stock en nuestro centro logístico de Chauvín, preparamos tus paquetes (picking & packing) apenas se realiza la venta y despachamos de inmediato.',
    features: [
      'Control de inventario diario con trazabilidad digital.',
      'Embalaje y preparación profesional con insumos de alta seguridad.',
      'Despacho Same-Day para ventas por tienda online y redes.'
    ],
    time: 'Stock 24 hs',
    price: 'Planes a Medida',
    weight: 'Sin límite',
    route: '/servicios/plan-emprendedores',
    iconType: 'warehouse'
  }
};

// --- DATA: INDUSTRIES SLIDER ---
const INDUSTRIES_DATA = [
  {
    title: 'E-Commerce & Tiendas Online',
    tab: 'E-Commerce',
    badge: 'MÁXIMA VELOCIDAD',
    subtitle: 'Envíos Flex Same-Day & Next-Day',
    desc: 'Retiramos tus ventas online y las entregamos en la misma jornada en todo Mar del Plata. Integración directa para Mercado Libre Flex y tiendas independientes con reputación garantizada.',
    sla: 'SLA: Entregas en el día',
    benefits: ['Rendición en el acto', 'Seguimiento WhatsApp', 'Cero suspensiones Flex'],
    cta: 'Consultar Plan E-Commerce',
    icon: HiShoppingBag
  },
  {
    title: 'Repuestos & Talleres Mecánicos',
    tab: 'Repuestos',
    badge: 'ENTREGA CRÍTICA',
    subtitle: 'Cadetería Urgente para el Sector Automotor',
    desc: 'Despacho prioritario de autopartes, repuestos y herramientas hacia talleres, concesionarios y lubricentros de la ciudad sin demoras que frenen tus reparaciones.',
    sla: 'SLA: Prioridad Express',
    benefits: ['Hasta 10 kg por moto', 'Entregas puerta a puerta', 'Cobro contrareembolso'],
    cta: 'Cotizar Envío Urgente',
    icon: HiWrench
  },
  {
    title: 'Moda, Calzado & Indumentaria',
    tab: 'Moda',
    badge: 'LOGÍSTICA INVERSA',
    subtitle: 'Showrooms, Locales & E-Shops',
    desc: 'Distribución ágil con servicio de logística inversa para cambios de talle y devoluciones sin fricción para tus clientas. Cuidado riguroso del empaque.',
    sla: 'SLA: LowCost o Express',
    benefits: ['Gestión de cambios en puerta', 'Tarifas agrupadas LowCost', 'Bolsas y cajas protegidas'],
    cta: 'Ver Tarifas Indumentaria',
    icon: FaTshirt
  },
  {
    title: 'Trámites & Gestiones Corporativas',
    tab: 'Trámites',
    badge: 'MÁXIMA SEGURIDAD',
    subtitle: 'Cadetería Administrativa y Cobranzas',
    desc: 'Gestión segura de contratos, facturas, firmas de documentos y depósitos bancarios o cobros en efectivo con rendición inmediata y comprobante digital.',
    sla: 'SLA: Custodia Certificada',
    benefits: ['Firma en conformidad', 'Depósitos bancarios', 'Mensajeros de confianza'],
    cta: 'Solicitar Cadetería',
    icon: HiDocumentText
  },
  {
    title: 'Insumos Médicos & Gastronómicos',
    tab: 'Insumos',
    badge: 'PUNTUALIDAD RIGUROSA',
    subtitle: 'Envíos Programados para Comercios',
    desc: 'Abastecimiento de insumos descartables, ópticas, laboratorios, cafeterías y locales gastronómicos que requieren cumplimiento horario riguroso.',
    sla: 'SLA: Horarios Programados',
    benefits: ['Franjas pactadas de entrega', 'Depósito central Friuli 1972', 'Atención personalizada'],
    cta: 'Conocer Plan Comercios',
    icon: FaFirstAid
  },
  {
    title: 'Encomiendas & Distribución 3PL',
    tab: 'Depósito 3PL',
    badge: 'LOGÍSTICA INTEGRAL',
    subtitle: 'Almacenamiento, Picking y Despacho',
    desc: 'Guardamos tu stock en nuestro centro logístico de Chauvín, preparamos tus pedidos apenas entra la venta y despachamos sin que tengas que ocuparte del empaque.',
    sla: 'SLA: Fulfillment Total',
    benefits: ['Depósito seguro en MDQ', 'Picking & Packing pro', 'Control de stock diario'],
    cta: 'Ver Servicio 3PL',
    icon: FaWarehouse
  }
];

// --- DATA: MARQUEE LOGOS ---
const MARCAS_LOCALES = [
  'TOY PIOLA JUGUETERÍA',
  'AMA & POLA',
  'DROPIX 3D',
  'EL CÓNDOR',
  'STARCEL',
  'URBANCOW',
  'CATALINA INDUMENTARIA',
  'ENVASES 3G'
];

export default function HomePage() {
  const [selectedService, setSelectedService] = useState<ServiceDetail | null>(null);
  const [industryIdx, setIndustryIdx] = useState(0);

  const activeIndustry = INDUSTRIES_DATA[industryIdx];
  const ActiveIndustryIcon = activeIndustry.icon;

  const nextIndustry = () => {
    setIndustryIdx((prev) => (prev + 1) % INDUSTRIES_DATA.length);
  };

  const prevIndustry = () => {
    setIndustryIdx((prev) => (prev - 1 + INDUSTRIES_DATA.length) % INDUSTRIES_DATA.length);
  };

  return (
    <div className="relative w-full overflow-hidden bg-brand-blue text-brand-white selection:bg-brand-yellow selection:text-brand-blue font-sans">
      {/* ==================== HERO PRINCIPAL ==================== */}
      <Hero />

      {/* ==================== SECCIÓN 1: VISIÓN Y MÉTRICAS ==================== */}
      <section
        id="vision-mar-del-plata"
        className="py-20 sm:py-28 bg-brand-canvas text-brand-blue relative overflow-hidden w-full border-t border-brand-blue/10"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center text-left">
            {/* Columna Izquierda: Visión y Pilares Operativos */}
            <div className="lg:col-span-6 space-y-8">
              <div>
                <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-subheading font-bold uppercase tracking-widest bg-brand-blue text-brand-yellow shadow-md border border-brand-blue">
                  <HiSparkles className="text-sm text-brand-yellow" /> PARTNER LOGÍSTICO ESPECIALIZADO
                </span>
              </div>

              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-display uppercase tracking-tight leading-[0.95] flex flex-col items-start gap-1 text-brand-blue">
                <span>Conectamos Mar del Plata</span>
                <span className="relative inline-block bg-brand-blue px-3 py-1 my-1 transform -rotate-1 rounded-xl border border-brand-yellow/60 shadow-xl">
                  <span className="relative z-10 bg-brand-yellow text-brand-blue px-3.5 py-0.5 inline-block font-display font-black rounded-lg">
                    DE PUNTA A PUNTA
                  </span>
                </span>
              </h2>

              <p className="text-brand-blue/85 text-base sm:text-lg leading-relaxed font-sans font-medium">
                Nos especializamos en la distribución de última milla para e-commerce locales y comercios de la ciudad.
                Aseguramos que tus paquetes lleguen a tiempo con flota propia y tarifas 100% transparentes.
              </p>

              <div className="space-y-4 pt-2">
                {/* Feature 1: Puntualidad */}
                <div className="flex gap-4 items-start p-4 rounded-2xl bg-white border border-brand-blue/20 hover:border-brand-blue shadow-sm transition-all group hover:shadow-md">
                  <div className="p-3 bg-brand-blue text-brand-yellow rounded-xl shrink-0 shadow-md group-hover:scale-105 transition-transform text-2xl">
                    <HiClock />
                  </div>
                  <div>
                    <h3 className="text-xl sm:text-2xl font-subheading uppercase tracking-wider text-brand-blue leading-none mb-1.5 font-bold group-hover:text-brand-blue-deep transition-colors">
                      Entregas a Tiempo Garantizadas
                    </h3>
                    <p className="text-xs sm:text-sm text-brand-blue/75 font-sans leading-relaxed">
                      Optimizamos cada recorrido mediante ruteo dinámico urbano en todo el Partido de General Pueyrredón.
                    </p>
                  </div>
                </div>

                {/* Feature 2: Seguridad */}
                <div className="flex gap-4 items-start p-4 rounded-2xl bg-white border border-brand-blue/20 hover:border-brand-blue shadow-sm transition-all group hover:shadow-md">
                  <div className="p-3 bg-brand-blue text-brand-yellow rounded-xl shrink-0 shadow-md group-hover:scale-105 transition-transform text-2xl">
                    <HiShieldCheck />
                  </div>
                  <div>
                    <h3 className="text-xl sm:text-2xl font-subheading uppercase tracking-wider text-brand-blue leading-none mb-1.5 font-bold group-hover:text-brand-blue-deep transition-colors">
                      Custodia y Protección Total
                    </h3>
                    <p className="text-xs sm:text-sm text-brand-blue/75 font-sans leading-relaxed">
                      Cero paquetes extraviados. Trazabilidad punto a punto con aviso de entrega y rendición inmediata de dinero.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Columna Derecha: Bento Grid Asimétrico de Métricas */}
            <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-6">
              {/* Bento Card Principal: +50k Envíos (Full Width) */}
              <div className="sm:col-span-2 p-8 rounded-[30px] bg-brand-blue text-brand-white border border-brand-white/20 shadow-2xl hover:-translate-y-1 transition-transform duration-300 relative overflow-hidden group">
                <RiMotorbikeFill className="absolute -right-6 -bottom-6 text-[13rem] text-brand-white/[0.05] pointer-events-none group-hover:scale-105 transition-transform duration-500" />

                <div className="relative z-10 flex flex-col justify-between h-full space-y-6">
                  <div className="flex justify-between items-start">
                    <div className="p-3 bg-brand-yellow text-brand-blue rounded-2xl shadow-glow-yellow text-2xl">
                      <HiCube />
                    </div>
                    <span className="text-[10px] font-mono tracking-widest uppercase px-3 py-1.5 rounded-lg bg-brand-blue-deep border border-brand-white/20 text-brand-yellow font-bold">
                      TRAYECTORIA MDQ
                    </span>
                  </div>

                  <div>
                    <h3 className="text-6xl sm:text-7xl lg:text-8xl font-mono tracking-tighter font-extrabold uppercase leading-none text-brand-white tabular-nums mb-2">
                      +50K
                    </h3>
                    <p className="text-sm font-sans uppercase tracking-wider text-brand-yellow font-bold">
                      Envíos y entregas realizadas con éxito
                    </p>
                    <p className="text-xs text-brand-white/80 font-sans font-light mt-1">
                      Respaldando el crecimiento de comercios y emprendimientos marplatenses.
                    </p>
                  </div>
                </div>
              </div>

              {/* Bento Card 2: 0 Paquetes Extraviados */}
              <div className="p-6 rounded-[26px] bg-white border border-brand-blue/20 shadow-md hover:-translate-y-1 hover:border-brand-blue transition-transform duration-300 flex flex-col justify-between min-h-[190px]">
                <div className="flex justify-between items-start">
                  <div className="p-2.5 rounded-xl bg-brand-blue text-brand-yellow shadow-sm text-xl">
                    <HiShieldCheck />
                  </div>
                  <span className="text-[9px] font-mono text-brand-blue/70 uppercase tracking-widest font-bold">SEGURIDAD</span>
                </div>
                <div className="pt-4">
                  <h4 className="text-5xl font-mono font-bold tracking-tighter text-brand-blue leading-none mb-1 tabular-nums">
                    0
                  </h4>
                  <p className="text-xs text-brand-blue uppercase tracking-wider font-subheading font-bold">
                    Paquetes extraviados
                  </p>
                  <p className="text-[11px] text-brand-blue/70 font-sans mt-0.5 font-medium">
                    Compromiso y custodia real
                  </p>
                </div>
              </div>

              {/* Bento Card 3: +100 Comercios */}
              <div className="p-6 rounded-[26px] bg-white border border-brand-blue/20 shadow-md hover:-translate-y-1 hover:border-brand-blue transition-transform duration-300 flex flex-col justify-between min-h-[190px]">
                <div className="flex justify-between items-start">
                  <div className="p-2.5 rounded-xl bg-brand-yellow text-brand-blue shadow-sm text-xl">
                    <HiUsers />
                  </div>
                  <span className="text-[9px] font-mono text-brand-blue/70 uppercase tracking-widest font-bold">COMUNIDAD</span>
                </div>
                <div className="pt-4">
                  <h4 className="text-5xl font-mono font-bold tracking-tighter text-brand-blue leading-none mb-1 tabular-nums">
                    +100
                  </h4>
                  <p className="text-xs text-brand-blue uppercase tracking-wider font-subheading font-bold">
                    Marcas que confían
                  </p>
                  <p className="text-[11px] text-brand-blue/70 font-sans mt-0.5 font-medium">
                    Cuentas activas en MDQ
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ==================== SECCIÓN 2: RESUMEN DE SERVICIOS ==================== */}
      <section
        id="servicios-overview"
        className="py-20 sm:py-28 bg-brand-blue relative overflow-hidden w-full border-t border-brand-white/15"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-6 border-b border-brand-white/20 pb-8 text-left">
            <div className="space-y-3">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-subheading font-bold uppercase tracking-widest bg-brand-yellow text-brand-blue shadow-glow-yellow border border-brand-yellow">
                <HiBolt className="text-sm" /> NUESTROS SERVICIOS CLAVE
              </div>
              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-display uppercase tracking-tight leading-none text-brand-white">
                SOLUCIONES LOGÍSTICAS <br />
                <span className="text-brand-yellow underline decoration-brand-white/40 underline-offset-8">A TU MEDIDA</span>
              </h2>
            </div>
          </div>

          {/* Grid de 4 Tarjetas de Servicios en la maqueta del prototipo */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 w-full text-left">
            {/* SERVICIO 1: EXPRESS */}
            <article className="group relative rounded-[28px] p-6 bg-brand-blue-deep/90 border border-brand-white/20 shadow-2xl overflow-hidden flex flex-col justify-between min-h-[460px] transition-all duration-300 hover:-translate-y-1.5 hover:border-brand-yellow/60">
              <HiBolt className="absolute -right-6 -bottom-6 text-[13rem] text-brand-white/[0.04] pointer-events-none group-hover:scale-105 transition-transform duration-500" />
              <div className="relative z-10 space-y-4">
                <div className="flex items-center justify-between">
                  <div className="p-3 bg-brand-yellow text-brand-blue rounded-xl shadow-md text-2xl">
                    <HiBolt />
                  </div>
                  <span className="text-[10px] font-bold font-mono tracking-widest px-3 py-1 rounded-full uppercase bg-brand-yellow text-brand-blue border border-brand-yellow">
                    URGENTE
                  </span>
                </div>
                <div className="pt-2">
                  <span className="text-[11px] font-mono font-bold text-brand-yellow uppercase tracking-wider block">
                    COBERTURA TOTAL MDQ
                  </span>
                  <h3 className="font-display text-3xl sm:text-4xl uppercase tracking-tight leading-none text-brand-white group-hover:text-brand-yellow transition-colors mt-1">
                    ENVÍOS EXPRESS
                  </h3>
                </div>
                <p className="font-sans text-xs sm:text-sm leading-relaxed text-brand-white/85 font-light">
                  Mensajería urbana inmediata con repartidor exclusivo asignado para trámites, encomiendas y despacho prioritario.
                </p>
              </div>

              <div className="relative z-10 pt-4 space-y-4">
                <div className="grid grid-cols-3 gap-1.5 p-2 bg-brand-white/10 rounded-2xl border border-brand-white/15 text-center">
                  <div className="p-1">
                    <div className="font-subheading text-xs font-bold text-brand-yellow uppercase">30-90 min</div>
                    <div className="font-mono text-[9px] text-brand-white/70">TIEMPO</div>
                  </div>
                  <div className="p-1 border-x border-brand-white/15">
                    <div className="font-subheading text-xs font-bold text-brand-white uppercase">$3.700</div>
                    <div className="font-mono text-[9px] text-brand-white/70">BASE</div>
                  </div>
                  <div className="p-1">
                    <div className="font-subheading text-xs font-bold text-brand-yellow uppercase">10 kg</div>
                    <div className="font-mono text-[9px] text-brand-white/70">MÁXIMO</div>
                  </div>
                </div>

                <button
                  type="button"
                  onClick={() => setSelectedService(SERVICES_DATA.express)}
                  className="w-full inline-flex items-center justify-between font-subheading font-bold uppercase tracking-wider text-xs px-5 py-3 rounded-full bg-brand-yellow text-brand-blue hover:bg-brand-yellow-hover hover:shadow-glow-yellow transition-all duration-300 group/btn cursor-pointer"
                >
                  <span>Ficha Técnica</span>
                  <span className="w-6 h-6 rounded-full bg-brand-blue/15 flex items-center justify-center shrink-0 ml-1 group-hover/btn:translate-x-1 transition-transform">
                    <HiArrowRight className="text-xs text-brand-blue" />
                  </span>
                </button>
              </div>
            </article>

            {/* SERVICIO 2: LOWCOST */}
            <article className="group relative rounded-[28px] p-6 bg-brand-blue-deep/90 border border-brand-white/20 shadow-2xl overflow-hidden flex flex-col justify-between min-h-[460px] transition-all duration-300 hover:-translate-y-1.5 hover:border-brand-yellow/60">
              <HiTag className="absolute -right-6 -bottom-6 text-[13rem] text-brand-white/[0.04] pointer-events-none group-hover:scale-105 transition-transform duration-500" />
              <div className="relative z-10 space-y-4">
                <div className="flex items-center justify-between">
                  <div className="p-3 bg-brand-white/20 text-brand-yellow rounded-xl shadow-md border border-brand-white/20 text-2xl">
                    <HiTag />
                  </div>
                  <span className="text-[10px] font-bold font-mono tracking-widest px-3 py-1 rounded-full uppercase bg-brand-white/15 text-brand-white border border-brand-white/30">
                    ECONÓMICO
                  </span>
                </div>
                <div className="pt-2">
                  <span className="text-[11px] font-mono font-bold text-brand-yellow uppercase tracking-wider block">
                    GRAL. PUEYRREDÓN
                  </span>
                  <h3 className="font-display text-3xl sm:text-4xl uppercase tracking-tight leading-none text-brand-white group-hover:text-brand-yellow transition-colors mt-1">
                    ENVÍOS LOWCOST
                  </h3>
                </div>
                <p className="font-sans text-xs sm:text-sm leading-relaxed text-brand-white/85 font-light">
                  Envíos agrupados en rutas inteligentes diarias para PyMEs y comercios con la tarifa más competitiva de la ciudad.
                </p>
              </div>

              <div className="relative z-10 pt-4 space-y-4">
                <div className="grid grid-cols-3 gap-1.5 p-2 bg-brand-white/10 rounded-2xl border border-brand-white/15 text-center">
                  <div className="p-1">
                    <div className="font-subheading text-xs font-bold text-brand-yellow uppercase">En el día</div>
                    <div className="font-mono text-[9px] text-brand-white/70">TIEMPO</div>
                  </div>
                  <div className="p-1 border-x border-brand-white/15">
                    <div className="font-subheading text-xs font-bold text-brand-white uppercase">$3.000</div>
                    <div className="font-mono text-[9px] text-brand-white/70">BASE</div>
                  </div>
                  <div className="p-1">
                    <div className="font-subheading text-xs font-bold text-brand-yellow uppercase">15 kg</div>
                    <div className="font-mono text-[9px] text-brand-white/70">MÁXIMO</div>
                  </div>
                </div>

                <button
                  type="button"
                  onClick={() => setSelectedService(SERVICES_DATA.lowcost)}
                  className="w-full inline-flex items-center justify-between font-subheading font-bold uppercase tracking-wider text-xs px-5 py-3 rounded-full bg-brand-white/15 text-brand-white hover:bg-brand-yellow hover:text-brand-blue border border-brand-white/20 transition-all duration-300 group/btn cursor-pointer"
                >
                  <span>Ficha Técnica</span>
                  <span className="w-6 h-6 rounded-full bg-brand-white/20 group-hover/btn:bg-brand-blue/15 flex items-center justify-center shrink-0 ml-1 group-hover/btn:translate-x-1 transition-transform">
                    <HiArrowRight className="text-xs" />
                  </span>
                </button>
              </div>
            </article>

            {/* SERVICIO 3: FLEX */}
            <article className="group relative rounded-[28px] p-6 bg-brand-blue-deep/90 border border-brand-white/20 shadow-2xl overflow-hidden flex flex-col justify-between min-h-[460px] transition-all duration-300 hover:-translate-y-1.5 hover:border-brand-yellow/60">
              <HiCube className="absolute -right-6 -bottom-6 text-[13rem] text-brand-white/[0.04] pointer-events-none group-hover:scale-105 transition-transform duration-500" />
              <div className="relative z-10 space-y-4">
                <div className="flex items-center justify-between">
                  <div className="p-3 bg-brand-yellow text-brand-blue rounded-xl shadow-md text-2xl">
                    <HiCube />
                  </div>
                  <span className="text-[10px] font-bold font-mono tracking-widest px-3 py-1 rounded-full uppercase bg-brand-yellow text-brand-blue border border-brand-yellow">
                    OFICIAL MELI
                  </span>
                </div>
                <div className="pt-2">
                  <span className="text-[11px] font-mono font-bold text-brand-yellow uppercase tracking-wider block">
                    CORTE EXTENDIDO 15HS
                  </span>
                  <h3 className="font-display text-3xl sm:text-4xl uppercase tracking-tight leading-none text-brand-white group-hover:text-brand-yellow transition-colors mt-1">
                    MERCADO FLEX
                  </h3>
                </div>
                <p className="font-sans text-xs sm:text-sm leading-relaxed text-brand-white/85 font-light">
                  Socio logístico homologado para tus ventas con entrega Same-Day. Retiro bonificado en tu local y reputación blindada.
                </p>
              </div>

              <div className="relative z-10 pt-4 space-y-4">
                <div className="grid grid-cols-3 gap-1.5 p-2 bg-brand-white/10 rounded-2xl border border-brand-white/15 text-center">
                  <div className="p-1">
                    <div className="font-subheading text-xs font-bold text-brand-yellow uppercase">Mismo día</div>
                    <div className="font-mono text-[9px] text-brand-white/70">TIEMPO</div>
                  </div>
                  <div className="p-1 border-x border-brand-white/15">
                    <div className="font-subheading text-xs font-bold text-brand-white uppercase">Flex</div>
                    <div className="font-mono text-[9px] text-brand-white/70">OFICIAL</div>
                  </div>
                  <div className="p-1">
                    <div className="font-subheading text-xs font-bold text-brand-yellow uppercase">Flota</div>
                    <div className="font-mono text-[9px] text-brand-white/70">MOTO/AUTO</div>
                  </div>
                </div>

                <button
                  type="button"
                  onClick={() => setSelectedService(SERVICES_DATA.flex)}
                  className="w-full inline-flex items-center justify-between font-subheading font-bold uppercase tracking-wider text-xs px-5 py-3 rounded-full bg-brand-yellow text-brand-blue hover:bg-brand-yellow-hover hover:shadow-glow-yellow transition-all duration-300 group/btn cursor-pointer"
                >
                  <span>Ficha Técnica</span>
                  <span className="w-6 h-6 rounded-full bg-brand-blue/15 flex items-center justify-center shrink-0 ml-1 group-hover/btn:translate-x-1 transition-transform">
                    <HiArrowRight className="text-xs text-brand-blue" />
                  </span>
                </button>
              </div>
            </article>

            {/* SERVICIO 4: 3PL */}
            <article className="group relative rounded-[28px] p-6 bg-brand-blue-deep/90 border border-brand-white/20 shadow-2xl overflow-hidden flex flex-col justify-between min-h-[460px] transition-all duration-300 hover:-translate-y-1.5 hover:border-brand-yellow/60">
              <HiBuildingStorefront className="absolute -right-6 -bottom-6 text-[13rem] text-brand-white/[0.04] pointer-events-none group-hover:scale-105 transition-transform duration-500" />
              <div className="relative z-10 space-y-4">
                <div className="flex items-center justify-between">
                  <div className="p-3 bg-brand-white/20 text-brand-yellow rounded-xl shadow-md border border-brand-white/20 text-2xl">
                    <HiBuildingStorefront />
                  </div>
                  <span className="text-[10px] font-bold font-mono tracking-widest px-3 py-1 rounded-full uppercase bg-brand-white/15 text-brand-white border border-brand-white/30">
                    FULFILLMENT
                  </span>
                </div>
                <div className="pt-2">
                  <span className="text-[11px] font-mono font-bold text-brand-yellow uppercase tracking-wider block">
                    DEPÓSITO FRIULI 1972
                  </span>
                  <h3 className="font-display text-3xl sm:text-4xl uppercase tracking-tight leading-none text-brand-white group-hover:text-brand-yellow transition-colors mt-1">
                    LOGÍSTICA 3PL
                  </h3>
                </div>
                <p className="font-sans text-xs sm:text-sm leading-relaxed text-brand-white/85 font-light">
                  Almacenamiento de mercadería, picking con código de barras, empaque seguro y distribución integral para marcas.
                </p>
              </div>

              <div className="relative z-10 pt-4 space-y-4">
                <div className="grid grid-cols-3 gap-1.5 p-2 bg-brand-white/10 rounded-2xl border border-brand-white/15 text-center">
                  <div className="p-1">
                    <div className="font-subheading text-xs font-bold text-brand-yellow uppercase">24 hs</div>
                    <div className="font-mono text-[9px] text-brand-white/70">STOCK</div>
                  </div>
                  <div className="p-1 border-x border-brand-white/15">
                    <div className="font-subheading text-xs font-bold text-brand-white uppercase">A Medida</div>
                    <div className="font-mono text-[9px] text-brand-white/70">PLANES</div>
                  </div>
                  <div className="p-1">
                    <div className="font-subheading text-xs font-bold text-brand-yellow uppercase">Seguro</div>
                    <div className="font-mono text-[9px] text-brand-white/70">CUSTODIA</div>
                  </div>
                </div>

                <button
                  type="button"
                  onClick={() => setSelectedService(SERVICES_DATA['3pl'])}
                  className="w-full inline-flex items-center justify-between font-subheading font-bold uppercase tracking-wider text-xs px-5 py-3 rounded-full bg-brand-white/15 text-brand-white hover:bg-brand-yellow hover:text-brand-blue border border-brand-white/20 transition-all duration-300 group/btn cursor-pointer"
                >
                  <span>Ficha Técnica</span>
                  <span className="w-6 h-6 rounded-full bg-brand-white/20 group-hover/btn:bg-brand-blue/15 flex items-center justify-center shrink-0 ml-1 group-hover/btn:translate-x-1 transition-transform">
                    <HiArrowRight className="text-xs" />
                  </span>
                </button>
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* ==================== SECCIÓN 3: SLIDER DE INDUSTRIAS ==================== */}
      <section
        id="slider-industrias"
        className="py-20 sm:py-28 bg-brand-canvas text-brand-blue relative overflow-hidden w-full border-t border-brand-blue/10"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end mb-12 text-left">
            <div className="lg:col-span-8 space-y-4">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-subheading font-bold uppercase tracking-widest bg-brand-blue text-brand-yellow shadow-md border border-brand-blue">
                <HiSparkles className="text-sm text-brand-yellow" /> LOGÍSTICA A MEDIDA DE TU RUBRO · MDQ
              </div>
              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-display uppercase tracking-tight leading-[0.95] flex flex-col items-start gap-1 text-brand-blue">
                <span>Soluciones Especiales</span>
                <span className="relative inline-block bg-brand-blue px-3 py-1 my-1 transform -rotate-1 rounded-xl border border-brand-yellow/60 shadow-xl">
                  <span className="relative z-10 bg-brand-yellow text-brand-blue px-3.5 py-0.5 inline-block font-display font-black rounded-lg">
                    PARA CADA INDUSTRIA
                  </span>
                </span>
              </h2>
              <p className="text-brand-blue/85 font-sans text-base sm:text-lg max-w-2xl leading-relaxed font-medium">
                Adaptamos nuestra flota propia de motos a la dinámica de tu sector comercial. Seleccioná tu rubro y conocé nuestra propuesta operativa.
              </p>
            </div>

            {/* Controles de Navegación */}
            <div className="lg:col-span-4 flex items-center justify-start lg:justify-end gap-3">
              <div className="font-mono text-xs font-bold text-brand-blue bg-white px-3.5 py-2 rounded-full border border-brand-blue/30 shadow-sm mr-1">
                <span className="text-brand-blue text-sm font-extrabold">{industryIdx + 1}</span> / {INDUSTRIES_DATA.length}
              </div>
              <button
                type="button"
                onClick={prevIndustry}
                aria-label="Industria anterior"
                className="h-11 w-11 rounded-xl border border-brand-blue/30 bg-white text-brand-blue hover:bg-brand-blue hover:text-brand-yellow flex items-center justify-center transition-all duration-200 active:scale-95 shadow-sm cursor-pointer"
              >
                <HiChevronLeft className="text-lg" />
              </button>
              <button
                type="button"
                onClick={nextIndustry}
                aria-label="Siguiente industria"
                className="h-11 w-11 rounded-xl bg-brand-blue text-brand-yellow hover:bg-brand-blue-hover flex items-center justify-center transition-all duration-200 active:scale-95 shadow-md font-bold cursor-pointer"
              >
                <HiChevronRight className="text-lg" />
              </button>
            </div>
          </div>

          {/* Pestañas Interactivas de Rubros */}
          <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-8 no-scrollbar">
            {INDUSTRIES_DATA.map((ind, idx) => {
              const isActive = idx === industryIdx;
              const TabIcon = ind.icon;
              return (
                <button
                  key={ind.tab}
                  type="button"
                  onClick={() => setIndustryIdx(idx)}
                  className={`px-4 py-2.5 rounded-full font-subheading text-xs uppercase tracking-wider font-bold whitespace-nowrap transition-all flex items-center gap-2 border cursor-pointer ${
                    isActive
                      ? 'bg-brand-blue text-brand-yellow border-brand-blue shadow-md scale-105'
                      : 'bg-white text-brand-blue border-brand-blue/25 hover:bg-brand-yellow/20 hover:border-brand-blue shadow-sm'
                  }`}
                >
                  <TabIcon className={`text-base ${isActive ? 'text-brand-yellow' : 'text-brand-blue'}`} />
                  <span>{ind.title.split(' ')[0]}</span>
                </button>
              );
            })}
          </div>

          {/* Showcase Card Principal */}
          <div className="rounded-[32px] p-2 sm:p-3 bg-brand-blue border border-brand-white/20 shadow-2xl">
            <div className="p-6 sm:p-10 lg:p-12 rounded-[24px] bg-brand-blue-deep border border-brand-white/15 relative overflow-hidden text-brand-white">
              <ActiveIndustryIcon className="absolute right-4 bottom-4 text-[18rem] text-brand-white/[0.04] pointer-events-none transition-all duration-500" />

              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center relative z-10">
                <div className="lg:col-span-4 flex flex-col items-center justify-center text-center space-y-4">
                  <div className="w-28 h-28 sm:w-36 sm:h-36 rounded-3xl bg-brand-yellow text-brand-blue flex items-center justify-center shadow-glow-yellow border-2 border-brand-yellow transition-transform duration-300 hover:scale-105 text-5xl sm:text-6xl">
                    <ActiveIndustryIcon />
                  </div>
                  <div className="px-4 py-1.5 rounded-full font-mono text-xs font-bold uppercase tracking-wider bg-brand-white/15 text-brand-yellow border border-brand-white/20 flex items-center gap-2">
                    <HiClock />
                    <span>{activeIndustry.sla}</span>
                  </div>
                </div>

                <div className="lg:col-span-8 space-y-5 text-left">
                  <div className="space-y-2">
                    <div className="flex flex-wrap items-center gap-2">
                      <span className="px-3 py-1 rounded-md text-[10px] font-mono font-bold uppercase tracking-widest bg-brand-yellow text-brand-blue">
                        {activeIndustry.badge}
                      </span>
                      <span className="text-xs font-subheading uppercase tracking-wider font-bold text-brand-yellow">
                        {activeIndustry.subtitle}
                      </span>
                    </div>
                    <h3 className="text-3xl sm:text-4xl lg:text-5xl font-display uppercase tracking-tight leading-none text-brand-white">
                      {activeIndustry.title}
                    </h3>
                  </div>

                  <p className="font-sans text-sm sm:text-base lg:text-lg leading-relaxed text-brand-white/90 font-light max-w-2xl">
                    {activeIndustry.desc}
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
                    {activeIndustry.benefits.map((b, bIdx) => (
                      <div
                        key={bIdx}
                        className="p-3 rounded-xl bg-brand-white/10 border border-brand-white/15 flex items-center gap-2 text-xs font-sans text-brand-white"
                      >
                        <HiCheckCircle className="text-brand-yellow text-base shrink-0" />
                        <span>{b}</span>
                      </div>
                    ))}
                  </div>

                  <div className="pt-3 flex flex-wrap items-center gap-4">
                    <a
                      href={siteDetails.whatsappUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-3 px-8 py-3.5 rounded-full font-subheading text-sm uppercase tracking-wider font-bold bg-brand-yellow text-brand-blue hover:bg-brand-yellow-hover hover:shadow-glow-yellow transition-all duration-300 group"
                    >
                      <span>{activeIndustry.cta}</span>
                      <span className="w-6 h-6 rounded-full bg-brand-blue/15 flex items-center justify-center group-hover:translate-x-1 transition-transform">
                        <HiArrowRight className="text-xs text-brand-blue" />
                      </span>
                    </a>
                    <Link
                      href="/contacto"
                      className="font-subheading text-xs sm:text-sm uppercase tracking-wider font-bold text-brand-white/80 hover:text-brand-yellow underline-offset-4 hover:underline py-2 transition-colors inline-flex items-center gap-1.5"
                    >
                      Cuenta Corriente Comercial
                      <HiArrowRight className="text-xs" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ==================== SECCIÓN 4: EMPRENDEDORES & MARCAS ==================== */}
      <section
        id="emprendedores-mdq"
        className="py-20 sm:py-28 bg-brand-blue relative overflow-hidden w-full border-t border-brand-white/15"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl mb-16 space-y-4 text-left">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-subheading font-bold uppercase tracking-widest bg-brand-yellow text-brand-blue shadow-glow-yellow border border-brand-yellow">
              <HiBuildingStorefront className="text-sm" /> SOCIO ESTRATÉGICO LOCAL
            </span>
            <h2 className="text-4xl sm:text-5xl lg:text-7xl font-display uppercase tracking-tight leading-[0.9] text-brand-white">
              POTENCIAMOS TU{' '}
              <span className="inline-block px-4 py-1 bg-brand-yellow text-brand-blue rounded-2xl mx-1 transform -rotate-1 font-display font-black shadow-glow-yellow">
                MARCA
              </span>{' '}
              EN MAR DEL PLATA
            </h2>
            <p className="text-brand-white/90 font-sans text-base sm:text-lg leading-relaxed max-w-2xl font-light">
              Si vendés online o en showroom, necesitás un socio logístico que responda al toque. Creamos soluciones a medida con tarifas transparentes y recolección programada a domicilio.
            </p>
            <div className="h-1 w-20 bg-brand-yellow rounded-full mt-4"></div>
          </div>

          {/* Asymmetric Bento Cards Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-stretch text-left">
            {/* Bento Card 1: Logística E-Commerce (7 cols) con imagen 3D flotante como en prototipo */}
            <div className="lg:col-span-7 rounded-[32px] p-2 bg-brand-blue-deep/90 border border-brand-white/20 shadow-2xl hover:-translate-y-1 transition-transform duration-300 flex flex-col justify-between">
              <div className="p-6 sm:p-8 rounded-[24px] bg-brand-blue border border-brand-white/15 h-full flex flex-col justify-between space-y-6 relative overflow-hidden">
                <HiShoppingBag className="absolute -right-6 -bottom-6 text-[14rem] text-brand-white/[0.03] pointer-events-none" />

                <div className="relative z-10 space-y-4">
                  <div className="flex justify-between items-start">
                    <div className="p-3 bg-brand-yellow text-brand-blue rounded-2xl shadow-glow-yellow text-2xl">
                      <HiShoppingBag />
                    </div>
                    <span className="text-[10px] font-mono font-bold tracking-widest bg-brand-yellow text-brand-blue px-3 py-1.5 rounded-lg uppercase">
                      PLAN PYMES & TIENDAS
                    </span>
                  </div>

                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                    <div className="space-y-1">
                      <h3 className="text-3xl sm:text-4xl font-display uppercase tracking-tight text-brand-white">
                        Logística para Tiendas Online
                      </h3>
                      <p className="text-brand-white/85 text-xs sm:text-sm leading-relaxed font-sans font-light">
                        Gestión de última milla pensada para emprendimientos y comercios en expansión. Optimizamos tus costos de envío con retiros pactados y atención directa.
                      </p>
                    </div>
                    <div className="hidden sm:flex shrink-0 w-24 h-24 items-center justify-center">
                      <Image
                        src="/moto_envios_3d.png"
                        alt="Moto Envíos 3D"
                        width={96}
                        height={96}
                        className="w-full h-full object-contain filter drop-shadow-xl transform hover:scale-110 transition-transform"
                      />
                    </div>
                  </div>

                  <ul className="space-y-2.5 pt-2">
                    <li className="flex items-start gap-2 text-xs sm:text-sm text-brand-white">
                      <HiShieldCheck className="text-brand-yellow text-base shrink-0 mt-0.5" />
                      <span>Soporte operativo y comercial dedicado vía WhatsApp.</span>
                    </li>
                    <li className="flex items-start gap-2 text-xs sm:text-sm text-brand-white">
                      <HiShieldCheck className="text-brand-yellow text-base shrink-0 mt-0.5" />
                      <span>Entregas con cobro contrareembolso y rendición en el día.</span>
                    </li>
                    <li className="flex items-start gap-2 text-xs sm:text-sm text-brand-white">
                      <HiShieldCheck className="text-brand-yellow text-base shrink-0 mt-0.5" />
                      <span>Rastreo transparente de pedidos para tus clientes.</span>
                    </li>
                  </ul>
                </div>

                <div className="pt-4 border-t border-brand-white/15 relative z-10 flex justify-end">
                  <Link
                    href="/contacto#plan"
                    className="inline-flex items-center gap-2 rounded-full font-subheading uppercase tracking-wider font-bold px-6 py-3 text-xs bg-brand-white/15 text-brand-white hover:bg-brand-yellow hover:text-brand-blue border border-brand-white/20 transition-all group"
                  >
                    <span>Abrir Cuenta Comercial</span>
                    <span className="w-5 h-5 rounded-full bg-brand-white/20 group-hover:bg-brand-blue/15 flex items-center justify-center group-hover:translate-x-1 transition-transform">
                      <HiArrowRight className="text-xs" />
                    </span>
                  </Link>
                </div>
              </div>
            </div>

            {/* Bento Card 2: Corporativo & Cuenta Corriente (5 cols) */}
            <div className="lg:col-span-5 rounded-[32px] p-2 bg-brand-blue-deep/90 border border-brand-white/20 shadow-2xl hover:-translate-y-1 transition-transform duration-300 flex flex-col justify-between">
              <div className="p-6 sm:p-8 rounded-[24px] bg-brand-blue border border-brand-white/15 h-full flex flex-col justify-between space-y-6 relative overflow-hidden">
                <RiBuilding4Fill className="absolute -right-6 -bottom-6 text-[14rem] text-brand-white/[0.03] pointer-events-none" />

                <div className="relative z-10 space-y-4">
                  <div className="flex justify-between items-start">
                    <div className="p-3 bg-brand-white/20 text-brand-yellow rounded-2xl shadow-md border border-brand-white/20 text-2xl">
                      <RiBuilding4Fill />
                    </div>
                    <span className="text-[10px] font-mono font-bold tracking-widest bg-brand-white/15 text-brand-white px-3 py-1.5 rounded-lg uppercase border border-brand-white/20">
                      CORPORATIVO
                    </span>
                  </div>

                  <div className="space-y-1">
                    <h3 className="text-3xl sm:text-4xl font-display uppercase tracking-tight text-brand-white">
                      Cuentas Comerciales
                    </h3>
                    <p className="text-brand-white/85 text-xs sm:text-sm leading-relaxed font-sans font-light">
                      Facturación mensual unificada, ruteos prioritarios y convenios especiales para distribuidoras, fábricas y empresas con volumen recurrente.
                    </p>
                  </div>

                  <ul className="space-y-2.5 pt-2">
                    <li className="flex items-start gap-2 text-xs sm:text-sm text-brand-white">
                      <FaCheckCircle className="text-brand-yellow text-sm shrink-0 mt-0.5" />
                      <span>Facturas A / B con liquidación quincenal o mensual.</span>
                    </li>
                    <li className="flex items-start gap-2 text-xs sm:text-sm text-brand-white">
                      <FaCheckCircle className="text-brand-yellow text-sm shrink-0 mt-0.5" />
                      <span>Canal de despacho directo y prioritario en base central.</span>
                    </li>
                  </ul>
                </div>

                <div className="pt-4 border-t border-brand-white/15 relative z-10 flex justify-end">
                  <Link
                    href="/contacto"
                    className="inline-flex items-center gap-2 rounded-full font-subheading uppercase tracking-wider font-bold px-6 py-3 text-xs bg-brand-white/15 text-brand-white hover:bg-brand-yellow hover:text-brand-blue border border-brand-white/20 transition-all group"
                  >
                    <span>Abrir Cuenta Comercial</span>
                    <span className="w-5 h-5 rounded-full bg-brand-white/20 group-hover:bg-brand-blue/15 flex items-center justify-center group-hover:translate-x-1 transition-transform">
                      <HiArrowRight className="text-xs" />
                    </span>
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* Marquee de Marcas y Comercios Locales */}
          <div className="mt-20 pt-12 border-t border-brand-white/20">
            <p className="text-center font-subheading text-xs uppercase tracking-widest text-brand-yellow mb-8">
              Marcas y comercios locales que confían en nuestra logística
            </p>
            <div className="relative w-full overflow-hidden py-4 select-none [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
              <div className="flex gap-14 w-max animate-logos-scroll">
                <div className="flex gap-14 items-center shrink-0">
                  {MARCAS_LOCALES.map((m, mIdx) => (
                    <span
                      key={mIdx}
                      className="font-display text-2xl tracking-wider text-brand-white/80 uppercase hover:text-brand-yellow transition-colors whitespace-nowrap"
                    >
                      {m}
                    </span>
                  ))}
                </div>
                <div className="flex gap-14 items-center shrink-0" aria-hidden="true">
                  {MARCAS_LOCALES.map((m, mIdx) => (
                    <span
                      key={`dup-${mIdx}`}
                      className="font-display text-2xl tracking-wider text-brand-white/80 uppercase hover:text-brand-yellow transition-colors whitespace-nowrap"
                    >
                      {m}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ==================== SECCIÓN 5: CARRUSEL DE REDES SOCIALES ==================== */}
      <section
        id="carrusel-redes"
        className="py-20 sm:py-28 bg-brand-blue border-y border-brand-white/15 relative overflow-hidden w-full"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-3.5">
            <div>
              <span className="inline-block px-5 py-1.5 bg-brand-yellow text-brand-blue rounded-full text-xs font-bold tracking-widest font-subheading uppercase shadow-md">
                NUESTRA COMUNIDAD DIGITAL
              </span>
            </div>
            <h2 className="text-brand-white text-4xl sm:text-5xl lg:text-6xl font-display uppercase tracking-tight leading-none">
              SEGUÍ NUESTRO <span className="text-brand-yellow">MOVIMIENTO</span>
            </h2>
            <p className="text-brand-white text-sm sm:text-base leading-relaxed font-sans max-w-2xl mx-auto font-normal opacity-95">
              Sumate a nuestros canales digitales y enterate al toque de todas las novedades operativas en Mar del Plata.
            </p>
            <div className="h-1 w-20 bg-brand-yellow mx-auto rounded-full mt-4"></div>
          </div>

          {/* Grid de 3 Tarjetas de Redes Sociales */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 w-full text-left">
            {/* CARD 1: FACEBOOK */}
            <article className="group relative rounded-2xl p-6 sm:p-7 bg-brand-blue-deep/90 border border-brand-white/20 shadow-2xl overflow-hidden flex flex-col justify-between min-h-[420px] transition-all duration-300 hover:-translate-y-1">
              <FaFacebookF className="absolute -right-6 -bottom-6 text-[14rem] text-brand-white/[0.04] pointer-events-none" />
              <div className="relative z-10 space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-bold tracking-widest px-3 py-1 rounded-full uppercase font-mono border border-blue-400/40 text-blue-300 bg-blue-500/10">
                    FACEBOOK OFICIAL
                  </span>
                  <div className="w-12 h-12 rounded-full flex items-center justify-center bg-social-facebook text-white shadow-glow-fb transition-transform duration-300 group-hover:scale-110 text-2xl">
                    <FaFacebookF />
                  </div>
                </div>
                <div className="pt-2">
                  <h3 className="font-display text-4xl sm:text-5xl uppercase tracking-tight leading-none text-brand-white">
                    FACEBOOK
                  </h3>
                  <p className="font-sans text-sm font-semibold mt-1 text-[#5ea4ff]">
                    Envíos DosRuedas
                  </p>
                </div>
                <p className="font-sans text-sm leading-relaxed text-brand-white/85 font-light pt-1">
                  Seguí nuestro día a día, novedades operativas y la comunidad comercial en Mar del Plata.
                </p>
              </div>
              <div className="relative z-10 pt-6">
                <a
                  href="https://www.facebook.com/enviosdosruedas"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-between font-subheading font-bold uppercase tracking-wider text-xs sm:text-sm px-6 py-3.5 rounded-full transition-all duration-300 bg-social-facebook hover:bg-[#166fe5] text-white shadow-glow-fb group/btn"
                >
                  <span>SEGUIR COMUNIDAD</span>
                  <span className="w-7 h-7 rounded-full bg-white/20 flex items-center justify-center shrink-0 ml-2 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform">
                    <HiArrowRight className="text-sm text-white" />
                  </span>
                </a>
              </div>
            </article>

            {/* CARD 2: INSTAGRAM */}
            <article className="group relative rounded-2xl p-6 sm:p-7 bg-brand-blue-deep/90 border border-brand-white/20 shadow-2xl overflow-hidden flex flex-col justify-between min-h-[420px] transition-all duration-300 hover:-translate-y-1">
              <FaInstagram className="absolute -right-6 -bottom-6 text-[14rem] text-brand-white/[0.04] pointer-events-none" />
              <div className="relative z-10 space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-bold tracking-widest px-3 py-1 rounded-full uppercase font-mono border border-rose-400/40 text-rose-300 bg-rose-500/10">
                    INSTAGRAM MDQ
                  </span>
                  <div className="w-12 h-12 rounded-2xl flex items-center justify-center bg-gradient-to-tr from-[#f97316] via-[#e11d48] to-[#9333ea] text-white shadow-glow-ig transition-transform duration-300 group-hover:scale-110 text-2xl">
                    <FaInstagram />
                  </div>
                </div>
                <div className="pt-2">
                  <h3 className="font-display text-4xl sm:text-5xl uppercase tracking-tight leading-none text-brand-white">
                    INSTAGRAM
                  </h3>
                  <p className="font-sans text-sm font-semibold mt-1 text-[#ff4d6d]">
                    @enviosdosruedas
                  </p>
                </div>
                <p className="font-sans text-sm leading-relaxed text-brand-white/85 font-light pt-1">
                  Mirá el detrás de escena de nuestros repartidores y la flota recorriendo las calles de MDQ.
                </p>
              </div>
              <div className="relative z-10 pt-6">
                <a
                  href="https://www.instagram.com/enviosdosruedas/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-between font-subheading font-bold uppercase tracking-wider text-xs sm:text-sm px-6 py-3.5 rounded-full transition-all duration-300 bg-gradient-to-r from-[#9b2c8a] via-[#e11d48] to-[#f97316] hover:opacity-95 text-white shadow-glow-ig group/btn"
                >
                  <span>VER CONTENIDO</span>
                  <span className="w-7 h-7 rounded-full bg-white/20 flex items-center justify-center shrink-0 ml-2 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform">
                    <HiArrowRight className="text-sm text-white" />
                  </span>
                </a>
              </div>
            </article>

            {/* CARD 3: WHATSAPP */}
            <article className="group relative rounded-2xl p-6 sm:p-7 bg-brand-blue-deep/90 border border-brand-white/20 shadow-2xl overflow-hidden flex flex-col justify-between min-h-[420px] transition-all duration-300 hover:-translate-y-1">
              <FaWhatsapp className="absolute -right-6 -bottom-6 text-[14rem] text-brand-white/[0.04] pointer-events-none" />
              <div className="relative z-10 space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-bold tracking-widest px-3 py-1 rounded-full uppercase font-mono border border-emerald-400/40 text-emerald-300 bg-emerald-500/10">
                    WHATSAPP DIRECTO
                  </span>
                  <div className="w-12 h-12 rounded-full flex items-center justify-center bg-social-whatsapp text-white shadow-glow-wa transition-transform duration-300 group-hover:scale-110 text-2xl">
                    <FaWhatsapp />
                  </div>
                </div>
                <div className="pt-2">
                  <h3 className="font-display text-4xl sm:text-5xl uppercase tracking-tight leading-none text-brand-white">
                    WHATSAPP
                  </h3>
                  <p className="font-mono text-sm font-semibold mt-1 text-social-whatsapp">
                    +54 223 660-2699
                  </p>
                </div>
                <p className="font-sans text-sm leading-relaxed text-brand-white/85 font-light pt-1">
                  Escribinos directamente para consultas de precios, despachos o soporte logístico inmediato.
                </p>
              </div>
              <div className="relative z-10 pt-6">
                <a
                  href={siteDetails.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-between font-subheading font-bold uppercase tracking-wider text-xs sm:text-sm px-6 py-3.5 rounded-full transition-all duration-300 bg-social-whatsapp hover:bg-[#20bd5a] text-brand-blue-deep shadow-glow-wa group/btn font-bold"
                >
                  <span>INICIAR CHAT</span>
                  <span className="w-7 h-7 rounded-full bg-brand-blue-deep/15 flex items-center justify-center shrink-0 ml-2 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform">
                    <HiArrowRight className="text-sm text-brand-blue-deep" />
                  </span>
                </a>
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* ==================== MODAL DE FICHA TÉCNICA ==================== */}
      {selectedService && (
        <div
          className="fixed inset-0 z-50 bg-brand-blue-deep/90 backdrop-blur-md flex items-center justify-center p-4 animate-in fade-in duration-200"
          role="dialog"
          aria-modal="true"
          onClick={() => setSelectedService(null)}
        >
          <div
            className="relative w-full max-w-2xl bg-brand-blue border border-brand-white/25 rounded-3xl shadow-2xl p-6 sm:p-8 text-brand-white space-y-6 text-left"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Botón Cerrar */}
            <button
              type="button"
              onClick={() => setSelectedService(null)}
              aria-label="Cerrar modal"
              className="absolute top-4 right-4 p-2 rounded-full bg-brand-white/15 hover:bg-brand-yellow hover:text-brand-blue transition-colors cursor-pointer text-lg"
            >
              <HiXMark />
            </button>

            {/* Encabezado del Modal */}
            <div className="flex items-center gap-4">
              <div className="p-3.5 bg-brand-yellow text-brand-blue rounded-2xl shadow-md text-2xl">
                {selectedService.iconType === 'lightning' && <HiBolt />}
                {selectedService.iconType === 'tag' && <HiTag />}
                {selectedService.iconType === 'package' && <HiCube />}
                {selectedService.iconType === 'warehouse' && <HiBuildingStorefront />}
              </div>
              <div>
                <span className="text-[10px] font-mono font-bold text-brand-yellow uppercase tracking-widest block">
                  {selectedService.badge}
                </span>
                <h3 className="font-display text-3xl sm:text-4xl uppercase tracking-tight text-brand-white">
                  {selectedService.title}
                </h3>
              </div>
            </div>

            {/* Resumen y Beneficios */}
            <div className="p-5 bg-brand-white/10 rounded-2xl border border-brand-white/15 space-y-4">
              <p className="font-sans text-sm sm:text-base leading-relaxed text-brand-white/90 font-light">
                {selectedService.summary}
              </p>
              <div className="space-y-2 pt-2 border-t border-brand-white/15">
                <span className="text-xs font-subheading font-bold uppercase text-brand-yellow tracking-wider block">
                  Beneficios Operativos:
                </span>
                <ul className="space-y-2 text-xs sm:text-sm text-brand-white/90">
                  {selectedService.features.map((feat, fIdx) => (
                    <li key={fIdx} className="flex items-start gap-2">
                      <HiCheckCircle className="text-brand-yellow text-base shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Fila de Estadísticas */}
            <div className="grid grid-cols-3 gap-3 text-center">
              <div className="bg-brand-white/10 border border-brand-white/20 p-3 rounded-xl">
                <span className="text-lg font-bold font-subheading text-brand-yellow block truncate">
                  {selectedService.time}
                </span>
                <span className="text-[10px] text-brand-white/70 font-mono uppercase tracking-wider">Tiempos</span>
              </div>
              <div className="bg-brand-white/10 border border-brand-white/20 p-3 rounded-xl">
                <span className="text-lg font-bold font-subheading text-brand-white block truncate">
                  {selectedService.price}
                </span>
                <span className="text-[10px] text-brand-white/70 font-mono uppercase tracking-wider">Tarifa</span>
              </div>
              <div className="bg-brand-white/10 border border-brand-white/20 p-3 rounded-xl">
                <span className="text-lg font-bold font-subheading text-brand-yellow block truncate">
                  {selectedService.weight}
                </span>
                <span className="text-[10px] text-brand-white/70 font-mono uppercase tracking-wider">Capacidad</span>
              </div>
            </div>

            {/* Botones de Acción */}
            <div className="pt-2 flex justify-between items-center gap-4">
              <button
                type="button"
                onClick={() => setSelectedService(null)}
                className="text-xs text-brand-white/70 hover:text-brand-white underline uppercase font-bold tracking-wider cursor-pointer"
              >
                Volver
              </button>
              <div className="flex gap-3 items-center">
                <Link
                  href={selectedService.route}
                  className="inline-flex items-center gap-2 rounded-full font-subheading uppercase tracking-wider font-bold px-5 py-3 text-xs bg-brand-white/15 text-brand-white hover:bg-brand-white/25 transition-all"
                >
                  Página Completa
                </Link>
                <a
                  href={siteDetails.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full font-subheading uppercase tracking-wider font-bold px-6 py-3 text-xs bg-brand-yellow text-brand-blue hover:bg-brand-yellow-hover hover:shadow-glow-yellow transition-all"
                >
                  <span>Cotizar por WhatsApp</span>
                  <HiArrowRight className="text-xs" />
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}


