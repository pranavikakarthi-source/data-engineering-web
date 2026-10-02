"use client";

import { useEffect, useRef } from "react";

interface AnimatedWaveCurveProps {
  className?: string;
}

export default function AnimatedWaveCurve({ className = "" }: AnimatedWaveCurveProps) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = canvas.offsetWidth * window.devicePixelRatio || 1200);
    let height = (canvas.height = canvas.offsetHeight * window.devicePixelRatio || 600);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = canvas.offsetWidth * window.devicePixelRatio || 1200;
      height = canvas.height = canvas.offsetHeight * window.devicePixelRatio || 600;
    };

    window.addEventListener("resize", handleResize);

    // Particle nodes along the glowing ribbons
    interface Particle {
      progress: number;
      speed: number;
      size: number;
      strandIndex: number;
      alpha: number;
      color: string;
    }

    const particles: Particle[] = [];
    const colors = ["#2ec4b6", "#1f6fb2", "#38bdf8", "#06b6d4", "#60a5fa", "#0ea5e9"];

    for (let i = 0; i < 40; i++) {
      particles.push({
        progress: Math.random(),
        speed: 0.0012 + Math.random() * 0.002,
        size: 1.5 + Math.random() * 2.5,
        strandIndex: Math.floor(Math.random() * 18),
        alpha: 0.5 + Math.random() * 0.5,
        color: colors[Math.floor(Math.random() * colors.length)],
      });
    }

    let time = 0;
    let mouseX = width / 2;
    let mouseY = height / 2;
    let targetMouseX = width / 2;
    let targetMouseY = height / 2;

    const onMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      const scaleX = canvas.width / rect.width;
      const scaleY = canvas.height / rect.height;
      targetMouseX = (e.clientX - rect.left) * scaleX;
      targetMouseY = (e.clientY - rect.top) * scaleY;
    };

    window.addEventListener("mousemove", onMouseMove);

    // Number of individual flowing strands in the braided ribbon
    const strandCount = 18;

    const render = () => {
      time += 0.012;
      mouseX += (targetMouseX - mouseX) * 0.05;
      mouseY += (targetMouseY - mouseY) * 0.05;

      ctx.clearRect(0, 0, width, height);

      // Coordinates generator for smooth flowing braided curves
      const getStrandPoint = (strandIdx: number, tPercent: number) => {
        const x = tPercent * width;
        const strandOffset = (strandIdx - strandCount / 2) * 4.5;
        const wave1 = Math.sin(tPercent * 3.5 + time + strandIdx * 0.08) * (height * 0.16);
        const wave2 = Math.cos(tPercent * 2.2 - time * 0.8 + strandIdx * 0.05) * (height * 0.1);
        const wave3 = Math.sin(tPercent * 6.0 + time * 1.4) * (height * 0.035);

        // Subtle mouse influence
        const dx = x - mouseX;
        const mouseDist = Math.max(0, 1 - Math.abs(dx) / (width * 0.4));
        const mouseOffset = Math.sin(dx * 0.005) * (mouseDist * 30);

        const baseY = height * 0.52;
        const y = baseY + wave1 + wave2 + wave3 + strandOffset + mouseOffset;
        return { x, y };
      };

      // Draw glowing strands
      for (let s = 0; s < strandCount; s++) {
        ctx.beginPath();
        const colorIdx = s % colors.length;
        const baseColor = colors[colorIdx];
        const isCoreStrand = s >= 6 && s <= 12;

        const pointsCount = 60;
        for (let i = 0; i <= pointsCount; i++) {
          const t = i / pointsCount;
          const pt = getStrandPoint(s, t);
          if (i === 0) {
            ctx.moveTo(pt.x, pt.y);
          } else {
            ctx.lineTo(pt.x, pt.y);
          }
        }

        // Outer ambient glow
        ctx.save();
        ctx.shadowColor = baseColor;
        ctx.shadowBlur = isCoreStrand ? 18 : 10;
        ctx.lineWidth = isCoreStrand ? 2.5 * window.devicePixelRatio : 1.2 * window.devicePixelRatio;

        // Gradient fade at left and right edges
        const strokeGrad = ctx.createLinearGradient(0, 0, width, 0);
        strokeGrad.addColorStop(0, "rgba(31, 111, 178, 0)");
        strokeGrad.addColorStop(0.15, `${baseColor}${isCoreStrand ? "bb" : "66"}`);
        strokeGrad.addColorStop(0.5, `${baseColor}${isCoreStrand ? "ff" : "99"}`);
        strokeGrad.addColorStop(0.85, `${baseColor}${isCoreStrand ? "bb" : "66"}`);
        strokeGrad.addColorStop(1, "rgba(46, 196, 182, 0)");

        ctx.strokeStyle = strokeGrad;
        ctx.lineCap = "round";
        ctx.lineJoin = "round";
        ctx.stroke();
        ctx.restore();
      }

      // Render traveling photon nodes & light particles along the strands
      particles.forEach((p) => {
        p.progress += p.speed;
        if (p.progress > 1) {
          p.progress = 0;
          p.strandIndex = Math.floor(Math.random() * strandCount);
        }

        const pt = getStrandPoint(p.strandIndex, p.progress);

        // Draw particle glow
        ctx.save();
        ctx.shadowColor = p.color;
        ctx.shadowBlur = 12;
        ctx.fillStyle = p.color;
        ctx.globalAlpha = p.alpha * Math.sin(p.progress * Math.PI); // fade at ends

        ctx.beginPath();
        ctx.arc(pt.x, pt.y, p.size * window.devicePixelRatio, 0, Math.PI * 2);
        ctx.fill();

        // White core highlight for intense neon look
        ctx.fillStyle = "#ffffff";
        ctx.beginPath();
        ctx.arc(pt.x, pt.y, (p.size * 0.5) * window.devicePixelRatio, 0, Math.PI * 2);
        ctx.fill();

        ctx.restore();
      });

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("mousemove", onMouseMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div className={`relative w-full overflow-hidden pointer-events-none ${className}`}>
      {/* Underlying subtle glowing mesh backdrop */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#2ec4b6]/8 to-transparent blur-2xl" />
      
      {/* High performance Canvas rendering the flowing cyan/blue wave curve */}
      <canvas
        ref={canvasRef}
        className="w-full h-full block mix-blend-multiply sm:mix-blend-normal opacity-90 transition-opacity duration-700"
      />
    </div>
  );
}
