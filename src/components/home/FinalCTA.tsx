export function FinalCTA() {
  return (
    <section id="cta" className="relative bg-background py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-[2rem] bg-brand-deep p-10 text-white shadow-elevated lg:p-16">
          <div
            aria-hidden
            className="absolute -right-24 -top-24 h-72 w-72 rounded-full bg-highlight/25 blur-3xl"
          />
          <div
            aria-hidden
            className="absolute -bottom-32 -left-16 h-72 w-72 rounded-full bg-brand-teal/40 blur-3xl"
          />
          <div className="relative grid grid-cols-1 items-center gap-8 lg:grid-cols-5">
            <div className="lg:col-span-3">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
                Ready to modernize your farms?
              </h2>
              <p className="mt-3 max-w-xl text-base text-white/75">
                Book a live walkthrough with the Alareeb ICT team. We'll map Smart Poultry to
                your operation and show a real dashboard in under 30 minutes.
              </p>
            </div>
            <div className="flex flex-wrap items-center gap-3 lg:col-span-2 lg:justify-end">
              <a
                href="mailto:contact@alareeb.com"
                className="inline-flex items-center gap-2 rounded-full bg-highlight px-6 py-3.5 text-sm font-semibold text-brand-deep shadow-elevated transition-transform hover:scale-[1.03]"
              >
                Request a Demo
              </a>
              <a
                href="mailto:sales@alareeb.com"
                className="inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/5 px-6 py-3.5 text-sm font-semibold text-white backdrop-blur transition-colors hover:bg-white/10"
              >
                Talk to sales
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
