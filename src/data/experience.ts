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
    role: "Graduate Teaching Assistant",
    company: "George Washington University",
    dates: "August 2024 - Present",
    location: "Washington, DC",
    description: "Transformed algorithm comprehension for 60+ graduate students by designing interactive tutorials that translated complex concepts into industry case studies, resulting in 22% average improvement in midterm scores.",
    technologies: ["Algorithms", "Dynamic Programming", "Graph Theory", "NP-completeness", "Python", "Java"],
    achievements: [
      "22% average improvement in midterm scores compared to previous cohorts",
      "Managed comprehensive TA training program across 4 sections",
      "Reduced onboarding time from 2 weeks to 4 days while maintaining 95%+ grading consistency",
      "Led curriculum redesign initiative with 3 faculty stakeholders"
    ]
  },
  {
    id: "ecs-tech-intern",
    role: "Software Development Intern",
    company: "ECS Tech",
    dates: "June 2023 - September 2023",
    location: "Lalitpur, Nepal",
    description: "Developed and delivered 7 production-ready features for a fintech platform serving 1,200+ active users, including automated booking system that eliminated 89% of scheduling conflicts.",
    technologies: ["React.js", "Node.js", "PostgreSQL", "JavaScript", "API Development"],
    achievements: [
      "Delivered 7 production-ready features for fintech platform serving 1,200+ users",
      "Eliminated 89% of scheduling conflicts with automated booking system",
      "Saved customer support team 15 hours weekly",
      "Achieved 43% load time improvement through performance optimization"
    ]
  },
  {
    id: "intel-security-lead",
    role: "IT Solutions Lead",
    company: "Intel Security Service Pvt. Ltd.",
    dates: "August 2022 - March 2023",
    location: "Kathmandu, Nepal",
    description: "Spearheaded complete digital transformation for security consultancy, rebuilding legacy website into lead-generation platform that generated 73% increase in qualified leads and $35K in new contracts.",
    technologies: ["WordPress", "Web Development", "IT Management", "Digital Transformation", "Budget Management"],
    achievements: [
      "Generated 73% increase in qualified leads and $35K in new contracts",
      "Managed $12,000 annual IT budget as sole technical decision-maker",
      "Reduced operational costs by 40% and eliminated $35K dependency on external contractors",
      "Led client onboarding and technical training for 25-employee team"
    ]
  }
];
