import React from "react";

interface Skill {
  name: string;
  category: "Languages" | "Frameworks" | "Tools" | "AI/ML";
  description: string;
}

const skills: Skill[] = [
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
    description: "InfraSight and TalkifyDocs via Neon serverless PostgreSQL.",
  },
  {
    name: "Git & CI/CD",
    category: "Tools",
    description:
      "Automated testing and deployment pipelines via GitHub Actions.",
  },
];

const categories = ["Languages", "Frameworks", "AI/ML", "Tools"] as const;

const SkillsMatrix: React.FC = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-12">
      {categories.map((category) => (
        <div key={category}>
          <div className="inline-flex items-center gap-3 mb-5">
            <span className="h-px w-6 bg-accent-primary/60" />
            <span className="text-xs font-mono uppercase tracking-[0.3em] text-accent-primary">
              {category}
            </span>
          </div>
          <div>
            {skills
              .filter((s) => s.category === category)
              .map((skill, i, arr) => (
                <div
                  key={skill.name}
                  className={`py-4 ${i < arr.length - 1 ? "border-b border-border-primary/40" : ""}`}
                >
                  <p className="text-sm font-semibold text-text-primary mb-1">
                    {skill.name}
                  </p>
                  <p className="text-sm text-text-muted leading-relaxed">
                    {skill.description}
                  </p>
                </div>
              ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default SkillsMatrix;
