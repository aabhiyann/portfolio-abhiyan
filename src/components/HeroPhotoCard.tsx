import React from "react";

const HeroPhotoCard: React.FC = () => {
  return (
    <div className="h-full w-full rounded-2xl overflow-hidden shadow-2xl border border-border-primary/50 relative bg-card/40 backdrop-blur-md group">
      <img
        src="/images/about/portrait.jpg"
        alt="Abhiyan Sainju"
        className="absolute inset-0 w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 via-transparent to-transparent pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-full p-6 text-white text-left z-10 flex flex-col justify-end">
        <h3 className="text-xl font-bold font-heading mb-1">Abhiyan Sainju</h3>
        <p className="text-sm font-mono text-gray-300">Washington, DC</p>
      </div>
      <div className="absolute top-4 left-4 z-10">
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-bg-primary/80 backdrop-blur-md border border-border-primary/50 shadow-sm">
          <span className="w-2 h-2 rounded-full bg-green-500 shadow-[0_0_8px_rgba(34,197,94,0.6)]" />
          <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-text-primary font-bold">
            Available Now
          </span>
        </div>
      </div>
    </div>
  );
};

export default HeroPhotoCard;
