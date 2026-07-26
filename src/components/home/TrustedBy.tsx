import { useTranslation } from "react-i18next";

/**
 * Monochrome, logo-style SVG wordmarks used in the trust bar.
 * Each is a distinct visual mark (not plain text) rendered in currentColor
 * so it can be dimmed at rest and fully lit on hover.
 */

const MicrosoftLogo = () => (
  <svg viewBox="0 0 140 28" className="h-6 w-auto" aria-label="Microsoft">
    <g>
      <rect x="0" y="2" width="11" height="11" fill="currentColor" />
      <rect x="13" y="2" width="11" height="11" fill="currentColor" />
      <rect x="0" y="15" width="11" height="11" fill="currentColor" />
      <rect x="13" y="15" width="11" height="11" fill="currentColor" />
    </g>
    <text x="30" y="19" fontFamily="Anuphan, sans-serif" fontWeight="600" fontSize="14" fill="currentColor" letterSpacing="0.3">
      Microsoft
    </text>
  </svg>
);

const CaappLogo = () => (
  <svg viewBox="0 0 130 32" className="h-7 w-auto" aria-label="CAAPP">
    <circle cx="16" cy="16" r="12" fill="none" stroke="currentColor" strokeWidth="2" />
    <path d="M10 16 L14 20 L22 12" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
    <text x="34" y="21" fontFamily="Anuphan, sans-serif" fontWeight="800" fontSize="15" fill="currentColor" letterSpacing="2">
      CAAPP
    </text>
  </svg>
);

const NtdpLogo = () => (
  <svg viewBox="0 0 120 32" className="h-7 w-auto" aria-label="NTDP">
    <g fill="currentColor">
      <path d="M4 6 L4 26 L8 26 L8 14 L18 26 L22 26 L22 6 L18 6 L18 18 L8 6 Z" />
    </g>
    <text x="30" y="21" fontFamily="Anuphan, sans-serif" fontWeight="800" fontSize="15" fill="currentColor" letterSpacing="2">
      NTDP
    </text>
  </svg>
);

const AlmaraiLogo = () => (
  <svg viewBox="0 0 140 32" className="h-7 w-auto" aria-label="Almarai">
    <path
      d="M6 22 C10 10 18 10 22 22 M14 22 L14 14"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.2"
      strokeLinecap="round"
    />
    <text x="32" y="22" fontFamily="Anuphan, sans-serif" fontStyle="italic" fontWeight="700" fontSize="17" fill="currentColor">
      Almarai
    </text>
  </svg>
);

const SadiaLogo = () => (
  <svg viewBox="0 0 120 32" className="h-7 w-auto" aria-label="Sadia">
    <ellipse cx="14" cy="16" rx="10" ry="8" fill="none" stroke="currentColor" strokeWidth="2" />
    <circle cx="10" cy="14" r="1.6" fill="currentColor" />
    <text x="30" y="22" fontFamily="Anuphan, sans-serif" fontWeight="800" fontSize="18" fill="currentColor" letterSpacing="0.5">
      Sadia
    </text>
  </svg>
);

const ArascoLogo = () => (
  <svg viewBox="0 0 140 32" className="h-7 w-auto" aria-label="ARASCO">
    <g fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
      <path d="M6 22 L14 6 L22 22" />
      <path d="M9 17 L19 17" />
    </g>
    <text x="30" y="21" fontFamily="Anuphan, sans-serif" fontWeight="800" fontSize="15" fill="currentColor" letterSpacing="2.5">
      ARASCO
    </text>
  </svg>
);

const partners = [
  { name: "Microsoft", Logo: MicrosoftLogo },
  { name: "CAAPP", Logo: CaappLogo },
  { name: "NTDP", Logo: NtdpLogo },
  { name: "Almarai", Logo: AlmaraiLogo },
  { name: "Sadia", Logo: SadiaLogo },
  { name: "ARASCO", Logo: ArascoLogo },
];

export function TrustedBy() {
  const { t } = useTranslation();
  return (
    <section className="border-b border-border bg-background py-14">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <p className="text-center text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">
          {t("trustedBy.heading")}
        </p>
        <div className="mt-10 grid grid-cols-2 items-center justify-items-center gap-x-8 gap-y-8 sm:grid-cols-3 lg:grid-cols-6">
          {partners.map(({ name, Logo }) => (
            <div
              key={name}
              className="flex h-10 items-center justify-center text-foreground/50 opacity-70 grayscale transition-all duration-300 hover:scale-105 hover:text-brand hover:opacity-100 hover:grayscale-0"
              title={name}
            >
              <Logo />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
