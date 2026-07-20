import connectivityIllustration from "@/assets/connectivity-illustration.png";

const layers = [
  { k: "Edge", v: "IoT sensors + AI cameras deployed inside every house." },
  { k: "Network", v: "LoRaWAN gateway aggregates telemetry — kilometers of range, minimal power." },
  { k: "Cloud", v: "Secure ingestion, storage and AI processing on enterprise infrastructure." },
  { k: "Apps", v: "Web dashboards, Power BI reports and mobile alerts for every stakeholder." },
];

export function Connectivity() {
  return (
    <section id="connectivity" className="relative bg-background py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-brand">
            Connectivity
          </span>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            LoRaWAN-first, cloud-native, remote-farm ready.
          </h2>
          <p className="mt-4 text-base text-muted-foreground">
            Built for farms where Wi-Fi and cellular can't reach. Signal travels kilometers on
            low power — with enterprise-grade cloud on the other end.
          </p>
        </div>

        <div className="mt-14 grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
          <div className="relative">
            <div
              aria-hidden
              className="absolute inset-0 -m-4 rounded-[2rem] bg-brand/5"
            />
            <img
              src={connectivityIllustration}
              alt="LoRaWAN connectivity diagram: sensors, gateway, cloud, dashboards"
              width={1408}
              height={912}
              loading="lazy"
              className="relative w-full"
            />
          </div>
          <ol className="space-y-4">
            {layers.map((l, i) => (
              <li
                key={l.k}
                className="flex gap-5 rounded-2xl border border-border bg-card p-5 transition-colors hover:border-brand/30"
              >
                <div className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-brand text-sm font-bold text-highlight">
                  {String(i + 1).padStart(2, "0")}
                </div>
                <div>
                  <div className="text-sm font-semibold uppercase tracking-wider text-brand">
                    {l.k}
                  </div>
                  <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{l.v}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
