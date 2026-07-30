import connectivityIllustration from "@/assets/connectivity-illustration.png";
import { useTranslation } from "react-i18next";

const LAYER_KEYS = ["edge", "network", "cloud", "apps"] as const;

export function Connectivity() {
  const { t } = useTranslation();

  return (
    <section id="connectivity" className="relative bg-background py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-brand">
            {t("connectivity.eyebrow")}
          </span>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            {t("connectivity.title")}
          </h2>
          <p className="mt-4 text-base text-muted-foreground">
            {t("connectivity.subtitle")}
          </p>
        </div>

        {/* Content Grid */}
        <div className="mt-14 grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
          {/* Illustration Column */}
          <div className="relative">
            <div
              aria-hidden
              className="absolute inset-0 -m-4 rounded-[2rem] bg-brand/5"
            />
            <img
              src={connectivityIllustration}
              alt={t("connectivity.alt")}
              width={1408}
              height={912}
              loading="lazy"
              className="relative w-full"
            />
          </div>

          {/* Steps List Column */}
          <ol className="space-y-4">
            {LAYER_KEYS.map((key, i) => (
              <li
                key={key}
                className="flex gap-5 rounded-2xl border border-border bg-card p-5 transition-colors hover:border-brand/30"
              >
                <div className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-brand text-sm font-bold text-highlight">
                  {String(i + 1).padStart(2, "0")}
                </div>
                <div>
                  <div className="text-sm font-semibold uppercase tracking-wider text-brand">
                    {t(`connectivity.layers.${key}.title`)}
                  </div>
                  <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                    {t(`connectivity.layers.${key}.desc`)}
                  </p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}