# Complete Design System Documentation

## Overview

This is the comprehensive design system for the Abhiyan Sainju Portfolio. It encompasses colors, typography, components, spacing, themes, and styling standards to ensure consistency, maintainability, and scalability across the entire application.

## Architecture

```
src/
├── design/
│   ├── colors.ts              # Color system and utilities
│   ├── system.ts              # Design system configuration
│   ├── index.ts               # Centralized exports
│   └── README.md              # Legacy documentation
├── components/
│   ├── ui/
│   │   ├── Button.tsx         # Standardized button component
│   │   ├── Card.tsx            # Standardized card component
│   │   ├── Typography.tsx      # Standardized typography component
│   │   ├── Chip.tsx            # Standardized chip component
│   │   └── index.ts            # Component exports
│   ├── Navbar.tsx             # Navigation component
│   └── Footer.tsx             # Footer component
└── contexts/
    └── ThemeContext.tsx       # Theme management
```

## Color System

### Theme Palettes

#### 1. **Default Theme: Yellow + Blue** (Primary)
- **Light Mode**: Light blue-gray backgrounds with yellow and blue accents
- **Dark Mode**: Dark slate backgrounds with purple and green accents
- **Best for**: Professional, warm, approachable

### Color Specifications

#### Default Theme (Yellow + Blue)

**Light Mode:**
```css
--background: #F1F5F9    /* Light blue-gray */
--navbar: #FFFBEB        /* Warm cream */
--surface: #FFFFFF       /* Pure white */
--text: #0F172A          /* Dark slate */
--text-secondary: #64748B /* Slate gray */
--primary: #F9A825       /* Warm yellow */
--secondary: #3B82F6     /* Blue */
```

**Dark Mode:**
```css
--background: #1A202C    /* Dark slate */
--navbar: #1A202C        /* Dark slate */
--surface: #2D3748       /* Darker slate */
--text: #F4F4F7         /* Light gray */
--text-secondary: #A0AEC0 /* Medium gray */
--primary: #8B5CF6      /* Purple */
--secondary: #22C55E     /* Green */
```

#### Kathmandu Fog Theme

**Light Mode:**
```css
--background: #F8FAFC    /* Slate-50 */
--navbar: #F8FAFC        /* Slate-50 */
--surface: #FFFFFF       /* White */
--text: #1E293B         /* Slate-800 */
--text-secondary: #64748B /* Slate-500 */
--primary: #F472B6       /* Pink-400 */
--secondary: #94A3B8     /* Slate-400 */
```

**Dark Mode:**
```css
--background: #1E293B    /* Slate-800 */
--navbar: #1E293B        /* Slate-800 */
--surface: #334155       /* Slate-700 */
--text: #F8FAFC         /* Slate-50 */
--text-secondary: #94A3B8 /* Slate-400 */
--primary: #F472B6       /* Pink-400 */
--secondary: #94A3B8     /* Slate-400 */
```

#### Creative Voltage Theme

**Light Mode:**
```css
--background: #F8FAFC    /* Slate-50 */
--navbar: #F8FAFC        /* Slate-50 */
--surface: #FFFFFF       /* White */
--text: #1E293B         /* Slate-800 */
--text-secondary: #64748B /* Slate-500 */
--primary: #8B5CF6       /* Violet-500 */
--secondary: #94A3B8     /* Slate-400 */
```

**Dark Mode:**
```css
--background: #1E293B    /* Slate-800 */
--navbar: #1E293B        /* Slate-800 */
--surface: #334155       /* Slate-700 */
--text: #F8FAFC         /* Slate-50 */
--text-secondary: #94A3B8 /* Slate-400 */
--primary: #8B5CF6       /* Violet-500 */
--secondary: #94A3B8     /* Slate-400 */
```

### Color Usage

```typescript
import { colorUtils } from '../design/colors';

// Get theme-aware colors
const backgroundColor = colorUtils.getThemeColor('background', isDark, currentTheme);
const primaryColor = colorUtils.getAccentColor('primary', isDark, currentTheme);
const linkColor = colorUtils.getSemanticColor('link', isDark, currentTheme);

// Get available themes
const themes = colorUtils.getAvailableThemes();
// Returns: ['default', 'kathmanduFog', 'creativeVoltage']

// Get theme display names
const displayName = colorUtils.getThemeDisplayName('kathmanduFog');
// Returns: 'Kathmandu Fog'
```

## 📝 Typography System

### Font Families
```typescript
fontFamily: {
  heading: '"Space Grotesk", sans-serif',
  body: '"Inter", sans-serif',
}
```

