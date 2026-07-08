"use client";

import { useEffect, useRef } from "react";
import { useMousePosition } from "@/hooks/useMousePosition";

export default function Cursor() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const mouse = useMousePosition();
  const rafRef = useRef<number | undefined>(undefined);
  const posRef = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const cursor = cursorRef.current;
    if (!cursor) return;

    const animate = () => {
      const dx = mouse.x - posRef.current.x;
      const dy = mouse.y - posRef.current.y;
      posRef.current.x += dx * 0.15;
      posRef.current.y += dy * 0.15;
      cursor.style.transform = `translate3d(${posRef.current.x - 10}px, ${posRef.current.y - 10}px, 0)`;
      rafRef.current = requestAnimationFrame(animate);
    };

    rafRef.current = requestAnimationFrame(animate);
    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, [mouse]);

  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      const ripple = document.createElement("div");
      ripple.className =
        "fixed pointer-events-none z-[9998] rounded-full border border-ink/40";
      const size = 20;
      ripple.style.width = `${size}px`;
      ripple.style.height = `${size}px`;
      ripple.style.left = `${e.clientX - size / 2}px`;
      ripple.style.top = `${e.clientY - size / 2}px`;
      ripple.style.animation = "ripple-out 1.2s ease-out forwards";
      document.body.appendChild(ripple);
      setTimeout(() => ripple.remove(), 1200);
    };

    window.addEventListener("mousedown", handleClick);
    return () => window.removeEventListener("mousedown", handleClick);
  }, []);

  return (
    <div
      ref={cursorRef}
      className="fixed top-0 left-0 w-5 h-5 bg-ink/80 rounded-full pointer-events-none z-[9999] mix-blend-multiply hidden md:block"
      style={{ transition: "transform 0.1s ease" }}
      aria-hidden="true"
    />
  );
}
