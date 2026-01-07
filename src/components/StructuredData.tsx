import { Helmet } from "react-helmet-async";

const SITE_URL = "https://www.abhiyansainju.com";

export default function StructuredData() {
  const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Abhiyan Sainju",
    url: SITE_URL,
    image: `${SITE_URL}/images/about/portrait.jpg`,
    jobTitle: "Full Stack Engineer & AI Researcher",
    worksFor: {
      "@type": "EducationalOrganization",
      name: "George Washington University",
    },
    alumniOf: {
      "@type": "EducationalOrganization",
      name: "George Washington University",
    },
    email: "aabhiyansainju@gmail.com",
    sameAs: [
      "https://linkedin.com/in/abhiyansainju",
      "https://github.com/aabhiyann",
      SITE_URL,
    ],
    address: {
      "@type": "PostalAddress",
      addressLocality: "Washington",
      addressRegion: "DC",
      addressCountry: "US",
    },
    knowsAbout: [
      "Full Stack Development",
      "Artificial Intelligence",
      "Machine Learning",
      "React.js",
      "Python",
      "Node.js",
      "RAG Architectures",
      "Cloud Infrastructure",
      "AWS",
    ],
  };

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Abhiyan Sainju Portfolio",
    url: SITE_URL,
    author: {
      "@type": "Person",
      name: "Abhiyan Sainju",
    },
    description:
      "Portfolio of Abhiyan Sainju, a Full Stack and AI Engineer specializing in AI-driven SaaS, React, Python, and Cloud Infrastructure.",
  };

  return (
    <Helmet>
      <script type="application/ld+json">{JSON.stringify(personSchema)}</script>
      <script type="application/ld+json">
        {JSON.stringify(websiteSchema)}
      </script>
    </Helmet>
  );
}
