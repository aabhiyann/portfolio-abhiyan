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
      color: "blue",
      countRef: projectsCount.ref,
    },
    {
      icon: <Github className="w-7 h-7 stroke-[2.5]" />,
      value: githubCount.displayValue,
      label: "GitHub Contributions",
      color: "purple",
      countRef: githubCount.ref,
    },
    {
      icon: <Award className="w-7 h-7 stroke-[2.5]" />,
      value: certCount.displayValue,
      label: "AWS Certifications",
      color: "green",
      countRef: certCount.ref,
    },
    {
      icon: <Layers className="w-7 h-7 stroke-[2.5]" />,
      value: techCount.displayValue,
      label: "Technologies",
      color: "orange",
      countRef: techCount.ref,
    },
  ];

  const colorClasses = {
    blue: "text-blue-500",
    purple: "text-purple-500",
    green: "text-green-500",
    orange: "text-orange-500",
  };

  const gradientBgs = {
    blue: "bg-gradient-to-br from-blue-500/20 to-blue-600/10",
    purple: "bg-gradient-to-br from-purple-500/20 to-purple-600/10",
    green: "bg-gradient-to-br from-green-500/20 to-green-600/10",
    orange: "bg-gradient-to-br from-orange-500/20 to-orange-600/10",
  };

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-12">
      {stats.map((stat, index) => (
        <motion.div
          key={stat.label}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
          whileHover={{ scale: 1.05, y: -5 }}
          className="glass-card p-6 rounded-xl border border-border-primary text-center group cursor-default"
        >
          {/* Icon with gradient background */}
          <motion.div
            className={`w-14 h-14 mx-auto mb-3 rounded-full flex items-center justify-center ${
              gradientBgs[stat.color as keyof typeof gradientBgs]
            } ${
              colorClasses[stat.color as keyof typeof colorClasses]
            } backdrop-blur-sm`}
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
