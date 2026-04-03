import Page from "../components/Page";
import SectionTitle from "../components/SectionTitle";
import SEO from "../components/SEO";
import VisualTimeline from "../components/VisualTimeline";
import { experiences } from "../data/experience";

function Experience() {
  return (
    <Page>
      <SEO
        title="Experience | Abhiyan Sainju"
        description="Software development roles, academic work, and certifications."
        keywords={[
          "Experience",
          "Software Engineer",
          "AI Engineer",
          "ML Engineer",
        ]}
      />

      <section className="py-24 min-h-screen">
        <div className="max-w-[90rem] mx-auto px-6 md:px-8">
          <SectionTitle
            title="Experience"
            subtitle="Software development roles and academic work, in order."
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
        </div>
      </section>
    </Page>
  );
}

export default Experience;
