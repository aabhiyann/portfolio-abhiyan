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
      "Cloud cost analytics platform for small businesses. A Linear Regression model forecasts spend with 95% accuracy, catching budget overruns before they happen. Built with Python, FastAPI, React, and Docker.",
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
      "RAG-powered document chat for teams and individuals. Users upload PDFs and query them conversationally. Sub-second responses at $0/mo operational cost. 100+ active users.",
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
      "Custom CNN for environmental sound classification. Achieved 92% accuracy on the ESC-50 dataset, outperforming standard transfer learning baselines by 26%. Built with TensorFlow and librosa.",
    tech: ["TensorFlow", "Keras", "librosa", "YAMNet"],
    live: "",
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
      "Real-time collaborative music player. Socket.IO synchronization engine keeps playback in sync across distributed clients with under 50ms latency. Built with React, Node.js, and MongoDB.",
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
      "Random Forest classifier for multi-disease diagnosis. 98.7% accuracy across 4,920 patient records. Optimized for resource-limited settings with minimal computational overhead.",
    tech: ["Python", "Scikit-Learn", "Pandas", "Flask"],
    live: "",
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
      "Semantic search API across heterogeneous sources including PDFs, audio transcripts, and structured data. 70% reduction in query time using Elasticsearch and NLP-based retrieval.",
    tech: ["Python", "Elasticsearch", "NLP", "API"],
    live: "",
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
