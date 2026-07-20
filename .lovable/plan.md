## Homepage build plan — Smart Poultry

Selected direction: **Living dashboard** (v3). It's the most brand-aligned option — uses the official Smart Poultry palette (Green #00665D, deep Green #003D38, Yellow #FEC309 as accent only) and Anuphan typography, and delivers the full section set the product context calls for. The other two directions either drifted off-brand (v1 used teal + Syne, wrong palette and typography) or covered fewer sections.

### Design foundation

Update `src/styles.css`:
- Add Google Fonts `@import` at the very top (before `@theme`) for Anuphan 400/500/600/700.
- Replace the placeholder oklch palette with Smart Poultry brand tokens converted to oklch:
  - `--brand` (Green #00665D), `--brand-deep` (#003D38), `--accent` (Yellow #FEC309)
  - Neutrals: white background, near-black foreground, soft surface for section bands, subtle border.
  - Wire `--primary` = brand, `--primary-foreground` = white, `--secondary`/`--muted`/`--accent` shadcn tokens to match.
- Set `--font-sans` to Anuphan with a system-sans fallback, register in `@theme` so Tailwind's `font-sans` picks it up.
- Apply Anuphan to `body` in `@layer base` so every component inherits it.

### Route + shell

Update `src/routes/__root.tsx`:
- Real head metadata: title "Smart Poultry — The AI Operating System for Modern Poultry Farms", matching description, og:title/description, og:type=website, twitter:card=summary_large_image. No og:image at root (per SEO rules).
- Add `<link rel="preconnect">` for Google Fonts.
- Leave shell/Outlet/Providers untouched.

Replace `src/routes/index.tsx` (in place — no new route, per the placeholder rule) with the homepage. Add page-specific `head()` with self-referential canonical/og:url.

### Homepage composition (`src/routes/index.tsx` + section components)

Build sections in this order, matching the chosen prototype's DOM/composition:

1. **Sticky top nav** — logo mark, links (Platform, Modules, AI & Vision, Power BI, Industries), EN language chip, yellow "Request Demo" CTA.
2. **Hero** — H1 "The AI Operating System for Modern Poultry Farms" (brand-green on "Modern Poultry Farms"), subhead, two CTAs (Explore Platform / Whitepaper), and a layered dashboard visual: window chrome, 3 KPI tiles (FCR 1.62, Mortality 2.1%, Avg Weight 2.34 kg), an inner product surface with a computer-vision status chip overlay ("CV Analysis: Active", bird distribution 94% uniform).
3. **Trusted-by strip** — 5 wordmarks in muted mono style.
4. **Problem vs Solution** — two-column split: left lists industry challenges with red ✕ tiles; right is a brand-green panel with yellow ✓ tiles listing Smart Poultry answers.
5. **Modules grid** — deep-green section, 12 modules in a 4-column bordered grid: Farm, House, Flock, Environmental, Feeding, Water, AI Analytics, Computer Vision, Power BI, Alerts, Cycle, Reports.
6. **Power BI showcase** — soft surface band, headline "From data to decisions in seconds", 2/3 + 1/3 layout: large bar chart card (Environmental Trend Analysis with Temp 24.6°C and Humidity 62% legend) plus two side cards (Ammonia 12 ppm; Growth trajectory +4.2%).
7. **Connectivity / LoRaWAN** — copy on the left with a Sensors→Gateway→Cloud AI flow; on the right a circular gateway diagram with animated dashed orbits and node dots.
8. **Outcomes band** — brand-green background, 4 accent-yellow metrics: Feed Waste ↓14%, Mortality ↓0.8%, FCR ↑5.2%, Visibility 100%.
9. **Final CTA** — centered "Ready to operate your farms with AI?" with yellow demo button.
10. **Footer** — brand line + Alareeb ICT credit, Platform and Company link columns, legal row.

Split into focused components under `src/components/home/`:
`SiteHeader`, `Hero`, `TrustedBy`, `ProblemSolution`, `ModulesGrid`, `PowerBIShowcase`, `Connectivity`, `Outcomes`, `FinalCTA`, `SiteFooter`. `index.tsx` composes them.

Use only semantic tokens (`bg-primary`, `bg-accent`, `text-foreground`, plus new `brand`, `brand-deep`, `accent` tokens registered in `@theme`). No hardcoded hex in JSX.

### Motion (CSS only, restrained)

- Hero fades/rises on mount via a small `@keyframes fade-up` utility.
- Computer-vision status dot: `animate-pulse`.
- LoRaWAN orbits: slow `animate-[spin_60s_linear_infinite]` on dashed rings.
- No parallax, no heavy scroll effects.

### Imagery

The prototype uses one `data-lov-image-placeholder` inside the hero dashboard for a "product visual surface." For the first build I'll render it as a lightweight SVG/CSS composition (mini charts, a house diagram, sensor pills) instead of generating a raster image — keeps the hero crisp, on-brand, and avoids stock-y AI photography. We can swap in a generated image later if you want.

### Out of scope for this turn

- No backend, Cloud, or forms wiring (the demo CTA is a link placeholder for now).
- No additional pages — future turns will design Platform, Modules, Power BI, Industries, Company, etc., each as its own TanStack route with its own `head()`.
- No i18n implementation — the EN chip is visual only for now.

### Verification

After building: run a Playwright screenshot of `http://localhost:8080/` at 1280×1800 and confirm the hero, modules grid, Power BI showcase, and outcomes band render correctly on brand.
