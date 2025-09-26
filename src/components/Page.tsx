import { motion } from "framer-motion";
import { motionTokens } from "../utils/motion";

function Page({ children }) {
  return (
    <motion.div
      className="min-h-screen pt-24"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: motionTokens.duration.normal / 1000 }}
    >
      {children}
    </motion.div>
  );
}

export default Page;
