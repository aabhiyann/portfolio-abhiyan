import { Link } from "react-router-dom";
import { colorUtils } from "../design/colors";

function Navbar({ isDark, toggleTheme }) {
  return (
    <header
      className="sticky top-0 z-50 backdrop-blur-md border-b"
      style={{
        backgroundColor: isDark
          ? `${colorUtils.getThemeColor('navbar', isDark)}CC`
          : `${colorUtils.getThemeColor('navbar', isDark)}CC`,
        borderColor: `${colorUtils.getThemeColor('border', isDark)}4D`,
      }}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-8 h-16 flex items-center justify-between">
        <Link
          to="/"
          className="font-semibold transition-colors hover:opacity-70"
          style={{
            fontFamily: "var(--font-family-heading)",
            color: colorUtils.getThemeColor('text', isDark),
          }}
        >
          AS
        </Link>

        <nav className="hidden md:flex gap-6" aria-label="Main navigation">
          <Link
            to="/projects"
            className="text-sm md:text-base font-medium transition-colors hover:opacity-70"
            style={{ color: colorUtils.getThemeColor('text', isDark) }}
          >
            Projects
          </Link>
          <Link
            to="/photography"
            className="text-sm md:text-base font-medium transition-colors hover:opacity-70"
            style={{ color: colorUtils.getThemeColor('text', isDark) }}
          >
            Photography
          </Link>
          <Link
            to="/deep-dives"
            className="text-sm md:text-base font-medium transition-colors hover:opacity-70"
            style={{ color: colorUtils.getThemeColor('text', isDark) }}
          >
            Deep Dives
          </Link>
          <Link
            to="/about"
            className="text-sm md:text-base font-medium transition-colors hover:opacity-70"
            style={{ color: colorUtils.getThemeColor('text', isDark) }}
          >
            About
          </Link>
        </nav>

        <button
          onClick={toggleTheme}
          className="p-2 rounded-lg bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
          aria-label="Toggle theme"
        >
          {isDark ? (
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
              />
            </svg>
          ) : (
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
              />
            </svg>
          )}
        </button>
      </div>
    </header>
  );
}

export default Navbar;
