import { create } from "zustand";
import { devtools, persist } from "zustand/middleware";

// Theme slice
interface ThemeSlice {
  theme: "light" | "dark";
  toggleTheme: () => void;
  setTheme: (theme: "light" | "dark") => void;
}

// UI state slice
interface UISlice {
  isChatbotOpen: boolean;
  isMobileMenuOpen: boolean;
  openChatbot: () => void;
  closeChatbot: () => void;
  toggleChatbot: () => void;
  setMobileMenuOpen: (open: boolean) => void;
}

// Preferences slice
interface PreferencesSlice {
  fontSize: "small" | "medium" | "large";
  setFontSize: (size: "small" | "medium" | "large") => void;
}

// Combined store type
export type AppState = ThemeSlice & UISlice & PreferencesSlice;

/**
 * Production-grade global store using Zustand.
 *
 * Features:
 * - Redux DevTools integration for debugging
 * - localStorage persistence for theme and preferences
 * - Selective subscriptions (components only re-render when used state changes)
 * - TypeScript support with full type inference
 *
 * @example
 * // In a component:
 * const { theme, toggleTheme } = useAppStore((state) => ({
 *   theme: state.theme,
 *   toggleTheme: state.toggleTheme,
 * }));
 */
export const useAppStore = create<AppState>()(
  devtools(
    persist(
      (set) => ({
        // Theme state
        theme: "dark",
        toggleTheme: () =>
          set((state) => {
            const newTheme = state.theme === "dark" ? "light" : "dark";
            // Apply theme to DOM
            const root = window.document.documentElement;
            root.classList.remove("light", "dark");
            root.classList.add(newTheme);
            // Sync with ThemeProvider's localStorage key
            localStorage.setItem("portfolio-theme", newTheme);
            return { theme: newTheme };
          }),
        setTheme: (theme) => {
          // Apply theme to DOM
          const root = window.document.documentElement;
          root.classList.remove("light", "dark");
          root.classList.add(theme);
          // Sync with ThemeProvider's localStorage key
          localStorage.setItem("portfolio-theme", theme);
          set({ theme });
        },

        // UI state
        isChatbotOpen: false,
        isMobileMenuOpen: false,
        openChatbot: () => set({ isChatbotOpen: true }),
        closeChatbot: () => set({ isChatbotOpen: false }),
        toggleChatbot: () =>
          set((state) => ({ isChatbotOpen: !state.isChatbotOpen })),
        setMobileMenuOpen: (open) => set({ isMobileMenuOpen: open }),

        // Preferences state
        fontSize: "medium",
        setFontSize: (fontSize) => set({ fontSize }),
      }),
      {
        name: "app-storage", // localStorage key
        partialize: (state) => ({
          theme: state.theme,
          fontSize: state.fontSize,
        }), // Only persist these fields
      },
    ),
    {
      name: "AppStore", // DevTools name
    },
  ),
);
