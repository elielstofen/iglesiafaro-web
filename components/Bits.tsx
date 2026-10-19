import Link from "next/link";
import { site } from "@/lib/site";
import { getInstagramPosts } from "@/lib/instagram";

export function Pill({ src }: { src: string }) {
  // Decorativa: la frase se entiende sin la imagen.
  // eslint-disable-next-line @next/next/no-img-element
  return <img className="pill img-tone" src={src} alt="" aria-hidden="true" />;
}

export function Arrow({ href, children, external }: { href: string; children: React.ReactNode; external?: boolean }) {
  const content = (
    <>
      {children} <span aria-hidden="true">{external ? "↗" : "→"}</span>
    </>
  );
  if (external || href.startsWith("http") || href.startsWith("mailto")) {
    return (
      <a className="arrow" href={href} target={href.startsWith("http") ? "_blank" : undefined} rel="noopener">
        {content}
      </a>
    );
  }
  return (
    <Link className="arrow" href={href}>
      {content}
    </Link>
  );
}

export function MapEmbed() {
  return (
    <div className="map rv">
      <iframe
        src={site.meeting.mapsEmbed}
        title="Mapa: Eurostars i-Hotel, Pozuelo de Alarcón"
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      />
    </div>
  );
}

function StoreIcon() {
  return (
    <svg aria-hidden="true" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 4v11M7 10l5 5 5-5M5 20h14" />
    </svg>
  );
}

export function StoreButtons({ variant = "dark", long = false }: { variant?: "dark" | "cream"; long?: boolean }) {
  const cls = variant === "dark" ? "btn btn-dark" : "btn btn-cream";
  return (
    <div className={long ? "btns btns-m-col" : "btns btns-m-stack"}>
      <a className={cls} href={site.app.appStore} target="_blank" rel="noopener">
        {long && <StoreIcon />}
        {long ? "Descargar en App Store" : "App Store"}
      </a>
      <a className={cls} href={site.app.googlePlay} target="_blank" rel="noopener">
        {long && <StoreIcon />}
        {long ? "Disponible en Google Play" : "Google Play"}
      </a>
    </div>
  );
}

export function AppPhone() {
  return (
    <div className="phone" aria-hidden="true">
      <p className="h" style={{ fontSize: 26, letterSpacing: "-0.03em", lineHeight: 1, marginBottom: 8 }}>
        faro
      </p>
      <div className="phone-card">
        <p className="phone-label">VERSÍCULO DE HOY</p>
        <p className="serif" style={{ margin: "0 0 14px", fontSize: 22, lineHeight: 1.3, fontWeight: 400 }}>
          Cercano estás tú, oh Señor, y todos tus mandamientos son verdad.
        </p>
        <p style={{ margin: 0, fontSize: 11, color: "rgba(237,226,204,.6)" }}>Salmos 119:151</p>
      </div>
      <div className="phone-card alt">
        <p className="phone-label">PARA HOY</p>
        <p style={{ margin: 0, fontSize: 19, lineHeight: 1.2, fontWeight: 300 }}>
          Comienza el día{" "}
          <span className="serif line" style={{ fontSize: 23, fontWeight: 400 }}>
            en silencio.
          </span>
        </p>
      </div>
    </div>
  );
}

export async function InstagramGrid() {
  const { posts } = await getInstagramPosts(4);
  return (
    <div className="grid-4 rv">
      {posts.map((p) => (
        <a key={p.id} className="ph ig-tile" href={p.href} target="_blank" rel="noopener" aria-label={`Ver en Instagram: ${p.alt}`}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img className="img-tone" src={p.image} alt="" loading="lazy" />
          {p.isVideo && (
            <svg className="play" aria-hidden="true" width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
              <path d="M8 5v14l11-7z" />
            </svg>
          )}
        </a>
      ))}
    </div>
  );
}

export function GiveBand() {
  return (
    <section className="navy" aria-labelledby="ofrendar-band">
      <div className="wrap">
        <div className="split end rv footer-band">
          <div>
            <p className="eyebrow" style={{ color: "var(--on-navy-muted)", marginBottom: 24 }}>
              Ofrendar
            </p>
            <h2 id="ofrendar-band" className="h t-2" style={{ fontSize: "clamp(46px, 6vw, 76px)" }}>
              con <span className="serif gold">generosidad.</span>
            </h2>
          </div>
          <div className="btns btns-m-stack" style={{ justifyContent: "flex-end" }}>
            <a className="btn btn-cream" href={site.giving.diezmo} target="_blank" rel="noopener">
              Haz tu diezmo
            </a>
            <a className="btn btn-ghost" href={site.giving.ofrenda} target="_blank" rel="noopener">
              Haz tu donación
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
