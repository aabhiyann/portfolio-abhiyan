export interface ProjectStats {
  label: string;
  value: string;
}

export interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  github?: string;
  live: string;
  tech: string[];
  category: string;
  featured?: boolean;
  stats?: ProjectStats[];
  badges?: string[];
  story?: string;
  impact?: string;
  elaboratedDescription?: string;
  caseStudyUrl?: string;
  architecture?: {
    nodes: Array<{
      id: string;
      label: string;
      position: { x: number; y: number };
    }>;
    connections: Array<{ from: string; to: string }>;
  };
  isLoading?: boolean;
}

export const projects: Project[] = [
  {
    id: "infrasight",
    title: "InfraSight",
    description:
      "Production cloud cost analytics platform using Linear Regression and Z-Score analysis. Live demo available.",
    tech: ["Python", "FastAPI", "React", "Docker", "AsyncPG"],
    live: "https://infrasight.netlify.app/",
    github: "https://github.com/aabhiyann/infrasight",
    image: "/Images/projects/infrasight.png",
    category: "ML/AI",
    featured: true,
    stats: [{ label: "Architecture", value: "Microservice" }],
    badges: ["Production", "ML"],
    caseStudyUrl: "/case-studies/infrasight",
  },
  {
    id: "talkifydocs",
    title: "TalkifyDocs",
    description:
      "Enterprise RAG application combining LangChain, Pinecone, and GPT-4. Features full SaaS architecture with Stripe/Clerk.",
    tech: ["Next.js", "GPT-4", "Pinecone", "LangChain", "Stripe"],
    live: "", // Not publicly deployed
    github: "https://github.com/aabhiyann/talkifydocs",
    image: "/Images/projects/talkifydocs.png",
    category: "Production Apps",
    featured: true,
    stats: [
      { label: "Status", value: "Dev" },
      { label: "Type", value: "SaaS RAG" },
    ],
    badges: ["Next.js", "AI", "SaaS"],
    caseStudyUrl: "/case-studies/talkifydocs",
  },
  {
    id: "audio-classification-cnn",
    title: "Audio Classification CNN",
    description:
      "Built CNN achieving 92% accuracy on animal sounds. Outperformed transfer learning by 26%.",
    tech: ["TensorFlow", "Keras", "librosa", "YAMNet"],
    live: "https://github.com/aabhiyann/audio-classification",
    github: "https://github.com/aabhiyann/audio-classification",
    image: "/Images/projects/audio-cnn.png",
    category: "ML/AI",
    featured: true,
    stats: [
      { label: "Accuracy", value: "92%" },
      { label: "Vs Transfer", value: "+26%" },
    ],
    badges: ["Deep Learning", "Research"],
    caseStudyUrl: "/case-studies/audio-classification",
  },
  {
    id: "melodyhub",
    title: "MelodyHub",
    description:
      "Real-time social music platform with synchronized playback. Built with Socket.IO, React, and Clerk.",
    tech: ["React", "Node.js", "Socket.IO", "MongoDB", "Clerk"],
    live: "https://udaymelodyhhub.vercel.app/",
    github: "https://github.com/aabhiyann/MelodyHub",
    image: "/Images/projects/melodyhub.png",
    category: "Full Stack",
    featured: true,
    stats: [
      { label: "Type", value: "Team Project" },
      { label: "Feature", value: "Real-Time Sync" },
    ],
    badges: ["Socket.IO", "Team Work"],
    caseStudyUrl: "/case-studies/melodyhub",
  },
  {
    id: "disease-prediction",
    title: "Disease Prediction ML",
    description:
      "Machine learning model to predict disease outbreaks based on historical data and environmental factors.",
    tech: ["Python", "Scikit-Learn", "Pandas", "Flush"],
    live: "https://github.com/aabhiyann/disease-prediction",
    github: "https://github.com/aabhiyann/disease-prediction",
    image: "/Images/projects/disease-prediction.png",
    category: "ML/AI",
    featured: false,
    stats: [
      { label: "Precision", value: "89%" },
      { label: "Recall", value: "91%" },
    ],
    badges: ["Healthcare", "Predictive"],
  },
  {
    id: "multi-source-retrieval",
    title: "Multi-Source Retrieval",
    description:
      "Advanced information retrieval system aggregating results from multiple disparate data sources.",
    tech: ["Python", "Elasticsearch", "NLP", "API"],
    live: "https://github.com/aabhiyann/multi-source-retrieval",
    github: "https://github.com/aabhiyann/multi-source-retrieval",
    image: "/Images/projects/retrieval.png",
    category: "ML/AI",
    featured: false,
    stats: [
      { label: "Sources", value: "10+" },
      { label: "Relevance", value: "High" },
    ],
    badges: ["Search", "Backend"],
  },
];

export const categories = [
  "All",
  "Production Apps",
  "ML/AI",
  "Full-Stack",
  "Team Projects",
];
