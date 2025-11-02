import { useEffect, useRef } from "react";

const CustomCursor: React.FC = () => {
  const cursorDot = useRef<HTMLDivElement>(null);
  const cursorOutline = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const dot = cursorDot.current;
    const outline = cursorOutline.current;
    if (!dot || !outline) return;

    const handleMouseMove = (e: MouseEvent) => {
      const posX = e.clientX;
      const posY = e.clientY;

      // Move dot instantly
      dot.style.left = `${posX}px`;
      dot.style.top = `${posY}px`;

      // Animate outline smoothly
      outline.animate(
        {
          left: `${posX}px`,
          top: `${posY}px`,
        },
        { duration: 500, fill: "forwards" }
      );
    };

    // Add hover effects for interactive elements
    const interactiveElements = document.querySelectorAll(
      "a, button, .project-card, [role='button']"
    );

    const handleMouseEnter = () => {
      if (outline) {
        outline.style.transform = "translate(-50%, -50%) scale(1.5)";
        outline.style.borderColor = "rgba(255, 255, 255, 1)";
      }
    };

    const handleMouseLeave = () => {
      if (outline) {
        outline.style.transform = "translate(-50%, -50%) scale(1)";
        outline.style.borderColor = "rgba(255, 255, 255, 0.5)";
      }
    };

    interactiveElements.forEach((el) => {
      el.addEventListener("mouseenter", handleMouseEnter);
      el.addEventListener("mouseleave", handleMouseLeave);
    });

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      interactiveElements.forEach((el) => {
        el.removeEventListener("mouseenter", handleMouseEnter);
        el.removeEventListener("mouseleave", handleMouseLeave);
      });
    };
  }, []);

  return (
    <>
      <div
        ref={cursorDot}
        id="cursor-dot"
        style={{
          position: "fixed",
          width: "8px",
          height: "8px",
          backgroundColor: "white",
          borderRadius: "50%",
          left: 0,
          top: 0,
          transform: "translate(-50%, -50%)",
          pointerEvents: "none",
          zIndex: 9999,
          transition: "transform 0.1s ease-out",
        }}
      />
      <div
        ref={cursorOutline}
        id="cursor-outline"
        style={{
          position: "fixed",
          width: "30px",
          height: "30px",
          border: "2px solid rgba(255, 255, 255, 0.5)",
          borderRadius: "50%",
          left: 0,
          top: 0,
          transform: "translate(-50%, -50%)",
          pointerEvents: "none",
          zIndex: 9998,
          transition: "transform 0.2s ease-out, border-color 0.2s ease-out",
        }}
      />
    </>
  );
};

export default CustomCursor;

