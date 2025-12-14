import Page from "../components/Page";
import SectionTitle from "../components/SectionTitle";
import SEO from "../components/SEO";
import VisualTimeline from "../components/VisualTimeline"; // Utilizing existing timeline component if compatible or placeholder

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
              items={[
                {
                  year: "2024-2025",
                  title: "Graduate TA - Algorithms",
                  location: "GWU, Washington DC",
                  description:
                    "Teaching 60+ grad students. 22% midterm score improvement. Onboarded 8 TAs (2 weeks → 4 days). Curriculum redesign with 3 faculty.",
                },
                {
                  year: "2023",
                  title: "Software Dev Intern",
                  location: "ECS Tech",
                  description:
                    "Fintech platform (1,200+ users). 7 production features shipped. 89% fewer scheduling conflicts. 43% load time improvement.",
                },
                {
                  year: "2022-2023",
                  title: "IT Solutions Lead",
                  location: "Intel Security",
                  description:
                    "Digital transformation. 73% increase in qualified leads. $35K new contracts (Q1). 40% cost reduction.",
                },
              ]}
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
              average midterm improvement.
            </div>
          </div>
        </div>
      </section>
    </Page>
  );
}

export default Experience;
