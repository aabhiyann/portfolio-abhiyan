import React from "react";
import { motion } from "framer-motion";

const skills = [
  // Languages
  "Python",
  "TypeScript",
  "JavaScript",
  "Java",
  "C++",
  // Frontend
  "React",
  "Next.js",
  "Tailwind",
  // Backend
  "Node.js",
  "FastAPI",
  // Databases
  "PostgreSQL",
  "MongoDB",
  "Elasticsearch",
  // AI/ML
  "PyTorch",
  "TensorFlow",
  "Keras",
  "Scikit-learn",
  "LangChain",
  "GPT-4",
  "NLP",
  // Cloud & DevOps
  "AWS",
  "Docker",
  // Tools & Libraries
  "Git",
  "Socket.IO",
  "Pinecone",
  "Pandas",
  "librosa",
  "YAMNet",
  "AsyncPG",
  // Services
  "Stripe",
  "Clerk",
];

const duplicatedSkills = [...skills, ...skills, ...skills]; // Triple for smoother loop

const SkillsSlider: React.FC = () => {
  return (
    <div className="w-full py-12 border-y border-border-primary/30 bg-bg-primary overflow-hidden relative group">
      {/* Gradient Masks */}
      <div className="absolute inset-y-0 left-0 w-24 gradient-from-bg-primary-via z-10 pointer-events-none"></div>
      <div className="absolute inset-y-0 right-0 w-24 gradient-to-bg-primary-via z-10 pointer-events-none"></div>

      <div className="flex">
        <motion.div
          className="flex gap-16 whitespace-nowrap"
          animate={{ x: [0, -1000] }} // Adjust value based on width estimation
          transition={{
            x: {
              repeat: Infinity,
              repeatType: "loop",
              duration: 40,
              ease: "linear",
            },
          }}
        >
          {duplicatedSkills.map((skill, index) => (
            <div
              key={index}
              className="relative flex items-center justify-center group/skill cursor-default"
            >
              <span className="text-xl md:text-2xl font-bold font-heading text-text-muted/60 grayscale transition-all duration-300 group-hover/skill:text-text-primary group-hover/skill:grayscale-0 group-hover/skill:opacity-100 group-hover/skill:scale-110">
                {skill}
              </span>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default SkillsSlider;
