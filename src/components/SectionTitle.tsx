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
      <motion.div
        className="absolute -bottom-2 left-1/2 w-24 h-1 bg-accent-primary"
        style={{ x: "-50%" }}
        initial={{ width: 0 }}
        whileInView={{ width: "6rem" }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, delay: 0.3, ease: "easeInOut" }}
      />
    </motion.div>
  );
};

export default SectionTitle;
