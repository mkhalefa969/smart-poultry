import { useState } from "react";
import { useTranslation } from "react-i18next";
import {
  Radio,
  BrainCircuit,
  Lightbulb,
  Cog,
  BarChart3,
  ArrowRight,
  type LucideIcon,
} from "lucide-react";
import { DemoModal } from "@/components/home/DemoModal";

const FLOW: { key: string; icon: LucideIcon }[] = [
  { key: "sensors", icon: Radio },
  { key: "ai", icon: BrainCircuit },
  { key: "reco", icon: Lightbulb },
  { key: "automation", icon: Cog },
  { key: "bi", icon: BarChart3 },
];

export function SolutionsHero() {
  const { t } = useTranslation();
  const [demoOpen, setDemoOpen] = useState(false);

  return (
    <section
      id="top"
      className="relative overflow-hidden bg-gradient-hero pb-24 pt-32 text-white sm:pt-40"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-70"
        style={{ backgroundImage: "var(--gradient-glow)" }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.07]"
        style={{
          backgroundImage:
            "linear-gradient(to right, currentColor 1px, transparent 1px), linear-gradient(to bottom, currentColor 1px, transparent 1px)",
          backgroundSize: "72px 72px",
          maskImage:
            "radial-gradient(ellipse 70% 60% at 50% 30%, black, transparent)",
          WebkitMaskImage:
            "radial-gradient(ellipse 70% 60% at 50% 30%, black, transparent)",
        }}
      />

      <div className="relative mx-auto grid max-w-7xl items-center gap-14 px-4 sm:px-6 lg:grid-cols-2 lg:gap-10 lg:px-8">
        <div className="animate-fade-up">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-highlight backdrop-blur">
            {t("solutions.hero.badge")}
          </span>

          <h1 className="mt-6 text-4xl font-bold leading-[1.1] tracking-tight sm:text-5xl lg:text-6xl">
            {t("solutions.hero.titleLead")}
            <span className="block text-highlight">
              {t("solutions.hero.titleAccent")}
            </span>
          </h1>

          <p className="mt-6 max-w-xl text-base leading-8 text-white/75 sm:text-lg">
            {t("solutions.hero.subtitle")}
          </p>

          <div className="mt-9 flex flex-wrap items-center gap-4">
            <button
              type="button"
              onClick={() => setDemoOpen(true)}
              className="inline-flex items-center gap-2 rounded-full bg-highlight px-6 py-3 text-sm font-semibold text-brand-deep shadow-elevated transition-transform hover:scale-[1.03]"
            >
              {t("solutions.hero.primaryCta")}
              <ArrowRight className="h-4 w-4 rtl:rotate-180" />
            </button>
            <a
              href="#capabilities"
              className="inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/10 px-6 py-3 text-sm font-semibold text-white backdrop-blur transition-colors hover:bg-white/20"
            >
              {t("solutions.hero.secondaryCta")}
            </a>
          </div>
        </div>

        {/* Enterprise architecture illustration */}
        <div className="relative animate-fade-up [animation-delay:150ms]">
          <div className="relative mx-auto w-full max-w-md rounded-[2rem] border border-white/15 bg-white/5 p-6 shadow-glow backdrop-blur-md sm:p-8">
            <div
              aria-hidden
              className="pointer-events-none absolute inset-x-10 top-14 bottom-14 border-s border-dashed border-highlight/30 ltr:left-[3.1rem] rtl:right-[3.1rem]"
            />
            <ul className="relative space-y-4">
              {FLOW.map((node, i) => {
                const Icon = node.icon;
                return (
                  <li
                    key={node.key}
                    style={{ animationDelay: `${i * 120}ms` }}
                    className="animate-fade-up flex items-center gap-4 rounded-2xl border border-white/12 bg-white/8 p-4 backdrop-blur transition-all duration-300 hover:-translate-y-1 hover:border-highlight/40"
                  >
                    <span className="relative grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-highlight/15 text-highlight">
                      <span
                        aria-hidden
                        className="absolute inset-0 rounded-xl bg-highlight/20 blur-md"
                      />
                      <Icon className="relative h-5 w-5" strokeWidth={1.8} />
                    </span>
                    <div className="min-w-0">
                      <div className="text-sm font-semibold text-white">
                        {t(`solutions.hero.flow.${node.key}.title`)}
                      </div>
                      <div className="text-xs text-white/60">
                        {t(`solutions.hero.flow.${node.key}.desc`)}
                      </div>
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>

      <DemoModal isOpen={demoOpen} onClose={() => setDemoOpen(false)} />
    </section>
  );
}
