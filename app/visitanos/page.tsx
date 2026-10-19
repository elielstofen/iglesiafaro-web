import type { Metadata } from "next";
import Link from "next/link";
import Photo from "@/components/Photo";
import { Arrow, MapEmbed, Pill } from "@/components/Bits";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Visítanos",
  description: "Te esperamos los domingos a las 11:00 en el Eurostars i-Hotel, Pozuelo de Alarcón. Qué esperar en tu primera visita y cómo llegar.",
  alternates: { canonical: "/visitanos" },
};

const steps = [
  { n: "(i)", t: "Antes", d: "Empezamos con un café y algo para desayunar. Un rato para charlar y hacer comunidad." },
  { n: "(ii)", t: "La reunión", d: "Adoramos juntos de corazón y abrimos la Palabra, con sencillez y cerca de Dios." },
  { n: "(iii)", t: "Niños", d: "Los más pequeños tienen su propia actividad, pensada para ellos." },
  { n: "(iv)", t: "Después", d: "Sigue el café y la charla, y algunos nos vamos a comer juntos. Así se hace familia." },
];

export default function Visitanos() {
  const m = site.meeting;
  return (
    <>
      <section style={{ padding: "112px 0 var(--section)" }}>
        <div className="wrap">
          <p className="eyebrow muted a1">Visítanos</p>
          <h1 className="h t-hero-xl a2" style={{ marginTop: 32 }}>
            te esperamos <Pill src="/img/adoracion-chica.webp" position="center 26%" hideMobile /> <span className="serif line accent">este domingo.</span>
          </h1>
          <div className="split-84 end" style={{ marginTop: 96 }}>
            <Photo
              className="a3"
              src="/img/predicacion.webp"
              alt="Un domingo en Faro: la comunidad escucha la predicación en el Eurostars i-Hotel"
              position="center 45%"
              priority
              style={{ height: "clamp(440px, 45vw, 620px)" }}
              sizes="(max-width: 900px) 100vw, 66vw"
            />
            <div className="rv" style={{ display: "flex", flexDirection: "column", gap: 28 }}>
              <p style={{ margin: 0, fontSize: "clamp(21px, 2vw, 26px)", lineHeight: 1.35, fontWeight: 300, letterSpacing: "-0.01em" }}>
                {m.day} a las {m.time} en el {m.venue}, Pozuelo de Alarcón.
              </p>
              <p className="muted" style={{ margin: 0, fontSize: 19 }}>
                Somos gente sencilla que sigue a un Dios extraordinario. Ven tal como eres.
              </p>
              <div className="btns btns-spaced">
                <Link className="btn btn-dark" href="#llegar">
                  Cómo llegar
                </Link>
                <Arrow href="#esperar">Qué esperar</Arrow>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="esperar" className="sec sand" style={{ scrollMarginTop: 60 }}>
        <div className="wrap">
          <div className="split end rv" style={{ marginBottom: 80 }}>
            <h2 className="h t-1">
              tu primera <span className="serif accent">visita.</span>
            </h2>
            <p className="muted" style={{ margin: 0, fontSize: 19 }}>
              Queremos que te sientas en casa desde el primer momento. Esto es lo que te vas a encontrar.
            </p>
          </div>
          <div className="grid-2 steps" style={{ columnGap: 80 }}>
            {steps.map((s) => (
              <article key={s.t} className="step rv">
                <p className="num" style={{ margin: "0 0 12px", fontSize: 26 }}>
                  {s.n}
                </p>
                <h3 className="h" style={{ fontSize: "clamp(32px, 3vw, 40px)", marginBottom: 12 }}>
                  {s.t}
                </h3>
                <p className="muted" style={{ margin: 0 }}>
                  {s.d}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="llegar" className="sec navy" style={{ scrollMarginTop: 60 }}>
        <div className="wrap">
          <div className="grid-2 start rv" style={{ gap: 80 }}>
            <div>
              <h2 className="h t-1" style={{ marginBottom: 48 }}>
                cómo <span className="serif gold">llegar.</span>
              </h2>
              <p style={{ margin: "0 0 4px", fontSize: 22, fontWeight: 500 }}>{m.venue}</p>
              <p className="muted" style={{ margin: "0 0 40px" }}>
                {m.street}
                <br />
                {m.area}
              </p>
              <a className="btn btn-cream" href={m.mapsUrl} target="_blank" rel="noopener">
                Abrir en Google Maps
              </a>
            </div>
            <dl className="facts rows" style={{ paddingTop: 12, fontSize: 17 }}>
              <div>
                <dt className="muted">Metro ligero</dt>
                <dd>{m.metro}</dd>
              </div>
              <div>
                <dt className="muted">Autobús</dt>
                <dd>{m.bus}</dd>
              </div>
              <div>
                <dt className="muted">En coche</dt>
                <dd>{m.parking}</dd>
              </div>
            </dl>
          </div>
          <MapEmbed />
        </div>
      </section>

      <section className="sec">
        <div className="wrap rv" style={{ textAlign: "center" }}>
          <h2 className="h" style={{ fontSize: "clamp(48px, 6vw, 80px)", margin: "0 auto 32px", maxWidth: 1000 }}>
            ¿tienes <span className="serif accent">preguntas?</span>
          </h2>
          <p className="muted body-l" style={{ margin: "0 auto 48px", maxWidth: 560 }}>
            Si quieres saber algo antes de venir, escríbenos. Te respondemos encantados.
          </p>
          <div className="btns btns-spaced" style={{ justifyContent: "center" }}>
            <a className="btn btn-dark" href={`mailto:${site.email}`}>
              Escríbenos
            </a>
            <Arrow href="/contacto">Otras formas de contacto</Arrow>
          </div>
        </div>
      </section>
    </>
  );
}
