import React, { useEffect, useCallback, useReducer } from 'react';
import { ThemeContext } from './ThemeContext';
import { ThemeState, ThemeContextType } from './Theme';
import { themeReducer } from './themeReducer';

export interface ThemeProviderProps {
  children: React.ReactNode;
}

const getInitialState = (): ThemeState => {
  const savedTheme = localStorage.getItem('portfolio-theme');
  const savedAutoMode = localStorage.getItem('portfolio-auto-mode');
  const savedTimeRatio = localStorage.getItem('portfolio-time-ratio');
  const savedCurrentTheme = localStorage.getItem('portfolio-current-theme');

  const now = new Date();
  const totalMinutes = now.getHours() * 60 + now.getMinutes();
  const initialRatio = totalMinutes / (24 * 60);

  const isAutoMode = savedAutoMode === 'true' || !savedAutoMode;
  let isDarkMode = savedTheme === 'dark' || (!savedTheme && window.matchMedia('(prefers-color-scheme: dark)').matches);

  if (isAutoMode) {
    isDarkMode = initialRatio < 0.25 || initialRatio > 0.75;
  }

  return {
    isDarkMode,
    currentTheme: savedCurrentTheme || 'default',
    timeRatio: savedTimeRatio ? parseFloat(savedTimeRatio) : initialRatio,
    isAutoMode,
  };
};

export const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
  const [themeState, dispatch] = useReducer(themeReducer, getInitialState());

  useEffect(() => {
    const root = window.document.documentElement;
    
    root.classList.remove('light', 'dark');
    root.classList.add(themeState.isDarkMode ? 'dark' : 'light');
    
    if (themeState.currentTheme !== 'default') {
      root.classList.add(`theme-${themeState.currentTheme}`);
    }

    localStorage.setItem('portfolio-theme', themeState.isDarkMode ? 'dark' : 'light');
    localStorage.setItem('portfolio-current-theme', themeState.currentTheme);
    localStorage.setItem('portfolio-time-ratio', themeState.timeRatio.toString());
    localStorage.setItem('portfolio-auto-mode', themeState.isAutoMode.toString());
  }, [themeState]);

  const toggleTheme = useCallback(() => dispatch({ type: 'TOGGLE_THEME' }), []);
  const setTheme = useCallback((isDark: boolean) => dispatch({ type: 'SET_THEME', payload: isDark }), []);
  const setCurrentTheme = useCallback((theme: string) => dispatch({ type: 'SET_CURRENT_THEME', payload: theme }), []);
  const setTimeRatio = useCallback((ratio: number) => dispatch({ type: 'SET_TIME_RATIO', payload: ratio }), []);
  const setIsAutoMode = useCallback((auto: boolean) => dispatch({ type: 'SET_IS_AUTO_MODE', payload: auto }), []);
  const updateThemeFromTime = useCallback((ratio: number) => dispatch({ type: 'UPDATE_THEME_FROM_TIME', payload: ratio }), []);

  const contextValue: ThemeContextType = {
    themeState,
    toggleTheme,
    setTheme,
    setCurrentTheme,
    setTimeRatio,
    setIsAutoMode,
    updateThemeFromTime,
  };

  return (
    <ThemeContext.Provider value={contextValue}>
      {children}
    </ThemeContext.Provider>
  );
};