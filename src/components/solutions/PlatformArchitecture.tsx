import { useTranslation } from "react-i18next";
import {
  Crown,
  BarChart3,
  Workflow,
  BrainCircuit,
  Cpu,
  ShieldCheck,
  type LucideIcon,
} from "lucide-react";
import { Reveal, SectionHeading } from "./Reveal";

const LAYERS: { key: string; icon: LucideIcon }[] = [
  { key: "executive", icon: Crown },
  { key: "bi", icon: BarChart3 },
  { key: "operations", icon: Workflow },
  { key: "ai", icon: BrainCircuit },
  { key: "iot", icon: Cpu },
  { key: "infrastructure", icon: ShieldCheck },
];

export function PlatformArchitecture() {
  const { t } = useTranslation();

  return (
    <section id="architecture" className="bg-background py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow={t("solutions.architecture.eyebrow")}
          title={t("solutions.architecture.title")}
          subtitle={t("solutions.architecture.subtitle")}
        />

        <div className="mx-auto mt-16 max-w-5xl space-y-4">
          {LAYERS.map((layer, i) => {
            const Icon = layer.icon;
            const emphasis = i === 0 || i === LAYERS.length - 1;
            return (
              <Reveal key={layer.key} delay={i * 80}>
                <div
                  style={{
                    width: `calc(100% - ${Math.abs(2.5 - i) * 2}%)`,
                  }}
                  className={`mx-auto grid gap-6 rounded-2xl border p-6 backdrop-blur transition-all duration-300 hover:-translate-y-1 hover:shadow-elevated sm:grid-cols-[minmax(0,240px)_1fr_1fr] sm:items-center sm:p-7 ${
                    emphasis
                      ? "border-brand/35 bg-brand-soft/70"
                      : "border-border bg-card"
                  }`}
                >
                  <div className="flex items-center gap-4">
                    <span className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-brand/10 text-brand">
                      <Icon className="h-6 w-6" strokeWidth={1.7} />
                    </span>
                    <h3 className="text-base font-bold text-foreground">
                      {t(`solutions.architecture.layers.${layer.key}.name`)}
                    </h3>
                  </div>
                  <div>
                    <div className="text-[11px] font-semibold uppercase tracking-[0.18em] text-muted-foreground">
                      {t("solutions.architecture.purposeLabel")}
                    </div>
                    <p className="mt-1.5 text-sm leading-6 text-muted-foreground">
                      {t(`solutions.architecture.layers.${layer.key}.purpose`)}
                    </p>
                  </div>
                  <div>
                    <div className="text-[11px] font-semibold uppercase tracking-[0.18em] text-brand">
                      {t("solutions.architecture.valueLabel")}
                    </div>
                    <p className="mt-1.5 text-sm font-medium leading-6 text-foreground">
                      {t(`solutions.architecture.layers.${layer.key}.value`)}
                    </p>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
