import { useState } from "react";
import { useTranslation } from "react-i18next";
import { ArrowRight } from "lucide-react";
import { DemoModal } from "@/components/home/DemoModal";
import { Reveal } from "./Reveal";

export function EnterpriseCTA() {
  const { t } = useTranslation();
  const [demoOpen, setDemoOpen] = useState(false);

  return (
    <section
      id="enterprise-cta"
      className="relative overflow-hidden bg-brand-deep py-24 text-white"
    >
      <div
        aria-hidden
        className="absolute inset-0 opacity-60"
        style={{ backgroundImage: "var(--gradient-glow)" }}
      />
      <Reveal className="relative mx-auto max-w-3xl px-4 text-center sm:px-6">
        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
          {t("solutions.cta.title")}
        </h2>
        <p className="mt-5 text-base leading-8 text-white/70 sm:text-lg">
          {t("solutions.cta.subtitle")}
        </p>
        <div className="mt-10 flex flex-wrap justify-center gap-4">
          <button
            type="button"
            onClick={() => setDemoOpen(true)}
            className="inline-flex items-center gap-2 rounded-full bg-highlight px-6 py-3 text-sm font-semibold text-brand-deep shadow-elevated transition-transform hover:scale-[1.03]"
          >
            {t("solutions.cta.primary")}
            <ArrowRight className="h-4 w-4 rtl:rotate-180" />
          </button>
          <button
            type="button"
            onClick={() => setDemoOpen(true)}
            className="inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/10 px-6 py-3 text-sm font-semibold text-white backdrop-blur transition-colors hover:bg-white/20"
          >
            {t("solutions.cta.secondary")}
          </button>
        </div>
      </Reveal>
      <DemoModal isOpen={demoOpen} onClose={() => setDemoOpen(false)} />
    </section>
  );
}
