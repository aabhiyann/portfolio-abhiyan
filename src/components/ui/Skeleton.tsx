/**
 * Skeleton loader components for displaying loading states
 */

interface ImageSkeletonProps {
  aspectRatio?: string;
  className?: string;
}

export const ImageSkeleton = ({
  aspectRatio = "4/3",
  className = "",
}: ImageSkeletonProps) => (
  <div
    className={`animate-pulse bg-gradient-to-r from-bg-surface via-bg-primary to-bg-surface bg-[length:200%_100%] rounded-xl ${className}`}
    style={{
      aspectRatio,
      animationDuration: "1.5s",
      animationIterationCount: "infinite",
    }}
  >
    <div className="h-full flex items-center justify-center">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="w-8 h-8 text-text-muted/20"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z"
        />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M15 13a3 3 0 11-6 0 3 3 0 016 0z"
        />
      </svg>
    </div>
  </div>
);

export const TypingIndicator = () => (
  <div className="flex gap-1 px-4 py-3 rounded-2xl bg-bg-surface w-fit">
    <div
      className="w-2 h-2 bg-accent-primary rounded-full animate-bounce"
      style={{ animationDelay: "0ms" }}
    />
    <div
      className="w-2 h-2 bg-accent-primary rounded-full animate-bounce"
      style={{ animationDelay: "150ms" }}
    />
    <div
      className="w-2 h-2 bg-accent-primary rounded-full animate-bounce"
      style={{ animationDelay: "300ms" }}
    />
  </div>
);

interface ShimmerProps {
  className?: string;
  children?: React.ReactNode;
}

export const Shimmer = ({ className = "", children }: ShimmerProps) => (
  <div
    className={`animate-pulse bg-gradient-to-r from-bg-surface via-bg-primary to-bg-surface bg-[length:200%_100%] ${className}`}
    style={{
      animationDuration: "1.5s",
      animationIterationCount: "infinite",
    }}
  >
    {children}
  </div>
);
