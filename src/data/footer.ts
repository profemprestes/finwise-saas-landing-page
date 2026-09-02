import { IMenuItem, ISocials } from "@/types";

export const footerDetails: {
    subheading: string;
    servicesLinks: IMenuItem[];
    companyLinks: IMenuItem[];
    legalLinks: IMenuItem[];
    email: string;
    telephone: string;
    phoneFormatted: string;
    address: string;
    socials: ISocials;
} = {
    subheading: "Logística y mensajería urbana e-commerce en Mar del Plata. Envíos express en moto, MercadoLibre Flex y soluciones para PyMEs.",
    servicesLinks: [
        {
            text: "Envíos Express (30-90 min)",
            url: "/servicios/envios-express"
        },
        {
            text: "Envíos LowCost en el Día",
            url: "/servicios/envios-lowcost"
        },
        {
            text: "Mercado Envíos Flex",
            url: "/servicios/enviosflex"
        },
        {
            text: "Plan Emprendedores & 3PL",
            url: "/servicios/plan-emprendedores"
        },
        {
            text: "Cotizador Online",
            url: "/cotizar/express"
        }
    ],
    companyLinks: [
        {
            text: "Sobre Nosotros",
            url: "/sobre-nosotros"
        },
        {
            text: "Preguntas Frecuentes",
            url: "/preguntas-frecuentes"
        },
        {
            text: "Nuestras Redes",
            url: "/nuestras-redes"
        },
        {
            text: "Contacto",
            url: "/contacto"
        }
    ],
    legalLinks: [
        {
            text: "Términos y Condiciones",
            url: "/terminos-y-condiciones"
        },
        {
            text: "Política de Privacidad",
            url: "/politica-de-privacidad"
        }
    ],
    email: 'contacto@enviosdosruedas.com.ar',
    telephone: '+542236602699',
    phoneFormatted: '223 660-2699',
    address: 'Mar del Plata, Buenos Aires, Argentina',
    socials: {
        facebook: 'https://facebook.com',
        instagram: 'https://instagram.com',
        whatsapp: 'https://wa.me/542236602699',
    }
}