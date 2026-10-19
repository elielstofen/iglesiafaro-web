import type { Metadata } from "next";
import Pill, { type PillEffect } from "@/components/Pill";

// Página oculta para comparar efectos de los globitos. No aparece en el menú ni en Google.
export const metadata: Metadata = {
  title: "Pruebas",
  robots: { index: false, follow: false },
};

const options: { effect: PillEffect; label: string; text: string }[] = [
  { effect: "tarjeta", label: "Opción A", text: "La de ahora: una tarjeta que se abre al lado del globito." },
  { effect: "lado", label: "Opción B", text: "Portada a sangre: la foto sale del globito y ocupa todo el lateral de la pantalla, que se oscurece." },
  { effect: "flotante", label: "Opción C", text: "Portada flotante: como la B, pero la foto queda como un panel con margen y esquinas redondeadas." },
  { effect: "centro", label: "Opción D", text: "Portada en el centro: la foto viaja al centro de la pantalla y el fondo se oscurece y se difumina." },
];

export default function Pruebas() {
  return (
    <section style={{ padding: "96px 0 160px" }}>
      <div className="wrap">
        <p className="eyebrow muted">Pruebas de efectos</p>
        <p className="muted" style={{ maxWidth: 640, margin: "16px 0 0" }}>
          Pasa el ratón por los globitos de cada opción (en el móvil, tócalos). Cada título tiene un globito a la izquierda y otro a la derecha, para ver cómo se comporta en los dos lados.
        </p>
        {options.map((o) => (
          <div key={o.effect} style={{ marginTop: 120 }}>
            <p style={{ margin: "0 0 8px", fontWeight: 500 }}>{o.label}</p>
            <p className="muted" style={{ margin: "0 0 32px", maxWidth: 640 }}>
              {o.text}
            </p>
            <h2 className="h t-hero" style={{ maxWidth: 1180 }}>
              para dar luz <Pill src="/img/oracion-mic.webp" position="center 22%" effect={o.effect} /> a los que están en oscuridad{" "}
              <Pill src="/img/canto.webp" position="center 30%" effect={o.effect} />
            </h2>
          </div>
        ))}
      </div>
    </section>
  );
}
