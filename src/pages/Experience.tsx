import Page from "../components/Page";
import SectionTitle from "../components/SectionTitle";
import SEO from "../components/SEO";
import VisualTimeline from "../components/VisualTimeline"; // Utilizing existing timeline component if compatible or placeholder
import { experiences } from "../data/experience";

function Experience() {
  return (
    <Page>
      <SEO
        title="Experience & Teaching | Abhiyan Sainju"
        description="My professional experience and teaching journey."
        keywords={["Experience", "Teaching", "TA", "Software Engineer"]}
      />

      <section className="py-24 min-h-screen">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <SectionTitle
            title="Experience & Teaching"
            subtitle="My journey from software development internships to teaching algorithms at graduate level."
          />

          <div className="mt-12">
            <VisualTimeline
              items={experiences.map((exp) => ({
                year: exp.dates,
                title: `${exp.role} @ ${exp.company}`,
                location: exp.location,
                description: exp.description,
                achievements: exp.achievements,
              }))}
            />
          </div>

          <div className="mt-24 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold font-heading mb-6">
              Why I Teach
            </h3>
            <blockquote className="p-6 border-l-4 border-accent-primary bg-bg-surface/50 italic text-xl text-text-muted mb-6 rounded-r-lg">
              "The best engineers can make complex ideas simple. If you can't
              explain it, you don't truly understand it."
            </blockquote>
            <p className="text-text-secondary leading-relaxed mb-4">
              As a TA for Design & Analysis of Algorithms, I don't just grade. I
              transform how students think. My interactive tutorials translate
              theory (DP, graph algorithms, NP-completeness) into industry case
              studies.
            </p>
            <div className="p-4 bg-accent-success/10 border border-accent-success/20 rounded-xl inline-block">
              <span className="text-accent-success font-bold">Result:</span> 22%
              average midterm improvement versus previous cohorts.
            </div>
          </div>
        </div>
      </section>
    </Page>
  );
}

export default Experience;
