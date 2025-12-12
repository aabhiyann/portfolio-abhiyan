import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { motionTokens } from "../utils/Motion";
import { projects } from "../data/projects";
import Page from "../components/Page";
import SectionTitle from "../components/SectionTitle";
import Button from "../components/ui/Button";
import { MotionCard } from "../components/ui/MotionCard";
import SEO from "../components/SEO";
import DottedBackground from "../components/DottedBackground";
import HeroBento from "../components/HeroBento";
import SkillsSlider from "../components/SkillsSlider";
import { ArrowRight } from "lucide-react";

function Home() {
  return (
    <Page>
      <SEO
        title="Abhiyan Sainju | Full Stack & AI Engineer"
        description="Master’s student at GWU building enterprise-grade AI/ML solutions."
      />
      <DottedBackground />

      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex flex-col justify-center py-20 overflow-hidden">
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
                  Available for new opportunities
                </div>

                <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6 font-heading text-text-primary leading-[1.1]">
                  Full-Stack & <br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-primary to-accent-secondary">
                    ML Engineer.
                  </span>
                </h1>

                <p className="text-lg md:text-xl text-text-muted mb-8 leading-relaxed max-w-xl mx-auto lg:mx-0">
                  Turning algorithms into production-ready products. Master's
                  Student at GWU specializing in Cloud, Security, and AI.
                  Background in Fintech, EdTech, and Digital Transformation.
                </p>

                <div className="flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start">
                  <Link to="/projects">
                    <Button
                      variant="primary"
                      size="lg"
                      className="group flex items-center gap-2"
                    >
                      View Architecture
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </Link>
                  <Link to="/about">
                    <Button variant="ghost" size="lg">
                      About Me
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
          className="absolute bottom-10 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center gap-2 text-text-muted opacity-50 z-10"
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
        >
          <span className="text-xs font-mono uppercase tracking-widest">
            Scroll
          </span>
          <div className="w-px h-12 bg-gradient-to-b from-text-muted to-transparent"></div>
        </motion.div>
      </section>

      {/* Skills Marquee */}
      <section className="py-0 relative z-10 border-y border-border-primary/50 bg-bg-surface/50 backdrop-blur-sm">
        <SkillsSlider />
      </section>

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
                className="h-full"
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
                  <h3 className="text-xl font-semibold mb-3 text-text-primary font-heading">
                    {project.title}
                  </h3>
                  <p className="text-text-muted mb-4 flex-grow">
                    {project.description}
                  </p>
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
      <section className="py-24 bg-bg-primary">
        <div className="max-w-4xl mx-auto px-6 md:px-8 text-center">
          <SectionTitle
            title="About Me"
            subtitle="I'm a passionate developer with a love for creating digital experiences that matter. When I'm not coding, you'll find me exploring new places with my camera or diving deep into the latest technology trends."
          />
          <Button as={Link} to="/about" variant="primary" size="lg">
            Read My Story
          </Button>
        </div>
      </section>
    </Page>
  );
}

export default Home;
