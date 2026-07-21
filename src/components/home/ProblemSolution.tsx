import {
  Bird,
  Thermometer,
  Wheat,
  Droplets,
  Cpu,
  BrainCircuit,
  ArrowRight,
} from "lucide-react";
import { useTranslation } from "react-i18next";

export function ProblemSolution() {
  const { t } = useTranslation();

  const operations = [
    { icon: Bird, key: "bird" },
    { icon: Thermometer, key: "env" },
    { icon: Wheat, key: "feed" },
    { icon: Droplets, key: "water" },
  ] as const;

  const intelligenceKeys = ["iot", "cv", "ai", "alerts", "bi", "opt"] as const;
  const pillarKeys = ["iot", "cv", "ai", "bi", "auto"] as const;

  return (
    <section id="solutions" className="bg-background py-28">
      <div className="mx-auto max-w-7xl px-6">
        {/* Header */}
        <div className="mx-auto max-w-3xl text-center">
          <span className="text-sm font-semibold uppercase tracking-[0.25em] text-brand">
            {t("problemSolution.eyebrow")}
          </span>

          <h2 className="mt-5 text-5xl font-bold tracking-tight text-foreground">
            {t("problemSolution.titleLead")}
            <span className="block text-brand">
              {t("problemSolution.titleAccent")}
            </span>
          </h2>

          <p className="mt-6 text-lg leading-8 text-muted-foreground">
            {t("problemSolution.subtitle")}
          </p>
        </div>

        {/* Content */}
        <div className="mt-20 grid items-center gap-10 lg:grid-cols-[1fr_220px_1fr]">
          {/* Left */}
          <div className="rounded-3xl border border-border bg-card p-10">
            <h3 className="text-2xl font-bold text-foreground">
              {t("problemSolution.left.title")}
            </h3>

            <p className="mt-3 text-muted-foreground">
              {t("problemSolution.left.subtitle")}
            </p>

            <div className="mt-10 space-y-6">
              {operations.map((item) => {
                const Icon = item.icon;
                return (
                  <div key={item.key} className="flex items-start gap-5">
                    <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-brand/10">
                      <Icon className="h-7 w-7 text-brand" />
                    </div>

                    <div>
                      <h4 className="text-lg font-semibold">
                        {t(`problemSolution.left.items.${item.key}.title`)}
                      </h4>

                      <p className="mt-2 text-sm leading-7 text-muted-foreground">
                        {t(`problemSolution.left.items.${item.key}.description`)}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Center Platform */}
          <div className="hidden lg:flex flex-col items-center justify-center">
            <div className="rounded-3xl border border-brand/20 bg-white p-8 shadow-xl">
              <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-brand text-white">
                <BrainCircuit className="h-10 w-10" />
              </div>

              <h3 className="mt-6 text-center text-xl font-bold">
                {t("problemSolution.center.title")}
              </h3>

              <p className="mt-2 text-center text-sm text-muted-foreground">
                {t("problemSolution.center.subtitle")}
              </p>

              <div className="mt-6 space-y-2 text-center text-sm">
                {pillarKeys.map((k) => (
                  <div key={k}>{t(`problemSolution.center.pillars.${k}`)}</div>
                ))}
              </div>
            </div>
          </div>

          {/* Right */}
          <div className="rounded-3xl bg-gradient-brand p-10 text-white shadow-elevated">
            <div className="flex items-center gap-4">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white text-brand">
                <BrainCircuit className="h-8 w-8" />
              </div>

              <div>
                <h3 className="text-2xl font-bold">
                  {t("problemSolution.right.title")}
                </h3>

                <p className="mt-2 text-white/80">
                  {t("problemSolution.right.subtitle")}
                </p>
              </div>
            </div>

            <div className="mt-10 space-y-6">
              {intelligenceKeys.map((k) => (
                <div key={k} className="flex items-center gap-4">
                  <ArrowRight className="h-5 w-5 text-highlight" />
                  <span className="text-white/90">
                    {t(`problemSolution.right.items.${k}`)}
                  </span>
                </div>
              ))}
            </div>

            <div className="mt-12 rounded-2xl bg-white/10 p-6 backdrop-blur">
              <div className="flex items-center gap-4">
                <Cpu className="h-10 w-10 text-highlight" />

                <div>
                  <h4 className="font-semibold">
                    {t("problemSolution.right.footerTitle")}
                  </h4>

                  <p className="mt-2 text-sm leading-6 text-white/80">
                    {t("problemSolution.right.footerText")}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
