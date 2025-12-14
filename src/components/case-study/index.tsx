import React from "react";
import { Typography } from "../ui";
import ImageLightbox from "../ui/ImageLightbox";
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
  const [isLightboxOpen, setIsLightboxOpen] = React.useState(false);

  return (
    <>
      <div
        className={cn("mb-12 group cursor-zoom-in", className)}
        onClick={() => setIsLightboxOpen(true)}
      >
        <div className="rounded-2xl overflow-hidden border border-border-primary/50 bg-card/40 backdrop-blur-md relative shadow-2xl transition-all duration-500 hover:shadow-accent-primary/20">
          <div className="relative overflow-hidden">
            <img
              src={src}
              alt={alt}
              className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105"
              onError={(e) => {
                e.currentTarget.style.display = "none";
              }}
            />
            {/* Liquid Glass Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-bg-primary/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 backdrop-blur-[1px]" />

            {/* Click to Expand Indicator */}
            <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-2 group-hover:translate-y-0">
              <div className="bg-bg-surface/80 backdrop-blur-md border border-white/20 px-3 py-1.5 rounded-lg text-xs font-medium text-accent-primary shadow-lg flex items-center gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <circle cx="11" cy="11" r="8"></circle>
                  <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                  <line x1="11" y1="8" x2="11" y2="14"></line>
                  <line x1="8" y1="11" x2="14" y2="11"></line>
                </svg>
                Expand
              </div>
            </div>
          </div>
        </div>
        {caption && (
          <Typography
            variant="caption"
            color="muted"
            className="mt-4 block text-center italic opacity-80 group-hover:opacity-100 transition-opacity"
          >
            {caption}
          </Typography>
        )}
      </div>

      <ImageLightbox
        isOpen={isLightboxOpen}
        onClose={() => setIsLightboxOpen(false)}
        src={src}
        alt={alt}
      />
    </>
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
