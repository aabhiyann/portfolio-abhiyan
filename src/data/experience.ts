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
    id: "ecs-tech-intern",
    role: "Software Development Intern",
    company: "ECS Tech",
    dates: "Jun 2023 – Sep 2023",
    location: "Lalitpur, Nepal",
    description:
      "Full-stack development for a fintech client's payment platform (50+ employees) serving 1,200+ users. Focused on database optimization, automated booking systems, and React performance improvements.",
    technologies: [
      "React.js",
      "Node.js",
      "PostgreSQL",
      "JavaScript",
      "Automation",
      "Agile/Scrum",
    ],
    achievements: [
      "Delivered 7 production features in 3 months, including booking system that eliminated 89% of scheduling conflicts and saved support team 15 hours weekly",
      "Owned end-to-end launch of booking calendar, managing $5K budget and 5 stakeholders; delivered 2 weeks early, contributing to 23% increase in client retention",
      "Mentored 2 junior interns on React optimization, reducing page load times by 43% and improving conversions from 12% to 16%",
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
