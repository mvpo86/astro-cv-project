export interface Theme {
  id: string;
  name: string;
  colors: {
    primary: string;
    primaryDark: string;
    secondary: string;
    accent: string;
    text: string;
    textMuted: string;
    background: string;
    surface: string;
    border: string;
    shadow: string;
  };
}

export const themes: Record<string, Theme> = {
  'cyber-teal': {
    id: 'cyber-teal',
    name: 'Cyber Teal',
    colors: {
      primary: '#00d9ff',
      primaryDark: '#00a8cc',
      secondary: '#0a1628',
      accent: '#00ffaa',
      text: '#e0e0e0',
      textMuted: '#a0a0a0',
      background: '#0a0e1a',
      surface: '#131b2e',
      border: '#1e293b',
      shadow: 'rgba(0, 217, 255, 0.1)',
    },
  },
  'neon-purple': {
    id: 'neon-purple',
    name: 'Neon Purple',
    colors: {
      primary: '#c77dff',
      primaryDark: '#9d4edd',
      secondary: '#1a0a28',
      accent: '#ff006e',
      text: '#e0e0e0',
      textMuted: '#a0a0a0',
      background: '#0f0a1a',
      surface: '#1e1333',
      border: '#2b1e3b',
      shadow: 'rgba(199, 125, 255, 0.1)',
    },
  },
  'electric-blue': {
    id: 'electric-blue',
    name: 'Electric Blue',
    colors: {
      primary: '#3b82f6',
      primaryDark: '#2563eb',
      secondary: '#0a1628',
      accent: '#10b981',
      text: '#e0e0e0',
      textMuted: '#a0a0a0',
      background: '#0a0e1a',
      surface: '#131b2e',
      border: '#1e293b',
      shadow: 'rgba(59, 130, 246, 0.1)',
    },
  },
};

export const defaultThemeId = 'cyber-teal';

export function getThemeById(id: string): Theme {
  return themes[id] || themes[defaultThemeId];
}

export function getAllThemes(): Theme[] {
  return Object.values(themes);
}
