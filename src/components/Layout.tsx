import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Navbar from "./Navbar";
import Footer from "./Footer";
import SkipLink from "./SkipLink";
import AIChatbot from "./AIChatbot";
import FloatingActionButton from "./FloatingActionButton";
import CustomCursor from "./CustomCursor";
import LivingBackground from "./LivingBackground";
import ScrollProgressBar from "./ScrollProgressBar";

interface LayoutProps {
  children: React.ReactNode;
}

function Layout({ children }: LayoutProps) {
  const [isChatbotOpen, setChatbotOpen] = useState(false);

  useEffect(() => {
    const originalTitle = "Abhiyan Sainju | Full Stack & AI Engineer"; // Store a consistent original title

    const handleVisibilityChange = () => {
      if (document.hidden) {
        document.title = "👀 Come back to the code!";
      } else {
        // On returning, restore the title from the Helmet component, or the original.
        // Helmet will win if the component re-renders, which is what we want.
        setTimeout(() => {
          document.title =
            document.querySelector("title")?.innerText || originalTitle;
        }, 100);
      }
    };

    document.addEventListener("visibilitychange", handleVisibilityChange);
    return () =>
      document.removeEventListener("visibilitychange", handleVisibilityChange);
  }, []);

  return (
    <div className="min-h-screen relative bg-bg-primary text-text-primary">
      <LivingBackground />
      <ScrollProgressBar />
      <CustomCursor />
      <SkipLink />
      <div className="relative z-10">
        <Navbar />

        <motion.main id="content" className="relative z-10">
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
