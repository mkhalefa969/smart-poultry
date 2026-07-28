import { useEffect, useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import {
  SaudiRiyal,
  Thermometer,
  Droplets,
  Eye,
  Users,
  AlertTriangle,
  ArrowDown,
  ChevronDown,
  Settings2,
  Brain,
  TrendingUp,
  UserCog,
  CloudSun,
  Network,
  type LucideIcon,
} from "lucide-react";

function useInView<T extends HTMLElement>() {
  const ref = useRef<T>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.12 },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return { ref, visible };
}

function Reveal({
  children,
  delay = 0,
  className = "",
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}) {
  const { ref, visible } = useInView<HTMLDivElement>();
  return (
    <div
      ref={ref}
      style={{ transitionDelay: `${delay}ms` }}
      className={`transition-all duration-700 ease-out ${
        visible ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
      } ${className}`}
    >
      {children}
    </div>
  );
}

type CardItem = {
  icon: LucideIcon;
  titleKey: string;
  descKey: string;
  impactKey: string;
};

function ChallengeCard({
  item,
  delay,
  featured = false,
  insightKey,
  badgeKey,
}: {
  item: CardItem;
  delay: number;
  featured?: boolean;
  insightKey?: string;
  badgeKey?: string;
}) {
  const { t } = useTranslation();
  const Icon = item.icon;

  return (
    <Reveal delay={delay} className={featured ? "lg:col-span-2" : ""}>
      <div
        className={`group relative h-full overflow-hidden rounded-3xl border bg-card/80 backdrop-blur-sm transition-all duration-500 ease-out hover:-translate-y-2 hover:shadow-elevated ${
          featured
            ? "border-brand/40 p-9 shadow-elevated ring-1 ring-brand/10 sm:p-11"
            : "border-border p-7 shadow-sm hover:border-brand/40 hover:ring-4 hover:ring-brand/10"
        }`}
      >
        <div
          className={`pointer-events-none absolute -top-24 opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-100 ltr:-right-24 rtl:-left-24 ${
            featured ? "h-64 w-64 bg-brand/20 opacity-60" : "h-48 w-48 bg-brand/10"
          }`}
        />

        <div className="relative flex items-start justify-between gap-4">
          <div
            className={`flex items-center justify-center rounded-2xl bg-brand/10 transition-colors duration-300 group-hover:bg-brand/20 ${
              featured ? "h-20 w-20" : "h-14 w-14"
            }`}
          >
            <Icon
              className={`text-brand ${featured ? "h-10 w-10" : "h-7 w-7"}`}
              strokeWidth={1.6}
            />
          </div>

          {badgeKey ? (
            <span className="rounded-full bg-accent/15 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.12em] text-accent-foreground ring-1 ring-accent/40">
              {t(badgeKey)}
            </span>
          ) : null}
        </div>

        <h3
          className={`relative mt-7 font-bold tracking-tight text-foreground ${
            featured ? "text-3xl sm:text-4xl" : "text-xl sm:text-2xl"
          }`}
        >
          {t(item.titleKey)}
        </h3>

        <p
          className={`relative mt-4 text-muted-foreground ${
            featured ? "max-w-2xl text-lg leading-8" : "leading-7"
          }`}
        >
          {t(item.descKey)}
        </p>

        {insightKey ? (
          <p className="relative mt-6 rounded-2xl border border-brand/20 bg-brand-soft/60 px-5 py-4 text-sm leading-6 text-foreground/80">
            <span className="font-semibold text-brand">
              {t("challenge.insightLabel")}
            </span>{" "}
            {t(insightKey)}
          </p>
        ) : null}

        <div className="relative mt-7 flex items-center gap-3 border-t border-border pt-5">
          <span className="h-2 w-2 rounded-full bg-brand" />
          <span className="text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground">
            {t("challenge.impactLabel")}
          </span>
          <span className="text-sm font-semibold text-foreground">
            {t(item.impactKey)}
          </span>
        </div>
      </div>
    </Reveal>
  );
}

