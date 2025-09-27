import React from 'react';
import { motion } from 'framer-motion';
import { Typography, TypographyProps } from './ui/Typography';

interface SectionTitleProps extends TypographyProps {
  title: string;
  subtitle?: string;
}

const SectionTitle: React.FC<SectionTitleProps> = ({
  title,
  subtitle,
  ...typographyProps
}) => {
  return (
    <motion.div
      className="relative w-full text-center mb-16"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <Typography variant="h2" {...typographyProps}>
        {title}
      </Typography>
      {subtitle && (
        <Typography variant="body" color="secondary" {...typographyProps} style={{ maxWidth: '48rem', margin: '1rem auto 0' }}>
          {subtitle}
        </Typography>
      )}
      <motion.div
        className="absolute -bottom-2 left-1/2 w-24 h-1 bg-accent-primary"
        style={{ x: '-50%' }}
        initial={{ width: 0 }}
        whileInView={{ width: '6rem' }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, delay: 0.3, ease: 'easeInOut' }}
      />
    </motion.div>
  );
};

export default SectionTitle;
