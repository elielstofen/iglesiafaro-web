// Últimas publicaciones de @faromadrid.
// Usa la API oficial de Instagram (cuenta profesional) con un token de larga duración
// guardado en la variable de entorno INSTAGRAM_ACCESS_TOKEN.
// Si no hay token o la API falla, se muestran publicaciones de muestra.

export type IgPost = {
  id: string;
  image: string;
  alt: string;
  href: string;
  isVideo?: boolean;
};

type ApiMedia = {
  id: string;
  caption?: string;
  media_type: "IMAGE" | "VIDEO" | "CAROUSEL_ALBUM";
  media_url?: string;
  thumbnail_url?: string;
  permalink: string;
};

const PROFILE = "https://www.instagram.com/faromadrid/";

export const fallbackPosts: IgPost[] = [
  { id: "f1", image: "/img/conversacion.webp", alt: "Dos jóvenes conversan sentados a una mesa", href: PROFILE },
  { id: "f2", image: "/img/sonrisa.webp", alt: "Una chica sonríe durante una reunión", href: PROFILE },
  { id: "f3", image: "/img/risa.webp", alt: "Una mujer de la comunidad ríe durante una reunión", href: PROFILE },
  { id: "f4", image: "/img/oracion.webp", alt: "Una mujer ora con las manos abiertas", href: PROFILE },
];

function shortCaption(caption?: string) {
  if (!caption) return "Publicación de @faromadrid";
  const clean = caption.replace(/\s+/g, " ").trim();
  return clean.length > 120 ? `${clean.slice(0, 117)}...` : clean;
}

export async function getInstagramPosts(limit = 4): Promise<{ posts: IgPost[]; live: boolean }> {
  const token = process.env.INSTAGRAM_ACCESS_TOKEN;
  if (!token) return { posts: fallbackPosts.slice(0, limit), live: false };

  try {
    const url = new URL("https://graph.instagram.com/me/media");
    url.searchParams.set("fields", "id,caption,media_type,media_url,thumbnail_url,permalink");
    url.searchParams.set("limit", String(limit));
    url.searchParams.set("access_token", token);

    const res = await fetch(url, { next: { revalidate: 3600 } });
    if (!res.ok) throw new Error(`Instagram ${res.status}`);
    const json = (await res.json()) as { data?: ApiMedia[] };

    const posts = (json.data ?? [])
      .map((m) => ({
        id: m.id,
        image: (m.media_type === "VIDEO" ? m.thumbnail_url : m.media_url) ?? "",
        alt: shortCaption(m.caption),
        href: m.permalink,
        isVideo: m.media_type === "VIDEO",
      }))
      .filter((p) => p.image)
      .slice(0, limit);

    if (posts.length === 0) throw new Error("Instagram sin publicaciones");
    return { posts, live: true };
  } catch (err) {
    console.error("[instagram]", err);
    return { posts: fallbackPosts.slice(0, limit), live: false };
  }
}
