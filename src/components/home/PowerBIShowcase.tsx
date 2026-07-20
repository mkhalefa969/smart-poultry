import dashboardIllustration from "@/assets/dashboard-illustration.png";

const bullets = [
  {
    title: "Real-time KPIs",
    body: "Mortality, FCR, ADG, uniformity and environment metrics — refreshed continuously across every farm.",
  },
  {
    title: "Drill-down analytics",
    body: "From group to farm to house to sensor. Investigate anomalies without leaving the dashboard.",
  },
  {
    title: "Executive & operator reports",
    body: "Automated Power BI reports scheduled to your team, exportable to PDF, Excel or embedded in your BI stack.",
  },
];

export function PowerBIShowcase() {
  return (
    <section id="power-bi" className="relative overflow-hidden bg-brand-deep py-24 text-white">
      <div
        aria-hidden
        className="absolute inset-0 opacity-40"
        style={{ backgroundImage: "var(--gradient-glow)" }}
      />
      <div className="relative mx-auto grid max-w-7xl grid-cols-1 items-center gap-14 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
        <div>
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-highlight">
            Powered by Microsoft Power BI
          </span>
          <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
            The command center for every farm you run.
          </h2>
          <p className="mt-4 text-base leading-relaxed text-white/75">
            Every data point Smart Poultry captures — IoT, vision, cycle events, financials —
            flows into a native Power BI layer built for poultry operations.
          </p>
          <ul className="mt-8 space-y-6">
            {bullets.map((b) => (
              <li key={b.title} className="flex gap-4">
                <span className="mt-1 grid h-8 w-8 shrink-0 place-items-center rounded-lg bg-highlight text-brand-deep">
                  <svg viewBox="0 0 20 20" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <path d="M4 11l4 4 8-8" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </span>
                <div>
                  <div className="text-base font-semibold">{b.title}</div>
                  <p className="mt-1 text-sm leading-relaxed text-white/70">{b.body}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
        <div className="relative">
          <div
            aria-hidden
            className="absolute inset-0 -m-6 rounded-[3rem] bg-highlight/10 blur-3xl"
          />
          <img
            src={dashboardIllustration}
            alt="Power BI style analytics dashboard for poultry operations"
            width={1408}
            height={1008}
            loading="lazy"
            className="relative w-full drop-shadow-2xl"
          />
        </div>
      </div>
    </section>
  );
}
