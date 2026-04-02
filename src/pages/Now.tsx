import Page from "../components/Page";
import SEO from "../components/SEO";

function Now() {
  return (
    <Page>
      <SEO
        title="Now – Abhiyan Sainju"
        description="What Abhiyan Sainju is working on right now."
      />
      <section className="py-24 min-h-screen">
        <div className="max-w-3xl mx-auto px-6 md:px-8">
          <div className="inline-flex items-center gap-3 mb-5">
            <span className="h-px w-10 bg-accent-primary/60" />
            <span className="text-xs font-mono uppercase tracking-[0.3em] text-accent-primary">
              April 2026
            </span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-text-primary mb-4 font-heading">
            Now
          </h1>
          <p className="text-text-muted leading-relaxed mb-16">
            A snapshot of what I'm focused on. Updated when things shift.
          </p>

          <div className="space-y-14">
            <div>
              <h2 className="text-xs font-mono uppercase tracking-[0.3em] text-accent-primary mb-6">
                Building
              </h2>
              <ul className="space-y-4">
                <li className="flex flex-col">
                  <span className="text-text-primary font-medium">
                    SnapMacros
                  </span>
                  <span className="text-text-muted text-sm mt-0.5">
                    An AI-powered nutrition tracker. Photograph a meal and get
                    an instant macro breakdown. Chip, the mascot, reacts
                    emotionally to your eating habits.
                  </span>
                </li>
              </ul>
            </div>

            <div>
              <h2 className="text-xs font-mono uppercase tracking-[0.3em] text-accent-primary mb-6">
                Studying
              </h2>
              <ul className="space-y-4">
                <li className="flex flex-col">
                  <span className="text-text-primary font-medium">
                    M.S. Computer Science — GWU
                  </span>
                  <span className="text-text-muted text-sm mt-0.5">
                    Algorithms, distributed systems, and machine learning. TA
                    for CSCI 6212.
                  </span>
                </li>
              </ul>
            </div>

            <div>
              <h2 className="text-xs font-mono uppercase tracking-[0.3em] text-accent-primary mb-6">
                Looking for
              </h2>
              <ul className="space-y-4">
                <li className="flex flex-col">
                  <span className="text-text-primary font-medium">
                    Full-stack or ML engineering roles
                  </span>
                  <span className="text-text-muted text-sm mt-0.5">
                    Open to roles across the US. Available now.
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </Page>
  );
}

export default Now;
