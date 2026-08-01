import { useTranslation } from "react-i18next";
import {
  Radio,
  SlidersHorizontal,
  Router,
  RadioTower,
  Cloud,
  BrainCircuit,
  LayoutDashboard,
  Boxes,
  Smartphone,
  Webhook,
  type LucideIcon,
} from "lucide-react";
import { Reveal, SectionHeading } from "./Reveal";

const RINGS: { title: string; nodes: { key: string; icon: LucideIcon }[] }[] = [
  {
    title: "edge",
    nodes: [
      { key: "sensors", icon: Radio },
      { key: "controllers", icon: SlidersHorizontal },
      { key: "gateways", icon: Router },
      { key: "lorawan", icon: RadioTower },
    ],
  },
  {
    title: "core",
    nodes: [
      { key: "cloud", icon: Cloud },
      { key: "ai", icon: BrainCircuit },
    ],
  },
  {
    title: "enterprise",
    nodes: [
      { key: "dashboards", icon: LayoutDashboard },
      { key: "erp", icon: Boxes },
      { key: "mobile", icon: Smartphone },
      { key: "api", icon: Webhook },
    ],
  },
];

export function FarmConnectivity() {
  const { t } = useTranslation();

  return (
    <section
      id="connectivity"
      className="relative overflow-hidden bg-brand-soft/60 py-24"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.05]"
        style={{
          backgroundImage:
            "linear-gradient(to right, currentColor 1px, transparent 1px), linear-gradient(to bottom, currentColor 1px, transparent 1px)",
          backgroundSize: "64px 64px",
          maskImage:
            "radial-gradient(ellipse 70% 60% at 50% 40%, black, transparent)",
          WebkitMaskImage:
            "radial-gradient(ellipse 70% 60% at 50% 40%, black, transparent)",
        }}
      />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow={t("solutions.connectivity.eyebrow")}
          title={t("solutions.connectivity.title")}
          subtitle={t("solutions.connectivity.subtitle")}
        />

        <div className="mt-16 space-y-6">
          {RINGS.map((ring, ri) => (
            <div key={ring.title} className="relative">
              <div
                className={`grid gap-4 ${
                  ring.nodes.length === 2
                    ? "mx-auto max-w-2xl sm:grid-cols-2"
                    : "sm:grid-cols-2 lg:grid-cols-4"
                }`}
              >
                {ring.nodes.map((node, i) => {
                  const Icon = node.icon;
                  const core = ring.title === "core";
                  return (
                    <Reveal key={node.key} delay={ri * 120 + i * 70}>
                      <div
                        className={`group flex h-full items-center gap-4 rounded-2xl border p-5 backdrop-blur transition-all duration-300 hover:-translate-y-1 hover:shadow-elevated ${
                          core
                            ? "border-brand/35 bg-gradient-brand text-white"
                            : "border-border bg-card/80 hover:border-brand/40"
                        }`}
                      >
                        <span
                          className={`grid h-11 w-11 shrink-0 place-items-center rounded-xl ${
                            core
                              ? "bg-white/15 text-highlight"
                              : "bg-brand/10 text-brand"
                          }`}
                        >
                          <Icon className="h-5 w-5" strokeWidth={1.8} />
                        </span>
                        <div className="min-w-0">
                          <div
                            className={`text-sm font-semibold ${
                              core ? "text-white" : "text-foreground"
                            }`}
                          >
                            {t(`solutions.connectivity.nodes.${node.key}.title`)}
                          </div>
                          <div
                            className={`text-xs leading-5 ${
                              core ? "text-white/70" : "text-muted-foreground"
                            }`}
                          >
                            {t(`solutions.connectivity.nodes.${node.key}.desc`)}
                          </div>
                        </div>
                      </div>
                    </Reveal>
                  );
                })}
              </div>
              {ri < RINGS.length - 1 ? (
                <div
                  aria-hidden
                  className="mx-auto mt-6 h-8 w-px border-s border-dashed border-brand/35"
                />
              ) : null}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
