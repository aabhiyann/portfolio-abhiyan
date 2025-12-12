import React from "react";

const DottedBackground: React.FC = () => {
  return (
    <div
      className="fixed inset-0 pointer-events-none"
      style={{
        zIndex: 1,
      }}
    >
      {/* Dark mode override using CSS classes if needed, or relying on the variable change */}
      <style>{`
        :root[class~="dark"] .dotted-bg {
          --dot-color: rgba(255, 255, 255, 0.15);
        }
        :root:not([class~="dark"]) .dotted-bg {
          --dot-color: rgba(0, 0, 0, 0.15);
        }
      `}</style>
      <div
        className="absolute inset-0 dotted-bg"
        style={{
          backgroundImage:
            "radial-gradient(circle, var(--dot-color) 1px, transparent 1px)",
          backgroundSize: "20px 20px",
        }}
      />
    </div>
  );
};

export default DottedBackground;
