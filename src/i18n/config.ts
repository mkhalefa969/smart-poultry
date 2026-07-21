import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import en from "./locales/en.json";
import ar from "./locales/ar.json";

export const SUPPORTED_LANGUAGES = ["en", "ar"] as const;
export type Language = (typeof SUPPORTED_LANGUAGES)[number];

export const DEFAULT_LANGUAGE: Language = "en";
export const RTL_LANGUAGES: readonly Language[] = ["ar"];
export const LANGUAGE_STORAGE_KEY = "sp.lang";

export const isRtl = (lang: string): boolean =>
  RTL_LANGUAGES.includes(lang as Language);

export const isSupportedLanguage = (lang: string): lang is Language =>
  (SUPPORTED_LANGUAGES as readonly string[]).includes(lang);

if (!i18n.isInitialized) {
  void i18n.use(initReactI18next).init({
    resources: {
      en: { translation: en },
      ar: { translation: ar },
    },
    lng: DEFAULT_LANGUAGE,
    fallbackLng: DEFAULT_LANGUAGE,
    supportedLngs: SUPPORTED_LANGUAGES as unknown as string[],
    interpolation: { escapeValue: false },
    react: { useSuspense: false },
  });
}

export default i18n;