### Font Sizes
```typescript
fontSize: {
  xs: '0.75rem',      // 12px
  sm: '0.875rem',     // 14px
  base: '1rem',       // 16px
  lg: '1.125rem',     // 18px
  xl: '1.25rem',      // 20px
  '2xl': '1.5rem',    // 24px
  '3xl': '1.875rem',  // 30px
  '4xl': '2.25rem',   // 36px
  '5xl': '3rem',      // 48px
  '6xl': '3.75rem',   // 60px
  '7xl': '4.5rem',    // 72px
}
```

### Font Weights
```typescript
fontWeight: {
  normal: '400',
  medium: '500',
  semibold: '600',
  bold: '700',
}
```

### Line Heights
```typescript
lineHeight: {
  tight: '1.25',
  snug: '1.375',
  normal: '1.5',
  relaxed: '1.625',
  loose: '2',
}
```

### Typography Component Usage

```typescript
import { Typography } from './ui';

// Headings
<Typography variant="h1" color="primary" isDark={isDark} currentTheme={currentTheme}>
  Main Heading
</Typography>

<Typography variant="h2" color="secondary" isDark={isDark} currentTheme={currentTheme}>
  Section Heading
</Typography>

// Body text
<Typography variant="body" color="primary" isDark={isDark} currentTheme={currentTheme}>
  Body text content
</Typography>

// Captions and small text
<Typography variant="caption" color="muted" isDark={isDark} currentTheme={currentTheme}>
  Caption text
</Typography>
```

## 📏 Spacing System

```typescript
spacing: {
  xs: '0.25rem',    // 4px
  sm: '0.5rem',     // 8px
  md: '1rem',       // 16px
  lg: '1.5rem',     // 24px
  xl: '2rem',       // 32px
  '2xl': '3rem',    // 48px
  '3xl': '4rem',    // 64px
  '4xl': '6rem',    // 96px
  '5xl': '8rem',    // 128px
}
```

## 🎯 Border Radius

```typescript
borderRadius: {
  none: '0',
  sm: '0.125rem',   // 2px
  base: '0.25rem',  // 4px
  md: '0.375rem',   // 6px
  lg: '0.5rem',     // 8px
  xl: '0.75rem',    // 12px
  '2xl': '1rem',    // 16px
  '3xl': '1.5rem',  // 24px
  full: '9999px',   // Fully rounded
}
```

## 🌟 Shadows

```typescript
shadows: {
  sm: '0 1px 2px 0 rgb(0 0 0 / 0.05)',
  base: '0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1)',
  md: '0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)',
  lg: '0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)',
  xl: '0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)',
}
```

## 🎬 Animation System

### Durations
```typescript
duration: {
  fast: '150ms',
  normal: '250ms',
  slow: '400ms',
  slower: '600ms',
}
```

### Easing Functions
```typescript
easing: {
  easeOut: 'cubic-bezier(0.22, 1, 0.36, 1)',
  easeIn: 'cubic-bezier(0.4, 0, 1, 1)',
  easeInOut: 'cubic-bezier(0.4, 0, 0.2, 1)',
  linear: 'linear',
}
```

## 🧩 Component System

### Button Component

```typescript
interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'ghost' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  isDark?: boolean;
  currentTheme?: string;
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
}

// Usage
<Button 
  variant="primary" 
  size="md" 
  isDark={isDark} 
  currentTheme={currentTheme}
  onClick={handleClick}
>
  Click Me
</Button>
```

### Card Component

```typescript
interface CardProps {
  children: React.ReactNode;
  className?: string;
  isDark?: boolean;
  currentTheme?: string;
  variant?: 'default' | 'elevated' | 'outlined';
  padding?: 'sm' | 'md' | 'lg';
  style?: React.CSSProperties;
}

// Usage
<Card 
  variant="elevated" 
  padding="lg" 
  isDark={isDark} 
  currentTheme={currentTheme}
>
  Card Content
</Card>
```

### Typography Component

```typescript
interface TypographyProps {
  children: React.ReactNode;
  variant?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'body' | 'caption' | 'small';
  color?: 'primary' | 'secondary' | 'muted' | 'accent';
  isDark?: boolean;
  currentTheme?: string;
  className?: string;
  style?: React.CSSProperties;
}

// Usage
<Typography 
  variant="h1" 
  color="primary" 
  isDark={isDark} 
  currentTheme={currentTheme}
>
  Heading
</Typography>
```

### Chip Component

