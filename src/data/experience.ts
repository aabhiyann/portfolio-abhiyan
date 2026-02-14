export interface Experience {
  id: string;
  role: string;
  company: string;
  dates: string;
  location: string;
  description: string;
  technologies: string[];
  achievements: string[];
}

export const experiences: Experience[] = [
  {
    id: "gwu-ta",
    role: "Graduate Teaching Assistant (Algorithms)",
    company: "George Washington University",
    dates: "Aug 2024 – Dec 2025",
    location: "Washington, DC",
    description:
      "Teaching Design & Analysis of Algorithms (CSCI 6212) to 60+ graduate students across 4 sections. Designed interactive tutorials relating graph theory to industry supply chain problems.",
    technologies: [
      "Graph Theory",
      "Algorithms",
      "Dynamic Programming",
      "Python",
      "Teaching",
      "Public Speaking",
    ],
    achievements: [
      "Taught 60+ graduate students (4 sections), contributing to 22% improvement in average midterm scores versus previous cohorts",
      "Collaborated with faculty to build standardized training and rubrics for 8 TAs, reducing onboarding time by 75% (2 weeks → 4 days) while maintaining 95%+ grading consistency",
      "Redesigned curriculum with 3 faculty to include real-world optimization problems, increasing interview success rate by 18% among course graduates",
    ],
  },
  {
    id: "ecs-tech",
    role: "Software Engineer (Promoted from Intern)",
    company: "ECS Tech",
    dates: "Jun 2022 – Sep 2023",
    location: "Lalitpur, Nepal",
    description:
      "Owned development of 7 production features for a fintech payment platform serving 50+ small business clients using React.js, Node.js, Express, and PostgreSQL. Built customer-facing solutions for booking, payments, and scheduling workflows.",
    technologies: [
      "React.js",
      "Node.js",
      "Express",
      "PostgreSQL",
      "JavaScript",
      "Agile/Scrum",
    ],
    achievements: [
      "Architected an automated booking system with RESTful API backend, PostgreSQL database, and React frontend, eliminating 89% of scheduling conflicts and saving the support team 15 hours weekly",
      "Led delivery of a booking calendar, coordinating with 5 cross-functional stakeholders to ship 2 weeks ahead of schedule",
      "Mentored 2 junior developers on React optimization (code-splitting, lazy loading), achieving 43% faster page loads that increased user conversion from 12% to 16%",
    ],
  },
  {
    id: "intel-security-lead",
    role: "IT Solutions Lead",
    company: "Intel Security Service Pvt. Ltd.",
    dates: "Aug 2022 – Mar 2023",
    location: "Kathmandu, Nepal",
    description:
      "Led digital transformation as sole technical decision-maker for 25-person consultancy. Managed annual IT budget, vendor relationships, and internal training.",
    technologies: [
      "Digital Transformation",
      "WordPress",
      "SEO",
      "IT Infrastructure",
      "Budget Management",
      "Leadership",
    ],
    achievements: [
      "Rebuilt legacy site into lead-generation platform → 73% increase in qualified leads and $35K in new contracts (Q1)",
      "Managed $12K annual IT budget; negotiated vendor contracts reducing operational costs by 40% and eliminating $35K external dependency",
      "Ran 6 internal training sessions for 25 employees (WordPress/SEO/maintenance), reducing external support tickets by 80% and enabling 95% in‑house maintenance",
    ],
  },
];
