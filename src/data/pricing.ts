import { IPricing } from "@/types";

export const tiers: IPricing[] = [
    {
        name: 'Envío Express',
        price: 'Desde $3.500',
        features: [
            'Entrega prioritaria 30 a 90 min',
            'Mensajero exclusivo punto a punto',
            'Seguimiento en vivo y confirmación',
            'Cobranza contra entrega disponible',
            'Cobertura en todo Mar del Plata',
        ],
    },
    {
        name: 'Pack PyMEs LowCost',
        price: 'Tarifa Plana',
        features: [
            'Envíos en el día (Same-Day)',
            'Retiro programado en tu comercio',
            'Entregas por zonas optimizadas',
            'Reporte diario de entregas',
            'Soporte directo por WhatsApp',
        ],
    },
    {
        name: 'MercadoLibre Flex & 3PL',
        price: 'A Medida',
        features: [
            'Logística oficial Mercado Envíos Flex',
            'Guarda de stock en depósito propio',
            'Picking & packing profesional',
            'Rendición inmediata de dinero',
            'Integración para tiendas online',
        ],
    },
];