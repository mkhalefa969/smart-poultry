import { useEffect, useState } from "react";
import logo from "../../assets/logo.png.png";
const nav = [
  { label: "Home", href: "#top" },
  { label: "Solutions", href: "#solutions" },
  { label: "Case Studies", href: "#casestudies" },
  { label: "Pricing", href: "#pricing" },
  { label: "Contact Us", href: "#contact" },
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
        
        {/* Logo */}
        <a href="#top" className="flex items-center">
          <img
            src={logo}
            alt="Smart Poultry"
            className="h-12 w-auto transition-all duration-300"
          />
        </a>

        {/* Navigation */}
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

        {/* Right Side */}
        <div className="flex items-center gap-3">
          <button
            className={`hidden text-sm font-medium sm:inline-flex transition-colors ${
              scrolled
                ? "text-foreground/70 hover:text-brand"
                : "text-white/80 hover:text-white"
            }`}
          >
            EN | العربية
          </button>

          <a
            href="#cta"
            className="inline-flex items-center gap-1.5 rounded-full bg-highlight px-4 py-2 text-sm font-semibold text-brand-deep shadow-sm transition-transform hover:scale-[1.03]"
          >
            Request a Demo

            <svg
              viewBox="0 0 20 20"
              className="h-4 w-4"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
            >
              <path
                d="M5 10h10M11 6l4 4-4 4"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </a>
        </div>
      </div>
    </header>
  );
}