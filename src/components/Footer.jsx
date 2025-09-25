import { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion"; // eslint-disable-line no-unused-vars
import { motionTokens } from "../utils/motion";
import ThemeSlider from "./ui/ThemeSlider";
import { useTheme } from "../contexts/ThemeContext";

function Footer() {
  const [footballBounce, setFootballBounce] = useState(false);
  const { themeState, toggleTheme, setIsAutoMode } = useTheme();

  const handleFootballClick = () => {
    setFootballBounce(true);
    setTimeout(() => setFootballBounce(false), 1000);
  };

  const handleThemeToggle = () => {
    toggleTheme();
    setIsAutoMode(false); // Disable auto mode when manually toggling
  };

  return (
    <footer className="bg-surface-light dark:bg-surface-dark border-t border-black/5 dark:border-white/10">
      <div className="max-w-7xl mx-auto px-6 md:px-8 py-16">
        {/* Row 1: Interactive Theme Switcher */}
        <motion.div
          className="flex flex-col items-center space-y-6 mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: motionTokens.duration.slow / 1000 }}
        >
          <div className="text-center">
            <h3 className="text-lg font-semibold text-text-light dark:text-text-dark mb-2">
              Interactive Theme Timeline
            </h3>
            <p className="text-sm text-muted-light dark:text-muted-dark max-w-md">
              Drag the slider to change the time of day and see the theme transition between light and dark modes automatically.
            </p>
          </div>
          
          <ThemeSlider />
          
          {/* Manual theme toggle button */}
          <div className="flex items-center space-x-4">
            <button
              onClick={handleThemeToggle}
              className="px-4 py-2 rounded-full bg-accent text-white hover:opacity-80 transition-opacity text-sm font-medium"
              aria-label={`Switch to ${themeState.isDarkMode ? 'light' : 'dark'} mode`}
            >
              {themeState.isDarkMode ? '☀️ Light Mode' : '🌙 Dark Mode'}
            </button>
            
            <div className="text-xs text-muted-light dark:text-muted-dark">
              {themeState.isAutoMode ? 'Auto mode active' : 'Manual mode active'}
            </div>
          </div>
        </motion.div>

        {/* Row 2: Links */}
        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: motionTokens.duration.slow / 1000 }}
        >
          <div>
            <h3 className="text-sm font-semibold text-text-light dark:text-text-dark mb-4 uppercase tracking-wider">
              Connect
            </h3>
            <div className="space-y-3">
              <a
                href="https://linkedin.com/in/abhiyansainju"
                target="_blank"
                rel="noopener noreferrer"
                className="block text-muted-light dark:text-muted-dark hover:text-accent transition-colors"
              >
                LinkedIn
              </a>
              <a
                href="https://github.com/aabhiyann"
                target="_blank"
                rel="noopener noreferrer"
                className="block text-muted-light dark:text-muted-dark hover:text-accent transition-colors"
              >
                GitHub
              </a>
              <a
                href="mailto:abhiyan@example.com"
                className="block text-muted-light dark:text-muted-dark hover:text-accent transition-colors"
              >
                Email
              </a>
              <a
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="block text-muted-light dark:text-muted-dark hover:text-accent transition-colors"
              >
                Resume
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-text-light dark:text-text-dark mb-4 uppercase tracking-wider">
              Work
            </h3>
            <div className="space-y-3">
              <Link
                to="/projects"
                className="block text-muted-light dark:text-muted-dark hover:text-accent transition-colors"
              >
                Projects
              </Link>
              <Link
                to="/photography"
                className="block text-muted-light dark:text-muted-dark hover:text-accent transition-colors"
              >
                Photography
              </Link>
              <Link
                to="/deep-dives"
                className="block text-muted-light dark:text-muted-dark hover:text-accent transition-colors"
              >
                Deep Dives
              </Link>
              <Link
                to="/about"
                className="block text-muted-light dark:text-muted-dark hover:text-accent transition-colors"
              >
                About
              </Link>
            </div>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-text-light dark:text-text-dark mb-4 uppercase tracking-wider">
              Resources
            </h3>
            <div className="space-y-3">
              <a
                href="/design-system"
                className="block text-muted-light dark:text-muted-dark hover:text-accent transition-colors"
              >
                Design System
              </a>
              <a
                href="/tech-stack"
                className="block text-muted-light dark:text-muted-dark hover:text-accent transition-colors"
              >
                Tech Stack
              </a>
              <a
                href="/contact"
                className="block text-muted-light dark:text-muted-dark hover:text-accent transition-colors"
              >
                Contact
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-text-light dark:text-text-dark mb-4 uppercase tracking-wider">
              Legal
            </h3>
            <div className="space-y-3">
              <a
                href="/privacy"
                className="block text-muted-light dark:text-muted-dark hover:text-accent transition-colors"
              >
                Privacy Policy
              </a>
              <a
                href="/terms"
                className="block text-muted-light dark:text-muted-dark hover:text-accent transition-colors"
              >
                Terms of Service
              </a>
            </div>
          </div>
        </motion.div>

        {/* Row 2: Currently Listening */}
        <motion.div
          className="text-center mb-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{
            duration: motionTokens.duration.slow / 1000,
            delay: 0.2,
          }}
        >
          <div className="inline-flex items-center gap-3 bg-black/5 dark:bg-white/10 rounded-full px-6 py-3">
            <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
            <span className="text-sm text-muted-light dark:text-muted-dark">
              Currently listening:{" "}
              <span className="text-text-light dark:text-text-dark font-medium">
                "Bohemian Rhapsody" - Queen
              </span>
            </span>
            <svg
              className="w-4 h-4 text-muted-light dark:text-muted-dark"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M8 5v14l11-7z" />
            </svg>
          </div>
        </motion.div>

        {/* Row 3: FC Barcelona CTA with Easter Egg */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{
            duration: motionTokens.duration.slow / 1000,
            delay: 0.4,
          }}
        >
          <p className="text-lg text-muted-light dark:text-muted-dark mb-2">
            Let's build, collaborate, or talk{" "}
            <button
              onClick={handleFootballClick}
              className={`inline-block ${
                footballBounce ? "animate-bounce" : ""
              }`}
            >
              FC Barcelona ⚽
            </button>
          </p>
          <p className="text-sm text-muted-light dark:text-muted-dark">
            Visca Barça! 🔵🔴
          </p>
        </motion.div>

        {/* Copyright */}
        <motion.div
          className="text-center mt-12 pt-8 border-t border-black/5 dark:border-white/10"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{
            duration: motionTokens.duration.slow / 1000,
            delay: 0.6,
          }}
        >
          <p className="text-sm text-muted-light dark:text-muted-dark">
            © 2025 Abhiyan Sainju. Built with ❤️ using React, Vite, and Tailwind
            CSS.
          </p>
        </motion.div>
      </div>
    </footer>
  );
}

export default Footer;
