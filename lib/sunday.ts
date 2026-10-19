// Calcula el próximo domingo de reunión en hora de Madrid.
// Si hoy es domingo y aún no ha terminado la reunión (antes de las 13:00), es hoy.

const TZ = "Europe/Madrid";

function madridParts(date: Date) {
  const parts = new Intl.DateTimeFormat("en-GB", {
    timeZone: TZ,
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    hour: "2-digit",
    weekday: "short",
    hour12: false,
  }).formatToParts(date);
  const get = (type: string) => parts.find((p) => p.type === type)?.value ?? "";
  const weekdays = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  return {
    year: Number(get("year")),
    month: Number(get("month")),
    day: Number(get("day")),
    hour: Number(get("hour")),
    weekday: weekdays.indexOf(get("weekday")),
  };
}

export function nextSunday(now: Date = new Date()) {
  const p = madridParts(now);
  let add = (7 - p.weekday) % 7;
  if (add === 0 && p.hour >= 13) add = 7;
  // Fecha "civil" en UTC para evitar saltos por cambio de hora.
  const d = new Date(Date.UTC(p.year, p.month - 1, p.day + add, 12));
  const dd = String(d.getUTCDate()).padStart(2, "0");
  const mm = String(d.getUTCMonth() + 1).padStart(2, "0");
  const yy = String(d.getUTCFullYear()).slice(-2);
  const long = new Intl.DateTimeFormat("es-ES", { day: "numeric", month: "long", timeZone: "UTC" }).format(d);
  return { isToday: add === 0, short: `${dd} / ${mm} / ${yy}`, long };
}
