export default function RouteLoadingFallback() {
  return (
    <div
      className="min-h-[40vh] flex flex-col items-center justify-center gap-4 text-text-muted"
      role="status"
      aria-live="polite"
      aria-busy="true"
    >
      <div className="w-10 h-10 border-4 border-accent-primary border-t-transparent rounded-full animate-spin" />
      <span className="text-sm font-mono">Loading…</span>
    </div>
  );
}
