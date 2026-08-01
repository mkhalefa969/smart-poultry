import { useTranslation } from "react-i18next";
import {
  Boxes,
  BarChart3,
  Webhook,
  RadioTower,
  Mail,
  MessageSquare,
  MessageCircle,
  Cloud,
  type LucideIcon,
} from "lucide-react";
import { Reveal, SectionHeading } from "./Reveal";

const ITEMS: { key: string; icon: LucideIcon }[] = [
  { key: "erp", icon: Boxes },
  { key: "bi", icon: BarChart3 },
  { key: "api", icon: Webhook },
  { key: "lorawan", icon: RadioTower },
  { key: "email", icon: Mail },
  { key: "sms", icon: MessageSquare },
  { key: "whatsapp", icon: MessageCircle },
  { key: "cloud", icon: Cloud },
];

export function Integrations() {
  const { t } = useTranslation();

  return (
    <section id="integrations" className="bg-background py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow={t("solutions.integrations.eyebrow")}
          title={t("solutions.integrations.title")}
          subtitle={t("solutions.integrations.subtitle")}
        />

        <div className="mt-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {ITEMS.map((item, i) => {
            const Icon = item.icon;
            return (
              <Reveal key={item.key} delay={i * 60}>
                <div className="group h-full rounded-2xl border border-border bg-card p-6 transition-all duration-300 hover:-translate-y-1.5 hover:border-brand/40 hover:shadow-elevated">
                  <span className="grid h-12 w-12 place-items-center rounded-xl bg-brand/10 text-brand transition-colors group-hover:bg-brand group-hover:text-primary-foreground">
                    <Icon className="h-6 w-6" strokeWidth={1.7} />
                  </span>
                  <h3 className="mt-5 text-base font-semibold text-foreground">
                    {t(`solutions.integrations.items.${item.key}.title`)}
                  </h3>
                  <p className="mt-2 text-sm leading-6 text-muted-foreground">
                    {t(`solutions.integrations.items.${item.key}.desc`)}
                  </p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
