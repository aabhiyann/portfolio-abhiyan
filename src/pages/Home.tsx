import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { motionTokens } from "../utils/motion";
import PhotographyGallery from "../components/PhotographyGallery";
import { projects } from "../data/Projects";
import Page from "../components/Page";
import SectionTitle from "../components/SectionTitle";
import Button from "../components/ui/Button";
import Card from "../components/ui/Card";
import useSeo from "../utils/useSeo";
import DottedBackground from "../components/DottedBackground";
import DraggableCards from "../components/DraggableCards";
import CanvasConnections from "../components/CanvasConnections";
import SkillsSlider from "../components/SkillsSlider";
import { useState, useEffect } from "react";

function Home() {
  useSeo({
    title: "Abhiyan Sainju – Creative Software Engineer",
    description:
      "Building intelligent systems at the intersection of engineering and creativity. Full-stack developer passionate about creating meaningful digital experiences.",
    keywords:
      "Abhiyan Sainju, portfolio, creative software engineer, photographer, web development, React, TypeScript, projects, photography gallery",
  });

  const [isMobile, setIsMobile] = useState(false);
  const [cards, setCards] = useState([
    {
      id: 1,
      tag: "Cloud Intelligence",
      title: "InfraSight",
      width: 300,
      height: 220,
      x: typeof window !== "undefined" ? window.innerWidth * 0.15 : 300,
      y: typeof window !== "undefined" ? window.innerHeight * 0.22 : 200,
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
      x: typeof window !== "undefined" ? window.innerWidth * 0.68 : 800,
      y: typeof window !== "undefined" ? window.innerHeight * 0.18 : 150,
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
      x: typeof window !== "undefined" ? window.innerWidth * 0.12 : 250,
      y: typeof window !== "undefined" ? window.innerHeight * 0.58 : 500,
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
      x: typeof window !== "undefined" ? window.innerWidth * 0.65 : 750,
      y: typeof window !== "undefined" ? window.innerHeight * 0.55 : 550,
      image:
        "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=400&h=300&fit=crop&q=80",
      connections: [2, 3],
    },
  ]);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const handleCardMove = (id: number, x: number, y: number) => {
    setCards((prev) => prev.map((c) => (c.id === id ? { ...c, x, y } : c)));
  };

  return (
    <Page>
      {/* Hero Section */}
      <section
        id="hero"
        className="relative min-h-screen flex items-center justify-center overflow-hidden"
        style={{ backgroundColor: "#000000" }}
      >
        <DottedBackground />
        <CanvasConnections cards={cards} />

        <div className="relative z-10 w-full max-w-7xl mx-auto px-6 md:px-8 pt-20 sm:pt-32 pointer-events-none">
          <div className="max-w-4xl mx-auto text-center pointer-events-auto">
            <motion.h1
              className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tight text-white mb-6 leading-tight"
              style={{ fontFamily: "'Space Grotesk', sans-serif" }}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: motionTokens.duration.slow / 1000,
                delay: 0.1,
              }}
            >
              Creative <span className="italic font-semibold">Software</span>{" "}
              Engineer.
            </motion.h1>
            <motion.p
              className="text-base sm:text-lg lg:text-xl text-gray-400 mb-10 leading-relaxed max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: motionTokens.duration.slow / 1000,
                delay: 0.2,
              }}
            >
              Building intelligent systems at the intersection of engineering
              and creativity.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: motionTokens.duration.slow / 1000,
                delay: 0.4,
              }}
            >
              <Link
                to="/projects"
                className="inline-block bg-white text-black px-6 sm:px-8 py-3 rounded-md font-semibold hover:opacity-85 transition-all duration-200 hover:-translate-y-0.5 shadow-lg"
                style={{ fontFamily: "'Inter', sans-serif" }}
              >
                Explore my work
              </Link>
            </motion.div>
          </div>
        </div>

        <DraggableCards onCardMove={handleCardMove} isMobile={isMobile} />
        <SkillsSlider />
      </section>

      {/* Projects Teaser */}
      <section
        id="projects"
        className="py-24"
        style={{ backgroundColor: "#000000" }}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <SectionTitle
            title="Featured Projects"
            subtitle="A showcase of my recent work spanning web development, mobile applications, and creative coding projects."
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {projects.slice(0, 3).map((project, index) => (
              <motion.div
                key={project.id}
                className="project-card group relative"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: motionTokens.duration.slow / 1000,
                  delay: 0.1 + index * 0.1,
                }}
                whileHover={{ y: -8 }}
              >
                <Card className="h-full flex flex-col bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl overflow-hidden transition-all duration-300 hover:shadow-2xl hover:shadow-white/10 hover:border-white/30 hover:bg-white/15">
                  <div className="p-6">
                    <h3 className="text-xl font-semibold mb-3 text-white">
                      {project.title}
                    </h3>
                    <p className="text-white/80 mb-4 flex-grow">
                      {project.description}
                    </p>
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
      <section className="py-24" style={{ backgroundColor: "#000000" }}>
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
      <section className="py-24" style={{ backgroundColor: "#000000" }}>
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
