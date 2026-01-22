import { getThemeById, defaultThemeId, type Theme } from '../config/themes';

const STORAGE_KEY = 'theme-preference';

class ThemeStore {
  currentTheme = $state<Theme>(getThemeById(defaultThemeId));

  constructor() {
    // Initialize theme on client side only
    if (typeof window !== 'undefined') {
      this.loadTheme();
    }
  }

  private loadTheme() {
    const savedThemeId = localStorage.getItem(STORAGE_KEY);
    if (savedThemeId) {
      this.currentTheme = getThemeById(savedThemeId);
    }
    this.applyTheme();
  }

  setTheme(themeId: string) {
    this.currentTheme = getThemeById(themeId);
    localStorage.setItem(STORAGE_KEY, themeId);
    this.applyTheme();
  }

  private applyTheme() {
    if (typeof document === 'undefined') return;

    const root = document.documentElement;
    const colors = this.currentTheme.colors;

    root.style.setProperty('--color-primary', colors.primary);
    root.style.setProperty('--color-primary-dark', colors.primaryDark);
    root.style.setProperty('--color-secondary', colors.secondary);
    root.style.setProperty('--color-accent', colors.accent);
    root.style.setProperty('--color-text', colors.text);
    root.style.setProperty('--color-text-muted', colors.textMuted);
    root.style.setProperty('--color-background', colors.background);
    root.style.setProperty('--color-surface', colors.surface);
    root.style.setProperty('--color-border', colors.border);
    root.style.setProperty('--color-shadow', colors.shadow);
  }

  get theme() {
    return this.currentTheme;
  }
}

export const themeStore = new ThemeStore();
