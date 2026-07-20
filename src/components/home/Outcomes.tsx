const stats = [
  { v: "-27%", k: "Mortality rate", d: "Across broiler cycles after 6 months of deployment." },
  { v: "+8%", k: "Feed conversion", d: "Improved FCR through continuous environment tuning." },
  { v: "-40%", k: "Manual reporting", d: "Hours saved per week per farm manager." },
  { v: "<2 min", k: "Alert response", d: "From anomaly detection to on-ground action." },
];

export function Outcomes() {
  return (
    <section id="outcomes" className="relative overflow-hidden bg-gradient-brand py-24 text-white">
      <div aria-hidden className="absolute inset-0 opacity-50" style={{ backgroundImage: "var(--gradient-glow)" }} />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-highlight">
            Measurable outcomes
          </span>
          <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
            Results our customers see in the first cycles.
          </h2>
        </div>

        <div className="mt-14 grid grid-cols-2 gap-4 lg:grid-cols-4 lg:gap-6">
          {stats.map((s) => (
            <div
              key={s.k}
              className="rounded-2xl border border-white/15 bg-white/5 p-6 backdrop-blur transition-transform hover:-translate-y-1"
            >
              <div className="text-4xl font-bold text-highlight lg:text-5xl">{s.v}</div>
              <div className="mt-3 text-sm font-semibold">{s.k}</div>
              <p className="mt-1 text-xs leading-relaxed text-white/70">{s.d}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
