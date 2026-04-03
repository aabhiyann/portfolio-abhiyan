import { motion } from "framer-motion";
import { motionTokens } from "../utils/motion";
import PhotographyGallery from "../components/PhotographyGallery";
import Page from "../components/Page";
import SEO from "../components/SEO";

function Photography() {
  return (
    <Page>
      <SEO
        title="Photography – Abhiyan Sainju"
        description="Street and urban photography by Abhiyan Sainju."
      />
      <section className="relative py-24 min-h-screen font-heading">
        <div className="relative z-20">
          <div className="max-w-[90rem] mx-auto px-6 md:px-8">
            <motion.div
              className="max-w-4xl mb-16"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: motionTokens.duration.slow / 1000 }}
            >
              <div className="inline-flex items-center gap-3 mb-5">
                <span className="h-px w-10 bg-accent-primary/60" />
                <span className="text-xs font-mono uppercase tracking-[0.3em] text-accent-primary">
                  Off Screen
                </span>
              </div>
              <h1 className="text-5xl md:text-6xl font-bold tracking-tight text-text-primary mb-6 font-heading">
                Photography
              </h1>

              <p className="text-xl text-text-muted leading-relaxed max-w-3xl">
                Street and urban photography from the same cities and in-between
                moments that shape how I observe people, systems, and detail.
              </p>
            </motion.div>

            {/* Photography Gallery */}
            <PhotographyGallery />
          </div>
        </div>
      </section>
    </Page>
  );
}

export default Photography;
