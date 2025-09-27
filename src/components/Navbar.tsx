import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { useTheme } from "../contexts/useTheme";

const NavLinks = () => (
  <>
    <NavLink to="/projects" className={({ isActive }) => `px-3 py-2 rounded-md text-sm font-medium ${isActive ? 'text-primary' : 'text-secondary'} hover:text-primary`}>Projects</NavLink>
    <NavLink to="/photography" className={({ isActive }) => `px-3 py-2 rounded-md text-sm font-medium ${isActive ? 'text-primary' : 'text-secondary'} hover:text-primary`}>Photography</NavLink>
    <NavLink to="/deep-dives" className={({ isActive }) => `px-3 py-2 rounded-md text-sm font-medium ${isActive ? 'text-primary' : 'text-secondary'} hover:text-primary`}>Deep Dives</NavLink>
    <NavLink to="/about" className={({ isActive }) => `px-3 py-2 rounded-md text-sm font-medium ${isActive ? 'text-primary' : 'text-secondary'} hover:text-primary`}>About</NavLink>
  </>
);

const Navbar: React.FC = () => {
  const { themeState, toggleTheme } = useTheme();
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 w-full backdrop-blur-sm bg-bg-surface/80 border-b border-border-primary transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="font-heading font-bold text-xl text-primary">AS</Link>
          </div>
          <div className="hidden md:block">
            <nav className="ml-10 flex items-baseline space-x-4">
              <NavLinks />
            </nav>
          </div>
          <div className="flex items-center">
            <button
              onClick={toggleTheme}
              className="p-2 rounded-full text-secondary hover:text-primary hover:bg-bg-card focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-bg-surface focus:ring-accent-primary"
              aria-label={`Switch to ${themeState.isDarkMode ? "light" : "dark"} mode`}
            >
              {themeState.isDarkMode ? (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" /></svg>
              ) : (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" /></svg>
              )}
            </button>
            <div className="-mr-2 flex md:hidden">
              <button
                onClick={() => setMobileMenuOpen(!isMobileMenuOpen)}
                className="inline-flex items-center justify-center p-2 rounded-md text-secondary hover:text-primary hover:bg-bg-card focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-bg-surface focus:ring-accent-primary"
              >
                {isMobileMenuOpen ? (
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
                ) : (
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" /></svg>
                )}
              </button>
            </div>
          </div>
        </div>
      </div>
      {isMobileMenuOpen && (
        <div className="md:hidden">
          <nav className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <NavLinks />
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;
