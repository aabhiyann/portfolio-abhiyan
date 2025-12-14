import React from "react";
import { motion } from "framer-motion";

interface TimelineItemProps {
  year: string;
  title: string;
  description: string;
  location: string;
  achievements?: string[]; // Added optional achievements
  index: number;
}

const TimelineItem: React.FC<TimelineItemProps> = ({
  year,
  title,
  description,
  location,
  achievements,
  index,
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="relative pl-8 pb-12 border-l border-border-primary last:pb-0"
    >
      <div className="absolute left-[-5px] top-2 h-2.5 w-2.5 rounded-full bg-accent-primary ring-4 ring-bg-primary" />
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
        <h3 className="text-xl font-bold text-text-primary">{title}</h3>
        <span className="text-sm font-mono text-accent-primary bg-accent-primary/10 px-2 py-1 rounded-md mt-1 sm:mt-0 w-fit">
          {year}
        </span>
      </div>
      <p className="text-text-muted mb-2 text-sm uppercase tracking-wider">
        {location}
      </p>
      <p className="text-text-muted/80 leading-relaxed max-w-2xl mb-4">
        {description}
      </p>
      {achievements && achievements.length > 0 && (
        <ul className="list-disc pl-5 space-y-2 text-text-muted/80 text-sm">
          {achievements.map((achievement, i) => (
            <li key={i}>{achievement}</li>
          ))}
        </ul>
      )}
    </motion.div>
  );
};

interface VisualTimelineProps {
  items: Omit<TimelineItemProps, "index">[];
}

const VisualTimeline: React.FC<VisualTimelineProps> = ({ items }) => {
  return (
    <div className="max-w-3xl mx-auto py-12">
      {items.map((item, index) => (
        <TimelineItem key={index} {...item} index={index} />
      ))}
    </div>
  );
};

export default VisualTimeline;
