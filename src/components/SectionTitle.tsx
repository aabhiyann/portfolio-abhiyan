import React from "react";
import { motion } from "framer-motion";

interface SectionTitleProps {
  title: string;
  subtitle?: string;
}

const SectionTitle: React.FC<SectionTitleProps> = ({ title, subtitle }) => {
  return (
    <motion.div
      className="relative w-full text-center mb-16"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold tracking-tight text-text-primary">
        {title}
      </h2>
      {subtitle && (
        <p className="text-base sm:text-lg text-text-muted max-w-3xl mx-auto mt-4">
          {subtitle}
        </p>
      )}
    </motion.div>
  );
};

export default SectionTitle;
