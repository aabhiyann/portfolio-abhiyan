import Page from "../components/Page";
import SectionTitle from "../components/SectionTitle";
import SEO from "../components/SEO";
import SkillsMatrix from "../components/SkillsMatrix"; // Using existing or creating new? Existing likely.

function Skills() {
  return (
    <Page>
      <SEO
        title="Skills & Certifications | Abhiyan Sainju"
        description="Technical skills, languages, and certifications."
        keywords={["Skills", "Certifications", "Python", "React", "AWS"]}
      />

      <section className="py-24 min-h-screen">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <SectionTitle
            title="Skills & Certifications"
            subtitle="A comprehensive overview of my technical expertise and qualifications."
          />

          <div className="mt-12">
            <SkillsMatrix />
          </div>

          <div className="mt-24">
            <h3 className="text-2xl font-bold font-heading mb-8">
              Certifications
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="p-6 rounded-xl border border-border-primary bg-card/50 backdrop-blur-sm">
                <h4 className="text-lg font-bold text-text-primary mb-2">
                  AWS Academy Graduate - Cloud Foundations
                </h4>
                <p className="text-text-muted text-sm mb-4">
                  Issued: Sep 2024 | 20 hours
                </p>
                <span className="inline-block px-3 py-1 bg-accent-primary/10 text-accent-primary rounded-full text-xs font-mono">
                  Cloud Computing
                </span>
              </div>
              <div className="p-6 rounded-xl border border-border-primary bg-card/50 backdrop-blur-sm">
                <h4 className="text-lg font-bold text-text-primary mb-2">
                  AWS Academy Graduate - Cloud Operations
                </h4>
                <p className="text-text-muted text-sm mb-4">
                  Issued: Nov 2024 | 40 hours
                </p>
                <span className="inline-block px-3 py-1 bg-accent-primary/10 text-accent-primary rounded-full text-xs font-mono">
                  DevOps
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Page>
  );
}

export default Skills;
