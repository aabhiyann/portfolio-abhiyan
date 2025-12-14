import React, { useEffect, useRef } from "react";
import mermaid from "mermaid";

interface MermaidDiagramProps {
  chart: string;
  title?: string;
  className?: string;
}

const MermaidDiagram: React.FC<MermaidDiagramProps> = ({
  chart,
  title,
  className = "",
}) => {
  const mermaidRef = useRef<HTMLDivElement>(null);
  const [error, setError] = React.useState<string | null>(null);

  useEffect(() => {
    if (!mermaidRef.current) return;

    // Initialize Mermaid with theme
    mermaid.initialize({
      startOnLoad: false,
      theme: "dark",
      themeVariables: {
        primaryColor: "#8B5CF6",
        primaryTextColor: "#F4F4F7",
        primaryBorderColor: "#A78BFA",
        lineColor: "#64748B",
        secondaryColor: "#22C55E",
        tertiaryColor: "#1A202C",
        background: "#0F172A",
        mainBkg: "#0F172A",
        secondBkg: "#1A202C",
        textColor: "#F4F4F7",
      },
      flowchart: {
        useMaxWidth: true,
        htmlLabels: true,
        curve: "basis",
      },
    });

    const id = `mermaid-${Math.random().toString(36).substr(2, 9)}`;
    mermaidRef.current.id = id;

    mermaid
      .render(id, chart)
      .then((result) => {
        if (mermaidRef.current) {
          mermaidRef.current.innerHTML = result.svg;
          setError(null);
        }
      })
      .catch((err) => {
        console.error("Mermaid rendering error:", err);
        setError("Failed to render diagram");
      });
  }, [chart]);

  return (
    <div className={`my-8 ${className}`}>
      {title && (
        <h4 className="text-lg font-semibold text-text-primary mb-4">
          {title}
        </h4>
      )}
      <div className="rounded-2xl overflow-hidden border border-border-primary/50 bg-bg-surface/30 p-6">
        {error ? (
          <div className="text-center py-8 text-text-muted">
            <p>Failed to render diagram</p>
            <p className="text-sm mt-2">{error}</p>
          </div>
        ) : (
          <div ref={mermaidRef} className="flex justify-center items-center" />
        )}
      </div>
    </div>
  );
};

export default MermaidDiagram;
