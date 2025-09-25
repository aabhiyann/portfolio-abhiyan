# Theme System Documentation

## Overview

The portfolio implements a sophisticated theme system that supports multiple color palettes, automatic time-based theme switching, and manual theme controls. The system is built with React Context, TypeScript, and CSS custom properties.

## Features

### ✅ Core Features
- **Multiple Theme Palettes**: Default (Yellow + Blue), Kathmandu Fog, Creative Voltage
- **Time-based Automatic Switching**: Dark mode from 6 PM to 6 AM
- **Interactive Timeline Slider**: Drag to change time and see theme transitions
- **Manual Theme Controls**: Toggle between light/dark modes
- **Theme Persistence**: Settings saved to localStorage
- **Smooth Transitions**: 300ms CSS transitions for all theme changes
- **Accessibility**: Keyboard navigation and screen reader support

### 🎨 Theme Palettes

#### Default Theme (Yellow + Blue)
- **Light Mode**: Warm yellow accents on light backgrounds
- **Dark Mode**: Purple accents on dark backgrounds
- **Best For**: Professional, warm, approachable

#### Kathmandu Fog Theme
- **Colors**: Soft pink accents on neutral backgrounds
- **Best For**: Creative, ethereal, artistic

#### Creative Voltage Theme
- **Colors**: Bold purple accents on neutral backgrounds
- **Best For**: Energetic, modern, tech-focused

## Architecture

### ThemeContext
```typescript
interface ThemeState {
  isDarkMode: boolean;        // Current theme mode
  currentTheme: string;       // Active palette (default, kathmanduFog, creativeVoltage)
  timeRatio: number;         // Time of day (0-1)
  isAutoMode: boolean;       // Auto theme switching enabled
}

interface ThemeContextType {
  themeState: ThemeState;
  toggleTheme: () => void;
  setTheme: (isDark: boolean) => void;
  setCurrentTheme: (theme: string) => void;
  setTimeRatio: (ratio: number) => void;
  setIsAutoMode: (auto: boolean) => void;
  updateThemeFromTime: (ratio: number) => void;
}
```

### ThemeSlider Component
- **Interactive Timeline**: 24-hour slider with tick marks
- **Drag & Drop**: Mouse and touch support
- **Keyboard Navigation**: Arrow keys for accessibility
- **Visual Feedback**: Animated handle with sun/moon icons
- **Time Display**: Current time shown below slider

### CSS Custom Properties
All colors are defined as CSS custom properties, allowing for dynamic theme switching:

```css
:root {
  --color-light-background: #f1f5f9;
  --color-dark-background: #1a202c;
  --color-primary-light: #f9a825;
  --color-primary-dark: #8b5cf6;
  /* ... more properties */
}
```

## Usage

### Basic Setup
```tsx
import { ThemeProvider } from './contexts/ThemeContext';

function App() {
  return (
    <ThemeProvider>
      {/* Your app content */}
    </ThemeProvider>
  );
}
```

### Using Theme in Components
```tsx
import { useTheme } from '../contexts/ThemeContext';

function MyComponent() {
  const { themeState, toggleTheme, setCurrentTheme } = useTheme();
  
  return (
    <div className={`bg-surface-light dark:bg-surface-dark`}>
      <button onClick={toggleTheme}>
        Switch to {themeState.isDarkMode ? 'light' : 'dark'} mode
      </button>
    </div>
  );
}
```

### ThemeSlider Integration
```tsx
import ThemeSlider from './ui/ThemeSlider';

function Footer() {
  return (
    <footer>
      <ThemeSlider />
    </footer>
  );
}
```

## Implementation Details

### Time-based Theme Logic
```typescript
// Dark mode is active when:
// - Before 6 AM (timeRatio < 0.25)
// - After 6 PM (timeRatio > 0.75)
const shouldBeDark = ratio < 0.25 || ratio > 0.75;
```

### Theme Persistence
```typescript
// Save to localStorage
localStorage.setItem('portfolio-theme', isDarkMode ? 'dark' : 'light');
localStorage.setItem('portfolio-current-theme', currentTheme);
localStorage.setItem('portfolio-time-ratio', timeRatio.toString());
localStorage.setItem('portfolio-auto-mode', isAutoMode.toString());
```

### CSS Class Application
```typescript
// Apply theme classes to document root
const root = window.document.documentElement;
root.classList.toggle('dark', isDarkMode);
if (currentTheme !== 'default') {
  root.classList.add(`theme-${currentTheme}`);
}
```

## Accessibility Features

### Keyboard Navigation
- **Tab Navigation**: Slider is focusable with Tab key
- **Arrow Keys**: Left/Right arrows to adjust time
- **Enter/Space**: Activate slider

### Screen Reader Support
- **ARIA Labels**: Descriptive labels for all interactive elements
- **Role Attributes**: Proper semantic roles (slider, button)
- **Value Announcements**: Current time and theme state announced

### Visual Accessibility
- **High Contrast**: All themes meet WCAG contrast requirements
- **Focus Indicators**: Clear focus states for keyboard navigation
- **Color Independence**: Information not conveyed by color alone

## Performance Considerations

### Optimized Rendering
- **useCallback**: Prevents unnecessary re-renders
- **Memoization**: Theme state changes are optimized
- **CSS Transitions**: Hardware-accelerated theme transitions

### Bundle Size
- **Tree Shaking**: Unused theme code is eliminated
- **Dynamic Imports**: Theme components loaded on demand
- **CSS Variables**: Efficient theme switching without JavaScript

## Browser Support

### Modern Browsers
- ✅ Chrome 88+
- ✅ Firefox 85+
- ✅ Safari 14+
- ✅ Edge 88+

### Features
- ✅ CSS Custom Properties
- ✅ CSS Grid and Flexbox
- ✅ Touch Events
- ✅ localStorage

## Future Enhancements

### Planned Features
- **System Theme Detection**: Respect user's OS theme preference
- **Custom Theme Builder**: Allow users to create custom palettes
- **Theme Animations**: More sophisticated transition effects
- **Theme Scheduling**: Custom time-based theme rules
- **Theme Sharing**: Export/import theme configurations

### Performance Improvements
- **Theme Preloading**: Preload theme assets
- **Reduced Motion**: Respect user's motion preferences
- **Theme Caching**: Cache theme calculations
- **Lazy Theme Loading**: Load themes on demand

## Troubleshooting

### Common Issues

#### Theme Not Persisting
```typescript
// Check localStorage availability
if (typeof Storage !== 'undefined') {
  localStorage.setItem('portfolio-theme', 'dark');
} else {
  console.warn('localStorage not available');
}
```

#### Slider Not Responding
```typescript
// Ensure touch events are properly handled
const handleTouchStart = (e: TouchEvent) => {
  e.preventDefault(); // Prevent default scrolling
  // Handle touch interaction
};
```

#### Theme Not Applying
```typescript
// Verify CSS classes are applied
useEffect(() => {
  const root = document.documentElement;
  console.log('Current classes:', root.className);
}, [isDarkMode]);
```

## Contributing

### Adding New Themes
1. Define colors in `src/design/colors.ts`
2. Add CSS variables in `src/index.css`
3. Update theme utility functions
4. Test across all components

### Testing Theme Changes
```bash
# Run development server
npm run dev

# Test theme switching
# - Drag slider to different times
# - Toggle manual theme button
# - Switch between palettes
# - Test keyboard navigation
# - Verify persistence after refresh
```

---

*This theme system provides a solid foundation for creating engaging, accessible, and performant user experiences while maintaining flexibility for future enhancements.*
