export function PowerBIShowcase() {
  const bars = [60, 65, 72, 80, 74, 92, 85];
  const days = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
  return (
    <section className="bg-surface px-6 py-24">
      <div className="mx-auto max-w-7xl">
        <div className="mb-16 text-center">
          <p className="mb-3 text-xs font-bold uppercase tracking-widest text-brand">
            Power BI · Executive Analytics
          </p>
          <h2 className="mb-4 text-4xl font-bold">
            From data to decisions in seconds.
          </h2>
          <p className="text-foreground/60">
            Enterprise-grade Power BI dashboards for total visibility, from farm
            KPIs down to individual house events.
          </p>
        </div>
        <div className="grid gap-8 lg:grid-cols-3">
          <div className="rounded-xl border border-border bg-background p-6 shadow-sm lg:col-span-2">
            <div className="mb-8 flex items-center justify-between">
              <p className="font-bold">Environmental Trend Analysis</p>
              <div className="flex gap-4 text-xs font-medium">
                <span className="flex items-center gap-2">
                  <div className="size-2 rounded-full bg-brand" /> Temp (24.6°C)
                </span>
                <span className="flex items-center gap-2">
                  <div className="size-2 rounded-full bg-highlight" /> Humidity (62%)
                </span>
              </div>
            </div>
            <div className="flex h-64 items-end gap-2">
              {bars.map((h, i) => (
                <div key={i} className="flex h-full w-full flex-col justify-end gap-1">
                  <div
                    className={`w-full ${i === 5 ? "bg-brand" : "bg-brand/25"}`}
                    style={{ height: `${h}%` }}
                  />
                  <span className="text-center font-mono text-[9px] text-foreground/40">
                    {days[i]}
                  </span>
                </div>
              ))}
            </div>
          </div>
          <div className="space-y-6">
            <div className="rounded-xl border border-border bg-background p-6 shadow-sm">
              <p className="mb-4 text-xs font-bold uppercase text-brand">
                Gas Concentration
              </p>
              <p className="mb-1 text-4xl font-bold">12 ppm</p>
              <p className="text-xs text-foreground/60">
                Ammonia levels — optimal range
              </p>
              <div className="mt-4 h-1 w-full overflow-hidden rounded-full bg-brand/10">
                <div className="h-full w-[24%] bg-brand" />
              </div>
            </div>
            <div className="rounded-xl border border-border bg-background p-6 shadow-sm">
              <p className="mb-4 text-xs font-bold uppercase text-brand">
                Growth Trajectory
              </p>
              <div className="flex items-center gap-5">
                <div className="relative size-16">
                  <svg viewBox="0 0 36 36" className="size-16 -rotate-90">
                    <circle
                      cx="18"
                      cy="18"
                      r="15"
                      fill="none"
                      stroke="var(--brand-soft)"
                      strokeWidth="4"
                    />
                    <circle
                      cx="18"
                      cy="18"
                      r="15"
                      fill="none"
                      stroke="var(--highlight)"
                      strokeWidth="4"
                      strokeDasharray="94.2"
                      strokeDashoffset="18"
                      strokeLinecap="round"
                    />
                  </svg>
                </div>
                <div>
                  <p className="text-3xl font-bold">+4.2%</p>
                  <p className="text-xs text-foreground/60">Ahead of target</p>
                </div>
              </div>
            </div>
            <div className="rounded-xl border border-border bg-background p-6 shadow-sm">
              <p className="mb-4 text-xs font-bold uppercase text-brand">
                Predictive AI
              </p>
              <p className="mb-1 text-3xl font-bold">Day 38</p>
              <p className="text-xs text-foreground/60">
                Optimal selling date forecast
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
