import { useTranslation } from "react-i18next";
import { type Language, DEFAULT_LANGUAGE, isRtl } from "./config";
import { setLanguage } from "./client";

export function useLanguage() {
  const { i18n } = useTranslation();
  const current = ((i18n.resolvedLanguage ?? i18n.language ?? DEFAULT_LANGUAGE) as Language);
  return {
    current,
    setLanguage,
    isRtl: isRtl(current),
  };
}
