import Page from "../components/Page";
import SEO from "../components/SEO";
import ContactSection from "../components/ContactSection";

function Contact() {
  return (
    <Page>
      <SEO
        title="Contact | Abhiyan Sainju"
        description="Contact Abhiyan Sainju — Software Engineer and AI/ML Engineer based in Washington, DC. Open to full-stack and ML engineering roles."
        keywords={["Contact", "Email", "Hire", "Software Engineer"]}
      />

      <section className="py-24 min-h-screen">
        <div className="max-w-4xl mx-auto px-6 md:px-8">
          <ContactSection />
        </div>
      </section>
    </Page>
  );
}

export default Contact;
