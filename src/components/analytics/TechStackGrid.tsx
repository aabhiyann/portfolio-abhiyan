import { motion } from "framer-motion";

interface TechCategory {
  name: string;
  techs: string[];
  color: string;
}

export const TechStackGrid = () => {
  const categories: TechCategory[] = [
    {
      name: "Frontend",
      color: "blue",
      techs: [
        "React 19",
        "Next.js 15",
        "TypeScript",
        "TailwindCSS",
        "Framer Motion",
      ],
    },
    {
      name: "Backend",
      color: "green",
      techs: ["Node.js", "FastAPI", "Express", "tRPC", "AsyncPG"],
    },
    {
      name: "ML/AI",
      color: "purple",
      techs: [
        "scikit-learn",
        "TensorFlow",
        "Keras",
        "Gemini 3.0",
        "Groq",
        "LangChain",
      ],
    },
    {
      name: "Databases",
      color: "orange",
      techs: ["PostgreSQL", "MongoDB", "Pinecone", "Elasticsearch"],
    },
    {
      name: "DevOps & Cloud",
      color: "cyan",
      techs: ["Docker", "GitHub Actions", "Vercel", "Netlify", "Render"],
    },
    {
      name: "Tools & Libraries",
      color: "pink",
      techs: ["Pandas", "NumPy", "Socket.IO", "Clerk", "Stripe", "Cloudinary"],
    },
  ];

  const colorClasses = {
    blue: "bg-blue-500/10 text-blue-500 border-blue-500/20",
    green: "bg-green-500/10 text-green-500 border-green-500/20",
    purple: "bg-purple-500/10 text-purple-500 border-purple-500/20",
    orange: "bg-orange-500/10 text-orange-500 border-orange-500/20",
    cyan: "bg-cyan-500/10 text-cyan-500 border-cyan-500/20",
    pink: "bg-pink-500/10 text-pink-500 border-pink-500/20",
  };

  return (
    <div className="space-y-8">
      {categories.map((category, categoryIndex) => (
        <motion.div
          key={category.name}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
        >
          {/* Category Header */}
          <div className="flex items-center gap-3 mb-4">
            <div
              className={`h-1 w-12 rounded-full ${
                colorClasses[category.color as keyof typeof colorClasses].split(
                  " ",
                )[0]
              }`}
            />
            <h3 className="text-lg font-semibold text-text-primary">
              {category.name}
            </h3>
            <div className="flex-1 h-px bg-border-primary/30" />
          </div>

          {/* Tech Badges */}
          <div className="flex flex-wrap gap-3">
            {category.techs.map((tech, techIndex) => (
              <motion.span
                key={tech}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: techIndex * 0.05 }}
                whileHover={{ scale: 1.05 }}
                className={`px-4 py-2 rounded-full border text-sm font-medium transition-all ${
                  colorClasses[category.color as keyof typeof colorClasses]
                }`}
              >
                {tech}
              </motion.span>
            ))}
          </div>
        </motion.div>
      ))}
    </div>
  );
};
