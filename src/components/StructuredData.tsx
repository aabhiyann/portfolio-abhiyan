import { Helmet } from "react-helmet-async";

const SITE_URL = "https://www.abhiyansainju.com";

export default function StructuredData() {
  const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Abhiyan Sainju",
    url: SITE_URL,
    image: `${SITE_URL}/images/about/portrait.jpg`,
    jobTitle: "Software Engineer & AI/ML Specialist",
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
    workLocation: [
      {
        "@type": "Place",
        name: "Washington, DC",
        address: {
          "@type": "PostalAddress",
          addressLocality: "Washington",
          addressRegion: "DC",
          addressCountry: "US",
        },
      },
      {
        "@type": "Place",
        name: "New York, NY",
        address: {
          "@type": "PostalAddress",
          addressLocality: "New York",
          addressRegion: "NY",
          addressCountry: "US",
        },
      },
      {
        "@type": "Place",
        name: "San Francisco, CA",
        address: {
          "@type": "PostalAddress",
          addressLocality: "San Francisco",
          addressRegion: "CA",
          addressCountry: "US",
        },
      },
      {
        "@type": "Place",
        name: "Chicago, IL",
        address: {
          "@type": "PostalAddress",
          addressLocality: "Chicago",
          addressRegion: "IL",
          addressCountry: "US",
        },
      },
      {
        "@type": "Place",
        name: "Austin, TX",
        address: {
          "@type": "PostalAddress",
          addressLocality: "Austin",
          addressRegion: "TX",
          addressCountry: "US",
        },
      },
      {
        "@type": "Place",
        name: "Charlotte, NC",
        address: {
          "@type": "PostalAddress",
          addressLocality: "Charlotte",
          addressRegion: "NC",
          addressCountry: "US",
        },
      },
      {
        "@type": "Place",
        name: "United States",
        description: "Open to relocation anywhere in the US",
        address: {
          "@type": "PostalAddress",
          addressCountry: "US",
        },
      },
      {
        "@type": "Place",
        name: "Remote",
      },
    ],
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
      "Portfolio of Abhiyan Sainju, a Software Engineer specializing in full-stack systems and AI/ML. Based in Washington, DC.",
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
