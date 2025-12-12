import React, { useRef, useEffect, useState } from "react";

interface Card {
  id: number;
  x: number;
  y: number;
  width: number;
  height: number;
  connections: number[];
}

interface CanvasConnectionsProps {
  cards: Card[];
  isReducedMotion?: boolean;
}

const CanvasConnections: React.FC<CanvasConnectionsProps> = ({
  cards,
  isReducedMotion = false,
}) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const flowOffsetRef = useRef(0);
  const animationFrameRef = useRef<number>();
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    // Check for reduced motion preference
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    if (prefersReducedMotion || isReducedMotion) {
      setIsVisible(false);
      return;
    }
    setIsVisible(true);
  }, [isReducedMotion]);

  useEffect(() => {
    if (!isVisible) return;

    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const resizeCanvas = () => {
      // Constrain canvas to parent container (hero section)
      const parent = canvas.parentElement;
      if (parent) {
        canvas.width = parent.clientWidth;
        canvas.height = parent.clientHeight;
      } else {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
      }
    };

    resizeCanvas();

    const drawFlowingLine = (
      x1: number,
      y1: number,
      x2: number,
      y2: number,
    ) => {
      const dx = x2 - x1;
      const dy = y2 - y1;
      const distance = Math.sqrt(dx * dx + dy * dy);

      if (distance < 50) return; // Skip very short connections

      const perpX = -dy / distance;
      const perpY = dx / distance;
      const curveStrength = distance * 0.15;

      const cp1x = x1 + dx * 0.25 + perpX * curveStrength;
      const cp1y = y1 + dy * 0.25 + perpY * curveStrength;
      const cp2x = x2 - dx * 0.25 + perpX * curveStrength;
      const cp2y = y2 - dy * 0.25 + perpY * curveStrength;

      // Determine colors based on theme (check for 'dark' class on html/body)
      const isDark = document.documentElement.classList.contains("dark");
      const strokeColor = isDark
        ? "rgba(255, 255, 255, 0.06)"
        : "rgba(0, 0, 0, 0.06)";

      // Draw the curved line
      ctx.strokeStyle = strokeColor;
      ctx.lineWidth = 1.5;
      ctx.beginPath();
      ctx.moveTo(x1, y1);
      ctx.bezierCurveTo(cp1x, cp1y, cp2x, cp2y, x2, y2);
      ctx.stroke();

      // Reduced particle count for performance
      const numParticles = Math.min(Math.floor(distance / 100), 15);
      for (let i = 0; i < numParticles; i++) {
        const baseT = i / numParticles;
        const t = (baseT + flowOffsetRef.current) % 1;

        const mt = 1 - t;
        const x =
          mt * mt * mt * x1 +
          3 * mt * mt * t * cp1x +
          3 * mt * t * t * cp2x +
          t * t * t * x2;
        const y =
          mt * mt * mt * y1 +
          3 * mt * mt * t * cp1y +
          3 * mt * t * t * cp2y +
          t * t * t * y2;

        const fadeIn = Math.min(t * 3, 1);
        const fadeOut = Math.min((1 - t) * 3, 1);
        const opacity = 0.4 * fadeIn * fadeOut; // Re-calculate opacity for particle loop

        const size = 2 + fadeIn * fadeOut * 1.5;

        const gradient = ctx.createRadialGradient(x, y, 0, x, y, size);
        gradient.addColorStop(
          0,
          isDark
            ? `rgba(255, 255, 255, ${opacity})`
            : `rgba(0, 0, 0, ${opacity})`,
        );
        gradient.addColorStop(
          1,
          isDark ? `rgba(255, 255, 255, 0)` : `rgba(0, 0, 0, 0)`,
        );

        ctx.fillStyle = gradient;
        ctx.beginPath();
        ctx.arc(x, y, size, 0, Math.PI * 2);
        ctx.fill();
      }
    };

    const animate = () => {
      if (!ctx) return;

      ctx.clearRect(0, 0, canvas.width, canvas.height);

      flowOffsetRef.current += 0.002;
      if (flowOffsetRef.current > 1) flowOffsetRef.current = 0;

      cards.forEach((card) => {
        const centerX = card.x + card.width / 2;
        const centerY = card.y + card.height / 2;

        card.connections.forEach((connId) => {
          const targetCard = cards.find((c) => c.id === connId);
          if (targetCard) {
            const targetX = targetCard.x + targetCard.width / 2;
            const targetY = targetCard.y + targetCard.height / 2;
            drawFlowingLine(centerX, centerY, targetX, targetY);
          }
        });
      });

      animationFrameRef.current = requestAnimationFrame(animate);
    };

    animate();

    const handleResize = () => {
      resizeCanvas();
    };

    window.addEventListener("resize", handleResize);

    return () => {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
      window.removeEventListener("resize", handleResize);
    };
  }, [cards, isVisible]);

  if (!isVisible) return null;

  return (
    <canvas
      ref={canvasRef}
      className="absolute top-0 left-0 w-full h-full pointer-events-none"
      style={{ zIndex: 2 }}
    />
  );
};

export default CanvasConnections;
