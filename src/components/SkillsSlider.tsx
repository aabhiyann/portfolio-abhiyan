import React, { useState } from "react";

const SkillsSlider: React.FC = () => {
  const [isPaused, setIsPaused] = useState(false);

  const skills = [
    "Python",
    "React",
    "Node.js",
    "TypeScript",
    "PostgreSQL",
    "AWS",
    "Docker",
    "FastAPI",
    "Next.js",
    "Machine Learning",
    "scikit-learn",
    "TensorFlow",
    "MongoDB",
    "Framer Motion",
  ];

  // Duplicate skills for seamless infinite scroll
  const duplicatedSkills = [...skills, ...skills];

  return (
    <div
      className="fixed bottom-0 left-0 w-full py-12 pointer-events-none"
      style={{
        background: "linear-gradient(to top, rgba(0,0,0,0.95), transparent)",
        zIndex: 100,
      }}
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div
        className="text-center text-xs text-gray-500 mb-8 uppercase tracking-wider font-semibold"
        style={{ fontFamily: "'Space Grotesk', sans-serif" }}
      >
        Technical Arsenal
      </div>
      <div className="overflow-hidden whitespace-nowrap">
        <div
          className="inline-block"
          style={{
            animation: isPaused ? "none" : "scroll 45s linear infinite",
          }}
        >
          {duplicatedSkills.map((skill, index) => (
            <span
              key={index}
              className="inline-block mx-10 text-sm font-semibold text-gray-500 tracking-wide"
              style={{ fontFamily: "'Space Grotesk', sans-serif" }}
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SkillsSlider;

