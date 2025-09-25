import { Link } from "react-router-dom";
import { motion } from "framer-motion"; // eslint-disable-line no-unused-vars
import { motionTokens } from "../utils/motion";
import { colorUtils } from "../design/colors";

function Home({ isDark = false, currentTheme = 'default' }) {
  return (
    <>
      {/* Hero Section */}
      <section
        id="hero"
        className="relative min-h-[80vh] flex items-center justify-center overflow-hidden"
        style={{
          backgroundColor: colorUtils.getThemeColor('background', isDark, currentTheme),
        }}
      >
        {/* Background Image with Gradient Overlay */}
        <div className="absolute inset-0 z-0">
          <div 
            className="absolute inset-0 z-10 bg-gradient-to-t"
            style={{
              background: `linear-gradient(to top, ${colorUtils.getThemeColor('background', isDark, currentTheme)}, ${colorUtils.getThemeColor('background', isDark, currentTheme)}80, ${colorUtils.getThemeColor('background', isDark, currentTheme)}33)`
            }}
          ></div>
          {/* Placeholder for hero image - replace with actual photo */}
          <div 
            className="w-full h-full bg-gradient-to-br"
            style={{
              background: `linear-gradient(135deg, ${colorUtils.getAccentColor('primary', isDark, currentTheme)}33, ${colorUtils.getAccentColor('secondary', isDark, currentTheme)}33)`
            }}
          ></div>
        </div>

        {/* Hero Content */}
        <div className="relative z-20 text-center max-w-4xl mx-auto px-6">
          <motion.h1
            className="text-6xl md:text-7xl font-bold tracking-tight mb-6"
            style={{ 
              fontFamily: "var(--font-family-heading)",
              color: colorUtils.getThemeColor('text', isDark, currentTheme)
            }}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: motionTokens.duration.slow / 1000 }}
          >
            Hi, I'm Abhiyan.
          </motion.h1>

          <motion.p
            className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto"
            style={{
              color: colorUtils.getThemeColor('textSecondary', isDark, currentTheme)
            }}
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
      <section 
        id="projects" 
        className="py-24"
        style={{
          backgroundColor: colorUtils.getThemeColor('background', isDark, currentTheme),
        }}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-8 text-center">
          <motion.h2
            className="text-4xl md:text-5xl font-bold tracking-tight mb-10 font-heading"
            style={{
              color: colorUtils.getThemeColor('text', isDark, currentTheme)
            }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Featured Projects
          </motion.h2>

          {/* Projects Grid - Top 3 */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div 
              className="rounded-2xl p-6 border"
              style={{
                backgroundColor: colorUtils.getThemeColor('card', isDark, currentTheme),
                borderColor: colorUtils.getThemeColor('border', isDark, currentTheme),
              }}
            >
              <h3 
                className="text-xl font-semibold mb-3"
                style={{
                  color: colorUtils.getThemeColor('text', isDark, currentTheme)
                }}
              >
                InfraSight
              </h3>
              <p 
                className="mb-4"
                style={{
                  color: colorUtils.getThemeColor('textSecondary', isDark, currentTheme)
                }}
              >
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
                  className="transition-colors"
                  style={{
                    color: colorUtils.getSemanticColor('link', isDark, currentTheme)
                  }}
                >
                  GitHub
                </a>
                <a
                  href="#"
                  className="transition-colors"
                  style={{
                    color: colorUtils.getSemanticColor('link', isDark, currentTheme)
                  }}
                >
                  Live
                </a>
              </div>
            </div>

            <div 
              className="rounded-2xl p-6 border"
              style={{
                backgroundColor: colorUtils.getThemeColor('card', isDark, currentTheme),
                borderColor: colorUtils.getThemeColor('border', isDark, currentTheme),
              }}
            >
              <h3 
                className="text-xl font-semibold mb-3"
                style={{
                  color: colorUtils.getThemeColor('text', isDark, currentTheme)
                }}
              >
                MelodyHub
              </h3>
              <p 
                className="mb-4"
                style={{
                  color: colorUtils.getThemeColor('textSecondary', isDark, currentTheme)
                }}
              >
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
                  className="transition-colors"
                  style={{
                    color: colorUtils.getSemanticColor('link', isDark, currentTheme)
                  }}
                >
                  GitHub
                </a>
                <a
                  href="#"
                  className="transition-colors"
                  style={{
                    color: colorUtils.getSemanticColor('link', isDark, currentTheme)
                  }}
                >
                  Live
                </a>
              </div>
            </div>

            <div 
              className="rounded-2xl p-6 border"
              style={{
                backgroundColor: colorUtils.getThemeColor('card', isDark, currentTheme),
                borderColor: colorUtils.getThemeColor('border', isDark, currentTheme),
              }}
            >
              <h3 
                className="text-xl font-semibold mb-3"
                style={{
                  color: colorUtils.getThemeColor('text', isDark, currentTheme)
                }}
              >
                TalkifyDocs
              </h3>
              <p 
                className="mb-4"
                style={{
                  color: colorUtils.getThemeColor('textSecondary', isDark, currentTheme)
                }}
              >
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
                  className="transition-colors"
                  style={{
                    color: colorUtils.getSemanticColor('link', isDark, currentTheme)
                  }}
                >
                  GitHub
                </a>
                <a
                  href="#"
                  className="transition-colors"
                  style={{
                    color: colorUtils.getSemanticColor('link', isDark, currentTheme)
                  }}
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
        className="py-24"
        style={{
          backgroundColor: colorUtils.getThemeColor('surface', isDark, currentTheme),
        }}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-8 text-center">
          <motion.h2
            className="text-4xl md:text-5xl font-bold tracking-tight mb-10 font-heading"
            style={{
              color: colorUtils.getThemeColor('text', isDark, currentTheme)
            }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Photography
          </motion.h2>

          {/* Photography Masonry Preview - First 6 images */}
          <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 [column-fill:_balance]">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <div 
                key={i}
                className="mb-4 break-inside-avoid rounded-2xl overflow-hidden border"
                style={{
                  backgroundColor: colorUtils.getThemeColor('card', isDark, currentTheme),
                  borderColor: colorUtils.getThemeColor('border', isDark, currentTheme),
                }}
              >
                <div 
                  className="aspect-[4/3]"
                  style={{
                    background: `linear-gradient(135deg, ${colorUtils.getAccentColor('primary', isDark, currentTheme)}20, ${colorUtils.getAccentColor('secondary', isDark, currentTheme)}20)`
                  }}
                ></div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link to="/photography" className="btn-primary">
              View Full Gallery
            </Link>
          </div>
        </div>
      </section>

      {/* About Teaser */}
      <section 
        id="about" 
        className="py-24"
        style={{
          backgroundColor: colorUtils.getThemeColor('background', isDark, currentTheme),
        }}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-8 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: motionTokens.duration.slow / 1000 }}
          >
            <h2 
              className="text-4xl md:text-5xl font-bold tracking-tight mb-6 font-heading"
              style={{
                color: colorUtils.getThemeColor('text', isDark, currentTheme)
              }}
            >
              About Me
            </h2>
            <p 
              className="text-lg mb-6"
              style={{
                color: colorUtils.getThemeColor('textSecondary', isDark, currentTheme)
              }}
            >
              I'm a passionate software engineer who loves building innovative
              solutions and capturing the world through photography. My
              journey has taken me from Kathmandu to Washington D.C., where I
              now work on cloud infrastructure and AI applications.
            </p>
            <p 
              className="text-lg mb-8"
              style={{
                color: colorUtils.getThemeColor('textSecondary', isDark, currentTheme)
              }}
            >
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
            transition={{ duration: motionTokens.duration.slow / 1000, delay: 0.2 }}
          >
            {/* Portrait Image Placeholder */}
            <div 
              className="aspect-square w-full rounded-2xl overflow-hidden relative"
              style={{
                background: `linear-gradient(135deg, ${colorUtils.getAccentColor('primary', isDark, currentTheme)}20, ${colorUtils.getAccentColor('secondary', isDark, currentTheme)}20)`
              }}
            >
              <img
                src="/images/about/about-portrait.webp"
                alt="Abhiyan Sainju Portrait"
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className="absolute bottom-6 left-6 text-white">
                <h3 className="text-xl font-semibold">Abhiyan Sainju</h3>
                <p className="text-white/80">
                  Software Engineer & Photographer
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}

export default Home;