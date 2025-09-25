import React, { useState, useEffect } from "react";
import { motion } from "framer-motion"; // eslint-disable-line no-unused-vars
import { Link } from "react-router-dom";
import { colorUtils } from "../design/colors";
import Navbar from "./Navbar";
import Footer from "./Footer";
import SkipLink from "./SkipLink";

function Layout({ children }) {
  const [isDark, setIsDark] = useState(false);
  const [currentTheme, setCurrentTheme] = useState('default');

  // Load theme preference from localStorage on mount
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    const savedColorTheme = localStorage.getItem("colorTheme");
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;

    if (savedTheme === "dark" || (!savedTheme && prefersDark)) {
      setIsDark(true);
      document.documentElement.classList.add("dark");
    }

    if (savedColorTheme) {
      setCurrentTheme(savedColorTheme);
      document.documentElement.className = document.documentElement.className
        .replace(/theme-\w+/g, '')
        .trim();
      document.documentElement.classList.add(`theme-${savedColorTheme}`);
    }
  }, []);

  // Toggle dark/light mode
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

  // Switch color theme
  const switchColorTheme = (theme) => {
    setCurrentTheme(theme);
    localStorage.setItem("colorTheme", theme);
    
    // Remove existing theme classes
    document.documentElement.className = document.documentElement.className
      .replace(/theme-\w+/g, '')
      .trim();
    
    // Add new theme class
    if (theme !== 'default') {
      document.documentElement.classList.add(`theme-${theme}`);
    }
  };

  return (
    <div
      className={`min-h-screen transition-colors ${isDark ? "dark" : ""}`}
      style={{
        backgroundColor: colorUtils.getThemeColor('background', isDark, currentTheme),
        color: colorUtils.getThemeColor('text', isDark, currentTheme),
      }}
    >
      <SkipLink />
      <Navbar 
        isDark={isDark} 
        toggleTheme={toggleTheme}
        currentTheme={currentTheme}
        switchColorTheme={switchColorTheme}
      />

      <motion.main
        id="main-content"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.3 }}
      >
        {React.cloneElement(children, { isDark, currentTheme })}
      </motion.main>

      <Footer />
    </div>
  );
}

export default Layout;
