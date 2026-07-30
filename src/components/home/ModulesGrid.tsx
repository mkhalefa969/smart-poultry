import { useTranslation } from "react-i18next";

const MODULE_KEYS = [
  {
    key: "iot",
    icon: (
      <path d="M4 12a8 8 0 0 1 16 0M7 12a5 5 0 0 1 10 0M10 12a2 2 0 1 1 4 0M12 20v-4" strokeLinecap="round" />
    ),
  },
  {
    key: "vision",
    icon: (
      <>
        <circle cx="12" cy="12" r="3.2" />
        <path d="M2 12c2.5-5 6-7 10-7s7.5 2 10 7c-2.5 5-6 7-10 7s-7.5-2-10-7Z" strokeLinecap="round" strokeLinejoin="round" />
      </>
    ),
  },
  {
    key: "ai",
    icon: (
      <path d="M12 2v3M12 19v3M4.2 4.2l2.1 2.1M17.7 17.7l2.1 2.1M2 12h3M19 12h3M4.2 19.8l2.1-2.1M17.7 6.3l2.1-2.1M8 12a4 4 0 1 1 8 0 4 4 0 0 1-8 0Z" strokeLinecap="round" />
    ),
  },
  {
    key: "cycle",
    icon: (
      <path d="M12 3v4M12 21v-4M3 12h4M21 12h-4M6.5 6.5l2.8 2.8M17.5 17.5l-2.8-2.8M6.5 17.5l2.8-2.8M17.5 6.5l-2.8 2.8" strokeLinecap="round" />
    ),
  },
  {
    key: "operations",
    icon: (
      <path d="M3 21h18M5 21V10l7-5 7 5v11M10 21v-6h4v6" strokeLinejoin="round" />
    ),
  },
  {
    key: "alerts",
    icon: (
      <path d="M6 8a6 6 0 0 1 12 0c0 7 3 8 3 8H3s3-1 3-8ZM10 21a2 2 0 0 0 4 0" strokeLinecap="round" strokeLinejoin="round" />
    ),
  },
] as const;

const CHIP_KEYS = [
  "powerBi",
  "weighing",
  "waterFeed",
  "health",
  "envControl",
  "access",
  "biosecurity",
  "energy",
  "reports",
] as const;

export function ModulesGrid() {
  const { t } = useTranslation();

  return (
    <section id="modules" className="relative bg-muted/40 py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-brand">
            {t("modules.eyebrow")}
          </span>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            {t("modules.title")}
          </h2>
          <p className="mt-4 text-base text-muted-foreground">
            {t("modules.subtitle")}
          </p>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {MODULE_KEYS.map((m) => (
            <article
              key={m.key}
              className="group relative overflow-hidden rounded-2xl border border-border bg-card p-7 transition-all hover:-translate-y-1 hover:border-brand/30 hover:shadow-elevated"
            >
              <div
                aria-hidden
                className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-brand/5 transition-transform group-hover:scale-125"
              />
              <div className="relative grid h-12 w-12 place-items-center rounded-xl bg-brand text-highlight">
                <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="1.8">
                  {m.icon}
                </svg>
              </div>
              <h3 className="relative mt-5 text-lg font-semibold text-foreground">
                {t(`modules.items.${m.key}.title`)}
              </h3>
              <p className="relative mt-2 text-sm leading-relaxed text-muted-foreground">
                {t(`modules.items.${m.key}.desc`)}
              </p>
              <span className="relative mt-5 inline-flex items-center gap-1 text-sm font-medium text-brand">
                {t("modules.learnMore")}
                <svg
                  viewBox="0 0 20 20"
                  className="h-4 w-4 transition-transform group-hover:translate-x-1 rtl:rotate-180 rtl:group-hover:-translate-x-1"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path d="M5 10h10M11 6l4 4-4 4" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </span>
            </article>
          ))}
        </div>

        <div className="mt-10 flex flex-wrap items-center justify-center gap-2">
          <span className="text-xs uppercase tracking-widest text-muted-foreground">
            {t("modules.plus")}
          </span>
          {CHIP_KEYS.map((key) => (
            <span
              key={key}
              className="rounded-full border border-border bg-card px-3 py-1.5 text-xs font-medium text-foreground/70"
            >
              {t(`modules.chips.${key}`)}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}