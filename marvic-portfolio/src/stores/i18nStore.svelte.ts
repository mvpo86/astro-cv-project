import type { Locale, Translations } from '../types/translations';
import enTranslations from '../translations/en.json';
import esTranslations from '../translations/es.json';

const STORAGE_KEY = 'locale-preference';

const translations: Record<Locale, Translations> = {
  en: enTranslations as Translations,
  es: esTranslations as Translations,
};

class I18nStore {
  currentLocale = $state<Locale>('en');

  constructor() {
    // Initialize locale on client side only
    if (typeof window !== 'undefined') {
      this.loadLocale();
    }
  }

  private loadLocale() {
    // Check localStorage first
    const savedLocale = localStorage.getItem(STORAGE_KEY) as Locale | null;
    if (savedLocale && (savedLocale === 'en' || savedLocale === 'es')) {
      this.currentLocale = savedLocale;
      return;
    }

    // Detect browser language
    const browserLang = navigator.language.toLowerCase();
    if (browserLang.startsWith('es')) {
      this.currentLocale = 'es';
    } else {
      this.currentLocale = 'en';
    }

    // Save detected locale
    localStorage.setItem(STORAGE_KEY, this.currentLocale);
  }

  setLocale(locale: Locale) {
    this.currentLocale = locale;
    localStorage.setItem(STORAGE_KEY, locale);

    // Update document lang attribute
    if (typeof document !== 'undefined') {
      document.documentElement.lang = locale;
    }
  }

  t(key: string): string | string[] {
    const keys = key.split('.');
    let result: any = translations[this.currentLocale];

    for (const k of keys) {
      if (result && typeof result === 'object' && k in result) {
        result = result[k];
      } else {
        // Fallback to English if key not found
        let fallback: any = translations.en;
        for (const fk of keys) {
          if (fallback && typeof fallback === 'object' && fk in fallback) {
            fallback = fallback[fk];
          } else {
            console.warn(`Translation key not found: ${key}`);
            return key;
          }
        }
        return fallback;
      }
    }

    return result;
  }

  get locale() {
    return this.currentLocale;
  }
}

export const i18n = new I18nStore();
