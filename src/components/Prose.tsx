import { motion } from "framer-motion";
import { motionTokens } from "../utils/Motion";

interface ProseProps {
  children: React.ReactNode;
}

function Prose({ children }: ProseProps) {
  return (
    <motion.div
      className="prose prose-lg max-w-none prose-headings:text-text-primary prose-p:text-text-secondary prose-strong:text-text-primary prose-ul:text-text-secondary prose-invert"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: motionTokens.duration.slow / 1000 }}
    >
      {children}
    </motion.div>
  );
}

export default Prose;
