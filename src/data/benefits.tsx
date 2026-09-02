import { HiBolt, HiShieldCheck, HiClock, HiMapPin, HiCube, HiBuildingStorefront, HiSparkles, HiChatBubbleLeftRight, HiCreditCard } from "react-icons/hi2";

import { IBenefit } from "@/types";

export const benefits: IBenefit[] = [
    {
        title: "Logística Express y Same-Day",
        description: "Entregas en tiempo récord dentro de Mar del Plata. Contamos con cadetería dedicada para que tus clientes reciban sus compras el mismo día.",
        bullets: [
            {
                title: "Entregas en 30 a 90 Minutos",
                description: "Servicio Express prioritario punto a punto con mensajero exclusivo.",
                icon: <HiBolt className="w-6 h-6 text-brand-yellow" />
            },
            {
                title: "Cobertura en Todo Mar del Plata",
                description: "Desde el Centro, Güemes y Puerto hasta Constitución, Camet y la zona sur.",
                icon: <HiMapPin className="w-6 h-6 text-brand-yellow" />
            },
            {
                title: "Tarifas Transparentes",
                description: "Precios claros y sin sorpresas, calculados de forma justa según distancia o zona.",
                icon: <HiCreditCard className="w-6 h-6 text-brand-yellow" />
            }
        ],
        imageSrc: "/Emprendedoresbannerrapidas.webp"
    },
    {
        title: "Mercado Envíos Flex & E-Commerce",
        description: "Maximizá tus ventas online en MercadoLibre y TiendaNube con envíos Flex oficiales y logística integrada.",
        bullets: [
            {
                title: "Retiros Diarios Programados",
                description: "Buscamos los paquetes por tu depósito o local comercial todos los días.",
                icon: <HiCube className="w-6 h-6 text-brand-yellow" />
            },
            {
                title: "Entrega Garantizada en el Día",
                description: "Tu reputación en verde asegurada con más del 99% de entregas a tiempo.",
                icon: <HiShieldCheck className="w-6 h-6 text-brand-yellow" />
            },
            {
                title: "Rendición Inmediata de Cobros",
                description: "Cobro contra entrega y transferencias sin demoras innecesarias.",
                icon: <HiSparkles className="w-6 h-6 text-brand-yellow" />
            }
        ],
        imageSrc: "/banner-servicio-flex.jpg"
    },
    {
        title: "Plan Emprendedores & Depósito 3PL",
        description: "Olvidate del empaque y la guarda de mercadería. Nosotros almacenamos, preparamos tus pedidos y los despachamos.",
        bullets: [
            {
                title: "Guarda y Control de Stock",
                description: "Almacenamiento seguro en nuestra base operativa central en MDQ.",
                icon: <HiBuildingStorefront className="w-6 h-6 text-brand-yellow" />
            },
            {
                title: "Picking & Packing Profesional",
                description: "Empaquetamos tus pedidos con el cuidado y presentación que tu marca merece.",
                icon: <HiClock className="w-6 h-6 text-brand-yellow" />
            },
            {
                title: "Atención y Soporte por WhatsApp",
                description: "Comunicación fluida y directa con nuestro equipo de coordinación.",
                icon: <HiChatBubbleLeftRight className="w-6 h-6 text-brand-yellow" />
            }
        ],
        imageSrc: "/Emprendedoresbanner.webp"
    },
];