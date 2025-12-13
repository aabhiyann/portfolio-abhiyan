export interface Article {
  id: string;
  title: string;
  summary: string;
  date: string;
  readTime: string;
  content: string; // Markdown content or path
  tags: string[];
  source: string; // "Medium", "Dev.to", "Personal"
  link?: string; // External link if applicable
}

export const articles: Article[] = [
  {
    id: "scaling-socket-io",
    title: "Scaling Socket.IO to 10k Concurrent Users",
    summary:
      "A deep dive into optimizing WebSocket connections, handling redis adapters, and load balancing for real-time applications.",
    date: "Coming Soon",
    readTime: "8 min read",
    content: "",
    tags: ["WebSockets", "Node.js", "System Design"],
    source: "Personal Blog",
  },
  {
    id: "rag-from-scratch",
    title: "Building a Production RAG Pipeline",
    summary:
      "Lessons learned from processing 10,000 documents with LangChain, Pinecone, and GPT-4. Handling hallucinations and citation accuracy.",
    date: "Coming Soon",
    readTime: "12 min read",
    content: "",
    tags: ["AI", "RAG", "LLM"],
    source: "Medium",
  },
  {
    id: "visual-pattern-recognition",
    title: "The Math Behind Visual Pattern Recognition",
    summary:
      "Exploring the parallels between Convolutional Neural Networks and human visual processing in photography.",
    date: "Coming Soon",
    readTime: "10 min read",
    content: "",
    tags: ["ML", "Photography", "Math"],
    source: "Personal Blog",
  },
];
