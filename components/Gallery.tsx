"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";

type Frame = { src: string; alt: string; size: "l" | "m" | "s" | "w"; align: "top" | "mid" | "end"; position?: string };

// Fotos que solo salen aquí: ninguna se repite como foto grande en otra página.
const frames: Frame[] = [
  { src: "/img/banda.webp", alt: "El equipo de alabanza toca al empezar la reunión", size: "w", align: "end" },
  { src: "/img/canto.webp", alt: "Una chica canta con los ojos cerrados", size: "s", align: "top", position: "center 30%" },
  { src: "/img/manos-arriba.webp", alt: "Una mujer adora con los brazos alzados", size: "l", align: "mid", position: "center 30%" },
  { src: "/img/oracion-mic.webp", alt: "Virginia, la pastora, ora con el micrófono", size: "m", align: "end", position: "center 25%" },
  { src: "/img/adoracion-pecho.webp", alt: "Un joven adora con los ojos cerrados y la mano en el pecho", size: "l", align: "top", position: "center 25%" },
]

const HOLD = 0.07;

// "Un domingo en Faro": la sección se queda fija y, al bajar, las fotos pasan en horizontal.
export default function Gallery() {
  const section = useRef<HTMLElement>(null);
  const track = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const sec = section.current;
    const tr = track.current;
    if (!sec || !tr) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    sec.dataset.pinned = "true";
    let dist = 0;
    let raf = 0;

    const size = () => {
      dist = Math.max(0, tr.scrollWidth - window.innerWidth);
      // Un pequeño margen al principio y al final para que el título y la última foto se queden un momento quietos
      sec.style.height = `calc(100svh + ${Math.round(dist / (1 - HOLD * 2))}px)`;
      update();
    };
    const update = () => {
      raf = 0;
      const top = sec.getBoundingClientRect().top;
      const raw = -top / Math.max(1, sec.offsetHeight - window.innerHeight);
      const p = Math.min(1, Math.max(0, (raw - HOLD) / (1 - HOLD * 2)));
      tr.style.transform = `translate3d(${-p * dist}px, 0, 0)`;
      sec.style.setProperty("--p", p.toFixed(4));
    };
    const onScroll = () => {
      if (!raf) raf = requestAnimationFrame(update);
    };

    size();
    const ro = new ResizeObserver(size);
    ro.observe(tr);
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", size);
    return () => {
      ro.disconnect();
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", size);
      cancelAnimationFrame(raf);
      sec.dataset.pinned = "false";
      sec.style.height = "";
      tr.style.transform = "";
    };
  }, []);

  return (
    <section ref={section} className="gal" aria-labelledby="gal-title">
      <div className="gal-pin">
        <div ref={track} className="gal-track">
          <div className="gal-intro">
            <h2 id="gal-title" className="h t-1">
              un domingo <span className="serif line accent">en Faro.</span>
            </h2>
            <p className="muted">
              Alabanza, Palabra, oración y mucha vida compartida. Así son nuestras mañanas de domingo.
            </p>
          </div>
          {frames.map((f) => (
            <figure key={f.src} className={`gal-frame gal-${f.size} gal-${f.align}`}>
              <Image src={f.src} alt={f.alt} fill sizes="(max-width: 900px) 80vw, 45vw" className="img-tone" style={{ objectFit: "cover", objectPosition: f.position ?? "center" }} />
            </figure>
          ))}
          <div className="gal-tail" aria-hidden="true" />
        </div>
        <div className="gal-progress" aria-hidden="true">
          <span />
        </div>
      </div>
    </section>
  );
}
