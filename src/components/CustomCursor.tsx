import React, { useEffect, useRef } from "react";

const CustomCursor: React.FC = () => {
  const cursorDot = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const dot = cursorDot.current;
    if (!dot) return;

    let mouseX = 0;
    let mouseY = 0;
    let dotX = 0;
    let dotY = 0;

    const handleMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    };

    let animationFrameId: number;

    const animate = () => {
      // Smooth interpolation with more lag effect
      const speed = 0.08; // Slower speed for more lag
      dotX += (mouseX - dotX) * speed;
      dotY += (mouseY - dotY) * speed;

      dot.style.left = `${dotX}px`;
      dot.style.top = `${dotY}px`;

      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    // Add hover effects for project cards
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
        dot.style.backgroundColor = "white";
        dot.style.backdropFilter = "none";
        dot.style.border = "none";
        dot.style.display = "block";
        dot.textContent = "";
        dot.style.fontSize = "";
        dot.style.fontWeight = "";
        dot.style.color = "";
        dot.style.padding = "";
        dot.style.boxShadow =
          "0 0 8px rgba(255, 255, 255, 0.6), 0 0 16px rgba(255, 255, 255, 0.4)";
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
  }, []);

  return (
    <div
      ref={cursorDot}
      id="cursor-dot"
      style={{
        position: "fixed",
        width: "12px",
        height: "12px",
        backgroundColor: "white",
        borderRadius: "50%",
        left: 0,
        top: 0,
        transform: "translate(-50%, -50%)",
        pointerEvents: "none",
        zIndex: 9999,
        transition:
          "width 0.3s ease-out, height 0.3s ease-out, border-radius 0.3s ease-out, background-color 0.3s ease-out, backdrop-filter 0.3s ease-out, border 0.3s ease-out, box-shadow 0.3s ease-out",
        whiteSpace: "nowrap",
        boxShadow:
          "0 0 8px rgba(255, 255, 255, 0.6), 0 0 16px rgba(255, 255, 255, 0.4)",
      }}
    />
  );
};

export default CustomCursor;
