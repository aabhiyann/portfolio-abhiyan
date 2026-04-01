import { motion } from "framer-motion";
import { motionTokens } from "../utils/motion";
import Page from "../components/Page";
import SEO from "../components/SEO";
import Button from "../components/ui/Button";
import SectionTitle from "../components/SectionTitle";
import { Download, ExternalLink } from "lucide-react";

function Resume() {
  const resumeUrl = "/Abhiyan_Sainju_Software_Engineer_Resume_2026.pdf";

  return (
    <Page>
      <SEO
        title="Resume – Abhiyan Sainju"
        description="View or download Abhiyan Sainju's resume. Software Engineer specializing in Full-Stack Development and AI/ML."
      />
      <section className="relative py-24 min-h-screen font-heading">
        <div className="max-w-5xl mx-auto px-6 md:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: motionTokens.duration.slow / 1000 }}
            className="text-center mb-12"
          >
            <SectionTitle title="Resume" subtitle="" />

            <div className="flex justify-center gap-4 mt-8">
              <a href={resumeUrl} download="Abhiyan_Sainju_Resume.pdf">
                <Button
                  variant="primary"
                  size="lg"
                  className="flex items-center gap-2"
                >
                  <Download className="w-5 h-5" />
                  Download PDF
                </Button>
              </a>
              <a href={resumeUrl} target="_blank" rel="noopener noreferrer">
                <Button
                  variant="outline"
                  size="lg"
                  className="flex items-center gap-2"
                >
                  <ExternalLink className="w-5 h-5" />
                  Open in New Tab
                </Button>
              </a>
            </div>
          </motion.div>

          {/* PDF Viewer */}
          <motion.div
            className="w-full h-[800px] bg-bg-surface rounded-xl overflow-hidden shadow-2xl border border-border-primary"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: motionTokens.duration.slow / 1000,
              delay: 0.2,
            }}
          >
            <object
              data={resumeUrl}
              type="application/pdf"
              className="w-full h-full"
              title="Abhiyan Sainju Resume"
            >
              <div className="flex flex-col items-center justify-center h-full gap-4 text-text-secondary">
                <p>Your browser does not support inline PDF viewing.</p>
                <a
                  href={resumeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-accent-primary underline"
                >
                  Click here to view the resume
                </a>
              </div>
            </object>
          </motion.div>
        </div>
      </section>
    </Page>
  );
}

export default Resume;
