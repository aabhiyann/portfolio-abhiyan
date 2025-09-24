import "./App.css";
import "./components/ui/buttons.css";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { motionTokens } from "./utils/motion";
import PhotographyGallery from "./components/PhotographyGallery";

function Navbar({ isDark, toggleTheme }) {
  return (
    <header className="sticky top-0 z-50 border-b border-black/5 dark:border-white/10 bg-surface-light/80 dark:bg-surface-dark/80 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-6 md:px-8 h-16 flex items-center justify-between">
        <a
          href="#hero"
          className="font-semibold font-heading text-text-light dark:text-text-dark"
        >
          AS
        </a>
        <nav className="hidden md:flex gap-6">
          <a
            href="#projects"
            className="text-sm md:text-base font-medium hover:text-accent focus:outline-none focus-visible:outline-2 focus-visible:outline-violet-600 transition-colors"
          >
            Projects
          </a>
          <a
            href="#photography"
            className="text-sm md:text-base font-medium hover:text-accent focus:outline-none focus-visible:outline-2 focus-visible:outline-violet-600 transition-colors"
          >
            Photography
          </a>
          <a
            href="#deep-dives"
            className="text-sm md:text-base font-medium hover:text-accent focus:outline-none focus-visible:outline-2 focus-visible:outline-violet-600 transition-colors"
          >
            Deep Dives
          </a>
          <a
            href="#about"
            className="text-sm md:text-base font-medium hover:text-accent focus:outline-none focus-visible:outline-2 focus-visible:outline-violet-600 transition-colors"
          >
            About
          </a>
        </nav>
        <button
          onClick={toggleTheme}
          className="p-2 rounded-lg bg-black/5 dark:bg-white/10 hover:bg-black/10 dark:hover:bg-white/20 transition-colors"
          aria-label="Toggle theme"
        >
          {isDark ? (
            <svg
              className="w-5 h-5 text-yellow-500"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                fillRule="evenodd"
                d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z"
                clipRule="evenodd"
              />
            </svg>
          ) : (
            <svg
              className="w-5 h-5 text-muted-light dark:text-muted-dark"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
            </svg>
          )}
        </button>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <div className="relative min-h-[60vh] md:min-h-[80vh]">
      <img
        src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1920&h=1080&fit=crop&crop=center"
        className="absolute inset-0 w-full h-full object-cover"
        alt="Landscape by Abhiyan"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-bg-light/80 via-bg-light/30 to-bg-light/10 dark:from-bg-dark/80 dark:via-bg-dark/30 dark:to-bg-dark/10"></div>
      <div className="relative max-w-7xl mx-auto px-6 md:px-8 py-24">
        <motion.h1
          className="text-5xl md:text-6xl font-bold tracking-tight text-text-light dark:text-text-dark font-heading"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: motionTokens.duration.normal / 1000,
            delay: 0.2,
          }}
        >
          Hi, I'm Abhiyan.
        </motion.h1>
        <motion.p
          className="mt-4 text-lg text-muted-light dark:text-muted-dark max-w-xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: motionTokens.duration.normal / 1000,
            delay: 0.4,
          }}
        >
          Software Engineer | Cloud + AI Enthusiast | Photographer
        </motion.p>
        <motion.div
          className="mt-8 flex gap-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: motionTokens.duration.normal / 1000,
            delay: 0.6,
          }}
        >
          <a href="#projects" className="btn-primary">
            View Projects
          </a>
          <a href="#photography" className="btn-ghost">
            See Photography
          </a>
        </motion.div>
      </div>
    </div>
  );
}

