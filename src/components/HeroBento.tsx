import React from "react";
import { motion } from "framer-motion";
import TerminalCard from "./TerminalCard";
import { ArrowUpRight } from "lucide-react";

interface BentoCardProps {
  title: string;
  subtitle: string;
  className?: string;
  children?: React.ReactNode;
  delay?: number;
  bgImage?: string;
}

const BentoCard: React.FC<BentoCardProps> = ({
  title,
  subtitle,
  className = "",
  children,
  delay = 0,
  bgImage,
}) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay }}
    className={`relative group overflow-hidden rounded-2xl border border-border-primary/50 bg-card/30 backdrop-blur-sm ${className}`}
  >
    {bgImage && (
      <div className="absolute inset-0 z-0">
        <img
          src={bgImage}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-60 group-hover:opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />
      </div>
    )}

    <div className="relative z-10 p-5 h-full flex flex-col justify-between pointer-events-none">
      <div className="pointer-events-auto">{children}</div>
      <div>
        <h4 className="text-text-muted text-xs font-mono uppercase tracking-wider mb-1">
          {subtitle}
        </h4>
        <h3 className="text-white text-lg font-semibold tracking-tight group-hover:text-accent-primary transition-colors">
          {title}
        </h3>
      </div>
    </div>

    {/* Hover Effect Glow */}
    <div className="absolute inset-0 border-2 border-transparent group-hover:border-accent-primary/10 rounded-2xl transition-colors duration-300 pointer-events-none" />
  </motion.div>
);

const HeroBento: React.FC = () => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-6 md:grid-rows-6 gap-4 w-full h-[450px] md:h-[500px]">
      {/* Terminal: Takes up major left chunk */}
      <div className="col-span-2 md:col-span-4 md:row-span-6 rounded-2xl overflow-hidden shadow-2xl border border-border-primary/50">
        <TerminalCard />
      </div>

      {/* Top Right: InfraSight */}
      <BentoCard
        title="InfraSight"
        subtitle="Cloud Intelligence"
        className="col-span-1 md:col-span-2 md:row-span-3"
        bgImage="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=300&fit=crop&q=80"
        delay={0.2}
      >
        <div className="absolute top-4 right-4 text-white/50">
          <ArrowUpRight className="w-5 h-5" />
        </div>
      </BentoCard>

      {/* Bottom Right: TalkifyDocs */}
      <BentoCard
        title="TalkifyDocs"
        subtitle="AI SaaS"
        className="col-span-1 md:col-span-2 md:row-span-3"
        bgImage="https://images.unsplash.com/photo-1677442136019-21780ecad995?w=400&h=300&fit=crop&q=80"
        delay={0.3}
      >
        <div className="absolute top-4 right-4 text-white/50">
          <ArrowUpRight className="w-5 h-5" />
        </div>
      </BentoCard>
    </div>
  );
};

export default HeroBento;
