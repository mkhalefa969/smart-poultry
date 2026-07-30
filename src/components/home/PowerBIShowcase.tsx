import dashboardImg from "@/assets/screens/dashboard.png";
import aiImg from "@/assets/screens/ai-insights.png";
import environmentImg from "@/assets/screens/environment.png";
import camerasImg from "@/assets/screens/cameras.png";
import weightImg from "@/assets/screens/weight.png";
import farmImg from "@/assets/screens/farm-overview.png";
import reportsImg from "@/assets/screens/dashboard.png";
import { useCallback, useRef, useState } from "react";
import {
  ArrowRight,
  Bell,
  BrainCircuit,
  Camera,
  ChevronLeft,
  ChevronRight,
  Gauge,
  LayoutDashboard,
  Leaf,
  Network,
  Radio,
  Scale,
  Sparkles,
  Building2,
  BarChart3,
  DollarSign,
  TrendingUp,
} from "lucide-react";
import { useTranslation } from "react-i18next";

const SLIDES = [
  { key: "dashboard", icon: LayoutDashboard, image: dashboardImg },
  { key: "ai", icon: Sparkles, image: aiImg },
  { key: "environment", icon: Leaf, image: environmentImg },
  { key: "cameras", icon: Camera, image: camerasImg },
  { key: "weight", icon: Scale, image: weightImg },
  { key: "farm", icon: Building2, image: farmImg },
  { key: "reports", icon: BarChart3, image: reportsImg },
] as const;

const FEATURES = [
  { key: "kpi", icon: Gauge },
  { key: "ai", icon: BrainCircuit },
  { key: "alerts", icon: Bell },
  { key: "multi", icon: Network },
] as const;

const STATS = [
  { key: "data", icon: Radio },
  { key: "events", icon: BrainCircuit },
  { key: "alerts", icon: Bell },
  { key: "fcr", icon: TrendingUp },
  { key: "profit", icon: DollarSign },
] as const;

