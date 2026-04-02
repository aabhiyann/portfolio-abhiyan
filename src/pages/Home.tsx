import { useMemo, useState } from "react";
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

function Home() {
  const getStartYear = (dates: string) => dates.split("–")[0].trim();
  const parseStartDate = (dates: string) => {
    const [start] = dates.split("–").map((part) => part.trim());
    return new Date(`${start} 1`).getTime();
  };

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
        <div className="max-w-6xl mx-auto px-4 sm:px-6 md:px-8 w-full z-10">
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
        <div className="max-w-6xl mx-auto px-6 md:px-8">
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
        <div className="max-w-6xl mx-auto px-6 md:px-8">
          <div className="max-w-2xl mb-10 lg:mb-12">
            <div className="inline-flex items-center gap-3 mb-5">
              <span className="h-px w-10 bg-accent-primary/60" />
              <span className="text-xs font-mono uppercase tracking-[0.3em] text-accent-primary">
                Journey
              </span>
            </div>
            <h2 className="text-2xl md:text-3xl font-bold font-heading text-text-primary leading-tight mb-4">
              Built across classrooms, startups, and client work.
            </h2>
            <p className="text-sm md:text-base text-text-muted leading-relaxed">
              The projects on this site are backed by teaching, production
              engineering, and client-facing work across Nepal and Washington,
              DC.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-[84px,minmax(0,1fr)] gap-8 lg:gap-16 items-start">
            <div className="hidden lg:block lg:sticky lg:top-28 self-start z-10">
              <div className="relative pl-5">
                <div className="absolute left-0 top-2 bottom-2 w-px bg-border-primary/80" />
                <div className="space-y-5">
                  {timelineYears.map((year, index) => {
                    const isActive = activeTimelineYear === year;

                    return (
                      <motion.div
                        key={year}
                        animate={{
                          opacity: isActive ? 1 : 0.45,
                          x: isActive ? 0 : 8,
                          scale: isActive ? 1 : 0.96,
                        }}
                        transition={{ duration: 0.25, ease: "easeOut" }}
                        className="relative"
                      >
                        <span
                          className={`absolute left-[-5px] top-1.5 h-2.5 w-2.5 rounded-full transition-all duration-300 ${
                            isActive
                              ? "bg-accent-primary ring-4 ring-bg-primary"
                              : "bg-bg-primary border border-border-primary"
                          }`}
                        />
                        <div
                          className={`text-[11px] font-mono uppercase tracking-[0.28em] transition-colors duration-300 ${
                            isActive
                              ? "text-accent-primary"
                              : index === 0
                                ? "text-text-secondary"
                                : "text-text-muted/75"
                          }`}
                        >
                          {year}
                        </div>
                      </motion.div>
                    );
                  })}
                </div>
              </div>
            </div>

            <div className="space-y-12">
              <div className="space-y-12">
                {homepageTimeline.map((experience, index) => (
                  <motion.article
                    key={experience.id}
                    className="relative border-l border-border-primary pl-8 md:pl-10"
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    onViewportEnter={() =>
                      setActiveTimelineYear(getStartYear(experience.dates))
                    }
                    viewport={{ once: true, amount: 0.55 }}
                    transition={{
                      duration: motionTokens.duration.normal / 1000,
                      delay: index * 0.05,
                    }}
                  >
                    <div className="absolute left-[-6px] top-2 h-3 w-3 rounded-full bg-accent-primary ring-4 ring-bg-primary" />

                    <div className="space-y-3">
                      <div className="flex flex-wrap items-center gap-3">
                        <span className="inline-flex rounded-full border border-border-primary px-3 py-1 text-xs font-mono uppercase tracking-[0.18em] text-text-secondary">
                          {experience.track}
                        </span>
                        <span className="text-sm font-mono text-accent-primary">
                          {experience.dates}
                        </span>
                        <span className="text-xs uppercase tracking-[0.18em] text-text-muted/80">
                          {experience.location}
                        </span>
                      </div>

                      <div className="space-y-1">
                        <p className="text-xs uppercase tracking-[0.22em] text-accent-primary">
                          {experience.company}
                        </p>
                        <h3 className="text-xl md:text-2xl font-bold text-text-primary font-heading leading-tight">
                          {experience.role}
                        </h3>
                      </div>

                      <p className="text-text-muted leading-relaxed max-w-2xl">
                        {experience.description}
                      </p>

                      <div className="space-y-2">
                        {experience.achievements
                          .slice(0, 2)
                          .map((achievement) => (
                            <div
                              key={achievement}
                              className="flex items-start gap-3 text-sm text-text-secondary"
                            >
                              <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-accent-primary/70 shrink-0" />
                              <span>{achievement}</span>
                            </div>
                          ))}
                      </div>
                    </div>
                  </motion.article>
                ))}
              </div>

              <div className="mt-10 lg:hidden">
                <Button as={Link} to="/about" variant="outline" size="md">
                  View Full Journey
                </Button>
              </div>
            </div>
          </div>

          <div className="hidden lg:flex justify-start mt-10 pl-[110px]">
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
