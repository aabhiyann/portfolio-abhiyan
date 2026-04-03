import { motion } from "framer-motion";
import { motionTokens } from "../utils/motion";
import React from "react";
import { Link } from "react-router-dom";
import Page from "../components/Page";
import SectionTitle from "../components/SectionTitle";
import SEO from "../components/SEO";
import { SafeImage } from "../components/ui";

// Testimonials removed to focus on data-driven impact
import VisualTimeline from "../components/VisualTimeline";
import ContactSection from "../components/ContactSection";
import SkillsMatrix from "../components/SkillsMatrix";
import { experiences } from "../data/experience";

function About() {
  const passions = [
    {
      title: "System Architecture",
      description:
        "I bias toward systems that are easy to debug, cheap to run, and clear about failure modes.",
    },
    {
      title: "AI & ML in Production",
      description:
        "I’ve shipped retrieval, forecasting, and anomaly-detection work behind real APIs and product flows.",
    },
    {
      title: "Teaching & Mentorship",
      description:
        "I taught algorithms to 60+ graduate students and care a lot about making technical ideas clear and useful.",
    },
  ];

  return (
    <Page>
      <SEO
        title="About | Abhiyan Sainju"
        description="Software Engineer based in Washington, DC. M.S. Computer Science, GWU. Builds full-stack systems with AI/ML."
      />
      {/* Hero Section */}
      <section className="relative py-24 min-h-[80vh] flex items-center font-heading overflow-hidden">
        <div className="absolute inset-0 bg-accent-primary/5 opacity-30 pointer-events-none" />
        <div className="relative z-20 w-full">
          <div className="max-w-[90rem] mx-auto px-6 md:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: motionTokens.duration.slow / 1000 }}
              >
                <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6 font-heading text-text-primary leading-tight">
                  I build software <br />
                  <span className="text-accent-primary font-display italic">
                    that ships.
                  </span>
                </h1>

                <div className="space-y-4 text-text-secondary leading-relaxed">
                  <p>
                    I'm Abhiyan, a software engineer based in Washington, DC,
                    originally from Nepal. I recently finished my MS in Computer
                    Science at GWU, where I focused on algorithms, distributed
                    systems, and machine learning.
                  </p>
                  <p>
                    At GWU, I taught Design & Analysis of Algorithms to 60+
                    graduate students across four sections, helped standardize
                    TA training, and worked with faculty on course material
                    rooted in real optimization problems.
                  </p>
                  <p>
                    My recent work spans cloud-cost forecasting, document chat
                    with citations, and real-time collaboration systems. I care
                    about software that is reliable, fast to use, and clear
                    about the problems it solves.
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
                <div className="aspect-[4/5] rounded-2xl bg-card/40 backdrop-blur-md border border-border-primary/50 relative overflow-hidden shadow-2xl hover:shadow-accent-primary/20 transition-all duration-500 group/portrait">
                  <SafeImage
                    src="/images/about/portrait.jpg"
                    alt="Abhiyan Sainju"
                    loading="eager"
                    fetchPriority="high"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover/portrait:scale-105"
                    fallback="/images/placeholder-portrait.png"
                  />
                  {/* Glassy overlay on hover - like photography gallery */}
                  <div className="absolute inset-0 gradient-overlay-image-light opacity-0 group-hover/portrait:opacity-100 transition-opacity duration-500 backdrop-blur-[2px]"></div>
                  <div className="absolute bottom-8 left-8 text-white opacity-0 group-hover/portrait:opacity-100 transition-opacity duration-500">
                    <h3 className="text-3xl font-bold text-white drop-shadow-2xl">
                      Abhiyan Sainju
                    </h3>
                    <p className="text-white/95 mt-1 drop-shadow-2xl">
                      React, Python, FastAPI, and applied ML
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Engineering Career */}
      <section className="py-24 bg-bg-primary">
        <div className="max-w-[90rem] mx-auto px-6 md:px-8">
          <SectionTitle
            title="Experience"
            subtitle="Roles, projects, and milestones in order."
          />
          <VisualTimeline
            items={experiences.map((exp) => ({
              year: exp.dates,
              title: `${exp.role} @ ${exp.company}`,
              description: exp.description,
              location: exp.location,
              achievements: exp.achievements, // Pass achievements for display
            }))}
          />
        </div>
      </section>

      {/* Engineering Philosophy */}
      <section className="py-24 bg-bg-surface/50">
        <div className="max-w-[90rem] mx-auto px-6 md:px-8">
          <SectionTitle
            title="Skills"
            subtitle="Languages, frameworks, and tools used across projects."
          />
          <SkillsMatrix />
        </div>
      </section>

      {/* Engineering Philosophy */}
      <section className="py-24 bg-bg-primary">
        <div className="max-w-[90rem] mx-auto px-6 md:px-8">
          <SectionTitle
            title="How I Work"
            subtitle="The tradeoffs I optimize for when building production systems."
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {passions.map((passion, index) => (
              <motion.div
                key={index}
                className="bg-card backdrop-blur-md rounded-2xl p-6 border border-border-primary hover:border-accent-primary/30 transition-all duration-300"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: motionTokens.duration.slow / 1000,
                  delay: index * 0.1,
                }}
              >
                <h3 className="text-lg font-bold text-text-primary mb-3">
                  {passion.title}
                </h3>
                <p className="text-text-muted text-sm leading-relaxed">
                  {passion.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Beyond Code - Photography Only */}
      <section className="py-24 bg-bg-primary">
        <div className="max-w-[90rem] mx-auto px-6 md:px-8">
          <SectionTitle
            title="Photography"
            subtitle="Street and urban photography."
          />

          {/* Photo Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
            <motion.div
              className="aspect-square rounded-xl overflow-hidden group cursor-pointer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              whileHover={{ y: -4 }}
            >
              <SafeImage
                src="/images/photography/IMG_9398Ben-Ben-2.webp"
                alt="Photography sample 1"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </motion.div>

            <motion.div
              className="aspect-square rounded-xl overflow-hidden group cursor-pointer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              whileHover={{ y: -4 }}
            >
              <SafeImage
                src="/images/photography/IMG_7916Ben-Ben-2.webp"
                alt="Photography sample 2"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </motion.div>

            <motion.div
              className="aspect-square rounded-xl overflow-hidden group cursor-pointer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              whileHover={{ y: -4 }}
            >
              <SafeImage
                src="/images/photography/IMG_6544PatKay.webp"
                alt="Photography sample 3"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </motion.div>

            <motion.div
              className="aspect-square rounded-xl overflow-hidden group cursor-pointer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              whileHover={{ y: -4 }}
            >
              <SafeImage
                src="/images/photography/IMG_0566.webp"
                alt="Photography sample 4"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </motion.div>
          </div>

          {/* Description and CTA */}
          <motion.div
            className="text-center max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <p className="text-text-muted mb-6 leading-relaxed">
              Outside of code I shoot with a camera. It keeps the eye sharp and
              the patience intact.
            </p>
            <a
              href="/photography"
              className="inline-flex items-center gap-2 px-6 py-3 bg-accent-primary text-white rounded-lg font-medium hover:bg-accent-primary/90 transition-colors"
            >
              View Full Gallery
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </a>
          </motion.div>
        </div>
      </section>

      <ContactSection />
    </Page>
  );
}

export default About;
