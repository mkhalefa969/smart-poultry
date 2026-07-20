export function Connectivity() {
  return (
    <section className="overflow-hidden border-t border-border px-6 py-24">
      <div className="mx-auto max-w-7xl">
        <div className="grid items-center gap-20 lg:grid-cols-2">
          <div>
            <p className="mb-3 text-xs font-bold uppercase tracking-widest text-brand">
              IoT · LoRaWAN Infrastructure
            </p>
            <h2 className="mb-6 text-3xl font-bold">
              Resilient connectivity across every farm.
            </h2>
            <p className="mb-8 text-foreground/70">
              Long-range, low-power LoRaWAN keeps hundreds of sensors talking
              across kilometers of poultry facilities — through concrete,
              through weather, without complex wiring.
            </p>
            <div className="space-y-4">
              <div className="border-l-4 border-brand bg-surface p-4">
                <p className="text-sm font-bold">Sensors → Gateway</p>
                <p className="text-xs text-foreground/60">
                  Industrial LoRaWAN signal through solid structures.
                </p>
              </div>
              <div className="border-l-4 border-brand/40 bg-surface p-4">
                <p className="text-sm font-bold">Gateway → Cloud AI</p>
                <p className="text-xs text-foreground/60">
                  Encrypted cellular or satellite backhaul.
                </p>
              </div>
              <div className="border-l-4 border-highlight bg-surface p-4">
                <p className="text-sm font-bold">Cloud → Power BI</p>
                <p className="text-xs text-foreground/60">
                  Streaming pipeline into your enterprise analytics.
                </p>
              </div>
            </div>
          </div>
          <div className="relative flex justify-center">
            <div className="absolute inset-0 scale-150 rounded-full bg-brand/5 blur-3xl" />
            <div className="relative flex size-80 items-center justify-center">
              <div className="absolute size-full animate-[spin_60s_linear_infinite] rounded-full border border-dashed border-brand/20" />
              <div className="absolute size-60 animate-[spin_30s_linear_infinite_reverse] rounded-full border border-dashed border-brand/30" />
              <div className="z-10 flex size-24 items-center justify-center rounded-xl bg-brand-deep font-bold text-primary-foreground shadow-xl">
                GATEWAY
              </div>
              <div className="absolute top-0 size-4 rounded-full border-4 border-background bg-highlight shadow-sm" />
              <div className="absolute bottom-10 left-0 size-4 rounded-full border-4 border-background bg-brand shadow-sm" />
              <div className="absolute right-0 top-20 size-4 rounded-full border-4 border-background bg-brand shadow-sm" />
              <div className="absolute bottom-4 right-10 size-4 rounded-full border-4 border-background bg-brand shadow-sm" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
