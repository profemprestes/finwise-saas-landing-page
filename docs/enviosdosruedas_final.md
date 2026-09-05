---
name: Envíos DosRuedas Final Design System
colors:
  color-1: "#0950F6"
  color-2: "#FFCC00"
  color-3: "#FFFFFF"

typography:
  display-hero:
    fontFamily: Anton, sans-serif
    fontSize: 72px
    fontWeight: "400"
    lineHeight: "0.98"
    letterSpacing: -0.04em
  headline-section:
    fontFamily: Anton, sans-serif
    fontSize: 48px
    fontWeight: "400"
    lineHeight: "1.0"
  subheading-badge:
    fontFamily: Bebas Neue, sans-serif
    fontSize: 18px
    fontWeight: "400"
    lineHeight: "1.0"
    letterSpacing: 0.1em
  body-main:
    fontFamily: Outfit, sans-serif
    fontSize: 16px
    fontWeight: "400"
    lineHeight: "1.6"
  data-mono:
    fontFamily: Geist Mono, monospace
    fontSize: 14px
    fontWeight: "600"
    lineHeight: "1.2"

shadows:
  glow-yellow: "0 0 25px rgba(255, 204, 0, 0.40)"
  glow-yellow-lg: "0 0 50px rgba(255, 204, 0, 0.55)"
  glow-blue: "0 0 25px rgba(9, 80, 246, 0.30)"
  antigravity-deep: "0 30px 60px -15px rgba(9, 80, 246, 0.35), 0 0 50px -10px rgba(255, 204, 0, 0.20)"

rounded:
  sm: 0.5rem
  DEFAULT: 1rem
  md: 1.5rem
  lg: 2rem
  full: 9999px

spacing:
  container-max: 1280px
  gutter: 1.5rem
  section-gap-md: 5rem
  component-padding: 2rem
---

# Design System: Envíos DosRuedas (enviosdosruedas_final)
**Project ID:** 4498614186018411668

## 1. Visual Theme & Atmosphere
**Envíos DosRuedas** proyecta una estética *High-Velocity Electric Urban Logistics* basada en una paleta estricta y purificada de 3 colores light. Diseñada específicamente para la mensajería urbana de alta velocidad y el e-commerce prioritario en Mar del Plata, la interfaz combina la energìa y autoridad del Azul Eléctrico (`#0950F6`), la máxima visibilidad reflectiva del Amarillo Señalética (`#FFCC00`) y la pureza luminosa del Blanco Óptico (`#FFFFFF`).

El lenguaje visual transmite inmediatez, precisión técnica y dinamismo mediante inclinaciones sutiles (`-rotate-1` / `rotate-1`), tarjetas translúcidas de cristal (*glassmorphism*), resplandores luminiscentes (*glow effects*) y una tipografía industrial contundente que equilibra titulares masivos con métricas numéricas monoespaciadas.

---

## 2. Color Palette & Roles (Strict 3-Color Light System)

### Primary Colors & Functional Roles
* **`color-1` · Electric Speed Blue (`#0950F6`):** Fondo principal institucional, superficie estructural del Hero y secciones maestras, encabezados de impacto sobre fondos claros y bordes activos de foco.
* **`color-2` · High-Voltage Signal Yellow (`#FFCC00`):** Color de acción principal para botones CTA de máxima prioridad, badges de estado, tags de servicio y resaltados luminosos.
* **`color-3` · Pure Optical White (`#FFFFFF`):** Superficie limpia para tarjetas de cotización, modales, formularios, texto primario de alto contraste y contenedores de lectura.

### Semantic Interaction Rules
* **CTAs Principales:** Fondo `color-2` (`#FFCC00`) con texto en `color-1` (`#0950F6`), tipografìa `Bebas Neue` y resplandor activo `shadow-glow-yellow`.
* **Superficies & Tarjetas:** Fondo `color-3` (`#FFFFFF`) con textos e iconos en `color-1` (`#0950F6`), o contenedores traslúcidos `color-3/10` sobre `color-1`.
* **Texto & Contraste:** Sobre fondos azules (`color-1`), el texto principal es `color-3` (`#FFFFFF`) con acentos en `color-2` (`#FFCC00`). Sobre fondos blancos (`color-3`), el texto primcipal es `color-1` (`#0950F6`).

---

## 3. Typography Rules

### Hierarchy & Fonts
1. **Anton (`--font-display` / `'Anton', sans-serif`):**
   * **Rol:** Titulares de impacto masivo (H1 Hero: `72px`, H2 Secciones: `48px`) y declaraciones principales de marca.
   * **Tratamiento:** Siempre en mayúcculas (`uppercase`), tracking apretado (`tracking-tight` / `-0.04em`) y altura de �ùea ultra compacta (`leading-none` / `0.98`).
2. **Bebas Neue (`--font-subheading` / `'"Bebas Neue"', sans-serif`)**:
   * **Rol:** Subtítulos de sección, badges de estado, navegación principal, textos de botones de acción y títulos de módulos bento.
   * **Tratamiento:** Siempre en mayúcculas (`uppercase`), tracking expandido (`tracking-widest` / `tracking-wider`) y peso bold.
