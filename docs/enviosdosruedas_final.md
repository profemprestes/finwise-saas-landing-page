---
name: Envíos DosRuedas Design System
colors:
  primary: "#0C59F2"
  secondary: "#FFF12E"
  brand-blue: "#0C59F2"
  brand-yellow: "#FFF12E"
  brand-white: "#FFFFFF"
  surface: "#FFFFFF"
  on-surface: "#0C59F2"
  background: "#0C59F2"
  foreground: "#FFFFFF"

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
  glow-yellow: "0 0 25px rgba(255, 241, 46, 0.35)"
  glow-yellow-lg: "0 0 50px rgba(255, 241, 46, 0.45)"
  glow-blue: "0 0 25px rgba(12, 89, 242, 0.25)"
  card-elevation: "0 20px 40px -15px rgba(12, 89, 242, 0.15)"

rounded:
  sm: 0.5rem
  DEFAULT: 1rem
  md: 1.5rem
  lg: 2rem
  full: 9999px

spacing:
  container-max: 1280px
  gutter: 1.5rem
  section-gap-sm: 4rem
  section-gap-md: 5rem
  section-gap-lg: 6rem
  component-padding: 2rem
---

# Design System: Envíos DosRuedas

**Project ID:** 4498614186018411668  
**Dominio:** https://www.enviosdosruedas.com/  
**Ubicación:** Mar del Plata, Argentina  

---

## 1. Visual Theme & Atmosphere

**Envíos DosRuedas** proyecta una estética *High-Velocity Electric Urban Logistics* disciplinada, purificada y sin saturación cromática. La experiencia visual se basa en una regla estricta de **tres colores puros**: el Azul Eléctrico oficial de la marca (`#0C59F2`), el Amarillo Neón de Alta Visibilidad (`#FFF12E`) y el Blanco Óptico Puro (`#FFFFFF`).

* **Atmósfera General:** Rápida, técnica y de precisión urbana. Transmite la inmediatez y solvencia de una red logística sobre dos ruedas en Mar del Plata.
* **Density:** 6/10 (Daily App Balanced / Operativa) — Tarjetas amplias, datos legibles al instante y navegación despejada.
* **Variance:** 7/10 (Offset Asymmetric) — Distribución bento asimétrica que rompe con grillas monótonas y jerarquiza calculadoras y llamados a la acción.
* **Motion:** 6/10 (Fluid Spring Physics) — Micro-interacciones reactivas (`stiffness: 100, damping: 20`) que simulan respuesta mecánica ágil sin retrasos artificiales.

---

## 2. Color Palette & Roles (Strict 3-Color Triad)

El sistema elimina por completo la dispersión de múltiples tonos de azul (sin Midnight Navy, sin slate blues ni gradientes oscuros intermedios). La profundidad y el contraste se construyen exclusivamente mediante la relación de alto impacto entre el Azul de Marca, el Blanco Puro y el Amarillo Neón.

### Triada Estricta Oficial

* **`--color-brand-blue`: `#0C59F2` (Azul Eléctrico Institucional)**
  * **Rol:** Fondo principal institucional, superficie estructural del Hero y secciones maestras. Cuando se utiliza sobre tarjetas blancas, es el color de títulos de impacto, iconos principales y bordes activos de foco.
  * **Regla:** Es el **único azul** permitido en toda la aplicación. No se permiten azules marinos, celestes ni gradientes azul-púrpura.

* **`--color-brand-yellow`: `#FFF12E` (Amarillo Neón de Alta Visibilidad)**
  * **Rol:** Único acento de acción para botones de conversión (CTA Primario), insignias de urgencia (Express 30-90 min, Flex), tags de servicio y resaltados reflectivos.
  * **Interacción:** Resplandor activo `shadow-glow-yellow` (`rgba(255, 241, 46, 0.35)`) y micro-escalado al pulsar.

* **`--color-brand-white`: `#FFFFFF` (Blanco Óptico Puro)**
  * **Rol:** Superficie base para tarjetas de cotización, modales, campos de formulario y contenedores de lectura bento. Sobre fondo azul institucional, es el color principal para textos de alto contraste y divisores estructurales (`border-white/20`).

