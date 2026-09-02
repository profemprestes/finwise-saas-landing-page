# ADR 0001: Migracion de Prototipos HTML a Next.js 16 + Tailwind CSS v4 + React 19

## Contexto
El proyecto cuenta con un conjunto completo de prototipos HTML interactivos en docs/prototipos/ para la empresa de mensajeria y logistica Envíos DosRuedas (Mar del Plata). Se requiere implementar estas paginas en la aplicacion productiva en src/ utilizando la arquitectura de Next.js App Router.

## Decision
1. Enrutamiento: Cada archivo HTML de docs/prototipos/*.html se migrara a una ruta en src/app/ (ej. envios-express.html -> /servicios/envios-express/page.tsx).
2. Componentes Modulares: Extraer componentes compartidos reutilizables en src/components/ (Header, Footer, QuoteCalculator, ServiceCard, BentoGrid, WhatsAppButton, CoverageMap).
3. Assets e Imagenes: Todos los recursos graficos de docs/prototipos/public/ se sincronizan en public/ para acceso directo desde Next.js.
4. Interactividad: Mapas de cotizacion y componentes con calculo de distancias se aislaran como Client Components.

## Consecuencias
- Codigo limpio, modular y fuertemente tipado con TypeScript.
- Maxima performance, SSR y SEO nativo para Mar del Plata.
- Fidelidad 100% con los estilos definidos en DESIGN.md.
