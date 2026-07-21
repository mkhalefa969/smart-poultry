# Bilingual (EN / AR) Architecture for Smart Poultry

Add production-ready i18n with i18next + react-i18next, SSR-safe under TanStack Start, RTL support for Arabic, and a working header switcher — no visual redesign.

## 1. Dependencies

Install (via `bun add`):
- `i18next`
- `react-i18next`
- `i18next-browser-languagedetector`

(Remove the placeholder files `src/i18n/en.json.tsx`, `src/i18n/ar.json.tsx`, `src/i18n/index.tsx` — they are `.tsx` holding JSON, which breaks imports.)

## 2. Translation files

Create real JSON files:

- `src/i18n/locales/en.json`
- `src/i18n/locales/ar.json`

Namespaced by section (all currently hardcoded strings extracted):

```
{
  "header": { "home", "solutions", "caseStudies", "pricing", "contact", "demo", "language" },
  "hero":   { "badge", "titleLead", "titleHighlight", "titleTail", "subtitle",
              "ctaDemo", "ctaExplore",
              "stats": { "farms", "dataPoints", "mortality" } },
  "trustedBy": { "heading" },
  "problemSolution": { ... all strings from ProblemSolution.tsx ... },
  "footer": { "tagline", "columns": { "platform": {...}, "solutions": {...},
              "company": {...}, "resources": {...} },
              "rights", "privacy", "terms", "security" },
  "common": { "languageLabelEn": "EN", "languageLabelAr": "العربية" }
}
```

Arabic file mirrors the same key tree with translated values.

## 3. i18n setup (SSR-safe)

Create `src/i18n/config.ts`:

- Exports `SUPPORTED_LANGUAGES = ['en','ar'] as const`, `type Language`, `DEFAULT_LANGUAGE = 'en'`, `RTL_LANGUAGES = ['ar']`, and `isRtl(lang)`.
- Exports `i18n` instance built with `initReactI18next` (no `LanguageDetector` at module scope — detector is a browser API).
- `i18n.init({ resources: { en, ar }, lng: DEFAULT_LANGUAGE, fallbackLng: 'en', interpolation: { escapeValue: false }, react: { useSuspense: false } })`.
- Resources imported statically from the JSON files so both SSR and client have the same bundle → no hydration mismatch.

This module is safe to import from server or client: initialization is synchronous, deterministic, uses the default language on both sides.

## 4. Client-only language detection

Create `src/i18n/client.ts` with a `syncClientLanguage()` function:

- Guarded by `typeof window !== 'undefined'`.
- Reads `localStorage.getItem('lang')`, falls back to `navigator.language` prefix, then `DEFAULT_LANGUAGE`.
- Validates against `SUPPORTED_LANGUAGES`.
- Calls `i18n.changeLanguage(lang)` and updates `document.documentElement.lang` + `document.documentElement.dir` (`rtl` for `ar`, else `ltr`).
- Exports `setLanguage(lang)` which persists to `localStorage` and applies the same doc updates.

Called from `useEffect` — never at module scope — so SSR renders English, then the client swaps if needed. Matches the pattern in the `tanstack-execution-model` knowledge card.

## 5. Provider wiring in `__root.tsx`

- Import `i18n` from `src/i18n/config` (side-effect init).
- Wrap `<Outlet />` in `<I18nextProvider i18n={i18n}>` inside `RootComponent`.
- In `RootComponent`, add a `useEffect(() => { syncClientLanguage(); }, [])` to hydrate the stored language.
- Keep `<html lang="en">` in `RootShell` as the SSR default (client effect updates it after hydration; matches the SSR content, so no mismatch warning).

No changes to `src/start.ts` or `src/server.ts` — nothing here needs a server boundary.

## 6. Language switcher hook + header

Create `src/i18n/useLanguage.ts`:

```ts
export function useLanguage() {
  const { i18n } = useTranslation();
  const current = (i18n.resolvedLanguage ?? 'en') as Language;
  return { current, setLanguage, isRtl: isRtl(current) };
}
```

Update `SiteHeader.tsx`:

- Replace the static `EN | العربية` button with two buttons (or a segmented control preserving the exact same visual — just make each half clickable). Same classes, same layout, no restyle.
- Clicking each calls `setLanguage('en' | 'ar')`.
- Replace hardcoded nav labels with `t('header.*')`.

## 7. Translate existing components

Only text substitution — no structural or style changes:

- `SiteHeader.tsx` — nav items + demo CTA + language toggle.
- `Hero.tsx` — badge, headline (split into lead / highlight / tail keys so the yellow `intelligent` accent still works in both languages), subtitle, CTAs, stat labels/values.
- `TrustedBy.tsx` — heading. (Partner names remain literal.)
- `ProblemSolution.tsx` — all copy.
- `SiteFooter.tsx` — tagline, column titles, link labels, legal links, rights notice.

Other homepage components (`ModulesGrid`, `PowerBIShowcase`, `Connectivity`, `Outcomes`, `FinalCTA`, `Challenge`) are out of scope per the request (only the five listed).

## 8. RTL

- `syncClientLanguage` + `setLanguage` set `document.documentElement.dir`.
- Tailwind's default utilities are largely direction-neutral; existing layouts use flex/grid which mirror automatically under `dir="rtl"`. No class changes — request specifies no layout modification. (If a user later reports mirrored icon issues, they can be addressed with logical properties, but that's beyond this scope.)

## 9. Cleanup

Delete the invalid placeholder files:
- `src/i18n/en.json.tsx`
- `src/i18n/ar.json.tsx`
- `src/i18n/index.tsx`

## Files touched

Created: `src/i18n/config.ts`, `src/i18n/client.ts`, `src/i18n/useLanguage.ts`, `src/i18n/locales/en.json`, `src/i18n/locales/ar.json`.
Modified: `src/routes/__root.tsx`, `src/components/home/SiteHeader.tsx`, `src/components/home/Hero.tsx`, `src/components/home/TrustedBy.tsx`, `src/components/home/ProblemSolution.tsx`, `src/components/home/SiteFooter.tsx`.
Deleted: three old `src/i18n/*.tsx` files.

## Why this is SSR-safe

- i18next initializes synchronously at module load with English resources on both server and client → identical first render → no hydration mismatch and no 500s.
- `LanguageDetector` and all `localStorage` / `document` access live in a `useEffect` after hydration.
- No `process.env`, no server-only APIs; nothing added to `start.ts` / `server.ts`.

## Post-implementation explainer (delivered in chat)

1. **Where i18n is initialized** — `src/i18n/config.ts`, imported by `src/routes/__root.tsx`; the `<I18nextProvider>` wraps the app in `RootComponent`.
2. **Why that's correct for TanStack Start** — module-scope init with static resources is deterministic on server and client, so SSR output matches the first client render. Browser-only detection runs in `useEffect`, respecting the execution-model rules (no `window`/`localStorage` during SSR).
3. **Adding languages** — drop `src/i18n/locales/<code>.json`, add the code to `SUPPORTED_LANGUAGES` (and `RTL_LANGUAGES` if applicable), register it in `resources` in `config.ts`. Optionally expose it in the switcher.
4. **Translating new components** — `const { t } = useTranslation();` then `{t('section.key')}`. Add matching keys to both locale files.
