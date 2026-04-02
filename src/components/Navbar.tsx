import React, { useEffect } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { useAppStore } from "../store/store";
import { useTheme } from "../contexts/useTheme";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const NavLinks = ({
  onLinkClick,
  mobile = false,
}: {
  onLinkClick?: () => void;
  mobile?: boolean;
}) => {
  const navLinks = [
    { path: "/about", label: "About" },
    { path: "/projects", label: "Projects" },
    { path: "/skills", label: "Skills" },
    { path: "/deep-dives", label: "Writing" },
    { path: "/photography", label: "Photography" },
    { path: "/contact", label: "Contact" },
  ];

  const desktopLinkClass = (isActive: boolean) =>
    `px-3 py-2 text-sm font-medium transition-colors relative ${
      isActive
        ? "text-text-primary after:absolute after:bottom-0 after:left-3 after:right-3 after:h-px after:bg-accent-primary"
        : "text-text-muted"
    } hover:text-text-primary`;

  const mobileLinkClass = (isActive: boolean) =>
    `text-2xl font-heading font-semibold transition-colors ${
      isActive ? "text-accent-primary" : "text-text-muted"
    } hover:text-text-primary`;

  return (
    <div
      className={
        mobile
          ? "flex flex-col gap-5 items-start w-full"
          : "flex items-baseline space-x-1"
      }
    >
      {navLinks.map((link) => (
        <NavLink
          key={link.path}
          to={link.path}
          onClick={onLinkClick}
          className={({ isActive }) =>
            mobile ? mobileLinkClass(isActive) : desktopLinkClass(isActive)
          }
        >
          {link.label}
        </NavLink>
      ))}
      {/* Experience: plain anchor so hash scroll works */}
      <a
        href="/about#experience"
        onClick={onLinkClick}
        className={mobile ? mobileLinkClass(false) : desktopLinkClass(false)}
      >
        Experience
      </a>
    </div>
  );
};

const Navbar: React.FC = () => {
  // Use ThemeContext for theme (not Zustand - ThemeProvider handles DOM updates)
  const { themeState, toggleTheme } = useTheme();
  const isDarkMode = themeState.isDarkMode;

  // Use Zustand only for UI state
  const isMobileMenuOpen = useAppStore((state) => state.isMobileMenuOpen);
  const setMobileMenuOpen = useAppStore((state) => state.setMobileMenuOpen);
  const location = useLocation();

  const closeMobileMenu = () => setMobileMenuOpen(false);
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [isMobileMenuOpen]);

  // Close menu on route change (only depends on pathname, not full location)
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname, setMobileMenuOpen]);

  return (
    <>
      <header className="sticky top-0 z-40 w-full backdrop-blur-md bg-bg-navbar border-b border-border-primary transition-colors duration-300 overflow-hidden">
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <Link
                to="/"
                onClick={closeMobileMenu}
                className="font-heading font-bold text-xl text-text-primary relative z-50"
              >
                AS
              </Link>
            </div>
            <div className="hidden md:block">
              <nav className="ml-10 flex items-baseline space-x-4">
                <NavLinks />
              </nav>
            </div>
            <div className="flex items-center gap-2 sm:gap-4">
              <button
                onClick={toggleTheme}
                className="p-2 rounded-full text-text-muted hover:text-text-primary hover:bg-overlay-light focus:outline-none transition-colors relative z-50"
                aria-label={`Switch to ${isDarkMode ? "light" : "dark"} mode`}
              >
                {isDarkMode ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
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
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
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
              <Link
                to="/resume"
                className="hidden sm:inline-flex px-4 py-2 rounded-md text-sm font-medium border border-border-primary text-text-primary hover:border-accent-primary/40 hover:text-accent-primary transition-colors relative z-50"
              >
                Resume
              </Link>
              <button
                onClick={() => setMobileMenuOpen(!isMobileMenuOpen)}
                className="md:hidden p-2 rounded-md text-text-muted hover:text-text-primary focus:outline-none relative z-50"
                aria-label="Toggle mobile menu"
              >
                {isMobileMenuOpen ? (
                  <X className="h-6 w-6" />
                ) : (
                  <Menu className="h-6 w-6" />
                )}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="md:hidden fixed inset-0 z-30 bg-bg-primary/95 backdrop-blur-md overflow-y-auto"
          >
            <nav className="max-w-7xl mx-auto min-h-screen px-6 pt-28 pb-12">
              <NavLinks onLinkClick={closeMobileMenu} mobile />
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
