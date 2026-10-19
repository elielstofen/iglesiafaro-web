import { LOGO_LETTERS, LOGO_VIEWBOX } from "@/lib/logo";

// Logotipo oficial. Hereda el color del texto (currentColor).
export default function Logo({ className, title }: { className?: string; title?: string }) {
  return (
    <svg className={className} viewBox={LOGO_VIEWBOX} role={title ? "img" : undefined} aria-hidden={title ? undefined : true} aria-label={title} fill="currentColor">
      {LOGO_LETTERS.map((d, i) => (
        <path key={i} d={d} fillRule="evenodd" />
      ))}
    </svg>
  );
}
