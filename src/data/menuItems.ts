export interface INavDropdownItem {
    title: string;
    description: string;
    url: string;
    iconName?: string;
    badge?: string;
}

export interface INavItem {
    text: string;
    url?: string;
    children?: INavDropdownItem[];
}

export const servicesMenuItems: INavDropdownItem[] = [
    {
        title: "Envíos Express",
        description: "Entregas prioritarias en 30-90 min",
        url: "/servicios/envios-express",
        iconName: "lightning"
    },
    {
        title: "Envíos LowCost",
        description: "Envíos en el día para PyMEs",
        url: "/servicios/envios-lowcost",
        iconName: "tag"
    },
    {
        title: "MercadoLibre Flex",
        description: "Socio logístico oficial",
        url: "/servicios/enviosflex",
        iconName: "package"
    },
    {
        title: "3PL & Depósito",
        description: "Picking, packing y guarda",
        url: "/servicios/plan-emprendedores",
        iconName: "warehouse"
    }
];

export const aboutMenuItems: INavDropdownItem[] = [
    {
        title: "Sobre Nosotros",
        description: "Quiénes somos en MDQ",
        url: "/sobre-nosotros",
        iconName: "badge"
    },
    {
        title: "Preguntas Frecuentes",
        description: "Dudas comunes sobre el servicio",
        url: "/preguntas-frecuentes",
        iconName: "question"
    },
    {
        title: "Nuestras Redes",
        description: "Redes y reputación",
        url: "/nuestras-redes",
        iconName: "share"
    }
];

export const cotizarMenuItems: INavDropdownItem[] = [
    {
        title: "Cotizador Express",
        description: "Calculá costo por km y tiempo",
        url: "/cotizar/express",
        iconName: "calculator"
    },
    {
        title: "Cotizador LowCost",
        description: "Tarifas planas por zona",
        url: "/cotizar/lowcost",
        iconName: "tag"
    }
];