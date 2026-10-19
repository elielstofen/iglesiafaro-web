import type { MetadataRoute } from "next";
import { site } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  return ["", "/sobre-nosotros", "/visitanos", "/ofrendar", "/contacto"].map((path) => ({
    url: `${site.url}${path}`,
    changeFrequency: path === "" ? "weekly" : "monthly",
    priority: path === "" ? 1 : 0.7,
  }));
}
