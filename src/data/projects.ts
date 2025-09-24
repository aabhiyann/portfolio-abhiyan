export interface Project {
  id: string;
  title: string;
  summary: string;
  description: string;
  tech: string[];
  link?: string;
  github: string;
  image: string;
  impact: string;
  problem: string;
  solution: string;
}

export const projects: Project[] = [
  {
    id: "infrasight",
    title: "InfraSight",
    summary: "ML-powered cloud cost intelligence platform that cuts AWS billing analysis time by 70%.",
    description: "A comprehensive cloud cost management platform that uses machine learning to predict, analyze, and optimize cloud spending across multiple AWS accounts.",
    tech: ["Python", "FastAPI", "PostgreSQL", "scikit-learn", "Docker", "React", "Pandas"],
    link: "https://infrasight.netlify.app/",
    github: "https://github.com/aabhiyann/infrasight",
    image: "/images/projects/infrasight-hero.webp",
    impact: "70% reduction in AWS billing analysis time",
    problem: "Engineers and finance teams struggle to understand and optimize cloud costs across multiple AWS accounts.",
    solution: "Built a full-stack ML-powered platform with forecasting, anomaly detection, and clustering pipelines."
  },
  {
    id: "melodyhub",
    title: "MelodyHub",
    summary: "Real-time music streaming platform supporting 100+ concurrent users with synchronized playback.",
    description: "A social music streaming platform that allows users to listen to music together in real-time with synchronized playback and live chat.",
    tech: ["Node.js", "React", "Socket.IO", "Clerk Auth", "Cloudinary", "MongoDB"],
    github: "https://github.com/UdaykiranKalyanapu/CSCI_6234_OOD",
    image: "/images/projects/melodyhub-hero.webp",
    impact: "99.2% uptime during 2-month beta testing",
    problem: "Music lovers want to share and listen to music together in real-time.",
    solution: "Architected real-time music streaming platform with synchronized playback and live chat features."
  },
  {
    id: "talkifydocs",
    title: "TalkifyDocs",
    summary: "AI SaaS document assistant that processes documents 47% faster than manual review.",
    description: "An enterprise-ready AI document assistant that processes and analyzes documents using advanced NLP and machine learning techniques.",
    tech: ["Next.js", "OpenAI GPT-4", "LangChain", "Pinecone", "Stripe", "Prisma", "TypeScript"],
    github: "https://github.com/aabhiyann/talkifydocs",
    image: "/images/projects/talkifydocs-hero.webp",
    impact: "47% faster document processing than manual review",
    problem: "Organizations need to quickly analyze and extract insights from large volumes of documents.",
    solution: "Built enterprise-ready AI document assistant with RAG architecture and semantic search capabilities."
  },
  {
    id: "disease-prediction",
    title: "Disease Prediction ML",
    summary: "Clinical decision support system achieving 98.7% diagnostic accuracy on 4,920 medical records.",
    description: "A machine learning-based clinical decision support system that helps healthcare providers diagnose diseases using symptom analysis.",
    tech: ["Python", "scikit-learn", "pandas", "React", "Tailwind CSS", "Jupyter"],
    github: "https://github.com/aabhiyann/ml-disease-prediction-system",
    image: "/images/projects/disease-prediction-hero.webp",
    impact: "98.7% diagnostic accuracy on 4,920 medical records",
    problem: "Healthcare providers in resource-limited settings need reliable diagnostic support tools.",
    solution: "Developed clinical decision support system using Random Forest on medical records with explainable AI."
  },
  {
    id: "multi-source-retrieval",
    title: "Multi-Source Information Retrieval",
    summary: "NLP-based retrieval system that reduced research query times by 70%.",
    description: "An advanced information retrieval system that integrates multiple AI models to process and search through various document types.",
    tech: ["Python", "GPT-3.5-turbo", "Mistral 7B", "FAISS", "NLP"],
    github: "https://github.com/aabhiyann/Conversational-Interface-for-Multi-Source-Information-Retrieval",
    image: "/images/projects/multi-source-hero.webp",
    impact: "70% reduction in research query times",
    problem: "Knowledge workers need to quickly extract insights from multiple document sources.",
    solution: "Built NLP-based retrieval system integrating GPT-3.5 and FAISS for efficient document search and analysis."
  }
];