### Reglas Semánticas de Interacción y Contraste

1. **Sobre fondo Azul (`#0C59F2`):**
   * Fondo general: `#0C59F2`.
   * Texto principal: `#FFFFFF` (Blanco puro).
   * Acentos y destacados: `#FFF12E` (Amarillo).
   * Tarjetas y módulos: Fondo `#FFFFFF` con texto `#0C59F2`, o contenedores traslúcidos `bg-white/10 backdrop-blur-md border border-white/20`.
2. **Sobre fondo Blanco (`#FFFFFF`):**
   * Fondo de tarjeta/modal: `#FFFFFF`.
   * Texto principal y títulos: `#0C59F2`.
   * Texto de soporte y labels: `#0C59F2` con opacidad calibrada (`text-[#0C59F2]/80`).
   * Botón de acción: `#FFF12E` con texto `#0C59F2`.
3. **Botón Principal (CTA):**
   * Fondo: `#FFF12E`.
   * Texto: `#0C59F2` en tipografía `Bebas Neue` mayúsculas.
   * Forma: Píldora completa (`rounded-full`).
   * Hover: Sutil incremento de escala (`scale-[1.02]`) y resplandor amarillo controlado.

---

## 3. Typography Rules

### Jerarquía Tipográfica

1. **Anton (`--font-display` / `'Anton', sans-serif`):**
   * **Rol:** Titulares de impacto masivo (H1 Hero: `72px` desktop, `44px` móvil; H2 Secciones: `48px`).
   * **Tratamiento:** Siempre en mayúsculas (`uppercase`), tracking apretado (`tracking-tight` / `-0.04em`), altura de línea ultra compacta (`leading-none` / `0.98`) y peso `400`.
   * **Prohibición:** Banned para párrafos o textos explicativos.

2. **Bebas Neue (`--font-subheading` / `'"Bebas Neue"', sans-serif`):**
   * **Rol:** Subtítulos de sección, badges de estado, navegación principal, textos de botones de acción y titulares de módulos bento.
   * **Tratamiento:** Siempre en mayúsculas (`uppercase`), tracking expandido (`tracking-wider` / `0.1em`), altura de línea compacta (`leading-tight` / `1.0`).

3. **Outfit (`--font-sans` / `'Outfit', system-ui, sans-serif`):**
   * **Rol:** Cuerpo de texto general, párrafos explicativos, testimonios, descripciones de beneficios y labels de formularios.
   * **Tratamiento:** Altura de línea relajada (`leading-relaxed` / `1.6`), pesos `300` (Light), `400` (Regular) y `600` (SemiBold). Ancho máximo de línea: 65 caracteres para óptima legibilidad.

4. **Geist Mono (`--font-mono` / `'"Geist Mono"', monospace`):**
   * **Rol:** Tarifas y precios (`ARS $X.XXX`), distancias (`X.X km`), números de teléfono (`223 660-2699`), horarios (`08:00 a 19:00 hs`) y códigos postales (`B7600`).
   * **Tratamiento:** Pesos `600` / `700` (Bold) para imprimir precisión técnica de despacho.

### Fuentes Prohibidas
* ❌ **Inter** y fuentes genéricas de sistema para contextos de marca.
* ❌ **Fuentes Serif genéricas** (Times New Roman, Georgia).

---

## 4. Component Stylings

### A. Botones
* **Primario (CTA Hero / Envío Inmediato):** Fondo amarillo neón `#FFF12E`, texto azul `#0C59F2`, tipografía `Bebas Neue` en mayúsculas, esquinas `rounded-full`, sombra de resplandor `shadow-glow-yellow`. Al pulsar: desplazamiento táctil reactivo `scale-[0.98]`.
* **Secundario (Ghost / Consulta):** Fondo transparente, borde de 1.5px en blanco óptico (`border-white/30`), texto blanco `#FFFFFF`, esquinas `rounded-full`. En hover: `bg-white/15 border-white/50`.

