import React, { useState, useEffect } from "react";

const SkillsSlider: React.FC = () => {
  const [isPaused, setIsPaused] = useState(false);
  const [isVisible, setIsVisible] = useState(true);

  const skills = [
    // Languages
    "Python",
    "Java",
    "C++",
    "TypeScript",
    // AI/ML
    "PyTorch",
    "TensorFlow",
    "RAG Systems",
    "LangChain",
    "Scikit-learn",
    // Web & Cloud
    "React",
    "Next.js",
    "FastAPI",
    "Node.js",
    "AWS",
    "Docker",
    "Kubernetes",
    "PostgreSQL",
    "System Design",
  ];

  // Duplicate skills for seamless infinite scroll
  const duplicatedSkills = [...skills, ...skills];

  useEffect(() => {
    const handleScroll = () => {
      const heroSection = document.getElementById("hero");
      if (heroSection) {
        const heroBottom = heroSection.offsetTop + heroSection.offsetHeight;
        const scrollPosition = window.scrollY + window.innerHeight;

        // Show slider when hero section is visible
        setIsVisible(
          scrollPosition > heroSection.offsetTop && window.scrollY < heroBottom,
        );
      }
    };

    // Check on mount
    handleScroll();

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (!isVisible) return null;

  return (
    <div
      className="fixed bottom-0 left-0 w-full py-12 pointer-events-none"
      style={{
        background: "linear-gradient(to top, rgba(0,0,0,0.95), transparent)",
        zIndex: 5,
      }}
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div className="text-center text-xs text-text-muted mb-8 uppercase tracking-wider font-semibold font-heading">
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
              className="inline-block mx-10 text-sm font-semibold text-text-muted tracking-wide font-heading"
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
