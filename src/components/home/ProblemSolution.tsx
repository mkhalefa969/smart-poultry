const pains = [
  "Blind spots in temperature, humidity, feed and water usage.",
  "Manual data entry and spreadsheets that arrive too late to act on.",
  "Health issues detected only after mortality spikes.",
];
const gains = [
  "Live IoT telemetry from every house, 24/7 — no manual rounds.",
  "AI models that flag anomalies hours before they hurt the flock.",
  "One unified Power BI view across every farm, cycle and KPI.",
];

export function ProblemSolution() {
  return (
    <section id="solutions" className="relative bg-background py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-brand">
            The problem &amp; the shift
          </span>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Traditional farms lose margin to blind spots.
            <br />
            <span className="text-brand">Smart Poultry closes them.</span>
          </h2>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-6 lg:grid-cols-2">
          <div className="rounded-3xl border border-border bg-muted/40 p-8 lg:p-10">
            <div className="flex items-center gap-3">
              <div className="grid h-10 w-10 place-items-center rounded-xl bg-destructive/10 text-destructive">
                <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M12 9v4m0 4h.01M4.93 19h14.14a2 2 0 0 0 1.75-2.97l-7.07-12.7a2 2 0 0 0-3.5 0l-7.07 12.7A2 2 0 0 0 4.93 19Z" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-foreground">Before Smart Poultry</h3>
            </div>
            <ul className="mt-6 space-y-4">
              {pains.map((p) => (
                <li key={p} className="flex gap-3 text-sm leading-relaxed text-muted-foreground">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-destructive/60" />
                  {p}
                </li>
              ))}
            </ul>
          </div>

          <div className="relative overflow-hidden rounded-3xl bg-gradient-brand p-8 text-white shadow-elevated lg:p-10">
            <div
              aria-hidden
              className="absolute -right-16 -top-16 h-56 w-56 rounded-full bg-highlight/20 blur-3xl"
            />
            <div className="relative flex items-center gap-3">
              <div className="grid h-10 w-10 place-items-center rounded-xl bg-highlight text-brand-deep">
                <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold">With Smart Poultry</h3>
            </div>
            <ul className="relative mt-6 space-y-4">
              {gains.map((g) => (
                <li key={g} className="flex gap-3 text-sm leading-relaxed text-white/90">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-highlight" />
                  {g}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