```typescript
interface ChipProps extends React.HTMLAttributes<HTMLSpanElement> {
  children: React.ReactNode;
  variant?: 'default' | 'accent' | 'muted';
  size?: 'sm' | 'md' | 'lg';
  isDark?: boolean;
  currentTheme?: string;
  className?: string;
  style?: React.CSSProperties;
}

// Usage
<Chip 
  variant="accent" 
  size="md" 
  isDark={isDark} 
  currentTheme={currentTheme}
>
  Tag
</Chip>
```

## 🎨 Theme System

### Theme Context

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

### Theme Features

- **Multiple Theme Palettes**: Default, Kathmandu Fog, Creative Voltage
- **Time-based Automatic Switching**: Dark mode from 6 PM to 6 AM
- **Interactive Timeline Slider**: Drag to change time and see theme transitions
- **Manual Theme Controls**: Toggle between light/dark modes
- **Theme Persistence**: Settings saved to localStorage
- **Smooth Transitions**: 300ms CSS transitions for all theme changes
- **Accessibility**: Keyboard navigation and screen reader support

### Using Theme in Components

```typescript
import { useTheme } from '../contexts/ThemeContext';

function MyComponent() {
  const { themeState, toggleTheme, setCurrentTheme } = useTheme();
  
  return (
    <div style={{
      backgroundColor: colorUtils.getThemeColor('surface', themeState.isDarkMode, themeState.currentTheme),
      color: colorUtils.getThemeColor('text', themeState.isDarkMode, themeState.currentTheme),
    }}>
      <button onClick={toggleTheme}>
        Switch to {themeState.isDarkMode ? 'light' : 'dark'} mode
      </button>
    </div>
  );
}
```

## 📱 Responsive Design

### Breakpoints
```typescript
breakpoints: {
  sm: '640px',
  md: '768px',
  lg: '1024px',
  xl: '1280px',
  '2xl': '1536px',
}
```

### Z-Index Scale
```typescript
zIndex: {
  hide: -1,
  auto: 'auto',
  base: 0,
  docked: 10,
  dropdown: 1000,
  sticky: 1100,
  banner: 1200,
  overlay: 1300,
  modal: 1400,
  popover: 1500,
  skipLink: 1600,
  toast: 1700,
  tooltip: 1800,
}
```

## 🎯 Styling Standards

### Core Principles

1. **Single Source of Truth**: All styling decisions must reference the design system
2. **Component-First Approach**: All components must be TypeScript with proper interfaces
3. **Theme-Aware Styling**: All components must support theme switching
4. **No Hardcoded Values**: Use design system utilities for all styling

### Component Structure

```typescript
interface ComponentProps {
  children: React.ReactNode;
  className?: string;
  isDark?: boolean;
  currentTheme?: string;
  // Component-specific props
}

export const Component: React.FC<ComponentProps> = ({
  children,
  className = '',
  isDark = false,
  currentTheme = 'default',
  ...props
}) => {
  // Component logic using design system utilities
};
```

### Color Usage Standards

```typescript
// ✅ CORRECT - Use design system utilities
const styles = {
  backgroundColor: colorUtils.getThemeColor('surface', isDark, currentTheme),
  color: colorUtils.getThemeColor('text', isDark, currentTheme),
  borderColor: colorUtils.getThemeColor('border', isDark, currentTheme),
};

// ❌ WRONG - Hardcoded colors
const styles = {
  backgroundColor: '#ffffff',
  color: '#000000',
};
```

### Spacing Standards

```typescript
// ✅ CORRECT - Use design system spacing
const styles = {
  padding: designSystem.spacing.lg,
  margin: designSystem.spacing.md,
  gap: designSystem.spacing.sm,
};

// ❌ WRONG - Hardcoded spacing
const styles = {
  padding: '1.5rem',
  margin: '1rem',
};
```

## 🚀 Usage Examples

### Complete Component Example

```typescript
import React from 'react';
import { Typography, Button, Card, colorUtils, designSystem } from './ui';

interface MyComponentProps {
  title: string;
  description: string;
  isDark: boolean;
  currentTheme: string;
}

const MyComponent: React.FC<MyComponentProps> = ({
  title,
  description,
  isDark,
  currentTheme,
}) => {
  const containerStyles: React.CSSProperties = {
    padding: designSystem.spacing.lg,
    backgroundColor: colorUtils.getThemeColor('surface', isDark, currentTheme),
    borderRadius: designSystem.borderRadius.lg,
    boxShadow: designSystem.shadows.md,
  };

  return (
    <Card 
      variant="elevated" 
      padding="lg" 
      isDark={isDark} 
      currentTheme={currentTheme}
    >
      <Typography 
        variant="h3" 
        color="primary" 
        isDark={isDark} 
        currentTheme={currentTheme}
        style={{ marginBottom: designSystem.spacing.md }}
      >
        {title}
      </Typography>
      
      <Typography 
        variant="body" 
        color="secondary" 
        isDark={isDark} 
        currentTheme={currentTheme}
        style={{ marginBottom: designSystem.spacing.lg }}
      >
        {description}
      </Typography>
      
      <Button 
        variant="primary" 
        size="md" 
        isDark={isDark} 
        currentTheme={currentTheme}
      >
        Learn More
      </Button>
    </Card>
  );
};

export default MyComponent;
```

