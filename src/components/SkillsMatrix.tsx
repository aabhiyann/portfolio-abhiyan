import React from "react";

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

  return (
    <div className="w-full max-w-7xl mx-auto py-12">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {categories.map((category) => (
          <div key={category} className="space-y-4">
            <h3 className="text-xl font-bold text-accent-primary border-b border-border-primary pb-2 mb-4">
              {category}
            </h3>
            <div className="space-y-4">
              {skills
                .filter((s) => s.category === category)
                .map((skill) => (
                  <div
                    key={skill.name}
                    className="border-b border-border-primary/60 pb-4 last:border-b-0 last:pb-0"
                  >
                    <div className="flex flex-col gap-1 md:flex-row md:items-start md:justify-between">
                      <span className="font-semibold text-text-primary shrink-0">
                        {skill.name}
                      </span>
                      <p className="text-sm text-text-muted leading-relaxed md:max-w-[65%] md:text-right">
                        {skill.description}
                      </p>
                    </div>
                  </div>
                ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SkillsMatrix;
