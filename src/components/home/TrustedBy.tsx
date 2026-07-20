export function TrustedBy() {
  const names = ["AL-WATANIA", "SADCO", "POULTRY CO.", "GLOBAL FOODS", "AGRI-TECH INT"];
  return (
    <div className="border-y border-border py-8">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-6 px-6 opacity-50">
        {names.map((n) => (
          <span key={n} className="text-sm font-bold tracking-widest text-foreground">
            {n}
          </span>
        ))}
      </div>
    </div>
  );
}
