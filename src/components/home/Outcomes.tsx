import { useTranslation } from "react-i18next";

const STAT_KEYS = ["mortality", "fcr", "reporting", "alert"] as const;

export function Outcomes() {
  const { t } = useTranslation();

  return (
    <section id="outcomes" className="relative overflow-hidden bg-gradient-brand py-24 text-white">
      <div aria-hidden className="absolute inset-0 opacity-50" style={{ backgroundImage: "var(--gradient-glow)" }} />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-highlight">
            {t("outcomes.eyebrow")}
          </span>
          <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
            {t("outcomes.title")}
          </h2>
        </div>

        <div className="mt-14 grid grid-cols-2 gap-4 lg:grid-cols-4 lg:gap-6">
          {STAT_KEYS.map((key) => (
            <div
              key={key}
              className="rounded-2xl border border-white/15 bg-white/5 p-6 backdrop-blur transition-transform hover:-translate-y-1"
            >
              <div className="text-4xl font-bold text-highlight lg:text-5xl">
                {t(`outcomes.stats.${key}.value`)}
              </div>
              <div className="mt-3 text-sm font-semibold">
                {t(`outcomes.stats.${key}.label`)}
              </div>
              <p className="mt-1 text-xs leading-relaxed text-white/70">
                {t(`outcomes.stats.${key}.desc`)}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}