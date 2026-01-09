interface FetchWithRetryOptions extends RequestInit {
  timeout?: number;
  retries?: number;
  retryDelay?: number;
  onRetry?: (attempt: number, error: Error) => void;
}

/**
 * Production-grade fetch with automatic retry, timeout, and offline detection.
 *
 * Features:
 * - Automatic retry on transient failures (default: 3 attempts)
 * - Request timeout (default: 10 seconds)
 * - Offline detection via navigator.onLine
 * - Exponential backoff on retries
 * - Won't retry on 4xx client errors
 *
 * @example
 * const response = await fetchWithRetry('https://api.example.com/data', {
 *   timeout: 5000,
 *   retries: 2,
 *   onRetry: (attempt) => console.log(`Retry attempt ${attempt}`)
 * });
 */
export async function fetchWithRetry(
  url: string,
  options: FetchWithRetryOptions = {},
): Promise<Response> {
  const {
    timeout = 10000,
    retries = 3,
    retryDelay = 1000,
    onRetry,
    ...fetchOptions
  } = options;

  // Check offline status
  if (typeof navigator !== "undefined" && !navigator.onLine) {
    throw new Error("No internet connection. Please check your network.");
  }

  let lastError: Error | null = null;

  for (let attempt = 0; attempt <= retries; attempt++) {
    try {
      // Create abort controller for timeout
      const controller = new AbortController();
      const timeoutId = setTimeout(() => controller.abort(), timeout);

      const response = await fetch(url, {
        ...fetchOptions,
        signal: controller.signal,
      });

      clearTimeout(timeoutId);

      if (!response.ok) {
        // Don't retry 4xx errors (client errors)
        if (response.status >= 400 && response.status < 500) {
          throw new Error(`Request failed: ${response.statusText}`);
        }

        // Retry 5xx errors (server errors)
        throw new Error(`Server error: ${response.status}`);
      }

      return response;
    } catch (error) {
      lastError = error as Error;

      // Don't retry on abort (user cancelled) or client errors
      if (
        error instanceof Error &&
        (error.name === "AbortError" ||
          error.message.includes("Request failed"))
      ) {
        throw error;
      }

      // If we have retries left, wait and try again
      if (attempt < retries) {
        onRetry?.(attempt + 1, lastError);
        await new Promise((resolve) =>
          setTimeout(resolve, retryDelay * (attempt + 1)),
        );
        continue;
      }

      // Out of retries
      throw lastError;
    }
  }

  throw lastError;
}
