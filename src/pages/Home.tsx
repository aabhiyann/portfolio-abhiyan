import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { motionTokens } from "../utils/Motion";
import PhotographyGallery from "../components/PhotographyGallery";
import { projects } from "../data/projects";
import { articles } from "../data/Articles";
import Page from "../components/Page";
import SectionTitle from "../components/SectionTitle";
import Button from "../components/ui/Button";
import { MotionCard } from "../components/ui/MotionCard";
import SEO from "../components/SEO";
import DottedBackground from "../components/DottedBackground";
import DraggableCards from "../components/DraggableCards";
import CanvasConnections from "../components/CanvasConnections";
import SkillsSlider from "../components/SkillsSlider";
import { useState, useEffect } from "react";

function Home() {
  const [isMobile, setIsMobile] = useState(false);
  const [cards, setCards] = useState([
    {
      id: 1,
      tag: "Cloud Intelligence",
      title: "InfraSight",
      width: 300,
      height: 220,
      x: 0,
      y: 0,
      image:
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=300&fit=crop&q=80",
      connections: [2, 3],
    },
    {
      id: 2,
      tag: "Teaching",
      title: "GWU Algorithms TA",
      width: 300,
      height: 220,
      x: 0,
      y: 0,
      image:
        "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=400&h=300&fit=crop&q=80",
      connections: [1, 4],
    },
    {
      id: 3,
      tag: "Photography",
      title: "iPhone 15 Pro Max",
      width: 280,
      height: 200,
      x: 0,
      y: 0,
      image:
        "https://images.unsplash.com/photo-1452587925148-ce544e77e70d?w=400&h=300&fit=crop&q=80",
      connections: [1, 4],
    },
    {
      id: 4,
      tag: "AI SaaS",
      title: "TalkifyDocs",
      width: 320,
      height: 240,
      x: 0,
      y: 0,
      image:
        "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=400&h=300&fit=crop&q=80",
      connections: [2, 3],
    },
  ]);

  useEffect(() => {
    // Responsive card positioning logic
    const updateCardPositions = () => {
      const width = window.innerWidth;
      const height = window.innerHeight;
      const isMobileSize = width < 768;

      setIsMobile(isMobileSize);

      setCards((prev) =>
        prev.map((card) => {
          // Resize dimensions based on device
          const newWidth = isMobileSize ? 300 * 0.75 : 300;
          const newHeight = isMobileSize ? 220 * 0.75 : 220;

          let x = 0;
          let y = 0;

          // Responsive positions
          switch (card.id) {
            case 1: // Top Left
              x = width * (isMobileSize ? 0.1 : 0.15);
              y = height * (isMobileSize ? 0.2 : 0.22);
              break;
            case 2: // Top Right
              x = width * (isMobileSize ? 0.6 : 0.68);
              y = height * (isMobileSize ? 0.15 : 0.18);
              break;
            case 3: // Bottom Left
              x = width * (isMobileSize ? 0.1 : 0.12);
              y = height * (isMobileSize ? 0.6 : 0.58);
              break;
            case 4: // Bottom Right
              x = width * (isMobileSize ? 0.55 : 0.65);
              y = height * (isMobileSize ? 0.5 : 0.55);
              break;
            default:
              x = card.x;
              y = card.y;
          }

          return {
            ...card,
            width: card.id === 3 ? (isMobileSize ? 280 * 0.75 : 280) : newWidth,
            height:
              card.id === 3 ? (isMobileSize ? 200 * 0.75 : 200) : newHeight,
            x,
            y,
          };
        }),
      );
    };

    // Initial call
    updateCardPositions();

    // Debounced resize handler for performance
    let timeoutId: NodeJS.Timeout;
    const handleResize = () => {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(updateCardPositions, 100);
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
      clearTimeout(timeoutId);
    };
  }, []);

  const handleCardMove = (id: number, x: number, y: number) => {
    setCards((prev) => prev.map((c) => (c.id === id ? { ...c, x, y } : c)));
  };

  return (
    <Page>
      <SEO
        title="Abhiyan Sainju | Full Stack & AI Engineer"
        description="Master’s student at GWU building enterprise-grade AI/ML solutions."
      />
      {/* Hero Section */}
      <section
        id="hero"
        className="relative min-h-screen flex items-center justify-center overflow-hidden bg-background"
      >
        <DottedBackground />
        <CanvasConnections cards={cards} />

        <div className="relative z-10 w-full max-w-7xl mx-auto px-6 md:px-8 pointer-events-none">
          <div className="max-w-4xl mx-auto text-center pointer-events-auto">
            <motion.h1
              className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tight text-text-primary mb-6 leading-tight font-heading"
              variants={motionTokens.variants.fadeUp}
              initial="initial"
              animate="animate"
              transition={{
                duration: motionTokens.duration.slow / 1000,
                delay: 0.1,
              }}
            >
              Building Enterprise-Grade AI & Full-Stack Solutions.
            </motion.h1>
            <motion.p
              className="text-base sm:text-lg lg:text-xl text-text-muted mb-10 leading-relaxed max-w-3xl mx-auto"
              variants={motionTokens.variants.fadeUp}
              initial="initial"
              animate="animate"
              transition={{
                duration: motionTokens.duration.slow / 1000,
                delay: 0.2,
              }}
            >
              Hi, I’m Abhiyan Sainju. I bridge the gap between complex
              algorithms and real-world business value. Currently pursuing my MS
              in CS at GWU (4.0 GPA).
            </motion.p>
            <motion.div
              variants={motionTokens.variants.fadeUp}
              initial="initial"
              animate="animate"
              transition={{
                duration: motionTokens.duration.slow / 1000,
                delay: 0.4,
              }}
            >
              <div className="flex justify-center gap-4">
                <Button as={Link} to="/projects" variant="primary" size="lg">
                  View My Projects
                </Button>
                <Button
                  as="a"
                  href="/Abhiyan_Resume_2025_Data_Engineering.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  variant="outline"
                  size="lg"
                >
                  Download Resume
                </Button>
              </div>
            </motion.div>
          </div>
        </div>

        <DraggableCards
          cards={cards}
          onCardMove={handleCardMove}
          isMobile={isMobile}
        />
        <SkillsSlider />
      </section>

      {/* Projects Teaser */}
      <section id="projects" className="py-24 bg-background">
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

      {/* Photography Teaser */}
      <section className="py-24 bg-background">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <SectionTitle
            title="Photography"
            subtitle="Capturing moments and stories through the lens. From street photography to landscape shots, each image tells a unique story."
          />
          <PhotographyGallery limit={6} />
          <motion.div
            className="text-center mt-12"
            variants={motionTokens.variants.fadeUp}
            initial="initial"
            whileInView="animate"
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

      {/* Digital Footprint Section */}
      <section className="py-24 bg-background">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <SectionTitle
            title="Digital Footprint"
            subtitle="I believe in sharing knowledge. Here are some of my thoughts and findings."
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {articles.map((article, index) => (
              <MotionCard
                key={article.id}
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
                <a
                  href={article.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-6 flex flex-col h-full"
                >
                  <h3 className="text-xl font-semibold mb-3 text-text-primary font-heading">
                    {article.title}
                  </h3>
                  <p className="text-text-muted text-sm mb-4 flex-grow">
                    {article.summary}
                  </p>
                  <div className="mt-auto">
                    <span className="text-accent-primary text-sm font-medium hover:text-accent-hover transition-colors">
                      Read on {article.source} &rarr;
                    </span>
                  </div>
                </a>
              </MotionCard>
            ))}
          </div>
        </div>
      </section>

      {/* About Teaser */}
      <section className="py-24 bg-background">
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
