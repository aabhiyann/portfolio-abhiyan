import React, { useEffect, useRef, useContext } from "react";
import mermaid from "mermaid";
import { ThemeContext } from "../contexts/ThemeContext";

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
  const context = useContext(ThemeContext);
  const themeState = context?.themeState;
  const isDarkMode = themeState?.isDarkMode ?? false;

  useEffect(() => {
    if (!mermaidRef.current) return;

    // Initialize Mermaid with dynamic theme
    mermaid.initialize({
      startOnLoad: false,
      theme: "base", // Use base theme for maximum control
      themeVariables: isDarkMode
        ? {
            // Dark Mode - Premium Liquid
            primaryColor: "#8B5CF6", // Violet-500
            primaryTextColor: "#F4F4F7",
            primaryBorderColor: "#7C3AED", // Violet-600
            lineColor: "#94A3B8", // Slate-400
            secondaryColor: "#14B8A6", // Teal-500
            tertiaryColor: "#1E293B", // Slate-800
            background: "transparent", // Transparent for glass effect
            mainBkg: "transparent",
            nodeBorder: "#7C3AED",
            clusterBkg: "rgba(15, 23, 42, 0.5)", // Slate-900/50
            titleColor: "#F4F4F7",
            edgeLabelBackground: "rgba(15, 23, 42, 0.8)",
            fontFamily: "Inter, sans-serif",
            fontSize: "14px",
          }
        : {
            // Light Mode - Clean Crystal
            primaryColor: "#6D28D9", // Violet-700
            primaryTextColor: "#1E293B", // Slate-800
            primaryBorderColor: "#8B5CF6", // Violet-500
            lineColor: "#64748B", // Slate-500
            secondaryColor: "#0D9488", // Teal-600
            tertiaryColor: "#F1F5F9", // Slate-100
            background: "transparent",
            mainBkg: "transparent",
            nodeBorder: "#8B5CF6",
            clusterBkg: "rgba(255, 255, 255, 0.5)",
            titleColor: "#1E293B",
            edgeLabelBackground: "rgba(255, 255, 255, 0.8)",
            fontFamily: "Inter, sans-serif",
            fontSize: "14px",
          },
      flowchart: {
        useMaxWidth: true,
        htmlLabels: true,
        curve: "basis", // Smooth curves
      },
      fontFamily: "Inter, sans-serif",
    });

    const id = `mermaid-${Math.random().toString(36).substr(2, 9)}`;
    // Clear previous content before re-rendering
    mermaidRef.current.innerHTML = "";

    // We need to create a temporary element because mermaid.render expects one
    // But in newer versions it wraps it.
    // The render API signature is: render(id, text, container?)

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
  }, [chart, isDarkMode]); // Re-render when theme changes

  return (
    <div className={`my-8 ${className}`}>
      {title && (
        <h4 className="text-lg font-semibold text-text-primary mb-4">
          {title}
        </h4>
      )}
      <div className="rounded-2xl overflow-hidden border border-border-primary/50 bg-card/40 backdrop-blur-md relative shadow-2xl p-8 hover:shadow-accent-primary/10 transition-shadow duration-300">
        {error ? (
          <div className="text-center py-8 text-text-muted">
            <p>Failed to render diagram</p>
            <p className="text-sm mt-2">{error}</p>
          </div>
        ) : (
          <div
            ref={mermaidRef}
            className="flex justify-center items-center overflow-x-auto"
          />
        )}
      </div>
    </div>
  );
};

export default MermaidDiagram;
