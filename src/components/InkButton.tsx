"use client";

import { useRef, useState } from "react";
import { motion } from "framer-motion";

interface InkButtonProps {
  children: React.ReactNode;
  className?: string;
  variant?: "primary" | "outline";
  as?: "button" | "a";
  href?: string;
}

export default function InkButton({
  children,
  className = "",
  variant = "outline",
  as: Tag = "button",
  href,
}: InkButtonProps) {
  const [hovered, setHovered] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  const baseClasses =
    "relative overflow-hidden font-label-sm text-xs uppercase tracking-widest transition-colors duration-400 z-10";

  const variantClasses =
    variant === "outline"
      ? "border border-ink text-ink hover:text-paper"
      : "bg-ink text-paper hover:bg-muted-charcoal";

  const handleMouseMove = (e: React.MouseEvent) => {
    const rect = ref.current?.getBoundingClientRect();
    if (!rect) return;
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    ref.current?.style.setProperty("--x", `${x}px`);
    ref.current?.style.setProperty("--y", `${y}px`);
  };

  return (
    <motion.div
      ref={ref}
      className="inline-block"
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onMouseMove={handleMouseMove}
    >
      {Tag === "a" ? (
        <a
          href={href}
          className={`${baseClasses} ${variantClasses} ${className} px-10 py-4 block`}
        >
          <span className="relative z-10">{children}</span>
          <motion.span
            className="absolute inset-0 bg-ink"
            initial={{ x: "-100%" }}
            animate={{ x: hovered ? "0%" : "-100%" }}
            transition={{ duration: 0.6, ease: [0.7, 0, 0.3, 1] }}
          />
        </a>
      ) : (
        <button className={`${baseClasses} ${variantClasses} ${className} px-10 py-4`}>
          <span className="relative z-10">{children}</span>
          <motion.span
            className="absolute inset-0 bg-ink"
            initial={{ x: "-100%" }}
            animate={{ x: hovered ? "0%" : "-100%" }}
            transition={{ duration: 0.6, ease: [0.7, 0, 0.3, 1] }}
          />
        </button>
      )}
    </motion.div>
  );
}
