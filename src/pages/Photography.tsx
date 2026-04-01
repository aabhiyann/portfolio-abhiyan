import { motion } from "framer-motion";
import { Camera, Image as ImageIcon, MapPin } from "lucide-react";
import { motionTokens } from "../utils/motion";
import PhotographyGallery from "../components/PhotographyGallery";
import Page from "../components/Page";
import SEO from "../components/SEO";

function Photography() {
  return (
    <Page>
      <SEO
        title="Photography – Abhiyan Sainju"
        description="Explore the photography portfolio of Abhiyan Sainju, featuring moments captured with iPhone 15 Pro Max and Canon EOS 750D."
      />
      <section className="relative py-24 min-h-screen font-heading">
        <div className="relative z-20">
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

              <p className="text-xl text-text-muted mb-8 max-w-3xl mx-auto">
                Street and urban photography. Shot on a Canon R50 and iPhone 15
                Pro Max. Based in DC.
              </p>

              <div className="flex flex-wrap justify-center gap-4 text-sm text-text-muted">
                <span className="flex items-center gap-2">
                  <Camera className="w-4 h-4" />
                  Street
                </span>
                <span className="flex items-center gap-2">
                  <ImageIcon className="w-4 h-4" />
                  Architecture
                </span>
                <span className="flex items-center gap-2">
                  <MapPin className="w-4 h-4" />
                  Urban
                </span>
              </div>
            </motion.div>

            {/* Photography Gallery */}
            <PhotographyGallery />

            <div className="text-center mt-16 text-sm text-text-muted">
              <p>Canon R50 · iPhone 15 Pro Max</p>
            </div>
          </div>
        </div>
      </section>
    </Page>
  );
}

export default Photography;
