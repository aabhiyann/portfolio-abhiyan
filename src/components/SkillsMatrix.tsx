import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface Skill {
  name: string;
  category: "Languages" | "Frameworks" | "Tools" | "AI/ML";
  proficiency: number; // 1-100
  icon?: string; // URL or simplified component logic
  description: string; // The "Skill in Action" text
}

const skills: Skill[] = [
  // Languages
  {
    name: "Python",
    category: "Languages",
    proficiency: 95,
    description: "Built custom RAG pipelines and finetuned Llama-2 models.",
  },
  {
    name: "TypeScript",
    category: "Languages",
    proficiency: 90,
    description:
      "Refactored legacy JS codebase to TS, reducing runtime errors by 40%.",
  },
  {
    name: "Java",
    category: "Languages",
    proficiency: 85,
    description:
      "Architected distributed backend systems for high-throughput data processing.",
  },
  // Frameworks
  {
    name: "React",
    category: "Frameworks",
    proficiency: 92,
    description:
      "Developed complex visualization dashboards for fintech analytics.",
  },
  {
    name: "FastAPI",
    category: "Frameworks",
    proficiency: 88,
    description: "Created async microservices handling 10k+ requests/minute.",
  },
  {
    name: "Next.js",
    category: "Frameworks",
    proficiency: 90,
    description: "Implemented SSR/ISR for SEO-optimized content delivery.",
  },
  {
    name: "PyTorch",
    category: "AI/ML",
    proficiency: 85,
    description:
      "Implemented custom loss functions for medical image segmentation.",
  },
  // Tools
  {
    name: "Docker",
    category: "Tools",
    proficiency: 85,
    description:
      "Containerized multi-service architectures for consistent dev/prod parity.",
  },
  {
    name: "AWS",
    category: "Tools",
    proficiency: 80,
    description:
      "Managed EC2, S3, and Lambda resources for cost-effective scaling.",
  },
  {
    name: "Git",
    category: "Tools",
    proficiency: 95,
    description:
      "Managed complex branching strategies for widespread team collaboration.",
  },
];

const SkillsMatrix: React.FC = () => {
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null);

  const categories = Array.from(new Set(skills.map((s) => s.category)));

  return (
    <div className="w-full max-w-5xl mx-auto py-12">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {categories.map((category) => (
          <div key={category} className="space-y-4">
            <h3 className="text-xl font-bold text-accent-primary border-b border-border-primary pb-2 mb-4">
              {category}
            </h3>
            <div className="grid grid-cols-2 gap-4">
              {skills
                .filter((s) => s.category === category)
                .map((skill) => (
                  <motion.div
                    key={skill.name}
                    className="relative bg-card border border-border-primary p-4 rounded-lg cursor-default group"
                    onMouseEnter={() => setHoveredSkill(skill.name)}
                    onMouseLeave={() => setHoveredSkill(null)}
                    whileHover={{
                      scale: 1.02,
                      borderColor: "var(--accent-primary)",
                    }}
                  >
                    <div className="flex justify-between items-center mb-2">
                      <span className="font-semibold text-text-primary">
                        {skill.name}
                      </span>
                      <span className="text-xs text-text-muted font-mono">
                        {skill.proficiency}%
                      </span>
                    </div>

                    {/* Progress Bar */}
                    <div className="h-1.5 w-full bg-surface rounded-full overflow-hidden">
                      <motion.div
                        className="h-full bg-gradient-to-r from-accent-primary to-accent-secondary"
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.proficiency}%` }}
                        transition={{ duration: 1, ease: "easeOut" }}
                      />
                    </div>

                    {/* Hover Tooltip - "Skill in Action" */}
                    <AnimatePresence>
                      {hoveredSkill === skill.name && (
                        <motion.div
                          initial={{ opacity: 0, y: 10, scale: 0.95 }}
                          animate={{ opacity: 1, y: 0, scale: 1 }}
                          exit={{ opacity: 0, y: 10, scale: 0.95 }}
                          transition={{ duration: 0.2 }}
                          className="absolute inset-0 z-10 bg-accent-primary/95 text-white p-4 rounded-lg flex items-center justify-center text-center shadow-xl backdrop-blur-sm"
                        >
                          <p className="text-sm font-medium leading-tight">
                            "{skill.description}"
                          </p>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.div>
                ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SkillsMatrix;
