import { HiCube, HiShieldCheck, HiBuildingStorefront } from "react-icons/hi2";

import { IStats } from "@/types";

export const stats: IStats[] = [
    {
        title: "+50.000",
        icon: <HiCube size={34} className="text-brand-yellow" />,
        description: "Envíos y entregas completadas en todo Mar del Plata con máxima puntualidad."
    },
    {
        title: "0",
        icon: <HiShieldCheck size={34} className="text-brand-yellow" />,
        description: "Paquetes extraviados. Custodia total y trazabilidad garantizada en cada recorrido."
    },
    {
        title: "+100",
        icon: <HiBuildingStorefront size={34} className="text-brand-yellow" />,
        description: "Comercios, tiendas online y PyMEs que confían a diario en nuestra flota."
    }
];