import React, { useEffect, useRef } from "react";
import mermaid from "mermaid";
import { useAppStore } from "../store/store";
import ImageLightbox from "./ui/ImageLightbox";

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
  const theme = useAppStore((state) => state.theme);
  const isDarkMode = theme === "dark";

  const [isLightboxOpen, setIsLightboxOpen] = React.useState(false);
  const [svgDataUrl, setSvgDataUrl] = React.useState<string | null>(null);

  useEffect(() => {
    if (!mermaidRef.current) return;

    // Initialize Mermaid with dynamic theme
    mermaid.initialize({
      startOnLoad: false,
      theme: "base", // Use base theme for maximum control
      themeVariables: isDarkMode
        ? {
            // Dark Mode - High Contrast & Premium
            primaryColor: "#8B5CF6", // Violet-500
            primaryTextColor: "#FFFFFF", // Pure White for max contrast
            primaryBorderColor: "#A78BFA", // Violet-400 (Lighter border)
            lineColor: "#CBD5E1", // Slate-300 (Much lighter lines)
            secondaryColor: "#14B8A6", // Teal-500
            tertiaryColor: "#1E293B", // Slate-800
            background: "transparent",
            mainBkg: "transparent",
            nodeBorder: "#A78BFA",
            clusterBkg: "rgba(30, 41, 59, 0.6)", // Slate-800/60
            titleColor: "#FFFFFF",
            edgeLabelBackground: "rgba(15, 23, 42, 0.9)", // Darker background for labels
            fontFamily: "Inter, sans-serif",
            fontSize: "16px", // Larger font
          }
        : {
            // Light Mode - High Contrast
            primaryColor: "#6D28D9", // Violet-700
            primaryTextColor: "#0F172A", // Slate-900 (Darker text)
            primaryBorderColor: "#7C3AED", // Violet-600
            lineColor: "#475569", // Slate-600 (Darker lines)
            secondaryColor: "#0F766E", // Teal-700
            tertiaryColor: "#F8FAFC", // Slate-50
            background: "transparent",
            mainBkg: "transparent",
            nodeBorder: "#7C3AED",
            clusterBkg: "rgba(241, 245, 249, 0.8)",
            titleColor: "#0F172A",
            edgeLabelBackground: "rgba(255, 255, 255, 0.95)", // More opaque
            fontFamily: "Inter, sans-serif",
            fontSize: "16px", // Larger font
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

  // Function to serialize SVG to Data URL for Lightbox
  const serializeSvg = () => {
    if (mermaidRef.current) {
      const svg = mermaidRef.current.querySelector("svg");
      if (svg) {
        const svgData = new XMLSerializer().serializeToString(svg);
        const btnCode = btoa(unescape(encodeURIComponent(svgData)));
        setSvgDataUrl(`data:image/svg+xml;base64,${btnCode}`);
        setIsLightboxOpen(true);
      }
    }
  };

  return (
    <div className={`my-8 ${className}`}>
      {title && (
        <h4 className="text-lg font-semibold text-text-primary mb-4">
          {title}
        </h4>
      )}
      <div
        className="rounded-2xl overflow-hidden border border-border-primary/50 bg-card/40 backdrop-blur-md relative shadow-2xl p-8 hover:shadow-accent-primary/10 transition-shadow duration-300 group cursor-zoom-in"
        onClick={serializeSvg}
      >
        {error ? (
          <div className="text-center py-8 text-text-muted">
            <p>Failed to render diagram</p>
            <p className="text-sm mt-2">{error}</p>
          </div>
        ) : (
          <div className="relative">
            <div
              ref={mermaidRef}
              className="flex justify-center items-center overflow-x-auto"
            />
            {/* Click to Expand Indicator */}
            <div className="absolute top-0 right-0 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-2 group-hover:translate-y-0 pointer-events-none">
              <div className="bg-bg-surface/80 backdrop-blur-md border border-white/20 px-3 py-1.5 rounded-lg text-xs font-medium text-accent-primary shadow-lg flex items-center gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <circle cx="11" cy="11" r="8"></circle>
                  <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                  <line x1="11" y1="8" x2="11" y2="14"></line>
                  <line x1="8" y1="11" x2="14" y2="11"></line>
                </svg>
                Expand Chart
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Lightbox for Diagram */}
      {svgDataUrl && (
        <ImageLightbox
          isOpen={isLightboxOpen}
          onClose={() => setIsLightboxOpen(false)}
          src={svgDataUrl}
          alt={title || "Architecture Diagram"}
        />
      )}
    </div>
  );
};

export default MermaidDiagram;
