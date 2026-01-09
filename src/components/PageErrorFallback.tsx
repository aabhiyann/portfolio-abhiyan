import React from "react";
import { Link } from "react-router-dom";
import Page from "./Page";
import Button from "./ui/Button";

interface PageErrorFallbackProps {
  error: Error;
  resetError: () => void;
}

/**
 * Production-grade error fallback UI for error boundaries.
 *
 * Features:
 * - User-friendly error message
 * - Technical details in collapsible section
 * - Recovery options (retry, go home)
 * - Professional styling matching portfolio design
 */
export const PageErrorFallback: React.FC<PageErrorFallbackProps> = ({
  error,
  resetError,
}) => (
  <Page>
    <section className="min-h-screen flex items-center justify-center py-24 px-6">
      <div className="max-w-md text-center">
        <div className="text-6xl mb-4">😵</div>
        <h1 className="text-3xl font-bold mb-4 text-text-primary">
          Oops, something broke
        </h1>
        <p className="text-text-muted mb-2">
          We've been notified and are looking into it.
        </p>
        <details className="mb-6 text-left">
          <summary className="cursor-pointer text-sm text-text-muted hover:text-accent-primary transition-colors">
            Technical details
          </summary>
          <code className="block mt-2 p-4 bg-bg-surface rounded text-xs overflow-auto text-text-secondary">
            {error.message}
            {error.stack && (
              <>
                <br />
                <br />
                {error.stack}
              </>
            )}
          </code>
        </details>
        <div className="flex gap-4 justify-center">
          <Button onClick={resetError} variant="primary">
            Try Again
          </Button>
          <Button as={Link} to="/" variant="outline">
            Go Home
          </Button>
        </div>
      </div>
    </section>
  </Page>
);

export default PageErrorFallback;
