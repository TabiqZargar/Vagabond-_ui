"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function ScrollProgress() {
  const barRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const bar = barRef.current;
    if (!bar) return;

    gsap.set(bar, { scaleX: 0 });

    ScrollTrigger.create({
      trigger: document.documentElement,
      start: "top top",
      end: "bottom bottom",
      onUpdate: (self) => {
        gsap.to(bar, {
          scaleX: self.progress,
          duration: 0.1,
          ease: "none",
        });
      },
    });
  }, []);

  return (
    <div
      className="fixed top-0 left-0 w-full h-[2px] z-[100] bg-ink/5"
      role="progressbar"
      aria-label="Scroll progress"
    >
      <div
        ref={barRef}
        className="h-full bg-ink/30 origin-left"
      />
    </div>
  );
}
