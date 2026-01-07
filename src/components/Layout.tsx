import React, { useState } from "react";
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

interface LayoutProps {
  children: React.ReactNode;
}

function Layout({ children }: LayoutProps) {
  const [isChatbotOpen, setChatbotOpen] = useState(false);

  return (
    <div className="min-h-screen relative bg-bg-primary text-text-primary">
      <StructuredData />
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
