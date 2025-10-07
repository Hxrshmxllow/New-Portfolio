import React, { useEffect, useRef } from "react";

export default function CursorTrail() {
  const canvasRef = useRef(null);
  const ctxRef = useRef(null);
  const points = useRef([]);
  const target = useRef({ x: 0, y: 0 });
  const current = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    ctxRef.current = ctx;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    const handleMove = (e) => {
      target.current.x = e.clientX;
      target.current.y = e.clientY;
    };
    window.addEventListener("mousemove", handleMove);

    const animate = () => {
      const ctx = ctxRef.current;
      const { width, height } = canvas;
      ctx.clearRect(0, 0, width, height);

      // Smoothly interpolate cursor movement
      current.current.x += (target.current.x - current.current.x) * 0.2;
      current.current.y += (target.current.y - current.current.y) * 0.2;

      // Add points and cap list length (shorter trail)
      points.current.push({ x: current.current.x, y: current.current.y });
      if (points.current.length > 10) points.current.shift();

      // Draw smooth curved trail
      ctx.beginPath();
      ctx.moveTo(points.current[0]?.x || 0, points.current[0]?.y || 0);
      for (let i = 1; i < points.current.length - 2; i++) {
        const xc = (points.current[i].x + points.current[i + 1].x) / 2;
        const yc = (points.current[i].y + points.current[i + 1].y) / 2;
        ctx.quadraticCurveTo(points.current[i].x, points.current[i].y, xc, yc);
      }

      // Style: smooth glowing line
      const grad = ctx.createLinearGradient(0, 0, width, height);
      grad.addColorStop(0, "rgba(120,200,255,0.9)");
      grad.addColorStop(1, "rgba(50,150,255,0.4)");
      ctx.strokeStyle = grad;
      ctx.lineWidth = 2;
      ctx.shadowBlur = 10;
      ctx.shadowColor = "rgba(120,200,255,0.6)";
      ctx.lineCap = "round";
      ctx.lineJoin = "round";
      ctx.stroke();

      requestAnimationFrame(animate);
    };
    animate();

    return () => {
      window.removeEventListener("resize", resize);
      window.removeEventListener("mousemove", handleMove);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        pointerEvents: "none",
        zIndex: 1,
        background: "transparent",
      }}
    />
  );
}
