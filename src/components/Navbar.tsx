"use client";

import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const navLinks = [
  { label: "Exhibitions", href: "#" },
  { label: "Archive", href: "#" },
  { label: "Journal", href: "#" },
  { label: "Colophon", href: "#" },
];

export default function Navbar() {
  const navRef = useRef<HTMLElement>(null);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const nav = navRef.current;
    if (!nav) return;

    ScrollTrigger.create({
      start: "top -80",
      onEnter: () => setScrolled(true),
      onLeaveBack: () => setScrolled(false),
    });
  }, []);

  return (
    <nav
      ref={navRef}
      className={`fixed top-0 w-full z-50 flex justify-between items-center px-margin-desktop py-6 transition-all duration-300 ${
        scrolled
          ? "bg-paper/90 backdrop-blur-sm border-b border-ink/10"
          : "bg-transparent"
      }`}
    >
      <span className="font-display text-2xl md:text-4xl tracking-tighter text-ink">
        KINTSUGI
      </span>

      <div className="hidden md:flex items-center space-x-12">
        {navLinks.map((link, i) => (
          <a
            key={link.label}
            href={link.href}
            className={`font-mono text-xs tracking-[0.1em] transition-all duration-300 relative ${
              i === 0
                ? "text-ink border-b border-crimson after:absolute after:-top-2 after:left-1/2 after:-translate-x-1/2 after:w-1 after:h-1 after:bg-crimson after:rounded-full"
                : "text-ink/60 hover:text-ink"
            }`}
          >
            {link.label}
          </a>
        ))}
      </div>

      <button className="font-mono text-xs tracking-[0.1em] px-6 py-2 border border-ink relative overflow-hidden group">
        <span className="relative z-10 group-hover:text-paper transition-colors duration-400">
          Curate
        </span>
        <span className="absolute inset-0 bg-ink translate-x-[-101%] group-hover:translate-x-0 transition-transform duration-600 ease-[cubic-bezier(0.7,0,0.3,1)]" />
      </button>
    </nav>
  );
}
