import React from "react";
import TerminalCard from "./TerminalCard";

const HeroBento: React.FC = () => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-6 md:grid-rows-6 gap-4 w-full h-[600px] md:h-[700px]">
      {/* Terminal: Takes up full grid */}
      <div className="col-span-2 md:col-span-6 md:row-span-6 rounded-2xl overflow-hidden shadow-2xl border border-border-primary/50">
        <TerminalCard />
      </div>
    </div>
  );
};

export default HeroBento;
