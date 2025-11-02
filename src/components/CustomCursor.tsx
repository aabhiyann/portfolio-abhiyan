import { useEffect, useRef } from "react";

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
      // Smooth interpolation with lag effect
      const speed = 0.15;
      dotX += (mouseX - dotX) * speed;
      dotY += (mouseY - dotY) * speed;

      dot.style.left = `${dotX}px`;
      dot.style.top = `${dotY}px`;

      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    // No cursor changes on hover - just let it follow normally

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("mousemove", handleMouseMove);
      interactiveElements.forEach((el) => {
        el.removeEventListener("mouseenter", handleMouseEnter);
        el.removeEventListener("mouseleave", handleMouseLeave);
      });
    };
  }, []);

  return (
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
        transition:
          "width 0.3s ease-out, height 0.3s ease-out, border-radius 0.3s ease-out",
      }}
    />
  );
};

export default CustomCursor;
