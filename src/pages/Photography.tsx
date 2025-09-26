import { motion } from "framer-motion"; 
import { motionTokens } from "../utils/motion";
import PhotographyGallery from "../components/PhotographyGallery";
import Page from "../components/Page";

function Photography() {
  return (
    <Page>
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: motionTokens.duration.slow / 1000 }}
          >
            <h1 className="text-5xl md:text-6xl font-bold tracking-tight text-text-primary mb-6 font-heading">
              Photography
            </h1>

            <p className="text-xl text-text-secondary mb-8 max-w-3xl mx-auto">
              Capturing moments through the lens of both my iPhone 15 Pro Max
              and Canon EOS 750D. Each image tells a story of places I've been,
              people I've met, and experiences that have shaped my journey.
            </p>

            <div className="flex flex-wrap justify-center gap-4 text-sm text-text-muted">
              <span className="flex items-center gap-2">
                <svg
                  className="w-4 h-4"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
                </svg>
                Authentic EXIF Data
              </span>
              <span className="flex items-center gap-2">
                <svg
                  className="w-4 h-4"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
                </svg>
                Professional Equipment
              </span>
              <span className="flex items-center gap-2">
                <svg
                  className="w-4 h-4"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
                </svg>
                4-Year Timeline
              </span>
            </div>
          </motion.div>

          {/* Photography Gallery */}
          <PhotographyGallery />
        </div>
      </section>
    </Page>
  );
}

export default Photography;
