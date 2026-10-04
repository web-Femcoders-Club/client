import { Fragment } from "react";
import { Link } from "react-router-dom";
import type { Fragmento } from "../contenido";

/*
 * Pinta los fragmentos de un párrafo de contenido.ts: texto, negrita o enlace
 * interno. Cada sección decide la clase de sus enlaces.
 */
const TextoRico: React.FC<{ fragmentos: Fragmento[]; claseEnlace: string }> = ({
  fragmentos,
  claseEnlace,
}) => (
  <>
    {fragmentos.map((f, i) => {
      if (typeof f === "string") return <Fragment key={i}>{f}</Fragment>;
      if ("negrita" in f)
        return (
          <strong key={i}>
            <TextoRico fragmentos={f.negrita} claseEnlace={claseEnlace} />
          </strong>
        );
      return (
        <Link key={i} to={f.enlace} className={claseEnlace}>
          {f.texto}
        </Link>
      );
    })}
  </>
);

export default TextoRico;
