import React from "react";
import TerminalCard from "./TerminalCard";

const HeroBento: React.FC = () => {
  return (
    <div className="w-full h-[600px] md:h-[700px] rounded-2xl overflow-hidden shadow-2xl border border-border-primary/50">
      <TerminalCard />
    </div>
  );
};

export default HeroBento;
