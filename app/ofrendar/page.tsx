import type { Metadata } from "next";
import { Pill, StoreButtons } from "@/components/Bits";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Ofrendar",
  description: "Haz tu diezmo mensual o una ofrenda puntual a Iglesia Faro de forma segura con Stripe, o por transferencia.",
  alternates: { canonical: "/ofrendar" },
};

export default function Ofrendar() {
  return (
    <>
      <section style={{ padding: "112px 0 120px" }}>
        <div className="wrap">
          <p className="eyebrow muted a1">Ofrendar</p>
          <h1 className="h t-hero-xl a2" style={{ marginTop: 32 }}>
            con <Pill src="/img/manos-abiertas.webp" position="center 32%" /> <span className="serif accent">generosidad.</span>
          </h1>
          <p className="muted lead a4" style={{ margin: "40px 0 0", maxWidth: 620 }}>
            Tu ofrenda sostiene lo que Dios está haciendo en Faro y en nuestra ciudad. Gracias por sembrar con nosotros.
          </p>
        </div>
      </section>

      <section style={{ paddingBottom: "var(--section)" }}>
        <div className="wrap">
          <div className="grid-2" style={{ gap: 24 }}>
            <article className="give navy rv">
              <p className="muted" style={{ margin: 0, fontSize: 16 }}>
                Cada mes
              </p>
              <h2 className="h" style={{ fontSize: "clamp(44px, 5vw, 64px)" }}>
                diezmo
              </h2>
              <p style={{ margin: 0, color: "rgba(237,226,204,.82)", maxWidth: 380 }}>
                Un compromiso mensual que se renueva solo. Fiel y constante, sin tener que acordarte.
              </p>
              <div style={{ marginTop: "auto", paddingTop: 8 }}>
                <a className="btn btn-cream" href={site.giving.diezmo} target="_blank" rel="noopener">
                  Hacer mi diezmo
                </a>
              </div>
            </article>
            <article className="give sand rv">
              <p className="muted" style={{ margin: 0, fontSize: 16 }}>
                Cuando quieras
              </p>
              <h2 className="h" style={{ fontSize: "clamp(44px, 5vw, 64px)" }}>
                ofrenda
              </h2>
              <p className="muted" style={{ margin: 0, maxWidth: 380 }}>
                Una donación única, en el momento que tú elijas.
              </p>
              <div style={{ marginTop: "auto", paddingTop: 8 }}>
                <a className="btn btn-dark" href={site.giving.ofrenda} target="_blank" rel="noopener">
                  Hacer una ofrenda
                </a>
              </div>
            </article>
          </div>
          <p className="muted rv" style={{ margin: "24px 0 0", fontSize: 14, display: "flex", alignItems: "center", gap: 8 }}>
            <svg aria-hidden="true" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <rect x="5" y="11" width="14" height="10" rx="2" />
              <path d="M8 11V7a4 4 0 0 1 8 0v4" />
            </svg>
            Pago seguro con Stripe.
          </p>
        </div>
      </section>

      <section className="sec sand">
        <div className="wrap">
          <div className="split-57 start rv">
            <h2 className="h t-2">
              por <span className="serif accent">transferencia.</span>
            </h2>
            <div style={{ paddingTop: 8 }}>
              <p className="lead" style={{ margin: "0 0 32px" }}>
                Si prefieres hacerlo desde tu banco, escríbenos y te enviamos toda la información.
              </p>
              <div className="btns btns-spaced">
                <a className="btn btn-dark" href={`mailto:${site.email}?subject=${encodeURIComponent("Datos para transferencia")}`}>
                  Pedir los datos
                </a>
                <span className="muted" style={{ fontSize: 16 }}>
                  {site.email}
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="sec">
        <div className="wrap rv" style={{ display: "flex", flexWrap: "wrap", justifyContent: "space-between", alignItems: "flex-end", gap: 40 }}>
          <h2 className="h" style={{ fontSize: "clamp(36px, 4vw, 56px)", maxWidth: 760 }}>
            también desde <span className="serif accent nb">la app</span> <span className="serif accent nb">Faro Madrid.</span>
          </h2>
          <StoreButtons />
        </div>
      </section>
    </>
  );
}