### B. Tarjetas y Módulos Bento
* **Tarjetas Claras (Cotizadores y Calculadoras):** Fondo blanco óptico `#FFFFFF`, esquinas redondeadas generosas (`rounded-2xl` o `rounded-3xl` / `24px`), borde sutil `border border-[#0C59F2]/10`, sombra suave `shadow-card-elevation`. Textos e iconos en `#0C59F2`.
* **Tarjetas Glassmorphic:** Fondo translúcido `bg-white/10`, filtro desenfoque `backdrop-blur-md`, borde `border border-white/20`, esquinas `rounded-3xl`. Textos en `#FFFFFF`.

### C. Inputs y Formularios
* **Estructura:** Label superior en tipografía `Outfit` semibold en `#0C59F2`, campo con fondo blanco `#FFFFFF`, borde sutil y foco directo con anillo en `#0C59F2`. Texto ingresado de alta legibilidad. Errores informados directamente debajo del campo.

### D. Badges e Indicadores de Estado
* **Forma:** Píldora (`rounded-full py-1 px-3`).
* **Estilo:** Fondo `#FFF12E` con texto `#0C59F2` en `Bebas Neue` (`tracking-wider`), o borde fino blanco con texto blanco para estados informativos secundarios.

### E. Loaders & Estados Vacíos
* **Skeletal Shimmer:** Marcadores de posición con siluetas que replican exactamente las dimensiones de las tarjetas y cotizadores en tonos calibrados de `#0C59F2` y `#FFFFFF` translúcido. Prohibidos los spinners circulares genéricos.

---

## 5. Layout Principles & Grid Architecture

* **Ancho Máximo:** Contenedores centrados con tope estricto de `1280px` (`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8`).
* **Bento Grid Asimétrico:** Grillas de 12 columnas (`grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8`) que combinan módulos 7/5 y 8/4.
  * Prohibida la fila monótona de 3 tarjetas idénticas.
* **Separación de Secciones:** Espaciados verticales amplios de `clamp(4rem, 8vw, 6rem)` con divisores sutiles `border-b border-white/15`.
* **Alturas de Sección Completa:** Utilizar `min-h-[100dvh]` en lugar de `h-screen` para evitar saltos en navegadores móviles (iOS Safari).
* **Responsive Collapse (< 768px):** Todos los módulos bento colapsan de forma limpia a una única columna vertical, garantizando cero scroll horizontal (`overflow-x-hidden`) y botones táctiles con altura mínima de 44px.

---

## 6. Motion & Interaction Philosophy

* **Física de Resortes (Spring Physics):** Transiciones con parámetros `stiffness: 100, damping: 20` para una respuesta ágil, pesada y sin sensaciones gomosas o retardadas.
* **Micro-interacciones Continuas:** Los indicadores de servicio activo (ej. "Envíos Express Disponibles") incorporan una sutil animación de pulsación continua o pulso reflectivo en `#FFF12E`.
* **Rendimiento de Hardware:** Todas las animaciones operan exclusivamente sobre las propiedades GPU `transform` y `opacity`. Queda terminantemente prohibido animar `top`, `left`, `width` o `height`.

---

## 7. Anti-Patterns (Estrictamente Prohibidos)

* ❌ **Múltiples tonos de azul:** No introducir azul marino (`#052C87`), azul pizarra, celestes ni degradados secundarios. Toda la interfaz se construye con el azul único `--color-brand-blue: #0C59F2`.
* ❌ **Negro absoluto (`#000000`):** El contraste sobre blanco se resuelve con `#0C59F2`.
* ❌ **No utilizar colores ajenos a la tríada:** Prohibidos violetas, verdes menta o degradados multicolores no corporativos.
* ❌ **No usar la fuente Inter:** Mantener la identidad con Anton, Bebas Neue, Outfit y Geist Mono.
* ❌ **No usar emojis:** Ni en encabezados, ni en badges, ni en metadatos (usar Phosphor Icons con pesos coherentes).
* ❌ **No filas genéricas de 3 tarjetas idénticas:** Utilizar esquemas bento asimétricos.
* ❌ **No inventar datos o métricas de fantasía:** No inventar métricas irreales estilo "99.99% UPTIME". Únicamente datos verificables del servicio de mensajería (30-90 min, tarifas oficiales, horarios reales de Mar del Plata).
* ❌ **No textos de relleno innecesarios:** Prohibido "Scroll para explorar" o flechas flotantes que no aportan funcionalidad.
