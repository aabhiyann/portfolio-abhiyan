import { Link } from "react-router-dom";
import { motion } from "framer-motion"; // eslint-disable-line no-unused-vars
import { motionTokens } from "../utils/motion";

function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="max-w-2xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: motionTokens.duration.slow / 1000 }}
        >
          {/* 404 Number */}
          <motion.h1
            className="text-8xl md:text-9xl font-bold text-accent-primary mb-8 font-heading"
            initial={{ scale: 0.5 }}
            animate={{ scale: 1 }}
            transition={{
              duration: motionTokens.duration.slow / 1000,
              delay: 0.2,
              type: "spring",
              stiffness: 100,
            }}
          >
            404
          </motion.h1>

          {/* Error Message */}
          <motion.h2
            className="text-3xl md:text-4xl font-bold text-primary mb-6 font-heading"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: motionTokens.duration.slow / 1000,
              delay: 0.4,
            }}
          >
            Lost the trail?
          </motion.h2>

          <motion.p
            className="text-xl text-secondary mb-8 leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: motionTokens.duration.slow / 1000,
              delay: 0.6,
            }}
          >
            Looks like you've wandered off the beaten path. Don't worry, even
            the best explorers sometimes take a wrong turn. Let's get you back
            on track!
          </motion.p>

          {/* CTA Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: motionTokens.duration.slow / 1000,
              delay: 0.8,
            }}
          >
            <Link
              to="/"
              className="inline-flex items-center gap-2 btn-primary text-lg px-8 py-4"
            >
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                />
              </svg>
              Back to Home
            </Link>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            className="mt-12 pt-8 border-t border-black/10 dark:border-white/10"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
              duration: motionTokens.duration.slow / 1000,
              delay: 1.0,
            }}
          >
            <p className="text-sm text-muted mb-4">
              Or explore these popular destinations:
            </p>

            <div className="flex flex-wrap justify-center gap-4">
              <Link
                to="/projects"
                className="text-accent hover:text-accent-secondary transition-colors font-medium"
              >
                Projects
              </Link>
              <span className="text-muted">•</span>
              <Link
                to="/photography"
                className="text-accent hover:text-accent-secondary transition-colors font-medium"
              >
                Photography
              </Link>
              <span className="text-muted">•</span>
              <Link
                to="/about"
                className="text-accent hover:text-accent-secondary transition-colors font-medium"
              >
                About
              </Link>
              <span className="text-muted">•</span>
              <Link
                to="/deep-dives"
                className="text-accent hover:text-accent-secondary transition-colors font-medium"
              >
                Deep Dives
              </Link>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}

export default NotFound;
