type Props = {
  src: string;
  /** Encuadre de la foto dentro del globito, p. ej. "center 25%" */
  position?: string;
  hideMobile?: boolean;
};

// Globito con foto dentro de un título. Es un detalle tipográfico: no se abre ni se agranda.
// Al pasar el ratón, la foto se mueve muy despacio dentro de la píldora.
export default function Pill({ src, position, hideMobile }: Props) {
  return (
    <span className={hideMobile ? "pill-wrap hide-m" : "pill-wrap"} aria-hidden="true">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img className="pill img-tone" src={src} alt="" style={position ? { objectPosition: position } : undefined} />
    </span>
  );
}
