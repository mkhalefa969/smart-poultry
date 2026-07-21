import {
  Bird,
  Thermometer,
  Wheat,
  Droplets,
  Cpu,
  BrainCircuit,
  ArrowRight,
} from "lucide-react";

const operations = [
  {
    icon: Bird,
    title: "Bird Performance",
    description:
      "Monitor flock health, growth rate, mortality, and production performance throughout the production cycle.",
  },
  {
    icon: Thermometer,
    title: "Environmental Control",
    description:
      "Track temperature, humidity, CO₂ and ammonia levels in real time to maintain optimal conditions.",
  },
  {
    icon: Wheat,
    title: "Feed Management",
    description:
      "Measure feed consumption, silo levels and feeding efficiency to optimize FCR and reduce waste.",
  },
  {
    icon: Droplets,
    title: "Water Monitoring",
    description:
      "Monitor water consumption patterns and detect abnormal behavior before it impacts production.",
  },
];

const intelligence = [
  "Real-time IoT Monitoring",
  "Computer Vision Analytics",
  "AI-powered Decision Support",
  "Predictive Alerts",
  "Power BI Executive Dashboards",
  "Continuous Performance Optimization",
];

export function ProblemSolution() {
  return (
    <section id="solutions" className="bg-background py-28">
      <div className="mx-auto max-w-7xl px-6">

        {/* Header */}

        <div className="mx-auto max-w-3xl text-center">

          <span className="text-sm font-semibold uppercase tracking-[0.25em] text-brand">
            Enterprise Operations Platform
          </span>

          <h2 className="mt-5 text-5xl font-bold tracking-tight text-foreground">
            One Platform.
            <span className="block text-brand">
              Complete Farm Intelligence.
            </span>
          </h2>

          <p className="mt-6 text-lg leading-8 text-muted-foreground">
            Smart Poultry connects every operational layer of your poultry farm
            into one intelligent platform that continuously monitors, analyses,
            predicts and optimizes production performance.
          </p>

        </div>

        {/* Content */}

        <div className="mt-20 grid items-center gap-10 lg:grid-cols-[1fr_220px_1fr]">

          {/* Left */}

          <div className="rounded-3xl border border-border bg-card p-10">

            <h3 className="text-2xl font-bold text-foreground">
              Farm Operations
            </h3>

            <p className="mt-3 text-muted-foreground">
              Every production cycle generates thousands of operational events.
              Smart Poultry captures them automatically.
            </p>

            <div className="mt-10 space-y-6">

              {operations.map((item) => {

                const Icon = item.icon;

                return (
                  <div
                    key={item.title}
                    className="flex items-start gap-5"
                  >
                    <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-brand/10">
                      <Icon className="h-7 w-7 text-brand" />
                    </div>

                    <div>

                      <h4 className="text-lg font-semibold">
                        {item.title}
                      </h4>

                      <p className="mt-2 text-sm leading-7 text-muted-foreground">
                        {item.description}
                      </p>

                    </div>

                  </div>
                );

              })}

            </div>

          </div>
{/* Center Platform */}

<div className="hidden lg:flex flex-col items-center justify-center">

  <div className="rounded-3xl border border-brand/20 bg-white p-8 shadow-xl">

    <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-brand text-white">

      <BrainCircuit className="h-10 w-10" />

    </div>

    <h3 className="mt-6 text-center text-xl font-bold">
      Smart Poultry
    </h3>

    <p className="mt-2 text-center text-sm text-muted-foreground">
      Cognitive Enterprise Platform
    </p>

            <div className="mt-6 space-y-2 text-center text-sm">

            <div>IoT Sensors</div>

            <div>Computer Vision</div>

           <div>Artificial Intelligence</div>

           <div>Power BI</div>

           <div>Automation</div>

           </div>

           </div>

          </div>
          {/* Right */}

          <div className="rounded-3xl bg-gradient-brand p-10 text-white shadow-elevated">

            <div className="flex items-center gap-4">

              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white text-brand">
                <BrainCircuit className="h-8 w-8" />
              </div>

              <div>

                <h3 className="text-2xl font-bold">
                  Cognitive Intelligence Engine
                </h3>

                <p className="mt-2 text-white/80">
                  Transform operational data into intelligent business decisions.
                </p>

              </div>

            </div>

            <div className="mt-10 space-y-6">

              {intelligence.map((item) => (

                <div
                  key={item}
                  className="flex items-center gap-4"
                >

                  <ArrowRight className="h-5 w-5 text-highlight" />

                  <span className="text-white/90">
                    {item}
                  </span>

                </div>

              ))}

            </div>

            <div className="mt-12 rounded-2xl bg-white/10 p-6 backdrop-blur">

              <div className="flex items-center gap-4">

                <Cpu className="h-10 w-10 text-highlight" />

                <div>

                  <h4 className="font-semibold">
                    The Cognitive Enterprise Platform
                  </h4>

                  <p className="mt-2 text-sm leading-6 text-white/80">
                    IoT Sensors + Computer Vision + Artificial Intelligence +
                    Power BI + Automation working together as one connected
                    operating system.
                  </p>

                </div>

              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}