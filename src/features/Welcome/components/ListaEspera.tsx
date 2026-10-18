import React, { useEffect, useState } from "react";
import {
  getListaEspera,
  guardarListaEspera,
  quitarListaEspera,
} from "../../../api/listaEsperaApi";
import {
  LARGO_IDEA,
  LARGO_OTRA_TECNOLOGIA,
  TECNOLOGIAS_LISTA_ESPERA,
} from "../../../data/tecnologiasListaEspera";
import { useFocusMessage } from "../../../hooks/useFocusMessage";
import { DatosListaEspera, TecnologiaListaEspera } from "../../../types/types";
import "./vonage.css";

/**
 * Lista de espera para futuros proyectos de la comunidad (server#147).
 *
 * Nombre y correo no se piden: salen de la cuenta. Se pregunta solo lo que el
 * equipo necesita para formar equipos: con qué tecnologías se siente cómoda
 * cada persona, si se ofrece como mentora y, si quiere, una idea de proyecto.
 *
 * Usa las clases de `vonage.css` porque son las del bloque de formulario de
 * /welcome; la lista no depende de Vonage en nada más.
 */
const ListaEspera: React.FC = () => {
  const idUser = Number(sessionStorage.getItem("userId") || 0);

  const [tecnologias, setTecnologias] = useState<TecnologiaListaEspera[]>([]);
  const [otraTecnologia, setOtraTecnologia] = useState("");
  const [mentora, setMentora] = useState(false);
  const [idea, setIdea] = useState("");
  const [inscrita, setInscrita] = useState(false);
  const [ocupada, setOcupada] = useState(false);
  const [mensaje, setMensaje] = useState("");
  const [tono, setTono] = useState<"ok" | "error">("error");
  const mensajeRef = useFocusMessage(mensaje);

  const avisar = (texto: string, cual: "ok" | "error") => {
    setTono(cual);
    setMensaje(texto);
  };

  const marcaOtra = tecnologias.includes("otra");

  useEffect(() => {
    if (!idUser) return;
    let vigente = true;
    getListaEspera(idUser)
      .then((previa) => {
        if (!vigente || !previa) return;
        setTecnologias(previa.tecnologias ?? []);
        setOtraTecnologia(previa.otraTecnologia ?? "");
        setMentora(previa.seOfreceComoMentora);
        setIdea(previa.idea ?? "");
        setInscrita(true);
      })
      .catch(() => {
        // Sin inscripción previa o sin conexión: el formulario se pinta vacío.
      });
    return () => {
      vigente = false;
    };
  }, [idUser]);

  const alternarTecnologia = (valor: TecnologiaListaEspera) =>
    setTecnologias((actuales) =>
      actuales.includes(valor)
        ? actuales.filter((t) => t !== valor)
        : [...actuales, valor]
    );

  const validar = (): string => {
    if (tecnologias.length === 0) return "Marca al menos una tecnología.";
    if (marcaOtra && !otraTecnologia.trim())
      return "Cuéntanos qué otra tecnología, o desmarca «Otra».";
    return "";
  };

  const enviar = async (e: React.FormEvent) => {
    e.preventDefault();
    const fallo = validar();
    if (fallo) {
      avisar(fallo, "error");
      return;
    }

    // Lo que no se manda queda vacío en el servidor: borrar la idea del campo
    // y guardar la borra también allí.
    const datos: DatosListaEspera = {
      tecnologias,
      seOfreceComoMentora: mentora,
      ...(marcaOtra ? { otraTecnologia: otraTecnologia.trim() } : {}),
      ...(idea.trim() ? { idea: idea.trim() } : {}),
    };

    setMensaje("");
    setOcupada(true);
    try {
      await guardarListaEspera(idUser, datos);
      avisar(
        inscrita
          ? "Hemos actualizado tu inscripción en la lista de espera."
          : "Ya estás en la lista de espera. El equipo se pondrá en contacto contigo cuando haya un proyecto nuevo.",
        "ok"
      );
      setInscrita(true);
    } catch {
      avisar(
        "No hemos podido guardar tu inscripción. Inténtalo otra vez.",
        "error"
      );
    } finally {
      setOcupada(false);
    }
  };

  const quitar = async () => {
    setMensaje("");
    setOcupada(true);
    try {
      await quitarListaEspera(idUser);
      setTecnologias([]);
      setOtraTecnologia("");
      setMentora(false);
      setIdea("");
      setInscrita(false);
      avisar(
        "Te hemos quitado de la lista de espera. Puedes volver a apuntarte cuando quieras.",
        "ok"
      );
    } catch {
      avisar("No hemos podido quitarte de la lista. Inténtalo otra vez.", "error");
    } finally {
      setOcupada(false);
    }
  };

  if (!idUser) return null;

  return (
    <section className="vonage" aria-labelledby="lista-espera-titulo">
      <h2 id="lista-espera-titulo" className="vonage__titulo">
        Lista de espera para los próximos proyectos
      </h2>
      <p className="vonage__texto">
        Si te apetece participar en los próximos proyectos de FemCoders Club,
        apúntate aquí. Con lo que nos cuentes sabremos qué equipos podemos formar
        y quién puede acompañarlos como mentora, y el equipo se pondrá en
        contacto contigo cuando haya un proyecto nuevo.
      </p>

      <form onSubmit={enviar} className="vonage__form" noValidate>
        <fieldset className="vonage__grupo">
          <legend className="vonage__leyenda">
            ¿Con qué tecnologías te sientes más cómoda? Puedes marcar varias
          </legend>
          <div className="vonage__opciones">
            {TECNOLOGIAS_LISTA_ESPERA.map(({ valor, texto }) => (
              <label className="vonage__opcion" key={valor}>
                <input
                  type="checkbox"
                  className="vonage__control foco-visible"
                  checked={tecnologias.includes(valor)}
                  onChange={() => alternarTecnologia(valor)}
                />
                <span className="vonage__etiqueta">{texto}</span>
              </label>
            ))}
          </div>

          {marcaOtra && (
            <div className="vonage__campo">
              <label htmlFor="lista-espera-otra" className="vonage__leyenda">
                ¿Qué otra tecnología?
              </label>
              <input
                id="lista-espera-otra"
                type="text"
                className="vonage__entrada foco-visible"
                value={otraTecnologia}
                maxLength={LARGO_OTRA_TECNOLOGIA}
                onChange={(e) => setOtraTecnologia(e.target.value)}
              />
            </div>
          )}
        </fieldset>

        <div className="vonage__grupo">
          <label className="vonage__opcion">
            <input
              type="checkbox"
              className="vonage__control foco-visible"
              checked={mentora}
              onChange={(e) => setMentora(e.target.checked)}
            />
            <span className="vonage__etiqueta">
              Me sentiría cómoda acompañando a un equipo como mentora
            </span>
          </label>
        </div>

        <div className="vonage__grupo">
          <label htmlFor="lista-espera-idea" className="vonage__leyenda">
            ¿Tienes una idea de proyecto? (opcional)
          </label>
          <p id="lista-espera-idea-ayuda" className="vonage__ayuda">
            Cuéntanosla en {LARGO_IDEA} caracteres como máximo. No hace falta que
            incluyas datos de contacto: ya los tenemos por tu cuenta.
          </p>
          <textarea
            id="lista-espera-idea"
            className="vonage__entrada vonage__entrada--area foco-visible"
            rows={5}
            value={idea}
            maxLength={LARGO_IDEA}
            aria-describedby="lista-espera-idea-ayuda lista-espera-idea-cuenta"
            onChange={(e) => setIdea(e.target.value)}
          />
          <p id="lista-espera-idea-cuenta" className="vonage__ayuda">
            {idea.length} de {LARGO_IDEA} caracteres
          </p>
        </div>

        {/*
          `role` según el tono, como en el resto de /welcome: una confirmación no
          es una alerta y no debería interrumpir a quien usa lector de pantalla.
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

        <div className="vonage__acciones">
          <button
            type="submit"
            className="vonage__boton foco-visible"
            disabled={ocupada}
          >
            {inscrita ? "Actualizar mi inscripción" : "Apuntarme a la lista"}
          </button>
          {inscrita && (
            <button
              type="button"
              className="vonage__boton vonage__boton--secundario foco-visible"
              onClick={quitar}
              disabled={ocupada}
            >
              Quitarme de la lista
            </button>
          )}
        </div>
      </form>
    </section>
  );
};

export default ListaEspera;