function Projects() {
  const items = [
    {
      title: "InfraSight",
      summary:
        "ML-powered cloud cost intelligence platform that cuts AWS billing analysis time by 70%.",
      tech: [
        "Python",
        "FastAPI",
        "PostgreSQL",
        "scikit-learn",
        "Docker",
        "React",
        "Pandas",
      ],
      link: "https://infrasight.netlify.app/",
      github: "https://github.com/aabhiyann/infrasight",
    },
    {
      title: "MelodyHub",
      summary:
        "Real-time music streaming platform supporting 100+ concurrent users with synchronized playback.",
      tech: [
        "Node.js",
        "React",
        "Socket.IO",
        "Clerk Auth",
        "Cloudinary",
        "MongoDB",
      ],
      github: "https://github.com/UdaykiranKalyanapu/CSCI_6234_OOD",
    },
    {
      title: "TalkifyDocs",
      summary:
        "AI SaaS document assistant that processes documents 47% faster than manual review.",
      tech: [
        "Next.js",
        "OpenAI GPT-4",
        "LangChain",
        "Pinecone",
        "Stripe",
        "Prisma",
        "TypeScript",
      ],
      github: "https://github.com/aabhiyann/talkifydocs",
    },
    {
      title: "Disease Prediction ML",
      summary:
        "Clinical decision support system achieving 98.7% diagnostic accuracy on 4,920 medical records.",
      tech: [
        "Python",
        "scikit-learn",
        "pandas",
        "React",
        "Tailwind CSS",
        "Jupyter",
      ],
      github: "https://github.com/aabhiyann/ml-disease-prediction-system",
    },
    {
      title: "Multi-Source Information Retrieval",
      summary:
        "NLP-based retrieval system that reduced research query times by 70%.",
      tech: ["Python", "GPT-3.5-turbo", "Mistral 7B", "FAISS", "NLP"],
      github:
        "https://github.com/aabhiyann/Conversational-Interface-for-Multi-Source-Information-Retrieval",
    },
  ];
  return (
    <section id="projects" className="py-24">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-text-light dark:text-text-dark font-heading">
          Projects
        </h2>
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {items.map((p, index) => (
            <motion.article
              key={p.title}
              className="group rounded-2xl border border-black/5 dark:border-white/10 bg-surface-light dark:bg-surface-dark overflow-hidden transition shadow-sm hover:shadow-xl"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{
                duration: motionTokens.duration.normal / 1000,
                delay: index * 0.1,
                ease: motionTokens.easing.easeOut,
              }}
              whileHover={{
                scale: 1.02,
                transition: { duration: motionTokens.duration.fast / 1000 },
              }}
            >
              <div className="p-6">
                <h3 className="text-xl font-semibold tracking-tight group-hover:text-accent text-text-light dark:text-text-dark font-heading">
                  {p.title}
                </h3>
                <p className="mt-2 text-muted-light dark:text-muted-dark">
                  {p.summary}
                </p>
                <ul className="mt-4 flex flex-wrap gap-2">
                  {p.tech.map((t) => (
                    <li key={t} className="chip">
                      {t}
                    </li>
                  ))}
                </ul>
                <div className="mt-6 flex gap-3">
                  {p.link && (
                    <a
                      href={p.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-primary"
                    >
                      Live
                    </a>
                  )}
                  <a
                    href={p.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-ghost"
                  >
                    GitHub
                  </a>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Experience() {
  const experiences = [
    {
      role: "Graduate Teaching Assistant",
      company: "George Washington University",
      dates: "August 2024 - Present",
      description:
        "Transformed algorithm comprehension for 60+ graduate students by designing interactive tutorials that translated complex concepts into industry case studies, resulting in 22% average improvement in midterm scores.",
      technologies: [
        "Algorithms",
        "Dynamic Programming",
        "Graph Theory",
        "NP-completeness",
        "Python",
        "Java",
      ],
    },
    {
      role: "Software Development Intern",
      company: "ECS Tech",
      dates: "June 2023 - September 2023",
      description:
        "Developed and delivered 7 production-ready features for a fintech platform serving 1,200+ active users, including automated booking system that eliminated 89% of scheduling conflicts.",
      technologies: [
        "React.js",
        "Node.js",
        "PostgreSQL",
        "JavaScript",
        "API Development",
      ],
    },
    {
      role: "IT Solutions Lead",
      company: "Intel Security Service Pvt. Ltd.",
      dates: "August 2022 - March 2023",
      description:
        "Spearheaded complete digital transformation for security consultancy, rebuilding legacy website into lead-generation platform that generated 73% increase in qualified leads and $35K in new contracts.",
      technologies: [
        "WordPress",
        "Web Development",
        "IT Management",
        "Digital Transformation",
        "Budget Management",
      ],
    },
  ];

  return (
    <section id="experience" className="py-24">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-text-light dark:text-text-dark font-heading mb-10">
          Experience
        </h2>
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-4 top-0 bottom-0 w-0.5 border-l border-black/10 dark:border-white/10"></div>

          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                className="relative flex items-start group"
                initial={{ opacity: 0, x: -30, scale: 0.95 }}
                whileInView={{ opacity: 1, x: 0, scale: 1 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.15,
                  ease: "easeOut",
                }}
                whileHover={{ x: 8, transition: { duration: 0.2 } }}
              >
                {/* Timeline dot */}
                <motion.div
                  className="relative z-10 flex h-8 w-8 items-center justify-center rounded-full bg-accent"
                  whileHover={{ scale: 1.2, rotate: 180 }}
                  transition={{ duration: 0.3 }}
                >
                  <motion.div
                    className="h-3 w-3 rounded-full bg-white"
                    animate={{
                      scale: [1, 1.1, 1],
                      opacity: [0.8, 1, 0.8],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      delay: index * 0.5,
                    }}
                  />
                </motion.div>

                {/* Content */}
                <div className="ml-6 flex-1">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
                    <div>
                      <h3 className="text-lg font-semibold text-text-light dark:text-text-dark font-heading">
                        {exp.role}
                      </h3>
                      <p className="text-muted-light dark:text-muted-dark font-medium">
                        {exp.company}
                      </p>
                    </div>
                    <span className="text-sm text-muted-light dark:text-muted-dark mt-1 sm:mt-0">
                      {exp.dates}
                    </span>
                  </div>

                  <p className="mt-2 text-text-light dark:text-text-dark">
                    {exp.description}
                  </p>

                  <div className="mt-3 flex flex-wrap gap-2">
                    {exp.technologies.map((tech) => (
                      <span key={tech} className="chip">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function Education() {
  const education = [
    {
      degree: "Master of Science - Computer Science",
      school: "George Washington University",
      dates: "January 2024 - December 2025",
      location: "Washington, DC",
      gpa: "4.0",
      details:
        "Focus on algorithms, machine learning, and software engineering",
    },
    {
      degree:
        "Bachelor of Science in Computer Science & Information Technology",
      school: "St. Xavier's College",
      dates: "August 2018 - December 2022",
      location: "Kathmandu, Nepal",
      gpa: "3.89",
      details:
        "Comprehensive foundation in computer science, software development, and IT systems",
    },
  ];

  return (
    <section
      id="education"
      className="py-24 bg-surface-light dark:bg-surface-dark"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        <motion.h2
          className="text-4xl md:text-5xl font-bold tracking-tight text-text-light dark:text-text-dark mb-10 font-heading"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Education
        </motion.h2>
        <div className="space-y-8">
          {education.map((edu, index) => (
            <motion.div
              key={edu.school}
              className="bg-surface-light dark:bg-surface-dark rounded-2xl p-6 shadow-sm border border-black/5 dark:border-white/10"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-3">
                <div>
                  <h3 className="text-lg font-semibold text-text-light dark:text-text-dark font-heading">
                    {edu.degree}
                  </h3>
                  <p className="text-muted-light dark:text-muted-dark font-medium">
                    {edu.school}
                  </p>
                </div>
                <div className="mt-2 sm:mt-0 text-right">
                  <p className="text-sm text-muted-light dark:text-muted-dark">
                    {edu.dates}
                  </p>
                  <p className="text-sm text-muted-light dark:text-muted-dark">
                    {edu.location}
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-4 mb-3">
                <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-brand-accent/10 text-brand-accent">
                  GPA: {edu.gpa}
                </span>
              </div>
              <p className="text-sm text-neutral-700 dark:text-neutral-300">
                {edu.details}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Photography() {
  return (
    <section id="photography" className="py-24">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        <motion.h2
          className="text-4xl md:text-5xl font-bold tracking-tight text-text-light dark:text-text-dark mb-10 font-heading"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Photography
        </motion.h2>
        <PhotographyGallery />
      </div>
    </section>
  );
}

function DeepDives() {
  const [activeVisualization, setActiveVisualization] = useState(null);

  const articles = [
    {
      id: 1,
      title: "AI & Copyright: The Uncharted Territory",
      excerpt:
        "Exploring the legal and ethical implications of AI-generated content in the age of machine learning.",
      readTime: "12 min read",
      date: "September 2024",
      category: "Technology & Ethics",
      hasVisualization: true,
      visualization: "coupon-collector",
    },
    {
      id: 2,
      title: "The Architecture of Modern Web Applications",
      excerpt:
        "A deep dive into microservices, event-driven architecture, and the evolution of web development patterns.",
      readTime: "8 min read",
      date: "August 2024",
      category: "Software Architecture",
      hasVisualization: false,
    },
    {
      id: 3,
      title: "Photography as Data: EXIF and Beyond",
      excerpt:
        "How metadata transforms photography from art into structured data, and what that means for the future.",
      readTime: "6 min read",
      date: "July 2024",
      category: "Data & Photography",
      hasVisualization: false,
    },
  ];

  const CouponCollectorVisualization = () => {
    const [boxes, setBoxes] = useState([]);
    const [attempts, setAttempts] = useState(0);
    const [isRunning, setIsRunning] = useState(false);

    const startSimulation = () => {
      setIsRunning(true);
      setAttempts(0);
      setBoxes([]);

      const collected = new Set();
      let count = 0;

      const interval = setInterval(() => {
        const randomBox = Math.floor(Math.random() * 10) + 1;
        collected.add(randomBox);
        count++;

        setBoxes([...collected]);
        setAttempts(count);

        if (collected.size === 10) {
          clearInterval(interval);
          setIsRunning(false);
        }
      }, 200);
    };

    return (
      <div className="bg-white dark:bg-neutral-800 rounded-xl p-6 border border-neutral-200 dark:border-neutral-700">
        <h3 className="text-lg font-semibold text-neutral-900 dark:text-white mb-4">
          Coupon Collector's Problem
        </h3>
        <p className="text-sm text-neutral-600 dark:text-neutral-400 mb-4">
          How many attempts to collect all 10 unique items? This classic
          probability problem has an expected value of ~29.3 attempts.
        </p>

        <div className="grid grid-cols-5 gap-2 mb-4">
          {Array.from({ length: 10 }, (_, i) => (
            <div
              key={i + 1}
              className={`w-12 h-12 rounded-lg flex items-center justify-center text-sm font-medium transition-all duration-300 ${
                boxes.includes(i + 1)
                  ? "bg-green-500 text-white"
                  : "bg-neutral-200 dark:bg-neutral-700 text-neutral-600 dark:text-neutral-400"
              }`}
            >
              {i + 1}
            </div>
          ))}
        </div>

        <div className="flex items-center gap-4 mb-4">
          <button
            onClick={startSimulation}
            disabled={isRunning}
            className="px-4 py-2 bg-neutral-900 dark:bg-white text-white dark:text-neutral-900 rounded-lg text-sm font-medium hover:bg-neutral-800 dark:hover:bg-neutral-100 transition-colors disabled:opacity-50"
          >
            {isRunning ? "Running..." : "Start Simulation"}
          </button>
          <div className="text-sm text-neutral-600 dark:text-neutral-400">
            Attempts: <span className="font-semibold">{attempts}</span>
          </div>
        </div>

        <div className="text-xs text-neutral-500 dark:text-neutral-500">
          Expected value: ~29.3 attempts | Current: {attempts} attempts
        </div>
      </div>
    );
  };

  return (
    <section id="deep-dives" className="py-24">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        <motion.h2
          className="text-2xl font-semibold text-neutral-900 dark:text-white mb-8"
          style={{ fontFamily: "Space Grotesk, system-ui" }}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Deep Dives
        </motion.h2>

        <motion.p
          className="text-neutral-600 dark:text-neutral-400 mb-8 max-w-3xl"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Technical essays and interactive explorations of complex topics in
          software, photography, and the intersection of technology with
          society.
        </motion.p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {articles.map((article, index) => (
            <motion.article
              key={article.id}
              className="bg-white dark:bg-neutral-800 rounded-xl border border-neutral-200 dark:border-neutral-700 p-6 hover:shadow-lg dark:hover:shadow-neutral-900/20 transition-all duration-300 cursor-pointer group"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -4, transition: { duration: 0.2 } }}
              onClick={() =>
                article.hasVisualization &&
                setActiveVisualization(article.visualization)
              }
            >
              <div className="flex items-start justify-between mb-4">
                <span className="text-xs font-medium text-neutral-500 dark:text-neutral-400 bg-neutral-100 dark:bg-neutral-700 px-2 py-1 rounded-full">
                  {article.category}
                </span>
                <span className="text-xs text-neutral-500 dark:text-neutral-400">
                  {article.date}
                </span>
              </div>

              <h3 className="text-lg font-semibold text-neutral-900 dark:text-white mb-3 group-hover:text-neutral-700 dark:group-hover:text-neutral-300 transition-colors">
                {article.title}
              </h3>

              <p className="text-neutral-600 dark:text-neutral-400 mb-4 text-sm leading-relaxed">
                {article.excerpt}
              </p>

              <div className="flex items-center justify-between">
                <span className="text-xs text-neutral-500 dark:text-neutral-400">
                  {article.readTime}
                </span>
                {article.hasVisualization && (
                  <span className="text-xs text-blue-600 dark:text-blue-400 font-medium">
                    Interactive Demo →
                  </span>
                )}
              </div>
            </motion.article>
          ))}
        </div>

        {/* Interactive Visualization Modal */}
        {activeVisualization === "coupon-collector" && (
          <motion.div
            className="fixed inset-0 z-50 bg-black/50 flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setActiveVisualization(null)}
          >
            <motion.div
              className="relative max-w-2xl w-full bg-white dark:bg-neutral-800 rounded-xl p-6"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
            >
              <CouponCollectorVisualization />
              <button
                onClick={() => setActiveVisualization(null)}
                className="absolute top-4 right-4 p-2 bg-neutral-100 dark:bg-neutral-700 hover:bg-neutral-200 dark:hover:bg-neutral-600 rounded-full text-neutral-600 dark:text-neutral-400 transition-colors"
                aria-label="Close visualization"
              >
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </motion.div>
          </motion.div>
        )}
      </div>
    </section>
  );
}

function PersonalStory() {
  const [activeMilestone, setActiveMilestone] = useState(0);

  const journey = [
    {
      year: "1998",
      location: "Kathmandu, Nepal",
      title: "Born in the Himalayas",
      description:
        "Started life in the vibrant capital of Nepal, surrounded by ancient temples and modern aspirations.",
      coordinates: { x: 20, y: 30 },
      color: "bg-blue-500",
    },
    {
      year: "2016",
      location: "Kathmandu, Nepal",
      title: "First Computer",
      description:
        "Built my first computer and discovered the world of programming through online tutorials and curiosity.",
      coordinates: { x: 25, y: 35 },
      color: "bg-green-500",
    },
    {
      year: "2020",
      location: "Kathmandu, Nepal",
      title: "University & First Job",
      description:
        "Studied Computer Science while working as a freelance developer, building websites for local businesses.",
      coordinates: { x: 30, y: 40 },
      color: "bg-purple-500",
    },
    {
      year: "2022",
      location: "Transition",
      title: "The Big Decision",
      description:
        "Decided to pursue opportunities in the US, began the visa process and prepared for a new chapter.",
      coordinates: { x: 50, y: 45 },
      color: "bg-orange-500",
    },
    {
      year: "2023",
      location: "Washington DC, USA",
      title: "New Beginnings",
      description:
        "Arrived in DC, started working as a Software Engineer, and began exploring the intersection of technology and society.",
      coordinates: { x: 80, y: 50 },
      color: "bg-red-500",
    },
    {
      year: "2024",
      location: "Washington DC, USA",
      title: "Building the Future",
      description:
        "Now building thoughtful software, capturing moments through photography, and writing about the journey.",
      coordinates: { x: 85, y: 55 },
      color: "bg-indigo-500",
    },
  ];

  return (
    <section id="personal-story" className="py-24">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        <motion.h2
          className="text-2xl font-semibold text-neutral-900 dark:text-white mb-8"
          style={{ fontFamily: "Space Grotesk, system-ui" }}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          My Journey
        </motion.h2>

        <motion.p
          className="text-neutral-600 dark:text-neutral-400 mb-8 max-w-3xl"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          From the mountains of Nepal to the capital of the United States—a
          story of growth, technology, and the pursuit of meaningful work.
        </motion.p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Interactive Map/Timeline */}
          <motion.div
            className="relative bg-gradient-to-br from-blue-50 to-purple-50 dark:from-neutral-800 dark:to-neutral-900 rounded-xl p-8 h-96 overflow-hidden"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-10">
              <svg
                className="w-full h-full"
                viewBox="0 0 100 100"
                preserveAspectRatio="none"
              >
                <defs>
                  <pattern
                    id="grid"
                    width="10"
                    height="10"
                    patternUnits="userSpaceOnUse"
                  >
                    <path
                      d="M 10 0 L 0 0 0 10"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="0.5"
                    />
                  </pattern>
                </defs>
                <rect width="100" height="100" fill="url(#grid)" />
              </svg>
            </div>

            {/* Journey Path */}
            <svg className="absolute inset-0 w-full h-full">
              <path
                d={`M ${journey[0].coordinates.x} ${
                  journey[0].coordinates.y
                } ${journey
                  .map((_, i) =>
                    i > 0
                      ? `L ${journey[i].coordinates.x} ${journey[i].coordinates.y}`
                      : ""
                  )
                  .join(" ")}`}
                stroke="currentColor"
                strokeWidth="2"
                fill="none"
                className="text-neutral-400 dark:text-neutral-600"
                strokeDasharray="5,5"
              />
            </svg>

            {/* Milestone Points */}
            {journey.map((milestone, index) => (
              <motion.button
                key={index}
                className={`absolute w-6 h-6 rounded-full ${milestone.color} border-2 border-white dark:border-neutral-800 shadow-lg transform -translate-x-1/2 -translate-y-1/2 hover:scale-110 transition-transform cursor-pointer`}
                style={{
                  left: `${milestone.coordinates.x}%`,
                  top: `${milestone.coordinates.y}%`,
                }}
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.2 }}
                onClick={() => setActiveMilestone(index)}
              >
                {activeMilestone === index && (
                  <motion.div
                    className="absolute inset-0 rounded-full bg-white/50"
                    animate={{ scale: [1, 1.5, 1] }}
                    transition={{ duration: 1, repeat: Infinity }}
                  />
                )}
              </motion.button>
            ))}

            {/* Location Labels */}
            <div className="absolute top-4 left-4 text-sm font-medium text-neutral-600 dark:text-neutral-400">
              Kathmandu, Nepal
            </div>
            <div className="absolute bottom-4 right-4 text-sm font-medium text-neutral-600 dark:text-neutral-400">
              Washington DC, USA
            </div>
          </motion.div>

          {/* Milestone Details */}
          <motion.div
            className="space-y-4"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <div className="bg-white dark:bg-neutral-800 rounded-xl p-6 border border-neutral-200 dark:border-neutral-700">
              <div className="flex items-center gap-3 mb-3">
                <div
                  className={`w-3 h-3 rounded-full ${journey[activeMilestone].color}`}
                />
                <span className="text-sm font-medium text-neutral-500 dark:text-neutral-400">
                  {journey[activeMilestone].year}
                </span>
              </div>

              <h3 className="text-lg font-semibold text-neutral-900 dark:text-white mb-2">
                {journey[activeMilestone].title}
              </h3>

              <p className="text-sm text-neutral-600 dark:text-neutral-400 mb-3">
                {journey[activeMilestone].location}
              </p>

              <p className="text-neutral-700 dark:text-neutral-300 text-sm leading-relaxed">
                {journey[activeMilestone].description}
              </p>
            </div>

            {/* Navigation */}
            <div className="flex gap-2">
              <button
                onClick={() =>
                  setActiveMilestone(Math.max(0, activeMilestone - 1))
                }
                disabled={activeMilestone === 0}
                className="px-3 py-2 text-sm bg-neutral-100 dark:bg-neutral-700 text-neutral-600 dark:text-neutral-400 rounded-lg hover:bg-neutral-200 dark:hover:bg-neutral-600 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                ← Previous
              </button>
              <button
                onClick={() =>
                  setActiveMilestone(
                    Math.min(journey.length - 1, activeMilestone + 1)
                  )
                }
                disabled={activeMilestone === journey.length - 1}
                className="px-3 py-2 text-sm bg-neutral-100 dark:bg-neutral-700 text-neutral-600 dark:text-neutral-400 rounded-lg hover:bg-neutral-200 dark:hover:bg-neutral-600 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                Next →
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function About() {
  return (
    <section id="about" className="py-24 relative">
      <motion.div
        className="max-w-7xl mx-auto px-6 md:px-8"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <motion.h2
          className="text-2xl font-semibold text-neutral-900 dark:text-white"
          style={{ fontFamily: "Space Grotesk, system-ui" }}
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          About
        </motion.h2>
        <motion.p
          className="mt-4 text-neutral-700 dark:text-neutral-300"
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          I build thoughtful software, shoot photographs that tell stories, and
          write deep dives exploring how things work—from Kathmandu to DC.
        </motion.p>
      </motion.div>
    </section>
  );
}

function Footer() {
  const [currentTrack, setCurrentTrack] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false);

  // Simulate fetching current track (in real implementation, this would connect to Spotify API)
  useEffect(() => {
    const tracks = [
      {
        title: "Bohemian Rhapsody",
        artist: "Queen",
        album: "A Night at the Opera",
      },
      {
        title: "Hotel California",
        artist: "Eagles",
        album: "Hotel California",
      },
      { title: "Imagine", artist: "John Lennon", album: "Imagine" },
      {
        title: "Stairway to Heaven",
        artist: "Led Zeppelin",
        album: "Led Zeppelin IV",
      },
      {
        title: "Sweet Child O' Mine",
        artist: "Guns N' Roses",
        album: "Appetite for Destruction",
      },
    ];

    const randomTrack = tracks[Math.floor(Math.random() * tracks.length)];
    setCurrentTrack(randomTrack);
  }, []);

  return (
    <footer className="border-t border-neutral-200 dark:border-neutral-700 py-12">
      <div className="mx-auto max-w-6xl px-4">
        {/* Currently Listening To Section */}
        <motion.div
          className="mb-8 p-6 bg-gradient-to-r from-neutral-50 to-blue-50 dark:from-neutral-800 dark:to-neutral-900 rounded-xl border border-neutral-200 dark:border-neutral-700"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center gap-3 mb-4">
            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
            <span className="text-sm font-medium text-neutral-600 dark:text-neutral-400">
              Currently Listening To
            </span>
          </div>

          {currentTrack && (
            <motion.div
              className="flex items-center gap-4"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg flex items-center justify-center">
                <svg
                  className="w-6 h-6 text-white"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M18 3a1 1 0 00-1.196-.98l-10 2A1 1 0 006 5v9.114A4.369 4.369 0 005 14c-1.657 0-3 .895-3 2s1.343 2 3 2 3-.895 3-2V7.82l8-1.6v5.894A4.369 4.369 0 0015 12c-1.657 0-3 .895-3 2s1.343 2 3 2 3-.895 3-2V3z" />
                </svg>
              </div>

              <div className="flex-1">
                <h4 className="font-semibold text-neutral-900 dark:text-white">
                  {currentTrack.title}
                </h4>
                <p className="text-sm text-neutral-600 dark:text-neutral-400">
                  {currentTrack.artist} • {currentTrack.album}
                </p>
              </div>

              <button
                onClick={() => setIsPlaying(!isPlaying)}
                className="p-2 bg-white dark:bg-neutral-700 rounded-full shadow-sm hover:shadow-md transition-all"
              >
                {isPlaying ? (
                  <svg
                    className="w-5 h-5 text-neutral-600 dark:text-neutral-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zM7 8a1 1 0 012 0v4a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v4a1 1 0 102 0V8a1 1 0 00-1-1z"
                      clipRule="evenodd"
                    />
                  </svg>
                ) : (
                  <svg
                    className="w-5 h-5 text-neutral-600 dark:text-neutral-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z"
                      clipRule="evenodd"
                    />
                  </svg>
                )}
              </button>
            </motion.div>
          )}
        </motion.div>

        {/* FC Barcelona CTA */}
        <motion.div
          className="mb-8 p-6 bg-gradient-to-r from-blue-600 to-red-600 rounded-xl text-white"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
              <span className="text-2xl">⚽</span>
            </div>
            <div className="flex-1">
              <h3 className="text-lg font-semibold mb-1">
                Let's talk FC Barcelona
              </h3>
              <p className="text-sm text-blue-100">
                Always up for discussing the beautiful game and Barça's latest
                matches
              </p>
            </div>
            <button className="px-4 py-2 bg-white/20 hover:bg-white/30 rounded-lg text-sm font-medium transition-colors">
              Chat →
            </button>
          </div>
        </motion.div>

        {/* Footer Links */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-6 border-t border-neutral-200 dark:border-neutral-700">
          <p className="text-sm text-neutral-600 dark:text-neutral-400">
            © {new Date().getFullYear()} Abhiyan Sainju
          </p>
          <div className="flex items-center gap-4 text-sm">
            <a
              href="mailto:aabhiyansainju@gmail.com"
              className="hover:text-neutral-900 dark:hover:text-white text-neutral-600 dark:text-neutral-400 transition-colors"
            >
              aabhiyansainju@gmail.com
            </a>
            <a
              href="tel:571-427-5918"
              className="hover:text-neutral-900 dark:hover:text-white text-neutral-600 dark:text-neutral-400 transition-colors"
            >
              571-427-5918
            </a>
            <a
              href="https://github.com/aabhiyann"
              target="_blank"
              className="hover:text-neutral-900 dark:hover:text-white text-neutral-600 dark:text-neutral-400 transition-colors"
              rel="noreferrer"
            >
              GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/aabhiyansainju/"
              target="_blank"
              className="hover:text-neutral-900 dark:hover:text-white text-neutral-600 dark:text-neutral-400 transition-colors"
              rel="noreferrer"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

function App() {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    // Check for saved theme preference or default to light mode
    const savedTheme = localStorage.getItem("theme");
    const prefersDark = window.matchMedia(
      "(prefers-color-scheme: dark)"
    ).matches;

    if (savedTheme === "dark" || (!savedTheme && prefersDark)) {
      setIsDark(true);
      document.documentElement.classList.add("dark");
    }
  }, []);

  const toggleTheme = () => {
    const newTheme = !isDark;
    setIsDark(newTheme);

    if (newTheme) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  };

  return (
    <div
      className="min-h-screen bg-light-bg dark:bg-dark-bg text-text-light dark:text-text-dark transition-colors"
      style={{ fontFamily: "Inter, system-ui" }}
    >
      <Navbar isDark={isDark} toggleTheme={toggleTheme} />
      <main>
        <Hero />
        <Projects />
        <Experience />
        <Education />
        <Photography />
        <DeepDives />
        <PersonalStory />
        <About />
      </main>
      <Footer />
    </div>
  );
}

export default App;
