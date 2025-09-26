# Design System Documentation

## Overview

This design system provides a centralized, reusable approach to styling and components across the portfolio application. It ensures consistency, maintainability, and scalability.

## 📚 Complete Documentation

**For the complete, up-to-date design system documentation, see:**
**[DESIGN_SYSTEM.md](../../DESIGN_SYSTEM.md)**

This includes:
- Complete color system with all themes
- Typography system and usage
- Component specifications and examples
- Styling standards and guidelines
- Migration patterns and best practices
- Accessibility features
- Development guidelines

## Architecture

```
src/design/
├── colors.ts          # Color palette and utilities
├── system.ts          # Design system configuration
├── index.ts           # Centralized exports
└── README.md          # This documentation (legacy)

src/components/ui/
├── Button.tsx         # Standardized button component
├── Card.tsx           # Standardized card component
├── Typography.tsx     # Standardized typography component
├── Chip.tsx           # Standardized chip component
└── index.ts           # Component exports
```

## Color System

### Light Theme: Yellow + Blue
- **Background**: `#F1F5F9` (light blue-gray)
- **Navbar**: `#FFFBEB` (warm cream)
- **Primary**: `#F9A825` (warm yellow)
- **Secondary**: `#3B82F6` (blue)
- **Text**: `#0F172A` (dark slate)

### Dark Theme: Purple + Green
- **Background**: `#1A202C` (dark slate)
- **Primary**: `#8B5CF6` (purple)
- **Secondary**: `#22C55E` (green)
- **Text**: `#F4F4F7` (light gray)

## Usage

### Importing the Design System

```typescript
import { colors, colorUtils, Button, Card, Typography } from '../design';
```

### Using Colors

```typescript
import { colors, colorUtils } from '../design/colors';

// Get theme-aware color
const textColor = colorUtils.getThemeColor('text', isDark);

// Get accent color
const primaryColor = colorUtils.getAccentColor('primary', isDark);

// Get semantic color
const linkColor = colorUtils.getSemanticColor('link', isDark);
```

### Using Components

```tsx
import { Button, Card, Typography } from '../design';

function MyComponent({ isDark }) {
  return (
    <Card isDark={isDark} variant="elevated">
      <Typography variant="h2" color="primary" isDark={isDark}>
        Title
      </Typography>
      <Typography variant="body" color="secondary" isDark={isDark}>
        Description
      </Typography>
      <Button variant="primary" isDark={isDark}>
        Action
      </Button>
    </Card>
  );
}
```

## Migration Guide

### From Legacy CSS Classes

**Before:**
```tsx
<button className="btn-primary">Click me</button>
```

**After:**
```tsx
<Button variant="primary" isDark={isDark}>Click me</Button>
```

### From Inline Styles

**Before:**
```tsx
<div style={{ backgroundColor: '#F9A825', color: 'white' }}>
  Content
</div>
```

**After:**
```tsx
<Card isDark={isDark} variant="elevated">
  <Typography color="accent" isDark={isDark}>
    Content
  </Typography>
</Card>
```

## Best Practices

1. **Always use the design system** - Don't hardcode colors or styles
2. **Pass isDark prop** - All components need theme awareness
3. **Use semantic colors** - Prefer semantic over specific color values
4. **Consistent spacing** - Use the spacing scale from the design system
5. **Responsive design** - Use the breakpoints and responsive utilities

## Future Enhancements

- [ ] Add more component variants
- [ ] Implement design tokens for spacing and typography
- [ ] Add animation utilities
- [ ] Create component documentation with Storybook
- [ ] Add accessibility utilities
- [ ] Implement theme switching utilities

## Contributing

When adding new components or colors:

1. Follow the existing naming conventions
2. Add proper TypeScript types
3. Include theme awareness (isDark prop)
4. Update this documentation
5. Add examples and usage guidelines
