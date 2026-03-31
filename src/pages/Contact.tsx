import Page from "../components/Page";
import SectionTitle from "../components/SectionTitle";
import SEO from "../components/SEO";
import ContactSection from "../components/ContactSection"; // Reuse existing component

function Contact() {
  return (
    <Page>
      <SEO
        title="Contact | Abhiyan Sainju"
        description="Get in touch for opportunities and collaborations."
        keywords={["Contact", "Email", "Hire"]}
      />

      <section className="py-24 min-h-screen">
        <div className="max-w-4xl mx-auto px-6 md:px-8">
          <SectionTitle
            title="Let's Connect"
            subtitle="Open to SWE, DS, and PM roles. Response within 24 hours."
          />

          {/* Info Card */}
          <div className="max-w-2xl mx-auto mb-12">
            <div className="p-6 rounded-2xl bg-card/40 backdrop-blur-md border border-border-primary">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
                <div>
                  <span className="block text-sm text-text-muted mb-1">
                    Status
                  </span>
                  <span className="text-text-primary font-medium">
                    Open to opportunities
                  </span>
                </div>
                <div>
                  <span className="block text-sm text-text-muted mb-1">
                    Location
                  </span>
                  <span className="text-text-primary font-medium">
                    Washington, DC
                  </span>
                </div>
                <div>
                  <span className="block text-sm text-text-muted mb-1">
                    Response Time
                  </span>
                  <span className="text-text-primary font-medium">
                    Within 24 hours
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-12">
            {/* Reusing existing ContactSection component with clean layout */}
            <ContactSection />
          </div>
        </div>
      </section>
    </Page>
  );
}

export default Contact;
