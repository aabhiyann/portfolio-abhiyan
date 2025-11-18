import { ThemeState } from './Theme';

export type ThemeAction =
  | { type: 'TOGGLE_THEME' }
  | { type: 'SET_THEME'; payload: boolean }
  | { type: 'SET_CURRENT_THEME'; payload: string }
  | { type: 'SET_TIME_RATIO'; payload: number }
  | { type: 'SET_IS_AUTO_MODE'; payload: boolean }
  | { type: 'UPDATE_THEME_FROM_TIME'; payload: number };

export const themeReducer = (state: ThemeState, action: ThemeAction): ThemeState => {
  switch (action.type) {
    case 'TOGGLE_THEME':
      return {
        ...state,
        isDarkMode: !state.isDarkMode,
        isAutoMode: false,
      };
    case 'SET_THEME':
      return {
        ...state,
        isDarkMode: action.payload,
        isAutoMode: false,
      };
    case 'SET_CURRENT_THEME':
      return {
        ...state,
        currentTheme: action.payload,
      };
    case 'SET_TIME_RATIO': {
      const clampedRatio = Math.max(0, Math.min(1, action.payload));
      const shouldBeDark = clampedRatio < 0.25 || clampedRatio > 0.75;
      return {
        ...state,
        timeRatio: clampedRatio,
        isDarkMode: state.isAutoMode ? shouldBeDark : state.isDarkMode,
      };
    }
    case 'SET_IS_AUTO_MODE': {
        const isAutoMode = action.payload;
        let isDarkMode = state.isDarkMode;
        if (isAutoMode) {
            const shouldBeDark = state.timeRatio < 0.25 || state.timeRatio > 0.75;
            isDarkMode = shouldBeDark;
        }
        return {
            ...state,
            isAutoMode,
            isDarkMode,
        };
    }
    case 'UPDATE_THEME_FROM_TIME': {
        const shouldBeDark = action.payload < 0.25 || action.payload > 0.75;
        return {
            ...state,
            timeRatio: action.payload,
            isDarkMode: state.isAutoMode ? shouldBeDark : state.isDarkMode,
        };
    }
    default:
      return state;
  }
};
