export function ProblemSolution() {
  const problems = [
    "Manual mortality logging with 24h delay",
    "Disconnected siloed environmental systems",
    "Inaccurate FCR forecasting causing feed waste",
    "Reactive decisions based on operator experience",
  ];
  const solutions = [
    "AI computer vision for instant mortality detection",
    "LoRaWAN sensors sync every house in real time",
    "Predictive AI models forecast FCR and selling date",
    "Recommended actions delivered before problems occur",
  ];
  return (
    <section className="px-6 py-24">
      <div className="mx-auto grid max-w-7xl gap-16 md:grid-cols-2">
        <div>
          <h2 className="mb-4 text-sm font-bold uppercase tracking-widest text-brand">
            The Industry Challenge
          </h2>
          <h3 className="mb-8 text-3xl font-bold">
            Fragmented data leads to reactive management.
          </h3>
          <div className="space-y-5">
            {problems.map((p) => (
              <div key={p} className="flex gap-4">
                <div className="grid size-6 flex-none place-items-center rounded bg-destructive/10 text-xs font-bold text-destructive">
                  ✕
                </div>
                <p className="text-foreground/80">{p}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="rounded-sm bg-brand p-12 text-primary-foreground">
          <h2 className="mb-4 text-sm font-bold uppercase tracking-widest text-highlight">
            The Smart Poultry OS
          </h2>
          <h3 className="mb-8 text-3xl font-bold">
            Real-time oversight for preventative operations.
          </h3>
          <div className="space-y-5">
            {solutions.map((s) => (
              <div key={s} className="flex gap-4">
                <div className="grid size-6 flex-none place-items-center rounded bg-highlight/20 text-xs font-bold text-highlight">
                  ✓
                </div>
                <p className="opacity-90">{s}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
