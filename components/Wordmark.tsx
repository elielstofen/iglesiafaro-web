"use client";

import { useEffect, useRef, useState } from "react";

// "faro" grande del pie: las letras suben una a una cuando aparece en pantalla.
export default function Wordmark() {
  const ref = useRef<HTMLParagraphElement>(null);
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
    <p ref={ref} className="wordmark" data-shown={shown} aria-hidden="true">
      {"faro".split("").map((l, i) => (
        <span key={i} style={{ "--i": i } as React.CSSProperties}>
          {l}
        </span>
      ))}
    </p>
  );
}
