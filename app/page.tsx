import Link from "next/link";
import Photo from "@/components/Photo";
import ContactForm from "@/components/ContactForm";
import { Arrow, AppPhone, GiveBand, InstagramGrid, MapEmbed, Pill, StoreButtons } from "@/components/Bits";
import { site } from "@/lib/site";
import { nextSunday } from "@/lib/sunday";

// Se regenera cada hora: actualiza la fecha del próximo domingo y los posts de Instagram.
export const revalidate = 3600;

const VERSE = "Yo soy la luz del mundo; el que me sigue no andará en tinieblas, sino que tendrá la luz de la vida.";

const pillars = [
  { n: "(i)", word: "Palabra", text: "Basados en su Palabra, que nos ha sido revelada.", img: "/img/lectura.webp", alt: "Un hombre lee la Biblia durante una reunión" },
  { n: "(ii)", word: "Presencia", text: "Buscamos su Presencia, donde adoramos íntegramente.", img: "/img/manos-alzadas.webp", alt: "Un joven adora con los ojos cerrados y la mano en el pecho" },
  { n: "(iii)", word: "Personas", text: "Guiar a las personas a Jesús de forma sincera y sencilla.", img: "/img/comunidad.webp", alt: "Varias personas de la comunidad oran juntas por un hombre" },
];

