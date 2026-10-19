import type { Metadata } from "next";
import ContactForm from "@/components/ContactForm";
import { Pill, StoreButtons } from "@/components/Bits";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contacto",
  description: "¿Eres nuevo o tienes preguntas sobre Jesús? Escríbenos a info@iglesiafaro.com o por el formulario.",
  alternates: { canonical: "/contacto" },
};

const channels = [
  { label: "Email", value: site.email, href: `mailto:${site.email}` },
  { label: "Instagram", value: site.social.instagramHandle, href: site.social.instagram },
  { label: "Facebook", value: "iglesiafaromadrid", href: site.social.facebook },
  { label: "Spotify", value: "Nuestras playlists", href: site.social.spotify },
];

export default function Contacto() {
  return (
    <>
      <section style={{ padding: "112px 0 96px" }}>
        <div className="wrap">
          <p className="eyebrow muted a1">Contacto</p>
          <h1 className="h t-hero-xl a2" style={{ marginTop: 32 }}>
            queremos <Pill src="/img/banda.webp" position="center 35%" name="Parte del equipo" note="de alabanza de Faro" /> <span className="serif accent">conocerte.</span>
          </h1>
          <div className="a4" style={{ marginTop: 40, maxWidth: 720 }}>
            <p className="body-l" style={{ margin: "0 0 8px" }}>
              ¿Eres nuevo? ¿Tienes preguntas sobre Jesús? ¿Buscas una comunidad de gente sencilla que sigue a un Dios extraordinario?
            </p>
            <p className="body-l muted" style={{ margin: 0 }}>
              Si buscas esto y más, escríbenos.
            </p>
          </div>
        </div>
      </section>

      <section style={{ paddingBottom: "var(--section)" }}>
        <div className="wrap">
          <div className="split-65 start">
            <div className="rows rv">
              {channels.map((c) => (
                <a key={c.label} className="channel" href={c.href} target={c.href.startsWith("http") ? "_blank" : undefined} rel="noopener">
                  <span className="channel-label muted" style={{ fontSize: 15 }}>
                    {c.label}
                  </span>
                  <span className="channel-value">{c.value}</span>
                  <span aria-hidden="true">↗</span>
                </a>
              ))}
            </div>
            <div className="form-card rv">
              <ContactForm
                id="contacto"
                title={
                  <h2 className="h" style={{ fontSize: 36 }}>
                    escríbenos <span className="serif accent">aquí.</span>
                  </h2>
                }
              />
            </div>
          </div>
        </div>
      </section>

      <section className="sec navy">
        <div className="wrap split end rv">
          <h2 className="h t-2">
            ¿quieres que <span className="serif gold">oremos por ti?</span>
          </h2>
          <div>
            <p style={{ margin: "0 0 32px", color: "rgba(237,226,204,.82)" }}>
              Comparte tu petición desde la app Faro Madrid, con toda la comunidad o solo con el equipo de oración.
            </p>
            <StoreButtons variant="cream" />
          </div>
        </div>
      </section>
    </>
  );
}
