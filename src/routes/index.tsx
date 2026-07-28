import { createFileRoute } from "@tanstack/react-router";
import { SiteHeader } from "@/components/home/SiteHeader";
import { Hero } from "@/components/home/Hero";
import { TrustedBy } from "@/components/home/TrustedBy";
import { Challenge } from "@/components/home/Challenge";
import { ProblemSolution } from "@/components/home/ProblemSolution";
import { ModulesGrid } from "@/components/home/ModulesGrid";
import { PowerBIShowcase } from "@/components/home/PowerBIShowcase";
import { Connectivity } from "@/components/home/Connectivity";
import { Outcomes } from "@/components/home/Outcomes";
import { FinalCTA } from "@/components/home/FinalCTA";
import { SiteFooter } from "@/components/home/SiteFooter";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Home,
});

function Home() {
  return (
    <div className="min-h-screen bg-background font-sans text-foreground selection:bg-brand selection:text-primary-foreground">
      <SiteHeader />
      <main>
        <Hero />
        <TrustedBy />
        <Challenge />
        <ProblemSolution />
        <ModulesGrid />
        <PowerBIShowcase />
        <Connectivity />
        <Outcomes />
        <FinalCTA />
      </main>
      <SiteFooter />
    </div>
  );
}