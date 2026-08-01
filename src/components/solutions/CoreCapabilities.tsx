import { useTranslation } from "react-i18next";
import { BrainCircuit, ScanEye, Cpu, Check, type LucideIcon } from "lucide-react";
import { Reveal, SectionHeading } from "./Reveal";

const CARDS: { key: string; icon: LucideIcon; span: string }[] = [
  { key: "ai", icon: BrainCircuit, span: "lg:col-span-3" },
  { key: "cv", icon: ScanEye, span: "lg:col-span-3" },
  { key: "iot", icon: Cpu, span: "lg:col-span-6" },
];

export function CoreCapabilities() {
  const { t } = useTranslation();

  return (
    <section id="capabilities" className="bg-background py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow={t("solutions.capabilities.eyebrow")}
          title={t("solutions.capabilities.title")}
          subtitle={t("solutions.capabilities.subtitle")}
        />

        <div className="mt-16 grid gap-6 lg:grid-cols-6">
          {CARDS.map((card, i) => {
            const Icon = card.icon;
            const items = t(`solutions.capabilities.cards.${card.key}.items`, {
              returnObjects: true,
            }) as string[];
            return (
              <Reveal key={card.key} delay={i * 110} className={card.span}>
                <article className="group relative h-full overflow-hidden rounded-3xl border border-border bg-card p-8 shadow-sm transition-all duration-500 hover:-translate-y-2 hover:border-brand/40 hover:shadow-elevated sm:p-10">
                  <div
                    aria-hidden
                    className="pointer-events-none absolute -top-24 h-56 w-56 rounded-full bg-brand/10 opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-100 ltr:-right-24 rtl:-left-24"
                  />
                  <span className="relative grid h-14 w-14 place-items-center rounded-2xl bg-brand/10 text-brand transition-colors duration-300 group-hover:bg-brand group-hover:text-primary-foreground">
                    <Icon className="h-7 w-7" strokeWidth={1.6} />
                  </span>
                  <h3 className="relative mt-6 text-2xl font-bold tracking-tight text-foreground">
                    {t(`solutions.capabilities.cards.${card.key}.title`)}
                  </h3>
                  <p className="relative mt-3 max-w-2xl leading-7 text-muted-foreground">
                    {t(`solutions.capabilities.cards.${card.key}.desc`)}
                  </p>
                  <div className="relative mt-7 flex flex-wrap gap-2">
                    {items.map((item) => (
                      <span
                        key={item}
                        className="inline-flex items-center gap-1.5 rounded-full border border-border bg-secondary px-3.5 py-1.5 text-xs font-medium text-secondary-foreground"
                      >
                        <Check className="h-3.5 w-3.5 text-brand" />
                        {item}
                      </span>
                    ))}
                  </div>
                </article>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