## ♿ Accessibility Features

### Keyboard Navigation
- **Tab Navigation**: All interactive elements are focusable
- **Arrow Keys**: Slider and menu navigation
- **Enter/Space**: Activate buttons and links

### Screen Reader Support
- **ARIA Labels**: Descriptive labels for all interactive elements
- **Role Attributes**: Proper semantic roles
- **Value Announcements**: Current state announced

### Visual Accessibility
- **High Contrast**: All themes meet WCAG contrast requirements
- **Focus Indicators**: Clear focus states for keyboard navigation
- **Color Independence**: Information not conveyed by color alone

## 🔧 Development Guidelines

### 1. Always Use TypeScript
```typescript
// ✅ CORRECT
interface ComponentProps {
  children: React.ReactNode;
  isDark?: boolean;
  currentTheme?: string;
}

// ❌ WRONG
function Component({ children, isDark }) {
  // No type safety
}
```

### 2. Use Design System Utilities
```typescript
// ✅ CORRECT
const styles = {
  padding: designSystem.spacing.lg,
  color: colorUtils.getThemeColor('text', isDark, currentTheme),
};

// ❌ WRONG
const styles = {
  padding: '1.5rem',
  color: '#000000',
};
```

### 3. Implement Theme Support
```typescript
// ✅ CORRECT
const Component: React.FC<ComponentProps> = ({ isDark, currentTheme }) => {
  const styles = {
    backgroundColor: colorUtils.getThemeColor('surface', isDark, currentTheme),
  };
};

// ❌ WRONG
const Component = () => {
  const styles = {
    backgroundColor: 'white',
  };
};
```

### 4. Use Standardized Components
```typescript
// ✅ CORRECT
<Typography variant="h1" color="primary" isDark={isDark} currentTheme={currentTheme}>
  Heading
</Typography>

// ❌ WRONG
<h1 style={{ fontSize: '2rem', fontWeight: 'bold' }}>Heading</h1>
```

## 📚 Migration Guide

### From Legacy CSS Classes

**Before:**
```tsx
<button className="btn-primary">Click me</button>
<div className="bg-white dark:bg-slate-900 text-black dark:text-white">
  Content
</div>
```

**After:**
```tsx
<Button variant="primary" isDark={isDark} currentTheme={currentTheme}>
  Click me
</Button>
<div style={{
  backgroundColor: colorUtils.getThemeColor('surface', isDark, currentTheme),
  color: colorUtils.getThemeColor('text', isDark, currentTheme),
}}>
  Content
</div>
```

### From Inline Styles

**Before:**
```tsx
<div style={{ 
  backgroundColor: '#F9A825', 
  color: 'white',
  padding: '1rem',
  borderRadius: '8px'
}}>
  Content
</div>
```

**After:**
```tsx
<Card 
  variant="elevated" 
  padding="md" 
  isDark={isDark} 
  currentTheme={currentTheme}
>
  <Typography color="accent" isDark={isDark} currentTheme={currentTheme}>
    Content
  </Typography>
</Card>
```

## 🎯 Best Practices

1. **Always use the design system** - Don't hardcode colors or styles
2. **Pass isDark and currentTheme props** - All components need theme awareness
3. **Use semantic colors** - Prefer semantic over specific color values
4. **Consistent spacing** - Use the spacing scale from the design system
5. **Responsive design** - Use the breakpoints and responsive utilities
6. **TypeScript interfaces** - Define proper interfaces for all components
7. **Accessibility first** - Ensure all components are accessible
8. **Performance optimized** - Use efficient styling approaches

## 🚀 Future Enhancements

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

## 📖 Contributing

### Adding New Components
1. Create TypeScript component with proper interfaces
2. Implement theme-aware styling using design system utilities
3. Add comprehensive documentation and examples
4. Test across all themes and breakpoints
5. Update this documentation

### Adding New Themes
1. Define colors in `src/design/colors.ts`
2. Add CSS variables in `src/index.css`
3. Update theme utility functions
4. Test across all components
5. Update documentation

---

*This design system provides a solid foundation for creating engaging, accessible, and performant user experiences while maintaining flexibility for future enhancements.*
