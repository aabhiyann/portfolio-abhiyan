import { motion } from "framer-motion";
import { motionTokens } from "../utils/motion";

function Prose({ children }) {
  return (
    <motion.div
      className="prose prose-lg max-w-none prose-invert"
      style={{ color: "#ffffff" }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: motionTokens.duration.slow / 1000 }}
    >
      {children}
    </motion.div>
  );
}

export default Prose;
