import React from "react";
import { Card } from "./ui/Card";
import { GraduationCap, Rocket, Code2 } from "lucide-react";
import SectionTitle from "./SectionTitle";

const WhyHireMe: React.FC = () => {
  const cards = [
    {
      icon: GraduationCap,
      title: "Graduate degree, 4.0",
      items: [
        "M.S. Computer Science at GWU",
        "Focused on algorithms, distributed systems, and ML",
        "Taught algorithms to 60+ graduate students",
      ],
    },
    {
      icon: Rocket,
      title: "Work that shipped",
      items: [
        "7 production features at ECS Tech",
        "1,200+ active users across personal projects",
        "Owned end to end: frontend, API, data, deployment",
      ],
    },
    {
      icon: Code2,
      title: "Full stack and ML",
      items: [
        "React, Next.js, FastAPI, PostgreSQL",
        "RAG pipelines, anomaly detection, forecasting",
        "Docker, AWS, CI/CD",
      ],
    },
  ];

  return (
    <section className="py-24 bg-bg-surface/50 relative overflow-hidden">
      <div className="max-w-5xl mx-auto px-6 md:px-8 relative z-10">
        <SectionTitle
          title="What I bring"
          subtitle="A graduate degree with a 4.0, production features that shipped, and the full stack to build them end to end."
        />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {cards.map((card) => (
            <Card
              key={card.title}
              className="h-full bg-card border border-border-primary hover:border-accent-primary/30 transition-all duration-300"
            >
              <div className="p-8 h-full flex flex-col">
                <div className="w-12 h-12 rounded-lg bg-accent-primary/10 flex items-center justify-center mb-6">
                  <card.icon className="w-6 h-6 text-accent-primary" />
                </div>

                <h3 className="text-xl font-bold text-text-primary mb-6 font-heading border-b border-border-primary/50 pb-4">
                  {card.title}
                </h3>

                <ul className="space-y-3">
                  {card.items.map((item, i) => (
                    <li key={i} className="flex items-start gap-3 group">
                      <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-accent-secondary group-hover:bg-accent-primary transition-colors" />
                      <span className="text-text-secondary text-sm leading-relaxed">
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyHireMe;
