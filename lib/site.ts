// Datos de contacto, enlaces y textos compartidos de la web.
// Cambia aquí cualquier dato y se actualiza en todas las páginas.

export const site = {
  name: "Iglesia Faro",
  legalName: "Iglesia Cristiana Faro",
  url: "https://iglesiafaro.com",
  email: "info@iglesiafaro.com",
  tagline: "para dar luz a los que están en oscuridad y guiar nuestros pies por caminos de paz",
  description:
    "Iglesia Faro: un movimiento de Jesús de gente sencilla que adora a un Dios extraordinario. Te esperamos los domingos a las 11:00 en el Eurostars i-Hotel, Pozuelo de Alarcón (Madrid).",

  meeting: {
    day: "Domingos",
    time: "11:00",
    venue: "Eurostars i-Hotel",
    street: "C/ Virgilio, 4, 28223 Pozuelo de Alarcón",
    area: "Ciudad de la Imagen, Madrid",
    mapsUrl: "https://maps.google.com/?q=Eurostars+i-Hotel+Pozuelo+de+Alarc%C3%B3n",
    mapsEmbed:
      "https://maps.google.com/maps?q=Eurostars%20i-Hotel%2C%20Calle%20Virgilio%204%2C%20Pozuelo%20de%20Alarc%C3%B3n&z=15&output=embed",
    metro: "Ciudad del Cine o Ciudad de la Imagen.",
    bus: "574, 658A (Moncloa), 5332, 571 y 573.",
    parking: "Es muy fácil aparcar, tanto en la calle como en el parking del hotel.",
  },

  social: {
    instagram: "https://www.instagram.com/faromadrid/",
    instagramHandle: "@faromadrid",
    facebook: "https://www.facebook.com/iglesiafaromadrid",
    spotify: "https://open.spotify.com/user/31knnvtxuo7wdifjmjq7pon7wpua",
  },

  giving: {
    diezmo: "https://buy.stripe.com/14kcO5gKA3Uz7i83ch",
    ofrenda: "https://donate.stripe.com/7sIbK1amc3UzaukaEE",
  },

  // Enlaces de la app Faro Madrid en las tiendas.
  // Google Play está en revisión: cuando esté publicada, pon aquí su enlace
  // (o en la variable NEXT_PUBLIC_GOOGLE_PLAY_URL) y el botón aparecerá solo.
  app: {
    appStore: process.env.NEXT_PUBLIC_APP_STORE_URL || "https://apps.apple.com/es/app/faro-madrid/id6746827660",
    googlePlay: process.env.NEXT_PUBLIC_GOOGLE_PLAY_URL || "",
  },

  privacy: "https://app.iglesiafaro.com/privacidad",
};

export const nav = [
  { href: "/sobre-nosotros", label: "Sobre nosotros" },
  { href: "/visitanos", label: "Visítanos" },
  { href: "/comunidad", label: "Comunidad" },
  { href: "/ofrendar", label: "Ofrendar" },
  { href: "/contacto", label: "Contacto" },
];
