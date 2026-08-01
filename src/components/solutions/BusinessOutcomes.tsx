import { useTranslation } from "react-i18next";
import {
  Wheat,
  HeartPulse,
  Scale,
  Gauge,
  Eye,
  Zap,
  SaudiRiyal,
  type LucideIcon,
} from "lucide-react";
import { Reveal, SectionHeading } from "./Reveal";

const ITEMS: { key: string; icon: LucideIcon }[] = [
  { key: "feed", icon: Wheat },
  { key: "mortality", icon: HeartPulse },
  { key: "fcr", icon: Scale },
  { key: "productivity", icon: Gauge },
  { key: "visibility", icon: Eye },
  { key: "speed", icon: Zap },
  { key: "profit", icon: SaudiRiyal },
];

export function BusinessOutcomes() {
  const { t } = useTranslation();

  return (
    <section id="business-outcomes" className="bg-background py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow={t("solutions.outcomes.eyebrow")}
          title={t("solutions.outcomes.title")}
          subtitle={t("solutions.outcomes.subtitle")}
        />

        <div className="mt-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {ITEMS.map((item, i) => {
            const Icon = item.icon;
            const featured = item.key === "profit";
            return (
              <Reveal
                key={item.key}
                delay={i * 80}
                className={featured ? "sm:col-span-2 lg:col-span-1" : ""}
              >
                <div
                  className={`group h-full rounded-2xl border p-7 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-elevated ${
                    featured
                      ? "border-brand/35 bg-gradient-brand text-white"
                      : "border-border bg-card hover:border-brand/40"
                  }`}
                >
                  <span
                    className={`grid h-12 w-12 place-items-center rounded-xl transition-transform duration-300 group-hover:scale-110 ${
                      featured
                        ? "bg-white/15 text-highlight"
                        : "bg-brand/10 text-brand"
                    }`}
                  >
                    <Icon className="h-6 w-6" strokeWidth={1.7} />
                  </span>
                  <div
                    className={`mt-6 text-4xl font-bold tracking-tight ${
                      featured ? "text-highlight" : "text-brand"
                    }`}
                  >
                    {t(`solutions.outcomes.items.${item.key}.value`)}
                  </div>
                  <div
                    className={`mt-2 text-sm font-semibold ${
                      featured ? "text-white" : "text-foreground"
                    }`}
                  >
                    {t(`solutions.outcomes.items.${item.key}.label`)}
                  </div>
                  <p
                    className={`mt-2 text-xs leading-6 ${
                      featured ? "text-white/70" : "text-muted-foreground"
                    }`}
                  >
                    {t(`solutions.outcomes.items.${item.key}.desc`)}
                  </p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
