# Design System: Finwise · Modern Financial Management & Logistics Platform

## 1. Visual Theme & Atmosphere
An electric, high-velocity, and dependable interface combining bold industrial-modern geometry with deep atmospheric elevation. The aesthetic merges rich Electric Speed Blue foundations (`#0950F6`) with high-contrast High-Voltage Neon Yellow accents (`#FFF12E`), crisp optical white containers (`#FFFFFF`), and deep midnight navy backgrounds (`#052C87`).

* **Density:** Balanced 5/10 — generous vertical rhythm with concise component internals.
* **Variance:** Offset Asymmetric 6/10 — subtle angular badge rotations (-1° / 1°), asymmetric bento grids, and 12-column responsive splits.
* **Motion:** Fluid & Spring-orchestrated — `stiffness: 100, damping: 20` spring physics with staggered child reveals and subtle perpetual micro-glow interactions.

---

## 2. Color Palette & Roles
* **Electric Speed Blue** (`#0950F6`) — Primary brand background canvas, hero atmosphere, active borders, and primary brand identity.
* **Deep Midnight Navy** (`#052C87`) — Deep contrast surface fill, bento container backgrounds, dropdown panels, and footer foundation.
* **High-Voltage Neon Yellow** (`#FFF12E`) — Single high-conversion accent for primary action buttons, key metrics, status indicators, and focus highlights.
* **Electric Sun Gold Hover** (`#FFF44A`) — Active hover states for yellow buttons, badges, and glowing halo reflections.
* **Pure Optical White** (`#FFFFFF`) — Primary typography on dark surfaces, solid card cores, and high-contrast calculator surfaces.
* **Slate Light Canvas** (`#F8FAFC`) — Alternative light container backgrounds.
* **Frosted Glass White** (`rgba(255, 255, 255, 0.10)` – `rgba(255, 255, 255, 0.25)`) — Glassmorphic double-layered outer shells, borders, and navigation pills.
* **Social WhatsApp Green** (`#25D366`) — Direct chat and messaging action channel.
* **Social Facebook Blue** (`#1877F2`) — Social network channel icon.

---

## 3. Typography Rules
* **Display / Headlines (`font-display`):** `Anton`, sans-serif. Track-tight (`tracking-tight`), uppercase, condensed scale, heavy visual punch. Used for major hero titles and high-impact section headlines.
* **Subheadings & Action Labels (`font-subheading`):** `"Bebas Neue"`, sans-serif. Uppercase, wide tracking (`tracking-wider` / `tracking-widest`), bold industrial presence. Used for navigation links, button text, section chips, and card category badges.
* **Body & UI Text (`font-sans`):** `Outfit`, system-ui, sans-serif. Clean, geometric, highly legible. Weights: Light (300) for descriptions, Regular (400) for copy, SemiBold (600) for list labels.
* **Data, Numbers & Metrics (`font-mono`):** `"Geist Mono"`, monospace. Tabular numbers (`tabular-nums`), bold weights. Used for financial prices, metric statistics (`+50K`, `20M+`), and technical metadata.
* **Banned:** `Inter`, generic system serif fonts (`Times New Roman`, `Georgia`), pure black body text.

---

## 4. Component Stylings
* **Buttons:**
  * *Primary CTA:* Pill-shaped (`rounded-full`), minimum 48px–52px height, High-Voltage Neon Yellow fill (`#FFF12E`), Electric Blue bold text (`#0950F6`), uppercase Bebas Neue tracking, accompanied by tactile hover states and soft yellow glow (`shadow-glow-yellow`).
  * *Secondary Button:* Pill-shaped (`rounded-full`), frosted translucent glass background (`bg-brand-white/10`), white text, semi-opaque white border (`border-brand-white/30`), brightening on hover.
  * *App/Play Store Buttons:* Pill-shaped (`rounded-full`), dark navy/yellow contrast with clear platform iconography.
* **Cards & Containers:**
  * *Signature Double-Layered Card:* Outer frosted glass frame (`rounded-[28px]`, `bg-brand-white/10`, `border border-brand-white/20`, `shadow-2xl`) encapsulating an inner solid core (`rounded-[20px]`, `#FFFFFF` or `#052C87`).
  * *Bento Feature & Metric Cards:* Deep Midnight Navy surface (`bg-brand-blue-deep/90`) with translucent border (`border-brand-white/20`), subtle hover lift (`hover:-translate-y-1`), and watermark icons.
* **Inputs & Forms:**
  * Generously rounded corners (`rounded-xl`), standardized 44px height (`h-11`), clean white background with 2px subtle blue border stroke, transitioning to an Electric Blue focus ring (`focus-visible:ring-2 focus-visible:ring-brand-blue`).
* **Header & Navigation:**
  * Fixed glassmorphic navbar with backdrop blur (`bg-brand-blue/95 backdrop-blur-md border-b border-brand-white/20`), brand logo in yellow/white, and prominent yellow CTA pill.
* **Footer:**
  * Deep midnight navy surface (`bg-brand-blue-deep/95 border-t border-brand-white/20`), white text with yellow link hover transitions.

---

## 5. Layout Principles
* **Max-Width Containment:** Centered `max-w-7xl` (1280px) container with responsive gutters (`px-4 sm:px-6 lg:px-8`).
* **Section Rhythm:** Generous vertical padding (`py-16 sm:py-24 lg:py-28`) with clean translucent dividing lines (`border-t border-brand-white/20`).
* **Grid Architecture:** 12-column asymmetric desktop splits and responsive 1-to-3/4 column card matrices with consistent `gap-6` to `gap-8`.
* **Mobile Collapse:** Strict single-column stack below 768px with full-width touch targets.

---

## 6. Motion & Interaction
* **Spring Physics:** `stiffness: 100, damping: 20` for fluid scroll reveals and modal transitions.
* **Staggered Orchestration:** List items and grid cards cascade into view using `delayChildren: 0.2, staggerChildren: 0.1`.
* **Perpetual Micro-Interactions:** Pulsing status beacons (`animate-ping`), marquee infinite scrolls (`logos-scroll 25s linear infinite`), and hover elevation lifts (`hover:-translate-y-1.5`).

---

## 7. Anti-Patterns (Banned)
* ❌ No emojis in UI headlines or metadata
* ❌ No `Inter` or unstyled generic serif fonts
* ❌ No pure black backgrounds or text (`#000000`)
* ❌ No generic black SVGs on dark blue canvases
* ❌ No disconnected warm/cool color mismatches
* ❌ No unstyled white container blocks on dark themes
