export function SiteHeader() {
  const links = [
    "Platform",
    "Modules",
    "AI & Vision",
    "Power BI",
    "Industries",
  ];
  return (
    <nav className="sticky top-0 z-50 flex h-16 items-center justify-between border-b border-border bg-background/90 px-6 backdrop-blur-md">
      <div className="flex items-center gap-8">
        <a href="/" className="flex items-center gap-2">
          <span className="grid size-7 place-items-center rounded-sm bg-brand text-primary-foreground">
            <span className="size-2 rounded-full bg-highlight" />
          </span>
          <span className="text-xl font-bold tracking-tight text-brand">
            SMART POULTRY
          </span>
        </a>
        <div className="hidden gap-6 text-sm font-medium text-foreground/80 md:flex">
          {links.map((l) => (
            <a
              key={l}
              href="#"
              className="transition-colors hover:text-brand"
            >
              {l}
            </a>
          ))}
        </div>
      </div>
      <div className="flex items-center gap-4">
        <span className="rounded border border-border px-2 py-1 text-xs font-bold text-foreground/70">
          EN
        </span>
        <button className="rounded-sm bg-highlight px-5 py-2 text-sm font-bold text-brand-deep transition-all hover:brightness-105">
          Request Demo
        </button>
      </div>
    </nav>
  );
}
