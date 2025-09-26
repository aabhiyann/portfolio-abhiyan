# Styling Standards & Guidelines

## Overview
This document defines the standardized approach for styling components throughout the portfolio codebase. All components must follow these guidelines for consistency and maintainability.

## Core Principles

### 1. **Single Source of Truth**
- All styling decisions must reference the design system (`src/design/`)
- No hardcoded colors, spacing, or typography values
- Use design system utilities for all styling

### 2. **Component-First Approach**
- All components must be TypeScript with proper interfaces
- Use design system utilities instead of inline styles
- Consistent prop patterns across all components

### 3. **Theme-Aware Styling**
- All components must support theme switching
- Use `colorUtils` for theme-aware colors
- Support all three themes: default, kathmanduFog, creativeVoltage

## Styling Standards

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
  // Component logic
};
```

### Color Usage
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

### Typography
```typescript
// ✅ CORRECT - Use Typography component
<Typography variant="h1" color="primary" isDark={isDark} currentTheme={currentTheme}>
  Heading Text
</Typography>

// ❌ WRONG - Direct styling
<h1 style={{ fontSize: '2rem', fontWeight: 'bold' }}>Heading Text</h1>
```

### Spacing & Layout
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

### Component Styling Patterns

#### 1. Button Components
```typescript
export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'ghost' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  isDark?: boolean;
  currentTheme?: string;
  children: React.ReactNode;
}
```

#### 2. Card Components
```typescript
export interface CardProps {
  children: React.ReactNode;
  variant?: 'default' | 'elevated' | 'outlined';
  padding?: 'sm' | 'md' | 'lg';
  isDark?: boolean;
  currentTheme?: string;
  className?: string;
}
```

#### 3. Typography Components
```typescript
export interface TypographyProps {
  children: React.ReactNode;
  variant?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'body' | 'caption' | 'small';
  color?: 'primary' | 'secondary' | 'muted' | 'accent';
  isDark?: boolean;
  currentTheme?: string;
  className?: string;
}
```

## File Organization

### Component Files
```
src/components/
├── ui/
│   ├── Button.tsx          # Standardized button component
│   ├── Card.tsx            # Standardized card component
│   ├── Typography.tsx      # Standardized typography component
│   ├── Chip.tsx            # Standardized chip component
│   └── index.ts            # Export all UI components
├── Layout.tsx              # Layout components
├── Navbar.tsx              # Navigation components
└── Footer.tsx              # Footer components
```

### Styling Files
```
src/
├── design/
│   ├── colors.ts           # Color system
│   ├── system.ts           # Design system configuration
│   └── index.ts            # Export design system
├── styles/
│   ├── globals.css         # Global styles
│   ├── components.css      # Component-specific styles
│   └── utilities.css       # Utility classes
└── index.css               # Main CSS entry point
```

## Migration Strategy

### Phase 1: Standardize Core Components
1. Convert all components to TypeScript
2. Implement consistent prop interfaces
3. Use design system utilities for all styling

### Phase 2: Refactor Styling Approach
1. Remove inline styles in favor of design system
2. Standardize CSS class usage
3. Implement consistent theme support

### Phase 3: Documentation & Testing
1. Update component documentation
2. Add styling examples
3. Create component showcase

## Code Examples

### Before (Inconsistent)
```jsx
// Mixed approaches, hardcoded values
function Button({ children, onClick }) {
  return (
    <button 
      onClick={onClick}
      style={{
        backgroundColor: '#f9a825',
        color: 'white',
        padding: '12px 24px',
        borderRadius: '8px'
      }}
    >
      {children}
    </button>
  );
}
```

### After (Standardized)
```typescript
export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'ghost' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  isDark?: boolean;
  currentTheme?: string;
  children: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  size = 'md',
  isDark = false,
  currentTheme = 'default',
  children,
  className = '',
  ...props
}) => {
  const getVariantStyles = () => {
    switch (variant) {
      case 'primary':
        return {
          backgroundColor: colorUtils.getAccentColor('primary', isDark, currentTheme),
          color: 'white',
        };
      // ... other variants
    }
  };

  const getSizeStyles = () => {
    switch (size) {
      case 'sm':
        return { padding: designSystem.spacing.sm };
      case 'md':
        return { padding: designSystem.spacing.md };
      case 'lg':
        return { padding: designSystem.spacing.lg };
    }
  };

  const styles: React.CSSProperties = {
    ...getVariantStyles(),
    ...getSizeStyles(),
    borderRadius: designSystem.borderRadius.lg,
    transition: `all ${designSystem.animation.duration.normal} ${designSystem.animation.easing.easeInOut}`,
  };

  return (
    <button
      className={className}
      style={styles}
      {...props}
    >
      {children}
    </button>
  );
};
```

## Enforcement

### Linting Rules
- ESLint rules to prevent hardcoded colors
- TypeScript strict mode for all components
- Pre-commit hooks for style consistency

### Code Review Checklist
- [ ] Component uses TypeScript with proper interfaces
- [ ] All colors use design system utilities
- [ ] Theme support implemented
- [ ] Consistent prop patterns
- [ ] No hardcoded styling values
- [ ] Proper documentation

## Benefits

1. **Consistency**: All components follow the same patterns
2. **Maintainability**: Easy to update styling across the entire app
3. **Theme Support**: Seamless theme switching
4. **Developer Experience**: Clear patterns and interfaces
5. **Performance**: Optimized styling approach
6. **Accessibility**: Consistent focus states and interactions

---

This standardization ensures a cohesive, maintainable, and scalable styling system across the entire portfolio codebase.
