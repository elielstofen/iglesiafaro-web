"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { nav, site } from "@/lib/site";

export default function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (!open) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = prev;
      window.removeEventListener("keydown", onKey);
    };
  }, [open]);

  return (
    <>
      <header className="header">
        <div className="wrap header-in">
          <Link href="/" className="logo" aria-label="Iglesia Faro, inicio">
            faro
          </Link>
          <nav className="nav" aria-label="Principal">
            {nav.map((item) => (
              <Link key={item.href} href={item.href} aria-current={pathname === item.href ? "page" : undefined}>
                {item.label}
              </Link>
            ))}
          </nav>
          <Link href="/visitanos" className="btn btn-dark btn-sm header-cta">
            Ven el domingo
          </Link>
          <button
            type="button"
            className="menu-btn"
            aria-label="Abrir menú"
            aria-expanded={open}
            aria-controls="menu-movil"
            onClick={() => setOpen(true)}
          >
            <svg aria-hidden="true" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round">
              <path d="M4 9h16M4 15h16" />
            </svg>
          </button>
        </div>
      </header>

      <div id="menu-movil" className="mobile-menu" data-open={open} aria-hidden={!open} role="dialog" aria-modal="true" aria-label="Menú">
        <div className="mobile-menu-top">
          <Link href="/" className="logo" tabIndex={open ? 0 : -1}>
            faro
          </Link>
          <button type="button" className="menu-btn" style={{ display: "flex" }} aria-label="Cerrar menú" tabIndex={open ? 0 : -1} onClick={() => setOpen(false)}>
            <svg aria-hidden="true" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round">
              <path d="M6 6l12 12M18 6L6 18" />
            </svg>
          </button>
        </div>
        <nav aria-label="Menú móvil">
          <Link href="/" tabIndex={open ? 0 : -1}>
            Inicio
          </Link>
          {nav.map((item) => (
            <Link key={item.href} href={item.href} tabIndex={open ? 0 : -1} aria-current={pathname === item.href ? "page" : undefined}>
              {item.label}
            </Link>
          ))}
        </nav>
        <div className="mobile-menu-foot">
          <p className="muted" style={{ margin: "0 0 20px", fontSize: 16 }}>
            {site.meeting.day}, {site.meeting.time} - {site.meeting.venue}, Pozuelo
          </p>
          <Link href="/visitanos" className="btn btn-dark" style={{ width: "100%" }} tabIndex={open ? 0 : -1}>
            Ven este domingo
          </Link>
        </div>
      </div>
    </>
  );
}
