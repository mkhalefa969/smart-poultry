import { useTranslation } from "react-i18next";

const columnKeys = ["platform", "solutions", "company", "resources"] as const;
const linkKeysByColumn = {
  platform: ["iot", "cv", "ai", "bi", "connectivity"],
  solutions: ["broiler", "layer", "breeders", "integrators"],
  company: ["about", "careers", "partners", "contact"],
  resources: ["docs", "cases", "support", "security"],
} as const;

export function SiteFooter() {
  const { t } = useTranslation();
  return (
    <footer className="bg-brand-deep py-16 text-white/80">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 gap-10 lg:grid-cols-6">
          <div className="col-span-2">
            <div className="flex items-center gap-2">
              <span className="grid h-9 w-9 place-items-center rounded-xl bg-highlight">
                <svg viewBox="0 0 24 24" className="h-5 w-5 text-brand-deep" fill="currentColor">
                  <path d="M12 2c3 3 5 5.5 5 9a5 5 0 1 1-10 0c0-3.5 2-6 5-9Zm0 7.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5Z" />
                </svg>
              </span>
              <div className="leading-tight text-white">
                <div className="text-sm font-semibold">{t("footer.brand")}</div>
                <div className="text-[10px] uppercase tracking-widest text-white/60">
                  {t("footer.brandSub")}
                </div>
              </div>
            </div>
            <p className="mt-5 max-w-xs text-sm leading-relaxed text-white/60">
              {t("footer.tagline")}
            </p>
          </div>
          {columnKeys.map((col) => (
            <div key={col}>
              <div className="text-xs font-semibold uppercase tracking-widest text-white">
                {t(`footer.columns.${col}.title`)}
              </div>
              <ul className="mt-4 space-y-2.5">
                {linkKeysByColumn[col].map((lk) => (
                  <li key={lk}>
                    <a href="#" className="text-sm text-white/70 transition-colors hover:text-highlight">
                      {t(`footer.columns.${col}.links.${lk}`)}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="mt-14 flex flex-col items-center justify-between gap-3 border-t border-white/10 pt-6 sm:flex-row">
          <p className="text-xs text-white/50">
            {t("footer.rights", { year: new Date().getFullYear() })}
          </p>
          <div className="flex items-center gap-5 text-xs text-white/50">
            <a href="#" className="hover:text-white">{t("footer.privacy")}</a>
            <a href="#" className="hover:text-white">{t("footer.terms")}</a>
            <a href="#" className="hover:text-white">{t("footer.security")}</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
