import React, { useEffect, useState } from "react";
import { getInteresEnApis, guardarInteresEnApis } from "../../../api/vonageApi";
import { useFocusMessage } from "../../../hooks/useFocusMessage";
import {
  ApiDeVonage,
  RespuestaHoras,
  RespuestaProyecto,
} from "../../../types/types";
import "./vonage.css";

/*
 * Vocabulario cerrado, el mismo que valida el backend. Sin catálogo, el día que
 * de aquí salga "Sí!!" en vez de "si" la respuesta entra en la base de datos y
 * no la cuenta nadie, y el error no se ve hasta que toca sumar.
 */
const PROYECTO: { valor: RespuestaProyecto; texto: string }[] = [
  { valor: "si", texto: "Sí, me apunto" },
  { valor: "me-lo-pienso", texto: "Me lo pienso" },
  { valor: "no", texto: "Ahora no" },
];

const HORAS: { valor: RespuestaHoras; texto: string }[] = [
  { valor: "1-2", texto: "1 o 2 horas" },
  { valor: "3-5", texto: "3 a 5 horas" },
  { valor: "mas", texto: "Más de 5" },
  { valor: "ahora-no", texto: "Ahora mismo no puedo" },
];

const LAS_APIS: { valor: ApiDeVonage; texto: string }[] = [
  { valor: "sms", texto: "SMS" },
  { valor: "voz", texto: "Voz" },
  { valor: "video", texto: "Vídeo" },
  { valor: "verificacion", texto: "Verificación" },
  { valor: "whatsapp", texto: "WhatsApp" },
  { valor: "aun-no-lo-se", texto: "Aún no lo sé" },
];

/**
 * Tres preguntas para saber si merece la pena montar un proyecto en grupo con
 * las APIs de Vonage (#102, server#131).
 *
 * Tres y no un formulario largo: cuantos más campos, menos respuestas. Y sin
 * campo de texto libre, que es donde acaban apareciendo teléfonos y nombres de
 * empresa que nadie pidió y que luego hay que custodiar.
 *
 * Opcional de verdad: no bloquea nada y los textos hablan de «si sale adelante».
 * No se prometen fechas ni formato, porque si se anuncia una cohorte y responden
 * cuatro personas el compromiso queda en el aire.
 */
