import React, { useCallback, useEffect, useState } from "react";
import axios from "axios";
import { Loader2 } from "lucide-react";
import {
  CorreoInactivo,
  anadirCorreoInactivo,
  borrarCorreoInactivo,
  editarCorreoInactivo,
  getCorreosInactivos,
} from "../../../../api/correosInactivosApi";
import AdminTable from "../ui/AdminTable";
import ConfirmacionIrreversible from "../ui/ConfirmacionIrreversible";

/** El mensaje del servidor si lo hay; si no, uno genérico. */
const mensajeDeError = (error: unknown, porDefecto: string): string => {
  if (axios.isAxiosError(error)) {
    const mensaje = error.response?.data?.message;
    if (Array.isArray(mensaje)) return mensaje.join(" ");
    if (typeof mensaje === "string") return mensaje;
  }
  return porDefecto;
};

const formatearFecha = (iso: string): string =>
  new Date(iso).toLocaleDateString("es-ES", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
  });

const AVISO_NOTA =
  "Solo lo que sirva para reconocerla: a qué eventos vino o dónde trabajaba. Nada de datos sensibles ni opiniones.";

interface Edicion {
  id: number;
  nota: string;
  emailNuevo: string;
}

/**
 * Correos inactivos (server#144).
 *
 * Una libreta para apuntar a personas que el club conoce y cuyo correo dejó de
 * funcionar. No toca las listas de envío: esas direcciones ya se borraron de la
 * base. Sirve para reconocerlas si vuelven con otro correo.
 */
