"use client";

import { useState } from "react";
import { site } from "@/lib/site";

type Status = "idle" | "sending" | "ok" | "error";

export default function ContactForm({ id = "c", title }: { id?: string; title?: React.ReactNode }) {
  const [status, setStatus] = useState<Status>("idle");

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());
    setStatus("sending");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!res.ok) throw new Error(String(res.status));
      setStatus("ok");
      form.reset();
    } catch {
      setStatus("error");
    }
  }

  if (status === "ok") {
    return (
      <div className="form" role="status">
        <p className="h" style={{ fontSize: 36 }}>
          ¡Gracias! <span className="serif accent">Te escribimos pronto.</span>
        </p>
        <p className="muted" style={{ margin: 0 }}>
          Hemos recibido tu mensaje. Si es urgente, escríbenos a <a href={`mailto:${site.email}`}>{site.email}</a>.
        </p>
      </div>
    );
  }

  return (
    <form className="form" onSubmit={onSubmit} noValidate={false}>
      {title}
      <div className="field">
        <label htmlFor={`${id}-nombre`}>Tu nombre</label>
        <input id={`${id}-nombre`} name="nombre" className="input" type="text" autoComplete="name" required maxLength={120} />
      </div>
      <div className="field">
        <label htmlFor={`${id}-email`}>Tu email</label>
        <input id={`${id}-email`} name="email" className="input" type="email" autoComplete="email" required maxLength={200} />
      </div>
      <div className="field">
        <label htmlFor={`${id}-msg`}>Tu mensaje</label>
        <textarea id={`${id}-msg`} name="mensaje" className="input" rows={3} required maxLength={4000} />
      </div>
      <input className="hp" type="text" name="web" tabIndex={-1} autoComplete="off" aria-hidden="true" />
      <div className="check">
        <input id={`${id}-priv`} name="privacidad" type="checkbox" required />
        <label htmlFor={`${id}-priv`}>
          Acepto la{" "}
          <a href={site.privacy} target="_blank" rel="noopener">
            política de privacidad
          </a>
          . Solo usaremos tus datos para contactar contigo sobre la iglesia, nuestros eventos y noticias.
        </label>
      </div>
      <div>
        <button className="btn btn-dark" type="submit" disabled={status === "sending"} style={{ paddingLeft: 36, paddingRight: 36 }}>
          {status === "sending" ? "Enviando..." : "Enviar mensaje"}
        </button>
      </div>
      {status === "error" && (
        <p className="form-msg" role="alert">
          No hemos podido enviarlo. Escríbenos directamente a <a href={`mailto:${site.email}`}>{site.email}</a>.
        </p>
      )}
    </form>
  );
}
