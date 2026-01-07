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
  categories: string[]; // Changed from category: string to support multiple categories
  featured?: boolean;
  stats?: ProjectStats[];
  badges?: string[];
  story?: string;
  impact?: string;
  elaboratedDescription?: string;
  caseStudyUrl?: string;
  deepDiveId?: string; // New field for linking to deep dive articles
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
    image: "/images/projects/infrasight.png",
    categories: ["ML/AI", "Full Stack"],
    featured: true,
    stats: [{ label: "Architecture", value: "Microservice" }],
    badges: ["Production", "ML"],
    caseStudyUrl: "/case-studies/infrasight",
    deepDiveId: "infrasight-production-ml",
  },
  {
    id: "talkifydocs",
    title: "TalkifyDocs",
    description:
      "AI-powered PDF chat using RAG architecture. Built with Gemini 3.0 + Groq for $0/month operation. Live production SaaS.",
    tech: ["Next.js 16", "Gemini", "Groq", "Pinecone", "tRPC", "Stripe"],
    live: "https://talkifydocs.vercel.app",
    github: "https://github.com/aabhiyann/talkifydocs",
    image: "/images/projects/talkifydocs.png",
    categories: ["ML/AI", "Full Stack"],
    featured: true,
    stats: [
      { label: "Status", value: "Live" },
      { label: "Cost", value: "$0/mo" },
    ],
    badges: ["AI", "Free Tier", "SaaS"],
    caseStudyUrl: "/case-studies/talkifydocs",
    deepDiveId: "talkifydocs-rag-pipeline",
  },
  {
    id: "audio-classification-cnn",
    title: "Audio Classification CNN",
    description:
      "Built CNN achieving 92% accuracy on animal sounds. Outperformed transfer learning by 26%.",
    tech: ["TensorFlow", "Keras", "librosa", "YAMNet"],
    live: "https://github.com/aabhiyann/audio-classification-cnn",
    github: "https://github.com/aabhiyann/audio-classification-cnn",
    image: "/images/projects/audio-cnn.png",
    categories: ["ML/AI"],
    featured: true,
    stats: [
      { label: "Accuracy", value: "92%" },
      { label: "Vs Transfer", value: "+26%" },
    ],
    badges: ["Deep Learning", "Research"],
    caseStudyUrl: "/case-studies/audio-classification",
    deepDiveId: "audio-classification-research",
  },
  {
    id: "melodyhub",
    title: "MelodyHub",
    description:
      "Real-time social music platform with synchronized playback. Built with Socket.IO, React, and Clerk.",
    tech: ["React", "Node.js", "Socket.IO", "MongoDB", "Clerk"],
    live: "https://udaymelodyhhub.vercel.app/",
    github: "https://github.com/aabhiyann/MelodyHub",
    image: "/images/projects/melodyhub.png",
    categories: ["Full Stack"],
    featured: true,
    stats: [
      { label: "Type", value: "Team Project" },
      { label: "Feature", value: "Real-Time Sync" },
    ],
    badges: ["Socket.IO", "Team Work"],
    caseStudyUrl: "/case-studies/melodyhub",
    deepDiveId: "melodyhub-realtime-architecture",
  },
  {
    id: "disease-prediction",
    title: "Disease Prediction ML",
    description:
      "Machine learning model to predict disease outbreaks based on historical data and environmental factors.",
    tech: ["Python", "Scikit-Learn", "Pandas", "Flush"],
    live: "https://github.com/aabhiyann/disease-prediction",
    github: "https://github.com/aabhiyann/disease-prediction",
    image: "/images/projects/disease-prediction.png",
    categories: ["ML/AI"],
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
    image: "/images/projects/retrieval.png",
    categories: ["ML/AI"],
    featured: false,
    stats: [
      { label: "Sources", value: "10+" },
      { label: "Relevance", value: "High" },
    ],
    badges: ["Search", "Backend"],
  },
];

export const categories = ["All", "Full Stack", "ML/AI"];
