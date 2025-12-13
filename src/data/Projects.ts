export interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  github: string;
  live: string;
  tech: string[];
  category: "Full Stack" | "ML/AI" | "Research";
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
    title: "InfraSight",
    description: "Cloud Cost Intelligence Platform",
    impact: "Cuts AWS analysis time by 70%",
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop&q=80",
    github: "https://github.com/aabhiyann/infrasight",
    live: "https://infrasight.netlify.app",
    tech: ["Python", "FastAPI", "React", "Docker", "AWS", "Scikit-learn"],
    category: "ML/AI",
    story:
      "Built a full-stack ML platform that helps finance teams detect budget inefficiencies. Implemented anomaly detection using Random Forest + LSTM ensembles enabling finance teams to catch cost spikes before billing cycles.",
    architecture: {
      nodes: [
        {
          id: "frontend",
          label: "React Dashboard",
          position: { x: 100, y: 200 },
        },
        { id: "api", label: "FastAPI Backend", position: { x: 400, y: 200 } },
        { id: "ml", label: "LSTM Model", position: { x: 400, y: 400 } },
        { id: "db", label: "PostgreSQL", position: { x: 700, y: 100 } },
        { id: "aws", label: "AWS Cost Explorer", position: { x: 700, y: 300 } },
      ],
      connections: [
        { from: "frontend", to: "api" },
        { from: "api", to: "ml" },
        { from: "api", to: "db" },
        { from: "api", to: "aws" },
      ],
    },
  },
  {
    id: 2,
    title: "TalkifyDocs",
    description: "AI Document Assistant (SaaS)",
    impact: "Processes docs 47% faster",
    image:
      "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&h=600&fit=crop&q=80",
    github: "https://github.com/aabhiyann/talkifydocs",
    live: "",
    tech: ["Next.js", "OpenAI GPT-4", "LangChain", "Pinecone", "Stripe"],
    category: "Full Stack",
    story:
      "Engineered an enterprise RAG application capable of querying 10GB+ repositories with sub-200ms response times. Features full SaaS architecture with Stripe billing and multi-tenant auth.",
  },
  {
    id: 3,
    title: "MelodyHub",
    description: "Real-Time Social Music Platform",
    impact: "99.2% Uptime / 100+ Users",
    image:
      "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=800&h=600&fit=crop&q=80",
    github: "https://github.com/aabhiyann/MelodyHub",
    live: "https://udaymelodyhhub.vercel.app/",
    tech: ["Node.js", "Socket.IO", "MongoDB", "Cloudinary", "React"],
    category: "Full Stack",
    story:
      "Spotify-meets-Discord. Architected a synchronized music playback engine that supports 100+ concurrent users with zero latency drift. Focused on OOP principals for scalable backend logic.",
  },
  {
    id: 4,
    title: "Disease Prediction ML",
    description: "Clinical Decision Support System",
    impact: "98.7% Diagnostic Accuracy",
    image:
      "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&h=600&fit=crop&q=80",
    github: "https://github.com/aabhiyann/ml-disease-prediction-system",
    live: "",
    tech: ["Python", "Scikit-learn", "Pandas", "React", "Tailwind"],
    category: "ML/AI",
    story:
      "Developed a Random Forest classifier trained on 4,920 medical records to predict 41 disease classes. Designed a lightweight React UI for potential telemedicine deployment in rural areas.",
  },
  {
    id: 5,
    title: "Audio Classification CNN",
    description: "Deep Learning for Audio Analysis",
    impact: "92% Classification Accuracy",
    image:
      "https://images.unsplash.com/photo-1511379938547-c1f69419868d?w=800&h=600&fit=crop&q=80",
    github: "https://github.com/aabhiyann/audio-classification-cnn",
    live: "",
    tech: ["TensorFlow", "Keras", "Librosa", "CNN", "YAMNet"],
    category: "Research",
    story:
      "Built and trained a custom CNN from scratch that outperformed pre-trained transfer learning models by 26% on specific animal sound classification tasks. Utilized Mel-spectrograms for feature extraction.",
  },
  {
    id: 6,
    title: "Multi-Source Retrieval",
    description: "NLP Knowledge Engine",
    impact: "Reduces research time by 70%",
    image:
      "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&h=600&fit=crop&q=80",
    github:
      "https://github.com/aabhiyann/Conversational-Interface-for-Multi-Source-Information-Retrieval",
    live: "",
    tech: ["Python", "Mistral 7B", "FAISS", "LangChain", "NLP"],
    category: "Research",
    story:
      "Created a privacy-first RAG system integrating local LLMs (Mistral) for sensitive data environments. Processes PDFs, YouTube transcripts, and audio files into a unified knowledge graph.",
  },
];
