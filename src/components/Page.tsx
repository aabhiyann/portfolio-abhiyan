import { motion } from "framer-motion";
import { motionTokens } from "../utils/Motion";

interface PageProps {
  children: React.ReactNode;
}

function Page({ children }: PageProps) {
  return (
    <motion.div
      className="min-h-screen"
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