const CorreosInactivos: React.FC = () => {
  const [entradas, setEntradas] = useState<CorreoInactivo[]>([]);
  const [cargando, setCargando] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [aviso, setAviso] = useState<string | null>(null);

  const [nombre, setNombre] = useState("");
  const [email, setEmail] = useState("");
  const [nota, setNota] = useState("");
  const [guardando, setGuardando] = useState(false);

  const [edicion, setEdicion] = useState<Edicion | null>(null);
  const [porBorrar, setPorBorrar] = useState<CorreoInactivo | null>(null);

  const cargar = useCallback(async () => {
    setCargando(true);
    try {
      setEntradas(await getCorreosInactivos());
      setError(null);
    } catch (e) {
      setError(mensajeDeError(e, "No se ha podido cargar la libreta."));
    } finally {
      setCargando(false);
    }
  }, []);

  useEffect(() => {
    cargar();
  }, [cargar]);

  const anadir = async (e: React.FormEvent) => {
    e.preventDefault();
    setGuardando(true);
    setAviso(null);
    try {
      const nueva = await anadirCorreoInactivo({
        nombre: nombre.trim(),
        email: email.trim(),
        nota: nota.trim() || undefined,
      });
      setEntradas((actuales) => [nueva, ...actuales]);
      setNombre("");
      setEmail("");
      setNota("");
      setError(null);
      setAviso(`${nueva.nombre} queda apuntada en la libreta.`);
    } catch (err) {
      setError(mensajeDeError(err, "No se ha podido apuntar."));
    } finally {
      setGuardando(false);
    }
  };

  const guardarEdicion = async () => {
    if (!edicion) return;
    setGuardando(true);
    setAviso(null);
    try {
      const actualizada = await editarCorreoInactivo(edicion.id, {
        nota: edicion.nota.trim() || null,
        emailNuevo: edicion.emailNuevo.trim() || null,
      });
      setEntradas((actuales) =>
        actuales.map((e) => (e.id === actualizada.id ? actualizada : e)),
      );
      setEdicion(null);
      setError(null);
      setAviso(`Cambios guardados para ${actualizada.nombre}.`);
    } catch (err) {
      setError(mensajeDeError(err, "No se han podido guardar los cambios."));
    } finally {
      setGuardando(false);
    }
  };

  const confirmarBorrado = async () => {
    if (!porBorrar) return;
    setGuardando(true);
    setAviso(null);
    try {
      await borrarCorreoInactivo(porBorrar.id);
      setEntradas((actuales) => actuales.filter((e) => e.id !== porBorrar.id));
      setAviso(`${porBorrar.nombre} ya no está en la libreta.`);
      setPorBorrar(null);
      setError(null);
    } catch (err) {
      setError(mensajeDeError(err, "No se ha podido borrar."));
    } finally {
      setGuardando(false);
    }
  };

  return (
    <div className="space-y-6">
      <header>
        <h1 className="text-2xl font-bold" style={{ color: "#4737bb" }}>
          Correos inactivos
        </h1>
        <p className="admin-card__ayuda mt-1">
          Personas que conocemos y cuyo correo dejó de funcionar. Sus direcciones
          ya no están en las listas de envío: esto es solo para reconocerlas si
          vuelven con otro correo.
        </p>
      </header>

      {error && (
        <p className="admin-alerta admin-alerta--error" role="alert">
          {error}
        </p>
      )}
      <p
        className={aviso ? "admin-alerta admin-alerta--ok" : "sr-only"}
        role="status"
      >
        {aviso ?? ""}
      </p>

      <section className="admin-card" aria-labelledby="anadir-inactivo-titulo">
        <h2 id="anadir-inactivo-titulo" className="admin-card__titulo">
          Apuntar un correo
        </h2>
        <form onSubmit={anadir} className="grid gap-4 md:grid-cols-2">
          <div>
            <label htmlFor="inactivo-nombre" className="block text-sm font-semibold mb-1">
              Nombre
            </label>
            <input
              id="inactivo-nombre"
              type="text"
              required
              maxLength={120}
              value={nombre}
              onChange={(e) => setNombre(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg text-sm admin-focus"
            />
          </div>
          <div>
            <label htmlFor="inactivo-email" className="block text-sm font-semibold mb-1">
              Correo que dejó de funcionar
            </label>
            <input
              id="inactivo-email"
              type="email"
              required
              maxLength={180}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg text-sm admin-focus"
            />
          </div>
          <div className="md:col-span-2">
            <label htmlFor="inactivo-nota" className="block text-sm font-semibold mb-1">
              Nota (opcional)
            </label>
            <textarea
              id="inactivo-nota"
              rows={2}
              maxLength={1000}
              value={nota}
              onChange={(e) => setNota(e.target.value)}
              aria-describedby="inactivo-nota-ayuda"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg text-sm admin-focus"
            />
            <p id="inactivo-nota-ayuda" className="admin-card__ayuda mt-1">
              {AVISO_NOTA}
            </p>
          </div>
          <div className="md:col-span-2">
            <button
              type="submit"
              disabled={guardando}
              aria-busy={guardando}
              className="admin-btn admin-btn--primario admin-focus"
            >
              {guardando ? "Guardando…" : "Apuntar"}
            </button>
          </div>
        </form>
      </section>

      <section className="admin-card" aria-labelledby="libreta-titulo">
        <h2 id="libreta-titulo" className="admin-card__titulo">
          La libreta{" "}
          {!cargando && (
            <span className="text-sm font-normal">
              ({entradas.length === 1 ? "1 persona" : `${entradas.length} personas`})
            </span>
          )}
        </h2>

        {cargando ? (
          <div className="flex justify-center items-center admin-min-alto-sm">
            <Loader2 className="w-8 h-8 animate-spin" aria-hidden="true" style={{ color: "#4737bb" }} />
            <span className="sr-only">Cargando la libreta…</span>
          </div>
        ) : entradas.length === 0 ? (
          <p className="py-6 text-center text-sm">Todavía no hay nadie apuntado.</p>
        ) : (
          <AdminTable
            caption="Personas con el correo inactivo, la más reciente primero"
            columns={["Nombre", "Correo inactivo", "Nota", "Correo nuevo", "Apuntada", "Acciones"]}
          >
            {entradas.map((entrada) => {
              const editando = edicion?.id === entrada.id;
              return (
                <tr key={entrada.id}>
                  <td className="font-semibold">{entrada.nombre}</td>
                  <td className="break-all">{entrada.email}</td>
                  <td>
                    {editando ? (
                      <>
                        <label htmlFor={`nota-${entrada.id}`} className="sr-only">
                          Nota de {entrada.nombre}
                        </label>
                        <textarea
                          id={`nota-${entrada.id}`}
                          rows={2}
                          maxLength={1000}
                          value={edicion.nota}
                          onChange={(e) => setEdicion({ ...edicion, nota: e.target.value })}
                          aria-describedby="inactivo-nota-ayuda"
                          className="w-full px-2 py-1 border border-gray-300 rounded text-sm admin-focus"
                        />
                      </>
                    ) : (
                      entrada.nota ?? "—"
                    )}
                  </td>
                  <td className="break-all">
                    {editando ? (
                      <>
                        <label htmlFor={`nuevo-${entrada.id}`} className="sr-only">
                          Correo nuevo de {entrada.nombre}
                        </label>
                        <input
                          id={`nuevo-${entrada.id}`}
                          type="email"
                          maxLength={180}
                          value={edicion.emailNuevo}
                          onChange={(e) => setEdicion({ ...edicion, emailNuevo: e.target.value })}
                          className="w-full px-2 py-1 border border-gray-300 rounded text-sm admin-focus"
                        />
                      </>
                    ) : (
                      entrada.emailNuevo ?? "—"
                    )}
                  </td>
                  <td className="whitespace-nowrap">{formatearFecha(entrada.createdAt)}</td>
                  <td>
                    <div className="flex flex-wrap gap-2">
                      {editando ? (
                        <>
                          <button
                            type="button"
                            onClick={guardarEdicion}
                            disabled={guardando}
                            aria-busy={guardando}
                            className="admin-btn admin-btn--primario admin-focus"
                          >
                            Guardar
                          </button>
                          <button
                            type="button"
                            onClick={() => setEdicion(null)}
                            className="admin-btn admin-btn--suave admin-focus"
                          >
                            Cancelar
                          </button>
                        </>
                      ) : (
                        <>
                          <button
                            type="button"
                            onClick={() =>
                              setEdicion({
                                id: entrada.id,
                                nota: entrada.nota ?? "",
                                emailNuevo: entrada.emailNuevo ?? "",
                              })
                            }
                            aria-label={`Editar a ${entrada.nombre}`}
                            className="admin-btn admin-btn--suave admin-focus"
                          >
                            Editar
                          </button>
                          <button
                            type="button"
                            onClick={() => setPorBorrar(entrada)}
                            aria-label={`Borrar a ${entrada.nombre} de la libreta`}
                            className="admin-btn admin-btn--peligro admin-focus"
                          >
                            Borrar
                          </button>
                        </>
                      )}
                    </div>
                  </td>
                </tr>
              );
            })}
          </AdminTable>
        )}
      </section>

      <ConfirmacionIrreversible
        abierto={porBorrar !== null}
        titulo="Vas a borrar esta entrada de la libreta"
        sujeto={porBorrar ? `${porBorrar.nombre} · ${porBorrar.email}` : undefined}
        mensaje={
          <p>
            Se pierde lo apuntado sobre esta persona. No afecta a las listas de
            envío ni a ningún otro dato.
          </p>
        }
        textoConfirmar="Sí, borrar"
        ocupado={guardando}
        onConfirmar={confirmarBorrado}
        onCancelar={() => setPorBorrar(null)}
      />
    </div>
  );
};

export default CorreosInactivos;