export function PowerBIShowcase() {
  const { t, i18n } = useTranslation();
  const isRtl = i18n.dir() === "rtl";
  const [index, setIndex] = useState(0);
  const touchX = useRef<number | null>(null);

  const go = useCallback((delta: number) => {
    setIndex((i) => (i + delta + SLIDES.length) % SLIDES.length);
  }, []);

  const onKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowRight") {
      e.preventDefault();
      go(isRtl ? -1 : 1);
    } else if (e.key === "ArrowLeft") {
      e.preventDefault();
      go(isRtl ? 1 : -1);
    }
  };

  const active = SLIDES[index];

  return (
    <section
      id="power-bi"
      className="relative overflow-hidden bg-brand-deep py-24 text-white"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-40"
        style={{ backgroundImage: "var(--gradient-glow)" }}
      />

      <div className="relative mx-auto max-w-7xl px-6">
        {/* Header */}
        <div className="mx-auto max-w-3xl text-center">
          <span className="text-xs font-semibold uppercase tracking-[0.35em] text-highlight">
            {t("showcase.eyebrow")}
          </span>

          <h2 className="mt-5 text-3xl font-bold tracking-tight sm:text-5xl">
            {t("showcase.titleLead")}
            <span className="text-highlight">
              {t("showcase.titleAccent")}
            </span>
            {t("showcase.titleTail")}
          </h2>

          <p className="mt-5 text-base leading-8 text-white/75 sm:text-lg">
            {t("showcase.subtitle")}
          </p>
        </div>

        {/* Tabs */}
        <div
          role="tablist"
          aria-label={t("showcase.eyebrow")}
          className="mt-10 flex flex-wrap items-center justify-center gap-2"
        >
          {SLIDES.map((slide, i) => {
            const Icon = slide.icon;
            const selected = i === index;
            return (
              <button
                key={slide.key}
                role="tab"
                type="button"
                aria-selected={selected}
                onClick={() => setIndex(i)}
                className={`flex items-center gap-2 rounded-full px-4 py-2.5 text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-highlight ${
                  selected
                    ? "bg-white/10 text-highlight ring-1 ring-highlight/40"
                    : "text-white/60 hover:text-white"
                }`}
              >
                <Icon className="h-4 w-4 shrink-0" />
                <span className="whitespace-nowrap">
                  {t(`showcase.slides.${slide.key}.tab`)}
                </span>
              </button>
            );
          })}
        </div>

        {/* Carousel + panel */}
        <div className="mt-10 grid gap-6 lg:grid-cols-[minmax(0,1fr)_340px]">
          <div className="relative min-w-0">
            {/* Mockup Frame Container */}
            <div
              id="sp-carousel-panel"
              role="group"
              tabIndex={0}
              onKeyDown={onKeyDown}
              onTouchStart={(e) => (touchX.current = e.touches[0].clientX)}
              onTouchEnd={(e) => {
                if (touchX.current === null) return;
                const dx = e.changedTouches[0].clientX - touchX.current;
                if (Math.abs(dx) > 50) go(dx < 0 ? 1 : -1);
                touchX.current = null;
              }}
              className="group relative w-full overflow-hidden rounded-[24px] border border-emerald-500/20 bg-[#0d1f1c] p-2.5 shadow-[0_20px_50px_rgba(0,0,0,0.6)] backdrop-blur-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-highlight sm:p-3.5"
            >
              <div
                aria-hidden
                className="pointer-events-none absolute inset-0 -m-6 rounded-[3rem] bg-highlight/10 blur-3xl"
              />

              {/* Inner Screen Display */}
              <div className="relative aspect-[16/10] w-full overflow-hidden rounded-[16px] border border-white/10 bg-slate-950 shadow-inner">
                {/* طريقة Lovable (رسم جميع الصور والتحكم بالشفافية للـ Fade) */}
                {SLIDES.map((slide, i) => (
                  <img
                    key={slide.key}
                    src={slide.image} // نستخدم slide.image
                    alt={t(`showcase.slides.${slide.key}.alt`)}
                    // التوقيت Eager لأول صورة لتحميل أسرع، والباقي Lazy
                    loading={i === 0 ? "eager" : "lazy"}
                    decoding="async"
                    // كلاسات Tailwind للـ Fade مأخوذة مباشرة من منطق Lovable
                    className={`absolute inset-0 h-full w-full object-contain object-center transition-opacity duration-500 ease-in-out ${
                      i === index ? "opacity-100 z-10" : "opacity-0 z-0"
                    }`}
                  />
                ))}
                {/* طبقة التدرج العلوي لتبقى ثابتة فوق الصور */}
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-black/10 z-20" />
              </div>
            </div>

            {/* Arrows */}
            <button
              type="button"
              onClick={() => go(-1)}
              aria-label={t("showcase.prev")}
              className="absolute start-2 top-1/2 z-30 -translate-y-1/2 sm:start-3 rounded-full border border-highlight/40 bg-brand-deep/80 p-3 text-highlight backdrop-blur transition-colors hover:bg-highlight hover:text-brand-deep"
            >
              <ChevronLeft className="h-5 w-5 rtl:hidden" />
              <ChevronRight className="hidden h-5 w-5 rtl:block" />
            </button>

            <button
              type="button"
              onClick={() => go(1)}
              aria-label={t("showcase.next")}
              className="absolute end-2 top-1/2 z-30 -translate-y-1/2 sm:end-3 rounded-full border border-highlight/40 bg-brand-deep/80 p-3 text-highlight backdrop-blur transition-colors hover:bg-highlight hover:text-brand-deep"
            >
              <ChevronRight className="h-5 w-5 rtl:hidden" />
              <ChevronLeft className="hidden h-5 w-5 rtl:block" />
            </button>

            {/* Dots */}
            <div className="mt-6 flex items-center justify-center gap-3">
              <div className="flex items-center gap-2">
                {SLIDES.map((slide, i) => (
                  <button
                    key={slide.key}
                    type="button"
                    onClick={() => setIndex(i)}
                    aria-label={t("showcase.slideLabel", {
                      name: t(`showcase.slides.${slide.key}.tab`),
                    })}
                    className={`h-2 rounded-full transition-all ${
                      i === index ? "w-7 bg-highlight" : "w-2 bg-white/25"
                    }`}
                  />
                ))}
              </div>
              <span className="text-sm text-white/50">
                {index + 1} / {SLIDES.length}
              </span>
            </div>
          </div>

          {/* Side panel */}
          <aside className="rounded-3xl border border-white/10 bg-white/5 p-7 backdrop-blur">
            <h3 className="text-xl font-bold">
              {t(`showcase.slides.${active.key}.title`)}
            </h3>
            <div className="mt-2 h-0.5 w-12 rounded-full bg-highlight" />

            <p className="mt-4 text-sm leading-7 text-white/70">
              {t(`showcase.slides.${active.key}.desc`)}
            </p>

            <div className="mt-7 space-y-5">
              {FEATURES.map((f) => {
                const Icon = f.icon;
                return (
                  <div key={f.key} className="flex items-start gap-4">
                    <div className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-highlight/15 text-highlight">
                      <Icon className="h-4.5 w-4.5" />
                    </div>
                    <div className="min-w-0">
                      <h4 className="text-sm font-semibold">
                        {t(`showcase.panel.features.${f.key}.title`)}
                      </h4>
                      <p className="mt-1 text-xs leading-5 text-white/60">
                        {t(`showcase.panel.features.${f.key}.desc`)}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>

            <a
              href="#contact"
              className="mt-8 flex items-center justify-between gap-3 rounded-2xl border border-highlight/50 px-5 py-3.5 text-sm font-semibold text-highlight transition-colors hover:bg-highlight hover:text-brand-deep"
            >
              {t("showcase.panel.cta")}
              <ArrowRight className="h-4 w-4 rtl:rotate-180" />
            </a>
          </aside>
        </div>

        {/* Stats strip */}
        <div className="mt-10 grid gap-6 rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur sm:grid-cols-2 lg:grid-cols-5">
          {STATS.map((s) => {
            const Icon = s.icon;
            return (
              <div key={s.key} className="flex items-start gap-4">
                <div className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-highlight/15 text-highlight">
                  <Icon className="h-5 w-5" />
                </div>
                <div className="min-w-0">
                  <div className="text-xl font-bold text-highlight">
                    {t(`showcase.stats.${s.key}.value`)}
                  </div>
                  <p className="mt-1 text-xs leading-5 text-white/60">
                    {t(`showcase.stats.${s.key}.label`)}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}