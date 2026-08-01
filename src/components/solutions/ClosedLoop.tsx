import { useTranslation } from "react-i18next";
import {
  Eye,
  BrainCircuit,
  LineChart,
  Lightbulb,
  Cog,
  RefreshCw,
  type LucideIcon,
} from "lucide-react";
import { Reveal, SectionHeading } from "./Reveal";

const STEPS: { key: string; icon: LucideIcon }[] = [
  { key: "observe", icon: Eye },
  { key: "understand", icon: BrainCircuit },
  { key: "predict", icon: LineChart },
  { key: "recommend", icon: Lightbulb },
  { key: "automate", icon: Cog },
  { key: "improve", icon: RefreshCw },
];

export function ClosedLoop() {
  const { t } = useTranslation();

  return (
    <section
      id="closed-loop"
      className="relative overflow-hidden bg-gradient-brand py-24 text-white"
    >
      <div
        aria-hidden
        className="absolute inset-0 opacity-60"
        style={{ backgroundImage: "var(--gradient-glow)" }}
      />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          tone="dark"
          eyebrow={t("solutions.loop.eyebrow")}
          title={t("solutions.loop.title")}
          subtitle={t("solutions.loop.subtitle")}
        />

        <div className="relative mt-16">
          <div
            aria-hidden
            className="pointer-events-none absolute inset-x-6 top-9 hidden border-t border-dashed border-highlight/35 lg:block"
          />
          <ol className="grid gap-5 sm:grid-cols-2 lg:grid-cols-6">
            {STEPS.map((step, i) => {
              const Icon = step.icon;
              return (
                <Reveal key={step.key} delay={i * 90}>
                  <li className="group relative flex h-full flex-col items-center rounded-2xl border border-white/15 bg-white/8 p-6 text-center backdrop-blur transition-all duration-300 hover:-translate-y-1.5 hover:border-highlight/40">
                    <span className="relative grid h-14 w-14 place-items-center rounded-full bg-highlight/15 text-highlight">
                      <span
                        aria-hidden
                        className="absolute inset-0 rounded-full bg-highlight/20 blur-md transition-opacity duration-300 group-hover:opacity-100"
                      />
                      <Icon className="relative h-6 w-6" strokeWidth={1.7} />
                    </span>
                    <h3 className="mt-5 text-sm font-semibold text-white">
                      {t(`solutions.loop.steps.${step.key}.title`)}
                    </h3>
                    <p className="mt-2 text-xs leading-6 text-white/65">
                      {t(`solutions.loop.steps.${step.key}.desc`)}
                    </p>
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
