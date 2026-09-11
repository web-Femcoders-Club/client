import React, { useEffect, useState } from "react";
import { getCodigoVonage } from "../../../api/vonageApi";
import "./vonage.css";

/**
 * El código promocional de Vonage para la comunidad (#102, server#131).
 *
 * ## Este componente no sabe nada del consentimiento, y es a propósito
 *
 * Condicionar el código a que la persona acepte las comunicaciones invalidaría
 * ese consentimiento: dejaría de ser libre (RGPD art. 7.4) y las respuestas
 * recogidas en la pantalla de preferencias no valdrían nada.
 *
 * La garantía no es «acordarse de no hacerlo»: es que aquí no entra ninguna prop
 * ni ningún contexto que venga del consentimiento, así que este componente no
 * podría esperarle aunque alguien lo intentara. Una PR que meta un
 * `if (consentimiento…)` alrededor de esta tarjeta debería bloquearse en review.
 */
const CodigoVonage: React.FC = () => {
  const [codigo, setCodigo] = useState<string | null>(null);
  const [error, setError] = useState("");
  const [copiado, setCopiado] = useState(false);

  useEffect(() => {
    let vigente = true;
    getCodigoVonage()
      .then(({ codigo }) => vigente && setCodigo(codigo))
      .catch(() => {
        if (!vigente) return;
        // Nunca un código de reserva escrito aquí: el bundle es público y eso
        // equivaldría a publicarlo. Si el backend no lo tiene, se dice.
        setError(
          "Ahora mismo no podemos mostrarte el código. Escríbenos a femcodersclub@gmail.com y te lo damos."
        );
      });
    return () => {
      vigente = false;
    };
  }, []);

  const copiar = async () => {
    if (!codigo) return;
    try {
      await navigator.clipboard.writeText(codigo);
      setCopiado(true);
      window.setTimeout(() => setCopiado(false), 4000);
    } catch {
      // Sin permiso de portapapeles el código sigue visible y se puede
      // seleccionar a mano, así que no hace falta alarmar con un error.
      setCopiado(false);
    }
  };

  if (error) {
    return (
      <section className="vonage" aria-labelledby="vonage-titulo">
        <h2 id="vonage-titulo" className="vonage__titulo">
          Somos Community Partner de Vonage
        </h2>
        <p className="vonage__error" role="alert">
          {error}
        </p>
      </section>
    );
  }

  if (!codigo) return null;

  return (
    <section className="vonage" aria-labelledby="vonage-titulo">
      <h2 id="vonage-titulo" className="vonage__titulo">
        Somos Community Partner de Vonage
      </h2>
      <p className="vonage__texto">
        La comunidad tiene acceso a las APIs de comunicación de Vonage —SMS, voz,
        vídeo y verificación— para trastear, aprender y construir cosas. Este es
        tu código:
      </p>

      <div className="vonage__fila">
        <code className="vonage__codigo">{codigo}</code>
        <button
          type="button"
          className="vonage__boton foco-visible"
          onClick={copiar}
        >
          Copiar código
        </button>
      </div>

      {/*
        `role="status"` para que un lector de pantalla anuncie la confirmación:
        sin esto, quien no ve el cambio de texto no sabe si el botón ha hecho
        algo.
      */}
      <p className="vonage__copiado" role="status">
        {copiado ? "Código copiado al portapapeles" : ""}
      </p>
    </section>
  );
};

export default CodigoVonage;