export default function Home() {
  const sunday = nextSunday();
  const m = site.meeting;

  return (
    <>
      {/* 1. Bienvenida */}
      <section style={{ padding: "96px 0 var(--section)" }}>
        <div className="wrap">
          <Link className="status a1" href="#domingo">
            <span className="dot" aria-hidden="true" />
            {sunday.isToday ? "Hoy" : "Este domingo"}, {m.time} - <span className="hide-m">{m.venue},&nbsp;</span>Pozuelo
          </Link>
          <h1 className="h t-hero a2" style={{ marginTop: 48, maxWidth: 1180 }}>
            para dar luz <Pill src="/img/oracion.webp" /> a los que están <span className="nb">en oscuridad</span>{" "}
            <span className="serif line accent">
              y guiar nuestros pies por <span className="nb">caminos de paz.</span>
            </span>
          </h1>

          <div className="split-84 end" style={{ marginTop: 96 }}>
            <Photo
              className="a3"
              src="/img/culto-cruz.webp"
              alt="La comunidad adorando un domingo, con una cruz de luz al fondo"
              position="center 30%"
              priority
              style={{ height: "clamp(420px, 50vw, 680px)" }}
              sizes="(max-width: 900px) 100vw, 66vw"
            />
            <div className="a4" style={{ display: "flex", flexDirection: "column", gap: 36 }}>
              <Photo className="hide-m" src="/img/amigas.webp" alt="Un grupo de chicas de Faro, abrazadas y riendo" style={{ height: 340 }} sizes="33vw" />
              <p className="body-l" style={{ margin: 0 }}>
                Buscando juntos a Jesús en el oeste de Madrid. <span className="muted">Te esperamos cada domingo.</span>
              </p>
              <div className="btns btns-spaced">
                <Link className="btn btn-dark" href="#domingo">
                  Ven este domingo
                </Link>
                <Arrow href="/sobre-nosotros">Quiénes somos</Arrow>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Este domingo */}
      <section id="domingo" className="sec navy">
        <div className="wrap">
          <div className="split end rv">
            <div>
              <p className="muted" style={{ margin: "0 0 32px", fontSize: 18 }}>
                {sunday.isToday ? (
                  "Te esperamos hoy."
                ) : (
                  <>
                    Te esperamos este domingo, <span className="nb">{sunday.long}.</span>
                  </>
                )}
              </p>
              <h2 className="h" style={{ fontSize: "clamp(76px, 9vw, 128px)", lineHeight: 0.96, letterSpacing: "-0.05em" }}>
                domingo,{" "}
                <span className="serif line gold" style={{ letterSpacing: "-0.02em", fontSize: "0.92em" }}>
                  a las {m.time}.
                </span>
              </h2>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: 28, paddingBottom: 14 }}>
              <div>
                <p style={{ margin: "0 0 4px", fontSize: 22, fontWeight: 500 }}>{m.venue}</p>
                <p className="muted" style={{ margin: 0 }}>
                  {m.street}
                  <br />
                  {m.area}
                </p>
              </div>
              <p className="muted" style={{ margin: 0, fontSize: 16, lineHeight: 1.7 }}>
                <span style={{ color: "var(--on-navy)" }}>Metro ligero:</span> {m.metro}
                <br />
                <span style={{ color: "var(--on-navy)" }}>Autobús:</span> {m.bus}
              </p>
              <div className="btns btns-m-stack">
                <a className="btn btn-cream" href={m.mapsUrl} target="_blank" rel="noopener">
                  Cómo llegar
                </a>
                <Link className="btn btn-ghost" href="/visitanos">
                  Tu primera visita
                </Link>
              </div>
            </div>
          </div>
          <MapEmbed />
        </div>
      </section>

      {/* 3. Quiénes somos */}
      <section className="sec">
        <div className="wrap">
          <p className="muted rv" style={{ margin: "0 0 32px", fontSize: 18 }}>
            En la tierra como en el cielo.
          </p>
          <p className="h rv rvp" style={{ fontSize: "clamp(36px, 5vw, 68px)", lineHeight: 1.12, maxWidth: 1180 }}>
            Faro es un movimiento por Jesús <Pill src="/img/risa.webp" /> de gente sencilla <Pill src="/img/sentadas.webp" /> que adora{" "}
            <span className="serif accent">
              <span className="nb">a un Dios</span> extraordinario.
            </span>
          </p>
          <div className="split rv" style={{ marginTop: 64 }}>
            <div className="hide-m" />
            <div>
              <p className="muted" style={{ margin: "0 0 32px", fontSize: 19 }}>
                Somos una comunidad cimentada en la Palabra e impulsada por el Espíritu a amar y servir a las personas como Dios nos amó a nosotros.
              </p>
              <Arrow href="/sobre-nosotros">Conócenos</Arrow>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Pilares */}
      <section className="sec sand">
        <div className="wrap">
          <h2 className="h t-2 rv" style={{ marginBottom: 72 }}>
            buscamos que su Luz sea el foco <span className="serif line accent">en tres sentidos.</span>
          </h2>
          <div className="rows">
            {pillars.map((p) => (
              <article key={p.word} className="pillar rv">
                <span className="num">{p.n}</span>
                <h3 className="h word t-word">{p.word}</h3>
                <p className="muted" style={{ margin: 0, fontSize: 19 }}>
                  {p.text}
                </p>
                <Photo className="thumb" src={p.img} alt={p.alt} sizes="160px" />
              </article>
            ))}
          </div>
          <p className="rv" style={{ margin: "48px 0 0" }}>
            <Arrow href="/sobre-nosotros#creemos">Qué creemos</Arrow>
          </p>
        </div>
      </section>

      {/* 5. Versículo: se queda fijo en pantalla mientras las palabras se iluminan */}
      <section className="verse-sec" aria-label="Versículo">
        <div className="verse-pin">
          <div className="wrap verse-wrap">
            <blockquote className="verse">
              <p className="serif verse-text">
                {VERSE.split(" ").map((w, i) => (
                  <span key={i} className="lw" style={{ "--i": i } as React.CSSProperties}>
                    {w}{" "}
                  </span>
                ))}
              </p>
              <footer className="verse-ref">Juan 8:12</footer>
            </blockquote>
          </div>
        </div>
      </section>

      {/* 6. Instagram */}
      <section className="sec">
        <div className="wrap">
          <div className="rv" style={{ display: "flex", flexWrap: "wrap", justifyContent: "space-between", alignItems: "flex-end", gap: 24, marginBottom: 56 }}>
            <h2 className="h t-2">
              síguenos en <span className="serif accent">{site.social.instagramHandle}</span>
            </h2>
            <Arrow href={site.social.instagram} external>
              Abrir Instagram
            </Arrow>
          </div>
          <InstagramGrid />
        </div>
      </section>

      {/* 7. App */}
      <section className="sec sand" style={{ overflow: "hidden" }}>
        <div className="wrap">
          <div className="split center rv">
            <div>
              <h2 className="h t-2" style={{ marginBottom: 40 }}>
                Faro es más que una iglesia. <span className="serif line accent">Es tu familia en Madrid.</span>
              </h2>
              <p className="muted" style={{ margin: "0 0 48px", fontSize: 19, maxWidth: 500 }}>
                Versículo del día, reflexiones del equipo pastoral, eventos y retiros, y peticiones de oración. Todo en la app Faro Madrid.
              </p>
              <StoreButtons long />
            </div>
            <div style={{ display: "flex", justifyContent: "center" }}>
              <AppPhone />
            </div>
          </div>
        </div>
      </section>

      {/* 8. Contacto */}
      <section id="contacto" className="sec">
        <div className="wrap">
          <div className="split-65 start">
            <div className="rv rvp">
              <h2 className="h" style={{ fontSize: "clamp(54px, 7vw, 88px)", marginBottom: 44 }}>
                queremos <Pill src="/img/alegria.webp" position="center 24%" hideMobile /> <span className="serif line accent">conocerte.</span>
              </h2>
              <p className="body-l" style={{ margin: "0 0 8px" }}>
                ¿Eres nuevo? ¿Tienes preguntas sobre Jesús?
              </p>
              <p className="body-l" style={{ margin: "0 0 24px" }}>
                ¿Buscas una comunidad de gente sencilla que sigue a un Dios extraordinario?
              </p>
              <p className="body-l muted" style={{ margin: "0 0 48px" }}>
                Si buscas esto y más, escríbenos.
              </p>
              <div style={{ display: "flex", flexDirection: "column", gap: 12, fontSize: 16 }}>
                <p style={{ margin: 0 }}>
                  <span className="muted">Email</span>&nbsp;&nbsp;<a href={`mailto:${site.email}`}>{site.email}</a>
                </p>
                <p style={{ margin: 0, display: "flex", flexWrap: "wrap", gap: 20 }}>
                  <a href={site.social.instagram} target="_blank" rel="noopener">
                    Instagram
                  </a>
                  <a href={site.social.facebook} target="_blank" rel="noopener">
                    Facebook
                  </a>
                  <a href={site.social.spotify} target="_blank" rel="noopener">
                    Spotify
                  </a>
                </p>
              </div>
            </div>
            <div className="rv" style={{ paddingTop: 16 }}>
              <ContactForm id="home" />
            </div>
          </div>
        </div>
      </section>

      <GiveBand />
    </>
  );
}
