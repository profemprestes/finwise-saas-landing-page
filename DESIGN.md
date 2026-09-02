# Design System: Envíos DosRuedas · Mensajería y Logística Urbana E-Commerce

## 1. Visual Theme & Atmosphere
An electric, high-velocity, and dependable urban interface built for on-demand cadetería, express 30-90 min deliveries, and MercadoLibre Flex logistics in Mar del Plata. The design language fuses industrial-modern delivery speed with high-contrast accessibility and deep glassmorphic elevation.

* **Aesthetic Mood:** Electric High-Velocity Urban, Industrial-Modern, High-Contrast Dependable.
* **Density:** Balanced Delivery Interface (5/10) — generous vertical section rhythm (`py-16` to `py-28`) balanced with high-density data chips, interactive calculation forms, and bento metric blocks.
* **Variance:** Offset Asymmetric Layouts (6/10) — 12-column asymmetric splits (7:5 ratios), intentional angular tilts (`-rotate-1` / `rotate-1`), and staggered card matrices.
* **Depth & Elevation:** Deep Atmospheric Layers — subtle 3D perspective tilts, double-layered frosted glass borders (`bg-brand-white/10 border border-brand-white/20 shadow-2xl`), and radiant neon glow halos (`shadow-glow-yellow`, `shadow-glow-blue`).

---

## 2. Color Palette & Roles

* **Electric Speed Blue** (`#0950F6`) — Primary brand identity surface, hero canvas background, active header, primary accent borders, and dynamic route lines.
* **Deep Midnight Navy** (`#052C87`) — High-contrast container fill, dark card core backgrounds, dropdown menus, footer foundations, and custom scrollbar track.
* **High-Voltage Neon Yellow** (`#FFF12E`) — Primary conversion trigger, hero CTA pills, active navigation badges, icon highlight containers, and text selection background (`selection:bg-brand-yellow selection:text-brand-blue`).
* **Electric Sun Gold Hover** (`#FFF44A`) — Interactive hover state for primary conversion buttons and active pill chips.
* **Pure Optical White** (`#FFFFFF`) — High-contrast calculator cards, form inputs, primary headlines on dark backgrounds, and container cores.
* **Slate Light Canvas** (`#F8FAFC`) — Alternative light section background fill for vision, trust metrics, and tabular pricing data.
* **Slate Ink Dark** (`#0F172A`) — Body text and headings on light canvas surfaces (`text-brand-ink`).
* **Frosted Glass White** (`rgba(255, 255, 255, 0.10)` – `rgba(255, 255, 255, 0.25)`) — Double-layered glassmorphic outer frames, navigation pills, secondary ghost buttons, and subtle divider strokes (`border-brand-white/20`).
* **Social WhatsApp Green** (`#25D366`) — Direct WhatsApp chat CTA, floating quick-quote actions, and messaging beacon indicators.
* **Social Facebook Blue** (`#1877F2`) — Social network channel icon and verification badges.
* **Instagram Radiant Pink** (`#E1306C`) — Social channel icon and verification badges.

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

## 4. Component Stylings

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

## 5. Layout Principles

* **Max-Width Containment:** Centered `max-w-7xl` (1280px) container with responsive gutters (`px-4 sm:px-6 lg:px-8`).
* **Section Rhythm:** Generous vertical padding (`py-16 sm:py-24 lg:py-28`) with clean translucent dividing lines (`border-t border-brand-white/20`).
* **Grid Architecture:** 12-column desktop splits, asymmetric 7:5 and 8:4 hero/form layouts, and responsive 1-to-4 column bento matrices with consistent `gap-6` to `gap-8`.
* **Mobile-First Collapse (< 768px):** Strict single-column stack below 768px with full-width touch targets (minimum 44px tap target) and horizontal overflow strictly prevented (`overflow-x-hidden`).
* **Height Standard:** Full-height sections must use `min-h-[100dvh]` or `min-h-[65vh]` — never fixed `h-screen`.

---

## 6. Design System Notes for Stitch Generation (Prompting Block)

> **Copy this exact block into Stitch generation prompts:**

```markdown
**DESIGN SYSTEM SPECIFICATIONS (ENVÍOS DOSRUEDAS):**
- **Brand Colors:**
  - Electric Speed Blue: #0950F6 (Primary canvas, borders & brand identity)
  - Deep Midnight Navy: #052C87 (High-contrast containers & dark surfaces)
  - High-Voltage Neon Yellow: #FFF12E (Primary CTA buttons, active status chips & selection)
  - Sun Gold Hover: #FFF44A (Button hover states)
  - Pure Optical White: #FFFFFF (Calculator cards, input forms & light surfaces)
  - Slate Light Canvas: #F8FAFC (Secondary light section backgrounds)
  - Slate Ink: #0F172A (Text on light backgrounds)
  - WhatsApp Green: #25D366 (Direct messaging action)
- **Typography:**
  - Display Headlines: Anton (Uppercase, tracking-tight, leading-none)
  - Subheadings, Chips, Nav & Buttons: Bebas Neue (Uppercase, tracking-wider, bold)
  - Body & Form UI: Outfit (Light 300 to Regular 400, leading-relaxed)
  - Prices, Numbers & Metrics: Geist Mono (Tabular numerals, bold)
- **Component Geometry & Depth:**
  - Outer Containers: Generously rounded (rounded-[28px] / rounded-[32px]) with frosted glass frames (bg-brand-white/10 border border-brand-white/20 shadow-2xl)
  - Inner Cores: Clean nested cards (rounded-[20px]) with high contrast
  - Primary CTAs: Pill-shaped (rounded-full) in Neon Yellow (#FFF12E) with Electric Blue text (#0950F6) and glowing halo (shadow-glow-yellow)
  - Status Badges: Velocity pill chips with -1deg / 1deg tilt angle (-rotate-1 / rotate-1)
- **Prohibitions & Anti-Patterns:**
  - NO emojis in UI (use Phosphor Icons: ph-fill, ph-bold)
  - NO Inter font or generic serif fonts
  - NO pure black (#000000)
  - NO purple/pink glow clichés
  - NO fake 3-column equal generic card grids
```

---

## 7. Anti-Patterns (Banned AI Tells)

* ❌ **No emojis** anywhere in UI headlines, body copy, or metadata badges — use Phosphor icons exclusively (`ph-fill`, `ph-bold`).
* ❌ **No `Inter` font** or unstyled generic serif fonts (`Times New Roman`, `Georgia`, `Garamond`).
* ❌ **No pure black** (`#000000`) for text or backgrounds — use Deep Midnight Navy (`#052C87`) or deep blue tints.
* ❌ **No neon purple/pink glow clichés** — stick strictly to calibrated brand yellow and brand blue halos.
* ❌ **No generic 3-column equal card rows** — use asymmetric bento grids, 2-column zig-zag layouts, or 7:5 split compositions.
* ❌ **No fabricated metrics or placeholder statistics** — never generate fake uptime/data percentages without real basis.
* ❌ **No AI copywriting clichés** — avoid words like "Elevate", "Seamless", "Unleash", "Next-Gen". Use direct, concrete logistics terms ("Envíos en el día", "Tarifas transparentes", "Retiro y entrega en mano").
* ❌ **No filler UI instructions** — "Scroll to explore", "Swipe down", bouncing chevrons are strictly banned.
* ❌ **No overlapping illegible text layers** — every element must maintain clean spatial separation.

