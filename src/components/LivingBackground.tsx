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

    let animationFrameId: number;
    let shootingStars: ShootingStar[] = [];
    let clouds: Cloud[] = [];
    let time = 0;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    // Smoky cloud class
    class Cloud {
      x: number;
      y: number;
      size: number;
      speedX: number;
      speedY: number;
      opacity: number;
      initialX: number;
      initialY: number;

      constructor() {
        this.size = 200 + Math.random() * 300;
        this.initialX = Math.random() * canvas.width;
        this.initialY = Math.random() * canvas.height * 0.6;
        this.x = this.initialX;
        this.y = this.initialY;
        this.speedX = (Math.random() - 0.5) * 0.5;
        this.speedY = (Math.random() - 0.5) * 0.3;
        this.opacity = 0.03 + Math.random() * 0.04;
      }

      update() {
        // Slow drift movement
        this.x += this.speedX;
        this.y += this.speedY;

        // Gentle floating motion
        this.x += Math.sin(time * 0.001 + this.initialX * 0.01) * 0.2;
        this.y += Math.cos(time * 0.001 + this.initialY * 0.01) * 0.2;
      }

      draw() {
        if (!ctx) return;

        const gradient = ctx.createRadialGradient(
          this.x,
          this.y,
          0,
          this.x,
          this.y,
          this.size
        );

        gradient.addColorStop(0, `rgba(255, 255, 255, ${this.opacity})`);
        gradient.addColorStop(0.5, `rgba(255, 255, 255, ${this.opacity * 0.5})`);
        gradient.addColorStop(1, "rgba(255, 255, 255, 0)");

        ctx.fillStyle = gradient;
        ctx.fillRect(
          this.x - this.size,
          this.y - this.size,
          this.size * 2,
          this.size * 2
        );
      }
    }

    // Shooting star class
    class ShootingStar {
      x: number;
      y: number;
      length: number;
      speed: number;
      opacity: number;
      angle: number;
      life: number;
      maxLife: number;

      constructor() {
        // Start from various positions (top-left to bottom-right diagonal)
        const side = Math.random();
        if (side < 0.5) {
          // Start from left side
          this.x = -150;
          this.y = Math.random() * canvas.height * 0.4;
        } else {
          // Start from top
          this.y = -150;
          this.x = Math.random() * canvas.width * 0.3 + canvas.width * 0.2;
        }

        this.length = 80 + Math.random() * 120;
        this.speed = 2 + Math.random() * 4;
        this.opacity = 0.4 + Math.random() * 0.4;
        this.angle = 30 * (Math.PI / 180); // 30 degrees diagonal
        this.maxLife = 3000 + Math.random() * 2000;
        this.life = 0;
      }

      update(deltaTime: number) {
        this.life += deltaTime;
        // Move diagonally
        this.x += Math.cos(this.angle) * this.speed * 1.5;
        this.y += Math.sin(this.angle) * this.speed;

        // Fade out
        const ageRatio = this.life / this.maxLife;
        this.opacity = Math.max(0, this.opacity * (1 - ageRatio * 1.2));
      }

      draw() {
        if (!ctx || this.opacity <= 0) return;

        const endX = this.x + Math.cos(this.angle) * this.length;
        const endY = this.y + Math.sin(this.angle) * this.length;

        const gradient = ctx.createLinearGradient(this.x, this.y, endX, endY);

        gradient.addColorStop(0, `rgba(255, 255, 255, ${this.opacity})`);
        gradient.addColorStop(0.5, `rgba(255, 255, 255, ${this.opacity * 0.5})`);
        gradient.addColorStop(1, "rgba(255, 255, 255, 0)");

        ctx.strokeStyle = gradient;
        ctx.lineWidth = 1.5;
        ctx.beginPath();
        ctx.moveTo(this.x, this.y);
        ctx.lineTo(endX, endY);
        ctx.stroke();

        // Bright dot at head
        ctx.fillStyle = `rgba(255, 255, 255, ${this.opacity * 0.9})`;
        ctx.beginPath();
        ctx.arc(this.x, this.y, 1.5, 0, Math.PI * 2);
        ctx.fill();
      }

      isDead() {
        return (
          this.y > canvas.height + 100 ||
          this.x > canvas.width + 100 ||
          this.opacity <= 0 ||
          this.life >= this.maxLife
        );
      }
    }

    let lastTime = performance.now();

    const animate = (currentTime: number) => {
      const deltaTime = currentTime - lastTime;
      lastTime = currentTime;
      time += deltaTime;

      if (!ctx) return;

      // Clear canvas with dark background
      ctx.fillStyle = themeState.isDarkMode ? "#0A0A0A" : "#FAFAFA";
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Update and draw clouds
      clouds.forEach((cloud) => {
        cloud.update();
        cloud.draw();
      });

      // Update and draw shooting stars
      shootingStars = shootingStars.filter((star) => {
        star.update(deltaTime);
        star.draw();
        return !star.isDead();
      });

      // Spawn new shooting stars occasionally
      if (Math.random() < 0.002) {
        shootingStars.push(new ShootingStar());
      }

      animationFrameId = requestAnimationFrame(animate);
    };

    resizeCanvas();

    // Initialize clouds
    for (let i = 0; i < 3; i++) {
      clouds.push(new Cloud());
    }

    // Initialize a few shooting stars
    for (let i = 0; i < 2; i++) {
      setTimeout(() => {
        shootingStars.push(new ShootingStar());
      }, i * 1000);
    }

    lastTime = performance.now();
    animationFrameId = requestAnimationFrame(animate);

    const handleResize = () => {
      resizeCanvas();
      // Reinitialize clouds
      clouds = [];
      for (let i = 0; i < 3; i++) {
        clouds.push(new Cloud());
      }
      // Clean up stars
      shootingStars = shootingStars.filter(
        (star) => star.x < canvas.width + 100 && star.y < canvas.height + 100
      );
    };

    window.addEventListener("resize", handleResize);

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("resize", handleResize);
    };
  }, [themeState.isDarkMode]);

  return (
    <canvas
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

