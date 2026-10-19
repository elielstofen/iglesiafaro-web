import Image from "next/image";

type Props = {
  src: string;
  alt: string;
  className?: string;
  style?: React.CSSProperties;
  position?: string;
  priority?: boolean;
  sizes?: string;
};

// Foto recortada que rellena su contenedor, con el tratamiento de color de la web.
export default function Photo({ src, alt, className = "", style, position = "center", priority, sizes = "(max-width: 900px) 100vw, 50vw" }: Props) {
  return (
    <div className={`ph ${className}`} style={style}>
      <Image
        src={src}
        alt={alt}
        fill
        sizes={sizes}
        priority={priority}
        className="img-tone"
        style={{ objectFit: "cover", objectPosition: position }}
      />
    </div>
  );
}
