interface FooterProps {
  className?: string;
}

export default function Footer({ className = "" }: FooterProps) {
  return (
    <footer
      className={`w-full px-margin-desktop py-20 flex flex-col md:flex-row justify-between items-end border-t-[0.5px] border-outline bg-surface-container-lowest ${className}`}
    >
      <div className="flex flex-col space-y-8 w-full md:w-auto">
        <span className="font-display text-headline-md text-ink tracking-tighter">
          KINTSUGI
        </span>
        <p className="font-mono text-xs text-ink/60 max-w-xs">
          Handcrafted digital experiences for the modern contemplative. Part of
          the MK-V Studio collective.
        </p>
      </div>

      <div className="flex flex-col items-end space-y-10 mt-12 md:mt-0">
        <div className="flex space-x-8">
          {["Provenance", "Terms", "Privacy", "Access"].map((link) => (
            <a
              key={link}
              href="#"
              className="font-mono text-xs text-ink/60 hover:underline transition-all"
            >
              {link}
            </a>
          ))}
        </div>
        <p className="font-mono text-xs text-ink/50">
          &copy; 2024 MK-V STUDIO. PRINTED IN KYOTO.
        </p>
      </div>
    </footer>
  );
}