function Chapter({
  icon: Icon,
  titleKey,
  subtitleKey,
  index,
}: {
  icon: LucideIcon;
  titleKey: string;
  subtitleKey: string;
  index: number;
}) {
  const { t } = useTranslation();
  return (
    <Reveal>
      <div className="flex flex-col gap-5 rounded-3xl border border-border/70 bg-card/60 p-7 backdrop-blur-md sm:flex-row sm:items-center sm:gap-6 sm:p-8">
        <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-brand text-primary-foreground shadow-elevated">
          <Icon className="h-8 w-8" strokeWidth={1.6} />
        </div>
        <div className="min-w-0">
          <span className="text-xs font-semibold uppercase tracking-[0.24em] text-brand">
            {t("challenge.chapterLabel", { number: index })}
          </span>
          <h3 className="mt-2 text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
            {t(titleKey)}
          </h3>
          <p className="mt-2 max-w-2xl leading-7 text-muted-foreground">
            {t(subtitleKey)}
          </p>
        </div>
      </div>
    </Reveal>
  );
}

const pressures: { icon: LucideIcon; key: string }[] = [
  { icon: TrendingUp, key: "feed" },
  { icon: UserCog, key: "labour" },
  { icon: CloudSun, key: "climate" },
  { icon: Network, key: "data" },
];

function PressureBar() {
  const { t } = useTranslation();
  return (
    <div className="mt-16">
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {pressures.map((p, i) => {
          const Icon = p.icon;
          return (
            <Reveal key={p.key} delay={i * 90}>
              <div className="group flex h-full items-center gap-4 rounded-2xl border border-border/70 bg-card/60 px-5 py-5 backdrop-blur-md transition-all duration-500 hover:-translate-y-1 hover:border-brand/40 hover:shadow-elevated">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-brand/10">
                  <Icon className="h-5 w-5 text-brand" strokeWidth={1.8} />
                </div>
                <div className="min-w-0">
                  <span className="block text-xs font-semibold uppercase tracking-[0.16em] text-brand">
                    {t("challenge.pressure.rising")}
                  </span>
                  <span className="block text-sm font-semibold leading-6 text-foreground">
                    {t(`challenge.pressure.items.${p.key}`)}
                  </span>
                </div>
              </div>
            </Reveal>
          );
        })}
      </div>

      <div className="mt-8 flex flex-col items-center gap-4">
        <ArrowDown className="h-5 w-5 animate-bounce text-brand/70" />
        <div className="flex flex-col items-center gap-3 sm:flex-row sm:gap-5">
          <span className="rounded-full border border-border/70 bg-card/70 px-6 py-2.5 text-sm font-semibold text-muted-foreground backdrop-blur-md">
            {t("challenge.pressure.result1")}
          </span>
          <ArrowDown className="h-4 w-4 text-brand/60 sm:-rotate-90 rtl:sm:rotate-90" />
          <span className="rounded-full border border-brand/30 bg-brand-soft/70 px-6 py-2.5 text-sm font-semibold text-foreground backdrop-blur-md">
            {t("challenge.pressure.result2")}
          </span>
        </div>
      </div>
    </div>
  );
}

