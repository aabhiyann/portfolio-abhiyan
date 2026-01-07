import { motion } from "framer-motion";
import { motionTokens } from "../utils/Motion";
import Page from "../components/Page";
import SectionTitle from "../components/SectionTitle";
import SEO from "../components/SEO";

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
        "Designing scalable, fault-tolerant systems. From microservices to async pipelines, I build for production.",
    },
    {
      title: "AI & ML in Production",
      description:
        "Building RAG pipelines, ML forecasting, and anomaly detection. Not just notebooks, but deployed systems.",
    },
    {
      title: "Teaching & Mentorship",
      description:
        "Teaching algorithms to 60+ grad students. If I can't explain it simply, I don't understand it well enough.",
    },
  ];

  return (
    <Page>
      <SEO
        title="About Abhiyan Sainju | Software Engineer"
        description="A Software Engineer based in Washington, DC, with a passion for scalable architecture and AI integration."
      />
      {/* Hero Section */}
      <section className="relative py-24 min-h-[80vh] flex items-center font-heading overflow-hidden">
        <div className="absolute inset-0 bg-accent-primary/5 opacity-30 pointer-events-none" />
        <div className="relative z-20 w-full">
          <div className="max-w-7xl mx-auto px-6 md:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: motionTokens.duration.slow / 1000 }}
              >
                <h1 className="text-5xl md:text-6xl font-bold tracking-tight mb-8 font-heading theme-text-primary leading-tight">
                  I don't just write code. <br />
                  <span className="gradient-text">I solve problems.</span>
                </h1>

                <div className="space-y-6 text-lg text-text-muted leading-relaxed">
                  <p>
                    I'm Abhiyan, a <strong>Software Engineer</strong> and MS CS
                    Graduate from{" "}
                    <strong className="text-text-primary">GWU (4.0 GPA)</strong>
                    . Building reliable systems is my craft.
                  </p>

                  <div>
                    <strong className="block text-text-primary text-xl mb-1">
                      The Problem Solver
                    </strong>
                    <p>
                      When I saw DevOps teams spending hours analyzing AWS
                      bills, I built <em>InfraSight</em>, an ML platform that
                      cut analysis time by 70%. I believe software should kill
                      inefficiencies.
                    </p>
                  </div>

                  <div>
                    <strong className="block text-text-primary text-xl mb-1">
                      The Teacher
                    </strong>
                    <p>
                      As a TA for Design & Analysis of Algorithms, I don't just
                      grade. I transform how students think. My interactive
                      tutorials helped improve midterm scores by 22%. If I can't
                      explain it simply, I don't understand it well enough.
                    </p>
                  </div>

                  <div>
                    <strong className="block text-text-primary text-xl mb-1">
                      The Builder
                    </strong>
                    <p>
                      I've shipped 5 production apps with real users. Not
                      textbook exercises: actual products. From real-time music
                      platforms to AI document assistants, I build end-to-end.
                    </p>
                  </div>
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
                  <img
                    src="/images/about/portrait.jpg"
                    alt="Abhiyan Sainju"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover/portrait:scale-105"
                  />
                  {/* Glassy overlay on hover - like photography gallery */}
                  <div className="absolute inset-0 gradient-overlay-image-light opacity-0 group-hover/portrait:opacity-100 transition-opacity duration-500 backdrop-blur-[2px]"></div>
                  <div className="absolute bottom-8 left-8 text-white opacity-0 group-hover/portrait:opacity-100 transition-opacity duration-500">
                    <div className="text-sm font-mono text-accent-primary mb-2 drop-shadow-2xl">
                      Portfolio Established 2024
                    </div>
                    <h3 className="text-3xl font-bold text-white drop-shadow-2xl">
                      Abhiyan Sainju
                    </h3>
                    <p className="text-white/95 mt-1 drop-shadow-2xl">
                      Full-Stack & ML Engineer
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* By The Numbers */}
      <section className="py-12 border-y border-border-primary/50 bg-bg-surface/30">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { label: "ML Accuracy", value: "92%" },
              { label: "Users Served", value: "1,200+" },
              { label: "Students Taught", value: "60+" },
              { label: "GPA @ GWU", value: "4.0" },
            ].map((stat, i) => (
              <div key={i}>
                <div className="text-4xl font-bold text-text-primary mb-1 font-heading">
                  {stat.value}
                </div>
                <div className="text-sm text-text-muted uppercase tracking-wider">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Engineering Career */}
      <section className="py-24 bg-bg-primary">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <SectionTitle
            title="My Journey"
            subtitle="From identifying problems to shipping solutions. Here's my path so far."
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
        <div className="max-w-6xl mx-auto px-6 md:px-8">
          <SectionTitle
            title="Technical Arsenal"
            subtitle="My primary stack for building scalable applications. Hover to see them in action."
          />
          <SkillsMatrix />
        </div>
      </section>

      {/* Engineering Philosophy */}
      <section className="py-24 bg-bg-primary">
        <div className="max-w-6xl mx-auto px-6 md:px-8">
          <SectionTitle
            title="Engineering Philosophy"
            subtitle="The core principles that drive my development and design decisions."
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

      <ContactSection />
    </Page>
  );
}

export default About;
