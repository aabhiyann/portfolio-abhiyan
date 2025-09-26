function SkipLink() {
  return (
    <a
      href="#main-content"
      className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 z-50 bg-accent text-white px-4 py-2 rounded-lg font-medium transition-all"
    >
      Skip to main content
    </a>
  );
}

export default SkipLink;
