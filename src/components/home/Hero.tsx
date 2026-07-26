import { useEffect, useRef } from "react";
import { useTranslation } from "react-i18next";
import {
  Activity,
  Brain,
  Camera,
  Check,
  LineChart,
  Link2,
  Play,
  Wifi,
} from "lucide-react";
import heroScene from "@/assets/hero-farm-scene.png";

export function Hero() {
  const { t } = useTranslation();
  const sceneRef = useRef<HTMLDivElement>(null);

  // Subtle mouse parallax
  useEffect(() => {
    const el = sceneRef.current;
    if (!el) return;
    let raf = 0;
    const onMove = (e: MouseEvent) => {
      const { innerWidth: w, innerHeight: h } = window;
      const x = (e.clientX / w - 0.5) * 12;
      const y = (e.clientY / h - 0.5) * 8;
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        el.style.transform = `translate3d(${x}px, ${y}px, 0)`;
      });
    };
    window.addEventListener("mousemove", onMove);
    return () => {
      window.removeEventListener("mousemove", onMove);
      cancelAnimationFrame(raf);
    };
  }, []);

  const stats = [
    { k: t("hero.stats.farmsLabel"), v: t("hero.stats.farmsValue") },
    { k: t("hero.stats.dataLabel"), v: t("hero.stats.dataValue") },
    { k: t("hero.stats.mortalityLabel"), v: t("hero.stats.mortalityValue") },
  ];

  const chips = [
    { icon: Brain, label: t("hero.chips.ai") },
    { icon: Activity, label: t("hero.chips.live") },
    { icon: Link2, label: t("hero.chips.erp") },
    { icon: Wifi, label: t("hero.chips.iot") },
    { icon: Camera, label: t("hero.chips.cv") },
    { icon: LineChart, label: t("hero.chips.predictive") },
  ];

  return (
    <section
      id="top"
      className="relative overflow-hidden bg-gradient-hero pt-24 pb-32 lg:pt-32 lg:pb-44"
    >
      {/* Ambient glow */}
      <div
        aria-hidden
        className="absolute inset-0 opacity-70"
        style={{ backgroundImage: "var(--gradient-glow)" }}
      />
      {/* Grain overlay */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.05] mix-blend-overlay"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='200' height='200'><filter id='n'><feTurbulence baseFrequency='0.9' numOctaves='2'/></filter><rect width='100%' height='100%' filter='url(%23n)' opacity='0.6'/></svg>\")",
        }}
      />

      <div className="relative mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 px-4 sm:px-6 lg:grid-cols-12 lg:gap-8 lg:px-8">
        <div className="animate-fade-up lg:col-span-6 lg:pr-6">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3 py-1 text-xs font-medium text-white/90 backdrop-blur">
            <span className="h-1.5 w-1.5 rounded-full bg-highlight" />
            {t("hero.badge")}
          </span>

          <h1 className="mt-6 text-[2.5rem] font-bold leading-[1.08] tracking-tight text-white sm:text-5xl lg:text-6xl">
            {t("hero.titleLead")}{" "}
            <span className="relative inline-block">
              <span className="relative z-10 text-highlight">
                {t("hero.titleHighlight")}
              </span>
              <span
                aria-hidden
                className="absolute inset-x-0 bottom-1 -z-0 h-3 rounded bg-highlight/20"
              />
            </span>{" "}
            {t("hero.titleTail")}
          </h1>

          <p className="mt-6 max-w-xl text-lg leading-relaxed text-white/80">
            {t("hero.subtitle")}
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a
              href="#cta"
              className="group inline-flex items-center gap-2 rounded-full bg-highlight px-6 py-3.5 text-sm font-semibold text-brand-deep shadow-elevated transition-all duration-300 hover:scale-[1.03] hover:shadow-glow"
            >
              {t("hero.ctaDemo")}
              <svg
                viewBox="0 0 20 20"
                className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
              >
                <path
                  d="M5 10h10M11 6l4 4-4 4"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </a>
            <a
              href="#tour"
              className="group inline-flex items-center gap-3 rounded-full border border-white/25 bg-white/5 px-5 py-3 text-sm font-semibold text-white backdrop-blur transition-all duration-300 hover:bg-white/10 hover:scale-[1.02]"
            >
              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-white/15 ring-1 ring-white/25 transition-colors group-hover:bg-highlight group-hover:text-brand-deep">
                <Play className="h-3.5 w-3.5 fill-current" />
              </span>
              {t("hero.ctaExplore")}
            </a>
          </div>

          {/* Enterprise value chips */}
          <ul className="mt-6 flex flex-wrap gap-2.5">
            {chips.map(({ icon: Icon, label }) => (
              <li
                key={label}
                className="group inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/[0.06] px-3.5 py-2 text-xs font-medium text-white/90 backdrop-blur transition-all duration-300 hover:border-highlight/50 hover:bg-white/10 hover:-translate-y-0.5"
              >
                <Icon className="h-3.5 w-3.5 text-highlight" strokeWidth={2} />
                <Check className="h-3 w-3 text-highlight" strokeWidth={3} />
                <span>{label}</span>
              </li>
            ))}
          </ul>

          <dl className="mt-12 grid grid-cols-3 gap-6 border-t border-white/15 pt-8 max-w-lg">
            {stats.map((s) => (
              <div key={s.k}>
                <dt className="text-xs uppercase tracking-wider text-white/60">
                  {s.k}
                </dt>
                <dd className="mt-1 text-2xl font-bold text-white">{s.v}</dd>
              </div>
            ))}
          </dl>
        </div>

        <div className="relative lg:col-span-6">
          {/* Soft AI glow behind scene */}
          <div
            aria-hidden
            className="absolute inset-0 -m-8 rounded-[3rem] bg-highlight/5 blur-3xl"
          />
          <div
            aria-hidden
            className="absolute left-1/2 top-6 h-40 w-40 -translate-x-1/2 rounded-full bg-brand-teal/30 blur-3xl animate-pulse-glow"
          />
          <div
            ref={sceneRef}
            className="relative will-change-transform transition-transform duration-[400ms] ease-out"
          >
            <img
              src={heroScene}
              alt={t("hero.imageAlt")}
              width={1408}
              height={1000}
              className="relative w-full animate-float drop-shadow-2xl"
            />
          </div>
        </div>
      </div>

      {/* Curved bottom transition */}
      <svg
        className="absolute inset-x-0 bottom-0 w-full text-background"
        viewBox="0 0 1440 80"
        preserveAspectRatio="none"
        aria-hidden
      >
        <path
          fill="currentColor"
          d="M0,80 L0,32 C240,80 480,0 720,16 C960,32 1200,80 1440,40 L1440,80 Z"
        />
      </svg>
    </section>
  );
}
