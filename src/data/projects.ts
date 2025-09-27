export const projects = [
    {
      id: 1,
      title: "InfraSight",
      description:
        "Cloud infrastructure monitoring and analytics platform that helps teams track performance, costs, and security across multiple cloud providers.",
      image: "/images/projects/infrasight-hero.webp",
      github: "https://github.com/aabhiyann/infrasight",
      live: "https://infrasight-demo.vercel.app",
      tech: ["React", "Node.js", "AWS", "PostgreSQL", "Docker", "Kubernetes"],
      impact:
        "Reduced infrastructure costs by 40% and improved deployment reliability by 95%",
      architecture: {
        nodes: [
          { id: 'frontend', label: 'React Frontend', position: { x: 100, y: 200 } },
          { id: 'api', label: 'Node.js API Gateway', position: { x: 400, y: 200 } },
          { id: 'db', label: 'PostgreSQL Database', position: { x: 700, y: 100 } },
          { id: 'monitoring', label: 'AWS Monitoring Service', position: { x: 700, y: 300 } },
          { id: 'auth', label: 'Auth Service (JWT)', position: { x: 400, y: 0 } },
        ],
        connections: [
          { from: 'frontend', to: 'api' },
          { from: 'api', to: 'db' },
          { from: 'api', to: 'monitoring' },
          { from: 'frontend', to: 'auth' },
          { from: 'api', to: 'auth' },
        ],
      },
    },
    {
      id: 2,
      title: "MelodyHub",
      description:
        "Music discovery and playlist management app with AI-powered recommendations and social features for music enthusiasts.",
      image: "/images/projects/melodyhub-hero.webp",
      github: "https://github.com/aabhiyann/melodyhub",
      live: "https://melodyhub.vercel.app",
      tech: ["Vue.js", "Python", "Spotify API", "MongoDB", "Redis", "Docker"],
      impact:
        "Served 10K+ users with 85% user retention rate and 4.8/5 app store rating",
    },
    {
      id: 3,
      title: "TalkifyDocs",
      description:
        "AI-powered document summarization tool that converts lengthy documents into concise, actionable insights using advanced NLP.",
      image: "/images/projects/talkifydocs-hero.webp",
      github: "https://github.com/aabhiyann/talkifydocs",
      live: "https://talkifydocs.vercel.app",
      tech: ["React", "OpenAI", "TypeScript", "FastAPI", "PostgreSQL", "AWS"],
      impact:
        "Processed 50K+ documents, saving users an average of 2 hours per document review",
    },
    {
      id: 4,
      title: "CloudCost Optimizer",
      description:
        "Automated cloud resource optimization platform that analyzes usage patterns and recommends cost-saving strategies.",
      image: "/images/projects/cloudcost-hero.webp",
      github: "https://github.com/aabhiyann/cloudcost-optimizer",
      live: "https://cloudcost-demo.vercel.app",
      tech: ["React", "Python", "AWS", "Terraform", "Grafana", "Prometheus"],
      impact:
        "Helped companies save $2M+ annually in cloud costs with 99.9% accuracy",
    },
    {
      id: 5,
      title: "DevOps Dashboard",
      description:
        "Comprehensive DevOps monitoring dashboard with real-time metrics, alerting, and deployment tracking across environments.",
      image: "/images/projects/devops-dashboard-hero.webp",
      github: "https://github.com/aabhiyann/devops-dashboard",
      live: "https://devops-dashboard.vercel.app",
      tech: ["Next.js", "Go", "Kubernetes", "Prometheus", "Grafana", "Docker"],
      impact:
        "Reduced incident response time by 60% and improved system uptime to 99.95%",
    },
    {
      id: 6,
      title: "AI Code Reviewer",
      description:
        "Intelligent code review assistant that analyzes pull requests and provides detailed feedback on code quality, security, and best practices.",
      image: "/images/projects/ai-code-reviewer-hero.webp",
      github: "https://github.com/aabhiyann/ai-code-reviewer",
      live: "https://ai-code-reviewer.vercel.app",
      tech: ["React", "Python", "OpenAI", "GitHub API", "Docker", "AWS"],
      impact:
        "Improved code quality by 35% and reduced review time by 50% across development teams",
    },
  ];