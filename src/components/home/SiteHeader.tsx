import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { Link } from "@tanstack/react-router"; // 1️⃣ استيراد Link للتنقل
import logo from "../../assets/logo.png.png";
import { useLanguage } from "@/i18n/useLanguage";

// 1️⃣ استيراد مكون النافذة المنبثقة
import { DemoModal } from "./DemoModal";

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  const { t } = useTranslation();
  const { current, setLanguage } = useLanguage();

  // 2️⃣ إضافة حالة التحكم في فتح/إغلاق الـ Modal
  const [isDemoOpen, setIsDemoOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // 2️⃣ تعديل المسارات: توجيه الرئيسية والـ Hash إلى "/" وتحديد الـ Hash بشكل منفصل
  const nav = [
    { label: t("header.home"), to: "/", hash: "top" },
    { label: t("header.solutions"), to: "/solutions" },
    { label: t("header.caseStudies"), to: "/", hash: "casestudies" },
    { label: t("header.pricing"), to: "/", hash: "pricing" },
    { label: t("header.contact"), to: "/", hash: "contact" },
  ];

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-background/90 backdrop-blur-md border-b border-border shadow-sm"
            : "bg-transparent"
        }`}
      >
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
          {/* Logo */}
          <Link to="/" hash="top" className="flex items-center">
            <img
              src={logo}
              alt="Smart Poultry"
              className="h-12 w-auto transition-all duration-300"
            />
          </Link>

          {/* Navigation */}
          <nav className="hidden items-center gap-8 md:flex">
            {nav.map((item) => (
              <Link
                key={item.label}
                to={item.to}
                hash={item.hash}
                className={`text-sm font-medium transition-colors ${
                  scrolled
                    ? "text-foreground/70 hover:text-brand"
                    : "text-white/80 hover:text-white"
                }`}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* Right Side */}
          <div className="flex items-center gap-3">
            <div
              className={`hidden text-sm font-medium sm:inline-flex items-center gap-1 transition-colors ${
                scrolled ? "text-foreground/70" : "text-white/80"
              }`}
            >
              <button
                type="button"
                onClick={() => setLanguage("en")}
                className={`transition-colors ${
                  current === "en"
                    ? scrolled
                      ? "text-brand"
                      : "text-white"
                    : "hover:text-brand"
                }`}
                aria-pressed={current === "en"}
              >
                EN
              </button>
              <span aria-hidden>|</span>
              <button
                type="button"
                onClick={() => setLanguage("ar")}
                className={`transition-colors ${
                  current === "ar"
                    ? scrolled
                      ? "text-brand"
                      : "text-white"
                    : "hover:text-brand"
                }`}
                aria-pressed={current === "ar"}
              >
                العربية
              </button>
            </div>

            {/* 3️⃣ تحويل الرابط إلى زر يفتح النافذة المنبثقة */}
            <button
              type="button"
              onClick={() => setIsDemoOpen(true)}
              className="inline-flex items-center gap-1.5 rounded-full bg-highlight px-4 py-2 text-sm font-semibold text-brand-deep shadow-sm transition-transform hover:scale-[1.03]"
            >
              {t("header.demo")}

              <svg
                viewBox="0 0 20 20"
                className="h-4 w-4 rtl:rotate-180"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
              >
                <path
                  d="M5 10h10M11 6l4 4-4 4"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </div>
        </div>
      </header>

      {/* 4️⃣ إدراج مكون النافذة المنبثقة */}
      <DemoModal isOpen={isDemoOpen} onClose={() => setIsDemoOpen(false)} />
    </>
  );
}