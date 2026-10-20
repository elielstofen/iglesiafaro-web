import type { Metadata } from "next";
import Link from "next/link";
import Photo from "@/components/Photo";
import { Arrow, Pill, StoreButtons } from "@/components/Bits";

export const metadata: Metadata = {
  title: "Comunidad",
  description:
    "Durante la semana nos encontramos en casas, en cafeterías y online: Faro Forma, Faro en Casas, Faro en Letras y oración online. Y a lo largo del año, retiros, bautismos y celebraciones.",
  alternates: { canonical: "/comunidad" },
};

type Activity = {
  id: string;
  name: string;
  accent: string;
  where: string;
  text: string;
  cta: string;
};

const activities: Activity[] = [
  {
    id: "forma",
    name: "faro",
    accent: "forma.",
    where: "Online y presencial",
    text: "Nuestro discipulado: un estudio de la Biblia por niveles para conocer mejor a Jesús y aprender a seguirle. Nos vemos dos veces por semana, una online y otra en persona.",
    cta: "Quiero apuntarme",
  },
  {
    id: "casas",
    name: "faro",
    accent: "en casas.",
    where: "En casas de la comunidad",
    text: "Abrimos nuestras casas. En grupos pequeños, en casa de familias de la iglesia, leemos juntos un texto de la Biblia, lo comentamos y compartimos la comida. Un rato más cercano, sin prisa.",
    cta: "Quiero ir a una casa",
  },
  {
    id: "letras",
    name: "faro",
    accent: "en letras.",
    where: "Una cafetería en Madrid centro",
    text: "Un club de lectura. Elegimos un libro, lo leemos todos y en cada encuentro comentamos los capítulos de esa semana, con un café por delante.",
    cta: "Quiero leer con vosotros",
  },
  {
    id: "oracion",
    name: "oración",
    accent: "online.",
    where: "Los miércoles por la noche",
    text: "Cada semana nos conectamos para orar juntos, cada uno desde su casa. Por la iglesia, por la ciudad y por lo que llevamos cada uno.",
    cta: "Quiero el enlace",
  },
];

const year = [
  { t: "Retiro de iglesia", d: "Una vez al año, unos días juntos toda la iglesia." },
  { t: "Retiros de hombres y de mujeres", d: "Durante el año, encuentros para cuidarnos y crecer juntos." },
  { t: "Bautismos", d: "Celebramos los bautismos en los retiros y en otros momentos del año." },
  { t: "Acción de Gracias y Navidad", d: "Cenas y celebraciones para dar gracias y disfrutar juntos." },
];

export default function Comunidad() {
  return (
    <>
      <section style={{ padding: "112px 0 var(--section)" }}>
        <div className="wrap">
          <p className="eyebrow muted a1">Comunidad</p>
          <h1 className="h t-hero-xl a2" style={{ marginTop: 32 }}>
            más allá <Pill src="/img/pill-alegria.webp" hideMobile /> <span className="serif line accent">del domingo.</span>
          </h1>
          <div className="split-84 end" style={{ marginTop: 96 }}>
            <Photo
              className="a3 bleed-m"
              src="/img/lectura.webp"
              alt="Un joven lee la Biblia durante una reunión"
              position="center 40%"
              priority
              style={{ height: "clamp(440px, 45vw, 620px)" }}
              sizes="(max-width: 900px) 100vw, 66vw"
            />
            <div className="rv" style={{ display: "flex", flexDirection: "column", gap: 28 }}>
              <p style={{ margin: 0, fontSize: "clamp(21px, 2vw, 26px)", lineHeight: 1.35, fontWeight: 300, letterSpacing: "-0.01em" }}>
                La fe se vive en comunidad. Entre semana nos encontramos en casas, en cafeterías y online.
              </p>
              <p className="muted" style={{ margin: 0, fontSize: 19 }}>
                Para leer la Biblia, orar y crecer juntos. Elige por dónde empezar.
              </p>
              <div className="btns btns-spaced">
                <Arrow href="#actividades">Ver actividades</Arrow>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Actividades de cada semana */}
      <section id="actividades" className="sec sand" style={{ scrollMarginTop: 60 }}>
        <div className="wrap">
          <h2 className="h t-2 rv" style={{ marginBottom: 72 }}>
            cada <span className="serif accent">semana.</span>
          </h2>
          <div className="acts">
            {activities.map((a) => (
              <article key={a.id} id={a.id} className="act rv" style={{ scrollMarginTop: 100 }}>
                <div>
                  <h3 className="h act-name">
                    {a.name} <span className="serif accent">{a.accent}</span>
                  </h3>
                  <p className="act-where">{a.where}</p>
                </div>
                <div className="act-body">
                  <p className="muted" style={{ margin: 0, fontSize: 19 }}>
                    {a.text}
                  </p>
                  <Arrow href={`/contacto?motivo=${a.id}#escribenos`}>{a.cta}</Arrow>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* A lo largo del año */}
      <section className="sec">
        <div className="wrap">
          <div className="split-48 start">
            <div className="rv">
              <h2 className="h t-1" style={{ marginBottom: 32 }}>
                a lo largo <span className="serif line accent">del año.</span>
              </h2>
              <Photo className="year-photo" src="/img/camino-retiro.webp" alt="Tres jóvenes caminan juntos por un sendero durante un retiro" position="center 45%" sizes="(max-width: 900px) 100vw, 40vw" />
            </div>
            <div>
              <div className="rows">
                {year.map((y) => (
                  <article key={y.t} className="belief rv">
                    <h3 className="h" style={{ fontSize: "clamp(26px, 2.4vw, 32px)", margin: 0 }}>
                      {y.t}
                    </h3>
                    <p className="muted" style={{ margin: 0 }}>
                      {y.d}
                    </p>
                  </article>
                ))}
              </div>
              <div className="rv" style={{ marginTop: 48 }}>
                <p className="body-l" style={{ margin: "0 0 24px" }}>
                  Las fechas y las inscripciones, <span className="muted">en la app Faro Madrid.</span>
                </p>
                <StoreButtons />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="sec navy">
        <div className="wrap rv" style={{ textAlign: "center" }}>
          <h2 className="h t-1" style={{ margin: "0 auto 48px", maxWidth: 1000 }}>
            ¿no sabes por dónde <span className="serif line gold">empezar?</span>
          </h2>
          <p className="muted body-l" style={{ margin: "0 auto 48px", maxWidth: 560 }}>
            Escríbenos y te contamos cuándo es el próximo encuentro de cada actividad.
          </p>
          <div className="btns btns-spaced" style={{ justifyContent: "center" }}>
            <Link className="btn btn-cream" href="/contacto?motivo=comunidad#escribenos">
              Escríbenos
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
