import Link from "next/link";
import { nav, site } from "@/lib/site";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="wrap">
        <div className="footer-cols">
          <div className="soft">
            <span style={{ color: "var(--on-navy)" }}>
              {site.meeting.day}, {site.meeting.time}
            </span>
            <span>{site.meeting.venue}</span>
            <span>Pozuelo de Alarcón</span>
          </div>
          <nav aria-label="Pie de página">
            {nav.map((item) => (
              <Link key={item.href} href={item.href}>
                {item.label}
              </Link>
            ))}
          </nav>
          <nav aria-label="Redes sociales">
            <a href={site.social.instagram} target="_blank" rel="noopener">
              Instagram
            </a>
            <a href={site.social.facebook} target="_blank" rel="noopener">
              Facebook
            </a>
            <a href={site.social.spotify} target="_blank" rel="noopener">
              Spotify
            </a>
          </nav>
          <div className="soft">
            <a href={`mailto:${site.email}`}>{site.email}</a>
            <span>© {new Date().getFullYear()} {site.legalName}</span>
            <a href={site.privacy}>Política de privacidad</a>
          </div>
        </div>
      </div>
      <p className="wordmark" aria-hidden="true">
        faro
      </p>
    </footer>
  );
}
