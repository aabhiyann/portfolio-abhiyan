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
    id: "gwu-ms",
    role: "M.S. Computer Science",
    company: "George Washington University",
    dates: "Jan 2024 – Dec 2025",
    location: "Washington, DC",
    description:
      "Completed an M.S. in Computer Science focused on machine learning, cloud computing, software engineering, and algorithms while building applied systems outside the classroom.",
    technologies: [
      "Machine Learning",
      "Cloud Computing",
      "Software Engineering",
      "Algorithms",
      "Databases",
      "Object-Oriented Design",
    ],
    achievements: [
      "Graduated with a 4.0 GPA and received the SEAS Dean's Award",
      "Coursework included Machine Learning, Cloud Computing, Web Application Development, Software Engineering, and Database Systems",
      "Earned AWS Academy Cloud Foundations and AWS Academy Cloud Operations certifications during the program",
    ],
  },
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
    id: "ecs-engineer",
    role: "Software Engineer",
    company: "ECS Technology, Inc.",
    dates: "Sep 2022 – Sep 2023",
    location: "Lalitpur, Nepal",
    description:
      "Built and shipped production features for a fintech platform serving 50+ clients, working across React and TypeScript frontends, Python and Node.js backend services, dashboards, and internal data flows.",
    technologies: [
      "React.js",
      "TypeScript",
      "Python",
      "Node.js",
      "PostgreSQL",
      "Data Visualization",
      "Agile/Scrum",
    ],
    achievements: [
      "Delivered 7 production features across the stack for a platform processing 10K+ daily transactions",
      "Built dashboards for transaction metrics, analytics, and system health with sub-3-second load times",
      "Helped improve page performance by 43% and increase conversion from 12% to 16%",
    ],
  },
  {
    id: "intel-security-lead",
    role: "IT Solutions Lead",
    company: "Intel Security Service Pvt. Ltd.",
    dates: "Aug 2022 – Mar 2023",
    location: "Kathmandu, Nepal",
    description:
      "Led digital transformation as the sole technical decision-maker for a 25-person consultancy, spanning web presence, vendor selection, internal tooling, and team training.",
    technologies: [
      "Digital Transformation",
      "WordPress",
      "SEO",
      "IT Infrastructure",
      "Budget Management",
      "Leadership",
    ],
    achievements: [
      "Rebuilt the legacy website into a lead-generation platform that drove a 73% increase in qualified leads and $35K in new contracts in the first quarter",
      "Managed a $12K annual IT budget and reduced operational costs by 40% while eliminating a $35K dependency on external contractors",
      "Ran 6 internal training sessions that cut external support tickets by 80% and enabled 95% of routine maintenance to stay in-house",
    ],
  },
  {
    id: "ecs-intern",
    role: "Software Developer Intern",
    company: "ECS Technology, Inc.",
    dates: "Jun 2022 – Sep 2022",
    location: "Kathmandu, Nepal",
    description:
      "Started on the same fintech platform as an intern, building customer-facing booking and scheduling features in React, Node.js, and PostgreSQL before moving into a full-time engineering role.",
    technologies: [
      "React.js",
      "Node.js",
      "PostgreSQL",
      "JavaScript",
      "Product Development",
      "Testing",
    ],
    achievements: [
      "Delivered 7 production-ready features for a product serving 1,200+ active users",
      "Built an automated booking workflow that eliminated 89% of scheduling conflicts",
      "Saved the customer-support team roughly 15 hours each week through workflow automation",
    ],
  },
  {
    id: "sx-bscsit",
    role: "BSc.CSIT",
    company: "St. Xavier's College, Maitighar",
    dates: "Aug 2018 – May 2023",
    location: "Kathmandu, Nepal",
    description:
      "Studied computer science while building a foundation in software engineering, databases, and web development, and took on event and coordination work around the campus community.",
    technologies: [
      "Computer Science",
      "Software Engineering",
      "SQL",
      "Web Development",
      "Leadership",
      "Coordination",
    ],
    achievements: [
      "Graduated with a 3.89 GPA",
      "Organized hackathons, competitions, and campus events with end-to-end logistical ownership",
      "Handled participant operations, scheduling, and event documentation across student programs",
    ],
  },
  {
    id: "student-athletics",
    role: "Student Athletics Assistant",
    company: "George Washington University",
    dates: "Aug 2024 – Jan 2025",
    location: "Washington, DC",
    description:
      "Supported athletics operations at the front desk, handling event systems, ticketing issues, and on-site coordination during busy event windows.",
    technologies: [
      "Operations",
      "Customer Support",
      "Event Systems",
      "Troubleshooting",
      "Coordination",
    ],
    achievements: [
      "Helped resolve real-time ticketing and event-system issues during live operations",
      "Supported front-desk workflows and guest coordination on event days",
      "Contributed to technical readiness for athletics events in a fast-paced on-site environment",
    ],
  },
  {
    id: "stx-event-coordinator",
    role: "Student Event Coordinator",
    company: "St. Xavier's College, Maitighar",
    dates: "Dec 2019 – Jan 2022",
    location: "Kathmandu, Nepal",
    description:
      "Coordinated student events and competitions while managing logistics, registration, documentation, and on-site support.",
    technologies: [
      "Event Coordination",
      "Operations",
      "Documentation",
      "Scheduling",
      "Public Support",
    ],
    achievements: [
      "Organized hackathons and campus competitions with full logistical support",
      "Managed participant registration, scheduling, and event documentation",
      "Handled transactions and front-desk support during student events",
    ],
  },
];
