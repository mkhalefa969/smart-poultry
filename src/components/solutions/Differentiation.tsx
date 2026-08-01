import { useTranslation } from "react-i18next";
import { X, Check, ArrowDown } from "lucide-react";
import { Reveal, SectionHeading } from "./Reveal";

export function Differentiation() {
  const { t } = useTranslation();
  const legacy = t("solutions.difference.legacy.items", {
    returnObjects: true,
  }) as string[];
  const smart = t("solutions.difference.smart.items", {
    returnObjects: true,
  }) as string[];

  return (
    <section id="differentiation" className="bg-brand-soft/60 py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow={t("solutions.difference.eyebrow")}
          title={t("solutions.difference.title")}
          subtitle={t("solutions.difference.subtitle")}
        />

        <div className="mx-auto mt-16 grid max-w-5xl items-stretch gap-6 lg:grid-cols-[1fr_auto_1fr]">
          <Reveal>
            <div className="h-full rounded-3xl border border-border bg-card p-8 opacity-90">
              <h3 className="text-lg font-semibold text-muted-foreground">
                {t("solutions.difference.legacy.title")}
              </h3>
              <ul className="mt-6 space-y-3">
                {legacy.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="mt-0.5 grid h-6 w-6 shrink-0 place-items-center rounded-full bg-destructive/10 text-destructive">
                      <X className="h-3.5 w-3.5" />
                    </span>
                    <span className="text-sm leading-6 text-muted-foreground">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>

          <div className="flex items-center justify-center">
            <span className="grid h-12 w-12 place-items-center rounded-full border border-brand/30 bg-background">
              <ArrowDown className="h-5 w-5 text-brand lg:-rotate-90 rtl:lg:rotate-90" />
            </span>
          </div>

          <Reveal delay={120}>
            <div className="h-full rounded-3xl border border-brand/30 bg-gradient-brand p-8 text-white shadow-elevated">
              <h3 className="text-lg font-semibold text-highlight">
                {t("solutions.difference.smart.title")}
              </h3>
              <ul className="mt-6 space-y-3">
                {smart.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="mt-0.5 grid h-6 w-6 shrink-0 place-items-center rounded-full bg-highlight/15 text-highlight">
                      <Check className="h-3.5 w-3.5" />
                    </span>
                    <span className="text-sm font-medium leading-6 text-white">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
