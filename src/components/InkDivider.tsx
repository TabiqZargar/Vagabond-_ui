"use client";

import { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface InkDividerProps {
  className?: string;
  delay?: number;
}

export default function InkDivider({ className = "", delay = 0 }: InkDividerProps) {
  const lineRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = lineRef.current;
    if (!el) return;

    const ctx = gsap.context(() => {
      gsap.set(el, { scaleX: 0 });
      ScrollTrigger.create({
        trigger: el,
        start: "top 90%",
        onEnter: () => {
          gsap.to(el, {
            scaleX: 1,
            duration: 1.5,
            delay,
            ease: "power3.out",
          });
        },
        once: true,
      });
    });

    return () => ctx.revert();
  }, [delay]);

  return (
    <div ref={lineRef} className={`h-[0.5px] bg-ink/10 origin-left ${className}`} />
  );
}
