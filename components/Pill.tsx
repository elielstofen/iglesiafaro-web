"use client";

import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";

export type PillEffect = "tarjeta" | "lado" | "flotante" | "centro";

// Efecto que usa la web. En /pruebas se pueden comparar todos.
export const PILL_EFFECT: PillEffect = "tarjeta";

type Props = {
  src: string;
  /** Encuadre de la foto dentro del globito, p. ej. "center 25%" */
  position?: string;
  hideMobile?: boolean;
  effect?: PillEffect;
};

// Globito con foto dentro de un título.
// - "tarjeta": se abre una tarjeta al lado del globito.
// - "lado" / "flotante" / "centro": la foto sale del globito y se convierte en una
//   portada grande (en el lateral o en el centro) mientras el resto de la pantalla se oscurece.
export default function Pill({ src, position, hideMobile, effect = PILL_EFFECT }: Props) {
  const ref = useRef<HTMLSpanElement>(null);
  const coverRef = useRef<HTMLDivElement>(null);
  const [open, setOpen] = useState(false);
  const [side, setSide] = useState<"right" | "left">("right");
  const [mounted, setMounted] = useState(false);
  const isCover = effect !== "tarjeta";

  useEffect(() => setMounted(true), []);

  // Mide el globito: la portada arranca exactamente en su sitio y con su forma.
  function measure() {
    const el = ref.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    setSide(r.left + r.width / 2 > window.innerWidth * 0.55 ? "left" : "right");
    el.style.setProperty("--pw", `${r.width}px`);
    el.style.setProperty("--ph", `${r.height}px`);
    const card = el.querySelector<HTMLElement>(".pill-card");
    if (card) {
      el.style.setProperty("--cw", `${card.offsetWidth}px`);
      el.style.setProperty("--ch", `${card.offsetHeight}px`);
    }
    el.style.setProperty("--mx", `${window.innerWidth / 2 - (r.left + r.width / 2)}px`);
    const c = coverRef.current;
    if (c) {
      c.style.setProperty("--x0", `${r.left}px`);
      c.style.setProperty("--y0", `${r.top}px`);
      c.style.setProperty("--w0", `${r.width}px`);
      c.style.setProperty("--h0", `${r.height}px`);
    }
  }

  function openNow() {
    measure();
    // Dos fotogramas después, para que la portada parta del globito.
    requestAnimationFrame(() => requestAnimationFrame(() => setOpen(true)));
  }

  useEffect(() => {
    const t = window.setTimeout(measure, 1500);
    window.addEventListener("resize", measure);
    return () => {
      window.clearTimeout(t);
      window.removeEventListener("resize", measure);
    };
  }, []);

  // Se cierra al tocar fuera o al hacer scroll.
  useEffect(() => {
    if (!open) return;
    const close = (e: Event) => {
      if (e.type === "scroll" || !ref.current?.contains(e.target as Node)) {
        measure();
        setOpen(false);
      }
    };
    window.addEventListener("pointerdown", close);
    window.addEventListener("scroll", close, { passive: true });
    return () => {
      window.removeEventListener("pointerdown", close);
      window.removeEventListener("scroll", close);
    };
  }, [open]);

  const pos = position ? { objectPosition: position } : undefined;

  return (
    <span
      ref={ref}
      className={hideMobile ? "pill-wrap hide-m" : "pill-wrap"}
      data-open={open}
      data-side={side}
      data-effect={effect}
      aria-hidden="true"
      onPointerEnter={(e) => {
        if (e.pointerType === "mouse") openNow();
      }}
      onPointerLeave={(e) => {
        if (e.pointerType === "mouse") {
          measure();
          setOpen(false);
        }
      }}
      onClick={() => (open ? setOpen(false) : openNow())}
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img className="pill img-tone" src={src} alt="" style={pos} />

      {!isCover && (
        <span className="pill-card">
          <span className="pill-card-photo">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img className="img-tone" src={src} alt="" loading="lazy" style={pos} />
          </span>
        </span>
      )}

      {isCover &&
        mounted &&
        createPortal(
          <>
            <div className="pill-dim" data-open={open} data-effect={effect} />
            <div ref={coverRef} className="pill-cover" data-open={open} data-effect={effect} data-side={side}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img className="img-tone" src={src} alt="" loading="lazy" style={pos} />
            </div>
          </>,
          document.body,
        )}
    </span>
  );
}
