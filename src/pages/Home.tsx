import { useMemo, useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
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

/** track-specific track colors: work/experience = orange, education/teaching = mint */
function timelineTrackStyle(track: string) {
  if (track === "Experience") {
    return {
      pill: "border-accent-primary/45 bg-accent-primary/12 text-accent-primary",
      node: "bg-accent-primary",
      bullet: "bg-accent-primary/80",
      company: "text-accent-primary",
    };
  }
  return {
    pill: "border-success/40 bg-success/12 text-success",
    node: "bg-success",
    bullet: "bg-success/75",
    company: "text-success",
  };
}

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
  const groupedTimeline = useMemo(
    () =>
      timelineYears.map((year) => {
        const entries = homepageTimeline
          .map((item, index) => ({ item, index }))
          .filter(({ item }) => getStartYear(item.dates) === year);
        return { year, entries };
      }),
    [homepageTimeline, timelineYears],
  );
  const yearFirstIndexMap = useMemo(() => {
    const map = new Map<string, number>();
    homepageTimeline.forEach((item, index) => {
      const year = getStartYear(item.dates);
      if (!map.has(year)) {
        map.set(year, index);
      }
    });
    return map;
  }, [homepageTimeline]);
  const [activeTimelineYear, setActiveTimelineYear] = useState(
    timelineYears[0] ?? "",
  );

  const articleRefs = useRef<(HTMLElement | null)[]>([]);

  useEffect(() => {
    if (!homepageTimeline.length) return;

    const visibleRatios = new Map<number, number>();
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const index = Number((entry.target as HTMLElement).dataset.tlIndex);
          if (Number.isNaN(index)) return;
          visibleRatios.set(index, entry.intersectionRatio);
        });

        const mostVisible = [...visibleRatios.entries()]
          .sort((a, b) => b[1] - a[1])
          .find(([, ratio]) => ratio > 0);

        if (!mostVisible) return;
        const [visibleIndex] = mostVisible;
        const year = getStartYear(homepageTimeline[visibleIndex].dates);
        setActiveTimelineYear(year);
      },
      {
        threshold: [0.2, 0.4, 0.6, 0.8],
        rootMargin: "-25% 0px -35% 0px",
      },
    );

    articleRefs.current.forEach((el) => {
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [homepageTimeline, timelineYears]);

  const activeYearIndex = Math.max(
    0,
    timelineYears.indexOf(activeTimelineYear),
  );
  const railProgressPct =
    timelineYears.length > 1
      ? (activeYearIndex / (timelineYears.length - 1)) * 100
      : 0;
  const railProgressHeight = `calc(max(${railProgressPct}%, 0%) - 0.5rem)`;

  const activeYearEntryCount =
    groupedTimeline.find((g) => g.year === activeTimelineYear)?.entries
      .length ?? 0;

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
                  <Button
                    as={Link}
                    to="/projects"
                    variant="primary"
                    size="lg"
                    className="group"
                  >
                    View Projects
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Button>
                  <Button
                    as={Link}
                    to="/resume"
                    variant="outline"
                    size="lg"
                    className="group"
                  >
                    Download Resume
                    <Download className="w-4 h-4 ml-2" />
                  </Button>
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

      {/* Experience Timeline — left year rail + scrollable right column */}
      <section
        className="relative py-24 bg-bg-surface/50"
        aria-label="Career timeline"
      >
        <div
          className="pointer-events-none absolute inset-0 overflow-hidden"
          aria-hidden
        >
          <div
            className="absolute inset-0 opacity-[0.35] dark:opacity-[0.2]"
            style={{
              backgroundImage:
                "repeating-linear-gradient(to bottom, transparent 0, transparent 27px, var(--color-border-primary) 27px, var(--color-border-primary) 28px)",
              backgroundSize: "100% 28px",
            }}
          />
        </div>

        <div className="relative max-w-7xl mx-auto px-6 md:px-8">
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
          <p className="text-[11px] font-mono uppercase tracking-[0.22em] text-text-muted mb-6">
            Recent to Past
          </p>

          <div className="flex flex-col md:flex-row md:items-start md:gap-10 lg:gap-14">
            {/* LEFT — sticky to viewport while this section scrolls (needs section overflow-visible) */}
            <aside className="hidden md:flex md:flex-col md:w-[13.5rem] lg:w-60 md:flex-shrink-0 md:sticky md:top-24 md:self-start z-10">
              <div className="min-h-[7.5rem] overflow-hidden">
                <AnimatePresence mode="wait" initial={false}>
                  <motion.div
                    key={activeTimelineYear}
                    initial={{ y: 14, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: -14, opacity: 0 }}
                    transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
                  >
                    <p className="text-5xl md:text-6xl font-medium tracking-tight font-display text-text-primary leading-none">
                      {activeTimelineYear}
                    </p>
                    <p className="mt-3 text-[11px] font-mono uppercase tracking-[0.2em] text-text-muted">
                      {activeYearEntryCount}{" "}
                      {activeYearEntryCount === 1 ? "entry" : "entries"}
                    </p>
                  </motion.div>
                </AnimatePresence>
              </div>

              <div className="relative mt-10">
                {/* Vertical track: gutter column + labels — no overlap with year text */}
                <div
                  className="pointer-events-none absolute left-3.5 top-3 bottom-3 w-px rounded-full bg-border-primary/25"
                  aria-hidden
                />
                <div
                  className="pointer-events-none absolute left-3.5 top-3 w-px rounded-full bg-accent-primary/75 transition-[height] duration-300 ease-out"
                  style={{ height: railProgressHeight }}
                  aria-hidden
                />
                <div className="relative z-[1] space-y-0.5">
                  {timelineYears.map((year) => {
                    const isActive = activeTimelineYear === year;

                    return (
                      <div
                        key={year}
                        className="flex min-h-[2.75rem] items-center gap-6"
                      >
                        <div className="flex h-full w-7 flex-shrink-0 items-center justify-center pr-0.5">
                          {isActive ? (
                            <motion.span
                              layoutId="timeline-year-accent"
                              className="h-[3px] w-4 shrink-0 rounded-full bg-accent-primary"
                              transition={{
                                type: "spring",
                                stiffness: 380,
                                damping: 34,
                              }}
                            />
                          ) : (
                            <span
                              className="h-1 w-1 shrink-0 rounded-full bg-border-primary/45"
                              aria-hidden
                            />
                          )}
                        </div>
                        <button
                          type="button"
                          aria-current={isActive ? "true" : "false"}
                          onClick={() => {
                            const targetIndex = yearFirstIndexMap.get(year);
                            if (targetIndex === undefined) return;
                            articleRefs.current[targetIndex]?.scrollIntoView({
                              behavior: "smooth",
                              block: "start",
                            });
                          }}
                          className={`min-w-0 text-left text-sm font-mono tabular-nums tracking-[0.08em] transition-colors duration-200 ${
                            isActive
                              ? "text-text-primary font-medium"
                              : "text-text-muted/65 hover:text-text-secondary"
                          }`}
                        >
                          {year}
                        </button>
                      </div>
                    );
                  })}
                </div>
              </div>
            </aside>

            {/* RIGHT — scrollable timeline entries */}
            <div className="min-w-0 flex-1 space-y-12">
              <div className="md:hidden -mx-1 overflow-x-auto pb-2">
                <div className="flex items-center gap-2 px-1 min-w-max">
                  {timelineYears.map((year) => {
                    const isActive = activeTimelineYear === year;
                    return (
                      <button
                        key={year}
                        type="button"
                        aria-current={isActive ? "true" : "false"}
                        onClick={() => {
                          const targetIndex = yearFirstIndexMap.get(year);
                          if (targetIndex === undefined) return;
                          articleRefs.current[targetIndex]?.scrollIntoView({
                            behavior: "smooth",
                            block: "start",
                          });
                        }}
                        className={`rounded-full border px-3 py-1 text-[11px] font-mono tracking-[0.14em] transition-colors ${
                          isActive
                            ? "border-accent-primary/60 bg-accent-primary/10 text-accent-primary"
                            : "border-border-primary text-text-secondary"
                        }`}
                      >
                        {year}
                      </button>
                    );
                  })}
                </div>
              </div>

              {groupedTimeline.map((yearGroup, yearGroupIndex) => (
                <motion.section
                  key={yearGroup.year}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.25 }}
                  transition={{
                    duration: motionTokens.duration.normal / 1000,
                    delay: yearGroupIndex * 0.06,
                  }}
                  className="space-y-6"
                >
                  {/* Right column: subtle year anchor (large year lives in left rail on desktop) */}
                  <div className="flex items-baseline gap-4 border-b border-border-primary/50 pb-2 md:hidden">
                    <h3 className="text-2xl font-bold font-display text-text-primary">
                      {yearGroup.year}
                    </h3>
                    <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-text-muted">
                      {yearGroup.entries.length}{" "}
                      {yearGroup.entries.length === 1 ? "entry" : "entries"}
                    </span>
                  </div>

                  <div className="space-y-10">
                    {yearGroup.entries.map(
                      ({ item: experience, index }, entryIndex) => {
                        const trackStyle = timelineTrackStyle(experience.track);
                        return (
                          <motion.article
                            key={experience.id}
                            ref={(el) => {
                              articleRefs.current[index] = el;
                            }}
                            data-tl-index={index}
                            className="relative border-l border-border-primary/25 pl-7 md:pl-9"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, amount: 0.2 }}
                            transition={{
                              duration: motionTokens.duration.normal / 1000,
                              delay: entryIndex * 0.05,
                            }}
                          >
                            <div
                              className={`absolute left-[-6px] top-2.5 h-3 w-3 rounded-full ring-4 ring-bg-primary ${trackStyle.node}`}
                            />

                            <div className="space-y-3">
                              <div className="flex flex-wrap items-center gap-3">
                                <span
                                  className={`inline-flex rounded-md border px-2.5 py-1 text-[10px] font-mono font-semibold uppercase tracking-[0.16em] ${trackStyle.pill}`}
                                >
                                  {experience.track}
                                </span>
                                <span className="text-sm font-mono text-text-muted">
                                  {experience.dates}
                                </span>
                              </div>

                              <div className="space-y-1">
                                <h4 className="text-xl md:text-2xl font-semibold text-text-primary font-display leading-tight">
                                  {experience.role}
                                </h4>
                                <p
                                  className={`text-sm font-medium ${trackStyle.company}`}
                                >
                                  {experience.company}
                                  <span className="font-normal text-text-muted">
                                    {" "}
                                    · {experience.location}
                                  </span>
                                </p>
                              </div>

                              <p className="text-sm text-text-muted leading-relaxed max-w-2xl">
                                {experience.description}
                              </p>

                              <div className="space-y-2 pt-1">
                                {experience.achievements
                                  .slice(0, 2)
                                  .map((achievement) => (
                                    <div
                                      key={achievement}
                                      className="flex items-start gap-3 text-sm text-text-secondary"
                                    >
                                      <span
                                        className={`mt-1.5 h-1.5 w-1.5 rounded-full shrink-0 ${trackStyle.bullet}`}
                                      />
                                      <span>{achievement}</span>
                                    </div>
                                  ))}
                              </div>
                            </div>
                          </motion.article>
                        );
                      },
                    )}
                  </div>
                </motion.section>
              ))}

              <div className="mt-10 md:hidden">
                <Button as={Link} to="/about" variant="outline" size="md">
                  View Full Journey
                </Button>
              </div>

              <div className="hidden md:block mt-10">
                <Button as={Link} to="/about" variant="outline" size="md">
                  View Full Journey
                </Button>
              </div>
            </div>
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
