import React, { useState } from "react";
import { cn } from "../../utils/cn";

interface SafeImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  src: string;
  alt: string;
  fallback?: string;
  loader?: React.ReactNode;
  onError?: (e: React.SyntheticEvent<HTMLImageElement>) => void;
}

/**
 * Production-grade image component with error handling and loading states.
 *
 * Features:
 * - Automatic fallback on load failure
 * - Loading state with skeleton
 * - Error tracking for analytics
 * - Prevents broken image icons
 *
 * @example
 * <SafeImage
 *   src="/images/project.png"
 *   alt="Project screenshot"
 *   fallback="/images/placeholder.png"
 * />
 */
export const SafeImage: React.FC<SafeImageProps> = ({
  src,
  alt,
  fallback = "/images/placeholder.png",
  loader,
  onError,
  className,
  ...props
}) => {
  const [imgSrc, setImgSrc] = useState<string>(src);
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);

  const handleError = (e: React.SyntheticEvent<HTMLImageElement>) => {
    console.error(`Failed to load image: ${src}`);
    setImgSrc(fallback);
    setHasError(true);
    setIsLoading(false);

    // Call user's onError handler if provided
    onError?.(e);

    // Optional: Send to analytics
    if (typeof window !== "undefined" && "gtag" in window) {
      (window as Window & { gtag: (...args: unknown[]) => void }).gtag(
        "event",
        "exception",
        {
          description: `Image load failed: ${src}`,
          fatal: false,
        },
      );
    }
  };

  const handleLoad = () => {
    setIsLoading(false);
  };

  // Reset state when src changes
  React.useEffect(() => {
    setImgSrc(src);
    setIsLoading(true);
    setHasError(false);
  }, [src]);

  return (
    <div className="relative w-full h-full">
      {isLoading && (
        <div className="absolute inset-0 flex items-center justify-center">
          {loader || (
            <div className="w-full h-full bg-gradient-to-r from-bg-surface via-bg-surface/50 to-bg-surface animate-pulse rounded" />
          )}
        </div>
      )}
      <img
        src={imgSrc}
        alt={alt}
        loading="lazy"
        decoding="async"
        onError={handleError}
        onLoad={handleLoad}
        className={cn(
          "transition-opacity duration-300",
          isLoading && "opacity-0",
          hasError && "opacity-50",
          className,
        )}
        {...props}
      />
    </div>
  );
};

export default SafeImage;
