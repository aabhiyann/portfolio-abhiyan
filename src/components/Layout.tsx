import React from "react";
import { motion } from "framer-motion";
import Navbar from "./Navbar";
import Footer from "./Footer";
import SkipLink from "./SkipLink";
import CustomCursor from "./CustomCursor";
import ScrollProgressBar from "./ScrollProgressBar";
import StructuredData from "./StructuredData";

interface LayoutProps {
  children: React.ReactNode;
}

/**
 * Main layout container.
 * Now uses Zustand for global state management instead of local useState.
 */
function Layout({ children }: LayoutProps) {
  return (
    <div className="min-h-screen relative bg-bg-primary text-text-primary">
      <StructuredData />
      <ScrollProgressBar />
      <CustomCursor />
      <SkipLink />
      <div className="relative z-10">
        <Navbar />

        <motion.main id="content" className="relative z-10">
          {children}
        </motion.main>

        <footer>
          <Footer />
        </footer>
      </div>
    </div>
  );
}

export default Layout;
