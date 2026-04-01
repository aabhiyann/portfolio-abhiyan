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
    proficiency: 98,
    description: "Built custom RAG pipelines and finetuned Llama-2 models.",
  },
  {
    name: "TypeScript",
    category: "Languages",
    proficiency: 95,
    description:
      "Refactored legacy JS codebase to TS, reducing runtime errors by 40%.",
  },
  {
    name: "C++",
    category: "Languages",
    proficiency: 85,
    description:
      "Implemented high-performance algorithms for system optimization.",
  },
  {
    name: "Java",
    category: "Languages",
    proficiency: 90,
    description:
      "Architected distributed backend systems for high-throughput data processing.",
  },
  // Frameworks
  {
    name: "React & Next.js",
    category: "Frameworks",
    proficiency: 95,
    description:
      "Built SEO-optimized SaaS platforms with SSR and dynamic routing.",
  },
  {
    name: "Node.js",
    category: "Frameworks",
    proficiency: 92,
    description:
      "Developed scalable real-time microservices handling 10k+ requests/m.",
  },
  {
    name: "FastAPI",
    category: "Frameworks",
    proficiency: 90,
    description: "Created async Python APIs for ML model serving.",
  },
  {
    name: "Tailwind CSS",
    category: "Frameworks",
    proficiency: 98,
    description: "Rapidly prototyped responsive, theme-aware design systems.",
  },
  // AI/ML
  {
    name: "PyTorch",
    category: "AI/ML",
    proficiency: 90,
    description:
      "Implemented custom loss functions for medical image segmentation.",
  },
  {
    name: "LangChain",
    category: "AI/ML",
    proficiency: 95,
    description: "Orchestrated complex RAG workflows with multi-agent systems.",
  },
  {
    name: "TensorFlow",
    category: "AI/ML",
    proficiency: 85,
    description: "Built and deployed CNNs for audio classification.",
  },
  {
    name: "RAG & LLMs",
    category: "AI/ML",
    proficiency: 92,
    description: "Engineered context-aware document retrieval systems.",
  },
  // Tools
  {
    name: "AWS & Cloud",
    category: "Tools",
    proficiency: 88,
    description:
      "Managed EC2, S3, and Lambda resources for cost-effective scaling.",
  },
  {
    name: "Docker",
    category: "Tools",
    proficiency: 90,
    description:
      "Containerized multi-service architectures for consistent dev/prod parity.",
  },
  {
    name: "PostgreSQL",
    category: "Tools",
    proficiency: 92,
    description: "Optimized complex SQL queries for sub-millisecond latency.",
  },
  {
    name: "Git & CI/CD",
    category: "Tools",
    proficiency: 95,
    description:
      "Automated testing and deployment pipelines via GitHub Actions.",
  },
];

const SkillsMatrix: React.FC = () => {
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null);

  const categories = Array.from(new Set(skills.map((s) => s.category)));

  const [openCategory, setOpenCategory] = useState<string | null>(
    categories[0],
  ); // Accordion state

  const toggleCategory = (category: string) => {
    setOpenCategory(openCategory === category ? null : category);
  };

  return (
    <div className="w-full max-w-5xl mx-auto py-12">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {categories.map((category) => (
          <div key={category} className="space-y-4">
            {/* Mobile Accordion Header */}
            <div
              className="md:hidden flex justify-between items-center py-2 border-b border-border-primary cursor-pointer"
              onClick={() => toggleCategory(category)}
            >
              <h3 className="text-xl font-bold text-accent-primary">
                {category}
              </h3>
              <span className="text-text-muted text-2xl">
                {openCategory === category ? "−" : "+"}
              </span>
            </div>

            {/* Desktop Header */}
            <h3 className="hidden md:block text-xl font-bold text-accent-primary border-b border-border-primary pb-2 mb-4">
              {category}
            </h3>

            {/* Skills Grid - Collapsible on Mobile */}
            <AnimatePresence>
              {/* Show if desktop OR if mobile category is open */}
              {/* Note: We use a simple CSS class for desktop visibility and Framer Motion for mobile toggle */}
              <div
                className={`${
                  openCategory === category ? "block" : "hidden"
                } md:block`}
              >
                <div className="grid grid-cols-2 gap-4">
                  {skills
                    .filter((s) => s.category === category)
                    .map((skill) => (
                      <motion.div
                        key={skill.name}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="relative bg-bg-surface border border-border-primary/50 p-4 rounded-lg cursor-default group"
                        onMouseEnter={() => setHoveredSkill(skill.name)}
                        onMouseLeave={() => setHoveredSkill(null)}
                        whileHover={{
                          scale: 1.02,
                          borderColor: "var(--accent-primary)",
                        }}
                      >
                        {/* Skill Name */}
                        <div className="flex items-center justify-center">
                          <span className="font-semibold text-text-primary text-center">
                            {skill.name}
                          </span>
                        </div>

                        {/* Hover Tooltip - "Skill in Action" */}
                        <AnimatePresence>
                          {hoveredSkill === skill.name && (
                            <motion.div
                              initial={{ opacity: 0, y: 10, scale: 0.95 }}
                              animate={{ opacity: 1, y: 0, scale: 1 }}
                              exit={{ opacity: 0, y: 10, scale: 0.95 }}
                              transition={{ duration: 0.2 }}
                              className="absolute inset-0 z-10 btn-primary p-4 rounded-lg flex items-center justify-center text-center shadow-xl backdrop-blur-sm"
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
            </AnimatePresence>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SkillsMatrix;
