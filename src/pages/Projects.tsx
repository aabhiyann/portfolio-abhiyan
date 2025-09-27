import { useState } from "react";
import { motion } from "framer-motion"; 
import { motionTokens } from "../utils/motion";
import { projects as initialProjects } from "../data/projects";
import Page from "../components/Page";
import { useTheme } from "../contexts/useTheme";
import { Card } from "../components/ui/Card";
import SectionTitle from "../components/SectionTitle";
import ProjectDeconstructor from "../components/ProjectDeconstructor";
import { Button, Chip } from "../components/ui";

function Projects() {
  const { themeState } = useTheme();
  const { isDarkMode, currentTheme } = themeState;
  const [selectedArch, setSelectedArch] = useState(null);
  const [projects, setProjects] = useState(initialProjects.map(p => ({...p, elaboratedDescription: null, isLoading: false })));

  const handleElaborate = async (projectId) => {
    setProjects(projects.map(p => p.id === projectId ? { ...p, isLoading: true } : p));

    const project = projects.find(p => p.id === projectId);
    const apiKey = import.meta.env.VITE_GEMINI_API_KEY;

    if (!apiKey) {
      console.error("Gemini API key is missing.");
      const errorMessage = "API Key is not configured. Please add VITE_GEMINI_API_KEY to your .env file.";
      setProjects(projects.map(p => p.id === projectId ? { ...p, elaboratedDescription: errorMessage, isLoading: false } : p));
      return;
    }

    const apiUrl = `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash-latest:generateContent?key=${apiKey}`;
    const prompt = `You are a professional tech writer. Given the project title '${project.title}', its technologies '${project.tech.join(', ')}', and its brief description '${project.description}', write a professional, engaging paragraph (3-4 sentences) that elaborates on what this project might entail, its potential impact, and the technical challenges involved.`;

    const payload = { contents: [{ parts: [{ text: prompt }] }] };

    try {
        const response = await fetch(apiUrl, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(payload)
        });
        if (!response.ok) throw new Error('API Error');
        const result = await response.json();
        const elaboratedText = result.candidates?.[0]?.content?.parts?.[0]?.text || "Could not generate elaboration.";
        setProjects(projects.map(p => p.id === projectId ? { ...p, elaboratedDescription: elaboratedText, isLoading: false } : p));
    } catch (error) {
        console.error("Elaboration failed:", error);
        setProjects(projects.map(p => p.id === projectId ? { ...p, elaboratedDescription: "Error generating details. Please try again.", isLoading: false } : p));
    }
  };

  return (
    <Page>
      <section className="py-24 bg-bg-primary">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <SectionTitle 
            title="Projects" 
            subtitle="A collection of projects that showcase my passion for building innovative solutions that solve real-world problems with modern technology." 
            isDark={isDarkMode} 
            currentTheme={currentTheme} 
          />

          {/* Projects Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {projects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: motionTokens.duration.slow / 1000,
                  delay: index * 0.1,
                }}
              >
                <Card
                  interactive
                  isDark={themeState.isDarkMode}
                  currentTheme={themeState.currentTheme}
                  className="flex flex-col"
                >
                  <div className="aspect-video bg-gradient-to-br from-accent/20 to-blue-500/20 relative overflow-hidden group">
                    <img src={project.image} alt={project.title} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 ease-in-out" />
                    <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-300"></div>
                    <div className="absolute bottom-4 left-4 right-4">
                      <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-accent transition-colors">
                        {project.title}
                      </h3>
                    </div>
                  </div>

                  <div className="p-8 flex flex-col flex-grow">
                    <div className="mb-4">
                      <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-accent/10 text-accent">
                        💡 {project.impact}
                      </span>
                    </div>

                    <p className="text-text-secondary mb-6 leading-relaxed flex-grow">
                      {project.description}
                    </p>

                    {project.elaboratedDescription && (
                        <p className="mb-6 text-sm text-slate-500 dark:text-slate-300 bg-purple-50 dark:bg-purple-900/20 p-3 rounded-lg border border-purple-200 dark:border-purple-800">{project.elaboratedDescription}</p>
                    )}

                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.tech.map((tech) => (
                        <Chip key={tech} size="sm">{tech}</Chip>
                      ))}
                    </div>

                    <div className="flex gap-4 items-center mt-auto pt-4 border-t border-border-primary">
                      <Button as="a" href={project.github} target="_blank" rel="noopener noreferrer" variant="ghost" size="sm">GitHub</Button>
                      <Button as="a" href={project.live} target="_blank" rel="noopener noreferrer" variant="ghost" size="sm">Live Demo</Button>
                      {project.architecture && (
                        <Button onClick={() => setSelectedArch(project.architecture)} variant="ghost" size="sm">Architecture</Button>
                      )}
                      <Button onClick={() => handleElaborate(project.id)} disabled={project.isLoading || project.elaboratedDescription} variant="primary" size="sm" className="ml-auto">
                        {project.isLoading ? 'Generating...' : (project.elaboratedDescription ? 'Done' : 'Elaborate')}
                      </Button>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      {selectedArch && (
        <ProjectDeconstructor architecture={selectedArch} onClose={() => setSelectedArch(null)} />
      )}
    </Page>
  );
}

export default Projects;
