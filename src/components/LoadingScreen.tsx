"use client";

import { useEffect, useRef } from "react";
import { motion } from "framer-motion";

interface LoadingScreenProps {
  onComplete: () => void;
}

export default function LoadingScreen({ onComplete }: LoadingScreenProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    let progress = 0;
    const totalStrokes = 30;
    let frameId: number;

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      const cx = canvas.width / 2;
      const cy = canvas.height / 2;

      for (let i = 0; i < Math.floor(progress * totalStrokes); i++) {
        const angle = (i / totalStrokes) * Math.PI * 2;
        const spread = Math.random() * 100 + 50;
        const x = cx + Math.cos(angle) * spread;
        const y = cy + Math.sin(angle) * spread;

        ctx.beginPath();
        ctx.moveTo(cx, cy);
        const endX = x + (Math.random() - 0.5) * 80;
        const endY = y + (Math.random() - 0.5) * 80;
        ctx.quadraticCurveTo(
          (cx + x) / 2 + (Math.random() - 0.5) * 40,
          (cy + y) / 2 + (Math.random() - 0.5) * 40,
          endX,
          endY
        );
        ctx.strokeStyle = `rgba(17, 17, 17, ${0.3 + Math.random() * 0.4})`;
        ctx.lineWidth = 2 + Math.random() * 4;
        ctx.stroke();
      }

      progress += 0.015;

      if (progress < 1) {
        frameId = requestAnimationFrame(draw);
      } else {
        setTimeout(onComplete, 600);
      }
    };

    frameId = requestAnimationFrame(draw);

    return () => cancelAnimationFrame(frameId);
  }, [onComplete]);

  return (
    <motion.div
      className="fixed inset-0 z-[100] bg-paper flex items-center justify-center"
      exit={{ y: "-100%" }}
      transition={{ duration: 0.8, ease: [0.7, 0, 0.3, 1] }}
    >
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full"
        aria-hidden="true"
      />
      <div className="relative z-10 text-center">
        <p className="font-display text-3xl md:text-5xl text-ink tracking-wider">
          KINTSUGI
        </p>
        <p className="font-mono text-xs text-ink/40 mt-4 tracking-[0.3em] uppercase">
          Loading...
        </p>
      </div>
    </motion.div>
  );
}
