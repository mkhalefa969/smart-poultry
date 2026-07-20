const MODULES = [
  { name: "Farm Management", desc: "Multi-site resource allocation and geo-spatial tracking." },
  { name: "House Monitoring", desc: "Real-time status for every building in your network." },
  { name: "Flock Health", desc: "Predictive health modeling and vaccination tracking." },
  { name: "Environmental", desc: "Temperature, humidity and ammonia automated control." },
  { name: "Feeding Systems", desc: "Automated silo tracking and distribution logic." },
  { name: "Water Control", desc: "Consumption monitoring and water-to-feed ratio." },
  { name: "AI Analytics", desc: "Proprietary models for cycle performance optimization." },
  { name: "Computer Vision", desc: "Live bird counting and behavior anomaly detection." },
  { name: "Power BI", desc: "Direct pipeline into your Microsoft enterprise stack." },
  { name: "Alerts & Alarms", desc: "Mission-critical notifications via SMS and push." },
  { name: "Cycle Planning", desc: "End-to-end placement and harvest scheduling." },
  { name: "Smart Reporting", desc: "Regulatory-ready exports and PDF snapshots." },
];

export function ModulesGrid() {
  return (
    <section className="bg-brand-deep px-6 py-24">
      <div className="mx-auto max-w-7xl">
        <div className="mb-16">
          <h2 className="mb-4 text-sm font-bold uppercase tracking-widest text-highlight">
            Integrated Ecosystem
          </h2>
          <h3 className="text-4xl font-bold text-primary-foreground">
            Modular power. Unified control.
          </h3>
        </div>
        <div className="grid grid-cols-2 gap-px border border-white/10 bg-white/10 md:grid-cols-3 lg:grid-cols-4">
          {MODULES.map((m) => (
            <div
              key={m.name}
              className="bg-brand-deep p-8 transition-colors hover:bg-brand/20"
            >
              <p className="mb-2 font-bold text-primary-foreground">{m.name}</p>
              <p className="text-xs text-primary-foreground/60">{m.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
