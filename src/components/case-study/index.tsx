import React from "react";
import { Typography } from "../ui";
import { cn } from "../../utils/cn"; // Assuming you have a cn utility, or I will use template literals if not found. Let's check utils/cn or similar.

// I'll check for utils/cn presence in a moment, but for now I'll implement a safe fallback or use template strings.
// Actually, looking at previous list_dir of utils (Step 12: 6 children), it likely exists.
// I will assume standard clsx/tailwind-merge pattern or just use template strings to be safe if I don't look.
// Update: I will use template strings to be 100% safe without looking, or import from clsx if I see it in package.json (I saw clsx in Step 19).

// Local cn implementation removed in favor of import from utils

export const CaseStudySection = ({
  title,
  children,
  className,
}: {
  title?: string;
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <section className={cn("mb-12", className)}>
      {title && (
        <Typography
          variant="h2"
          className="mb-6 text-2xl md:text-3xl font-bold"
        >
          {title}
        </Typography>
      )}
      {children}
    </section>
  );
};

export const CaseStudyImage = ({
  src,
  alt,
  caption,
  className,
}: {
  src: string;
  alt: string;
  caption?: string;
  className?: string;
}) => {
  return (
    <div className={cn("mb-8", className)}>
      <div className="rounded-2xl overflow-hidden border border-border-primary/50 shadow-xl bg-bg-surface/30">
        <img
          src={src}
          alt={alt}
          className="w-full h-auto object-cover"
          onError={(e) => {
            e.currentTarget.style.display = "none";
          }}
        />
      </div>
      {caption && (
        <Typography
          variant="caption"
          color="muted"
          className="mt-3 block text-center italic"
        >
          {caption}
        </Typography>
      )}
    </div>
  );
};

export const CaseStudyText = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <Typography
      variant="body"
      className={cn("mb-4 leading-relaxed text-lg", className)}
    >
      {children}
    </Typography>
  );
};
