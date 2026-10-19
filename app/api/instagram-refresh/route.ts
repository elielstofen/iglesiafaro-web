// Renueva el token de Instagram para que no caduque (dura 60 días).
// Lo llama el cron de Vercel una vez por semana (ver vercel.json).

export async function GET(request: Request) {
  const secret = process.env.CRON_SECRET;
  if (secret && request.headers.get("authorization") !== `Bearer ${secret}`) {
    return new Response("Unauthorized", { status: 401 });
  }

  const token = process.env.INSTAGRAM_ACCESS_TOKEN;
  if (!token) return Response.json({ ok: false, reason: "sin token" });

  const url = new URL("https://graph.instagram.com/refresh_access_token");
  url.searchParams.set("grant_type", "ig_refresh_token");
  url.searchParams.set("access_token", token);

  const res = await fetch(url, { cache: "no-store" });
  const json = (await res.json()) as { access_token?: string; expires_in?: number; error?: unknown };
  if (!res.ok) {
    console.error("[instagram-refresh]", res.status, json.error);
    return Response.json({ ok: false }, { status: 502 });
  }

  const days = Math.round((json.expires_in ?? 0) / 86400);
  if (json.access_token && json.access_token !== token) {
    console.warn("[instagram-refresh] Meta ha devuelto un token nuevo: actualiza INSTAGRAM_ACCESS_TOKEN en Vercel.");
  }
  return Response.json({ ok: true, days });
}
