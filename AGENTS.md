# Agents Constitution & Guidelines

## 1. Project Mission & Identity
* **Product:** Envíos DosRuedas — Mensajería y Logística Urbana E-Commerce en Mar del Plata.
* **Target:** Comercios, PyMEs, tiendas online y usuarios particulares que requieren envíos prioritarios (Express 30-90 min), Envíos LowCost en el día, MercadoLibre Flex oficial y logística 3PL/depósito.
* **Source of Truth for UI/UX & Content:** Prototypes in `docs/prototipos/` and design specifications in `DESIGN.md`.

---

## 2. Core Agent Rules & Standards

### Quality & Verification Protocol
1. **Verification Commands:** Before concluding any implementation, run `pnpm lint` and `pnpm build` to guarantee zero build or TypeScript errors.
2. **Framework Alignment:** Next.js 16 App Router (`src/app/`), React 19, Tailwind CSS v4, TypeScript strict mode.
3. **No Breaking Changes:** Never delete or alter existing components without migrating references.
4. **Git Safety:** Non-destructive operations only. Never force-push or reset without explicit human confirmation.

### UI & Styling Directives (Anti-Slop)
* Strictly follow `DESIGN.md`:
  * **Brand Colors:** Electric Speed Blue (`#0950F6`), Midnight Navy (`#052C87`), High-Voltage Neon Yellow (`#FFF12E`), Pure Optical White (`#FFFFFF`).
  * **Typography:** `Anton` (Display headlines), `"Bebas Neue"` (Subheadings, buttons, tags), `Outfit` (Body/UI text), `"Geist Mono"` (Prices, metrics, numbers).
  * **Icons:** Use Phosphor Icons (`@phosphor-icons/react` or SVG wrappers) with appropriate weights (`fill`, `bold`, `regular`).
  * **Prohibitions:** No emojis in UI headlines/metadata, no `Inter` font, no pure black (`#000000`), no fabricated metrics, no fake 3-column rows.

---

## 3. Agent Skills & Ecosystem

### Issue Tracker
GitHub issues via `gh` CLI. See `docs/agents/issue-tracker.md`.

### Triage Labels
Canonical 5-state triage labels. See `docs/agents/triage-labels.md`.

### Domain Docs
Single-context repository layout (`CONTEXT.md` + `docs/adr/`). See `docs/agents/domain.md`.

---

## 4. Migration Roadmap (Prototypes → Production React/Next.js)
The HTML prototypes under `docs/prototipos/` map to the following Next.js routes under `src/app/`:
* `index.html` → `/` (`src/app/page.tsx`)
* `envios-express.html` → `/servicios/envios-express` (`src/app/servicios/envios-express/page.tsx`)
* `envios-lowcost.html` → `/servicios/envios-lowcost` (`src/app/servicios/envios-lowcost/page.tsx`)
* `enviosflex.html` → `/servicios/enviosflex` (`src/app/servicios/enviosflex/page.tsx`)
* `plan-emprendedores.html` → `/servicios/plan-emprendedores` (`src/app/servicios/plan-emprendedores/page.tsx`)
* `cotizar-express.html` → `/cotizar/express` (`src/app/cotizar/express/page.tsx`)
* `cotizar-lowcost.html` → `/cotizar/lowcost` (`src/app/cotizar/lowcost/page.tsx`)
* `sobre-nosotros.html` → `/sobre-nosotros` (`src/app/sobre-nosotros/page.tsx`)
* `preguntas-frecuentes.html` → `/preguntas-frecuentes` (`src/app/preguntas-frecuentes/page.tsx`)
* `nuestras-redes.html` → `/nuestras-redes` (`src/app/nuestras-redes/page.tsx`)
* `contacto.html` → `/contacto` (`src/app/contacto/page.tsx`)
* `terminos-y-condiciones.html` → `/terminos-y-condiciones` (`src/app/terminos-y-condiciones/page.tsx`)
* `politica-de-privacidad.html` → `/politica-de-privacidad` (`src/app/politica-de-privacidad/page.tsx`)

