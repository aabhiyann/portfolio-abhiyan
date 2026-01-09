import React, { Component, ErrorInfo, ReactNode } from "react";

interface ErrorBoundaryProps {
  children: ReactNode;
  fallback?: React.ComponentType<{ error: Error; resetError: () => void }>;
  onError?: (error: Error, errorInfo: ErrorInfo) => void;
}

interface ErrorBoundaryState {
  hasError: boolean;
  error: Error | null;
}

/**
 * Production-grade Error Boundary with customizable fallback and error reporting.
 *
 * Features:
 * - Custom fallback component support
 * - Error reporting callback for analytics
 * - Reset functionality to recover from errors
 * - Detailed error logging
 *
 * @example
 * <ErrorBoundary
 *   fallback={PageErrorFallback}
 *   onError={(error) => reportToSentry(error)}
 * >
 *   <YourComponent />
 * </ErrorBoundary>
 */
class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error: Error): ErrorBoundaryState {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo): void {
    console.error("ErrorBoundary caught:", error, errorInfo);

    // Call user-provided error handler (for analytics, logging, etc.)
    if (this.props.onError) {
      this.props.onError(error, errorInfo);
    }

    // Send to analytics if available
    if (typeof window !== "undefined" && "gtag" in window) {
      (window as Window & { gtag: (...args: unknown[]) => void }).gtag(
        "event",
        "exception",
        {
          description: error.message,
          fatal: true,
        },
      );
    }
  }

  resetError = () => {
    this.setState({ hasError: false, error: null });
  };

  render(): ReactNode {
    if (this.state.hasError && this.state.error) {
      // Use custom fallback if provided
      if (this.props.fallback) {
        const FallbackComponent = this.props.fallback;
        return (
          <FallbackComponent
            error={this.state.error}
            resetError={this.resetError}
          />
        );
      }

      // Default fallback UI
      return (
        <div className="min-h-screen flex items-center justify-center bg-bg-primary text-text-primary p-8">
          <div className="max-w-2xl w-full">
            <h1 className="text-3xl font-bold text-red-500 mb-4">
              Something went wrong.
            </h1>
            <div className="bg-bg-surface p-6 rounded-lg overflow-auto border border-border-primary">
              <p className="font-mono text-sm text-text-muted">
                {this.state.error.toString()}
              </p>
            </div>
            <button
              onClick={this.resetError}
              className="mt-4 px-4 py-2 bg-accent-primary text-white rounded hover:bg-accent-primary/90 transition-colors"
            >
              Try Again
            </button>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
