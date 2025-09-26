/**
 * Theme Context and Provider
 * 
 * Provides global theme state management including:
 * - Light/Dark mode toggle
 * - Time-based theme switching
 * - Theme persistence
 * - Multiple theme support
 */

import React, { createContext, useContext, useState, useEffect, useCallback } from 'react';
import { colorUtils } from '../design/colors';

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

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export interface ThemeProviderProps {
  children: React.ReactNode;
}

export const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
  // Load initial state from localStorage
  const [themeState, setThemeState] = useState<ThemeState>(() => {
    const savedTheme = localStorage.getItem('portfolio-theme');
    const savedAutoMode = localStorage.getItem('portfolio-auto-mode');
    const savedTimeRatio = localStorage.getItem('portfolio-time-ratio');
    const savedCurrentTheme = localStorage.getItem('portfolio-current-theme');

    // Calculate initial time ratio
    const now = new Date();
    const totalMinutes = now.getHours() * 60 + now.getMinutes();
    const initialRatio = totalMinutes / (24 * 60);

    return {
      isDarkMode: savedTheme === 'dark' || (!savedTheme && window.matchMedia('(prefers-color-scheme: dark)').matches),
      currentTheme: savedCurrentTheme || 'default',
      timeRatio: savedTimeRatio ? parseFloat(savedTimeRatio) : initialRatio,
      isAutoMode: savedAutoMode === 'true' || !savedAutoMode, // Default to auto mode
    };
  });

  // Apply theme to document root
  useEffect(() => {
    const root = window.document.documentElement;
    
    // Remove existing theme classes
    root.classList.remove('light', 'dark');
    
    // Add current theme class
    root.classList.add(themeState.isDarkMode ? 'dark' : 'light');
    
    // Apply theme-specific class if not default
    if (themeState.currentTheme !== 'default') {
      root.classList.add(`theme-${themeState.currentTheme}`);
    }

    // Save to localStorage
    localStorage.setItem('portfolio-theme', themeState.isDarkMode ? 'dark' : 'light');
    localStorage.setItem('portfolio-current-theme', themeState.currentTheme);
    localStorage.setItem('portfolio-time-ratio', themeState.timeRatio.toString());
    localStorage.setItem('portfolio-auto-mode', themeState.isAutoMode.toString());
  }, [themeState]);

  // Update theme based on time ratio
  const updateThemeFromTime = useCallback((ratio: number) => {
    // Defines "night" as before 6am (0.25) or after 6pm (0.75)
    const shouldBeDark = ratio < 0.25 || ratio > 0.75;
    
    setThemeState(prev => ({
      ...prev,
      timeRatio: ratio,
      isDarkMode: prev.isAutoMode ? shouldBeDark : prev.isDarkMode,
    }));
  }, []);

  // Toggle between light and dark mode
  const toggleTheme = useCallback(() => {
    setThemeState(prev => ({
      ...prev,
      isDarkMode: !prev.isDarkMode,
      isAutoMode: false, // Disable auto mode when manually toggling
    }));
  }, []);

  // Set specific theme mode
  const setTheme = useCallback((isDark: boolean) => {
    setThemeState(prev => ({
      ...prev,
      isDarkMode: isDark,
      isAutoMode: false, // Disable auto mode when manually setting
    }));
  }, []);

  // Set current theme palette
  const setCurrentTheme = useCallback((theme: string) => {
    setThemeState(prev => ({
      ...prev,
      currentTheme: theme,
    }));
  }, []);

  // Set time ratio (for slider)
  const setTimeRatio = useCallback((ratio: number) => {
    const clampedRatio = Math.max(0, Math.min(1, ratio));
    
    setThemeState(prev => ({
      ...prev,
      timeRatio: clampedRatio,
      isDarkMode: prev.isAutoMode ? (clampedRatio < 0.25 || clampedRatio > 0.75) : prev.isDarkMode,
    }));
  }, []);

  // Toggle auto mode
  const setIsAutoMode = useCallback((auto: boolean) => {
    setThemeState(prev => {
      const newState = {
        ...prev,
        isAutoMode: auto,
      };

      // If enabling auto mode, update theme based on current time
      if (auto) {
        const shouldBeDark = prev.timeRatio < 0.25 || prev.timeRatio > 0.75;
        newState.isDarkMode = shouldBeDark;
      }

      return newState;
    });
  }, []);

  // Initialize time-based theme on mount
  useEffect(() => {
    if (themeState.isAutoMode) {
      updateThemeFromTime(themeState.timeRatio);
    }
  }, [themeState.isAutoMode, updateThemeFromTime]);

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

// Custom hook to use theme context
export const useTheme = (): ThemeContextType => {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};

export default ThemeContext;
