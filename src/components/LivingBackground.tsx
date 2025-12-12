import React, { useRef, useEffect } from "react";
import { useTheme } from "../contexts/useTheme";

const LivingBackground: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const { themeState } = useTheme();

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // Helper to get CSS variable value
    const getCssColor = (variable: string) => {
      return getComputedStyle(document.documentElement)
        .getPropertyValue(variable)
        .trim();
    };

    const bgPrimary = getCssColor("--color-bg-primary"); // Fetch initial color

    let animationFrameId: number;
    let fallingStars: FallingStar[] = [];
    let time = 0;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    // Falling star class (lines falling down)
    class FallingStar {
      x: number;
      y: number;
      length: number;
      speed: number;
      opacity: number;
      angle: number;
      life: number;
      maxLife: number;
      initialOpacity: number;

      constructor(
        index: number,
        total: number,
        canvasWidth: number,
        canvasHeight: number,
      ) {
        // Start from anywhere in the canvas
        this.x = Math.random() * canvasWidth;
        this.y = Math.random() * canvasHeight;

        // Consistent properties for falling stars
        this.length = 20 + (index % 5) * 10; // 20-60px lines
        this.speed = 0.5 + (index % 3) * 0.3; // 0.5-1.1px per frame (slower)
        this.angle = Math.PI / 2; // Falling straight down (positive Y direction)
        this.initialOpacity = 0.4 + (index % 4) * 0.15; // 0.4-0.85 opacity
        this.opacity = this.initialOpacity;
        this.maxLife = 3000 + (index % 4) * 1000; // Live for 3-6 seconds
        this.life = 0;
      }

      update(canvasWidth: number, canvasHeight: number, deltaTime: number) {
        // Increment life timer
        this.life += deltaTime;

        // Move downward (falling) - positive Y is downward in canvas coordinates
        this.y += this.speed; // Direct downward movement
        // Small horizontal drift for natural movement
        this.x += Math.sin(time * 0.001 + this.x * 0.01) * 0.1;

        // Fade out over time
        const ageRatio = this.life / this.maxLife;
        this.opacity = this.initialOpacity * (1 - ageRatio);

        // Wrap horizontally (just for movement, not resetting)
        if (this.x > canvasWidth + 50) {
          this.x = -50;
        }
        if (this.x < -50) {
          this.x = canvasWidth + 50;
        }
      }

      isDead() {
        return this.life >= this.maxLife || this.opacity <= 0;
      }

      draw() {
        if (!ctx) return;

        // Calculate line - head is at current position, tail extends upward (since it's falling)
        // When falling down, the trail should be above the head
        const startX = this.x; // Head position
        const startY = this.y; // Head position (bright dot here)
        const endX = this.x; // Tail is straight up
        const endY = this.y - this.length; // Tail extends upward from the head

        // Create gradient for the falling star line (bright head at bottom, fading tail upward)
        const gradient = ctx.createLinearGradient(startX, startY, endX, endY);
        gradient.addColorStop(0, `rgba(255, 255, 255, ${this.opacity})`); // Bright at head (bottom)
        gradient.addColorStop(
          0.5,
          `rgba(255, 255, 255, ${this.opacity * 0.6})`,
        );
        gradient.addColorStop(1, `rgba(255, 255, 255, 0)`); // Transparent at tail (top)

        ctx.strokeStyle = gradient;
        ctx.lineWidth = 1.5;
        ctx.beginPath();
        ctx.moveTo(startX, startY); // Start at head (bright)
        ctx.lineTo(endX, endY); // End at tail (fading)
        ctx.stroke();

        // Small bright dot at the head (the falling point)
        ctx.fillStyle = `rgba(255, 255, 255, ${this.opacity})`;
        ctx.beginPath();
        ctx.arc(this.x, this.y, 1, 0, Math.PI * 2);
        ctx.fill();
      }
    }

    let lastTime = performance.now();

    const animate = (currentTime: number) => {
      const deltaTime = currentTime - lastTime;
      lastTime = currentTime;
      time += deltaTime;

      if (!ctx) return;

      // Clear canvas with semantic background color
      // re-fetch on frame in case of transition, or ideally on theme change (which triggers effect)
      // Since this effect re-runs on themeState.isDarkMode, we can just use the fetched value
      ctx.fillStyle = bgPrimary;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Update and draw falling stars, remove dead ones
      fallingStars = fallingStars.filter((star) => {
        star.update(canvas.width, canvas.height, deltaTime);
        if (!star.isDead()) {
          star.draw();
          return true;
        }
        return false;
      });

      // Spawn new falling stars more frequently to replace the ones that fade out
      if (Math.random() < 0.01) {
        const newIndex = fallingStars.length;
        fallingStars.push(
          new FallingStar(newIndex, 15, canvas.width, canvas.height),
        );
      }

      animationFrameId = requestAnimationFrame(animate);
    };

    resizeCanvas();

    // Initialize fewer falling stars at start (they'll spawn more over time)
    const numStars = 5;
    for (let i = 0; i < numStars; i++) {
      fallingStars.push(
        new FallingStar(i, numStars, canvas.width, canvas.height),
      );
    }

    lastTime = performance.now();
    animationFrameId = requestAnimationFrame(animate);

    const handleResize = () => {
      resizeCanvas();
      // Reinitialize falling stars on resize
      fallingStars = [];
      const numStars = 15;
      for (let i = 0; i < numStars; i++) {
        fallingStars.push(
          new FallingStar(i, numStars, canvas.width, canvas.height),
        );
      }
    };

    window.addEventListener("resize", handleResize);

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("resize", handleResize);
    };
  }, [themeState.isDarkMode]); // Dependency ensures effect re-runs on theme change

  // Force re-render of canvas element itself on theme change to ensure clean state
  return (
    <canvas
      key={themeState.isDarkMode ? "dark" : "light"}
      ref={canvasRef}
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        zIndex: 0,
        width: "100%",
        height: "100%",
      }}
    />
  );
};

export default LivingBackground;
