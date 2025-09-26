/* eslint-disable no-unused-vars */
export interface ThemeState {
  isDarkMode: boolean;
  currentTheme: string;
  timeRatio: number; // 0-1 representing time of day
  isAutoMode: boolean; // Whether to automatically switch based on time
}

export interface ThemeContextType {
  themeState: ThemeState;
  toggleTheme: () => void;
  setTheme: (isDark: boolean) => void;
  setCurrentTheme: (theme: string) => void;
  setTimeRatio: (ratio: number) => void;
  setIsAutoMode: (auto: boolean) => void;
  updateThemeFromTime: (ratio: number) => void;
}