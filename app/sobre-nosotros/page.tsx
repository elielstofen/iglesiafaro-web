import type { Metadata } from "next";
import Link from "next/link";
import Photo from "@/components/Photo";
import { Arrow, Pill } from "@/components/Bits";

export const metadata: Metadata = {
  title: "Sobre nosotros",
  description: "Somos una comunidad de creyentes anclados en la Biblia que aman a Jesús. Conoce nuestra visión y lo que creemos.",
  alternates: { canonical: "/sobre-nosotros" },
};

const beliefs = [
  { t: "Dios", d: "Un único Dios, Padre, Hijo y Espíritu Santo." },
  { t: "Jesucristo", d: "Verdadero Dios y hombre, nacido de María, crucificado por nuestros pecados, resucitado y sentado a la diestra del Padre." },
  { t: "La Biblia", d: "El Antiguo y el Nuevo Testamento son inspirados por Dios y sin error en sus escritos originales." },
  { t: "El Espíritu Santo", d: "Habita en cada creyente y todos sus dones siguen vigentes hoy." },
  { t: "La Iglesia", d: "Los creyentes se reúnen para comunión, oración, adoración, estudio bíblico, santa cena y anuncio del evangelio." },
  { t: "Esperanza y salvación", d: "Salvación por gracia mediante la fe, por la obra redentora de Cristo." },
];

const pillars = [
  { n: "(i)", w: "Palabra", d: "Basados en su Palabra, que nos ha sido revelada." },
  { n: "(ii)", w: "Presencia", d: "Buscamos su Presencia, donde adoramos íntegramente." },
  { n: "(iii)", w: "Personas", d: "Guiar a las personas a Jesús de forma sincera y sencilla." },
];

export default function Sobre() {
  return (
    <>
      <section style={{ padding: "112px 0 var(--section)" }}>
        <div className="wrap">
          <p className="eyebrow muted a1">Sobre nosotros</p>
          <h1 className="h t-hero a2" style={{ marginTop: 32, maxWidth: 1180 }}>
            un movimiento de Jesús, de gente sencilla <Pill src="/img/pill-adoracion-brazo.webp" />{" "}
            <span className="serif line accent">
              que adora a un <span className="nb">Dios extraordinario.</span>
            </span>
          </h1>
          <div className="split-48 end" style={{ marginTop: 96 }}>
            <div className="rv" style={{ display: "flex", flexDirection: "column", gap: 32 }}>
              <p className="lead" style={{ margin: 0 }}>
                Somos una comunidad de creyentes anclados en la Biblia que aman a Jesús.
              </p>
              <p className="muted" style={{ margin: 0, fontSize: 19 }}>
                Cimentados en la Palabra e impulsados por el Espíritu a amar y servir a las personas como Dios nos amó a nosotros.
              </p>
            </div>
            <Photo
              className="a3 bleed-m"
              src="/img/bautismo-rio.webp"
              alt="Un bautismo: dos hombres sonríen abrazados, empapados de agua"
              position="center 18%"
              priority
              style={{ height: "clamp(440px, 45vw, 620px)" }}
              sizes="(max-width: 900px) 100vw, 66vw"
            />
          </div>
        </div>
      </section>

      <section className="sec navy">
        <div className="wrap">
          <p className="muted rv" style={{ margin: "0 0 40px", fontSize: 18 }}>
            Nuestra visión
          </p>
          <p className="h rv" style={{ fontSize: "clamp(34px, 4.4vw, 60px)", lineHeight: 1.14, maxWidth: 1140 }}>
            Deseamos inspirar y ser inspirados a amar y a seguir a Jesús,{" "}
            <span className="serif gold">confiados en que veremos vidas transformadas y nuestra ciudad avivada por la palabra de Dios.</span>
          </p>
        </div>
      </section>

      <section className="sec sand">
        <div className="wrap">
          <h2 className="h t-2 rv" style={{ marginBottom: 80 }}>
            palabra, presencia, <span className="serif accent">personas.</span>
          </h2>
          <div className="grid-3">
            {pillars.map((p) => (
              <div key={p.w} className="rv" style={{ borderTop: "1px solid var(--line-sand)", paddingTop: 28 }}>
                <p className="num" style={{ margin: "0 0 12px", fontSize: 26 }}>
                  {p.n}
                </p>
                <h3 className="h t-3" style={{ marginBottom: 14 }}>
                  {p.w}
                </h3>
                <p className="muted" style={{ margin: 0 }}>
                  {p.d}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="creemos" className="sec" style={{ scrollMarginTop: 80 }}>
        <div className="wrap">
          <div className="split-48 start">
            <h2 className="h t-1 rv creemos-title">
              qué <span className="serif accent">creemos.</span>
            </h2>
            <div className="rows">
              {beliefs.map((b) => (
                <article key={b.t} className="belief rv">
                  <h3 className="h">{b.t}</h3>
                  <p className="muted" style={{ margin: 0 }}>
                    {b.d}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="sec sand">
        <div className="wrap rv" style={{ textAlign: "center" }}>
          <h2 className="h t-1" style={{ margin: "0 auto 48px", maxWidth: 1000 }}>
            Faro es más que una iglesia. <span className="serif line accent">Es tu familia en Madrid.</span>
          </h2>
          <div className="btns btns-spaced" style={{ justifyContent: "center" }}>
            <Link className="btn btn-dark" href="/visitanos">
              Ven este domingo
            </Link>
            <Arrow href="/contacto">Escríbenos</Arrow>
          </div>
        </div>
      </section>
    </>
  );
}
