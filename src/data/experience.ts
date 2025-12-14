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
      "Teaching Design & Analysis of Algorithms (CSCI 6212) to 60+ graduate students. Designed interactive tutorials relating graph theory to industry supply chain problems.",
    technologies: [
      "Graph Theory",
      "Algorithms",
      "Python",
      "Teaching",
      "Public Speaking",
    ],
    achievements: [
      "Designed interactive tutorials → 22% midterm score improvement",
      "Led TA training program, reducing onboarding time by 60%",
      "Mentored students on NP-Completeness and Dynamic Programming",
    ],
  },
  {
    id: "ecs-tech-intern",
    role: "Software Development Intern",
    company: "ECS Tech",
    dates: "Jun 2023 – Sep 2023",
    location: "Lalitpur, Nepal",
    description:
      "Full-stack development for a fintech platform serving 1,200+ users. Focused on database optimization and automated booking systems.",
    technologies: [
      "React.js",
      "Node.js",
      "PostgreSQL",
      "JavaScript",
      "Automation",
    ],
    achievements: [
      "Shipped 7 production features in a 3-month agile cycle",
      "Eliminated 89% of scheduling conflicts via new booking engine",
      "Optimized query performance, improving page loads by 43%",
    ],
  },
  {
    id: "intel-security-lead",
    role: "IT Solutions Lead",
    company: "Intel Security Service Pvt. Ltd.",
    dates: "Aug 2022 – Mar 2023",
    location: "Kathmandu, Nepal",
    description:
      "Led digital transformation and infrastructure upgrades. Managed annual IT budget and vendor relationships.",
    technologies: [
      "Digital Transformation",
      "IT Infrastructure",
      "Budget Management",
      "Leadership",
    ],
    achievements: [
      "Rebuilt legacy lead-gen platform → 73% increase in leads",
      "Secured $35K in new contracts via improved digital presence",
      "Managed $12K annual IT budget enabling 40% cost reduction",
    ],
  },
];