const InteresEnApis: React.FC = () => {
  const idUser = Number(sessionStorage.getItem("userId") || 0);

  const [proyecto, setProyecto] = useState<RespuestaProyecto | "">("");
  const [horas, setHoras] = useState<RespuestaHoras | "">("");
  const [apis, setApis] = useState<ApiDeVonage[]>([]);
  const [yaRespondio, setYaRespondio] = useState(false);
  const [guardando, setGuardando] = useState(false);
  const [mensaje, setMensaje] = useState("");
  /*
   * El tono va aparte del texto porque `mensaje` carga tres significados —error
   * de validación, éxito y error de red— y los tres se pintaban igual: con los
   * colores del error. El «¡Gracias!» salía en rojo.
   */
  const [tono, setTono] = useState<"ok" | "error">("error");
  const mensajeRef = useFocusMessage(mensaje);

  const avisar = (texto: string, cual: "ok" | "error") => {
    setTono(cual);
    setMensaje(texto);
  };

  useEffect(() => {
    if (!idUser) return;
    let vigente = true;
    getInteresEnApis(idUser)
      .then((previa) => {
        if (!vigente || !previa) return;
        setProyecto(previa.quiereProyecto);
        setHoras(previa.horasSemana);
        setApis(previa.apis ?? []);
        setYaRespondio(true);
      })
      .catch(() => {
        // Que no haya respuesta previa, o que falle la consulta, no impide
        // contestar: el formulario se pinta vacío y ya está.
      });
    return () => {
      vigente = false;
    };
  }, [idUser]);

  const alternarApi = (valor: ApiDeVonage) =>
    setApis((actuales) =>
      actuales.includes(valor)
        ? actuales.filter((a) => a !== valor)
        : [...actuales, valor]
    );

  const validar = (): string => {
    if (!proyecto) return "Elige una respuesta a la primera pregunta.";
    if (!horas) return "Dinos cuántas horas podrías dedicarle.";
    if (apis.length === 0) return "Marca al menos una de las APIs.";
    return "";
  };

  const enviar = async (e: React.FormEvent) => {
    e.preventDefault();
    const fallo = validar();
    if (fallo) {
      avisar(fallo, "error");
      return;
    }

    setMensaje("");
    setGuardando(true);
    try {
      await guardarInteresEnApis(idUser, {
        quiereProyecto: proyecto as RespuestaProyecto,
        horasSemana: horas as RespuestaHoras,
        apis,
      });
      setYaRespondio(true);
      avisar("¡Gracias! Hemos guardado tu respuesta.", "ok");
    } catch {
      avisar(
        "No hemos podido guardar tu respuesta. Inténtalo otra vez.",
        "error",
      );
    } finally {
      setGuardando(false);
    }
  };

  if (!idUser) return null;

  return (
    <section className="vonage" aria-labelledby="interes-titulo">
      <h2 id="interes-titulo" className="vonage__titulo">
        ¿Montamos algo con estas APIs?
      </h2>
      <p className="vonage__texto">
        Estamos viendo si sale adelante un proyecto en grupo. No hay fechas ni
        formato decididos: primero queremos saber si os apetece.
      </p>

      <form onSubmit={enviar} className="vonage__form">
        <fieldset className="vonage__grupo">
          <legend className="vonage__leyenda">
            ¿Te gustaría hacer un proyecto en grupo con estas APIs?
          </legend>
          {PROYECTO.map(({ valor, texto }) => (
            <label className="vonage__opcion" key={valor}>
              <input
                type="radio"
                name="quiereProyecto"
                className="vonage__control foco-visible"
                value={valor}
                checked={proyecto === valor}
                onChange={() => setProyecto(valor)}
              />
              <span className="vonage__etiqueta">{texto}</span>
            </label>
          ))}
        </fieldset>

        <fieldset className="vonage__grupo">
          <legend className="vonage__leyenda">
            ¿Podrías comprometerte unas horas a la semana?
          </legend>
          {HORAS.map(({ valor, texto }) => (
            <label className="vonage__opcion" key={valor}>
              <input
                type="radio"
                name="horasSemana"
                className="vonage__control foco-visible"
                value={valor}
                checked={horas === valor}
                onChange={() => setHoras(valor)}
              />
              <span className="vonage__etiqueta">{texto}</span>
            </label>
          ))}
        </fieldset>

        <fieldset className="vonage__grupo">
          <legend className="vonage__leyenda">
            ¿Qué te llama más? Puedes marcar varias
          </legend>
          {LAS_APIS.map(({ valor, texto }) => (
            <label className="vonage__opcion" key={valor}>
              <input
                type="checkbox"
                className="vonage__control foco-visible"
                checked={apis.includes(valor)}
                onChange={() => alternarApi(valor)}
              />
              <span className="vonage__etiqueta">{texto}</span>
            </label>
          ))}
        </fieldset>

        {/*
          `role` según el tono: una confirmación de que todo ha ido bien no es
          una alerta, y anunciarla como tal interrumpe a quien navega con lector
          de pantalla sin que haya pasado nada malo.
        */}
        {mensaje && (
          <p
            className={
              tono === "ok" ? "vonage__mensaje--ok" : "vonage__mensaje--error"
            }
            role={tono === "ok" ? "status" : "alert"}
            tabIndex={-1}
            ref={mensajeRef}
          >
            {mensaje}
          </p>
        )}

        <button
          type="submit"
          className="vonage__boton foco-visible"
          disabled={guardando}
        >
          {yaRespondio ? "Actualizar mi respuesta" : "Enviar mi respuesta"}
        </button>
      </form>
    </section>
  );
};

export default InteresEnApis;
