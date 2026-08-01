import { useState } from "react";
import { useTranslation } from "react-i18next";
import { AlertTriangle, Check, TrendingUp } from "lucide-react";
import { Reveal, SectionHeading } from "./Reveal";

const TABS = ["broilers", "layers", "parent", "hatcheries"] as const;

type Kpi = { label: string; value: string; delta: string };

const CURVES: Record<string, number[]> = {
  broilers: [12, 22, 34, 48, 60, 72, 84, 93],
  layers: [40, 68, 88, 95, 93, 90, 86, 80],
  parent: [30, 52, 70, 82, 88, 90, 87, 83],
  hatcheries: [64, 70, 76, 82, 86, 88, 90, 87],
};

export function SolutionsByOperation() {
  const { t } = useTranslation();
  const [active, setActive] = useState<(typeof TABS)[number]>("broilers");
  const base = `solutions.operations.tabs.${active}`;

  const challenges = t(`${base}.challenges`, {
    returnObjects: true,
  }) as string[];
  const outcomes = t(`${base}.outcomes`, { returnObjects: true }) as string[];
  const features = t(`${base}.features`, { returnObjects: true }) as string[];
  const kpis = t(`${base}.kpis`, { returnObjects: true }) as Kpi[];
  const curve = CURVES[active];

  return (
    <section id="operations" className="bg-brand-soft/60 py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow={t("solutions.operations.eyebrow")}
          title={t("solutions.operations.title")}
          subtitle={t("solutions.operations.subtitle")}
        />

        <Reveal className="mt-12">
          <div
            role="tablist"
            aria-label={t("solutions.operations.title")}
            className="mx-auto flex max-w-3xl flex-wrap justify-center gap-2 rounded-full border border-border bg-card/80 p-2 backdrop-blur"
          >
            {TABS.map((tab) => (
              <button
                key={tab}
                type="button"
                role="tab"
                aria-selected={active === tab}
                onClick={() => setActive(tab)}
                className={`rounded-full px-5 py-2.5 text-sm font-semibold transition-all ${
                  active === tab
                    ? "bg-brand text-primary-foreground shadow-sm"
                    : "text-muted-foreground hover:text-brand"
                }`}
              >
                {t(`solutions.operations.tabs.${tab}.name`)}
              </button>
            ))}
          </div>
        </Reveal>

        <div key={active} className="mt-12 grid gap-8 lg:grid-cols-2">
          {/* Left */}
          <div className="animate-fade-up rounded-3xl border border-border bg-card p-8 shadow-sm sm:p-10">
            <h3 className="text-2xl font-bold tracking-tight text-foreground">
              {t(`${base}.headline`)}
            </h3>

            <div className="mt-8">
              <div className="text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">
                {t("solutions.operations.challengesLabel")}
              </div>
              <ul className="mt-4 space-y-3">
                {challenges.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <AlertTriangle className="mt-0.5 h-4 w-4 shrink-0 text-destructive/80" />
                    <span className="text-sm leading-6 text-muted-foreground">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-8">
              <div className="text-xs font-semibold uppercase tracking-[0.2em] text-brand">
                {t("solutions.operations.outcomesLabel")}
              </div>
              <ul className="mt-4 space-y-3">
                {outcomes.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <TrendingUp className="mt-0.5 h-4 w-4 shrink-0 text-brand" />
                    <span className="text-sm font-medium leading-6 text-foreground">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-8 border-t border-border pt-6">
              <div className="text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">
                {t("solutions.operations.featuresLabel")}
              </div>
              <div className="mt-4 flex flex-wrap gap-2">
                {features.map((f) => (
                  <span
                    key={f}
                    className="inline-flex items-center gap-1.5 rounded-full border border-border bg-secondary px-3 py-1.5 text-xs font-medium text-secondary-foreground"
                  >
                    <Check className="h-3.5 w-3.5 text-brand" />
                    {f}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Right — KPI preview */}
          <div className="animate-fade-up rounded-3xl border border-brand/15 bg-gradient-brand p-8 text-white shadow-elevated [animation-delay:120ms] sm:p-10">
            <div className="flex items-center justify-between">
              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-highlight">
                {t("solutions.operations.previewLabel")}
              </span>
              <span className="flex items-center gap-2 text-xs text-white/70">
                <span className="h-2 w-2 animate-pulse rounded-full bg-highlight" />
                Live
              </span>
            </div>

            <div className="mt-6 grid grid-cols-2 gap-4">
              {kpis.map((kpi) => (
                <div
                  key={kpi.label}
                  className="rounded-2xl border border-white/15 bg-white/8 p-4 backdrop-blur transition-transform hover:-translate-y-1"
                >
                  <div className="text-xs text-white/65">{kpi.label}</div>
                  <div className="mt-2 text-2xl font-bold text-white">
                    {kpi.value}
                  </div>
                  <div className="mt-1 text-xs font-semibold text-highlight">
                    {kpi.delta}
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-6 rounded-2xl border border-white/15 bg-white/8 p-5 backdrop-blur">
              <div className="text-xs font-medium text-white/70">
                {t(`${base}.chartLabel`)}
              </div>
              <div className="mt-5 flex h-32 items-end gap-2">
                {curve.map((v, i) => (
                  <div
                    key={i}
                    style={{ height: `${v}%`, animationDelay: `${i * 60}ms` }}
                    className="animate-fade-up flex-1 rounded-t-md bg-gradient-to-t from-highlight/30 to-highlight"
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
