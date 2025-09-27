import { Link } from "react-router-dom";
import { motion } from "framer-motion"; 
import { motionTokens } from "../utils/motion";
import PhotographyGallery from "../components/PhotographyGallery";
import { projects } from "../data/projects";
import Page from "../components/Page";
import LivingBackground from "../components/LivingBackground";
import SectionTitle from "../components/SectionTitle";
import { useTheme } from "../contexts/useTheme";

function Home() {
  const { themeState } = useTheme();
  const { isDarkMode, currentTheme } = themeState;

  return (
    <Page>
      {/* Hero Section */}
      <section
        id="hero"
        className="relative min-h-[80vh] flex items-center justify-center overflow-hidden bg-primary"
      >
        {/* Living Background */}
        <LivingBackground />

        {/* Hero Content */}
        <div className="relative z-20 text-center max-w-4xl mx-auto px-6">
          <motion.h1
            className="text-6xl md:text-7xl font-bold tracking-tight mb-6 font-heading text-primary"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: motionTokens.duration.slow / 1000 }}
          >
            Hi, I'm Abhiyan.
          </motion.h1>

          <motion.p
            className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto text-secondary"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: motionTokens.duration.slow / 1000,
              delay: 0.2,
            }}
          >
            A full-stack developer passionate about creating meaningful digital
            experiences. I build web applications, capture moments through
            photography, and explore the intersection of technology and
            creativity.
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: motionTokens.duration.slow / 1000,
              delay: 0.4,
            }}
          >
            <Link
              to="/projects"
              className="btn-primary"
            >
              View My Work
            </Link>
            <Link
              to="/about"
              className="btn-secondary"
            >
              Learn More
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Projects Teaser */}
      <section className="py-24 bg-bg-primary">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <SectionTitle 
            title="Featured Projects" 
            subtitle="A showcase of my recent work spanning web development, mobile applications, and creative coding projects." 
            isDark={isDarkMode} 
            currentTheme={currentTheme} 
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.slice(0, 3).map((project, index) => (
              <motion.div
                key={project.id}
                className="bg-bg-card border border-border-primary rounded-xl p-6 hover:shadow-lg transition-shadow"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: motionTokens.duration.slow / 1000, delay: 0.1 + index * 0.1 }}
              >
                <h3 className="text-xl font-semibold mb-3 text-text-primary">{project.title}</h3>
                <p className="text-text-secondary mb-4">
                  {project.description}
                </p>
                <Link
                  to={`/projects`}
                  className="text-accent-primary hover:text-accent-hover transition-colors"
                >
                  View Project →
                </Link>
              </motion.div>
            ))}
          </div>

          <motion.div
            className="text-center mt-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: motionTokens.duration.slow / 1000, delay: 0.4 }}
          >
            <Link
              to="/projects"
              className="btn-primary"
            >
              View All Projects
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Photography Teaser */}
      <section className="py-24 bg-bg-surface">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <SectionTitle 
            title="Photography" 
            subtitle="Capturing moments and stories through the lens. From street photography to landscape shots, each image tells a unique story." 
            isDark={isDarkMode} 
            currentTheme={currentTheme} 
          />

          <PhotographyGallery limit={6} />

          <motion.div
            className="text-center mt-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: motionTokens.duration.slow / 1000, delay: 0.2 }}
          >
            <Link
              to="/photography"
              className="btn-secondary"
            >
              View Gallery
            </Link>
          </motion.div>
        </div>
      </section>

      {/* About Teaser */}
      <section className="py-24 bg-primary">
        <div className="max-w-4xl mx-auto px-6 md:px-8 text-center">
          <SectionTitle 
            title="About Me" 
            subtitle="I'm a passionate developer with a love for creating digital experiences that matter. When I'm not coding, you'll find me exploring new places with my camera or diving deep into the latest technology trends." 
            isDark={isDarkMode} 
            currentTheme={currentTheme} 
          />
          <Link
            to="/about"
            className="btn-primary"
          >
            Read My Story
          </Link>
        </div>
      </section>
    </Page>
  );
}

export default Home;