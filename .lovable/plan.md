
## Benchmark: what PoultrySync does well

Looking at poultrysync.com, the qualities that make it feel premium and credible:

1. **Bold gradient hero** — deep green → teal → soft blue diagonal, with a large custom isometric illustration (rooster + dashboard monitors + gears) on the left and a short, benefit-led headline on the right.
2. **Single, confident CTA** — "Request Demo" repeated in nav and hero (green pill on white / white pill on green).
3. **Clear top nav IA** — Home · Solutions · Products · Add‑ons · Services · Partners · عربي · Request Demo.
4. **Generous whitespace, oversized type** — headline is big, line-height loose, body copy short.
5. **Custom illustrations, not stock UI mockups** — every section has a bespoke isometric scene (chickens, farms, sensors, dashboards) instead of generic device frames.
6. **Trusted-by strip** right under the hero for instant credibility.
7. **Section rhythm** — alternating light/dark bands, each with illustration on one side and a 2–4 bullet feature list on the other.

## What our current homepage is missing

- No hero illustration — it's a CSS "dashboard" mock that reads as flat and generic.
- Nav lacks the product-led IA (Solutions/Products/Add-ons/Services/Partners).
- No trusted-by strip, no bespoke section illustrations, weak visual hierarchy between sections.
- Modules grid is 12 tiny cards — too dense, no storytelling.
- Green is applied as flat blocks, not as the signature gradient that gives PoultrySync its identity.

## Redesign plan (homepage only)

### 1. Brand tokens (styles.css)
- Add a signature gradient: `--gradient-brand: linear-gradient(135deg, #00665D 0%, #0A8C7E 55%, #4FB3A9 100%)` plus a soft-blue tail for hero backgrounds.
- Add depth tokens: elevated card shadow, soft outer glow for illustrations, rounded-3xl radius for hero art frames.
- Keep Anuphan; tighten heading scale (H1 clamp 40→72px), body 16→18px, lifted line-height.

### 2. New top navigation
- Slim white nav on gradient hero, dark nav on scroll.
- Items: **Solutions · Modules · Power BI · Connectivity · Partners · العربية**, plus yellow "Request Demo" pill (Smart Poultry uses green + yellow, so demo CTA stays yellow to differentiate from PoultrySync).

### 3. Hero (rebuild)
- Full-bleed gradient background (brand green → teal → soft aqua) with subtle grain.
- Left: custom **isometric hero illustration** generated as a single asset — poultry house with sensors, tablet showing dashboard, small flock, LoRaWAN waves. Framed with soft shadow, floats slightly.
- Right: headline "Turn every poultry house into an intelligent, connected operation." · one-line subhead · two CTAs (yellow "Request a Demo", ghost "Watch overview").
- Bottom of hero: thin curved white transition (matches PoultrySync's swoosh).

### 4. Trusted-by strip
- Neutral band right after hero, 5–6 partner/customer logos in muted grey.

### 5. Problem → Solution split
- Two-column band: left = "Traditional farms lose margin to blind spots" with 3 pain bullets; right = "Smart Poultry gives you one intelligent layer" with 3 outcome bullets. Small supporting icons in brand green.

### 6. Core Modules — redesigned
- Replace the 12-tile wall with a **featured 6-card grid** (IoT Monitoring, Computer Vision, AI Insights, Operational Cycle, Farm Ops, Smart Alerts) using large icon + short paragraph + "Learn more" link.
- Below: compact chip row listing the other modules ("+ Power BI Analytics, Weighing, Water & Feed, Health, Environment, Access…").

### 7. Power BI showcase
- Dark band. Left: real-looking dashboard screenshot (illustrated mock — production/mortality/FCR tiles). Right: 3-bullet value list (real-time KPIs, drill-down, exportable reports).

### 8. Connectivity diagram
- Light band with a cleaner LoRaWAN illustration: sensors → gateway → cloud → dashboard, with subtle animated pulse dots.

### 9. Outcomes / impact
- 4 stat cards on gradient background: mortality ↓, FCR ↑, labor hours saved, alerts response time.

### 10. Final CTA band
- Gradient again, centered: "Ready to modernize your farms?" + yellow "Request a Demo" + secondary "Talk to sales".

### 11. Footer
- Multi-column: Product, Company, Resources, Contact + Alareeb ICT attribution + language toggle.

## Assets to generate
- 1 hero isometric illustration (poultry house + dashboard + sensors + flock) — brand green/yellow palette, on transparent background.
- 1 Power BI dashboard mock illustration.
- 6 module icons (line + brand green, consistent stroke).
- 5–6 grayscale partner logo placeholders (or use text).

## Out of scope
- No backend, no new routes, no auth. Homepage `/` only.
- No changes to routing, SEO metadata structure (only copy tweaks in existing head()).

## Technical notes
- All work stays inside `src/routes/index.tsx`, `src/routes/__root.tsx` (nav/head), `src/components/home/*`, `src/styles.css`, and new files under `src/assets/`.
- Gradient + shadow + radius exposed as semantic tokens in `styles.css`; no hardcoded hex in components.
- Generated illustrations imported as ES6 image imports.

Approve and I'll build it.
