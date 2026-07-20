import { useEffect, useState } from "react";

const nav = [
  { label: "Solutions", href: "#solutions" },
  { label: "Modules", href: "#modules" },
  { label: "Power BI", href: "#power-bi" },
  { label: "Connectivity", href: "#connectivity" },
  { label: "Outcomes", href: "#outcomes" },
];

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-background/90 backdrop-blur-md border-b border-border shadow-sm"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <a href="#top" className="flex items-center gap-2">
          <span
            className={`grid h-9 w-9 place-items-center rounded-xl ${
              scrolled ? "bg-brand" : "bg-white/15 backdrop-blur"
            }`}
          >
            <svg viewBox="0 0 24 24" className="h-5 w-5 text-highlight" fill="currentColor">
              <path d="M12 2c3 3 5 5.5 5 9a5 5 0 1 1-10 0c0-3.5 2-6 5-9Zm0 7.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5Z" />
            </svg>
          </span>
          <div className={`leading-tight ${scrolled ? "text-foreground" : "text-white"}`}>
            <div className="text-sm font-semibold tracking-tight">Smart Poultry</div>
            <div className={`text-[10px] uppercase tracking-widest ${scrolled ? "text-muted-foreground" : "text-white/70"}`}>
              by Alareeb ICT
            </div>
          </div>
        </a>

        <nav className="hidden items-center gap-8 md:flex">
          {nav.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className={`text-sm font-medium transition-colors ${
                scrolled
                  ? "text-foreground/70 hover:text-brand"
                  : "text-white/80 hover:text-white"
              }`}
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <button
            className={`hidden text-sm font-medium sm:inline-flex transition-colors ${
              scrolled ? "text-foreground/70 hover:text-brand" : "text-white/80 hover:text-white"
            }`}
          >
            العربية
          </button>
          <a
            href="#cta"
            className="inline-flex items-center gap-1.5 rounded-full bg-highlight px-4 py-2 text-sm font-semibold text-brand-deep shadow-sm transition-transform hover:scale-[1.03]"
          >
            Request a Demo
            <svg viewBox="0 0 20 20" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path d="M5 10h10M11 6l4 4-4 4" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </a>
        </div>
      </div>
    </header>
  );
}
