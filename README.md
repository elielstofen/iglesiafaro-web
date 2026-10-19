# iglesiafaro.com

Web de Iglesia Faro (Next.js, alojada en Vercel).

## Desarrollo

```bash
npm install
npm run dev
```

## Dónde cambiar cosas

- Datos de contacto, dirección, horario, enlaces de Stripe, redes y tiendas de apps: `lib/site.ts`
- Textos de cada página: `app/<página>/page.tsx` (inicio en `app/page.tsx`)
- Estilos: `app/globals.css`
- Fotos: `public/img/`

## Variables de entorno (Vercel)

| Variable | Para qué |
| --- | --- |
| `INSTAGRAM_ACCESS_TOKEN` | Token de larga duración de la API de Instagram para mostrar los últimos posts. Sin él se muestran fotos de muestra. |
| `RESEND_API_KEY` | Envío del formulario de contacto por email (Resend). |
| `CONTACT_TO` | Opcional. Destino de los mensajes (por defecto info@iglesiafaro.com). |
| `CONTACT_FROM` | Opcional. Remitente verificado en Resend. |
| `NEXT_PUBLIC_APP_STORE_URL` / `NEXT_PUBLIC_GOOGLE_PLAY_URL` | Enlaces de la app Faro Madrid. |

La página de inicio se regenera cada hora (fecha del próximo domingo y posts de Instagram).
