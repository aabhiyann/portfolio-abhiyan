import { useState, useCallback, useRef } from "react";
import { fetchWithRetry } from "../utils/api";

interface FetchWithRetryOptions extends RequestInit {
  timeout?: number;
  retries?: number;
  retryDelay?: number;
  onRetry?: (attempt: number, error: Error) => void;
}

/**
 * Production-grade hook for API calls with automatic retry, rate limiting, and error handling.
 *
 * Features:
 * - Automatic retry on transient failures
 * - Rate limiting (default: 5 requests per minute)
 * - Loading and error states
 * - Request timeout
 *
 * @example
 * const { makeRequest, isLoading, error } = useAPI<ResponseType>();
 *
 * const handleSubmit = async () => {
 *   const data = await makeRequest('/api/data', { method: 'POST' });
 *   if (data) {
 *     // Handle success
 *   }
 * };
 */
export function useAPI<T>() {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const requestTimesRef = useRef<number[]>([]);
  const RATE_LIMIT = 5; // Max 5 requests per minute

  const makeRequest = useCallback(
    async (url: string, options?: FetchWithRetryOptions): Promise<T | null> => {
      // Rate limiting - check requests in last minute
      const now = Date.now();
      const oneMinuteAgo = now - 60000;

      // Remove old timestamps
      requestTimesRef.current = requestTimesRef.current.filter(
        (time) => time > oneMinuteAgo,
      );

      // Check if rate limit exceeded
      if (requestTimesRef.current.length >= RATE_LIMIT) {
        setError("Too many requests. Please wait a moment.");
        return null;
      }

      // Add current request timestamp
      requestTimesRef.current.push(now);

      setIsLoading(true);
      setError(null);

      try {
        const response = await fetchWithRetry(url, {
          timeout: 10000,
          retries: 3,
          onRetry: () => {
            // No console.log here
          },
          ...options,
        });

        const data = await response.json();
        return data as T;
      } catch (err) {
        const errorMessage =
          err instanceof Error ? err.message : "An unexpected error occurred";
        setError(errorMessage);
        return null;
      } finally {
        setIsLoading(false);
      }
    },
    [],
  );

  return { makeRequest, isLoading, error };
}
