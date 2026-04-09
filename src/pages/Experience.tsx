import { useMemo } from "react";
import Page from "../components/Page";
import SectionTitle from "../components/SectionTitle";
import SEO from "../components/SEO";
import ExperienceJourneyTimeline from "../components/ExperienceJourneyTimeline";
import { experiences } from "../data/experience";
import {
  sortExperiencesNewestFirst,
  withTimelineTrack,
} from "../utils/timeline";

function Experience() {
  const experienceTimeline = useMemo(
    () => sortExperiencesNewestFirst(experiences.map(withTimelineTrack)),
    [],
  );

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
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <SectionTitle
            title="Experience"
            subtitle="Software development roles and academic work, in order."
          />

          <div className="mt-12">
            <ExperienceJourneyTimeline
              variant="detailed"
              entries={experienceTimeline}
              activeMarkerLayoutId="timeline-year-accent-experience-page"
            />
          </div>
        </div>
      </section>
    </Page>
  );
}

export default Experience;
