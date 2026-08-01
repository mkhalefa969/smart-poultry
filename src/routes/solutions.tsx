import { createFileRoute } from "@tanstack/react-router";
import { SiteHeader } from "@/components/home/SiteHeader";
import { SiteFooter } from "@/components/home/SiteFooter";
import { SolutionsHero } from "@/components/solutions/SolutionsHero";
import { HowItWorks } from "@/components/solutions/HowItWorks";
import { SolutionsByOperation } from "@/components/solutions/SolutionsByOperation";
import { CoreCapabilities } from "@/components/solutions/CoreCapabilities";
import { ClosedLoop } from "@/components/solutions/ClosedLoop";
import { PlatformArchitecture } from "@/components/solutions/PlatformArchitecture";
import { FarmConnectivity } from "@/components/solutions/FarmConnectivity";
import { OperationalIntelligence } from "@/components/solutions/OperationalIntelligence";
import { BusinessOutcomes } from "@/components/solutions/BusinessOutcomes";
import { Differentiation } from "@/components/solutions/Differentiation";
import { Integrations } from "@/components/solutions/Integrations";
import { EnterpriseCTA } from "@/components/solutions/EnterpriseCTA";

const TITLE =
  "Solutions — Cognitive Enterprise OS for Poultry | Smart Poultry";
const DESCRIPTION =
  "Smart Poultry unifies IoT, computer vision, AI and business intelligence into one cognitive enterprise operating system that predicts, recommends and automates poultry operations.";

export const Route = createFileRoute("/solutions")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/solutions" }],
  }),
  component: SolutionsPage,
});

function SolutionsPage() {
  return (
    <div className="min-h-screen bg-background font-sans text-foreground selection:bg-brand selection:text-primary-foreground">
      <SiteHeader />
      <main>
        <SolutionsHero />
        <HowItWorks />
        <SolutionsByOperation />
        <CoreCapabilities />
        <ClosedLoop />
        <PlatformArchitecture />
        <FarmConnectivity />
        <OperationalIntelligence />
        <BusinessOutcomes />
        <Differentiation />
        <Integrations />
        <EnterpriseCTA />
      </main>
      <SiteFooter />
    </div>
  );
}
