import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { motionTokens } from "../utils/Motion";
import { projects } from "../data/Projects";
import Page from "../components/Page";
import SectionTitle from "../components/SectionTitle";
import Button from "../components/ui/Button";
import { MotionCard } from "../components/ui/MotionCard";
import SEO from "../components/SEO";
import DottedBackground from "../components/DottedBackground";
import HeroBento from "../components/HeroBento";
import SkillsSlider from "../components/SkillsSlider"; // Restored
import WhyHireMe from "../components/WhyHireMe";
import StatsBar from "../components/StatsBar";
import ContactSection from "../components/ContactSection";
import TypeWriter from "../components/ui/TypeWriter";
import { ArrowRight, Download } from "lucide-react";

function Home() {
  return (
    <Page>
      <SEO
        title="Abhiyan Sainju | Full Stack & AI Engineer"
        description="Master’s student at GWU building enterprise-grade AI/ML solutions."
      />
      <DottedBackground />

      {/* Hero Section */}
      <section className="relative min-h-[95vh] flex flex-col justify-center py-20 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 md:px-8 w-full z-10">
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
            {/* Left Column: Text & CTA */}
            <div className="flex-1 max-w-2xl text-center lg:text-left">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: motionTokens.duration.normal / 1000 }}
              >
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent-primary/10 border border-accent-primary/20 text-accent-primary text-sm font-medium font-mono mb-6 backdrop-blur-sm">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent-primary opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-accent-primary"></span>
                  </span>
                  <span className="flex gap-2">Hi, I'm Abhiyan Sainju 👋</span>
                </div>

                <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6 font-heading text-text-primary leading-[1.2] pb-4">
                  Full-Stack & <br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-primary to-accent-secondary">
                    ML Engineer
                  </span>
                </h1>

                <div className="text-xl md:text-2xl text-text-secondary font-medium mb-4 h-[60px]">
                  <TypeWriter
                    words={[
                      "I ship ML-powered applications",
                      "I teach algorithms at GWU",
                      "I turn theory into production code",
                      "I debug code and photograph the world",
                    ]}
                  />
                </div>

                <p className="text-lg text-text-muted mb-8 leading-relaxed max-w-xl mx-auto lg:mx-0">
                  Building Production-Ready Systems.
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

        {/* Scroll Indicator */}
        <motion.div
          className="absolute bottom-6 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center gap-2 text-text-muted opacity-50 z-20 pointer-events-none"
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
        >
          <span className="text-xs font-mono uppercase tracking-widest">
            Scroll to explore
            <div className="w-px h-12 bg-gradient-to-b from-text-muted to-transparent mx-auto mt-2"></div>
          </span>
        </motion.div>
      </section>

      {/* Stats Bar */}
      <StatsBar />

      {/* Skills Slider (Restored) */}
      <SkillsSlider />

      {/* Why Hire Me Section */}
      <WhyHireMe />

      {/* Projects Teaser */}
      <section id="projects" className="py-24 bg-bg-primary">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <SectionTitle
            title="Featured Projects"
            subtitle="A showcase of my recent work spanning web development, mobile applications, and creative coding projects."
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {projects.slice(0, 3).map((project, index) => (
              <MotionCard
                key={project.id}
                className="h-full flex flex-col"
                variants={motionTokens.variants.fadeUp}
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }}
                transition={{
                  duration: motionTokens.duration.slow / 1000,
                  delay: 0.1 + index * 0.1,
                }}
                whileHover={{ y: -8 }}
              >
                <div className="p-6 flex flex-col h-full">
                  <div className="mb-4 overflow-hidden rounded-lg aspect-video relative group">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col items-center justify-center gap-3 p-4">
                      {project.caseStudyUrl && (
                        <Button
                          as={Link}
                          to={project.caseStudyUrl}
                          size="sm"
                          variant="primary"
                          className="w-full max-w-[140px]"
                        >
                          Read Case Study
                        </Button>
                      )}
                      {(project.live || project.github) && (
                        <Button
                          as="a"
                          href={project.live || project.github}
                          target="_blank"
                          size="sm"
                          variant={project.caseStudyUrl ? "outline" : "primary"}
                          className="w-full max-w-[140px] bg-black/50 backdrop-blur-sm border-white/20 hover:bg-white/10"
                        >
                          View Project
                        </Button>
                      )}
                    </div>
                  </div>

                  <h3 className="text-xl font-semibold mb-3 text-text-primary font-heading">
                    {project.title}
                  </h3>
                  <p className="text-text-muted mb-4 flex-grow line-clamp-3 text-sm">
                    {project.description}
                  </p>

                  {/* Stats */}
                  {project.stats && (
                    <div className="flex gap-4 mb-4 border-y border-border-primary/50 py-2">
                      {project.stats.slice(0, 2).map((stat) => (
                        <div key={stat.label} className="text-xs">
                          <span className="text-text-muted block text-[10px] uppercase tracking-wider">
                            {stat.label}
                          </span>
                          <span className="font-mono text-accent-primary font-medium">
                            {stat.value}
                          </span>
                        </div>
                      ))}
                    </div>
                  )}

                  {/* Tech Badges */}
                  <div className="flex flex-wrap gap-2 mt-auto">
                    {project.tech.slice(0, 3).map((t) => (
                      <span
                        key={t}
                        className="px-2 py-1 text-xs rounded bg-accent-primary/10 text-accent-primary border border-accent-primary/20"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </MotionCard>
            ))}
          </div>
          <motion.div
            className="text-center mt-12"
            variants={motionTokens.variants.fadeUp}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            transition={{
              duration: motionTokens.duration.slow / 1000,
              delay: 0.4,
            }}
          >
            <Button as={Link} to="/projects" variant="primary" size="lg">
              View All Projects
            </Button>
          </motion.div>
        </div>
      </section>

      {/* About Teaser */}
      <section className="py-24 bg-bg-surface relative overflow-hidden">
        <div className="absolute inset-0 bg-accent-primary/5 opacity-20 pointer-events-none"></div>
        <div className="max-w-4xl mx-auto px-6 md:px-8 text-center relative z-10">
          <SectionTitle
            title="My Journey"
            subtitle="I don't just write code—I solve problems. From teaching algorithms to 60+ grad students to shipping production apps used by thousands."
          />
          <Button as={Link} to="/about" variant="primary" size="lg">
            Read My Story
          </Button>
        </div>
      </section>

      {/* Contact Section */}
      <ContactSection />
    </Page>
  );
}

export default Home;
