import { Link } from "react-router-dom";
import { motion } from "framer-motion"; 
import { motionTokens } from "../utils/motion";
import Page from "../components/Page";
import { useTheme } from "../contexts/useTheme";
import { colorUtils } from "../design/colors";
import SectionTitle from "../components/SectionTitle";

function About() {
  const { themeState } = useTheme();
  const { isDarkMode, currentTheme } = themeState;
  const timeline = [
    {
      year: "2021",
      title: "Started Photography Journey",
      description:
        "Began capturing moments with Canon EOS 750D, exploring the art of visual storytelling.",
      location: "Kathmandu, Nepal",
    },
    {
      year: "2022",
      title: "Software Engineering Career",
      description:
        "Started my journey as a software engineer, focusing on cloud infrastructure and AI applications.",
      location: "Kathmandu, Nepal",
    },
    {
      year: "2023",
      title: "Moved to Washington D.C.",
      description:
        "Relocated to the U.S. capital to pursue advanced opportunities in cloud computing and AI.",
      location: "Washington D.C., USA",
    },
    {
      year: "2024",
      title: "iPhone 15 Pro Max Era",
      description:
        "Upgraded to iPhone 15 Pro Max, capturing daily life with professional-grade mobile photography.",
      location: "Washington D.C., USA",
    },
    {
      year: "2025",
      title: "Portfolio Launch",
      description:
        "Created this comprehensive portfolio showcasing both technical skills and artistic vision.",
      location: "Washington D.C., USA",
    },
  ];

  const funFacts = [
    {
      icon: "⚽",
      title: "FC Barcelona Fan",
      description:
        "Die-hard supporter since childhood. Messi's departure broke my heart, but the passion remains!",
    },
    {
      icon: "📷",
      title: "Photography Obsessed",
      description:
        "Always carrying a camera. My iPhone has over 10,000 photos from the past year alone.",
    },
    {
      icon: "🌍",
      title: "Travel Enthusiast",
      description:
        "From the Himalayas to the Potomac River, I love exploring new places and cultures.",
    },
    {
      icon: "☁️",
      title: "Cloud Architecture",
      description:
        "Building scalable systems on AWS, Azure, and GCP. Infrastructure as code is my passion.",
    },
    {
      icon: "🤖",
      title: "AI Explorer",
      description:
        "Experimenting with machine learning models and building AI-powered applications.",
    },
    {
      icon: "💻",
      title: "Open Source",
      description:
        "Contributing to various open-source projects and sharing knowledge with the community.",
    },
  ];

  return (
    <Page>
      {/* Hero Section */}
      <section 
        className="py-24"
        style={{
          backgroundColor: colorUtils.getThemeColor('background', isDarkMode, currentTheme),
        }}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: motionTokens.duration.slow / 1000 }}
            >
              <h1 
                className="text-5xl md:text-6xl font-bold tracking-tight mb-6 font-heading"
                style={{
                  color: colorUtils.getThemeColor('text', isDarkMode, currentTheme)
                }}
              >
                About Me
              </h1>

              <div 
                className="prose prose-lg max-w-none"
                style={{
                  color: colorUtils.getThemeColor('textSecondary', isDarkMode, currentTheme)
                }}
              >
                <p className="text-xl mb-6">
                  I'm a passionate software engineer and photographer based in
                  Washington D.C., originally from the vibrant city of
                  Kathmandu, Nepal.
                </p>

                <p className="mb-6">
                  My journey in technology began with a curiosity about how
                  things work, which led me to pursue software engineering with
                  a focus on cloud infrastructure and artificial intelligence. I
                  believe in building solutions that not only solve problems but
                  also create meaningful impact.
                </p>

                <p className="mb-6">
                  When I'm not coding, you'll find me with a camera in hand,
                  capturing the world around me. Photography has taught me to
                  see beauty in everyday moments and to appreciate the stories
                  that unfold in front of my lens.
                </p>

                <p>
                  I'm always excited to collaborate on innovative projects,
                  discuss the latest in tech, or share stories about our
                  favorite football club (Visca Barça!).
                </p>
              </div>
            </motion.div>

            <motion.div
              className="relative"
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{
                duration: motionTokens.duration.slow / 1000,
                delay: 0.2,
              }}
            >
              {/* Portrait Image Placeholder */}
              <div className="aspect-square rounded-2xl bg-gradient-to-br from-accent/30 to-blue-500/30 border border-black/5 dark:border-white/10 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                <div className="absolute bottom-6 left-6 text-white">
                  <h3 className="text-xl font-semibold">Abhiyan Sainju</h3>
                  <p className="text-white/80">
                    Software Engineer & Photographer
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Journey Timeline */}
      <section className="py-24 bg-surface-light dark:bg-surface-dark">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <SectionTitle title="My Journey" isDark={isDarkMode} currentTheme={currentTheme} />

          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-accent/20"></div>

            <div className="space-y-12">
              {timeline.map((item, index) => (
                <motion.div
                  key={index}
                  className="relative flex items-start gap-8"
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: motionTokens.duration.slow / 1000,
                    delay: index * 0.1,
                  }}
                >
                  {/* Timeline Dot */}
                  <div className="relative z-10 flex-shrink-0 w-16 h-16 bg-accent rounded-full flex items-center justify-center">
                    <div className="w-3 h-3 bg-white rounded-full"></div>
                  </div>

                  {/* Content */}
                  <div className="flex-1 pt-2">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                      <h3 className="text-xl font-semibold text-text-light dark:text-text-dark">
                        {item.title}
                      </h3>
                      <span className="text-accent font-medium">
                        {item.year}
                      </span>
                    </div>
                    <p className="text-muted-light dark:text-muted-dark mb-2">
                      {item.description}
                    </p>
                    <p className="text-sm text-muted-light dark:text-muted-dark">
                      📍 {item.location}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Fun Facts */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <SectionTitle title="Fun Facts" isDark={isDarkMode} currentTheme={currentTheme} />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {funFacts.map((fact, index) => (
              <motion.div
                key={index}
                className="bg-surface-light dark:bg-surface-dark rounded-2xl p-6 border border-black/5 dark:border-white/10 hover:shadow-lg transition-all duration-300"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: motionTokens.duration.slow / 1000,
                  delay: index * 0.1,
                }}
              >
                <div className="text-4xl mb-4">{fact.icon}</div>
                <h3 className="text-xl font-semibold text-text-light dark:text-text-dark mb-3">
                  {fact.title}
                </h3>
                <p className="text-muted-light dark:text-muted-dark">
                  {fact.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-surface-light dark:bg-surface-dark">
        <div className="max-w-4xl mx-auto px-6 md:px-8 text-center">
          <SectionTitle title="Let's Connect" isDark={isDarkMode} currentTheme={currentTheme} />
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: motionTokens.duration.slow / 1000 }}
          >
            <p className="text-xl text-muted-light dark:text-muted-dark mb-8">
              I'm always excited to collaborate on innovative projects, discuss
              technology, or share stories about photography and FC Barcelona!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="mailto:abhiyan@example.com" className="btn-primary">
                Get In Touch
              </a>
              <Link to="/photography" className="btn-ghost">
                View My Photography
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </Page>
  );
}

export default About;
