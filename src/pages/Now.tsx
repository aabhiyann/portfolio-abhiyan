import Page from "../components/Page";
import SEO from "../components/SEO";
import ContactSection from "../components/ContactSection";

const sections = [
  {
    label: "Building",
    items: [
      {
        title: "SnapMacros",
        body: "An AI-powered nutrition tracker. Photograph a meal and get an instant macro breakdown. Chip, the mascot, reacts emotionally to your eating habits.",
      },
    ],
  },
  {
    label: "Studying",
    items: [
      {
        title: "M.S. Computer Science — GWU",
        body: "Algorithms, distributed systems, and machine learning. Teaching Design & Analysis of Algorithms (CSCI 6212) as a Graduate TA.",
      },
    ],
  },
  {
    label: "Looking for",
    items: [
      {
        title: "Full-stack or ML engineering roles",
        body: "Open to roles across the US. Available now.",
      },
    ],
  },
];

function Now() {
  return (
    <Page>
      <SEO
        title="Now – Abhiyan Sainju"
        description="What Abhiyan Sainju is working on right now."
      />

      {/* Hero */}
      <section className="py-24 border-b border-border-primary/40">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <p className="text-xs font-mono uppercase tracking-[0.3em] text-accent-primary mb-4">
            April 2026
          </p>
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-text-primary font-heading mb-4">
            Now
          </h1>
          <p className="text-text-muted leading-relaxed max-w-xl">
            A snapshot of what I'm focused on. Updated when things shift.
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <div className="max-w-2xl space-y-14">
            {sections.map((section) => (
              <div key={section.label}>
                <p className="text-xs font-mono uppercase tracking-[0.3em] text-accent-primary mb-6">
                  {section.label}
                </p>
                <div className="space-y-6">
                  {section.items.map((item) => (
                    <div
                      key={item.title}
                      className="border-l-2 border-border-primary/40 pl-5"
                    >
                      <p className="text-text-primary font-semibold mb-1">
                        {item.title}
                      </p>
                      <p className="text-sm text-text-muted leading-relaxed">
                        {item.body}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <ContactSection />
    </Page>
  );
}

export default Now;