3. **Outfit (`--font-sans` / `'Outfit', system-ui, sans-serif`):**
   * **Rol:** Cuerpo de texto general, párrafos explicativos, testimonios, descripciones de beneficios y labels de formularios.
   * **Tratamiento:** Altura de línea relajada (`leading-relaxed` / `1.6`), pesos `300` (Light), `400` (Regular) y `600` (SemiBold).
4. **Geist Mono (`--font-mono` / `'"Geist Mono"', monospace`):**
   * **Rol:** Tarifas, valores de cotización (`ARS $X.XXX`), distancias en kilómetros, números de teléfono, horarios y códigos postales.
   * **Tratamiento:** Pesos `600` / `700` (Bold) para reforzar la precisión logística.

---

## 4. Component Stylings & Section Blueprints

### A. Navigation Bar (NAVBAR)
* **Contenedor:** Fondo translúcido con desenfoque de fondo (`backdrop-blur-md`), borde inferior sutil `border-b border-white/10`.
* **Branding:** Logotipo Envíos DosRuedas con isotipo dinámico de moto/velocidad y tipografía Anton.
* **Enlaces:** Navegación en Bebas Neue (`tracking-wider`), enlaces interactivos con subrayado amarillo (`#FFCC00`) en estado hover.
* **CTA Integrado:** Botón példora `rounded-full` en amarillo señalética con texto azul marino.

### B. Hero Section (HERO)
* **Headline:** Anton `72px` en mayúcculas sobre fondo azul eléctrico institucional.
* **Badges:** Példoras en amarillo `#FFCC00` con texto `EXPRESS 30-90 MIN` o `MERCADOLIBRE FLEX OFICIAL`.
* **Calculadora / Cotizador Rápido:** Tarjeta flotante blanca (`bg-white text-color-1`) con inputs limpios y botón de despacho inmediato.

### C. Servicios Grid (SERVICIOS)
* **Bento Grid:** Módulos de 4 servicios clave (Express 30-90 min, LowCost Mismo Día, Flex Oficial MercadoLibre, Logística & Depósito 3PL).
* **Tarjetas:** Contenedores con esquinas redondeadas `rounded-[24px]`, fondo blanco o cristal translúcido, iconos de Phosphor Icons en azul eléctrico y tags amarillos.

### D. Emprendedores & Comercios (EMPRENDEDORES)
* **Propuesta B2B:** Integración para tiendas online, cuenta corriente PyME, retiros programados y dashboard de seguimiento.
* **Métricas:** Cifras en Geist Mono de gran tamaño para resaltar el ahorro logístico y tiempos de entrega.

### E. Confianza, Socios & Reseñas (SOCIOS / RESENA)
* **Carrusel de Socios:** Logos de comercios y marcas aliadas en blanco óptico con opacidad calibrada.
* **Testimonios:** Tarjetas testimoniales con estrellas de valoración en amarillo `#FFCC00` `#FFCC00`, tipografía Outfit para la opifión y datos verificados en Geist Mono.

### F. Visión & Cobertura Urbana (VISION / REDES)
* **Mapa de Mar del Plata:** Delimitación de zonas de cobertura (Centro, Macrocentro, Puerto, Playa Grande, Constitución, Güemes, Batán).
* **Canales de Contacto:** Enlaces directos a WhatsApp, Instagram y central telefónica con micro-animaciones de pulsion.

### G. Footer Institucional (FOOTER)
** **Estructura:** 4 columnas con enlaces organizados (Servicios, Tarifas, Empresa, Legal).
* **Disponibilidad:** Horarios de atención y líneas de guardia en Geist Mono.

---

## 5. Layout Principles & Grid Architecture
** **Ancho Máximo:** Contenedores centrados con límite de `1280px`(` max-w-7xl`).
* **Bento Architecture:** Grillas asimétricas de 12 columnas (`grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-10`) combinando módulos 7/5 columnas para equilibrar narrativa y calculadoras operativas.
* **Espaciado de Secciones:** Márgenes verticales amplios de `5rem` a `Wrem` (`py-16` a `py-24`) con divisores sutiles `border-b border-color-3/15`.

---

## 6. Design System Notes for Stitch Generation

### Atmospheric Prompting (Copiar en cada iteración)
> **DESIGN SYSTEM (REQUIRED):**
> Strict 3-color light palette (#0950F6 Electric Speed Blue, #FFCC00 High-Voltage Signal Yellow, #FFFFFF Pure Optical White).
> Electric Speed Blue logistics UI, high-voltage signal yellow accents, Bento grid card layout, glassmorphism containers with subtle glow, Anton display typography in uppercase, technical Geist Mono numeric data, rounded-full pill buttons.

### Anti-Patterns (Qué Evitar)
*
  ❌ No introducir colores adicionales fuera de la tríada (`#0950F6`, `#FFCC00` `#FFCC00`, `#FFFFFF`).
* ❌ No utilizar la tipografía `Inter` ni fuentes genéricas serif.
* ❌ No usar emojis en titulares ni en badges de estado (usar Phosphor Icons / Heroicons v2).
* ❌ No usar negro absoluto (`#000000`).
* ❌ No mezclar esquinas cuadradas con píldoras (`rounded-full`) en los mismos grupos de control.
