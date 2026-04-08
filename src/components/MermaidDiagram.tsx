import React, { useEffect, useRef } from "react";
import { useAppStore } from "../store/store";
import { Shimmer } from "./ui/Skeleton";
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
  const [isRendering, setIsRendering] = React.useState(true);

  useEffect(() => {
    if (!mermaidRef.current) return;

    let isMounted = true;

    const renderChart = async () => {
      try {
        const mermaid = (await import("mermaid")).default;

        const style = getComputedStyle(document.documentElement);
        const cssVar = (name: string, fallback: string) => {
          const value = style.getPropertyValue(name).trim();
          return value || fallback;
        };

        const accent = cssVar("--color-accent-primary", "#dc7d47");
        const accentFocus = cssVar("--color-accent-focus", "#dc7d47");
        const textPrimary = cssVar("--color-text-primary", "#24292f");
        const textMuted = cssVar("--color-text-muted", "#6e7781");
        const borderPrimary = cssVar("--color-border-primary", "#dcd3c6");
        const bgSurface = cssVar("--color-bg-surface", "#f4efe8");
        const bgCard = cssVar("--color-bg-card", "#fffdf9");
        const info = cssVar("--color-info", "#58a6ff");
        /** Mermaid expects a single family name; strip stack/quotes from CSS */
        const bodyFontRaw = cssVar("--font-family-body", "DM Sans, sans-serif");
        const bodyFont =
          bodyFontRaw.split(",")[0]?.replace(/["']/g, "").trim() || "DM Sans";
        /** Solid card token — color-mix() breaks some Mermaid/SVG paths */
        const edgeLabelBackground = bgCard;

        // Initialize Mermaid — colors/fonts follow runtime CSS variables (light/dark)
        mermaid.initialize({
          startOnLoad: false,
          theme: "base", // Use base theme for maximum control
          themeVariables: {
            primaryColor: accent,
            primaryTextColor: "#ffffff",
            primaryBorderColor: accentFocus,
            lineColor: textMuted,
            secondaryColor: info,
            tertiaryColor: bgSurface,
            background: "transparent",
            mainBkg: "transparent",
            nodeBorder: accentFocus,
            clusterBkg: "transparent",
            clusterBorder: borderPrimary,
            titleColor: textPrimary,
            edgeLabelBackground,
            fontFamily: bodyFont,
            fontSize: "18px",
          },
          flowchart: {
            useMaxWidth: true,
            htmlLabels: true,
            curve: "basis", // Smooth curves
          },
          fontFamily: bodyFont,
        });

        const id = `mermaid-${Math.random().toString(36).substr(2, 9)}`;
        // Clear previous content before re-rendering
        if (mermaidRef.current) {
          mermaidRef.current.innerHTML = "";
        }

        setIsRendering(true);

        const result = await mermaid.render(id, chart);

        if (isMounted && mermaidRef.current) {
          mermaidRef.current.innerHTML = result.svg;
          setError(null);
          setIsRendering(false);
        }
      } catch (err) {
        console.error("Mermaid rendering error:", err);
        if (isMounted) {
          setError("Failed to render diagram");
          setIsRendering(false);
        }
      }
    };

    renderChart();

    return () => {
      isMounted = false;
    };
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
        className="rounded-2xl overflow-hidden border border-border-primary/30 bg-white/5 dark:bg-slate-900/20 backdrop-blur-sm relative shadow-lg p-10 hover:border-accent-primary/40 hover:shadow-xl transition-all duration-300 group cursor-zoom-in"
        onClick={serializeSvg}
      >
        {error ? (
          <div className="text-center py-8 text-text-muted">
            <p>Failed to render diagram</p>
            <p className="text-sm mt-2">{error}</p>
          </div>
        ) : (
          <div className="relative">
            {/* Loading shimmer while rendering */}
            {isRendering && (
              <Shimmer className="h-96 w-full rounded-2xl flex items-center justify-center mb-4">
                <p className="text-text-muted">Rendering diagram...</p>
              </Shimmer>
            )}

            <div
              ref={mermaidRef}
              className={`flex justify-center items-center overflow-x-auto ${isRendering ? "hidden" : ""}`}
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