export function Challenge() {
  const { t } = useTranslation();

  return (
    <section
      id="challenge"
      className="relative overflow-hidden bg-gradient-to-b from-brand-soft via-background to-background py-28"
    >
      <div className="pointer-events-none absolute inset-x-0 top-0 h-64 bg-[var(--gradient-glow)] opacity-40" />
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.05]"
        style={{
          backgroundImage:
            "linear-gradient(to right, currentColor 1px, transparent 1px), linear-gradient(to bottom, currentColor 1px, transparent 1px)",
          backgroundSize: "64px 64px",
          maskImage:
            "radial-gradient(ellipse 70% 60% at 50% 30%, black, transparent)",
          WebkitMaskImage:
            "radial-gradient(ellipse 70% 60% at 50% 30%, black, transparent)",
        }}
      />

      <div className="relative mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-block rounded-full border border-brand/30 bg-brand-soft/70 px-5 py-2 text-xs font-semibold uppercase tracking-[0.25em] text-brand backdrop-blur-md">
            {t("challenge.badge")}
          </span>

          <h2 className="mt-6 text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
            {t("challenge.title")}
          </h2>

          <p className="mt-6 text-lg leading-8 text-muted-foreground">
            {t("challenge.description")}
          </p>
        </div>

        <PressureBar />

        {/* Chapter 1 */}
        <div className="mt-24">
          <Chapter
            icon={Settings2}
            index={1}
            titleKey="challenge.chapters.operational.title"
            subtitleKey="challenge.chapters.operational.subtitle"
          />
          <div className="mt-8 grid gap-8 lg:grid-cols-3">
            <ChallengeCard
              featured
              badgeKey="challenge.cards.feed.badge"
              insightKey="challenge.cards.feed.insight"
              delay={0}
              item={{
                icon: SaudiRiyal,
                titleKey: "challenge.cards.feed.title",
                descKey: "challenge.cards.feed.description",
                impactKey: "challenge.cards.feed.impact",
              }}
            />
            <ChallengeCard
              delay={120}
              item={{
                icon: Users,
                titleKey: "challenge.cards.manual.title",
                descKey: "challenge.cards.manual.description",
                impactKey: "challenge.cards.manual.impact",
              }}
            />
          </div>
        </div>

        {/* Chapter 2 */}
        <div className="mt-24">
          <Chapter
            icon={Thermometer}
            index={2}
            titleKey="challenge.chapters.environmental.title"
            subtitleKey="challenge.chapters.environmental.subtitle"
          />
          <div className="mt-8 grid gap-8 md:grid-cols-2">
            <ChallengeCard
              delay={0}
              item={{
                icon: Thermometer,
                titleKey: "challenge.cards.env.title",
                descKey: "challenge.cards.env.description",
                impactKey: "challenge.cards.env.impact",
              }}
            />
            <ChallengeCard
              delay={120}
              item={{
                icon: Droplets,
                titleKey: "challenge.cards.waste.title",
                descKey: "challenge.cards.waste.description",
                impactKey: "challenge.cards.waste.impact",
              }}
            />
          </div>
        </div>

        {/* Chapter 3 */}
        <div className="mt-24">
          <Chapter
            icon={Brain}
            index={3}
            titleKey="challenge.chapters.decision.title"
            subtitleKey="challenge.chapters.decision.subtitle"
          />
          <div className="mt-8 grid gap-8 md:grid-cols-2">
            <ChallengeCard
              delay={0}
              item={{
                icon: Eye,
                titleKey: "challenge.cards.visibility.title",
                descKey: "challenge.cards.visibility.description",
                impactKey: "challenge.cards.visibility.impact",
              }}
            />
            <ChallengeCard
              delay={120}
              item={{
                icon: AlertTriangle,
                titleKey: "challenge.cards.detection.title",
                descKey: "challenge.cards.detection.description",
                impactKey: "challenge.cards.detection.impact",
              }}
            />
          </div>
        </div>

        {/* Business consequences */}
        <Reveal className="mt-24">
          <div className="overflow-hidden rounded-[2rem] border border-border/70 bg-card/60 px-8 py-14 backdrop-blur-md sm:px-14">
            <div className="mx-auto max-w-3xl text-center">
              <h3 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                {t("challenge.consequences.title")}
              </h3>
              <p className="mx-auto mt-5 text-lg leading-8 text-muted-foreground">
                {t("challenge.consequences.description")}
              </p>
            </div>

            <div className="mx-auto mt-12 flex max-w-3xl flex-col items-center gap-4">
              {["step1", "step2", "step3"].map((step, i) => (
                <div key={step} className="flex w-full flex-col items-center gap-4">
                  <div
                    className={`w-full rounded-2xl border px-6 py-5 text-center text-base font-semibold backdrop-blur-md ${
                      i === 2
                        ? "border-brand/40 bg-brand-soft/70 text-foreground"
                        : "border-border/70 bg-background/60 text-muted-foreground"
                    }`}
                  >
                    {t(`challenge.consequences.${step}`)}
                  </div>
                  {i < 2 ? (
                    <ArrowDown className="h-5 w-5 text-brand/60" />
                  ) : null}
                </div>
              ))}
            </div>
          </div>
        </Reveal>

        {/* Transition */}
        <Reveal className="mt-20">
          <div className="rounded-[2rem] border border-brand/25 bg-brand-soft/70 px-8 py-16 text-center backdrop-blur-md sm:px-16">
            <h3 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              {t("challenge.transition.title")}
            </h3>
            <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-muted-foreground">
              {t("challenge.transition.description")}
            </p>
            <div className="mt-10 flex justify-center">
              <span className="flex h-12 w-12 items-center justify-center rounded-full border border-brand/30 bg-background/70">
                <ChevronDown className="h-6 w-6 animate-bounce text-brand" />
              </span>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
