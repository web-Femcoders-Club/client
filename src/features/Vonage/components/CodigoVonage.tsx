import React, { useEffect, useState } from "react";
import { getCodigoVonage } from "../../../api/vonageApi";
import OptimizedImage from "../../../components/OptimizedImage";
import "../../Welcome/components/vonage.css";

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

  /*
   * La cabecera es la misma se haya podido cargar el código o no: el acuerdo con
   * Vonage y el enlace a su comunidad siguen siendo ciertos aunque el endpoint
   * del código esté caído, así que no tiene sentido esconderlos.
   *
   * El logo va con `alt=""` a propósito: dice «Vonage», que es exactamente lo
   * que ya dice el título justo debajo. Ponerle texto alternativo haría que un
   * lector de pantalla anunciara la marca dos veces seguidas.
   */
  const cabecera = (
    <>
      <OptimizedImage
        src="/assets/Vonage/VonageLogo.png"
        alt=""
        className="vonage__logo"
        loading="lazy"
      />
      <h2 id="vonage-titulo" className="vonage__titulo vonage__titulo--gradiente">
        Somos Community Partner de Vonage
      </h2>
    </>
  );

  return (
    <section
      className="vonage vonage--partner"
      aria-labelledby="vonage-titulo"
    >
      {/* La barra de cuatro colores del Quiz. Decorativa: no anuncia nada. */}
      <div className="vonage__barra" aria-hidden="true" />

      <div className="vonage__cuerpo">
        {cabecera}

        <p className="vonage__texto">
          Vonage pone a tu disposición{" "}
          <strong>20 € de crédito para explorar sus APIs de comunicación</strong>,
          experimentar con tecnologías como SMS, voz, vídeo y verificación, y
          empezar a integrarlas en tus propios proyectos.
        </p>

        {error ? (
          <p className="vonage__error" role="alert">
            {error}
          </p>
        ) : (
          codigo && (
            <div className="vonage__caja">
              <p className="vonage__caja-titulo">Tu código</p>

              <div className="vonage__fila">
                <code className="vonage__codigo">{codigo}</code>
                <button
                  type="button"
                  className="vonage__boton foco-visible"
                  onClick={copiar}
                >
                  <svg
                    width="17"
                    height="17"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    <rect x="9" y="9" width="12" height="12" rx="2" />
                    <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" />
                  </svg>
                  Copiar código
                </button>
              </div>

              {/*
                `role="status"` para que un lector de pantalla anuncie la
                confirmación: sin esto, quien no ve el cambio de texto no sabe si
                el botón ha hecho algo.
              */}
              <p className="vonage__caja-texto vonage__caja-pie">
                Canjéalo en tu cuenta de Vonage y desbloquea 20 € de crédito.
              </p>

              <p className="vonage__copiado" role="status">
                {copiado ? "Código copiado al portapapeles" : ""}
              </p>
            </div>
          )
        )}
      </div>
    </section>
  );
};

export default CodigoVonage;
