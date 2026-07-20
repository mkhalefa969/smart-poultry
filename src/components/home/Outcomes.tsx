export function Outcomes() {
  const items = [
    { label: "Feed waste", value: "↓ 14%" },
    { label: "Mortality", value: "↓ 0.8%" },
    { label: "FCR gain", value: "↑ 5.2%" },
    { label: "Visibility", value: "100%" },
  ];
  return (
    <section className="bg-brand px-6 py-24">
      <div className="mx-auto grid max-w-7xl grid-cols-2 gap-12 md:grid-cols-4">
        {items.map((i) => (
          <div key={i.label} className="text-center">
            <p className="mb-2 text-xs font-bold uppercase tracking-widest text-primary-foreground/60">
              {i.label}
            </p>
            <p className="text-5xl font-bold text-highlight">{i.value}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
