const partners = [
  "Microsoft",
  "NTDP",
  "CAAPP",
  "Almarai",
  "Sadia",
  "ARASCO",
];

export function TrustedBy() {
  return (
    <section className="border-b border-border bg-background py-14">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <p className="text-center text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">
          Trusted by integrators & producers across the region
        </p>
        <div className="mt-8 grid grid-cols-2 items-center gap-x-8 gap-y-6 sm:grid-cols-3 lg:grid-cols-6">
          {partners.map((p) => (
            <div
              key={p}
              className="flex items-center justify-center text-center text-sm font-semibold uppercase tracking-widest text-muted-foreground/70 transition-colors hover:text-brand"
            >
              {p}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
