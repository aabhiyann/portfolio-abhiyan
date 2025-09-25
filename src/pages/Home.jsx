import { Link } from "react-router-dom";
// import { motion } from "framer-motion";
import { motionTokens } from "../utils/motion";
import TestTailwind from "../components/TestTailwind";

function Home() {
  return (
    <>
      <TestTailwind />
      {/* Hero Section */}
      <section
        id="hero"
        className="relative min-h-[80vh] flex items-center justify-center overflow-hidden"
      >
        {/* Background Image with Gradient Overlay */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 z-10 bg-gradient-to-t from-stone-50 via-stone-50/50 to-stone-50/20 dark:from-gray-900 dark:via-gray-900/50 dark:to-gray-900/20"></div>
          {/* Placeholder for hero image - replace with actual photo */}
          <div className="w-full h-full bg-gradient-to-br from-orange-200/20 to-blue-200/20"></div>
        </div>

        {/* Hero Content */}
        <div className="relative z-20 text-center max-w-4xl mx-auto px-6">
          <motion.h1
            className="text-6xl md:text-7xl font-bold tracking-tight mb-6 text-gray-900 dark:text-gray-100"
            style={{ fontFamily: "var(--font-family-heading)" }}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: motionTokens.duration.slow / 1000 }}
          >
            Hi, I'm Abhiyan.
          </motion.h1>

          <motion.p
            className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto text-gray-600 dark:text-gray-400"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: motionTokens.duration.slow / 1000,
              delay: 0.2,
            }}
          >
            Software Engineer | Cloud + AI Enthusiast | Photographer
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
            <Link to="/projects" className="btn-primary">
              View Projects
            </Link>
            <Link to="/photography" className="btn-ghost">
              See Photography
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Projects Teaser */}
      <section id="projects" className="py-24">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <motion.h2
            className="text-4xl md:text-5xl font-bold tracking-tight text-text-light dark:text-text-dark mb-10 font-heading"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: motionTokens.duration.slow / 1000 }}
          >
            Featured Projects
          </motion.h2>

          {/* Projects Grid - Top 3 */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Project Cards will be implemented in Projects section */}
            <div className="bg-surface-light dark:bg-surface-dark rounded-2xl p-6 border border-black/5 dark:border-white/10">
              <h3 className="text-xl font-semibold text-text-light dark:text-text-dark mb-3">
                InfraSight
              </h3>
              <p className="text-muted-light dark:text-muted-dark mb-4">
                Cloud infrastructure monitoring and analytics platform
              </p>
              <div className="flex gap-2 mb-4">
                <span className="chip">React</span>
                <span className="chip">Node.js</span>
                <span className="chip">AWS</span>
              </div>
              <div className="flex gap-3">
                <a
                  href="#"
                  className="text-accent hover:text-accent-ink transition-colors"
                >
                  GitHub
                </a>
                <a
                  href="#"
                  className="text-accent hover:text-accent-ink transition-colors"
                >
                  Live
                </a>
              </div>
            </div>

            <div className="bg-surface-light dark:bg-surface-dark rounded-2xl p-6 border border-black/5 dark:border-white/10">
              <h3 className="text-xl font-semibold text-text-light dark:text-text-dark mb-3">
                MelodyHub
              </h3>
              <p className="text-muted-light dark:text-muted-dark mb-4">
                Music discovery and playlist management app
              </p>
              <div className="flex gap-2 mb-4">
                <span className="chip">Vue.js</span>
                <span className="chip">Python</span>
                <span className="chip">Spotify API</span>
              </div>
              <div className="flex gap-3">
                <a
                  href="#"
                  className="text-accent hover:text-accent-ink transition-colors"
                >
                  GitHub
                </a>
                <a
                  href="#"
                  className="text-accent hover:text-accent-ink transition-colors"
                >
                  Live
                </a>
              </div>
            </div>

            <div className="bg-surface-light dark:bg-surface-dark rounded-2xl p-6 border border-black/5 dark:border-white/10">
              <h3 className="text-xl font-semibold text-text-light dark:text-text-dark mb-3">
                TalkifyDocs
              </h3>
              <p className="text-muted-light dark:text-muted-dark mb-4">
                AI-powered document summarization tool
              </p>
              <div className="flex gap-2 mb-4">
                <span className="chip">React</span>
                <span className="chip">OpenAI</span>
                <span className="chip">TypeScript</span>
              </div>
              <div className="flex gap-3">
                <a
                  href="#"
                  className="text-accent hover:text-accent-ink transition-colors"
                >
                  GitHub
                </a>
                <a
                  href="#"
                  className="text-accent hover:text-accent-ink transition-colors"
                >
                  Live
                </a>
              </div>
            </div>
          </div>

          <div className="text-center mt-12">
            <Link to="/projects" className="btn-ghost">
              View All Projects
            </Link>
          </div>
        </div>
      </section>

      {/* Photography Teaser */}
      <section
        id="photography"
        className="py-24 bg-surface-light dark:bg-surface-dark"
      >
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <motion.h2
            className="text-4xl md:text-5xl font-bold tracking-tight text-text-light dark:text-text-dark mb-10 font-heading"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: motionTokens.duration.slow / 1000 }}
          >
            Photography
          </motion.h2>

          {/* Photography Masonry Preview - First 6 images */}
          <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 [column-fill:_balance]">
            {/* This will show a preview of the photography gallery */}
            <div className="mb-4 break-inside-avoid rounded-2xl overflow-hidden bg-surface-light dark:bg-surface-dark border border-black/5 dark:border-white/10">
              <div className="aspect-[4/5] bg-gradient-to-br from-accent/20 to-blue-500/20"></div>
            </div>
            <div className="mb-4 break-inside-avoid rounded-2xl overflow-hidden bg-surface-light dark:bg-surface-dark border border-black/5 dark:border-white/10">
              <div className="aspect-[3/4] bg-gradient-to-br from-green-500/20 to-accent/20"></div>
            </div>
            <div className="mb-4 break-inside-avoid rounded-2xl overflow-hidden bg-surface-light dark:bg-surface-dark border border-black/5 dark:border-white/10">
              <div className="aspect-[4/3] bg-gradient-to-br from-blue-500/20 to-purple-500/20"></div>
            </div>
          </div>

          <div className="text-center mt-12">
            <Link to="/photography" className="btn-primary">
              View Full Gallery
            </Link>
          </div>
        </div>
      </section>

      {/* About Teaser */}
      <section id="about" className="py-24">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: motionTokens.duration.slow / 1000 }}
            >
              <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-text-light dark:text-text-dark mb-6 font-heading">
                About Me
              </h2>
              <p className="text-lg text-muted-light dark:text-muted-dark mb-6">
                I'm a passionate software engineer who loves building innovative
                solutions and capturing the world through photography. My
                journey has taken me from Kathmandu to Washington D.C., where I
                now work on cloud infrastructure and AI applications.
              </p>
              <p className="text-lg text-muted-light dark:text-muted-dark mb-8">
                When I'm not coding, you'll find me exploring new places with my
                camera, cheering for FC Barcelona, or diving deep into the
                latest tech trends.
              </p>
              <Link to="/about" className="btn-primary">
                Learn More About My Journey
              </Link>
            </motion.div>

            <motion.div
              className="relative"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: motionTokens.duration.slow / 1000 }}
            >
              {/* Placeholder for portrait image */}
              <div className="aspect-square rounded-2xl bg-gradient-to-br from-accent/30 to-blue-500/30 border border-black/5 dark:border-white/10"></div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Home;
