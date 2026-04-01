import { projects } from "../../data/Projects";

export interface Command {
  name: string;
  description: string;
  execute: (args: string[]) => string;
}

export const commands: Command[] = [
  {
    name: "help",
    description: "List all available commands",
    execute: () => {
      return commands
        .map((cmd) => `  ${cmd.name.padEnd(12)} - ${cmd.description}`)
        .join("\n");
    },
  },
  {
    name: "about",
    description: "Show bio and introduction",
    execute: () => {
      return `Abhiyan Sainju
Software Engineer & AI/ML Engineer | M.S. Computer Science @ GWU (4.0 GPA)

Builds full-stack systems with real ML in production.
InfraSight (cost forecasting), TalkifyDocs (RAG), Audio CNN (92% accuracy).

Type 'projects' to see the work or 'skills' for the stack.`;
    },
  },
  {
    name: "projects",
    description: "List all projects with links",
    execute: () => {
      const projectList = projects
        .slice(0, 5)
        .map((p, i) => `  ${i + 1}. ${p.title}\n     ${p.live || p.github}`)
        .join("\n\n");
      return `Recent Projects:\n\n${projectList}\n\nVisit /projects to see all work`;
    },
  },
  {
    name: "skills",
    description: "Show technical skills and expertise",
    execute: () => {
      return `Technical Skills:

Languages:
  Python, TypeScript, JavaScript, Java, C++

Frameworks & Libraries:
  React, Next.js, FastAPI, TensorFlow, PyTorch

Tools & Platforms:
  Docker, Git, AWS, Vercel, Kubernetes

Databases:
  PostgreSQL, MongoDB, Pinecone, Redis`;
    },
  },
  {
    name: "experience",
    description: "Show work experience",
    execute: () => {
      return `Work Experience:

Graduate Teaching Assistant (Algorithms) @ GWU (Aug 2024 – Dec 2025)
  • Taught CSCI 6212 to 60+ grad students across 4 sections
  • 22% improvement in midterm scores vs previous cohort

Software Engineer (Promoted from Intern) @ ECS Tech (Jun 2022 – Sep 2023)
  • Fintech platform: 7 production features, 50+ business clients
  • Eliminated 89% of scheduling conflicts via automated booking system

IT Solutions Lead @ Intel Security Service (Aug 2022 – Mar 2023)
  • 73% increase in qualified leads after site rebuild

Visit /experience for full details`;
    },
  },
  {
    name: "contact",
    description: "Show contact information",
    execute: () => {
      return `Contact Information:

LinkedIn: linkedin.com/in/abhiyansainju
GitHub: github.com/aabhiyann
Location: Washington DC, US

Visit /contact to send a message`;
    },
  },
  {
    name: "resume",
    description: "View resume page",
    execute: () => {
      window.location.href = "/resume";
      return "Navigating to resume page...";
    },
  },
  {
    name: "clear",
    description: "Clear terminal history",
    execute: () => {
      return "CLEAR_TERMINAL";
    },
  },
  {
    name: "whoami",
    description: "Display current user",
    execute: () => "abhiyan@portfolio",
  },
];

export const getCommand = (name: string): Command | undefined => {
  return commands.find((cmd) => cmd.name.toLowerCase() === name.toLowerCase());
};
