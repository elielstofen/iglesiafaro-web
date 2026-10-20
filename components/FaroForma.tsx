import { Arrow } from "./Bits";

const forma = [
  { n: "(i)", t: "Por niveles", d: "Un recorrido por etapas, desde los fundamentos de la fe." },
  { n: "(ii)", t: "Online", d: "Un encuentro a la semana, desde casa." },
  { n: "(iii)", t: "Presencial", d: "Otro encuentro a la semana, cara a cara." },
];

// Faro Forma: nuestro discipulado entre semana.
export default function FaroForma() {
  return (
      <section id="faro-forma" className="sec navy forma-sec" aria-labelledby="forma-title" style={{ scrollMarginTop: 60 }}>
        <div className="wrap">
          <div className="split end rv" style={{ marginBottom: 72 }}>
            <h2 id="forma-title" className="h t-1">
              faro <span className="serif gold">forma.</span>
            </h2>
            <p className="muted" style={{ margin: 0, fontSize: 19 }}>
              Nuestro discipulado: un estudio de la Biblia por niveles para conocer mejor a Jesús y aprender a seguirle, juntos.
            </p>
          </div>
          <div className="rows">
            {forma.map((f) => (
              <article key={f.t} className="pillar forma rv">
                <span className="num">{f.n}</span>
                <h3 className="h word" style={{ fontSize: "clamp(40px, 4.4vw, 64px)" }}>
                  {f.t}
                </h3>
                <p className="muted" style={{ margin: 0, fontSize: 19 }}>
                  {f.d}
                </p>
              </article>
            ))}
          </div>
          <div className="btns rv" style={{ marginTop: 56 }}>
            <a className="btn btn-cream" href="/contacto?motivo=forma#escribenos">
              Quiero apuntarme
            </a>
          </div>
        </div>
      </section>
  );
}
