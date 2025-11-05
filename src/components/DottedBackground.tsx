import React from "react";

const DottedBackground: React.FC = () => {
  return (
    <div
      className="fixed inset-0 pointer-events-none"
      style={{
        backgroundImage:
          "radial-gradient(circle, rgba(255, 255, 255, 0.08) 1px, transparent 1px)",
        backgroundSize: "20px 20px",
        zIndex: 1,
      }}
    />
  );
};

export default DottedBackground;

