import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    formats: ["image/avif", "image/webp"],
    // Calidad algo más alta que la de serie (75) para las fotos de la comunidad
    qualities: [75, 85],
  },
};

export default nextConfig;
