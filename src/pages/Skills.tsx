import Page from "../components/Page";
import SectionTitle from "../components/SectionTitle";
import SEO from "../components/SEO";
import SkillsMatrix from "../components/SkillsMatrix";
import { GitHubActivity } from "../components/GitHubActivity";

function Skills() {
  return (
    <Page>
      <SEO
        title="Skills & Certifications | Abhiyan Sainju"
        description="Technical skills, languages, and certifications."
        keywords={["Skills", "Certifications", "Python", "React", "AWS"]}
      />

      <section className="py-24 min-h-screen">
        <div className="max-w-6xl mx-auto px-6 md:px-8">
          <SectionTitle
            title="Skills & Certifications"
            subtitle="Capabilities I rely on in product engineering, applied ML, and cloud-backed systems."
          />

          <div className="mt-12">
            <SkillsMatrix />
          </div>

          <div className="mt-24">
            <div className="inline-flex items-center gap-3 mb-5">
              <span className="h-px w-10 bg-accent-primary/60" />
              <span className="text-xs font-mono uppercase tracking-[0.3em] text-accent-primary">
                Certifications
              </span>
            </div>
            <h3 className="text-2xl font-bold font-heading mb-8">
              Focused cloud training
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="p-6 rounded-2xl border border-border-primary/70 bg-bg-surface/35">
                <h4 className="text-lg font-bold text-text-primary mb-2">
                  AWS Academy Graduate — Cloud Foundations
                </h4>
                <p className="text-text-muted text-sm">
                  Issued: Sep 2024 · 20 hours
                </p>
              </div>
              <div className="p-6 rounded-2xl border border-border-primary/70 bg-bg-surface/35">
                <h4 className="text-lg font-bold text-text-primary mb-2">
                  AWS Academy Graduate — Cloud Operations
                </h4>
                <p className="text-text-muted text-sm">
                  Issued: Nov 2024 · 40 hours
                </p>
              </div>
            </div>
          </div>

          {/* GitHub Activity */}
          <div className="mt-24">
            <GitHubActivity />
          </div>
        </div>
      </section>
    </Page>
  );
}

export default Skills;
