import {
  DollarSign,
  Thermometer,
  Droplets,
  Eye,
  Users,
  AlertTriangle,
} from "lucide-react";

const challenges = [
  {
    icon: DollarSign,
    title: "Rising Feed Costs",
    description:
      "Feed accounts for the largest portion of poultry production costs. Small inefficiencies quickly become significant financial losses.",
  },
  {
    icon: Thermometer,
    title: "Environmental Instability",
    description:
      "Temperature, humidity, CO₂ and ammonia fluctuations directly impact bird health and productivity.",
  },
  {
    icon: Droplets,
    title: "Resource Waste",
    description:
      "Hidden feed and water losses reduce profitability without being noticed until it's too late.",
  },
  {
    icon: Users,
    title: "Manual Operations",
    description:
      "Daily farm decisions often depend on manual inspections and human experience instead of live operational data.",
  },
  {
    icon: Eye,
    title: "Limited Visibility",
    description:
      "Data is fragmented across spreadsheets, sensors and different systems, making timely decisions difficult.",
  },
  {
    icon: AlertTriangle,
    title: "Late Problem Detection",
    description:
      "Health issues, equipment failures and environmental risks are often discovered after affecting production.",
  },
];

export function Challenge() {
  return (
    <section
      id="challenge"
      className="py-24 bg-gradient-to-b from-white to-slate-50"
    >
      <div className="mx-auto max-w-7xl px-6">

        <div className="max-w-3xl mx-auto text-center">

          <span className="inline-block rounded-full bg-green-100 px-4 py-1 text-sm font-semibold text-green-700">
            Industry Challenges
          </span>

          <h2 className="mt-6 text-4xl font-bold tracking-tight text-slate-900">
            Why Modern Poultry Operations Are Losing Profit Every Day
          </h2>

          <p className="mt-6 text-lg leading-8 text-slate-600">
            Rising feed costs, unpredictable flock performance, labour shortages and disconnected farm data make profitable poultry operations increasingly difficult. Smart Poultry transforms fragmented operations into one intelligent decision-making platform.
          </p>
        </div>

        <div className="mt-20 grid gap-8 md:grid-cols-2 lg:grid-cols-3">

          {challenges.map((item) => {

            const Icon = item.icon;

            return (
              <div
                key={item.title}
                className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
              >
                <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-green-100">
                  <Icon className="h-7 w-7 text-green-700" />
                </div>

                <h3 className="mt-6 text-xl font-semibold text-slate-900">
                  {item.title}
                </h3>

                <p className="mt-4 leading-7 text-slate-600">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}