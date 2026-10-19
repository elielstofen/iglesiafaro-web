"use client";

import { useEffect, useRef, useState } from "react";
import { LOGO_LETTERS, LOGO_VIEWBOX } from "@/lib/logo";

// Logotipo oficial grande del pie: las letras suben una a una cuando aparece en pantalla.
export default function Wordmark() {
  const ref = useRef<HTMLDivElement>(null);
  const [shown, setShown] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShown(true);
          io.disconnect();
        }
      },
      { threshold: 0.35 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <div ref={ref} className="wordmark" data-shown={shown} aria-hidden="true">
      <svg viewBox={LOGO_VIEWBOX} fill="currentColor">
        {LOGO_LETTERS.map((d, i) => (
          <path key={i} d={d} fillRule="evenodd" style={{ "--i": i } as React.CSSProperties} />
        ))}
      </svg>
    </div>
  );
}
