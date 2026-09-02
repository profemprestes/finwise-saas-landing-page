# Design System: Envíos DosRuedas · Mensajería y Logística Urbana E-Commerce

## 1. Visual Theme & Atmosphere
An electric, high-velocity, and dependable urban interface built for on-demand courier, express deliveries, and MercadoLibre Flex logistics in Mar del Plata. The design combines bold industrial-modern geometry with deep atmospheric elevation. The visual foundation marries high-energy Electric Speed Blue (`#0950F6`) with high-voltage Neon Yellow conversion accents (`#FFF12E`), deep Midnight Navy contrast containers (`#052C87`), and crisp Optical White cards (`#FFFFFF`).

* **Density:** Daily App Balanced (5/10) — generous vertical section rhythm with high-clarity, concise interactive form & bento components.
* **Variance:** Offset Asymmetric (6/10) — 12-column asymmetric splits (7:5 ratios), dynamic sticker badge tilt angles (-1° / 1° rotation), and non-generic bento feature grids.
* **Motion:** Fluid Spring Choreography (6/10) — `stiffness: 100, damping: 20` spring physics with staggered cascade reveals, interactive 3D perspective card tilts, and perpetual pulsing status beacons.

---

## 2. Color Palette & Roles

* **Electric Speed Blue** (`#0950F6`) — Primary brand canvas surface, hero section atmosphere, active brand borders, and key interactive highlights.
* **Deep Midnight Navy** (`#052C87`) — High-contrast container fill, dark bento surfaces, dropdown menus, footer foundation, and custom scrollbar track.
* **High-Voltage Neon Yellow** (`#FFF12E`) — Single primary conversion accent, hero CTAs, active status chips, icon highlight backdrops, and text selection fill (`selection:bg-brand-yellow selection:text-brand-blue`).
* **Electric Sun Gold Hover** (`#FFF44A`) — Interactive hover state for primary yellow buttons, active chips, and energetic halo glows.
* **Pure Optical White** (`#FFFFFF`) — High-contrast card core fills, interactive quote calculators, form surface backgrounds, and primary typography on dark surfaces.
* **Slate Light Canvas** (`#F8FAFC`) — Alternative light section canvas fill for service breakdowns, trust grids, and tabular pricing data.
* **Frosted Glass White** (`rgba(255, 255, 255, 0.10)` – `rgba(255, 255, 255, 0.25)`) — Double-layered glassmorphic outer frames, navigation pills, secondary ghost buttons, and subtle divider strokes (`border-brand-white/20`).
* **Social WhatsApp Green** (`#25D366`) — Direct WhatsApp chat CTA, floating quick-quote actions, and messaging beacon indicators.
* **Social Facebook Blue** (`#1877F2`) — Social network channel icon and verification badges.

> **Color Constraints:** Pure black (`#000000`) is strictly forbidden. Purple/neon-pink glows are banned. All glows must strictly radiate in brand yellow (`rgba(255, 241, 46, 0.40)`) or brand blue (`rgba(9, 80, 246, 0.30)`).

---

## 3. Typography Rules

* **Display Headings (`font-display`):** `Anton`, sans-serif.
  * *Usage:* Hero titles, major section headlines, and high-impact slogan statements.
  * *Specs:* Uppercase, track-tight (`tracking-tight` / `tracking-tighter`), ultra-condensed line-height (`leading-[0.98]` or `leading-none`), heavy industrial weight.
* **Subheadings & Action Labels (`font-subheading`):** `"Bebas Neue"`, sans-serif.
  * *Usage:* Navigation links, section badge chips, button labels, category tags, and input field labels.
  * *Specs:* Uppercase, expanded tracking (`tracking-wider` / `tracking-widest`), bold condensed structural punch.
* **Body Text & Interface (`font-sans`):** `Outfit`, system-ui, -apple-system, sans-serif.
  * *Usage:* Paragraphs, descriptive copy, form inputs, tooltips, and informational card text.
  * *Specs:* Sentence case, weights ranging from Light (300) for descriptions to Regular (400) for body and SemiBold (600) for list items, relaxed line height (`leading-relaxed`), max-width 65ch.
* **Data, Counters & Metrics (`font-mono`):** `"Geist Mono"`, monospace.
  * *Usage:* Price tags (`$4.600 ARS`), numeric metrics (`+50K`), distance values (`4.2 km`), phone numbers, and timestamps.
  * *Specs:* Tabular numbers (`tabular-nums`), medium (500) to bold (700) weights, tight numerical alignment.
* **Banned Fonts:** `Inter`, generic system serif fonts (`Times New Roman`, `Georgia`, `Garamond`), unstyled fallback system fonts.

---

## 4. Hero Section Architecture

* **Headline Structure:** Heavy display uppercase layout with multi-tonal word contrast (`COTIZÁ TU` [White] `ENVÍO` [Neon Yellow] `EXPRESS` [White]).
* **Layout Split:** Asymmetric 12-column desktop split (`grid-cols-1 lg:grid-cols-12`) pairing a 7-column narrative & feature-chip stack with a 5-column interactive floating card preview or 3D canvas simulation.
* **Visual Atmosphere:** Large typographic watermark in background (`text-[16vw] text-brand-white/[0.03]`), subtle particle canvas, and glowing halo backdrops.
* **Velocity Badges:** Pill-shaped status chips with intentional `-1°` / `1°` rotation tilts, high-voltage yellow borders, and pulsing icon beacons.
* **Hero CTA Restraint:** Maximum 1 primary high-conversion pill button (`bg-brand-yellow text-brand-blue`) paired with instant phone/WhatsApp channel. No generic filler links.

---

## 5. Component Stylings

