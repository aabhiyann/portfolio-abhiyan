import React, { useState } from "react";
import { motion } from "framer-motion";
import { useTheme } from "../contexts/useTheme";
import Navbar from "./Navbar";
import Footer from "./Footer";
import SkipLink from "./SkipLink";
import AIChatbot from "./AIChatbot";
import FloatingActionButton from "./FloatingActionButton";
import CustomCursor from "./CustomCursor";
import LivingBackground from "./LivingBackground";

function Layout({ children }) {
  const { themeState, toggleTheme, setCurrentTheme } = useTheme();
  const [isChatbotOpen, setChatbotOpen] = useState(false);

  return (
    <div className="min-h-screen relative bg-bg-primary text-text-primary">
      <LivingBackground />
      <CustomCursor />
      <SkipLink />
      <div className="relative z-10">
        <Navbar
          isDark={themeState.isDarkMode}
          toggleTheme={toggleTheme}
          currentTheme={themeState.currentTheme}
          switchColorTheme={setCurrentTheme}
        />

        <motion.main
          id="content"
          className="relative z-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
        >
          {children}
        </motion.main>

        <Footer />
      </div>

      <FloatingActionButton
        onClick={() => setChatbotOpen(!isChatbotOpen)}
        isOpen={isChatbotOpen}
      />
      <AIChatbot isOpen={isChatbotOpen} onClose={() => setChatbotOpen(false)} />
    </div>
  );
}

export default Layout;
