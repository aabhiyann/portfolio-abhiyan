import { useState } from "react";
import { Link } from "react-router-dom";

function Navbar({ isDark, toggleTheme, currentTheme, switchColorTheme }) {
  const [showThemeMenu, setShowThemeMenu] = useState(false);

  const availableThemes = [
    { id: 'default', name: 'Default', color: '#FF7A00' },
    { id: 'kathmanduFog', name: 'Kathmandu Fog', color: '#F472B6' },
    { id: 'creativeVoltage', name: 'Creative Voltage', color: '#8B5CF6' }
  ];

  return (
    <header className="sticky top-0 z-50 backdrop-blur-md border-b border-light-border bg-light-bg/80">
      <div className="max-w-7xl mx-auto px-6 md:px-8 h-16 flex items-center justify-between">
        <Link
          to="/"
          className="font-semibold transition-colors hover:opacity-70 font-heading text-light-text"
        >
          AS
        </Link>

        <nav className="hidden md:flex gap-6" aria-label="Main navigation">
          <Link
            to="/projects"
            className="text-sm md:text-base font-medium transition-colors hover:text-accent text-light-text"
          >
            Projects
          </Link>
          <Link
            to="/photography"
            className="text-sm md:text-base font-medium transition-colors hover:text-accent text-light-text"
          >
            Photography
          </Link>
          <Link
            to="/deep-dives"
            className="text-sm md:text-base font-medium transition-colors hover:text-accent text-light-text"
          >
            Deep Dives
          </Link>
          <Link
            to="/about"
            className="text-sm md:text-base font-medium transition-colors hover:text-accent text-light-text"
          >
            About
          </Link>
        </nav>

        <div className="flex items-center gap-2">
          {/* Color Theme Selector */}
          <div className="relative">
            <button
              onClick={() => setShowThemeMenu(!showThemeMenu)}
              className="p-2 rounded-lg transition-colors bg-light-surface text-light-text border border-light-border hover:bg-light-muted/10"
              aria-label="Select color theme"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zM7 3H5a2 2 0 00-2 2v12a4 4 0 004 4h2M9 3h2a2 2 0 012 2v12a4 4 0 01-4 4H9" />
              </svg>
            </button>

            {showThemeMenu && (
              <div className="absolute right-0 mt-2 w-48 rounded-lg shadow-lg border border-light-border bg-light-surface">
                <div className="py-1">
                  {availableThemes.map((theme) => (
                    <button
                      key={theme.id}
                      onClick={() => {
                        switchColorTheme(theme.id);
                        setShowThemeMenu(false);
                      }}
                      className={`w-full text-left px-4 py-2 text-sm transition-colors hover:bg-light-muted/10 text-light-text ${
                        currentTheme === theme.id ? 'bg-accent/10 text-accent' : ''
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <div 
                          className="w-4 h-4 rounded-full border border-light-border"
                          style={{ backgroundColor: theme.color }}
                        />
                        {theme.name}
                      </div>
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Dark/Light Mode Toggle */}
          <button
            onClick={toggleTheme}
            className="p-2 rounded-lg transition-colors bg-light-surface text-light-text border border-light-border hover:bg-light-muted/10"
            aria-label={`Switch to ${isDark ? 'light' : 'dark'} mode`}
          >
            {isDark ? (
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
              </svg>
            ) : (
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
              </svg>
            )}
          </button>
        </div>
      </div>
    </header>
  );
}

export default Navbar;