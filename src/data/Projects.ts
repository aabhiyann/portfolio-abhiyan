export interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  github: string;
  live: string;
  tech: string[];
  story: string;
  impact: string;
  architecture?: {
    nodes: Array<{
      id: string;
      label: string;
      position: { x: number; y: number };
    }>;
    connections: Array<{ from: string; to: string }>;
  };
  isLoading?: boolean;
  elaboratedDescription?: string;
}

// NOTE: Using placeholder images until real project screenshots are added
// TODO: Add real screenshots to /public/images/projects/
export const projects: Project[] = [
  {
    id: 1,
    title: "InfraSight (Cloud Cost Intelligence)",
    description: "Cutting AWS billing analysis time by 70%.",
    impact: "70% Faster Analysis",
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop&q=80",
    github: "https://github.com/aabhiyann/infrasight",
    live: "https://infrasight-demo.vercel.app",
    tech: ["Python", "FastAPI", "React", "Docker", "AWS"],
    story:
      "Built a full-stack ML platform to help finance teams detect budget inefficiencies. Implemented anomaly detection using Random Forest + LSTM ensembles (92% accuracy).",
    architecture: {
      nodes: [
        {
          id: "frontend",
          label: "React Frontend",
          position: { x: 100, y: 200 },
        },
        { id: "api", label: "FastAPI Backend", position: { x: 400, y: 200 } },
        {
          id: "db",
          label: "PostgreSQL Database",
          position: { x: 700, y: 100 },
        },
        {
          id: "monitoring",
          label: "AWS Monitoring Service",
          position: { x: 700, y: 300 },
        },
        { id: "auth", label: "Auth Service (JWT)", position: { x: 400, y: 0 } },
      ],
      connections: [
        { from: "frontend", to: "api" },
        { from: "api", to: "db" },
        { from: "api", to: "monitoring" },
        { from: "frontend", to: "auth" },
        { from: "api", to: "auth" },
      ],
    },
  },
  {
    id: 2,
    title: "TalkifyDocs (AI SaaS)",
    description: "RAG-based Document Assistant processing data 47% faster.",
    impact: "47% Faster Processing",
    image:
      "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&h=600&fit=crop&q=80",
    github: "https://github.com/aabhiyann/talkifydocs",
    live: "https://talkifydocs.vercel.app",
    tech: ["Next.js", "OpenAI GPT-4", "LangChain", "Pinecone"],
    story:
      "Engineered a scalable RAG architecture handling 10GB+ repositories with sub-200ms query responses. Integrated Stripe for subscriptions, proving full-stack SaaS capability.",
  },
  {
    id: 3,
    title: "MelodyHub",
    description: "Real-time streaming for 100+ concurrent users.",
    impact: "99.2% Uptime",
    image:
      "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=800&h=600&fit=crop&q=80",
    github: "https://github.com/aabhiyann/melodyhub",
    live: "https://melodyhub.vercel.app",
    tech: ["Node.js", "Socket.IO", "MongoDB", "Cloudinary"],
    story:
      "Architected a synchronized playback engine achieving 99.2% uptime. Focused on high-concurrency performance and OOP-based backend architecture.",
  },
  {
    id: 4,
    title: "CloudCost Optimizer",
    description:
      "Automated cloud resource optimization platform that analyzes usage patterns and recommends cost-saving strategies.",
    impact: "$2M+ Saved Annually",
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop&q=80",
    github: "https://github.com/aabhiyann/cloudcost-optimizer",
    live: "https://cloudcost-demo.vercel.app",
    tech: ["React", "Python", "AWS", "Terraform", "Grafana", "Prometheus"],
    story:
      "Helped companies save $2M+ annually in cloud costs with 99.9% accuracy",
  },
  {
    id: 5,
    title: "DevOps Dashboard",
    description:
      "Comprehensive DevOps monitoring dashboard with real-time metrics, alerting, and deployment tracking across environments.",
    impact: "60% Faster Response",
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop&q=80",
    github: "https://github.com/aabhiyann/devops-dashboard",
    live: "https://devops-dashboard.vercel.app",
    tech: ["Next.js", "Go", "Kubernetes", "Prometheus", "Grafana", "Docker"],
    story:
      "Reduced incident response time by 60% and improved system uptime to 99.95%",
  },
  {
    id: 6,
    title: "AI Code Reviewer",
    description:
      "Intelligent code review assistant that analyzes pull requests and provides detailed feedback on code quality, security, and best practices.",
    impact: "35% Better Code Quality",
    image:
      "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&h=600&fit=crop&q=80",
    github: "https://github.com/aabhiyann/ai-code-reviewer",
    live: "https://ai-code-reviewer.vercel.app",
    tech: ["React", "Python", "OpenAI", "GitHub API", "Docker", "AWS"],
    story:
      "Improved code quality by 35% and reduced review time by 50% across development teams",
  },
];
