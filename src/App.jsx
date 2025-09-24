import "./App.css";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";

function Navbar() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 bg-white/70 backdrop-blur border-b border-neutral-200">
      <nav className="mx-auto max-w-6xl px-4 py-3 flex items-center justify-between">
        <a
          href="#hero"
          className="font-semibold tracking-tight text-neutral-900"
          style={{ fontFamily: "Space Grotesk, system-ui" }}
        >
          Abhiyan Sainju
        </a>
        <div className="flex items-center gap-6 text-sm text-neutral-700">
          <a href="#projects" className="hover:text-neutral-900">
            Projects
          </a>
          <a href="#experience" className="hover:text-neutral-900">
            Experience
          </a>
          <a href="#photography" className="hover:text-neutral-900">
            Photography
          </a>
          <a href="#deep-dives" className="hover:text-neutral-900">
            Deep Dives
          </a>
          <a href="#about" className="hover:text-neutral-900">
            About
          </a>
        </div>
      </nav>
    </header>
  );
}

function Hero() {
  return (
    <section id="hero" className="pt-24">
      <motion.div
        className="mx-auto max-w-6xl px-4"
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <h1
          className="text-4xl sm:text-5xl font-semibold tracking-tight text-neutral-900"
          style={{ fontFamily: "Space Grotesk, system-ui" }}
        >
          Hi, I’m Abhiyan Sainju.
        </h1>
        <p className="mt-4 max-w-2xl text-neutral-700">
          Software Engineer, Photographer, and critical thinker exploring
          systems, images, and ideas.
        </p>
        <div className="mt-6 flex gap-3">
          <a
            href="#projects"
            className="inline-flex items-center rounded-md bg-neutral-900 px-4 py-2 text-white text-sm"
          >
            View Projects
          </a>
          <a
            href="#about"
            className="inline-flex items-center rounded-md border border-neutral-300 px-4 py-2 text-sm text-neutral-800 hover:bg-neutral-50"
          >
            About Me
          </a>
        </div>
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
          className="text-2xl font-semibold text-neutral-900"
          style={{ fontFamily: "Space Grotesk, system-ui" }}
        >
          Projects
        </h2>
        <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((p, index) => (
            <motion.article
              key={p.title}
              className="rounded-xl border border-neutral-200 p-4 hover:shadow-sm transition"
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.4, delay: index * 0.08 }}
            >
              <h3 className="font-semibold text-neutral-900">{p.title}</h3>
              <p className="mt-1 text-sm text-neutral-700">{p.summary}</p>
              <div className="mt-3 flex flex-wrap gap-2">
                {p.tech.map((t) => (
                  <span
                    key={t}
                    className="inline-flex items-center rounded-full bg-neutral-100 px-2 py-1 text-xs text-neutral-700"
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
          className="text-2xl font-semibold text-neutral-900 mb-8"
          style={{ fontFamily: "Space Grotesk, system-ui" }}
        >
          Experience
        </h2>
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-neutral-200"></div>

          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                className="relative flex items-start"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                {/* Timeline dot */}
                <div className="relative z-10 flex h-8 w-8 items-center justify-center rounded-full bg-neutral-900">
                  <div className="h-3 w-3 rounded-full bg-white"></div>
                </div>

                {/* Content */}
                <div className="ml-6 flex-1">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
                    <div>
                      <h3 className="text-lg font-semibold text-neutral-900">
                        {exp.role}
                      </h3>
                      <p className="text-neutral-600 font-medium">
                        {exp.company}
                      </p>
                    </div>
                    <span className="text-sm text-neutral-500 mt-1 sm:mt-0">
                      {exp.dates}
                    </span>
                  </div>

                  <p className="mt-2 text-neutral-700">{exp.description}</p>

                  <div className="mt-3 flex flex-wrap gap-2">
                    {exp.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="inline-flex items-center rounded-full bg-neutral-100 px-3 py-1 text-xs font-medium text-neutral-700"
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

function About() {
  return (
    <section id="about" className="py-16">
      <div className="mx-auto max-w-3xl px-4">
        <h2
          className="text-2xl font-semibold text-neutral-900"
          style={{ fontFamily: "Space Grotesk, system-ui" }}
        >
          About
        </h2>
        <p className="mt-4 text-neutral-700">
          I build thoughtful software, shoot photographs that tell stories, and
          write deep dives exploring how things work—from Kathmandu to DC.
        </p>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-neutral-200 py-8">
      <div className="mx-auto max-w-6xl px-4 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-sm text-neutral-600">
          © {new Date().getFullYear()} Abhiyan Sainju
        </p>
        <div className="flex items-center gap-4 text-sm">
          <a href="#" className="hover:text-neutral-900">
            Resume
          </a>
          <a
            href="https://github.com/aabhiyann"
            target="_blank"
            className="hover:text-neutral-900"
            rel="noreferrer"
          >
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/aabhiyansainju/"
            target="_blank"
            className="hover:text-neutral-900"
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
  return (
    <div
      className="min-h-screen bg-white text-neutral-900"
      style={{ fontFamily: "Inter, system-ui" }}
    >
      <Navbar />
      <main>
        <Hero />
        <Projects />
        <Experience />
        <About />
      </main>
      <Footer />
    </div>
  );
}

export default App;
