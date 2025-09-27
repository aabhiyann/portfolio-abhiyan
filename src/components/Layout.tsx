import React, { useState } from "react";
import { motion } from "framer-motion"; 
import { useTheme } from "../contexts/useTheme";
import Navbar from "./Navbar";
import Footer from "./Footer";
import SkipLink from "./SkipLink";
import AIChatbot from "./AIChatbot";
import FloatingActionButton from "./FloatingActionButton";

function Layout({ children }) {
  const { themeState, toggleTheme, setCurrentTheme } = useTheme();
  const [isChatbotOpen, setChatbotOpen] = useState(false);

  return (
    <div className="min-h-screen bg-primary text-primary transition-colors duration-300">
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

      <FloatingActionButton 
        onClick={() => setChatbotOpen(!isChatbotOpen)} 
        isOpen={isChatbotOpen} 
      />
      <AIChatbot 
        isOpen={isChatbotOpen} 
        onClose={() => setChatbotOpen(false)} 
      />
    </div>
  );
}

export default Layout;
