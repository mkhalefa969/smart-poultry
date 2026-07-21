import i18n, {
  DEFAULT_LANGUAGE,
  LANGUAGE_STORAGE_KEY,
  type Language,
  isRtl,
  isSupportedLanguage,
} from "./config";

function applyDocumentLanguage(lang: Language) {
  if (typeof document === "undefined") return;
  document.documentElement.lang = lang;
  document.documentElement.dir = isRtl(lang) ? "rtl" : "ltr";
}

function detectInitialLanguage(): Language {
  if (typeof window === "undefined") return DEFAULT_LANGUAGE;
  try {
    const stored = window.localStorage.getItem(LANGUAGE_STORAGE_KEY);
    if (stored && isSupportedLanguage(stored)) return stored;
  } catch {
    // ignore storage access errors
  }
  const nav = window.navigator?.language?.split("-")[0];
  if (nav && isSupportedLanguage(nav)) return nav;
  return DEFAULT_LANGUAGE;
}

export function syncClientLanguage(): void {
  if (typeof window === "undefined") return;
  const lang = detectInitialLanguage();
  if (i18n.language !== lang) {
    void i18n.changeLanguage(lang);
  }
  applyDocumentLanguage(lang);
}

export function setLanguage(lang: Language): void {
  if (!isSupportedLanguage(lang)) return;
  try {
    window.localStorage.setItem(LANGUAGE_STORAGE_KEY, lang);
  } catch {
    // ignore
  }
  void i18n.changeLanguage(lang);
  applyDocumentLanguage(lang);
}
