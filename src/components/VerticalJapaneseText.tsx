interface VerticalJapaneseTextProps {
  children: string;
  className?: string;
}

export default function VerticalJapaneseText({
  children,
  className = "",
}: VerticalJapaneseTextProps) {
  return (
    <span
      className={`vertical-text font-display text-ink/20 text-sm tracking-[1em] select-none ${className}`}
      aria-hidden="true"
    >
      {children}
    </span>
  );
}
