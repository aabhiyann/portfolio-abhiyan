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
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <SectionTitle
            title="Let's Connect"
            subtitle="I'm actively seeking full-time Software Engineer, ML/AI Engineer, or Cloud/Data Engineer roles starting January 2026."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-12">
            <div>
              <div className="mb-8 p-6 rounded-xl bg-accent-primary/5 border border-accent-primary/10">
                <h3 className="font-bold text-lg mb-4 text-accent-primary">
                  What I'm Looking For
                </h3>
                <ul className="space-y-2 text-text-secondary">
                  <li>• Software Engineer (Backend/Full-Stack)</li>
                  <li>• ML/AI Engineer</li>
                  <li>• Cloud/Data Engineer</li>
                </ul>
                <div className="mt-4 pt-4 border-t border-accent-primary/10 text-sm">
                  <p>
                    <strong>Start Date:</strong> January 2026
                  </p>
                  <p>
                    <strong>Location:</strong> US-based or remote-friendly
                  </p>
                </div>
              </div>

              <div className="mb-8 p-6 rounded-xl bg-accent-success/5 border border-accent-success/10">
                <h3 className="font-bold text-lg mb-4 text-accent-success">
                  What I Bring
                </h3>
                <ul className="space-y-2 text-text-secondary">
                  <li>✅ Ship fast, iterate smart</li>
                  <li>✅ End-to-end ownership (API → ML → Deploy)</li>
                  <li>✅ Technical storytelling for all audiences</li>
                </ul>
              </div>
            </div>

            <div>
              {/* Reusing existing Contact Logic but styling might need adjustment to fit page vs section */}
              <ContactSection />
            </div>
          </div>
        </div>
      </section>
    </Page>
  );
}

export default Contact;
