import React from "react";
import { motion } from "framer-motion";
import { Code, Github, Award, Layers } from "lucide-react";
import { useCountUp } from "../hooks/useCountUp";

export const HeroStats = () => {
  // Count-up animations for stats
  const projectsCount = useCountUp({ end: 8, duration: 1500, suffix: "+" });
  const githubCount = useCountUp({ end: 2243, duration: 2000 });
  const certCount = useCountUp({ end: 2, duration: 1200 });
  const techCount = useCountUp({ end: 15, duration: 1800, suffix: "+" });

  const stats = [
    {
      icon: <Code className="w-7 h-7 stroke-[2.5]" />,
      value: projectsCount.displayValue,
      label: "Projects Shipped",
      countRef: projectsCount.ref,
    },
    {
      icon: <Github className="w-7 h-7 stroke-[2.5]" />,
      value: githubCount.displayValue,
      label: "GitHub Contributions",
      countRef: githubCount.ref,
    },
    {
      icon: <Award className="w-7 h-7 stroke-[2.5]" />,
      value: certCount.displayValue,
      label: "AWS Certifications",
      countRef: certCount.ref,
    },
    {
      icon: <Layers className="w-7 h-7 stroke-[2.5]" />,
      value: techCount.displayValue,
      label: "Technologies",
      countRef: techCount.ref,
    },
  ];

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-12">
      {stats.map((stat, index) => (
        <motion.div
          key={stat.label}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
          className="bg-card p-6 rounded-xl border border-border-primary text-center group cursor-default"
        >
          {/* Icon with gradient background - unified accent-primary color */}
          <motion.div
            className="w-14 h-14 mx-auto mb-3 rounded-full flex items-center justify-center bg-gradient-to-br from-accent-primary/20 to-accent-primary/10 text-accent-primary backdrop-blur-sm"
            whileHover={{ rotate: 5, scale: 1.1 }}
            transition={{ duration: 0.3 }}
          >
            {stat.icon}
          </motion.div>

          {/* Value */}
          <div
            ref={stat.countRef}
            className="text-2xl font-bold text-text-primary font-mono"
          >
            {stat.value}
          </div>

          {/* Label */}
          <div className="text-xs text-text-muted mt-1">{stat.label}</div>
        </motion.div>
      ))}
    </div>
  );
};
