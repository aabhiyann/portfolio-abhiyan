import React from "react";
import { MotionCard } from "./ui/MotionCard";
import { GraduationCap, Rocket, Code2 } from "lucide-react";
import SectionTitle from "./SectionTitle";

const WhyHireMe: React.FC = () => {
  const cards = [
    {
      icon: GraduationCap,
      title: "Academic Excellence",
      items: [
        "M.S. CS @ GWU (4.0 GPA)",
        "Graduate TA - Algorithms",
        "22% student performance improvement",
        "AWS Cloud Certifications (2)",
      ],
    },
    {
      icon: Rocket,
      title: "Production Experience",
      items: [
        "6 deployed applications",
        "1,200+ active users impacted",
        "Built end-to-end: API → ML → UI",
        "Real metrics, not just notebooks",
      ],
    },
    {
      icon: Code2,
      title: "Full-Stack + ML",
      items: [
        "React/Next.js → FastAPI → PostgreSQL",
        "RAG, Anomaly Detection, Forecasting",
        "Docker, AWS, CI/CD",
        "Clean code + System design",
      ],
    },
  ];

  return (
    <section className="py-24 bg-bg-surface/50 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-8 relative z-10">
        <SectionTitle
          title="What Sets Me Apart"
          subtitle="Most engineers are either academic or hands-on. I bridge both: teaching algorithms to grad students while shipping production ML systems."
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {cards.map((card, index) => (
            <MotionCard
              key={card.title}
              className="h-full glass-card glass-card-hover"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
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
            </MotionCard>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyHireMe;
