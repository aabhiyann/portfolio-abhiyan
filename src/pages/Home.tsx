import { useMemo, useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { motionTokens } from "../utils/motion";
import { projects } from "../data/Projects";
import Page from "../components/Page";
import Button from "../components/ui/Button";
import SEO from "../components/SEO";
import DottedBackground from "../components/DottedBackground";
import TerminalCard from "../components/TerminalCard";
import HeroPhotoCard from "../components/HeroPhotoCard";
import HeroCurrentlyCard from "../components/HeroCurrentlyCard";
import HeroWritingCard from "../components/HeroWritingCard";
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
      <section className="relative flex flex-col justify-center pt-32 pb-24 overflow-hidden min-h-[90vh]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 w-full z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-12 min-h-[500px] items-center">
            {/* Left Block: Pure Text & CTA (lg:col-span-6) */}
            <div className="lg:col-span-6 flex flex-col justify-center text-center lg:text-left order-1">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: motionTokens.duration.normal / 1000 }}
              >
                <h1 className="text-5xl md:text-6xl lg:text-[4rem] xl:text-[4.5rem] font-medium tracking-tight mb-6 font-display text-text-primary leading-[1.1]">
                  Software Engineer <br />
                  <span className="text-accent-primary font-display italic leading-relaxed">
                    &
                  </span>{" "}
                  <br />
                  <span className="text-accent-primary font-display italic pr-2">
                    AI/ML Engineer
                  </span>
                </h1>

                <div className="text-xl md:text-2xl text-text-secondary font-medium mb-6 min-h-[60px]">
                  <TypeWriter
                    words={[
                      "Full-stack systems with real ML in production",
                      "From RAG pipelines to React frontends",
                    ]}
                  />
                </div>

                <p className="text-lg text-text-muted mb-10 leading-relaxed max-w-xl mx-auto lg:mx-0 font-body">
                  I'm a Software Engineer building AI and ML products, from
                  document chat and forecasting to real-time systems. Based in
                  DC, open to roles across the US.
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

            {/* Right Block: Interactive Console (lg:col-span-6) */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="lg:col-span-6 order-2 h-[450px] lg:h-[550px] w-full"
            >
              <div className="h-full w-full rounded-2xl overflow-hidden shadow-2xl border border-border-primary/50 bg-card">
                <TerminalCard />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Profile Dashboard Section */}
      <section className="relative py-16 bg-bg-surface/20 border-t border-border-primary/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 w-full z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-stretch">
            {/* Dashboard: Profile Photo */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="lg:col-span-4 h-[400px] lg:h-[500px]"
            >
              <HeroPhotoCard />
            </motion.div>

            {/* Dashboard: Currently & Writing Cards */}
            <div className="lg:col-span-8 flex flex-col gap-6 lg:gap-8 justify-between">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="flex-1"
              >
                <HeroCurrentlyCard />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="flex-1"
              >
                <HeroWritingCard />
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Hire Me Section */}
      <WhyHireMe />

      {/* Experience Timeline */}
      <section className="py-24 bg-bg-surface/40">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <div className="max-w-2xl mb-10 lg:mb-12">
            <div className="inline-flex items-center gap-3 mb-5">
              <span className="h-px w-10 bg-accent-primary/60" />
              <span className="label-serif">Journey</span>
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
              {homepageTimeline.map((experience, index) => (
                <motion.article
                  key={experience.id}
                  ref={(el) => {
                    articleRefs.current[index] = el;
                  }}
                  className="relative border-l border-border-primary pl-8 md:pl-10"
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
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
