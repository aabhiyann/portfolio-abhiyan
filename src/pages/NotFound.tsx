import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Page from "../components/Page";
import SEO from "../components/SEO";

const Line = ({ text, fake_delay }: { text: string, fake_delay: number }) => {
  return (
    <motion.p
      className="text-green-400"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.1, delay: fake_delay }}
    >
      <span className="text-red-500 mr-2">&gt;</span>{text}
    </motion.p>
  );
};

function NotFound() {
  return (
    <Page>
      <SEO 
        title="404: Page Not Found"
        description="The page you were looking for could not be found."
      />
      <div
        className="relative min-h-screen flex items-center justify-center bg-black font-mono p-4"
      >
        <div className="w-full max-w-2xl bg-gray-900/70 backdrop-blur-sm rounded-lg shadow-xl p-6 border border-green-500/20">
          <div className="flex items-center justify-between pb-3 border-b border-green-500/20">
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 rounded-full bg-red-500"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
              <div className="w-3 h-3 rounded-full bg-green-500"></div>
            </div>
            <p className="text-sm text-green-400">bash</p>
          </div>
          <div className="pt-4">
            <Line text="Error 404: Page not found." fake_delay={0.2} />
            <Line text="Run diagnostic..." fake_delay={0.8} />
            <motion.p
              className="text-green-400"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.1, delay: 1.5 }}
            >
              <span className="text-red-500 mr-2">&gt;</span>AI Model prediction: <span className="text-yellow-400">User is lost.</span>
            </motion.p>
            <motion.p
              className="text-green-400"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.1, delay: 2.0 }}
            >
              <span className="text-red-500 mr-2">&gt;</span>Recommendation: <Link to="/" className="text-cyan-400 underline hover:text-cyan-300">Return to /home</Link>
            </motion.p>
            <motion.div
              className="text-green-400 mt-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.1, delay: 2.5 }}
            >
              <span className="text-red-500 mr-2 animate-pulse">_</span>
            </motion.div>
          </div>
        </div>
      </div>
    </Page>
  );
}

export default NotFound;
