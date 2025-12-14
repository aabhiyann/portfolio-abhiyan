import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const ReadingProgress: React.FC = () => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const updateProgress = () => {
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
      const scrollTop = window.scrollY || document.documentElement.scrollTop;

      const scrollableHeight = documentHeight - windowHeight;
      const progressPercent =
        scrollableHeight > 0 ? (scrollTop / scrollableHeight) * 100 : 0;

      setProgress(Math.min(100, Math.max(0, progressPercent)));
    };

    window.addEventListener("scroll", updateProgress);
    updateProgress(); // Initial calculation

    return () => window.removeEventListener("scroll", updateProgress);
  }, []);

  return (
    <div className="fixed top-0 left-0 right-0 h-1 bg-bg-surface/20 z-50">
      <motion.div
        className="h-full bg-gradient-to-r from-accent-primary to-accent-secondary"
        style={{ width: `${progress}%` }}
        initial={{ width: 0 }}
        animate={{ width: `${progress}%` }}
        transition={{ duration: 0.1, ease: "linear" }}
      />
    </div>
  );
};

export default ReadingProgress;
