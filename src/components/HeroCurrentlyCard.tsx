import React from "react";
import { Coffee, GraduationCap, Laptop } from "lucide-react";

const HeroCurrentlyCard: React.FC = () => {
  return (
    <div className="h-full w-full rounded-2xl bg-card p-6 border border-border-primary/50 shadow-sm flex flex-col justify-between hover:border-accent-primary/40 transition-colors">
      <div>
        <h3 className="label-serif mb-4">Currently</h3>
        <ul className="space-y-3">
          <li className="flex items-start gap-3">
            <span className="mt-1 flex-shrink-0 text-accent-primary">
              <Laptop className="w-4 h-4" />
            </span>
            <span className="text-sm text-text-secondary leading-snug">
              Building SnapMacros: photograph a meal, get an instant macro
              breakdown
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="mt-1 flex-shrink-0 text-accent-primary">
              <GraduationCap className="w-4 h-4" />
            </span>
            <span className="text-sm text-text-secondary leading-snug">
              Recently completed MS CS @ GWU (3.97 GPA). Focused on Machine
              Learning and Distributed Systems.
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="mt-1 flex-shrink-0 text-accent-primary">
              <Coffee className="w-4 h-4" />
            </span>
            <span className="text-sm text-text-secondary leading-snug">
              Open to full-stack and ML engineering roles across the US
            </span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default HeroCurrentlyCard;
