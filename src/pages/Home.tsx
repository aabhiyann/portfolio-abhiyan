import { useMemo, useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { motionTokens } from "../utils/motion";
import { projects } from "../data/Projects";
import Page from "../components/Page";
import Button from "../components/ui/Button";
import SEO from "../components/SEO";
import DottedBackground from "../components/DottedBackground";
import HeroBento from "../components/HeroBento";
import WhyHireMe from "../components/WhyHireMe";
import ContactSection from "../components/ContactSection";
import TypeWriter from "../components/ui/TypeWriter";
import { FeaturedProjectsSection, AboutTeaser } from "../components/sections";
import { experiences } from "../data/experience";
import { ArrowRight, Download } from "lucide-react";

// Extract just the 4-digit year, e.g. "Aug 2024 – ..." → "2024"
const getStartYear = (dates: string) => {
  const start = dates.split("–")[0].trim();
  return start.split(" ").slice(-1)[0];
};

const parseStartDate = (dates: string) => {
  const [start] = dates.split("–").map((part) => part.trim());
  return new Date(`${start} 1`).getTime();
};

function Home() {
  const homepageTimeline = useMemo(
    () =>
      experiences
        .filter((experience) =>
          [
            "gwu-ta",
            "gwu-ms",
            "ecs-engineer",
            "intel-security-lead",
            "ecs-intern",
            "sx-bscsit",
          ].includes(experience.id),
        )
        .map((experience) => ({
          ...experience,
          track: ["gwu-ms", "sx-bscsit"].includes(experience.id)
            ? "Education"
            : "Experience",
        }))
        .sort((a, b) => parseStartDate(b.dates) - parseStartDate(a.dates)),
    [],
  );
  const timelineYears = useMemo(
    () =>
      Array.from(
        new Set(homepageTimeline.map((item) => getStartYear(item.dates))),
      ),
    [homepageTimeline],
  );
  const [activeTimelineYear, setActiveTimelineYear] = useState(
    timelineYears[0] ?? "",
  );

  const articleRefs = useRef<(HTMLElement | null)[]>([]);

  useEffect(() => {
    const handleScroll = () => {
      const threshold = window.innerHeight * 0.45;
      let active = timelineYears[0];
      articleRefs.current.forEach((el, i) => {
        if (!el) return;
        const rect = el.getBoundingClientRect();
        if (rect.top <= threshold) {
          active = getStartYear(homepageTimeline[i].dates);
        }
      });
      setActiveTimelineYear(active);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [homepageTimeline, timelineYears]);

  return (
    <Page>
      <SEO
        title="Abhiyan Sainju | Software Engineer & AI/ML Engineer"
        description="Software Engineer and AI/ML Engineer based in Washington, DC. Builds full-stack systems with real ML in production. M.S. Computer Science, GWU."
        keywords={[
          "Software Engineer",
          "AI Engineer",
          "ML Engineer",
          "Full Stack Developer",
          "Machine Learning",
          "React Developer",
          "Python Developer",
          "Cloud Infrastructure",
          "TypeScript",
          "Data Science",
        ]}
      />
      <DottedBackground />

      {/* Hero Section */}
      <section className="relative min-h-[95vh] flex flex-col justify-center py-24 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 w-full z-10">
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
            {/* Left Column: Text & CTA */}
            <div className="flex-1 max-w-2xl text-center lg:text-left">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: motionTokens.duration.normal / 1000 }}
              >
                <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6 font-heading text-text-primary leading-[1.2]">
                  Software Engineer & <br />
                  <span className="text-accent-primary">AI/ML Engineer</span>
                </h1>

                <div className="text-xl md:text-2xl text-text-secondary font-medium mb-4 min-h-[60px]">
                  <TypeWriter
                    words={[
                      "Full-stack systems with real ML in production",
                      "Teaching algorithms while shipping products",
                      "From RAG pipelines to React frontends",
                    ]}
                  />
                </div>

                <p className="text-lg text-text-muted mb-8 leading-relaxed max-w-xl mx-auto lg:mx-0">
                  Software Engineer building AI and ML products, from document
                  chat and forecasting to real-time systems. Based in DC, open
                  to roles across the US.
                </p>

                <div className="flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start">
                  <Link to="/projects">
                    <Button variant="primary" size="lg" className="group">
                      View Projects
                      <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </Link>
                  <Link to="/resume">
                    <Button variant="outline" size="lg" className="group">
                      Download Resume
                      <Download className="w-4 h-4 ml-2" />
                    </Button>
                  </Link>
                </div>
              </motion.div>
            </div>

            {/* Right Column: Bento Grid Visuals */}
            <div className="flex-1 w-full max-w-md lg:max-w-full">
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <HeroBento />
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Hire Me Section */}
      <WhyHireMe />

      {/* Currently Section */}
      <section className="py-16 bg-bg-primary border-y border-border-primary/40">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <div className="flex flex-col md:flex-row md:items-start md:gap-16 gap-6">
            <div className="flex-shrink-0">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-green-500/10 border border-green-500/20">
                <span className="w-2 h-2 rounded-full bg-green-500" />
                <span className="text-xs font-mono uppercase tracking-[0.2em] text-green-600 dark:text-green-400">
                  Active
                </span>
              </div>
            </div>
            <div className="flex-1">
              <ul className="space-y-3 text-text-secondary text-sm leading-relaxed mb-6">
                <li>
                  Building SnapMacros — photograph a meal, get an instant macro
                  breakdown
                </li>
                <li>
                  M.S. Computer Science at GWU, focused on algorithms,
                  distributed systems, and ML
                </li>
                <li>Open to full-stack and ML engineering roles</li>
              </ul>
              <p className="text-xs font-mono uppercase tracking-[0.2em] text-text-muted">
                Available now
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Timeline */}
      <section className="py-24 bg-bg-surface/40">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          {/* Section header */}
          <div className="mb-12">
            <div className="inline-flex items-center gap-3 mb-5">
              <span className="h-px w-10 bg-accent-primary/60" />
              <span className="text-xs font-mono uppercase tracking-[0.3em] text-accent-primary">
                Journey
              </span>
            </div>
            <h2 className="text-2xl md:text-3xl font-bold font-heading text-text-primary leading-tight mb-3">
              Built across classrooms, startups, and client work.
            </h2>
            <p className="text-sm md:text-base text-text-muted leading-relaxed max-w-xl">
              Teaching, production engineering, and client-facing work across
              Nepal and Washington, DC.
            </p>
          </div>

          {/* Desktop: two-column layout */}
          <div className="hidden lg:grid lg:grid-cols-[280px,1fr] gap-16 items-start">
            {/* LEFT: sticky year rail with large active year */}
            <div className="sticky top-24 self-start">
              {/* Large active year display */}
              <motion.div
                key={activeTimelineYear}
                initial={{ opacity: 0, y: -8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.25 }}
                className="text-8xl font-bold font-heading text-text-primary/[0.07] leading-none select-none mb-2"
              >
                {activeTimelineYear}
              </motion.div>
              <p className="text-xs font-mono uppercase tracking-[0.25em] text-text-muted mb-8">
                {
                  homepageTimeline.filter(
                    (e) => getStartYear(e.dates) === activeTimelineYear,
                  ).length
                }{" "}
                {homepageTimeline.filter(
                  (e) => getStartYear(e.dates) === activeTimelineYear,
                ).length === 1
                  ? "entry"
                  : "entries"}
              </p>

              {/* Mini year list with line */}
              <div className="relative">
                <div className="absolute left-[5px] top-2 bottom-2 w-px bg-border-primary/40" />
                <div className="flex flex-col gap-6">
                  {timelineYears.map((year) => {
                    const isActive = activeTimelineYear === year;
                    return (
                      <motion.div
                        key={year}
                        animate={{ opacity: isActive ? 1 : 0.35 }}
                        transition={{ duration: 0.2 }}
                        className="flex items-center gap-3"
                      >
                        <span
                          className={`relative z-10 h-[11px] w-[11px] rounded-full shrink-0 transition-all duration-300 ${
                            isActive
                              ? "bg-accent-primary ring-[3px] ring-bg-primary ring-offset-0"
                              : "bg-bg-surface border border-border-primary"
                          }`}
                        />
                        <span
                          className={`text-xs font-mono tracking-[0.2em] transition-colors duration-300 ${
                            isActive
                              ? "text-accent-primary font-semibold"
                              : "text-text-muted"
                          }`}
                        >
                          {year}
                        </span>
                      </motion.div>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* RIGHT: timeline entries */}
            <div className="space-y-10">
              {homepageTimeline.map((experience, index) => {
                const isEducation = experience.track === "Education";
                return (
                  <motion.article
                    key={experience.id}
                    ref={(el) => {
                      articleRefs.current[index] = el;
                    }}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{
                      duration: motionTokens.duration.normal / 1000,
                      delay: index * 0.04,
                    }}
                    className="group relative pl-6 border-l-2 border-border-primary/40 hover:border-accent-primary/40 transition-colors duration-300"
                  >
                    {/* track + date row */}
                    <div className="flex flex-wrap items-center gap-3 mb-3">
                      <span
                        className={`inline-flex rounded-full px-2.5 py-0.5 text-[10px] font-mono uppercase tracking-[0.18em] font-semibold ${
                          isEducation
                            ? "bg-green-500/10 text-green-600 dark:text-green-400 border border-green-500/20"
                            : "bg-accent-primary/10 text-accent-primary border border-accent-primary/20"
                        }`}
                      >
                        {experience.track}
                      </span>
                      <span className="text-xs font-mono text-text-muted tracking-wide">
                        {experience.dates}
                      </span>
                      <span className="hidden sm:inline text-xs text-text-muted/60 uppercase tracking-[0.14em]">
                        {experience.location}
                      </span>
                    </div>

                    {/* company + role */}
                    <p className="text-xs uppercase tracking-[0.2em] text-text-muted mb-1">
                      {experience.company}
                    </p>
                    <h3 className="text-lg md:text-xl font-bold text-text-primary font-heading leading-snug mb-3">
                      {experience.role}
                    </h3>

                    <p className="text-sm text-text-muted leading-relaxed mb-4">
                      {experience.description}
                    </p>

                    <div className="space-y-1.5">
                      {experience.achievements.slice(0, 2).map((a) => (
                        <div
                          key={a}
                          className="flex items-start gap-2.5 text-sm text-text-secondary"
                        >
                          <span className="mt-2 h-1 w-1 rounded-full bg-accent-primary/60 shrink-0" />
                          <span>{a}</span>
                        </div>
                      ))}
                    </div>
                  </motion.article>
                );
              })}

              <Button as={Link} to="/about" variant="outline" size="md">
                View Full Journey
              </Button>
            </div>
          </div>

          {/* Mobile: simple list */}
          <div className="lg:hidden space-y-10">
            {homepageTimeline.map((experience) => {
              const isEducation = experience.track === "Education";
              return (
                <div
                  key={experience.id}
                  className="relative pl-6 border-l-2 border-border-primary/40"
                >
                  <div className="flex flex-wrap items-center gap-2 mb-2">
                    <span
                      className={`inline-flex rounded-full px-2.5 py-0.5 text-[10px] font-mono uppercase tracking-[0.18em] font-semibold ${
                        isEducation
                          ? "bg-green-500/10 text-green-600 dark:text-green-400 border border-green-500/20"
                          : "bg-accent-primary/10 text-accent-primary border border-accent-primary/20"
                      }`}
                    >
                      {experience.track}
                    </span>
                    <span className="text-xs font-mono text-text-muted">
                      {experience.dates}
                    </span>
                  </div>
                  <p className="text-xs uppercase tracking-[0.2em] text-text-muted mb-1">
                    {experience.company}
                  </p>
                  <h3 className="text-lg font-bold text-text-primary font-heading leading-snug mb-2">
                    {experience.role}
                  </h3>
                  <p className="text-sm text-text-muted leading-relaxed">
                    {experience.description}
                  </p>
                </div>
              );
            })}
            <Button as={Link} to="/about" variant="outline" size="md">
              View Full Journey
            </Button>
          </div>
        </div>
      </section>

      {/* Projects Teaser - Now using extracted component */}
      <FeaturedProjectsSection projects={projects.slice(0, 3)} />

      {/* About Teaser - Now using extracted component */}
      <AboutTeaser />

      {/* Contact Section */}
      <ContactSection />
    </Page>
  );
}

export default Home;
