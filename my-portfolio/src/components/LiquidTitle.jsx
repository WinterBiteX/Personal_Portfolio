import { useEffect, useRef } from "react";

export default function LiquidTitle({ text }) {
  const canvasRef = useRef(null);
  const containerRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const container = containerRef.current;
    const ctx = canvas.getContext("2d");

    const dpr = window.devicePixelRatio || 1;
    const width = container.offsetWidth;
    const height = container.offsetHeight;
    canvas.width = width * dpr;
    canvas.height = height * dpr;
    canvas.style.width = width + "px";
    canvas.style.height = height + "px";
    ctx.scale(dpr, dpr);

    const points = 80;
    const waves = Array.from({ length: points + 1 }, (_, i) => ({
      x: (i / points) * width,
      y: height * 0.6,
      vy: 0,
    }));

    let fillLevel = height * 0.6;
    let animFrame;

    const handleScroll = () => {
        const scrollPct = window.scrollY / (document.body.scrollHeight - window.innerHeight);
        fillLevel = height * (0.5 + scrollPct * 0.2);
        for (let i = 0; i < waves.length; i++) {
            waves[i].vy -= (Math.random() - 0.3) * 8;
        }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    // natural idle sloshing
    let time = 0;
    const animate = () => {
      time += 0.03;
      ctx.clearRect(0, 0, width, height);

      for (let i = 0; i < waves.length; i++) {
        const spring = 0.03;
        const damping = 0.88;
        // add natural idle wave
        const idleOffset = Math.sin(time + i * 0.3) * 2;
        waves[i].vy += (fillLevel + idleOffset - waves[i].y) * spring;
        if (i > 0) waves[i].vy += (waves[i - 1].y - waves[i].y) * 0.02;
        if (i < waves.length - 1) waves[i].vy += (waves[i + 1].y - waves[i].y) * 0.02;
        waves[i].vy *= damping;
        waves[i].y += waves[i].vy;
      }

      // draw white text base
      ctx.fillStyle = "#F1F0FF";
      ctx.font = `800 ${height * 0.85}px 'Plus Jakarta Sans', sans-serif`;
      ctx.textBaseline = "middle";
      ctx.fillText(text, 0, height / 2);

      // clip liquid inside text
      ctx.globalCompositeOperation = "source-atop";

      // gradient liquid
      const grad = ctx.createLinearGradient(0, 0, width, 0);
      grad.addColorStop(0, "rgba(124, 58, 237, 0.95)");
      grad.addColorStop(0.5, "rgba(167, 139, 250, 0.95)");
      grad.addColorStop(1, "rgba(124, 58, 237, 0.95)");

      ctx.beginPath();
      ctx.moveTo(0, height);
      ctx.lineTo(waves[0].x, waves[0].y);
      for (let i = 1; i < waves.length; i++) {
        const prev = waves[i - 1];
        const curr = waves[i];
        const cpx = (prev.x + curr.x) / 2;
        const cpy = (prev.y + curr.y) / 2;
        ctx.quadraticCurveTo(prev.x, prev.y, cpx, cpy);
      }
      ctx.lineTo(width, height);
      ctx.closePath();
      ctx.fillStyle = grad;
      ctx.fill();

      ctx.globalCompositeOperation = "source-over";
      animFrame = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      cancelAnimationFrame(animFrame);
      window.removeEventListener("scroll", handleScroll);
    };
  }, [text]);

  return (
    <div ref={containerRef} className="liquid-title-wrap">
      <canvas ref={canvasRef} className="liquid-canvas" />
    </div>
  );
}