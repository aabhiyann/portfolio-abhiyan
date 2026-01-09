import React from "react";
import { SafeImage } from "../../ui/SafeImage";
import { cn } from "../../../utils/cn";

interface ImageRendererProps {
  src: string;
  alt: string;
  className?: string;
}

/**
 * Renders markdown images with SafeImage for error handling.
 * Extracted from SimpleMarkdown for better testability and reusability.
 */
export const ImageRenderer: React.FC<ImageRendererProps> = ({
  src,
  alt,
  className,
}) => {
  return (
    <div className={cn("my-8", className)}>
      <div className="rounded-2xl overflow-hidden border border-border-primary/50 shadow-xl">
        <SafeImage
          src={src}
          alt={alt || "Image"}
          className="w-full h-auto"
          fallback="/images/markdown-image-placeholder.png"
        />
      </div>
      {alt && (
        <p className="mt-3 text-sm text-text-muted italic text-center">{alt}</p>
      )}
    </div>
  );
};

export default ImageRenderer;
