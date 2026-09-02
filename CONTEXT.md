# Context & Domain Model: Envíos DosRuedas

Envíos DosRuedas es un servicio de mensajería y logística urbana e-commerce en Mar del Plata (Argentina), especializado en cadetería en moto, envíos en el día (MercadoLibre Flex), distribución para tiendas online y logística 3PL para emprendedores y PyMEs.

## 1. Domain Glossary

### Entidades y Conceptos Principales
* **Envío Express:** Servicio prioritario punto a punto con entregas ultrarrápidas (30 a 90 minutos) con mensajero dedicado en moto.
* **Envío LowCost:** Servicio económico con retiro programado y entrega en el mismo día dentro de franjas horarias optimizadas por zonas.
* **Mercado Envíos Flex:** Servicio de distribución homologado para vendedores de MercadoLibre en Mar del Plata con retiro diario y entrega garantizada en el día.
* **Logística 3PL & Depósito (Plan Emprendedores):** Servicio integral de guarda de stock, preparación de pedidos (picking & packing) y despacho continuo para tiendas online.
* **Cotizador Interactivo:** Herramienta en la web para calcular tarifas estimadas según origen, destino y distancia en km (utilizando Leaflet OpenStreetMap).
* **Custodia Digital:** Sistema de seguimiento y verificación de entrega con confirmación de recepción y soporte continuo vía WhatsApp.
* **Zona de Cobertura:** Mar del Plata y áreas metropolitanas (Centro, Güemes, Playa Grande, Puerto, Chauvín, Los Troncos, Constitución, Camet, Batán, Acantilados, Sierra de los Padres).

---

## 2. Technical Stack & Component Boundaries

* **Framework:** Next.js 16 (App Router), React 19, TypeScript.
* **Estilos:** Tailwind CSS v4, tokens definidos en DESIGN.md.
* **Iconografía:** Phosphor Icons (ph-fill, ph-bold, ph-regular).
* **Mapas & Geolocalización:** Leaflet (eact-leaflet o Leaflet vanilla encapsulado en componentes de cliente).
* **Animaciones:** Framer Motion (con spring physics stiffness: 100, damping: 20).
* **Assets:** Servidos desde /public/ (logos, banners, mapas, iconos e imágenes optimizadas en WebP/PNG).

---

## 3. Communication Channels
* **WhatsApp Oficial:** +54 223 660-2699 (https://wa.me/542236602699).
* **Teléfono:** 223 660-2699.
* **Ubicación Principal:** Mar del Plata, Buenos Aires, Argentina.
