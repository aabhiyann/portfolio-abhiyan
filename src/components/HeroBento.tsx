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
  href?: string;
}

const BentoCard: React.FC<BentoCardProps> = ({
  title,
  subtitle,
  className = "",
  children,
  delay = 0,
  bgImage,
  href,
}) => (
  <motion.div
    initial={{ opacity: 0, scale: 0.95, y: 10 }}
    animate={{ opacity: 1, scale: 1, y: 0 }}
    transition={{ type: "spring", stiffness: 300, damping: 30, delay }}
    className={`relative group overflow-hidden rounded-3xl border border-border-primary bg-card/30 backdrop-blur-xl shadow-2xl ${className}`}
  >
    {/* Specular Highlight (Top Border) - Adaptive Opacity */}
    <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-text-primary/20 to-transparent opacity-50" />

    {bgImage && (
      <div className="absolute inset-0 z-0">
        <img
          src={bgImage}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-700 ease-[cubic-bezier(0.25,1,0.5,1)] group-hover:scale-105 opacity-60 group-hover:opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-bg-primary/90 via-bg-primary/40 to-transparent" />
      </div>
    )}

    <div className="relative z-10 p-6 h-full flex flex-col justify-between pointer-events-none">
      <div className="pointer-events-auto">{children}</div>
      <div>
        <h4 className="text-text-muted text-xs font-semibold uppercase tracking-widest mb-2">
          {subtitle}
        </h4>
        <h3 className="text-text-primary text-xl font-bold tracking-tight group-hover:text-accent-primary transition-colors">
          {title}
        </h3>
      </div>
    </div>

    {/* Hover Effect Glow - Theme Aware */}
    <div className="absolute inset-0 border-2 border-transparent group-hover:border-accent-primary/20 rounded-3xl transition-colors duration-300 pointer-events-none" />

    {/* Noise Texture */}
    <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />

    {href && (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="absolute inset-0 z-20"
        aria-label={`View ${title}`}
      />
    )}
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
        href="https://github.com/aabhiyann/infrasight"
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
        href="https://github.com/aabhiyann/talkifydocs"
      >
        <div className="absolute top-4 right-4 text-white/50">
          <ArrowUpRight className="w-5 h-5" />
        </div>
      </BentoCard>
    </div>
  );
};

export default HeroBento;
