import React from "react";
import { motion } from "framer-motion";
import { useTheme } from "../contexts/ThemeContext";
import Navbar from "./Navbar";
import Footer from "./Footer";
import SkipLink from "./SkipLink";

function Layout({ children }) {
  const { themeState, toggleTheme, setCurrentTheme } = useTheme();

  return (
    <div className="min-h-screen bg-light-bg text-light-text transition-theme">
      <SkipLink />
      <Navbar 
        isDark={themeState.isDarkMode} 
        toggleTheme={toggleTheme} 
        currentTheme={themeState.currentTheme} 
        switchColorTheme={setCurrentTheme} 
      />

      <motion.main
        id="content"
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