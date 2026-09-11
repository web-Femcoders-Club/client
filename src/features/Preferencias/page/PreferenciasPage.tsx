import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import { useNavigate } from "react-router-dom";
import {
  getEstadoDeConsentimiento,
  guardarConsentimiento,
} from "../../../api/consentApi";
import { useFocusMessage } from "../../../hooks/useFocusMessage";
import { TextosDeConsentimiento } from "../../../types/types";
import "./PreferenciasPage.css";

/**
 * Pantalla de preferencias de comunicación (#101, server#130).
 *
 * De las 106 usuarias registradas, 105 se registraron antes de que el formulario
 * de alta tuviera la casilla de consentimiento. Esta pantalla recoge su respuesta
 * la primera vez que vuelven a iniciar sesión.
 *
 * ## Por qué es una pantalla y no un modal ni un banner
 *
 * Un modal que bloquea necesita atrapar el foco (WCAG 2.1.2) y que Escape no lo
 * cierre, así que acaba siendo un modal con las salidas tapadas — y se rompe a
 * 200% de zoom y en móvil horizontal. Un banner es esquivable por definición y
 * arrastra la ceguera al banner de cookies: se cierra sin leer.
 *
 * Una pantalla es un h1, un texto y dos botones. No necesita atrapar el foco
 * porque no hay nada detrás que proteger.
 *
 * ## Por qué puede obligar a responder
 *
 * Obliga a **responder**, no a **consentir**: «No quiero recibir nada» entra en
 * la web completa, con todo funcionando igual. No hay intercambio de acceso por
 * consentimiento, así que el consentimiento sigue siendo libre (RGPD art. 7.4).
 *
 * Si algún día un botón queda más destacado que el otro, aparece un aspa de
 * cerrar, o algo se degrada al haber rechazado, el consentimiento recogido por
 * esta vía deja de ser válido.
 */
const PreferenciasPage: React.FC = () => {
  const navigate = useNavigate();

  const [textos, setTextos] = useState<TextosDeConsentimiento | null>(null);
  const [eventos, setEventos] = useState(false);
  const [newsletter, setNewsletter] = useState(false);
  const [guardando, setGuardando] = useState(false);
  const [error, setError] = useState("");
  const errorRef = useFocusMessage(error);

  const idUser = Number(sessionStorage.getItem("userId") || 0);

  useEffect(() => {
    if (!idUser) {
      navigate("/login", { replace: true });
      return;
    }

    let vigente = true;
    getEstadoDeConsentimiento(idUser)
      .then((estado) => {
        if (!vigente) return;
        // Quien ya respondió no tiene nada que hacer aquí. Puede llegar por la
        // URL escrita a mano o por un enlace guardado.
        if (estado.yaRespondio) {
          navigate("/welcome", { replace: true });
          return;
        }
        setTextos(estado.textos);
      })
      .catch(() =>
        setError(
          "No hemos podido cargar tus preferencias. Recarga la página, y si sigue fallando escríbenos."
        )
      );

    return () => {
      vigente = false;
    };
  }, [idUser, navigate]);

  const responder = async (decision: {
    eventos: boolean;
    newsletter: boolean;
  }) => {
    setError("");
    setGuardando(true);
    try {
      await guardarConsentimiento(idUser, decision);
      navigate("/welcome", { replace: true });
    } catch {
      setError(
        "No hemos podido guardar tu respuesta. Inténtalo de nuevo en un momento."
      );
      setGuardando(false);
    }
  };

  // Mientras no hay textos no se pinta la pantalla: una pantalla que aparece y
  // desaparece es peor que medio segundo de espera. El error sí se muestra,
  // porque si no quedaría una página en blanco sin explicación.
  if (!textos) {
    return (
      <main className="preferencias">
        {error && (
          <p className="preferencias__error" role="alert" tabIndex={-1} ref={errorRef}>
            {error}
          </p>
        )}
      </main>
    );
  }

  return (
    <main className="preferencias">
      <Helmet>
        <title>Tus preferencias de comunicación - FemCoders Club</title>
        <meta name="robots" content="noindex" />
      </Helmet>

      <div className="preferencias__tarjeta">
        <h1 className="preferencias__titulo">{textos.titulo}</h1>
        <p className="preferencias__intro">{textos.introduccion}</p>

        {error && (
          <p className="preferencias__error" role="alert" tabIndex={-1} ref={errorRef}>
            {error}
          </p>
        )}

        <fieldset className="preferencias__grupo">
          <legend className="preferencias__leyenda">
            Marca lo que quieras recibir
          </legend>

          <label className="preferencias__opcion" htmlFor="consent-eventos">
            <input
              id="consent-eventos"
              type="checkbox"
              className="preferencias__casilla foco-visible"
              checked={eventos}
              onChange={(e) => setEventos(e.target.checked)}
            />
            <span className="preferencias__etiqueta">{textos.eventos}</span>
          </label>

          <label className="preferencias__opcion" htmlFor="consent-newsletter">
            <input
              id="consent-newsletter"
              type="checkbox"
              className="preferencias__casilla foco-visible"
              checked={newsletter}
              onChange={(e) => setNewsletter(e.target.checked)}
            />
            <span className="preferencias__etiqueta">{textos.newsletter}</span>
          </label>
        </fieldset>

        {/*
          Los dos botones pesan lo mismo a propósito: mismo tamaño, misma
          tipografía y misma altura. Destacar uno sobre otro empujaría hacia una
          respuesta concreta, y un consentimiento empujado no es libre.
        */}
        <div className="preferencias__acciones">
          <button
            type="button"
            className="preferencias__boton preferencias__boton--guardar foco-visible"
            onClick={() => responder({ eventos, newsletter })}
            disabled={guardando}
          >
            Guardar mis preferencias
          </button>

          <button
            type="button"
            className="preferencias__boton preferencias__boton--ninguna foco-visible"
            onClick={() => responder({ eventos: false, newsletter: false })}
            disabled={guardando}
          >
            No quiero recibir nada
          </button>
        </div>

        <p className="preferencias__nota">{textos.nota}</p>
      </div>
    </main>
  );
};

export default PreferenciasPage;
