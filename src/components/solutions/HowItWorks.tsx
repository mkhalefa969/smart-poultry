import { useTranslation } from "react-i18next";
import {
  Radio,
  Router,
  Cloud,
  BrainCircuit,
  LineChart,
  Lightbulb,
  Cog,
  BarChart3,
  Boxes,
  ChevronRight,
  type LucideIcon,
} from "lucide-react";
import { Reveal, SectionHeading } from "./Reveal";

const STEPS: { key: string; icon: LucideIcon }[] = [
  { key: "sensors", icon: Radio },
  { key: "gateway", icon: Router },
  { key: "cloud", icon: Cloud },
  { key: "ai", icon: BrainCircuit },
  { key: "prediction", icon: LineChart },
  { key: "recommendation", icon: Lightbulb },
  { key: "automation", icon: Cog },
  { key: "bi", icon: BarChart3 },
  { key: "erp", icon: Boxes },
];

export function HowItWorks() {
  const { t } = useTranslation();

  return (
    <section id="how-it-works" className="bg-background py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow={t("solutions.how.eyebrow")}
          title={t("solutions.how.title")}
          subtitle={t("solutions.how.subtitle")}
        />

        <div className="relative mt-16">
          <div
            aria-hidden
            className="pointer-events-none absolute inset-x-0 top-8 hidden h-px bg-gradient-to-r from-transparent via-brand/30 to-transparent lg:block"
          />
          <ol className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {STEPS.map((step, i) => {
              const Icon = step.icon;
              return (
                <Reveal key={step.key} delay={i * 70}>
                  <li className="group relative flex h-full flex-col rounded-2xl border border-border bg-card p-6 shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:border-brand/40 hover:shadow-elevated">
                    <div className="flex items-center justify-between">
                      <span className="grid h-12 w-12 place-items-center rounded-xl bg-brand/10 text-brand transition-colors group-hover:bg-brand group-hover:text-primary-foreground">
                        <Icon className="h-6 w-6" strokeWidth={1.7} />
                      </span>
                      <span className="text-xs font-semibold tracking-[0.2em] text-muted-foreground">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                    </div>
                    <h3 className="mt-5 text-base font-semibold text-foreground">
                      {t(`solutions.how.steps.${step.key}.title`)}
                    </h3>
                    <p className="mt-2 text-sm leading-6 text-muted-foreground">
                      {t(`solutions.how.steps.${step.key}.desc`)}
                    </p>
                    {i < STEPS.length - 1 ? (
                      <ChevronRight
                        aria-hidden
                        className="absolute top-1/2 hidden h-5 w-5 -translate-y-1/2 text-brand/35 lg:block ltr:-right-4 rtl:-left-4 rtl:rotate-180"
                      />
                    ) : null}
                  </li>
                </Reveal>
              );
            })}
          </ol>
        </div>
      </div>
    </section>
  );
}
