import { useCallback, useState } from "react";
import { useTranslation } from "react-i18next";
import { ChevronLeft, ChevronRight, Check } from "lucide-react";
import dashboardImg from "@/assets/screens/dashboard.png";
import farmImg from "@/assets/screens/farm-overview.png";
import environmentImg from "@/assets/screens/environment.png";
import aiImg from "@/assets/screens/ai-insights.png";
import weightImg from "@/assets/screens/weight.png";
import camerasImg from "@/assets/screens/cameras.png";
import { Reveal, SectionHeading } from "./Reveal";

const SLIDES = [
  { key: "dashboard", src: dashboardImg },
  { key: "farm", src: farmImg },
  { key: "environment", src: environmentImg },
  { key: "ai", src: aiImg },
  { key: "weight", src: weightImg },
  { key: "cameras", src: camerasImg },
] as const;

const HIGHLIGHTS = [
  "kpis",
  "dashboards",
  "forecasts",
  "reports",
  "alerts",
  "benchmarking",
  "support",
] as const;

export function OperationalIntelligence() {
  const { t } = useTranslation();
  const [index, setIndex] = useState(0);

  const go = useCallback(
    (delta: number) =>
      setIndex((i) => (i + delta + SLIDES.length) % SLIDES.length),
    [],
  );

  return (
    <section
      id="intelligence"
      className="relative overflow-hidden bg-brand-deep py-24 text-white"
    >
      <div
        aria-hidden
        className="absolute inset-0 opacity-50"
        style={{ backgroundImage: "var(--gradient-glow)" }}
      />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          tone="dark"
          eyebrow={t("solutions.intelligence.eyebrow")}
          title={t("solutions.intelligence.title")}
          subtitle={t("solutions.intelligence.subtitle")}
        />

        <div className="mt-14 grid gap-8 lg:grid-cols-[1fr_320px]">
          <Reveal>
            <div className="flex flex-wrap justify-center gap-2">
              {SLIDES.map((slide, i) => (
                <button
                  key={slide.key}
                  type="button"
                  onClick={() => setIndex(i)}
                  aria-current={i === index}
                  className={`rounded-full px-4 py-2 text-xs font-semibold transition-colors ${
                    i === index
                      ? "bg-highlight text-brand-deep"
                      : "border border-white/15 bg-white/8 text-white/70 hover:text-white"
                  }`}
                >
                  {t(`solutions.intelligence.slides.${slide.key}.title`)}
                </button>
              ))}
            </div>

            <div className="relative mt-6 aspect-[16/9] overflow-hidden rounded-3xl border border-white/12 bg-white/5 shadow-glow backdrop-blur">
              {SLIDES.map((slide, i) => (
                <img
                  key={slide.key}
                  src={slide.src}
                  loading={i === 0 ? "eager" : "lazy"}
                  decoding="async"
                  alt={t(`solutions.intelligence.slides.${slide.key}.alt`)}
                  aria-hidden={i !== index}
                  className={`absolute inset-0 h-full w-full object-contain object-top transition-opacity duration-500 ${
                    i === index ? "opacity-100" : "opacity-0"
                  }`}
                />
              ))}

              <button
                type="button"
                onClick={() => go(-1)}
                aria-label="Previous"
                className="absolute top-1/2 grid h-10 w-10 -translate-y-1/2 place-items-center rounded-full border border-white/20 bg-brand-deep/70 text-white backdrop-blur transition-colors hover:bg-brand ltr:left-3 rtl:right-3"
              >
                <ChevronLeft className="h-5 w-5 rtl:rotate-180" />
              </button>
              <button
                type="button"
                onClick={() => go(1)}
                aria-label="Next"
                className="absolute top-1/2 grid h-10 w-10 -translate-y-1/2 place-items-center rounded-full border border-white/20 bg-brand-deep/70 text-white backdrop-blur transition-colors hover:bg-brand ltr:right-3 rtl:left-3"
              >
                <ChevronRight className="h-5 w-5 rtl:rotate-180" />
              </button>
            </div>

            <div className="mt-5 flex justify-center gap-2">
              {SLIDES.map((slide, i) => (
                <button
                  key={slide.key}
                  type="button"
                  onClick={() => setIndex(i)}
                  aria-label={t(`solutions.intelligence.slides.${slide.key}.title`)}
                  className={`h-1.5 rounded-full transition-all ${
                    i === index ? "w-8 bg-highlight" : "w-3 bg-white/25"
                  }`}
                />
              ))}
            </div>
          </Reveal>

          <Reveal delay={120}>
            <div className="h-full rounded-3xl border border-white/12 bg-white/8 p-7 backdrop-blur">
              <ul className="space-y-4">
                {HIGHLIGHTS.map((h) => (
                  <li key={h} className="flex items-start gap-3">
                    <span className="mt-0.5 grid h-6 w-6 shrink-0 place-items-center rounded-full bg-highlight/15 text-highlight">
                      <Check className="h-3.5 w-3.5" />
                    </span>
                    <span className="text-sm font-medium text-white/85">
                      {t(`solutions.intelligence.highlights.${h}`)}
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
