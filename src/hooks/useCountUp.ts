import { useEffect, useRef, useState } from "react";
import { useInView } from "framer-motion";

interface UseCountUpOptions {
  end: number;
  duration?: number; // in milliseconds
  start?: number;
  decimals?: number;
  suffix?: string;
}

/**
 * Professional count-up animation hook
 * - Respects prefers-reduced-motion
 * - Triggers once on scroll into view
 * - Smooth ease-out timing
 * - Performant with requestAnimationFrame
 */
export function useCountUp({
  end,
  duration = 1500,
  start = 0,
  decimals = 0,
  suffix = "",
}: UseCountUpOptions) {
  const [count, setCount] = useState(start);
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });
  const hasAnimated = useRef(false);

  useEffect(() => {
    // Respect user's motion preferences
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    if (prefersReducedMotion) {
      setCount(end);
      return;
    }

    // Only animate once when in view
    if (!isInView || hasAnimated.current) return;
    hasAnimated.current = true;

    const startTimestamp = Date.now();
    const range = end - start;

    const updateCount = () => {
      const now = Date.now();
      const elapsed = now - startTimestamp;
      const progress = Math.min(elapsed / duration, 1);

      // Ease-out cubic for smooth deceleration
      const easeOut = 1 - Math.pow(1 - progress, 3);
      const current = start + range * easeOut;

      setCount(current);

      if (progress < 1) {
        requestAnimationFrame(updateCount);
      } else {
        setCount(end); // Ensure we end exactly on target
      }
    };

    requestAnimationFrame(updateCount);
  }, [isInView, end, start, duration]);

  const displayValue =
    typeof count === "number"
      ? count.toFixed(decimals) + suffix
      : String(count) + suffix;

  return { ref, count, displayValue };
}
