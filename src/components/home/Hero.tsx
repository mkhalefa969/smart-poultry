import heroIllustration from "@/assets/hero-illustration.png";

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden bg-gradient-hero pt-24 pb-32 lg:pt-32 lg:pb-44">
      {/* Ambient glow */}
      <div
        aria-hidden
        className="absolute inset-0 opacity-70"
        style={{ backgroundImage: "var(--gradient-glow)" }}
      />
      {/* Grain overlay */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.05] mix-blend-overlay"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='200' height='200'><filter id='n'><feTurbulence baseFrequency='0.9' numOctaves='2'/></filter><rect width='100%' height='100%' filter='url(%23n)' opacity='0.6'/></svg>\")",
        }}
      />

      <div className="relative mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 px-4 sm:px-6 lg:grid-cols-12 lg:gap-8 lg:px-8">
        <div className="animate-fade-up lg:col-span-6 lg:pr-6">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3 py-1 text-xs font-medium text-white/90 backdrop-blur">
            <span className="h-1.5 w-1.5 rounded-full bg-highlight" />
            Enterprise SaaS · Built by Alareeb ICT
          </span>
          <h1 className="mt-6 text-[2.5rem] font-bold leading-[1.05] tracking-tight text-white sm:text-5xl lg:text-6xl">
            Turn every poultry house into an{" "}
            <span className="relative inline-block">
              <span className="relative z-10 text-highlight">intelligent</span>
              <span
                aria-hidden
                className="absolute inset-x-0 bottom-1 -z-0 h-3 rounded bg-highlight/20"
              />
            </span>
            , connected operation.
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-white/80">
            Smart Poultry unifies IoT sensors, computer vision, AI insights and Power BI
            analytics into one operating system — so your farms run with precision, not
            guesswork.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a
              href="#cta"
              className="inline-flex items-center gap-2 rounded-full bg-highlight px-6 py-3.5 text-sm font-semibold text-brand-deep shadow-elevated transition-transform hover:scale-[1.03]"
            >
              Request a Demo
              <svg viewBox="0 0 20 20" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="M5 10h10M11 6l4 4-4 4" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>
            <a
              href="#modules"
              className="inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/5 px-6 py-3.5 text-sm font-semibold text-white backdrop-blur transition-colors hover:bg-white/10"
            >
              Explore the platform
            </a>
          </div>

          <dl className="mt-12 grid grid-cols-3 gap-6 border-t border-white/15 pt-8 max-w-lg">
            {[
              { k: "Farms managed", v: "120+" },
              { k: "IoT data points / day", v: "8.4M" },
              { k: "Mortality reduction", v: "-27%" },
            ].map((s) => (
              <div key={s.k}>
                <dt className="text-xs uppercase tracking-wider text-white/60">{s.k}</dt>
                <dd className="mt-1 text-2xl font-bold text-white">{s.v}</dd>
              </div>
            ))}
          </dl>
        </div>

        <div className="relative lg:col-span-6">
          <div className="absolute inset-0 -m-8 rounded-[3rem] bg-white/5 blur-2xl" aria-hidden />
          <img
            src={heroIllustration}
            alt="Smart Poultry platform illustration showing a connected poultry house with sensors, a dashboard tablet, LoRaWAN gateway and analytics cloud"
            width={1408}
            height={1200}
            className="relative w-full animate-float drop-shadow-2xl"
          />
        </div>
      </div>

      {/* Curved bottom transition */}
      <svg
        className="absolute inset-x-0 bottom-0 w-full text-background"
        viewBox="0 0 1440 80"
        preserveAspectRatio="none"
        aria-hidden
      >
        <path fill="currentColor" d="M0,80 L0,32 C240,80 480,0 720,16 C960,32 1200,80 1440,40 L1440,80 Z" />
      </svg>
    </section>
  );
}
