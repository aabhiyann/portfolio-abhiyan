import { useState, useEffect } from "react";
import { motion } from "framer-motion"; // eslint-disable-line no-unused-vars
import { Link } from "react-router-dom";
import { colorUtils } from "../design/colors";
import Navbar from "./Navbar";
import Footer from "./Footer";
import SkipLink from "./SkipLink";

function Layout({ children }) {
  const [isDark, setIsDark] = useState(false);

  // Load theme preference from localStorage on mount
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    const prefersDark = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (savedTheme === "dark" || (!savedTheme && prefersDark)) {
      setIsDark(true);
      document.documentElement.classList.add("dark");
    }
  }, []);

  // Toggle theme and persist to localStorage
  const toggleTheme = () => {
    const newTheme = !isDark;
    setIsDark(newTheme);

    if (newTheme) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  };

  return (
    <div
      className={`min-h-screen transition-colors ${isDark ? "dark" : ""}`}
      style={{
        backgroundColor: colorUtils.getThemeColor('background', isDark),
        color: colorUtils.getThemeColor('text', isDark),
      }}
    >
      <SkipLink />
      <Navbar isDark={isDark} toggleTheme={toggleTheme} />

      <motion.main
        id="main-content"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.3 }}
      >
        {children}
      </motion.main>

      <Footer />
    </div>
  );
}

export default Layout;
