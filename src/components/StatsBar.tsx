import React from "react";
import { motion } from "framer-motion";

interface StatItemProps {
  value: string;
  label: string;
  delay?: number;
}

const StatItem: React.FC<StatItemProps> = ({ value, label, delay = 0 }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5, delay }}
    className="flex flex-col items-center justify-center p-4"
  >
    <div className="text-3xl md:text-4xl font-bold gradient-text-br font-heading mb-1">
      {value}
    </div>
    <div className="text-sm font-medium text-text-muted uppercase tracking-wider">
      {label}
    </div>
  </motion.div>
);

const StatsBar: React.FC = () => {
  // Recruiter-focused stats: Clear, quantifiable, impressive
  const stats = [
    { value: "6", label: "Production Projects" },
    { value: "1.2k+", label: "Users Impacted" },
    { value: "60+", label: "Students Mentored" },
    { value: "4.0", label: "GPA @ GWU" },
  ];

  return (
    <div className="w-full bg-bg-surface/30 backdrop-blur-sm border-y border-border-primary/30 py-6">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {stats.map((stat, index) => (
            <div key={index} className="relative">
              {index > 0 && (
                <div className="absolute left-0 top-1/2 -translate-y-1/2 h-8 w-px bg-border-primary/20 hidden md:block" />
              )}
              <StatItem
                value={stat.value}
                label={stat.label}
                delay={index * 0.1}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default StatsBar;
