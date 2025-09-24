import { motion } from "framer-motion"; // eslint-disable-line no-unused-vars

export const Section = ({
  title,
  children,
  kicker,
  className = "",
}) => (
  <section className={`py-24 ${className}`}>
    <div className="max-w-7xl mx-auto px-6 md:px-8">
      {kicker && (
        <p className="uppercase tracking-widest text-xs text-muted-light dark:text-muted-dark">
          {kicker}
        </p>
      )}
      <motion.h2
        className="mt-2 text-4xl md:text-5xl font-bold tracking-tight font-heading text-text-light dark:text-text-dark"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        {title}
      </motion.h2>
      <div className="mt-10">{children}</div>
    </div>
  </section>
);
