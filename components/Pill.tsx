"use client";

import { useEffect, useRef, useState } from "react";

type Props = {
  src: string;
  /** Encuadre de la foto dentro del globito, p. ej. "center 25%" */
  position?: string;
  hideMobile?: boolean;
  /** Primera línea de la tarjeta, en cursiva: "Soy Virginia." */
  name?: string;
  /** Segunda línea, pequeña: "Pastora de Faro" */
  note?: string;
};

// Globito con foto dentro de un título. Al pasar el ratón (o al tocarlo en el móvil)
// se abre hacia un lado una tarjeta con la foto entera y, si lo hay, un pie con el nombre.
export default function Pill({ src, position, hideMobile, name, note }: Props) {
  const ref = useRef<HTMLSpanElement>(null);
  const [open, setOpen] = useState(false);
  const [side, setSide] = useState<"right" | "left">("right");

  // Antes de abrir: decide hacia qué lado sale la tarjeta y mide globito y tarjeta,
  // para que la animación arranque exactamente con la forma del globito.
  function decideSide() {
    const el = ref.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    const card = el.querySelector<HTMLElement>(".pill-card");
    setSide(r.left + r.width / 2 > window.innerWidth * 0.55 ? "left" : "right");
    el.style.setProperty("--pw", `${r.width}px`);
    el.style.setProperty("--ph", `${r.height}px`);
    if (card) {
      el.style.setProperty("--cw", `${card.offsetWidth}px`);
      el.style.setProperty("--ch", `${card.offsetHeight}px`);
    }
    // En móvil la tarjeta se centra en la pantalla, debajo del globito.
    el.style.setProperty("--mx", `${window.innerWidth / 2 - (r.left + r.width / 2)}px`);
  }

  // Mide al cargar y al cambiar el tamaño de la ventana, para que la tarjeta cerrada
  // ya tenga la forma exacta del globito antes del primer hover.
  useEffect(() => {
    const t = window.setTimeout(decideSide, 1500);
    window.addEventListener("resize", decideSide);
    return () => {
      window.clearTimeout(t);
      window.removeEventListener("resize", decideSide);
    };
  }, []);

  // En pantallas táctiles: se cierra al tocar fuera o al hacer scroll.
  useEffect(() => {
    if (!open) return;
    const close = (e: Event) => {
      if (e.type === "scroll" || !ref.current?.contains(e.target as Node)) setOpen(false);
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
      aria-hidden="true"
      onPointerEnter={(e) => {
        if (e.pointerType === "mouse") {
          decideSide();
          setOpen(true);
        }
      }}
      onPointerLeave={(e) => {
        if (e.pointerType === "mouse") setOpen(false);
      }}
      onClick={() => {
        decideSide();
        setOpen((o) => !o);
      }}
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img className="pill img-tone" src={src} alt="" style={pos} />
      <span className="pill-card">
        <span className="pill-card-photo">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img className="img-tone" src={src} alt="" loading="lazy" style={pos} />
        </span>
        {name && (
          <span className="pill-card-cap">
            <span className="pill-card-name">{name}</span>
            {note && <span className="pill-card-note">{note}</span>}
          </span>
        )}
      </span>
    </span>
  );
}
