import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { motionTokens } from "../utils/motion";
import PhotographyGallery from "../components/PhotographyGallery";
import { projects } from "../data/Projects";
import Page from "../components/Page";
import LivingBackground from "../components/LivingBackground";
import SectionTitle from "../components/SectionTitle";
import Button from "../components/ui/Button";
import Card from "../components/ui/Card";
import useSeo from "../utils/useSeo";
import { ArrowUpRight } from "lucide-react";

function Home() {
  useSeo({
    title: "Abhiyan Sainju – Software Engineer & Photographer",
    description:
      "Welcome to the personal portfolio of Abhiyan Sainju, a full-stack developer passionate about creating meaningful digital experiences and capturing moments through photography.",
    keywords:
      "Abhiyan Sainju, portfolio, software engineer, photographer, web development, React, TypeScript, projects, photography gallery",
  });

  return (
    <Page>
      {/* Hero Section */}
      <section
        id="hero"
        className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black"
      >
        <LivingBackground />
        <div className="relative z-20 w-full max-w-7xl mx-auto px-6 md:px-8 pt-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left: Text Content */}
            <div className="max-w-2xl">
              <motion.span
                className="inline-flex items-center rounded-full bg-white/5 px-4 py-1.5 text-sm font-medium text-white/80 ring-1 ring-inset ring-white/10"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: motionTokens.duration.slow / 1000 }}
              >
                Software Engineer & Photographer
              </motion.span>
              <motion.h1
                className="mt-8 text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-white flex items-center gap-3"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: motionTokens.duration.slow / 1000,
                  delay: 0.1,
                }}
              >
                Abhiyan Sainju
                <motion.button
                  className="w-10 h-10 sm:w-14 sm:h-14 rounded-full bg-white/5 border border-white/10 hover:bg-white/10 flex items-center justify-center transition-colors"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{
                    duration: motionTokens.duration.slow / 1000,
                    delay: 0.2,
                  }}
                  onClick={() => {
                    document.getElementById("projects")?.scrollIntoView({
                      behavior: "smooth",
                    });
                  }}
                  aria-label="Scroll to projects"
                >
                  <ArrowUpRight className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                </motion.button>
              </motion.h1>
              <motion.p
                className="mt-6 text-lg max-w-lg leading-8 text-white/80"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: motionTokens.duration.slow / 1000,
                  delay: 0.2,
                }}
              >
                I'm a versatile developer specializing in full-stack web
                development and creative solutions to help grow your business.
                Let's build something great!
              </motion.p>
              <motion.div
                className="mt-10 flex flex-col sm:flex-row items-center gap-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: motionTokens.duration.slow / 1000,
                  delay: 0.4,
                }}
              >
                <Link
                  to="/projects"
                  className="rounded-full bg-white px-6 py-3 text-sm font-semibold text-black shadow-sm hover:bg-gray-200 transition-colors"
                >
                  See All Projects
                </Link>
                <Link
                  to="/about"
                  className="rounded-full bg-white/10 px-6 py-3 text-sm font-semibold text-white shadow-sm ring-1 ring-inset ring-white/20 hover:bg-white/20 transition-colors"
                >
                  Contact Now
                </Link>
              </motion.div>
            </div>

            {/* Right: Floating Testimonials */}
            <div className="hidden lg:block relative min-h-[300px]">
              <motion.div
                className="absolute top-0 right-10 w-64"
                initial={{ opacity: 0, x: 30, rotate: -6 }}
                animate={{
                  opacity: 1,
                  x: 0,
                  rotate: -6,
                  y: [0, -10, 0],
                }}
                transition={{
                  duration: motionTokens.duration.slow / 1000,
                  delay: 0.3,
                  y: {
                    duration: 6,
                    repeat: Infinity,
                    ease: "easeInOut",
                  },
                }}
              >
                <blockquote className="p-5 bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl shadow-lg">
                  <p className="text-white/90 italic">
                    "Working with him was a game changer!"
                  </p>
                  <footer className="mt-3 text-sm font-medium text-white/60">
                    - Client Review
                  </footer>
                </blockquote>
              </motion.div>

              <motion.div
                className="absolute top-40 right-0 w-72"
                initial={{ opacity: 0, x: 30, rotate: 3 }}
                animate={{
                  opacity: 1,
                  x: 0,
                  rotate: 3,
                  y: [0, -15, 0],
                }}
                transition={{
                  duration: motionTokens.duration.slow / 1000,
                  delay: 0.5,
                  y: {
                    duration: 7,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 0.8,
                  },
                }}
              >
                <blockquote className="p-5 bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl shadow-lg">
                  <p className="text-white/90 italic">
                    "We increased our conversions by 200%!"
                  </p>
                  <footer className="mt-3 text-sm font-medium text-white/60">
                    - Client Review
                  </footer>
                </blockquote>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Teaser */}
      <section className="py-24 bg-bg-primary">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <SectionTitle
            title="Featured Projects"
            subtitle="A showcase of my recent work spanning web development, mobile applications, and creative coding projects."
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.slice(0, 3).map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: motionTokens.duration.slow / 1000,
                  delay: 0.1 + index * 0.1,
                }}
              >
                <Card className="h-full flex flex-col">
                  <h3 className="text-xl font-semibold mb-3 text-text-primary">
                    {project.title}
                  </h3>
                  <p className="text-text-secondary mb-4 flex-grow">
                    {project.description}
                  </p>
                  <div className="mt-auto">
                    <Button
                      as={Link}
                      to={`/projects`}
                      variant="outline"
                      size="sm"
                    >
                      View Project →
                    </Button>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
          <motion.div
            className="text-center mt-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
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

      {/* Photography Teaser */}
      <section className="py-24 bg-bg-surface">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <SectionTitle
            title="Photography"
            subtitle="Capturing moments and stories through the lens. From street photography to landscape shots, each image tells a unique story."
          />
          <PhotographyGallery limit={6} />
          <motion.div
            className="text-center mt-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: motionTokens.duration.slow / 1000,
              delay: 0.2,
            }}
          >
            <Button as={Link} to="/photography" variant="ghost" size="lg">
              View Gallery
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
