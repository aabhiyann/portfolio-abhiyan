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
      className="grid grid-cols-1 md:grid-cols-[200px,1fr] gap-6 md:gap-10 pb-12 last:pb-0"
    >
      <div className="md:pt-1">
        <span className="inline-flex text-sm font-mono text-accent-primary bg-accent-primary/10 px-3 py-1.5 rounded-full w-fit">
          {year}
        </span>
        <p className="text-text-muted mt-3 text-sm uppercase tracking-[0.18em]">
          {location}
        </p>
      </div>

      <div className="relative border-l border-border-primary pl-8">
        <div className="absolute left-[-6px] top-2 h-3 w-3 rounded-full bg-accent-primary ring-4 ring-bg-primary" />
        <h3 className="text-xl font-bold text-text-primary mb-3">{title}</h3>
        <p className="text-text-muted/80 leading-relaxed max-w-2xl mb-4">
          {description}
        </p>
        {achievements && achievements.length > 0 && (
          <ul className="space-y-3 text-text-muted/80 text-sm">
            {achievements.map((achievement, i) => (
              <li key={i} className="flex items-start gap-3">
                <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-accent-primary/70" />
                <span>{achievement}</span>
              </li>
            ))}
          </ul>
        )}
      </div>
    </motion.div>
  );
};

interface VisualTimelineProps {
  items: Omit<TimelineItemProps, "index">[];
}

const VisualTimeline: React.FC<VisualTimelineProps> = ({ items }) => {
  return (
    <div className="max-w-6xl mx-auto py-12">
      {items.map((item, index) => (
        <TimelineItem key={index} {...item} index={index} />
      ))}
    </div>
  );
};

export default VisualTimeline;
