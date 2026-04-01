import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface Skill {
  name: string;
  category: "Languages" | "Frameworks" | "Tools" | "AI/ML";
  description: string;
}

const skills: Skill[] = [
  // Languages
  {
    name: "Python",
    category: "Languages",
    description: "Built custom RAG pipelines and finetuned Llama-2 models.",
  },
  {
    name: "TypeScript",
    category: "Languages",
    description:
      "Refactored legacy JS codebase to TS, reducing runtime errors by 40%.",
  },
  {
    name: "C++",
    category: "Languages",
    description:
      "Used in CSCI 6212 curriculum design and algorithm problem sets at GWU.",
  },
  {
    name: "Java",
    category: "Languages",
    description:
      "Used in distributed systems and concurrent programming coursework at GWU.",
  },
  // Frameworks
  {
    name: "React & Next.js",
    category: "Frameworks",
    description:
      "TalkifyDocs (Next.js, SSR), InfraSight dashboard (React, Chart.js), this portfolio.",
  },
  {
    name: "Node.js",
    category: "Frameworks",
    description:
      "MelodyHub backend: Socket.IO server supporting 100+ concurrent users with <100ms sync latency.",
  },
  {
    name: "FastAPI",
    category: "Frameworks",
    description: "Created async Python APIs for ML model serving.",
  },
  {
    name: "Tailwind CSS",
    category: "Frameworks",
    description: "Rapidly prototyped responsive, theme-aware design systems.",
  },
  // AI/ML
  {
    name: "PyTorch",
    category: "AI/ML",
    description:
      "Implemented custom loss functions for medical image segmentation.",
  },
  {
    name: "LangChain",
    category: "AI/ML",
    description: "Orchestrated complex RAG workflows with multi-agent systems.",
  },
  {
    name: "TensorFlow",
    category: "AI/ML",
    description: "Built and deployed CNNs for audio classification.",
  },
  {
    name: "RAG & LLMs",
    category: "AI/ML",
    description: "Engineered context-aware document retrieval systems.",
  },
  // Tools
  {
    name: "AWS & Cloud",
    category: "Tools",
    description:
      "Managed EC2, S3, and Lambda resources for cost-effective scaling.",
  },
  {
    name: "Docker",
    category: "Tools",
    description:
      "Containerized multi-service architectures for consistent dev/prod parity.",
  },
  {
    name: "PostgreSQL",
    category: "Tools",
    description:
      "InfraSight (cost data storage) and TalkifyDocs (user/document records) via Neon serverless.",
  },
  {
    name: "Git & CI/CD",
    category: "Tools",
    description:
      "Automated testing and deployment pipelines via GitHub Actions.",
  },
];

const SkillsMatrix: React.FC = () => {
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
                <div className="space-y-4">
                  {skills
                    .filter((s) => s.category === category)
                    .map((skill) => (
                      <motion.div
                        key={skill.name}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="border-b border-border-primary/60 pb-4 last:border-b-0 last:pb-0"
                      >
                        <div className="flex flex-col gap-2 md:flex-row md:items-start md:justify-between">
                          <span className="font-semibold text-text-primary">
                            {skill.name}
                          </span>
                          <p className="text-sm text-text-muted leading-relaxed md:max-w-[70%]">
                            {skill.description}
                          </p>
                        </div>
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
