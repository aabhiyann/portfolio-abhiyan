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
    dates: "Aug 2024 – Present",
    location: "Washington, DC",
    description: "Redesigned curriculum for 60+ students, improving technical interview success rates by 18%. Managed a team of 8 TAs.",
    technologies: ["Algorithms", "Data Structures", "Python", "Java", "Curriculum Design"],
    achievements: [
      "Improved technical interview success rates by 18%",
      "Managed a team of 8 TAs",
      "Redesigned curriculum for 60+ students"
    ]
  },
  {
    id: "ecs-tech-intern",
    role: "Software Development Intern",
    company: "ECS Tech",
    dates: "Jun 2023 – Sep 2023",
    location: "Lalitpur, Nepal",
    description: "Shipped 7 production features using React/Node. Optimized load times by 43%, directly boosting conversion rates.",
    technologies: ["React.js", "Node.js", "PostgreSQL", "JavaScript", "API Development"],
    achievements: [
      "Shipped 7 production features",
      "Optimized load times by 43%",
      "Boosted conversion rates"
    ]
  },
  {
    id: "intel-security-lead",
    role: "IT Solutions Lead",
    company: "Intel Security Service Pvt. Ltd.",
    dates: "Aug 2022 – Mar 2023",
    location: "Kathmandu, Nepal",
    description: "Led a digital transformation resulting in a $35k revenue increase. Managed a $12k budget and negotiated vendor contracts.",
    technologies: ["WordPress", "Web Development", "IT Management", "Digital Transformation", "Budget Management"],
    achievements: [
      "Increased revenue by $35k",
      "Managed a $12k budget",
      "Negotiated vendor contracts"
    ]
  }
];