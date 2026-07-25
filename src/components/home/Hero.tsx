import { useEffect, useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import {
  Thermometer,
  Droplet,
  Bird,
  Wheat,
  Sparkles,
  BarChart3,
  Play,
  ArrowRight,
  Brain,
  Activity,
  Link2,
  Wifi,
  Camera,
  LineChart,
} from "lucide-react";
import heroIllustration from "@/assets/hero-illustration.png";

type FloatCardProps = {
  label: string;
  value: string;
  unit?: string;
  icon: React.ReactNode;
  className?: string;
  delay?: string;
  accent?: "green" | "blue" | "yellow" | "amber" | "violet";
};

function FloatCard({ label, value, unit, icon, className = "", delay = "0s", accent = "green" }: FloatCardProps) {
  const accentMap: Record<string, string> = {
    green: "text-emerald-300",
    blue: "text-sky-300",
    yellow: "text-highlight",
    amber: "text-amber-300",
    violet: "text-violet-300",
  };
  return (
    <div
      className={`absolute rounded-2xl border border-white/10 bg-brand-deep/70 px-3.5 py-2.5 shadow-elevated backdrop-blur-md animate-float ${className}`}
      style={{ animationDelay: delay }}
    >
      <div className="flex items-center gap-2.5">
        <div className={`flex h-8 w-8 items-center justify-center rounded-lg bg-white/5 ${accentMap[accent]}`}>
          {icon}
        </div>
        <div className="leading-tight">
          <div className="text-[10px] font-medium uppercase tracking-wider text-white/60">{label}</div>
          <div className="flex items-baseline gap-1 text-white">
            <span className="text-sm font-bold">{value}</span>
            {unit && <span className="text-[10px] text-white/60">{unit}</span>}
          </div>
        </div>
      </div>
      <svg viewBox="0 0 60 16" className={`mt-1.5 h-3 w-full ${accentMap[accent]}`} fill="none">
        <path d="M0 12 L10 8 L20 10 L30 4 L40 7 L50 3 L60 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </div>
  );
}

export function Hero() {
  const { t } = useTranslation();
  const wrapRef = useRef<HTMLDivElement>(null);
  const [parallax, setParallax] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const el = wrapRef.current;
    if (!el) return;
    const onMove = (e: MouseEvent) => {
      const r = el.getBoundingClientRect();
      const x = ((e.clientX - r.left) / r.width - 0.5) * 2;
      const y = ((e.clientY - r.top) / r.height - 0.5) * 2;
      setParallax({ x, y });
    };
    el.addEventListener("mousemove", onMove);
    return () => el.removeEventListener("mousemove", onMove);
  }, []);

  const chips = [
    { icon: <Brain className="h-3.5 w-3.5" />, label: t("hero.chips.ai") },
    { icon: <Activity className="h-3.5 w-3.5" />, label: t("hero.chips.monitor") },
    { icon: <Link2 className="h-3.5 w-3.5" />, label: t("hero.chips.erp") },
    { icon: <Wifi className="h-3.5 w-3.5" />, label: t("hero.chips.iot") },
    { icon: <Camera className="h-3.5 w-3.5" />, label: t("hero.chips.cv") },
    { icon: <LineChart className="h-3.5 w-3.5" />, label: t("hero.chips.predict") },
  ];

  const stats = [
    { k: t("hero.stats.farmsLabel"), v: t("hero.stats.farmsValue") },
    { k: t("hero.stats.dataLabel"), v: t("hero.stats.dataValue") },
    { k: t("hero.stats.mortalityLabel"), v: t("hero.stats.mortalityValue") },
  ];

  const px = parallax.x * 8;
  const py = parallax.y * 8;

  return (
    <section id="top" className="relative overflow-hidden bg-gradient-hero pt-28 pb-32 lg:pt-32 lg:pb-44">
      <div aria-hidden className="absolute inset-0 opacity-70" style={{ backgroundImage: "var(--gradient-glow)" }} />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.05] mix-blend-overlay"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='200' height='200'><filter id='n'><feTurbulence baseFrequency='0.9' numOctaves='2'/></filter><rect width='100%' height='100%' filter='url(%23n)' opacity='0.6'/></svg>\")",
        }}
      />

      <div ref={wrapRef} className="relative mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 px-4 sm:px-6 lg:grid-cols-12 lg:gap-8 lg:px-8">
        {/* Left column */}
        <div className="animate-fade-up lg:col-span-6 lg:pr-6">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3 py-1 text-xs font-medium text-white/90 backdrop-blur">
            <span className="h-1.5 w-1.5 rounded-full bg-highlight" />
            {t("hero.badge")}
          </span>

          <h1 className="mt-6 text-[2.5rem] font-bold leading-[1.05] tracking-tight text-white sm:text-5xl lg:text-[3.75rem]">
            {t("hero.titleLead")}{" "}
            <span className="relative inline-block">
              <span className="relative z-10 text-highlight">{t("hero.titleHighlight")}</span>
              <span aria-hidden className="absolute inset-x-0 bottom-1 -z-0 h-3 rounded bg-highlight/20" />
            </span>{" "}
            {t("hero.titleTail")}
          </h1>

          <p className="mt-6 max-w-xl text-lg leading-relaxed text-white/80">{t("hero.subtitle")}</p>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a
              href="#cta"
              className="group inline-flex items-center gap-2 rounded-full bg-highlight px-6 py-3.5 text-sm font-semibold text-brand-deep shadow-elevated transition-all hover:scale-[1.03] hover:shadow-glow"
            >
              {t("hero.ctaDemo")}
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </a>
            <a
              href="#modules"
              className="group inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/5 px-5 py-3.5 text-sm font-semibold text-white backdrop-blur transition-all hover:scale-[1.02] hover:bg-white/10"
            >
              <span className="flex h-6 w-6 items-center justify-center rounded-full bg-white/15 transition-colors group-hover:bg-white/25">
                <Play className="h-3 w-3 fill-white text-white" />
              </span>
              {t("hero.ctaExplore")}
            </a>
          </div>

          {/* Enterprise value chips */}
          <div className="mt-8 grid grid-cols-1 gap-2.5 sm:grid-cols-2 lg:grid-cols-3 max-w-2xl">
            {chips.map((c) => (
              <div
                key={c.label}
                className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3.5 py-2 text-xs font-medium text-white/85 backdrop-blur transition-all hover:border-highlight/40 hover:bg-white/10 hover:text-white"
              >
                <span className="flex h-5 w-5 items-center justify-center rounded-full bg-highlight/15 text-highlight">
                  {c.icon}
                </span>
                <span>✓ {c.label}</span>
              </div>
            ))}
          </div>

          <dl className="mt-12 grid grid-cols-3 gap-6 border-t border-white/15 pt-8 max-w-lg">
            {stats.map((s) => (
              <div key={s.k}>
                <dt className="text-xs uppercase tracking-wider text-white/60">{s.k}</dt>
                <dd className="mt-1 text-2xl font-bold text-white">{s.v}</dd>
              </div>
            ))}
          </dl>
        </div>

        {/* Right column - illustration + floating cards */}
        <div className="relative lg:col-span-6">
          <div className="relative aspect-square w-full">
            <div className="absolute inset-0 -m-8 rounded-[3rem] bg-white/5 blur-2xl" aria-hidden />

            {/* Orbit rings */}
            <div aria-hidden className="absolute inset-6 rounded-full border border-dashed border-white/10" />
            <div aria-hidden className="absolute inset-16 rounded-full border border-dashed border-white/10" />

            <img
              src={heroIllustration}
              alt={t("hero.imageAlt")}
              width={1408}
              height={1200}
              className="relative h-full w-full animate-float object-contain drop-shadow-2xl"
              style={{ transform: `translate3d(${px}px, ${py}px, 0)`, transition: "transform 0.3s ease-out" }}
            />

            {/* AI cloud glow */}
            <div
              className="absolute left-1/2 top-[8%] -translate-x-1/2 animate-float"
              style={{ animationDelay: "0.5s" }}
            >
              <div className="relative flex h-16 w-24 items-center justify-center rounded-[40%] border border-highlight/30 bg-brand-deep/60 text-highlight backdrop-blur">
                <div className="absolute inset-0 -z-10 rounded-[40%] bg-highlight/20 blur-xl" />
                <Sparkles className="mr-1 h-4 w-4" />
                <span className="text-sm font-bold text-white">{t("hero.cards.aiLabel")}</span>
              </div>
            </div>

            {/* Floating KPI cards */}
            <FloatCard
              icon={<Thermometer className="h-4 w-4" />}
              label={t("hero.cards.temperature")}
              value="24.6"
              unit="°C"
              accent="green"
              className="left-[8%] top-[18%]"
              delay="0s"
            />
            <FloatCard
              icon={<Droplet className="h-4 w-4" />}
              label={t("hero.cards.water")}
              value="12.4"
              unit="KL"
              accent="blue"
              className="right-[4%] top-[16%]"
              delay="0.8s"
            />
            <FloatCard
              icon={<Bird className="h-4 w-4" />}
              label={t("hero.cards.birdWeight")}
              value="2.35"
              unit="kg"
              accent="yellow"
              className="left-[2%] top-[42%]"
              delay="1.2s"
            />
            <FloatCard
              icon={<Wheat className="h-4 w-4" />}
              label={t("hero.cards.feedIntake")}
              value="1,248"
              unit="kg"
              accent="amber"
              className="right-[2%] top-[44%]"
              delay="0.4s"
            />
            <FloatCard
              icon={<BarChart3 className="h-4 w-4" />}
              label={t("hero.cards.fcr")}
              value="1.52"
              accent="violet"
              className="right-[6%] top-[66%]"
              delay="1.6s"
            />
          </div>
        </div>
      </div>

      {/* Curved bottom transition */}
      <svg className="absolute inset-x-0 bottom-0 w-full text-background" viewBox="0 0 1440 80" preserveAspectRatio="none" aria-hidden>
        <path fill="currentColor" d="M0,80 L0,32 C240,80 480,0 720,16 C960,32 1200,80 1440,40 L1440,80 Z" />
      </svg>
    </section>
  );
}
