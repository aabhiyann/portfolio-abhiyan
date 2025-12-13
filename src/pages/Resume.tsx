import { motion } from "framer-motion";
import { motionTokens } from "../utils/Motion";
import Page from "../components/Page";
import SEO from "../components/SEO";
import Button from "../components/ui/Button";
import SectionTitle from "../components/SectionTitle";
import { Download, ExternalLink } from "lucide-react";

function Resume() {
  const resumeUrl = "/Abhiyan_Resume_2025_Software_Engineer.pdf";

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
            <SectionTitle
              title="Resume"
              subtitle="My professional experience and qualifications in a nutshell."
            />

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
            className="w-full h-[800px] bg-slate-100 rounded-xl overflow-hidden shadow-2xl border border-border-primary"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: motionTokens.duration.slow / 1000,
              delay: 0.2,
            }}
          >
            <iframe
              src={resumeUrl}
              className="w-full h-full"
              title="Abhiyan Sainju Resume"
            />
          </motion.div>
        </div>
      </section>
    </Page>
  );
}

export default Resume;
