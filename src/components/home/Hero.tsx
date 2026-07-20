export function Hero() {
  return (
    <section className="relative overflow-hidden px-6 pb-16 pt-20">
      <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-12">
        <div className="animate-fade-up lg:col-span-5">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-border bg-surface px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-brand">
            <span className="relative flex size-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-highlight opacity-75" />
              <span className="relative inline-flex size-2 rounded-full bg-highlight" />
            </span>
            An Alareeb ICT platform
          </div>
          <h1 className="mb-6 text-balance text-5xl font-bold leading-[1.05] tracking-tight lg:text-6xl">
            The AI Operating System for{" "}
            <span className="text-brand">Modern Poultry Farms</span>
          </h1>
          <p className="mb-8 max-w-[46ch] text-pretty text-lg text-foreground/70">
            Unify IoT sensors, computer vision, and predictive analytics into a
            single command center. Precision poultry at enterprise scale.
          </p>
          <div className="flex flex-wrap gap-4">
            <button className="rounded-sm bg-brand px-8 py-4 text-sm font-semibold text-primary-foreground transition-transform hover:-translate-y-0.5">
              Request Demo
            </button>
            <button className="rounded-sm border border-brand px-8 py-4 text-sm font-semibold text-brand transition-colors hover:bg-brand-soft">
              Explore Platform
            </button>
          </div>
        </div>

        <div className="relative animate-fade-up lg:col-span-7 [animation-delay:200ms]">
          <DashboardMockup />
        </div>
      </div>
    </section>
  );
}

function DashboardMockup() {
  const kpis = [
    { label: "FCR", value: "1.62", meta: "82% of target", accent: "brand" },
    {
      label: "Mortality",
      value: "2.1%",
      meta: "+0.2% vs target",
      accent: "destructive",
    },
    { label: "Avg Weight", value: "2.34 kg", meta: "On schedule", accent: "brand" },
  ];
  return (
    <div className="rounded-xl border border-border bg-surface p-4 shadow-2xl ring-1 ring-black/5">
      <div className="mb-4 flex items-center justify-between border-b border-border pb-3">
        <div className="flex gap-2">
          <div className="size-3 rounded-full bg-destructive/70" />
          <div className="size-3 rounded-full bg-highlight" />
          <div className="size-3 rounded-full bg-brand" />
        </div>
        <span className="font-mono text-[10px] uppercase tracking-widest text-brand/60">
          Live System Feed // House 04
        </span>
      </div>

      <div className="mb-4 grid grid-cols-3 gap-3">
        {kpis.map((k) => (
          <div
            key={k.label}
            className="rounded border border-border bg-background p-3"
          >
            <p className="mb-1 text-[10px] font-bold uppercase text-foreground/60">
              {k.label}
            </p>
            <p
              className={`text-2xl font-bold ${k.accent === "destructive" ? "text-destructive" : "text-foreground"}`}
            >
              {k.value}
            </p>
            <p
              className={`mt-1 text-[10px] font-medium ${k.accent === "destructive" ? "text-destructive" : "text-brand"}`}
            >
              {k.meta}
            </p>
          </div>
        ))}
      </div>

      <div className="relative overflow-hidden rounded border border-border bg-background p-4">
        {/* Product surface: sparkline + house diagram */}
        <div className="mb-3 flex items-center justify-between">
          <p className="text-xs font-semibold text-foreground/70">
            House 04 · Environmental telemetry (24h)
          </p>
          <p className="font-mono text-[10px] uppercase tracking-widest text-foreground/40">
            24.6°C · 62% RH · 12 ppm NH₃
          </p>
        </div>
        <svg viewBox="0 0 400 120" className="h-32 w-full">
          <defs>
            <linearGradient id="sp-line" x1="0" x2="0" y1="0" y2="1">
              <stop offset="0%" stopColor="var(--brand)" stopOpacity="0.35" />
              <stop offset="100%" stopColor="var(--brand)" stopOpacity="0" />
            </linearGradient>
          </defs>
          <path
            d="M0,90 C40,80 60,60 100,65 C140,70 160,40 200,45 C240,50 260,30 300,25 C340,20 360,45 400,35 L400,120 L0,120 Z"
            fill="url(#sp-line)"
          />
          <path
            d="M0,90 C40,80 60,60 100,65 C140,70 160,40 200,45 C240,50 260,30 300,25 C340,20 360,45 400,35"
            fill="none"
            stroke="var(--brand)"
            strokeWidth="2"
          />
        </svg>
        <div className="mt-3 grid grid-cols-4 gap-2">
          {["S1", "S2", "S3", "S4"].map((s, i) => (
            <div
              key={s}
              className="flex items-center justify-between rounded bg-surface px-2 py-1.5"
            >
              <span className="font-mono text-[9px] text-foreground/50">{s}</span>
              <span className="size-1.5 rounded-full bg-brand" style={{ opacity: 0.4 + i * 0.15 }} />
            </div>
          ))}
        </div>

        {/* CV Chip Overlay */}
        <div className="absolute right-4 top-4 rounded border border-white/10 bg-brand-deep/95 p-2 text-primary-foreground backdrop-blur">
          <div className="mb-1 flex items-center gap-2">
            <div className="size-1.5 animate-pulse rounded-full bg-highlight" />
            <span className="text-[9px] font-bold uppercase tracking-tighter">
              CV Analysis: Active
            </span>
          </div>
          <p className="text-[10px] leading-tight opacity-80">
            Bird Distribution: 94% Uniform
            <br />
            Activity Index: Optimal
          </p>
        </div>
      </div>
    </div>
  );
}
