import "./App.css";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import { useState, useEffect } from "react";

function Navbar({ isDark, toggleTheme }) {
  return (
    <header className="fixed inset-x-0 top-0 z-50 bg-white/70 dark:bg-neutral-900/70 backdrop-blur border-b border-neutral-200 dark:border-neutral-700">
      <nav className="mx-auto max-w-6xl px-4 py-3 flex items-center justify-between">
        <a
          href="#hero"
          className="font-semibold tracking-tight text-neutral-900 dark:text-white"
          style={{ fontFamily: "Space Grotesk, system-ui" }}
        >
          Abhiyan Sainju
        </a>
        <div className="flex items-center gap-6">
          <div className="flex items-center gap-6 text-sm text-neutral-700 dark:text-neutral-300">
            <a
              href="#projects"
              className="hover:text-neutral-900 dark:hover:text-white"
            >
              Projects
            </a>
            <a
              href="#experience"
              className="hover:text-neutral-900 dark:hover:text-white"
            >
              Experience
            </a>
            <a
              href="#photography"
              className="hover:text-neutral-900 dark:hover:text-white"
            >
              Photography
            </a>
            <a
              href="#deep-dives"
              className="hover:text-neutral-900 dark:hover:text-white"
            >
              Deep Dives
            </a>
            <a
              href="#about"
              className="hover:text-neutral-900 dark:hover:text-white"
            >
              About
            </a>
          </div>
          <button
            onClick={toggleTheme}
            className="p-2 rounded-lg bg-neutral-100 dark:bg-neutral-800 hover:bg-neutral-200 dark:hover:bg-neutral-700 transition-colors"
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
                className="w-5 h-5 text-neutral-700"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
              </svg>
            )}
          </button>
        </div>
      </nav>
    </header>
  );
}