### Buttons & Interactive Controls
* **Primary Conversion CTA:**
  * Pill-shaped (`rounded-full`), minimum 48px–52px height (`min-h-[48px]`), High-Voltage Neon Yellow fill (`#FFF12E`), Electric Speed Blue bold text (`#0950F6`).
  * Includes integrated trailing circular icon badge (`w-6 h-6 rounded-full bg-brand-blue/15 text-brand-blue`), transitioning to inverted state and shifting right (`group-hover:translate-x-1`) on hover with an intense neon halo glow (`shadow-glow-yellow`).
* **Secondary / Glass Button:**
  * Pill-shaped (`rounded-full`), translucent frosted glass background (`bg-brand-white/10`), Pure Optical White text (`#FFFFFF`), semi-opaque white border (`border-brand-white/30`), deepening opacity (`bg-brand-white/20`) on hover.
* **Direct Channel Buttons:**
  * Floating WhatsApp action button (`bg-social-whatsapp text-white shadow-glow-wa rounded-full`).
  * Direct phone link with `"Geist Mono"` tabular contact number and hover color transition.

### Cards & Structural Containers
* **Signature Double-Layered Card:**
  * *Outer Frame:* Generously rounded (`rounded-[28px]` or `rounded-[30px]`), frosted glass styling (`bg-brand-white/10`), 1px translucent border (`border-brand-white/20`), heavy atmospheric drop shadow (`shadow-2xl`).
  * *Inner Core:* Nested inner container (`rounded-[20px]`), filled with crisp Pure Optical White (`#FFFFFF`) for calculators/forms, or Deep Midnight Navy (`#052C87`) for dark metric cards.
* **Service & Feature Bento Cards:**
  * Deep Midnight Navy surface (`bg-brand-blue-deep/90 border border-brand-white/20`), generous rounding (`rounded-[28px]`), oversized watermark icons (`text-brand-white/[0.04]`), and tactile lift on hover (`hover:-translate-y-1.5 hover:border-brand-yellow/60`).
* **Dropdowns & Popovers:**
  * Smooth rounded corners (`rounded-2xl`), solid Electric Blue foundation (`bg-brand-blue border border-brand-white/25`), deep elevation (`shadow-2xl`), and high-contrast row items with subtle hover pills (`hover:bg-brand-white/15`).

### Inputs, Forms & Calculators
* **Form Inputs & Selects:**
  * Standardized 44px height (`h-11`), rounded corners (`rounded-xl`), crisp white background with 2px subtle blue border stroke (`border-2 border-brand-blue/20`).
  * Focus state: Electric Blue highlight ring (`focus-visible:ring-2 focus-visible:ring-brand-blue focus-visible:border-brand-blue`).
  * Labels placed above in uppercase `"Bebas Neue"` with Phosphor icon prefixes.
* **Loading & Skeleton States:**
  * Dimension-matching pulsing skeletons with subtle blue-to-yellow shimmer gradients. No generic circular spinners.

---

## 6. Layout Principles

* **Max-Width Containment:** Centered `max-w-7xl` (1280px) container with responsive gutters (`px-4 sm:px-6 lg:px-8`).
* **Section Rhythm:** Generous vertical padding (`py-16 sm:py-24 lg:py-28`) with clean translucent dividing lines (`border-t border-brand-white/20`).
* **Grid Architecture:** 12-column desktop splits, asymmetric 7:5 and 8:4 hero/form layouts, and responsive 1-to-4 column bento matrices with consistent `gap-6` to `gap-8`.
* **Mobile-First Collapse (< 768px):** Strict single-column stack below 768px with full-width touch targets (minimum 44px tap target) and horizontal overflow strictly prevented (`overflow-x-hidden`).
* **Height Standard:** Full-height sections must use `min-h-[100dvh]` or `min-h-[65vh]` — never fixed `h-screen`.

---

## 7. Motion & Interaction Philosophy

* **Spring Physics:** `stiffness: 100, damping: 20` for fluid scroll reveals, modal entrances, and tab transitions.
* **Staggered Orchestration:** List items and grid cards cascade into view using `delayChildren: 0.2, staggerChildren: 0.1`.
* **Perpetual Micro-Interactions:** Pulsing status beacons (`animate-pulse` / `animate-ping`), infinite marquee logo scrolls (`logos-scroll 25s linear infinite`), and tactile hover lifts (`hover:-translate-y-1.5`).
* **Performance Constraints:** Hardware-accelerated transitions only via `transform` and `opacity`. Never animate `top`, `left`, `width`, or `height`.

---

## 8. Anti-Patterns (Banned AI Tells)

* ❌ **No emojis** anywhere in UI headlines, body copy, or metadata badges — use Phosphor icons exclusively (`ph-fill`, `ph-bold`).
* ❌ **No `Inter` font** or unstyled generic serif fonts (`Times New Roman`, `Georgia`, `Garamond`).
* ❌ **No pure black** (`#000000`) for text or backgrounds — use Deep Midnight Navy (`#052C87`) or deep blue tints.
* ❌ **No neon purple/pink glow clichés** — stick strictly to calibrated brand yellow and brand blue halos.
* ❌ **No generic 3-column equal card rows** — use asymmetric bento grids, 2-column zig-zag layouts, or 7:5 split compositions.
* ❌ **No fabricated metrics or placeholder statistics** — never generate fake uptime/data percentages without real basis.
* ❌ **No AI copywriting clichés** — avoid words like "Elevate", "Seamless", "Unleash", "Next-Gen". Use direct, concrete logistics terms ("Envíos en el día", "Tarifas transparentes", "Retiro y entrega en mano").
* ❌ **No filler UI instructions** — "Scroll to explore", "Swipe down", bouncing chevrons are strictly banned.
* ❌ **No overlapping illegible text layers** — every element must maintain clean spatial separation.
