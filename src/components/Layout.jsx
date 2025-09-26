import React from "react";
import { motion } from "framer-motion"; // eslint-disable-line no-unused-vars
import { useTheme } from "../contexts/ThemeContext";
import Navbar from "./Navbar";
import Footer from "./Footer";
import SkipLink from "./SkipLink";

function Layout({ children }) {
  const { themeState, toggleTheme, setCurrentTheme } = useTheme();

  return (
    <div className="min-h-screen bg-bg-primary text-text-primary transition-theme">
      <SkipLink />
      <Navbar
        isDark={themeState.isDarkMode}
        toggleTheme={toggleTheme}
        currentTheme={themeState.currentTheme}
        switchColorTheme={setCurrentTheme}
      />

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