function Hero() {
  return (
    <section id="hero" className="pt-24 relative overflow-hidden">
      {/* Background gradient animation */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-neutral-900 dark:via-neutral-800 dark:to-neutral-900"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      />

      <motion.div
        className="mx-auto max-w-6xl px-4 relative z-10"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <motion.h1
          className="text-4xl sm:text-5xl font-semibold tracking-tight text-neutral-900 dark:text-white"
          style={{ fontFamily: "Space Grotesk, system-ui" }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Hi, I'm Abhiyan Sainju.
        </motion.h1>

        <motion.p
          className="mt-4 max-w-2xl text-neutral-700 dark:text-neutral-300"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          Software Engineer, Photographer, and critical thinker exploring
          systems, images, and ideas.
        </motion.p>

        <motion.div
          className="mt-6 flex gap-3"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <motion.a
            href="#projects"
            className="inline-flex items-center rounded-md bg-neutral-900 dark:bg-white px-4 py-2 text-white dark:text-neutral-900 text-sm hover:bg-neutral-800 dark:hover:bg-neutral-100 transition-colors"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            View Projects
          </motion.a>
          <motion.a
            href="#about"
            className="inline-flex items-center rounded-md border border-neutral-300 dark:border-neutral-600 px-4 py-2 text-sm text-neutral-800 dark:text-neutral-200 hover:bg-neutral-50 dark:hover:bg-neutral-800 transition-colors"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            About Me
          </motion.a>
        </motion.div>
      </motion.div>
    </section>
  );
}

function Projects() {
  const items = [
    {
      title: "InfraSight",
      summary: "Cloud cost & performance insights.",
      tech: ["React", "Node", "AWS"],
    },
    {
      title: "ChainCheck",
      summary: "Supply chain verification.",
      tech: ["Next.js", "tRPC", "Postgres"],
    },
    {
      title: "MediQuery",
      summary: "Clinical data querying.",
      tech: ["Python", "FastAPI", "FHIR"],
    },
  ];
  return (
    <section id="projects" className="py-16">
      <div className="mx-auto max-w-6xl px-4">
        <h2
          className="text-2xl font-semibold text-neutral-900 dark:text-white"
          style={{ fontFamily: "Space Grotesk, system-ui" }}
        >
          Projects
        </h2>
        <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((p, index) => (
            <motion.article
              key={p.title}
              className="rounded-xl border border-neutral-200 dark:border-neutral-700 bg-white dark:bg-neutral-800 p-4 hover:shadow-lg dark:hover:shadow-neutral-900/20 transition-all cursor-pointer"
              initial={{ opacity: 0, y: 20, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{
                duration: 0.5,
                delay: index * 0.1,
                ease: "easeOut",
              }}
              whileHover={{
                scale: 1.02,
                y: -4,
                transition: { duration: 0.2 },
              }}
              whileTap={{ scale: 0.98 }}
            >
              <h3 className="font-semibold text-neutral-900 dark:text-white">
                {p.title}
              </h3>
              <p className="mt-1 text-sm text-neutral-700 dark:text-neutral-300">
                {p.summary}
              </p>
              <div className="mt-3 flex flex-wrap gap-2">
                {p.tech.map((t) => (
                  <span
                    key={t}
                    className="inline-flex items-center rounded-full bg-neutral-100 dark:bg-neutral-700 px-2 py-1 text-xs text-neutral-700 dark:text-neutral-300"
                  >
                    {t}
                  </span>
                ))}
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
      role: "Software Engineer",
      company: "TechCorp",
      dates: "2023 - Present",
      description:
        "Building scalable web applications and leading technical initiatives.",
      technologies: ["React", "Node.js", "AWS", "TypeScript"],
    },
    {
      role: "Full Stack Developer",
      company: "StartupXYZ",
      dates: "2022 - 2023",
      description:
        "Developed end-to-end solutions for early-stage startup, focusing on user experience and performance.",
      technologies: ["Next.js", "PostgreSQL", "Docker", "GraphQL"],
    },
    {
      role: "Frontend Developer",
      company: "Digital Agency",
      dates: "2021 - 2022",
      description:
        "Created responsive web applications and collaborated with design teams to implement pixel-perfect UIs.",
      technologies: ["Vue.js", "Sass", "Webpack", "Figma"],
    },
  ];

  return (
    <section id="experience" className="py-16">
      <div className="mx-auto max-w-4xl px-4">
        <h2
          className="text-2xl font-semibold text-neutral-900 dark:text-white mb-8"
          style={{ fontFamily: "Space Grotesk, system-ui" }}
        >
          Experience
        </h2>
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-neutral-200 dark:bg-neutral-700"></div>

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
                  className="relative z-10 flex h-8 w-8 items-center justify-center rounded-full bg-neutral-900 dark:bg-white"
                  whileHover={{ scale: 1.2, rotate: 180 }}
                  transition={{ duration: 0.3 }}
                >
                  <motion.div
                    className="h-3 w-3 rounded-full bg-white dark:bg-neutral-900"
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
                      <h3 className="text-lg font-semibold text-neutral-900 dark:text-white">
                        {exp.role}
                      </h3>
                      <p className="text-neutral-600 dark:text-neutral-400 font-medium">
                        {exp.company}
                      </p>
                    </div>
                    <span className="text-sm text-neutral-500 dark:text-neutral-400 mt-1 sm:mt-0">
                      {exp.dates}
                    </span>
                  </div>

                  <p className="mt-2 text-neutral-700 dark:text-neutral-300">
                    {exp.description}
                  </p>

                  <div className="mt-3 flex flex-wrap gap-2">
                    {exp.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="inline-flex items-center rounded-full bg-neutral-100 dark:bg-neutral-700 px-3 py-1 text-xs font-medium text-neutral-700 dark:text-neutral-300"
                      >
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

function Photography() {
  const [selectedImage, setSelectedImage] = useState(null);

  const photos = [
    {
      id: 1,
      src: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=600&fit=crop",
      alt: "Mountain landscape",
      title: "Himalayan Vista",
      camera: "Canon EOS R5",
      lens: "RF 24-70mm f/2.8L",
      settings: "f/8, 1/125s, ISO 100",
      location: "Annapurna Base Camp, Nepal",
    },
    {
      id: 2,
      src: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&h=800&fit=crop",
      alt: "Portrait in golden hour",
      title: "Golden Hour Portrait",
      camera: "Sony A7R IV",
      lens: "85mm f/1.4 GM",
      settings: "f/2.8, 1/250s, ISO 400",
      location: "Kathmandu, Nepal",
    },
    {
      id: 3,
      src: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=500&fit=crop",
      alt: "Street photography",
      title: "Urban Stories",
      camera: "Fujifilm X-T4",
      lens: "23mm f/1.4",
      settings: "f/5.6, 1/60s, ISO 800",
      location: "Washington DC, USA",
    },
    {
      id: 4,
      src: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=500&h=800&fit=crop",
      alt: "Architecture detail",
      title: "Geometric Patterns",
      camera: "Canon EOS R5",
      lens: "RF 70-200mm f/2.8L",
      settings: "f/4, 1/500s, ISO 200",
      location: "New York, USA",
    },
    {
      id: 5,
      src: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=600&fit=crop",
      alt: "Nature macro",
      title: "Forest Details",
      camera: "Sony A7R IV",
      lens: "90mm f/2.8 Macro",
      settings: "f/8, 1/125s, ISO 100",
      location: "Rock Creek Park, DC",
    },
    {
      id: 6,
      src: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&h=400&fit=crop",
      alt: "Cityscape at night",
      title: "Urban Nightscape",
      camera: "Fujifilm X-T4",
      lens: "16-55mm f/2.8",
      settings: "f/4, 8s, ISO 100",
      location: "Washington DC, USA",
    },
  ];

  return (
    <>
      <section id="photography" className="py-16">
        <div className="mx-auto max-w-6xl px-4">
          <h2
            className="text-2xl font-semibold text-neutral-900 dark:text-white mb-8"
            style={{ fontFamily: "Space Grotesk, system-ui" }}
          >
            Photography
          </h2>

          {/* Masonry Grid */}
          <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">
            {photos.map((photo, index) => (
              <motion.div
                key={photo.id}
                className="break-inside-avoid mb-6 group cursor-pointer"
                initial={{ opacity: 0, y: 30, scale: 0.9 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.1,
                  ease: "easeOut",
                }}
                whileHover={{
                  scale: 1.03,
                  y: -8,
                  transition: { duration: 0.3 },
                }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setSelectedImage(photo)}
              >
                <div className="relative overflow-hidden rounded-xl bg-white dark:bg-neutral-800 shadow-lg hover:shadow-xl dark:hover:shadow-neutral-900/20 transition-all duration-300 group-hover:scale-105">
                  <img
                    src={photo.src}
                    alt={photo.alt}
                    className="w-full h-auto object-cover"
                    loading="lazy"
                  />

                  {/* Overlay with EXIF data */}
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/60 transition-all duration-300 flex items-end">
                    <div className="p-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <h3 className="font-semibold text-lg mb-2">
                        {photo.title}
                      </h3>
                      <div className="text-sm space-y-1">
                        <p>
                          <span className="font-medium">Camera:</span>{" "}
                          {photo.camera}
                        </p>
                        <p>
                          <span className="font-medium">Lens:</span>{" "}
                          {photo.lens}
                        </p>
                        <p>
                          <span className="font-medium">Settings:</span>{" "}
                          {photo.settings}
                        </p>
                        <p>
                          <span className="font-medium">Location:</span>{" "}
                          {photo.location}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox Modal */}
      {selectedImage && (
        <motion.div
          className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => setSelectedImage(null)}
        >
          <motion.div
            className="relative max-w-4xl max-h-[90vh] bg-white dark:bg-neutral-800 rounded-xl overflow-hidden"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={selectedImage.src}
              alt={selectedImage.alt}
              className="w-full h-auto max-h-[70vh] object-contain"
            />
            <div className="p-6">
              <h3 className="text-xl font-semibold text-neutral-900 dark:text-white mb-4">
                {selectedImage.title}
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
                <div>
                  <p className="text-neutral-600 dark:text-neutral-400 mb-1">
                    Camera
                  </p>
                  <p className="text-neutral-900 dark:text-white font-medium">
                    {selectedImage.camera}
                  </p>
                </div>
                <div>
                  <p className="text-neutral-600 dark:text-neutral-400 mb-1">
                    Lens
                  </p>
                  <p className="text-neutral-900 dark:text-white font-medium">
                    {selectedImage.lens}
                  </p>
                </div>
                <div>
                  <p className="text-neutral-600 dark:text-neutral-400 mb-1">
                    Settings
                  </p>
                  <p className="text-neutral-900 dark:text-white font-medium">
                    {selectedImage.settings}
                  </p>
                </div>
                <div>
                  <p className="text-neutral-600 dark:text-neutral-400 mb-1">
                    Location
                  </p>
                  <p className="text-neutral-900 dark:text-white font-medium">
                    {selectedImage.location}
                  </p>
                </div>
              </div>
            </div>
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 p-2 bg-white/20 hover:bg-white/30 rounded-full text-white transition-colors"
              aria-label="Close lightbox"
            >
              <svg
                className="w-6 h-6"
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
    </>
  );
}

function About() {
  return (
    <section id="about" className="py-16 relative">
      <motion.div
        className="mx-auto max-w-3xl px-4"
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
  return (
    <footer className="border-t border-neutral-200 dark:border-neutral-700 py-8">
      <div className="mx-auto max-w-6xl px-4 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-sm text-neutral-600 dark:text-neutral-400">
          © {new Date().getFullYear()} Abhiyan Sainju
        </p>
        <div className="flex items-center gap-4 text-sm">
          <a
            href="#"
            className="hover:text-neutral-900 dark:hover:text-white text-neutral-600 dark:text-neutral-400"
          >
            Resume
          </a>
          <a
            href="https://github.com/aabhiyann"
            target="_blank"
            className="hover:text-neutral-900 dark:hover:text-white text-neutral-600 dark:text-neutral-400"
            rel="noreferrer"
          >
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/aabhiyansainju/"
            target="_blank"
            className="hover:text-neutral-900 dark:hover:text-white text-neutral-600 dark:text-neutral-400"
            rel="noreferrer"
          >
            LinkedIn
          </a>
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
      className="min-h-screen bg-white dark:bg-neutral-900 text-neutral-900 dark:text-white transition-colors"
      style={{ fontFamily: "Inter, system-ui" }}
    >
      <Navbar isDark={isDark} toggleTheme={toggleTheme} />
      <main>
        <Hero />
        <Projects />
        <Experience />
        <Photography />
        <About />
      </main>
      <Footer />
    </div>
  );
}

export default App;
