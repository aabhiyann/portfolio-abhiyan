import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { motionTokens } from "../utils/Motion";
import Page from "../components/Page";
import SectionTitle from "../components/SectionTitle";
import SEO from '../components/SEO';

function About() {
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
      <SEO 
        title='About Abhiyan Sainju | Software Engineer' 
        description='A Software Engineer based in Washington, DC, with a passion for scalable architecture and AI integration.' 
      />
      {/* Hero Section */}
      <section
        className="relative py-24 min-h-screen flex items-center"
        style={{ backgroundColor: "#000000" }}
      >
        <div className="relative z-20 w-full">
          <div className="max-w-7xl mx-auto px-6 md:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: motionTokens.duration.slow / 1000 }}
              >
                <h1 className="text-5xl md:text-6xl font-bold tracking-tight mb-6 font-heading text-white">
                  About Me
                </h1>

                <div className="prose prose-lg max-w-none text-white/80">
                  <p className="text-xl mb-6">
                    I am a Software Engineer based in Washington, DC, with a
                    passion for scalable architecture and AI integration.
                  </p>

                  <p className="mb-6">
                    My journey began in Kathmandu, where I led digital
                    transformations as an IT Lead, but my curiosity for code
                    drove me to software engineering. Now, I specialize in
                    building SaaS platforms that solve expensive problems—whether
                    that's cutting cloud costs by 70% or reducing document
                    analysis time by half.
                  </p>

                  <p>
                    When I'm not building RAG architectures or optimizing React
                    renders, I'm teaching Algorithms to graduate students at
                    George Washington University.
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
                <div className="aspect-square rounded-2xl bg-gradient-to-br from-white/15 to-white/5 border border-white/20 relative overflow-hidden backdrop-blur-md shadow-xl shadow-black/20 before:absolute before:inset-0 before:bg-gradient-to-br before:from-white/10 before:via-transparent before:to-transparent before:pointer-events-none">
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
        </div>
      </section>

      {/* Journey Timeline */}
      <section className="py-24" style={{ backgroundColor: "#000000" }}>
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <SectionTitle
            title="My Journey"
            subtitle="A timeline of my journey through technology and photography"
          />

          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-white/20"></div>

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
                  <div className="relative z-10 flex-shrink-0 w-16 h-16 bg-white/10 backdrop-blur-md border border-white/20 rounded-full flex items-center justify-center shadow-lg shadow-black/10">
                    <div className="w-3 h-3 bg-white rounded-full"></div>
                  </div>

                  {/* Content */}
                  <div className="flex-1 pt-2">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                      <h3 className="text-xl font-semibold text-white">
                        {item.title}
                      </h3>
                      <span className="text-white/80 font-medium">
                        {item.year}
                      </span>
                    </div>
                    <p className="text-white/70 mb-2">{item.description}</p>
                    <p className="text-sm text-white/60">📍 {item.location}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

import Testimonials from "../components/Testimonials";

function About() {
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
      <SEO 
        title='About Abhiyan Sainju | Software Engineer' 
        description='A Software Engineer based in Washington, DC, with a passion for scalable architecture and AI integration.' 
      />
      {/* Hero Section */}
      <section
        className="relative py-24 min-h-screen flex items-center"
        style={{ backgroundColor: "#000000" }}
      >
        <div className="relative z-20 w-full">
          <div className="max-w-7xl mx-auto px-6 md:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: motionTokens.duration.slow / 1000 }}
              >
                <h1 className="text-5xl md:text-6xl font-bold tracking-tight mb-6 font-heading text-white">
                  About Me
                </h1>

                <div className="prose prose-lg max-w-none text-white/80">
                  <p className="text-xl mb-6">
                    I am a Software Engineer based in Washington, DC, with a
                    passion for scalable architecture and AI integration.
                  </p>

                  <p className="mb-6">
                    My journey began in Kathmandu, where I led digital
                    transformations as an IT Lead, but my curiosity for code
                    drove me to software engineering. Now, I specialize in
                    building SaaS platforms that solve expensive problems—whether
                    that's cutting cloud costs by 70% or reducing document
                    analysis time by half.
                  </p>

                  <p>
                    When I'm not building RAG architectures or optimizing React
                    renders, I'm teaching Algorithms to graduate students at
                    George Washington University.
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
                <div className="aspect-square rounded-2xl bg-gradient-to-br from-white/15 to-white/5 border border-white/20 relative overflow-hidden backdrop-blur-md shadow-xl shadow-black/20 before:absolute before:inset-0 before:bg-gradient-to-br before:from-white/10 before:via-transparent before:to-transparent before:pointer-events-none">
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
        </div>
      </section>

      {/* Journey Timeline */}
      <section className="py-24" style={{ backgroundColor: "#000000" }}>
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <SectionTitle
            title="My Journey"
            subtitle="A timeline of my journey through technology and photography"
          />

          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-white/20"></div>

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
                  <div className="relative z-10 flex-shrink-0 w-16 h-16 bg-white/10 backdrop-blur-md border border-white/20 rounded-full flex items-center justify-center shadow-lg shadow-black/10">
                    <div className="w-3 h-3 bg-white rounded-full"></div>
                  </div>

                  {/* Content */}
                  <div className="flex-1 pt-2">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                      <h3 className="text-xl font-semibold text-white">
                        {item.title}
                      </h3>
                      <span className="text-white/80 font-medium">
                        {item.year}
                      </span>
                    </div>
                    <p className="text-white/70 mb-2">{item.description}</p>
                    <p className="text-sm text-white/60">📍 {item.location}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Fun Facts */}
      <section className="py-24" style={{ backgroundColor: "#000000" }}>
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <SectionTitle
            title="Fun Facts"
            subtitle="Some interesting things about me"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {funFacts.map((fact, index) => (
              <motion.div
                key={index}
                className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 hover:shadow-2xl hover:shadow-white/10 hover:border-white/30 hover:bg-white/15 transition-all duration-300 relative overflow-hidden before:absolute before:inset-0 before:bg-gradient-to-br before:from-white/5 before:to-transparent before:pointer-events-none"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: motionTokens.duration.slow / 1000,
                  delay: index * 0.1,
                }}
              >
                <div className="text-4xl mb-4">{fact.icon}</div>
                <h3 className="text-xl font-semibold text-white mb-3">
                  {fact.title}
                </h3>
                <p className="text-white/70">{fact.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Testimonials />

      {/* CTA Section */}
      <section className="py-24" style={{ backgroundColor: "#000000" }}>
        <div className="max-w-4xl mx-auto px-6 md:px-8 text-center">
          <SectionTitle
            title="Let's Connect"
            subtitle="I'm always excited to collaborate and discuss new opportunities"
          />
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: motionTokens.duration.slow / 1000 }}
          >
            <p className="text-xl text-white/80 mb-8">
              I'm always excited to collaborate on innovative projects, discuss
              technology, or share stories about photography and FC Barcelona!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/about"
                className="rounded-full bg-white px-6 py-3 text-sm font-semibold text-black shadow-sm hover:bg-gray-200 transition-colors"
              >
                Get In Touch
              </Link>
              <Link
                to="/photography"
                className="rounded-full bg-white/10 backdrop-blur-md px-6 py-3 text-sm font-semibold text-white shadow-md shadow-black/10 ring-1 ring-inset ring-white/20 hover:bg-white/15 hover:ring-white/30 hover:shadow-lg hover:shadow-white/5 transition-all duration-300"
              >
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
