/**
 * UI Components Index
 *
 * Centralized exports for all UI components.
 * This ensures consistent imports across the application.
 */

export { default as Button } from "./Button";

export { default as Card } from "./Card";
export type { CardProps } from "./Card";

export { Typography } from "./Typography";
export type { TypographyProps } from "./Typography";

export { Chip } from "./Chip";
export type { ChipProps } from "./Chip";

export { ProjectCard } from "./ProjectCard";

export { SafeImage } from "./SafeImage";

export { ProjectGrid } from "./ProjectGrid";

export { ImageSkeleton, TypingIndicator, Shimmer } from "./Skeleton";

// Re-export design system utilities for convenience
export { colorUtils } from "../../design/colors";
export { designSystem } from "../../design/system";
