// src/utils/motion.ts
export const motionTokens = {
  // Durations (in milliseconds)
  duration: {
    fast: 150, // tap interactions
    normal: 250, // hover/fade transitions
    slow: 400, // page/section entrances
    slower: 600, // complex animations
  },

  // Easing curves
  easing: {
    easeOut: "cubic-bezier(0.22, 1, 0.36, 1)", // easeOutBack-ish for entrances
    easeIn: "cubic-bezier(0.4, 0, 1, 1)", // easeIn for exits
    easeInOut: "cubic-bezier(0.4, 0, 0.2, 1)", // easeInOut for toggles
    linear: "linear", // for progress bars
  },

  // Common animation variants
  variants: {
    fadeUp: {
      initial: { opacity: 0, y: 16 },
      animate: { opacity: 1, y: 0 },
      exit: { opacity: 0, y: -16 },
    },
    fadeIn: {
      initial: { opacity: 0 },
      animate: { opacity: 1 },
      exit: { opacity: 0 },
    },
    scaleHover: {
      initial: { scale: 1 },
      hover: { scale: 1.02 },
    },
    stagger: {
      animate: {
        transition: {
          staggerChildren: 0.1,
        },
      },
    },
  },

  // Reduced motion support
  reducedMotion: {
    duration: 0,
    ease: "linear",
  },
} as const;

// Helper function to respect user's motion preferences
export const getMotionConfig = () => {
  const prefersReducedMotion = window.matchMedia(
    "(prefers-reduced-motion: reduce)"
  ).matches;
  return prefersReducedMotion ? motionTokens.reducedMotion : motionTokens;
};
