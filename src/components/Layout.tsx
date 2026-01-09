import React from "react";
import { motion } from "framer-motion";
import Navbar from "./Navbar";
import Footer from "./Footer";
import SkipLink from "./SkipLink";
import AIChatbot from "./AIChatbot";
import FloatingActionButton from "./FloatingActionButton";
import CustomCursor from "./CustomCursor";
import LivingBackground from "./LivingBackground";
import ScrollProgressBar from "./ScrollProgressBar";
import StructuredData from "./StructuredData";
import { useAppStore } from "../store/store";

interface LayoutProps {
  children: React.ReactNode;
}

/**
 * Main layout container.
 * Now uses Zustand for global state management instead of local useState.
 */
function Layout({ children }: LayoutProps) {
  // Use individual selectors to avoid creating new objects on each render
  const isChatbotOpen = useAppStore((state) => state.isChatbotOpen);
  const toggleChatbot = useAppStore((state) => state.toggleChatbot);
  const closeChatbot = useAppStore((state) => state.closeChatbot);

  return (
    <div className="min-h-screen relative bg-bg-primary text-text-primary">
      <StructuredData />
      <LivingBackground />
      <ScrollProgressBar />
      <CustomCursor />
      <SkipLink />
      <div className="relative z-10">
        <header>
          <Navbar />
        </header>

        <motion.main id="content" className="relative z-10">
          {children}
        </motion.main>

        <footer>
          <Footer />
        </footer>
      </div>

      <FloatingActionButton onClick={toggleChatbot} isOpen={isChatbotOpen} />
      <AIChatbot isOpen={isChatbotOpen} onClose={closeChatbot} />
    </div>
  );
}

export default Layout;
