import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

/**
 * Combines and merges Tailwind CSS class names with proper deduplication.
 *
 * Internally uses clsx for conditional classes and tailwind-merge to properly
 * merge Tailwind classes (ensuring later classes override earlier ones).
 *
 * @param inputs - Class names to combine (strings, arrays, objects, etc.)
 * @returns Merged class name string
 *
 * @example
 * ```tsx
 * cn('px-4 py-2', condition && 'bg-blue-500')
 * cn('px-4', 'px-8') // Returns 'px-8' (tailwind-merge deduplicates)
 * ```
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
