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
      "Addressed opaque cloud billing for SMEs (Situation) by engineering a cost analytics platform with Python and React (Action). Implemented Linear Regression forecasting that achieved 95% accuracy (Result), enabling proactive budget management.",
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
      "Users needed a cost-effective way to query documents (Situation). Built a RAG pipeline using Groq & Gemini 3.0 (Action) to deliver sub-second responses at $0/mo operational cost (Result), scaling to 100+ active users.",
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
      "Challenged with improving environmental sound recognition (Situation). Developed a custom CNN architecture using TensorFlow (Action) that achieved 92% accuracy, outperforming standard transfer learning models by 26% (Result).",
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
      "Solved remote group listening latency (Situation) by building a real-time synchronization engine with Socket.IO and React (Action), ensuring sub-50ms playback sync across distributed clients (Result).",
    tech: ["React", "Node.js", "Socket.IO", "MongoDB", "Clerk"],
    live: "https://udaymelodyhhub.vercel.app/",
    github: "https://github.com/aabhiyann/MelodyHub",
    image: "/images/projects/melodyhub.png",
    categories: ["Full Stack"],
    featured: true,
    stats: [
      { label: "Type", value: "Team Project" },
      { label: "Latency", value: "<50ms" },
    ],
    badges: ["Socket.IO", "Team Work"],
    caseStudyUrl: "/case-studies/melodyhub",
    deepDiveId: "melodyhub-realtime-architecture",
  },
  {
    id: "disease-prediction",
    title: "Disease Prediction ML",
    description:
      "Designed for resource-limited healthcare settings (Situation). Optimized a Random Forest classifier (Action) to achieve 98.7% diagnostic accuracy on 4,920 records (Result) with minimal computational overhead.",
    tech: ["Python", "Scikit-Learn", "Pandas", "Flask"],
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
      "Streamlined research data extraction (Situation) by building a semantic search API with Elasticsearch (Action), reducing query time by 70% across disparate file formats like PDFs and audio transcripts (Result).",
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
