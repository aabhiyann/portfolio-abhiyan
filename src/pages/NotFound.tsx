import { Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import Page from "../components/Page";
import SEO from "../components/SEO";
import { ArrowLeft, Home } from "lucide-react";

const TerminalLine = ({
  text,
  delay,
  color = "text-text-primary",
}: {
  text: React.ReactNode;
  delay: number;
  color?: string;
}) => (
  <motion.div
    initial={{ opacity: 0, x: -10 }}
    animate={{ opacity: 1, x: 0 }}
    transition={{ duration: 0.3, delay }}
    className={`font-mono text-sm md:text-base ${color} mb-2 flex items-start`}
  >
    <span className="text-accent-secondary mr-3 select-none">$</span>
    <span>{text}</span>
  </motion.div>
);

const NotFound = () => {
  const navigate = useNavigate();

  return (
    <Page>
      <SEO
        title="404: Page Not Found"
        description="The page you were looking for could not be found."
      />
      <div className="min-h-[80vh] flex items-center justify-center px-4">
        <div className="w-full max-w-lg">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="glass-card overflow-hidden rounded-xl border border-border-primary/50 shadow-2xl"
          >
            {/* Terminal Header */}
            <div className="bg-bg-surface/50 border-b border-border-primary/50 p-3 flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-red-500/80" />
              <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
              <div className="w-3 h-3 rounded-full bg-green-500/80" />
              <div className="ml-auto text-xs font-mono text-text-muted opacity-70">
                admin@portfolio:~/404
              </div>
            </div>

            {/* Terminal Body */}
            <div className="p-6 md:p-8 bg-bg-surface/20 min-h-[300px] flex flex-col">
              <TerminalLine
                text="error --code 404 --message 'Page Not Found'"
                delay={0.2}
                color="text-red-400"
              />

              <TerminalLine
                text="running diagnostics..."
                delay={0.8}
                color="text-text-muted"
              />

              <TerminalLine
                text={
                  <span>
                    AI Analysis:{" "}
                    <span className="text-yellow-400">
                      User navigation error detected.
                    </span>
                  </span>
                }
                delay={1.6}
              />

              <TerminalLine
                text="suggested_actions:"
                delay={2.4}
                color="text-accent-primary"
              />

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 3.0 }}
                className="mt-6 flex flex-col sm:flex-row gap-4 pl-6"
              >
                <button
                  onClick={() => navigate(-1)}
                  className="flex items-center gap-2 px-4 py-2 rounded-lg border border-border-primary hover:bg-bg-surface/50 text-text-muted hover:text-text-primary transition-all duration-300 group"
                >
                  <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
                  Go Back
                </button>

                <Link
                  to="/"
                  className="flex items-center gap-2 px-4 py-2 rounded-lg bg-accent-primary/10 border border-accent-primary/20 text-accent-primary hover:bg-accent-primary/20 transition-all duration-300 group"
                >
                  <Home className="w-4 h-4" />
                  Return Home
                </Link>
              </motion.div>

              <motion.div
                className="mt-auto pt-8 text-accent-secondary animate-pulse"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 3.5 }}
              >
                <span className="mr-2">$</span>
                <span className="w-2.5 h-5 bg-accent-secondary inline-block align-bottom" />
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </Page>
  );
};

export default NotFound;
