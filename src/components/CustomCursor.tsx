import React, { useEffect, useRef } from "react";
import { useTheme } from "../contexts/useTheme";

const CustomCursor: React.FC = () => {
  const cursorDot = useRef<HTMLDivElement>(null);
  const { themeState } = useTheme();

  useEffect(() => {
    const dot = cursorDot.current;
    if (!dot) return;

    // Check if device has touch - hide cursor on touch devices
    const isTouchDevice = window.matchMedia("(pointer: coarse)").matches;
    if (isTouchDevice) {
      dot.style.display = "none";
      return;
    }

    let mouseX = 0;
    let mouseY = 0;
    let dotX = 0;
    let dotY = 0;

    // Theme-aware colors
    const cursorColor = "rgba(220, 125, 71, 0.9)"; // amber for both modes to match #dc7d47
    const cursorGlow =
      "0 0 8px rgba(220, 125, 71, 0.6), 0 0 16px rgba(220, 125, 71, 0.4)";

    dot.style.backgroundColor = cursorColor;
    dot.style.boxShadow = cursorGlow;

    const handleMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    };

    let animationFrameId: number;

    const animate = () => {
      const speed = 0.08;
      dotX += (mouseX - dotX) * speed;
      dotY += (mouseY - dotY) * speed;

      dot.style.left = `${dotX}px`;
      dot.style.top = `${dotY}px`;

      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    const projectCards = document.querySelectorAll(".project-card");

    const handleMouseEnter = () => {
      if (dot) {
        dot.style.width = "120px";
        dot.style.height = "40px";
        dot.style.borderRadius = "20px";
        dot.style.backgroundColor = "rgba(0, 0, 0, 0.7)";
        dot.style.backdropFilter = "blur(8px)";
        dot.style.border = "1px solid rgba(255, 255, 255, 0.3)";
        dot.style.display = "flex";
        dot.style.alignItems = "center";
        dot.style.justifyContent = "center";
        dot.textContent = "View Project";
        dot.style.fontSize = "14px";
        dot.style.fontWeight = "500";
        dot.style.color = "white";
        dot.style.padding = "0 16px";
        dot.style.boxShadow = "0 0 12px rgba(255, 255, 255, 0.3)";
      }
    };

    const handleMouseLeave = () => {
      if (dot) {
        dot.style.width = "12px";
        dot.style.height = "12px";
        dot.style.borderRadius = "50%";
        dot.style.backgroundColor = cursorColor;
        dot.style.backdropFilter = "none";
        dot.style.border = "none";
        dot.style.display = "block";
        dot.textContent = "";
        dot.style.fontSize = "";
        dot.style.fontWeight = "";
        dot.style.color = "";
        dot.style.padding = "";
        dot.style.boxShadow = cursorGlow;
      }
    };

    projectCards.forEach((card) => {
      card.addEventListener("mouseenter", handleMouseEnter);
      card.addEventListener("mouseleave", handleMouseLeave);
    });

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("mousemove", handleMouseMove);
      projectCards.forEach((card) => {
        card.removeEventListener("mouseenter", handleMouseEnter);
        card.removeEventListener("mouseleave", handleMouseLeave);
      });
    };
  }, [themeState.isDarkMode]);

  return (
    <div
      ref={cursorDot}
      id="cursor-dot"
      className="hidden md:block"
      style={{
        position: "fixed",
        width: "12px",
        height: "12px",
        borderRadius: "50%",
        left: 0,
        top: 0,
        transform: "translate(-50%, -50%)",
        pointerEvents: "none",
        zIndex: 9999,
        transition:
          "width 0.3s ease-out, height 0.3s ease-out, border-radius 0.3s ease-out, background-color 0.3s ease-out, backdrop-filter 0.3s ease-out, border 0.3s ease-out, box-shadow 0.3s ease-out",
        whiteSpace: "nowrap",
      }}
    />
  );
};

export default CustomCursor;
