"use client";

import { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface RevealTextProps {
  children: React.ReactNode;
  className?: string;
  as?: "h1" | "h2" | "h3" | "p" | "span" | "div";
  delay?: number;
  stagger?: number;
}

export default function RevealText({
  children,
  className = "",
  as: Tag = "div",
  delay = 0,
  stagger = 0.04,
}: RevealTextProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const chars = el.querySelectorAll(".reveal-char");
    if (!chars.length) return;

    gsap.set(chars, { y: "110%" });

    const ctx = gsap.context(() => {
      ScrollTrigger.create({
        trigger: el,
        start: "top 85%",
        onEnter: () => {
          gsap.to(chars, {
            y: 0,
            duration: 1.2,
            stagger,
            delay,
            ease: "power4.out",
          });
        },
        once: true,
      });
    });

    return () => ctx.revert();
  }, [delay, stagger]);

  return (
    <Tag ref={containerRef} className={`overflow-hidden ${className}`}>
      <span className="inline-block">{children}</span>
    </Tag>
  );
}
