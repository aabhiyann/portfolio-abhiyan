import React from "react";
import { motion } from "framer-motion";

const skills = [
  "Python",
  "React",
  "TypeScript",
  "PyTorch",
  "Next.js",
  "AWS",
  "Docker",
  "PostgreSQL",
  "FastAPI",
  "Node.js",
  "Tailwind",
  "Git",
  "C++",
  "Java",
  "Scikit-learn",
  "TensorFlow",
];

const duplicatedSkills = [...skills, ...skills, ...skills]; // Triple for smoother loop

const SkillsSlider: React.FC = () => {
  return (
    <div className="w-full py-10 border-y border-border-primary/30 bg-bg-primary overflow-hidden relative group">
      {/* Gradient Masks */}
      <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-bg-primary via-bg-primary/80 to-transparent z-10 pointer-events-none"></div>
      <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-bg-primary via-bg-primary/80 to-transparent z-10 pointer-events-none"></div>

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
              <span className="text-xl md:text-2xl font-bold font-heading text-text-muted/30 grayscale transition-all duration-300 group-hover/skill:text-text-primary group-hover/skill:grayscale-0 group-hover/skill:opacity-100 group-hover/skill:scale-110">
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
