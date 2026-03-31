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
import { ArrowRight, Download } from "lucide-react";

function Home() {
  return (
    <Page>
      <SEO
        title="Abhiyan Sainju | Full-Stack & ML Engineer"
        description="Full-stack engineer building AI/ML solutions. Top-tier software engineering portfolio. Open to roles in DC, NYC, SF, Chicago, Austin, Charlotte, and nationwide."
        keywords={[
          "Software Engineer",
          "Full Stack Developer",
          "Machine Learning Engineer",
          "AI Engineer",
          "React Developer",
          "Python Developer",
          "Cloud Infrastructure",
          "TypeScript",
          "TensorFlow",
          "SaaS Development",
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
                  <span className="text-accent-primary">AI/ML Specialist</span>
                </h1>

                <div className="text-xl md:text-2xl text-text-secondary font-medium mb-4 min-h-[60px]">
                  <TypeWriter
                    words={[
                      "Building ML-powered applications",
                      "Teaching algorithms at GWU",
                      "Turning coffee into production code",
                      "Coding by day, photographing by night",
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

      {/* Why Hire Me Section */}
      <WhyHireMe />

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
