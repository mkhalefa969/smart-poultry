import { useEffect, useRef, useState } from "react";
import {
  SaudiRiyal,
  Thermometer,
  Droplets,
  Eye,
  Users,
  AlertTriangle,
  type LucideIcon,
} from "lucide-react";

type Challenge = {
  icon: LucideIcon;
  title: string;
  description: string;
  insight: string;
};

const categories: { label: string; items: Challenge[] }[] = [
  {
    label: "Operational Challenges",
    items: [
      {
        icon: SaudiRiyal,
        title: "Rising Feed Costs",
        description:
          "Feed represents the largest production cost. Even small inefficiencies in feed conversion significantly impact farm profitability.",
        insight: "Feed can account for up to 70% of total poultry production costs.",
      },
      {
        icon: Users,
        title: "Manual Farm Operations",
        description:
          "Daily monitoring, reporting and inspections rely heavily on manual work, slowing response times and increasing operational inconsistency.",
        insight: "Manual processes delay critical operational decisions.",
      },
    ],
  },
  {
    label: "Environmental Challenges",
    items: [
      {
        icon: Thermometer,
        title: "Environmental Instability",
        description:
          "Temperature, humidity, ammonia and CO₂ fluctuations directly affect bird welfare, growth performance and production consistency.",
        insight: "Environmental changes can impact flock performance within hours.",
      },
      {
        icon: Droplets,
        title: "Water & Feed Waste",
        description:
          "Hidden losses often remain unnoticed until they negatively affect profitability and production efficiency.",
        insight: "Small resource losses accumulate into significant operational costs.",
      },
    ],
  },
  {
    label: "Decision Intelligence Challenges",
    items: [
      {
        icon: Eye,
        title: "Limited Operational Visibility",
        description:
          "Farm data is scattered across sensors, spreadsheets and disconnected systems, making informed decisions difficult.",
        insight: "Disconnected information creates delayed responses.",
      },
      {
        icon: AlertTriangle,
        title: "Late Problem Detection",
        description:
          "Health issues, equipment failures and environmental risks are often identified only after productivity has already declined.",
        insight:
          "Early detection enables proactive intervention instead of reactive management.",
      },
    ],
  },
];

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
      { threshold: 0.15 },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return { ref, visible };
}

function ChallengeCard({ item, delay }: { item: Challenge; delay: number }) {
  const { ref, visible } = useInView<HTMLDivElement>();
  const Icon = item.icon;

  return (
    <div
      ref={ref}
      style={{ transitionDelay: `${delay}ms` }}
      className={`group rounded-3xl border border-border bg-card p-9 shadow-sm transition-all duration-700 ease-out hover:-translate-y-2 hover:border-brand/40 hover:shadow-elevated hover:ring-4 hover:ring-brand/10 ${
        visible ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
      }`}
    >
      <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-brand/10 transition-colors duration-300 group-hover:bg-brand/15">
        <Icon className="h-7 w-7 text-brand" strokeWidth={1.75} />
      </div>

      <h3 className="mt-7 text-2xl font-bold tracking-tight text-foreground">
        {item.title}
      </h3>

      <p className="mt-4 leading-7 text-muted-foreground">{item.description}</p>

      <p className="mt-6 border-t border-border pt-5 text-sm leading-6 text-muted-foreground/80">
        {item.insight}
      </p>
    </div>
  );
}

export function Challenge() {
  return (
    <section
      id="challenge"
      className="relative overflow-hidden bg-gradient-to-b from-brand-soft via-background to-background py-28"
    >
      <div className="pointer-events-none absolute inset-x-0 top-0 h-64 bg-[var(--gradient-glow)] opacity-40" />

      <div className="relative mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-3xl text-center">
          <span className="text-sm font-semibold uppercase tracking-[0.25em] text-brand">
            Industry Challenges
          </span>

          <h2 className="mt-5 text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
            Why Modern Poultry Operations Are Losing Profit Every Day
          </h2>

          <p className="mt-6 text-lg leading-8 text-muted-foreground">
            Rising feed costs, unpredictable flock performance, labour shortages and
            disconnected farm data make profitable poultry operations increasingly
            difficult — and these challenges are connected, not isolated.
          </p>
        </div>

        <div className="mt-20 grid gap-x-8 gap-y-16 md:grid-cols-2 lg:grid-cols-3">
          {categories.map((category, ci) => (
            <div key={category.label} className="flex flex-col">
              <div className="flex items-center gap-3">
                <span className="h-px w-8 bg-brand/40" />
                <h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-brand">
                  {category.label}
                </h3>
              </div>

              <div className="mt-8 flex flex-1 flex-col gap-8">
                {category.items.map((item, ii) => (
                  <ChallengeCard
                    key={item.title}
                    item={item}
                    delay={ci * 120 + ii * 100}
                  />
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-24 rounded-[2rem] border border-border bg-brand-soft/70 px-8 py-16 text-center sm:px-16">
          <h3 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            The challenge isn't collecting data.
          </h3>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-muted-foreground">
            It's turning thousands of daily data points into the right operational
            decision before productivity is affected.
          </p>
        </div>
      </div>
    </section>
  );
}
