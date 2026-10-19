// Recibe el formulario de contacto y lo envía por email a info@iglesiafaro.com con Resend.
// Variables de entorno: RESEND_API_KEY y, opcionalmente, CONTACT_FROM y CONTACT_TO.

const esc = (s: string) => s.replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[c]!);

export async function POST(request: Request) {
  let body: Record<string, unknown>;
  try {
    body = await request.json();
  } catch {
    return Response.json({ error: "invalid" }, { status: 400 });
  }

  // Campo trampa para bots.
  if (typeof body.web === "string" && body.web.trim() !== "") return Response.json({ ok: true });

  const nombre = String(body.nombre ?? "").trim().slice(0, 120);
  const email = String(body.email ?? "").trim().slice(0, 200);
  const mensaje = String(body.mensaje ?? "").trim().slice(0, 4000);
  const privacidad = body.privacidad === "on" || body.privacidad === true;

  if (!nombre || !mensaje || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) || !privacidad) {
    return Response.json({ error: "missing" }, { status: 422 });
  }

  const key = process.env.RESEND_API_KEY;
  if (!key) {
    console.error("[contact] RESEND_API_KEY no configurada");
    return Response.json({ error: "not-configured" }, { status: 503 });
  }

  const res = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: { Authorization: `Bearer ${key}`, "Content-Type": "application/json" },
    body: JSON.stringify({
      from: process.env.CONTACT_FROM || "Web Iglesia Faro <web@iglesiafaro.com>",
      to: [process.env.CONTACT_TO || "info@iglesiafaro.com"],
      reply_to: email,
      subject: `Nuevo mensaje de ${nombre} desde la web`,
      text: `Nombre: ${nombre}\nEmail: ${email}\n\n${mensaje}`,
      html: `<p><strong>Nombre:</strong> ${esc(nombre)}<br><strong>Email:</strong> ${esc(email)}</p><p>${esc(mensaje).replace(/\n/g, "<br>")}</p>`,
    }),
  });

  if (!res.ok) {
    console.error("[contact] Resend", res.status, await res.text());
    return Response.json({ error: "send-failed" }, { status: 502 });
  }
  return Response.json({ ok: true });
}
